import { bookmark1, bookmark2, bookmark3, bookmark4, bookmark5, bookmark6, journal1, journal2, journal3, notebook1, notebook10, notebook11, notebook12, notebook13, notebook2, notebook3, notebook4, notebook5, notebook6, notebook7, notebook8, notebook9 } from "../assets";

const data = [
  {
    id: "7a70f455-5b5b-4a6a-8ff7-181f14fe53cf",
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
    quantity: 1
  },
  {
    id: "29d3280b-e8c4-4fec-9a43-a680716afdef",
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
    quantity: 1
  },
  {
    id: "4d89f7b2-cdb5-4a13-8b4c-0d9f595c0e85",
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
    quantity: 1
  },
  {
    id: "42dbe928-0cf3-4fe9-aec6-55c9c6806b63",
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
    quantity: 1
  },
  {
    id: "ac598b65-b5b3-4ba2-b531-e69560ef57da",
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
    quantity: 1
  },
  {
    id: "fe0c8966-361e-4398-8e71-fdf8cf1ee0cd",
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
    quantity: 1
  },
  {
    id: "eeee048c-00c5-4cd4-b3fd-d260b95a5915",
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
    quantity: 1
  },
  {
    id: "e3e9f64a-5c22-4059-afde-4f0df61b22f0",
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
    quantity: 1
  },
  {
    id: "72dcb7d8-b393-42c6-99de-752c1e2e941d",
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
    quantity: 1
  },
  {
    id: "50a0bc34-b885-47e3-b565-7d9d6e3e73bf",
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
    quantity: 1
  },
  {
    id: "9fdb2ce1-1949-4309-a29d-bae4f3e6221c",
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
    quantity: 1
  },
  {
    id: "6039e9e0-dd86-4462-81b5-d4f0d0beb5b8",
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
    quantity: 1
  },
  {
    id: "df9d056f-6d1e-487a-bbb0-01a2d635d1c2",
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
    quantity: 1
  },
  {
    id: "56046e60-751a-4177-b02b-88b488965d7e",
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
    quantity: 1
  },
  {
    id: "62e04c66-56de-48bc-87d0-bee7617b47b9",
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
    quantity: 1
  },
  {
    id: "cecb2944-5120-4664-9f25-5d6690a369ec",
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
    quantity: 1
  },
  {
    id: "967db68e-b8ed-47c4-b92d-2d34cf2d30b6",
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
    quantity: 1
  },
  {
    id: "90653ec3-4c6d-4cdb-8c91-299641105a0b",
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
    quantity: 1
  },
  {
    id: "5154f57e-080e-4609-a839-4cdab6f8c4a8",
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
    quantity: 1
  },
  {
    id: "7f74e058-f124-459a-9f7c-0836ed43b351",
    availablity: "In Stock",
    image: journal1,
    name: "Kawai Spiral Journal",
    price: 279,
    originalPrice: 599,
    category: "Journal",
    type: "Best Seller",
    description: `This cute notebook is the ultimate solution for all your planning needs | Non-rewritable`,
    rating: 4,
    quantity: 1
  },
  {
    id: "d61e64c4-8e84-499f-b800-b1a80e91e65c",
    availablity: "In Stock",
    image: journal2,
    name: "Personalised Journal",
    price: 559,
    originalPrice: 899,
    category: "Journal",
    type: "Best Seller",
    description: `Pink Floral notebook is perfect for planning your Days, Weeks and Year | Non-rewritable`,
    rating: 4,
    quantity: 1
  },
  {
    id: "f8423fe2-45ed-41b5-a8d3-42843b30db47",
    availablity: "In Stock",
    image: journal3,
    name: "Bright & Early Productivity Journal",
    price: 1099,
    originalPrice: 1299,
    category: "Journal",
    type: "By Categories",
    description: `Bright & Early Journal will help you focus, prioritize your time, and be more mindful | Non-rewritable`,
    rating: 5,
    quantity: 1
  }
];

export default data;
