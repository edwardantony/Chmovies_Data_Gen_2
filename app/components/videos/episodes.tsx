"use client"
import { useState, useMemo, useEffect, useCallback } from "react";
import { TextField } from '@mui/material';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
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
import dayjs, { Dayjs } from "dayjs";

// Define TypeScript types for the data structure
interface TData {
  id: string;
  contentID: string;
  episodeNumber: number;
  title: string;
  description: string;
  duration: string;
  releaseDate: Date;
  status: "active" | "inatcive";
  sortBy: number;
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

const Episodes = () => {
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [rowData, setRowData] = useState<TData[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 5 });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTopToolbar, setIsTopToolbar] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  //const [releaseDate, setReleaseDate] = useState<Date | null>(null);
  //const [duration, setDuration] = useState<number | null>(null);
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

  interface TimeEditorProps {
    cell: any; // Replace with the correct type
    column: any; // Replace with the correct type
    table: any; // Replace with the correct type
  }
  
  const TimeEditor: React.FC<TimeEditorProps> = ({ cell, column, table }) => {
    const initialSeconds = cell.getValue();
    const [time, setTime] = useState(dayjs().startOf("day").add(initialSeconds, "second"));
  
    const handleChange = (newTime: dayjs.Dayjs | null) => {
      if (!newTime) return;
  
      const totalSeconds = newTime.hour() * 3600 + newTime.minute() * 60 + newTime.second();
      setTime(newTime);
      setDuration(totalSeconds)
    };
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Select Time"
          value={time}
          onChange={handleChange}
          views={["hours", "minutes", "seconds"]}
          format="HH:mm:ss"
          slotProps={{ textField: { size: "small", fullWidth: true } }}
        />
      </LocalizationProvider>
    );
  };

  interface ReleaseDateProps {
    value: string | null;
    onChange: (newValue: string | null) => void;
  }
  
  const ReleaseDate: React.FC<ReleaseDateProps> = ({ value, onChange }) => {
    const dateValue = value ? dayjs(value) : null;
  
    const handleChange = (newDate: Dayjs | null) => {
      const formattedDate = newDate ? newDate.format("YYYY-MM-DD") : null;
      onChange(formattedDate); // Propagate the formatted date back to the table
    };
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dateValue}
          onChange={handleChange}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
              error: !dateValue,
              helperText: !dateValue ? "Release date is required" : "",
            },
          }}
        />
      </LocalizationProvider>
    );
  };
 
  const fetchRowData = useCallback(async (offset: number = 0, reset: boolean = false) => {
    setIsLoading(true);
    setIsTopToolbar(true);
    try {
      // Construct the URL with query parameters
      const url = new URL("http://localhost:5000/api/table/episode");
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
      console.log(result.data)
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
        size: 10,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "id",
        header: "ID",
        enableEditing: false,
        columnVisibility: false,
        size: 10,
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "contentID",
        header: "Title ID",
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.contentID,
          helperText: validationErrors?.contentID,
          onFocus: () =>
            setValidationErrors((prev) => ({ ...prev, contentID: "" })),
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "episodeNumber",
        header: "E(No)",
        size: 10,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.episodeNumber,
          helperText: validationErrors?.episodeNumber,
          onFocus: () =>
            setValidationErrors((prev) => ({ ...prev, episodeNumber: "" })),
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        muiTableBodyCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "title",
        header: "Episode Title",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.title,
          helperText: validationErrors?.title,
          onFocus: () =>
            setValidationErrors((prev) => ({ ...prev, title: "" })),
        },
      },
      {
        accessorKey: "description",
        header: "Description",
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.description,
          helperText: validationErrors?.description,
          onFocus: () =>
            setValidationErrors((prev) => ({ ...prev, description: "" })),
        },
      },
      // {
      //   accessorKey: "releaseDate",
      //   header: "Release Date",
      //   enableEditing: true,
      //   Cell: ({ cell }) => {
      //     const dateValue = cell.getValue<string>();
      //     return dateValue ? dayjs(dateValue).format("DD/MM/YYYY") : "N/A";
      //   },
      //   Edit: ({ cell, column, table }) => {
      //     const initialDate = cell.getValue<string>() ? new Date(cell.getValue<string>()) : null;
      //     const [date, setDate] = useState<Date | null>(initialDate);
    
      //     return (
      //       <DatePicker
      //         selected={date}
      //         onChange={(newDate) => {
      //           setDate(newDate);
      //           table.options.meta?.updateData(cell.row.index, column.id, newDate ? newDate.toISOString() : null);
      //         }}
      //         dateFormat="dd/MM/yyyy"
      //       />
      //     );
      //   },
      // },
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
      {
        accessorKey: "releaseDate",
        header: "Release Date",
        enableEditing: true,
        Cell: ({ cell }) => {
          const dateValue = cell.getValue<string>();
          return dateValue ? dayjs(dateValue).format("DD/MM/YYYY") : "N/A";
        },
        Edit: ({ cell, column, table }) => {
          // Convert string date to Date object
          const initialDate = cell.getValue<string>() ? new Date(cell.getValue<string>()) : null;
          const [date, setDate] = useState<Date | null>(initialDate);
    
          return (
            <DatePicker
              selected={date}
              onChange={(newDate: Date | null) => {
                setDate(newDate);
                table.options.meta?.updateData(
                  cell.row.index,
                  column.id,
                  newDate ? newDate.toISOString() : null
                );
              }}
              dateFormat="dd/MM/yyyy"
            />
          );
        },
        enableEditing: false,
        enableSorting: false,
      },
      {
        accessorKey: "duration",
        header: "Duration (HH:mm:ss)",
        Cell: ({ cell }) => {
          const seconds = cell.getValue<number>();
          const hours = Math.floor(seconds / 3600);
          const minutes = Math.floor((seconds % 3600) / 60);
          const secs = seconds % 60;
          return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
        },
        Edit: TimeEditor,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.duration,
          helperText: validationErrors?.duration,
          onFocus: () =>
            setValidationErrors((prev) => ({ ...prev, duration: "" })),
        },
        enableEditing: false,
        enableSorting: false,
      },
      {
        accessorKey: "subtitles",
        header: "Subtitles",
        Cell: ({ cell }) => {
          const subtitles = cell.getValue<string[]>() || [];
          const Subtitles: Record<string, string> = {
            ml: "Malayalam",
            hi: "Hindi",
            en: "English",
            ta: "Tamil",
            kn: "Kannada",
            te: "Telugu",
          };
          const bgColors = [
            "bg-teal-500",
            "bg-purple-500",
            "bg-indigo-500",
            "bg-gray-500",
            "bg-blue-500",
            "bg-pink-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-red-500",
          ];
          return (
            <div className="grid grid-cols-4 gap-1 justify-center mx-auto text-center">
              {subtitles.map((subtitle, index) => (
                <span
                  key={subtitle}
                  title={Subtitles[subtitle]}
                  className={`p-1 ${bgColors[index % bgColors.length]} text-white w-auto text-[10px]`}
                >
                  {subtitle.toUpperCase()}
                </span>
              ))}
            </div>
          );
        },
        enableEditing: false,
        enableSorting: false,
      },
      {
        accessorKey: "audios",
        header: "Audios",
        Cell: ({ cell }) => {
          const audios = cell.getValue<string[]>() || [];
          const Languages: Record<string, string> = {
            ml: "Malayalam",
            hi: "Hindi",
            en: "English",
            ta: "Tamil",
            kn: "Kannada",
            te: "Telugu",
          };
          const bgColors = [
            "bg-teal-500",
            "bg-purple-500",
            "bg-indigo-500",
            "bg-gray-500",
            "bg-blue-500",
            "bg-pink-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-red-500",
          ];
          return (
            <div className="grid grid-cols-4 gap-1 justify-center mx-auto text-center">
              {audios.map((audio, index) => (
                <span
                  key={audio}
                  title={Languages[audio]}
                  className={`p-1 ${bgColors[index % bgColors.length]} text-white w-auto m-1 text-[10px]`}
                >
                  {audio.toUpperCase()}
                </span>
              ))}
            </div>
          );
        },
        enableEditing: false,
        enableSorting: false,
      },
      {
        accessorKey: "countryAvailability",
        header: "Countries",
        Cell: ({ cell }) => {
          const languages = cell.getValue<string[]>() || [];
          const countryNames: Record<string, string> = {
            IN: "India",
            US: "United States",
            UK: "United Kingdom",
            AU: "Australia",
            CA: "Canada",
          };
          const bgColors = [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-indigo-500",
            "bg-gray-500",
            "bg-teal-500",
          ];
          return (
            <div className="grid grid-cols-4 gap-1 justify-center mx-auto text-center">
              {languages.map((lang, index) => (
                <span
                  key={lang}
                  title={countryNames[lang.toUpperCase()] || lang}
                  className={`p-1 ${bgColors[index % bgColors.length]} text-white w-auto text-[10px]`}
                >
                  {lang.toUpperCase()}
                </span>
              ))}
            </div>
          );
        },
        enableEditing: false,
        enableSorting: false,
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
      const response = await fetch("http://localhost:5000/api/table/episode", {
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
    console.log("POST DATA", values)
    const newValidationErrors = validateModule(values);
    console.log(newValidationErrors)
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    setIsLoading(true);
    setIsTopToolbar(true);
    try {
      const response = await fetch(`http://localhost:5000/api/table/episode/${values.id}`, {
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
      const deleteResponse = await fetch("http://localhost:5000/api/table/episode/delete", {
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
        fetch("http://localhost:5000/api/table/episode/reorder", {
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
              fetch("http://localhost:5000/api/table/episode/reorder", {
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
        Episodes List
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
    contentID: data?.contentID? "" : "Row Content ID is required",
    episodeNumber: data?.episodeNumber ? "" : "Row Episode No. is required",
    title: data?.title?.trim() ? "" : "Row Title is required",
    description: data?.description?.trim() ? "" : "Row Description is required",
    duration: data?.duration? "" : "Row Duration is required",
    releaseDate: data?.releaseDate? "" : "Row Release Date is required",
    status: ["active", "inactive"].includes(data?.status as string) ? "" : "Invalid status",
  };
};


export default Episodes;