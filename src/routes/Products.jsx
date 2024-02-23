import { useEffect, useState } from "react";
import { Filter, ProductCard } from "../components";
import OutOfStockCard from "../components/cards/OutOfStockCard";
import data from "../utils/data";
import { filterProducts } from "../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { FILTERED_PRODUCT_LIST_HANDLER } from "../redux/productSlice";

const Products = () => {
  const dispatch = useDispatch()
  const {
    sort,
    priceRange,
    byStock,
    byNotebook,
    byBookmark,
    byRating,
    searchQuery,
  } = useSelector(store => store.filter);

  const filteredProductList = useSelector((store) => store.product.filteredProductList);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const filteredData = filterProducts(
      data,
      priceRange,
      byRating,
      searchQuery,
      sort,
      byStock,
      byBookmark,
      byNotebook
    );

    dispatch(FILTERED_PRODUCT_LIST_HANDLER(filteredData));
    setIsLoading(false)

  }, [isLoading, dispatch, priceRange,
    byRating,
    searchQuery,
    sort,
    byStock,
    byBookmark,
    byNotebook]);


  return (
    <div className="flex gap-6">
      <div>
        <Filter />
      </div>

     <>
     {
      isLoading || filteredProductList.length === 0 ? <h1 className="mx-8">No Products Found</h1> : (
        <div className="my-4 flex flex-wrap mx-8 gap-8 ">
        {filteredProductList.map((product) => {
          const {id, availablity } = product;

          return (
            <div key={id}>
              {availablity === "In Stock" ? (
                <ProductCard productInfo={product}  />
              ) : (
                <OutOfStockCard productInfo={product} />
              )}
            </div>
          );
        })}
      </div>
      )
     }
     </>
    </div>
  );
};

export default Products;
