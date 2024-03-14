import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector, useHttp } from "../../hooks/hooks";
import { RootState } from "../../store";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProducts } from "../../actions";
import { useEffect } from "react";
import Spinner from "../spinner/Spinner";

const ProductList = () => {
  const productsLoadingStatus = useAppSelector(
    (state) => state.products.productsLoadingStatus
  );

  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  const { request } = useHttp();
  useEffect(() => {
    dispatch(fetchProducts(request));
  }, []);

  if (productsLoadingStatus === "loading") return <Spinner />;
  if (productsLoadingStatus === "error")
    return <Typography textAlign="center">Произошла ошибка</Typography>;
  if (products.length === 0) {
    return (
      <Box textAlign="center">
        <Typography variant="h4">Корзина пуста</Typography>
      </Box>
    );
  }
  return (
    <Stack
      sx={{ border: "1px solid black", padding: "3rem" }}
      alignItems="center"
      direction="column"
      gap={6}
      bgcolor="#f1e2f8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Stack>
  );
};

export default ProductList;
