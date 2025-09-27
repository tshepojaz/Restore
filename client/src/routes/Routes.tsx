import { createBrowserRouter } from "react-router-dom";
import App from "../app/layout/App";
import HomePage from "../app/features/home/HomePage";
import Catalog from "../app/features/catalog/Catalog";
import ProductDetail from "../app/features/catalog/ProductDetail";
import AboutPage from "../app/features/about/AboutPage";
import ContactPage from "../app/features/contact/ContactPage";

export const routes = createBrowserRouter([
    {
       path: '/',
       element: <App />,
       children: [
          {path: '', element: <HomePage/>},
          {path: '/catalog', element: <Catalog/>},
          {path: '/catalog/:id', element: <ProductDetail/>},
          {path: '/about', element: <AboutPage/>},
          {path: '/contact', element: <ContactPage/>}
        ]
    }
])