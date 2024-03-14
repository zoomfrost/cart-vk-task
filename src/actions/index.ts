import { Dispatch } from "@reduxjs/toolkit";
import {
  productsFetched,
  productsFetching,
  productsFetchingError,
} from "../slices/productsSlice";
import { RequestConfig } from "../hooks/hooks";
import { IProduct } from "../shared";

const _baseUrl = "https://dummyjson.com";

export const fetchProducts =
  (request: ({ url, method, body, headers }: RequestConfig) => Promise<any>) =>
  (dispatch: Dispatch) => {
    dispatch(productsFetching());
    request({ url: `${_baseUrl}/carts/1` })
      .then((data: { id: number; products: IProduct[] }) =>
        dispatch(productsFetched(data.products))
      )
      .catch(() => dispatch(productsFetchingError()));
  };
