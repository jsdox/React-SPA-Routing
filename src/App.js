// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// import HomePage from './pages/Home';
// import Products from "./pages/Products";

// const routeDefinations = createRoutesFromElements(
//   <Route>
//     <Route path="" element={<HomePage/>} />
//     <Route path="/products" element={<Products/>} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinations);

// function App() {
//   return <RouterProvider router={router}/>;
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from './pages/Home';
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error/>,
    element: <RootLayout />,
    children: [
      // {path: '', element: <HomePage/>},
      {index: true, element: <HomePage/>},
      {path: '/products', element: <Products/>},
      {path: '/products/:productId', element: <Product/>}
    ]
  }
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
