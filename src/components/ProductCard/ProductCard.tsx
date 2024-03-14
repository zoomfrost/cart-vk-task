import { Box, Button, Stack, Typography } from "@mui/material";
import { IProduct } from "../../shared";

import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../hooks/hooks";
import {
  productDeleted,
  productsChangeQuantity,
} from "../../slices/productsSlice";

const ProductCard = ({ title, price, quantity, thumbnail, id }: IProduct) => {
  const dispatch = useAppDispatch();

  const handleDecrementProduct = () => {
    dispatch(productsChangeQuantity({ id, count: -1 }));
  };

  const handleIncrementProduct = () => {
    dispatch(productsChangeQuantity({ id, count: 1 }));
  };

  const handleDeleteProduct = () => {
    dispatch(productDeleted(id));
  };

  const minQuantity = 1;
  const maxQuantity = 10;
  return (
    <Box
      padding={2}
      bgcolor="whiteSmoke"
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap={3}
    >
      <Box>
        <img
          style={{ objectFit: "contain", width: '100%', height: '100%'}}
          src={thumbnail}
          alt={title}
        />
      </Box>
        <Box>
          <Typography variant="body1">{title}</Typography>
        </Box>
      <Box>
        <Stack
          direction="column"
          spacing={5}
          alignItems="center"
          justifyContent="space-around"
        >
          <Stack
            width="100px"
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              disabled={quantity === minQuantity}
              onClick={handleDecrementProduct}
            >
              <RemoveIcon />
            </Button>
            <Typography  color="InfoText">
              {quantity}
            </Typography>
            <Button
              disabled={quantity === maxQuantity}
              onClick={handleIncrementProduct}
            >
              <AddIcon />
            </Button>
          </Stack>
          <Button onClick={handleDeleteProduct}>
            <DeleteIcon />
          </Button>
        </Stack>
      </Box>
      <Box textAlign="center">
        <Typography>{price * quantity} руб.</Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
