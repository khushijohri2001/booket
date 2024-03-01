import { useDispatch, useSelector } from "react-redux";
import { ClearButton } from "./Buttons";
import {
  CLEAR_FILTER,
  FILTER_BY_BOOKMARK,
  FILTER_BY_NOTEBOOK,
  FILTER_BY_PRICE_RANGE,
  FILTER_BY_RATING,
  FILTER_BY_STOCK,
  SORT_BY_PRICE,
} from "../redux/filterSlice";
import RatingSlider from "./RatingSlider";
import { useEffect, useState } from "react";

const Filter = () => {
  const { byStock, priceRange, sort, byNotebook, byBookmark, byRating } =
    useSelector((store) => store.filter);

  const dispatch = useDispatch();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isMobileView = useSelector(store => store.mediaMatch.isMobileView)

  useEffect(() => {
    isMobileView ? setIsFilterOpen(false) : setIsFilterOpen(true)
    
  }, [isMobileView])

  return (
    <div className={`ml-2 my-5 p-2 border-none max-h-auto w-56 sticky top-44 z-50 bg-[#eec6c6] font-sans max-sm:top-32 max-sm:mx-0 max-sm:my-0 max-sm:fixed max-sm:w-screen`}>
      <div className="flex justify-between items-center">
        <p className="p-2 text-xl font-bold text-rose-900 max-sm:text-lg">Filters</p>
        <button
          className="hidden max-sm:block"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? (
            <i class="fa-solid fa-angles-up"></i>
          ) : (
            <i class="fa-solid fa-angles-down"></i>
          )}
        </button>
      </div>
      {isFilterOpen && (
        <>
          <div className="my-4 mx-2 max-sm:mt-2">
            <ClearButton onClick={() => dispatch(CLEAR_FILTER())} />
          </div>

          <hr color="grey" size="1" />

          <div className="text-sm">
            {/* Categories */}
            <div className="p-2">
              <p className=" font-bold mb-3">CATEGORIES</p>

              <div class="flex items-center mb-4">
                <input
                  type="checkbox"
                  value="Notebook"
                  checked={byNotebook}
                  onClick={() => {
                    dispatch(FILTER_BY_NOTEBOOK());
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label class="ms-2 text-sm font-medium text-gray-900 ">
                  Reusable Notebook
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  type="checkbox"
                  value="Bookmark"
                  checked={byBookmark}
                  onClick={() => {
                    dispatch(FILTER_BY_BOOKMARK());
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label class="ms-2 text-sm font-medium text-gray-900 ">
                  Bookmarks
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  type="checkbox"
                  value="In Stock"
                  checked={byStock}
                  onClick={() => {
                    dispatch(FILTER_BY_STOCK());
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label class="ms-2 text-sm font-medium text-gray-900 ">
                  Include Out of Stock
                </label>
              </div>
            </div>

            <hr color="grey" size="1" />

            {/* Price */}

            <div className="p-2">
              <p className="font-bold mb-3">PRICE</p>

              <p className="priceRange">₹{priceRange || 2000}</p>

              <input
                type="range"
                value={priceRange}
                onChange={(e) =>
                  dispatch(FILTER_BY_PRICE_RANGE(e.target.value))
                }
                min="50"
                step="50"
                max="2000"
                className="w-full"
              />
            </div>

            <hr color="grey" size="1" />

            {/* Sortby */}
            <div className="p-2">
              <p className="font-bold mb-3">SORT BY</p>

              <div class="flex items-center mb-4">
                <input
                  id="radio-1"
                  type="radio"
                  value=""
                  name="radio"
                  checked={sort === "lowToHigh"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  onChange={() => dispatch(SORT_BY_PRICE("lowToHigh"))}
                />
                <label for="radio-1" className="ms-2 text-sm font-medium">
                  Low To High
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked={sort === "highToLow"}
                  id="radio-2"
                  type="radio"
                  value=""
                  name="radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  onChange={() => dispatch(SORT_BY_PRICE("highToLow"))}
                />
                <label
                  for="radio-2"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  High To Low
                </label>
              </div>
            </div>

            <hr color="grey" size="1" />

            {/* Rating */}

            <div className="p-2">
              <p className="font-bold mb-3">RATING</p>

              <RatingSlider
                rating={byRating}
                onClick={(i) => dispatch(FILTER_BY_RATING(i + 1))}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Filter;
