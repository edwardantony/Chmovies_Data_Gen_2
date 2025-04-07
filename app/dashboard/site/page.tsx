'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  MRT_ColumnDef,
  MRT_PaginationState,
  MRT_SortingState,
  MRT_RowSelectionState,
} from 'material-react-table';
//import { ModelSortDirection } from '@/graphql/API';
import { generateClient } from 'aws-amplify/api';
import { listGenres } from '@/graphql/queries';
import { createGenre, updateGenre, deleteGenre } from '@/graphql/mutations';
import type { Schema } from '../../../amplify/data/resource';
import type { CreateGenreInput, UpdateGenreInput } from '@/graphql/API';
import DataTable from '../../components/DataTable/DataTable';
import ClientLayout from '../../ClientLayout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import debounce from 'lodash/debounce';

type Genre = Schema['Genre']['type'];
const client = generateClient();

const GenreDashboard = () => {
  const [allData, setAllData] = useState<Genre[]>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showProgressBars, setShowProgressBars] = useState(false);

  const fetchAllGenres = async () => {
    setIsLoading(true);
    setShowProgressBars(true);

    try {
      let nextToken: string | null = null;
      let allItems: Genre[] = [];

      do {
        const result: any = await client.graphql({
          query: listGenres,
          variables: {
           // sortDirection: ModelSortDirection.ASC,
            limit: 1000,
            nextToken,
          },
        });
        console.log(result)
        const items = result?.data?.listGenres.items || [];
        const cleanedItems = items.map(({ __typename, ...rest }: any) => rest);
        allItems = [...allItems, ...cleanedItems];
        nextToken = result?.data?.listGenres.nextToken;
      } while (nextToken);

      setAllData(allItems);
    } catch (err) {
      toast.error('Failed to fetch genres');
      console.error('GraphQL fetch error', err);
    } finally {
      setIsLoading(false);
      setShowProgressBars(false);
    }
  };

  useEffect(() => {
    fetchAllGenres();
  }, []);

  const debouncedSetGlobalFilter = useCallback(
    debounce((value: string) => {
      setGlobalFilter(value);
    }, 300),
    [setGlobalFilter],
  );

  const filteredData = useMemo(() => {
    return globalFilter
      ? allData.filter((item) =>
          item.name?.toLowerCase().includes(globalFilter.toLowerCase()),
        )
      : allData;
  }, [allData, globalFilter]);

  const sortedData = useMemo(() => {
    if (sorting.length === 0) return filteredData;

    return [...filteredData].sort((a, b) => {
      for (let i = 0; i < sorting.length; i++) {
        const { id, desc } = sorting[i];
        const aVal = a[id as keyof Genre];
        const bVal = b[id as keyof Genre];

        if (aVal === bVal) continue;
        if (aVal == null) return desc ? -1 : 1;
        if (bVal == null) return desc ? 1 : -1;

        return desc
          ? String(bVal).localeCompare(String(aVal))
          : String(aVal).localeCompare(String(bVal));
      }
      return 0;
    });
  }, [filteredData, sorting]);

  const paginatedData = useMemo(() => {
    const start = pagination.pageIndex * pagination.pageSize;
    return sortedData.slice(start, start + pagination.pageSize);
  }, [sortedData, pagination]);

  const handleCreate = async (values: Genre) => {
    try {
      const input: CreateGenreInput = {
        name: values.name,
        sortOrder: allData.length + 1,
      };
      const response = await client.graphql({
        query: createGenre,
        variables: { input },
      });

      const created = (response).data.createGenre;
      setAllData((prev) => [...prev, created]);
      toast.success('Genre created!');
    } catch (err) {
      console.error('Create Error', err);
      toast.error('Failed to create genre');
    }
  };

  const handleUpdate = async (values: Genre) => {
    try {
      const response = await client.graphql({
        query: updateGenre,
        variables: { input: values as UpdateGenreInput },
      });

      const updated = (response).data.updateGenre;
      setAllData((prev) =>
        prev.map((item) => (item.id === updated.id ? updated : item)),
      );
      toast.success('Genre updated!');
    } catch (err) {
      console.error('Update Error', err);
      toast.error('Failed to update genre');
    }
  };

  const handleDelete = async (id: string | null, isBulkDelete: boolean) => {
    try {
      const idsToDelete: string[] = isBulkDelete
        ? Object.keys(rowSelection)
            .map((idx) => paginatedData[Number(idx)]?.id)
            .filter((id): id is string => typeof id === 'string')
        : id
        ? [id]
        : [];
  
      if (idsToDelete.length === 0) {
        toast.info('No genres selected for deletion');
        return;
      }
  
      await Promise.all(
        idsToDelete.map((id) =>
          client.graphql({
            query: deleteGenre,
            variables: { input: { id } },
          }),
        ),
      );
  
      setAllData((prev) => prev.filter((genre) => !idsToDelete.includes(genre.id)));
      setRowSelection({});
      toast.success('Genre(s) deleted!');
    } catch (err) {
      console.error('Delete Error', err);
      toast.error('Failed to delete genre(s)');
    }
  };

  const columns: MRT_ColumnDef<Genre>[] = [
    { accessorKey: 'id', header: 'ID', enableSorting: false, enableEditing: false },
    { accessorKey: 'name', header: 'Genre Name' },
    { accessorKey: 'sortOrder', header: 'Sort Order', enableEditing: false },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      enableEditing: false,
      enableSorting: false,
      Cell: ({ cell }) => {
        const value = cell.getValue<string>();
        return value ? new Date(value).toLocaleString() : '-';
      },
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      enableEditing: false,
      enableSorting: false,
      Cell: ({ cell }) => {
        const value = cell.getValue<string>();
        return value ? new Date(value).toLocaleString() : '-';
      },
    },
  ];

  return (
    <ClientLayout>
      <main className="p-4">
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Genre Dashboard</h1>
        <DataTable<Genre>
          columns={columns}
          data={paginatedData}
          pagination={pagination}
          sorting={sorting}
          globalFilter={globalFilter}
          rowSelection={rowSelection}
          isLoading={isLoading}
          showProgressBars={showProgressBars}
          totalCount={filteredData.length}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          onGlobalFilterChange={debouncedSetGlobalFilter}
          onRowSelectionChange={setRowSelection}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <ToastContainer position="bottom-right" autoClose={2500} hideProgressBar />
      </main>
    </ClientLayout>
  );
};

export default GenreDashboard;
