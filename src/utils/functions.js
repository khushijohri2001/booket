export const savedPrice = (originalPrice, sellingPrice) => originalPrice - sellingPrice;

export const discountPercent = (originalPrice, sellingPrice) => (((originalPrice - sellingPrice) / originalPrice) * 100).toFixed()

export const currentYear = () => {
    const fullDate = new Date();
    let year = fullDate.getFullYear();
    return year;
}

export const getProductInfoById = (id, data) => data.filter(product => product.id === id)

export const filterProducts = (data, priceRange, byRating, searchQuery, sort, byStock, byBookmark, byNotebook) => {
    let sortedProducts = data.map((products) => {
      return products;
    });

    if (priceRange > 0) {
      sortedProducts = sortedProducts.filter(
        (products) => products.price <= priceRange
      );

      if (byRating) {
        sortedProducts = sortedProducts.filter(
          (products) => products.rating <= byRating
        );
      }
      if (searchQuery) {
        sortedProducts = sortedProducts.filter((products) =>
          products.name.toLowerCase().includes(searchQuery)
        );
      }

      if (sort) {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }

      if (!byStock) {
        sortedProducts = sortedProducts.filter(
          (product) => product.availablity === "In Stock"
        );
      }

      if (
        (byNotebook === false && byBookmark === false) ||
        (byNotebook === true && byBookmark === true)
      ) {
        return sortedProducts;
      }
      if (byNotebook) {
        sortedProducts = sortedProducts.filter(
          (products) => "Notebook" === products.category
        );
      }

      if (byBookmark) {
        sortedProducts = sortedProducts.filter(
          (products) => "Bookmark" === products.category
        );
      }
    }

    return sortedProducts;
  };