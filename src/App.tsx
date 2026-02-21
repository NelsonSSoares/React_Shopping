import { Home } from "./screens/home"
import { Cart } from "./screens/cart"
import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
])
export { router };