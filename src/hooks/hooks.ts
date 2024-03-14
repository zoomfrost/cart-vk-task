import { useCallback } from "react";
import { AppDispatch, RootState } from "../store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

type HTTPRequestMethods = "GET" | "POST" | "PATCH" | "DELETE";

interface HTTPHeaders {
  [key: string]: string;
}

export interface RequestConfig {
  url: string;
  method?: HTTPRequestMethods;
  body?: string | null;
  headers?: HTTPHeaders;
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useHttp = () => {
  const request = useCallback(
    async ({
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" },
    }: RequestConfig) => {
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );
  return { request };
};
