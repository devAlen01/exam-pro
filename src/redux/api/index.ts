import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API}`,
});

const baseQueryExtendet: BaseQueryFn = async (args, api, extraOPtions) => {
  const result = await baseQuery(args, api, extraOPtions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtendet,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ["todo"],
});
