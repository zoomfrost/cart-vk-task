import { Container, Grid } from "@mui/material";
import ProductList from "../ProductList/ProductList";
import SummaryPrice from "../SummaryPrice/SummaryPrice";

function App() {
  return (
    <Container sx={{ paddingTop: "100px" }} maxWidth="xl">
      <Grid container spacing={10}>
        <Grid item xs={9}>
          <ProductList />
        </Grid>
        <Grid item xs={3}>
          <SummaryPrice />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
