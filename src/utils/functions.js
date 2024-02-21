export const savedPrice = (originalPrice, sellingPrice) => originalPrice - sellingPrice;

export const discountPercent = (originalPrice, sellingPrice) => (((originalPrice - sellingPrice) / originalPrice) * 100).toFixed()

export const currentYear = () => {
    const fullDate = new Date();
    let year = fullDate.getFullYear();
    return year;
}