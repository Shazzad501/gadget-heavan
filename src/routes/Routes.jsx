import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../pages/ProductDetails";
import ItemsCard from "../Components/ItemsCard";
import AddtoCard from "../Components/AddtoCard";
import Statistic from "../pages/Statistic";
import Wishlist from "../Components/Wishlist";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../categories.json'),
        children:[
          {
            path: '/',
            element: <ItemsCard></ItemsCard>,
            loader: () => fetch('../products.json')
          },
          {
            path: '/product/:card',
            element: <ItemsCard></ItemsCard>,
            loader: () => fetch('../products.json')
          }
        ]
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children:[
          {
            path: '/dashboard',
            element: <AddtoCard></AddtoCard>,
            loader: ()=> fetch('../products.json')
          },
          {
            path: '/dashboard/wishlist',
            element: <Wishlist></Wishlist>,
            loader: ()=> fetch('../products.json')
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistic></Statistic>
      },
      {
        path: '/item/:itemId',
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('../products.json')
      }
    ]
  },
]);
export default routes;