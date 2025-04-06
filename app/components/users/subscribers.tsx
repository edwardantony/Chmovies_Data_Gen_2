"use client"
import { useState, useMemo, useEffect, useCallback } from "react";
import { MRT_ColumnDef, MRT_TableInstance } from "material-react-table";
import DataTable from "../DataTable/DataTable";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { PaginationState, SortingState, RowSelectionState } from "@tanstack/react-table";

// Define TypeScript types for the data structure
interface TData {
  id: string;
  sortBy: number;
  name: string;
  status: "active" | "inatcive";
}

// Define TypeScript types for the component state
interface DeleteConfirmation {
  open: boolean;
  id: string | null;
  multiple: boolean;
}

interface SnackbarState {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}

const Subscribers = () => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [rowData, setRowData] = useState<TData[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTopToolbar, setIsTopToolbar] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [deleteConfirmation, setDeleteConfirmation] = useState<DeleteConfirmation>({
    open: false,
    id: null,
    multiple: false,
  });
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const batchSize = 100;

  const showSnackbar = (message: string, severity: SnackbarState["severity"]) => {
    setSnackbar({ open: true, message, severity });
  };

  const fetchRowData = useCallback(async (offset: number = 0, reset: boolean = false) => {
    setIsLoading(true);
    setIsTopToolbar(true);
    try {
      // Construct the URL with query parameters
      const url = new URL("http://localhost:5000/api/table/category");
      url.searchParams.append("offset", offset.toString());
      url.searchParams.append("limit", batchSize.toString());
      
      if (globalFilter) {
        url.searchParams.append("search", globalFilter);
      }
      
      // Use fetch to make the request
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the JSON response
      const result = await response.json();

      // Update state with the fetched data
      setRowData(result.data || []);
      setTotalCount(result.total || 0);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setIsLoading(false);
      setIsTopToolbar(false);
    }
  }, [globalFilter]);

  const columns: MRT_ColumnDef<TData>[] = useMemo(
    () => [
      {
        accessorKey: "sortBy",
        header: "#",
        enableEditing: false,
        size: 20,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: { 
          align: "center",
        },
      },
      { accessorKey: "id", header: "ID", enableEditing: false, size: 30 },
      {
        accessorKey: "name",
        header: "Category Name",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.name,
          helperText: validationErrors?.name,
          onFocus: () =>
            setValidationErrors((prev) => ({ ...prev, name: "" })),
        },
        
      },
      {
        accessorKey: "status",
        header: "Status",
        muiEditTextFieldProps: {
          select: true,
          error: !!validationErrors?.status,
          helperText: validationErrors?.status,
        },
        editSelectOptions: ["active", "inactive"],
      },
    ],
    [validationErrors]
  );

  useEffect(() => {
    const offset = pagination.pageIndex * pagination.pageSize;
    fetchRowData(offset, true);
  }, [globalFilter, pagination.pageIndex, pagination.pageSize, fetchRowData]);

  const handleCreateRow = async (values: TData) => {
    const newValidationErrors = validateModule(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    setIsLoading(true);
    setIsTopToolbar(true);

    const newOrderBy =
      rowData.length > 0 ? Math.max(...rowData.map((row) => row.sortBy)) + 1 : 1;
    const newValues = { ...values, sortBy: newOrderBy };

    try {
      const response = await fetch("http://localhost:5000/api/table/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newValues),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      const newId = result.id;
      setRowData((prevData) => {
        const newData = [...prevData, { ...newValues, id: newId }];
        return newData.sort((a, b) => a.sortBy - b.sortBy);
      });
  
      setTotalCount((prevCount) => prevCount + 1);
      showSnackbar("Module added successfully", "success");
      setRowSelection({});
    } catch (error) {
      showSnackbar("Error adding module", "error");
      console.error("Error creating row:", error);
    } finally {
      setIsLoading(false);
      setIsTopToolbar(false);
    }
  };

  const handleEditRow = async (values: TData) => {
    
    const newValidationErrors = validateModule(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    setIsLoading(true);
    setIsTopToolbar(true);
    try {
      const response = await fetch(`http://localhost:5000/api/table/category/${values.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      showSnackbar("Module updated successfully", "success");
      setIsLoading(false);
      setIsTopToolbar(false);
      fetchRowData(0);
    } catch (error) {
      showSnackbar("Error updating module", "error");
      console.error("Error updating row:", error);
    }
  };

  const handleCloseDeleteDialog = () => {
    setDeleteConfirmation({ open: false, id: null, multiple: false });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleOpenDeleteDialog = async (id: string | null = null, multiple: boolean = false): Promise<void> => {
    setDeleteConfirmation({ open: true, id, multiple });
  };

  const handleDelete = async () => {
    try {
      if (!deleteConfirmation) return;
  
      let idsToDelete: string[] = [];
  
      if (deleteConfirmation.multiple) {
        idsToDelete = Object.keys(rowSelection)
          .map((rowId) => rowData[Number(rowId)]?.id)
          .filter((id): id is string => id !== undefined);
      } else if (deleteConfirmation.id) {
        idsToDelete = [deleteConfirmation.id];
      }
  
      if (idsToDelete.length === 0) {
        showSnackbar("No modules selected for deletion", "warning");
        return;
      }
  
      setIsLoading(true);
      setIsTopToolbar(true);
  
      // Delete the selected rows
      const deleteResponse = await fetch("http://localhost:5000/api/table/category/delete", {
        method: "PUT", // or "POST" if your API uses POST for deletions
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: idsToDelete }),
      });
  
      if (!deleteResponse.ok) {
        throw new Error(`HTTP error! Status: ${deleteResponse.status}`);
      }
  
      // Update state to remove deleted rows
      setRowData((prevData) => {
        const updatedData = prevData.filter((row) => !idsToDelete.includes(row.id));
  
        // **Do not reorder if all rows are deleted**
        if (updatedData.length === 0) {
          return [];
        }
  
        const reorderedData = updatedData.map((row, index) => ({
          ...row,
          sortBy: index + 1,
        }));
  
        // Send updated order to the server
        fetch("http://localhost:5000/api/table/category/reorder", {
          method: "PUT", // or "POST" if your API uses POST for reordering
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: reorderedData }),
        })
          .then((response) => {
            if (!response.ok) {
              console.error("Reorder Update Error:", response.statusText);
            }
          })
          .catch((error) => console.error("Reorder Update Error:", error));
  
        return reorderedData;
      });
  
      setTotalCount((prevCount) => prevCount - idsToDelete.length);
      setRowSelection({});
      showSnackbar(`${idsToDelete.length} module(s) deleted successfully`, "success");
    } catch (error) {
      showSnackbar("Failed to delete modules", "error");
      console.error("Delete Error:", error);
    } finally {
      setIsLoading(false);
      setIsTopToolbar(false);
      handleCloseDeleteDialog();
    }
  };
  

  const muiRowDragHandleProps = useCallback(
    ({ table }: { table: MRT_TableInstance<TData> }) => ({
      onDragEnd: async () => {
        const { draggingRow, hoveredRow } = table.getState();
  
        if (hoveredRow?.index !== undefined && draggingRow?.index !== undefined) {
            setRowData((prevData) => {
              const newData = [...prevData];
          
              // Prevent out-of-bounds access
              if (draggingRow.index < 0 || draggingRow.index >= newData.length) {
                console.error("Invalid draggingRow index:", draggingRow.index);
                return prevData;
              }
          
              if (typeof hoveredRow?.index !== "number" || hoveredRow.index < 0 || hoveredRow.index >= newData.length) {
                console.error("Invalid hoveredRow index:", hoveredRow?.index);
                return prevData;
              }
          
              // Remove the dragged item
              const [movedItem] = newData.splice(draggingRow.index, 1);
          
              // Ensure movedItem is valid before inserting
              if (!movedItem) {
                console.error("Moved item is undefined or null");
                return prevData;
              }
          
              // Insert it at the new position
              newData.splice(hoveredRow.index, 0, movedItem);
          
              // Update sorting order
              const updatedData = newData.map((item, index) => ({
                ...item,
                sortBy: index + 1,
              }));
          
              // Send updated order to the server using fetch
              fetch("http://localhost:5000/api/table/category/reorder", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedData),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                showSnackbar("Order updated successfully", "success");
              })
              .catch((error) => {
                console.error("Reorder Update Error:", error);
                showSnackbar("Error updating order", "error");
              });
        
            return updatedData;
          });
        } else {
          console.error("hoveredRow or draggingRow index is undefined", {
            hoveredRow,
            draggingRow,
          });
        }
      },
    }),
    []
  );

  return (
    <>
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white m-4">
          Subscribers List
        </h3>
      <Box m={2} p={2} border={1} borderColor={"#ccc"} borderRadius={1}>    
        <DataTable
          columns={columns}
          data={rowData}
          onCreateRow={handleCreateRow}
          onEditRow={handleEditRow}
          onDeleteRow={handleOpenDeleteDialog}
          onGlobalFilterChange={setGlobalFilter}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          onRowSelectionChange={setRowSelection}
          muiRowDragHandleProps={muiRowDragHandleProps}
          rowSelection={rowSelection}
          sorting={sorting}
          pagination={pagination}
          isLoading={isLoading}
          isTopToolbar={isTopToolbar}
          totalCount={totalCount}
        />
        <Dialog open={deleteConfirmation.open} onClose={handleCloseDeleteDialog}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            {deleteConfirmation.multiple
              ? "Are you sure you want to delete the selected modules?"
              : "Are you sure you want to delete this module?"}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
            <Button onClick={handleDelete} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

const validateModule = (data: TData) => {
  return {
    name: data?.name?.trim() ? "" : "Row Name is required",
    status: ["active", "inactive"].includes(data?.status as string) ? "" : "Invalid status",
  };
};

export default Subscribers;