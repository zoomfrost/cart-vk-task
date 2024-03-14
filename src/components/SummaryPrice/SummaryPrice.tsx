import { Typography } from "@mui/material";
import { useAppSelector } from "../../hooks/hooks";
import { IProduct } from "../../shared";
import Spinner from "../spinner/Spinner";

const SummaryPrice = () => {
  const products: IProduct[] = useAppSelector(
    (state) => state.products.products
  );
  const productsLoadingStatus = useAppSelector(
    (state) => state.products.productsLoadingStatus
  );
  const price = products.reduce((totalPrice: number, product: IProduct) => {
    return totalPrice + product.price * product.quantity;
  }, 0);
  if (productsLoadingStatus === "loading") {
    return <Spinner />;
  } else if (productsLoadingStatus === "error") {
    return (
      <Typography variant="h4">Произошла ошибка при загрузке цены</Typography>
    );
  }

  return <Typography variant="h5">Итого: {price} руб.</Typography>;
};

export default SummaryPrice;
