import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api/v1" }),
  tagTypes: ["Product", "AdminProducts", "Reviews"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => ({
        url: "/products",
        params: {
          page: params?.page,
          keyword: params?.keyword,
          category: params?.category,
          "price[gte]": params.min,
          "price[lte]": params.max,
          "ratings[gte]": params?.ratings,
        },
        mode: "cors",
        method: "GET",
      }),
    }),
    getProductDetails: builder.query({
      query(id) {
        return {
          url: `/products/${id}`,
          credentials: "include",
        };
      },
      providesTags: ["Product"],
    }),
    submitReview: builder.mutation({
      query(body) {
        return {
          url: "/reviews",
          method: "PUT",
          body,
          credentials: "include",
        };
      },
      invalidatesTags: ["Product"],
    }),

    canUserReview: builder.query({
      query(productId) {
        return {
          url: `/can_review/?productId=${productId}`,

          credentials: "include",
        };
      },
    }),
    getAdminProducts: builder.query({
      query() {
        return {
          url: `/admin/products`,
          credentials: "include",
        };
      },
      providesTags: ["AdminProducts"],
    }),
    createProduct: builder.mutation({
      query(body) {
        return {
          url: "/admin/products",
          method: "POST",
          body,
          credentials: "include",
        };
      },
      invalidatesTags: ["AdminProducts"],
    }),
    updateProduct: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/products/${id}`,
          credentials: "include",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product", "AdminProducts"],
    }),
    uploadProductImages: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/products/${id}/upload_images`,
          credentials: "include",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProductImage: builder.mutation({
      query({ id, body }) {
        return {
          url: `/admin/products/${id}/delete_image`,
          credentials: "include",
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query(id) {
        return {
          credentials: "include",
          url: `/admin/products/${id}`,
          method: "delete",
        };
      },
      invalidatesTags: ["AdminProducts"],
    }),
    getProductReviews: builder.query({
      query(productId) {
        return {
          url: `/reviews?id=${productId}`,
          credentials: "include",
        };
      },
      providesTags: ["Reviews"],
    }),
    DeleteReviews: builder.mutation({
      query({ productId, id }) {
        return {
          url: `/admin/reviews?productId=${productId}&id=${id}`,
          credentials: "include",
          method: "DELETE",
        };
      },
      invalidatesTags: ["Reviews"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSubmitReviewMutation,
  useGetProductDetailsQuery,
  useCanUserReviewQuery,
  useGetAdminProductsQuery,
  useCreateProductMutation,
  useDeleteProductImageMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useUploadProductImagesMutation,
  useLazyGetProductReviewsQuery,
  useDeleteReviewsMutation,
} = productApi;
