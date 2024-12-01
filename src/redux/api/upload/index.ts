import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    upload: build.mutation<UPLOAD.uploadResponse, UPLOAD.uploadRequest>({
      query: (data) => ({
        url: "/upload/file",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadMutation } = api;
