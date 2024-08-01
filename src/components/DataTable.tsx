import { TableContainer, Paper, Table } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";

import { useDataTable } from "../hooks/useDataTable";

import { DataTableHead } from "./DataTableHead";
import { DataTableBody } from "./DataTableBody";
import { DataTablePagination } from "./DataTablePagination";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const table = useDataTable({ data, columns });

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <DataTableHead table={table} />
          <DataTableBody table={table} />
        </Table>
      </TableContainer>
      <DataTablePagination table={table} dataLength={data.length} />
    </>
  );
}
