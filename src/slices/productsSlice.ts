import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../shared";

type loadingStatusOptions = "idle" | "loading" | "error";

interface IState {
  productsLoadingStatus: loadingStatusOptions;
  products: [] | IProduct[];
}

interface IChangeQuantityProduct {
  id: number;
  count: number;
}

const initialState: IState = {
  products: [],
  productsLoadingStatus: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFetching: (state) => {
      state.productsLoadingStatus = "loading";
    },
    productsFetched: (state, action: PayloadAction<IProduct[]>) => {
      state.productsLoadingStatus = "idle";
      state.products = action.payload;
    },
    productsFetchingError: (state) => {
      state.productsLoadingStatus = "error";
    },
    productsChangeQuantity: (
      state,
      action: PayloadAction<IChangeQuantityProduct>
    ) => {
      // state.products = state.products.map((product) => {
      //   if (product.id === action.payload.id) {
      //     product.quantity += action.payload.count;
      //   }
      //   return product;
      // });
      state.products.filter(
        (product) => product.id === action.payload.id
      )[0].quantity += action.payload.count;
    },
    productDeleted: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

const { actions, reducer } = productsSlice;

export default reducer;
export const {
  productsFetching,
  productsFetched,
  productsFetchingError,
  productsChangeQuantity,
  productDeleted,
} = actions;
