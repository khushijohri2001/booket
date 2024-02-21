export const savedPrice = (originalPrice, sellingPrice) => originalPrice - sellingPrice;

export const discountPercent = (originalPrice, sellingPrice) => (((originalPrice - sellingPrice) / originalPrice) * 100).toFixed()