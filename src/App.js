import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components';
import { About, Cart, Contact, Home, Layout, Products, SingleProducts, Wishlist } from './routes';
import { useEffect } from 'react';
import { TOTAL_DISCOUNT_PRICE_HANDLER, TOTAL_ITEMS_QUANTITY_HANDLER, TOTAL_ORIGINAL_PRICE_HANDLER, TOTAL_PRICE_HANDLER } from './redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';




const App = () => {
  const {cartList} = useSelector(store => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TOTAL_ITEMS_QUANTITY_HANDLER());
    dispatch(TOTAL_ORIGINAL_PRICE_HANDLER());
    dispatch(TOTAL_PRICE_HANDLER());
    dispatch(TOTAL_DISCOUNT_PRICE_HANDLER());
  }, [cartList, dispatch]);

  return (
    <>
      <Layout/>
      {/* <Footer /> */}
    </>
  );
}

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: "/products/:productId",
          element: <SingleProducts />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />
        },
        {
          path: "/cart",
          element: <Cart />
        },
      ]
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    }
    
  ]
)

export default App;


