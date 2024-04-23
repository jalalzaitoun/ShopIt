import React, { useEffect } from "react";
import MetaData from "./Layout/metaData";
import { useGetProductsQuery } from "../redux/api/productApi";
import ProductItem from "./product/productItem";
import Loader from "./Layout/Loader";
import toast from "react-hot-toast";
import CustomPagination from "./Layout/CustemPagination";
import { useSearchParams } from "react-router-dom";
import Filters from "./Layout/Filters";

const Home = () => {
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const keyword = searchParams.get("keyword") || "";
  const min = searchParams.get("min");
  const max = searchParams.get("max");
  const category = searchParams.get("category");
  const ratings = searchParams.get("ratings");
  const params = { page, keyword };
  min !== null && (params.min = min);
  max !== null && (params.max = max);
  category !== null && (params.category = category);
  ratings !== null && (params.ratings = ratings);

  const { data, isLoading, isError, error } = useGetProductsQuery(params);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError]);

  const colmnSize = keyword ? 4 : 3;

  if (isLoading) return <Loader></Loader>;
  return (
    <>
      <MetaData title={"buy best Products online"}></MetaData>
      <div className="row">
        {keyword && (
          <div className="col-6 col-md-3 mt-5">
            <Filters />
          </div>
        )}
        <div
          className={keyword ? "col-6 col-md-9" : "col-12 col-sm-6 col-md-12"}
        >
          <h1 id="products_heading" className="text-secondary">
            {keyword
              ? `${data.products.length} Products found with keyword: ${keyword}`
              : " Latest Products"}
          </h1>
          <section id="products" className="mt-5">
            <div className="row">
              {data?.products?.map((product) => (
                <ProductItem product={product} colmnSize={colmnSize} />
              ))}
            </div>
          </section>
          <CustomPagination
            resPerPage={data?.resPerPage}
            filteredProductsCount={data?.filteredProductsCount}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
