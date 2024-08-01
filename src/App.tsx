import { Container, Typography, CircularProgress } from "@mui/material";
import { DataTable } from "./components/DataTable";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { columns } from "./config/tableColumns";

function App() {
  const { data, isLoading, error } = useFetchPosts();

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <DataTable data={data} columns={columns} />
    </Container>
  );
}

export default App;
