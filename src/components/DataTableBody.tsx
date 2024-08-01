import { TableBody, TableRow, TableCell } from "@mui/material";
import { flexRender, Table } from "@tanstack/react-table";

interface DataTableBodyProps<T> {
  table: Table<T>;
}

export function DataTableBody<T>({ table }: DataTableBodyProps<T>) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
