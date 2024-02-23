import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Footer } from './components';
import { About, Cart, Home, Layout, Products, Wishlist } from './routes';




const App = () => {

  return (
    <>
      <Layout/>
      <Footer />
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
        }

      ]
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/wishlist",
      element: <Wishlist />
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]
)

export default App;


