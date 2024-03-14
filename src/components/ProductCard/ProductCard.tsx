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
  return (
    <Stack
      width="100%"
      alignItems="start"
      justifyContent="space-between"
      direction="row"
      bgcolor="white"
      padding={2}
    >
      <Box width="200px" height="200px">
        <img
          style={{ objectFit: "contain", width: "200px", height: "200px" }}
          src={thumbnail}
          alt={title}
        />
      </Box>
      <Box width="200px">
        <Typography>{title}</Typography>
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
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button disabled={quantity === 1} onClick={handleDecrementProduct}>
              <RemoveIcon />
            </Button>
            <Typography variant="body1" color="InfoText">
              {quantity}
            </Typography>
            <Button disabled={quantity === 10} onClick={handleIncrementProduct}>
              <AddIcon />
            </Button>
          </Stack>
          <Button onClick={handleDeleteProduct}>
            <DeleteIcon />
          </Button>
        </Stack>
      </Box>
      <Box width="100px" textAlign="center">
        <Typography>{price * quantity} руб.</Typography>
      </Box>
    </Stack>
  );
};

export default ProductCard;
