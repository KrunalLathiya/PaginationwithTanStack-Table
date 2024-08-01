import { TableHead, TableRow, TableCell } from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";

interface DataTableHeadProps<T> {
  table: Table<T>;
}

export function DataTableHead<T>({ table }: DataTableHeadProps<T>) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}
