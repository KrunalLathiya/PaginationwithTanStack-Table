import { TablePagination } from "@mui/material";
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<T> {
  table: Table<T>;
  dataLength: number;
}

export function DataTablePagination<T>({
  table,
  dataLength,
}: DataTablePaginationProps<T>) {
  return (
    <TablePagination
      component="div"
      count={table.getFilteredRowModel().rows.length}
      page={table.getState().pagination.pageIndex}
      onPageChange={(_, page) => table.setPageIndex(page)}
      rowsPerPage={table.getState().pagination.pageSize}
      onRowsPerPageChange={(e) => table.setPageSize(Number(e.target.value))}
      rowsPerPageOptions={[5, 10, 25, { label: "All", value: dataLength }]}
    />
  );
}
