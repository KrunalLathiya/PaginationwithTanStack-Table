import { ColumnDef } from "@tanstack/react-table";
import { Post } from "../types/Post";

export const columns: ColumnDef<Post>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Body",
    accessorKey: "body",
  },
];
