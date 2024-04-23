import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query(body) {
        return {
          url: "/register",
          method: "POST",
          credentials: "include",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getprofileUser.initiate(null));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query(body) {
        return {
          url: "/login",
          method: "POST",
          credentials: "include",
          body,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getprofileUser.initiate(null));
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: ["user"],
    }),
    logOut: builder.query({
      query() {
        return {
          url: "/logout",
          method: "GET",
          SameSite: "None",
          credentials: "include",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useLazyLogOutQuery } =
  authApi;
