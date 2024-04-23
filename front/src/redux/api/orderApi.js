import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  tagTypes: ["Order", "AdminOrders"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  endpoints: (builder) => ({
    createNewOrder: builder.mutation({
      query(body) {
        return {
          url: "/orders/new",
          method: "POST",
          credentials: "include",
          body,
        };
      },
    }),
    myOrders: builder.query({
      query() {
        return {
          url: "/me/orders",
          credentials: "include",
        };
      },
    }),
    orderDetails: builder.query({
      query(id) {
        return {
          url: `/orders/${id}`,
          credentials: "include",
        };
      },
      providesTags: ["Order"],
    }),
    // orderDetails: builder.query({
    //   query: (id) => `/orders/${id}`,
    // }),
    stripeCheckoutSession: builder.mutation({
      query(body) {
        return {
          url: "/payment/checkout_session",
          method: "POST",
          credentials: "include",
          body,
        };
      },
    }),
    getDashboardSales: builder.query({
      query({ startDate, endDate }) {
        return {
          url: `/admin/get_sales/?startDate=${startDate}&endDate=${endDate}`,
          credentials: "include",
        };
      },
    }),

    getAdminOrders: builder.query({
      query() {
        return {
          url: "/admin/orders",
          credentials: "include",
        };
      },
      providesTags: ["AdminOrders"],
    }),
    updateOrder: builder.mutation({
      query({ id, body }) {
        return {
          credentials: "include",
          url: `/admin/orders/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Order"],
    }),
    deleteOrder: builder.mutation({
      query(id) {
        return {
          url: `/admin/orders/${id}`,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ["AdminOrders"],
    }),
  }),
});

export const {
  useCreateNewOrderMutation,
  useStripeCheckoutSessionMutation,
  useMyOrdersQuery,
  useOrderDetailsQuery,
  useLazyGetDashboardSalesQuery,
  useGetAdminOrdersQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
