import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <Box width={300} textAlign="center" margin="0 auto">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
