import { v4 as uuid } from "uuid";
import { bookmark1, bookmark2, bookmark3, bookmark4, bookmark5, bookmark6, journal1, journal2, journal3, notebook1, notebook10, notebook11, notebook12, notebook13, notebook2, notebook3, notebook4, notebook5, notebook6, notebook7, notebook8, notebook9 } from "../assets";

const data = [
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark1,
    name: "Dreams Don't Work Unless You Do Bookmark",
    price: 199,
    originalPrice: 299,
    category: "Bookmark",
    type: "By Categories",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: bookmark2,
    name: "Your word is lamp to my feet Bookmark",
    price: 149,
    originalPrice: 199,
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark3,
    name: "Midnight Blossom Bookmark",
    price: 249,
    originalPrice: 299,
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark4,
    name: "Abstract Floral Bookmark",
    price: 149,
    originalPrice: 199,
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: bookmark5,
    name: "Bookmark for Readers",
    price: 149,
    originalPrice: 199,
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 4,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: bookmark6,
    name: "Peaceful Buddha Bookmark",
    price: 199,
    originalPrice: 299,
    category: "Bookmark",
    description: `Matte Finish Coated Material |
    300 GSM Paper |
    Aesthetically appealing |
    18cm Long & 5cm Wide, Fits perfectly in all sizes of books
    Double-sided print, Pack of 2`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook1,
    name: "Genius Reusable Notebook",
    price: 359,
    originalPrice: 899,
    category: "Notebook",
    type: "Best Seller",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook2,
    name: "Deathnote Reusable Notebook",
    price: 999,
    originalPrice: 1499,
    category: "Notebook",
    type: "By Categories",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: notebook3,
    name: "Sh*t Done Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook4,
    name: "Don't Stop Reusable Notebook",
    price: 1499,
    originalPrice: 1999,
    category: "Notebook",
    type: "Best Seller",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook5,
    name: "F.R.I.E.N.D.S Reusable Notebook",
    price: 999,
    originalPrice: 1499,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: notebook6,
    name: "Never Give Up Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook7,
    name: "Paanic Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook8,
    name: "Wondering Woman Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook9,
    name: "Basanti Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook10,
    name: "Learn and Earn Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 1,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook11,
    name: "Bhukkadh Reusable Notebook",
    price: 999,
    originalPrice: 1499,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 3,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "Out of Stock",
    image: notebook12,
    name: "Coffee Reusable Notebook",
    price: 499,
    originalPrice: 999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 2,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: notebook13,
    name: "Today I am Grateful Reusable Notebook",
    price: 1499,
    originalPrice: 1999,
    category: "Notebook",
    description: `Matte Finish Coated Material |
     With a 1.2mm Fine Tip Pen & a Napkin |
     A5 size 40 blank sheets |
     Easy to Write, Erase and Rewrite sheets.`,
    rating: 5,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: journal1,
    name: "Kawai Spiral Journal",
    price: 279,
    originalPrice: 599,
    category: "Journal",
    type: "Best Seller",
    description: `This cute notebook is the ultimate solution for all your planning needs | Non-rewritable`,
    rating: 4,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: journal2,
    name: "Personalised Journal",
    price: 559,
    originalPrice: 899,
    category: "Journal",
    type: "Best Seller",
    description: `Pink Floral notebook is perfect for planning your Days, Weeks and Year | Non-rewritable`,
    rating: 4,
    qty: 1
  },
  {
    id: uuid(),
    availablity: "In Stock",
    image: journal3,
    name: "Bright & Early Productivity Journal",
    price: 1099,
    originalPrice: 1299,
    category: "Journal",
    type: "By Categories",
    description: `Bright & Early Journal will help you focus, prioritize your time, and be more mindful | Non-rewritable`,
    rating: 5,
    qty: 1
  }
];

export default data;
