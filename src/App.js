import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Admin from "./pages/Admin/Admin";
import Products from "./pages/Products";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Purchases from "./pages/Purchases";
import NavBar from "./components/home/Header/Navbar";
import Users from "./pages/Users";
import ContactUs from "./pages/ContactUs/ContactUs";
const Layout = () => {
  return (
    <div>
      <NavBar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/admin" element={<ProtectedRoutes />}>
        <Route path="/admin/" element={<Admin />}></Route>
        <Route path="/admin/products" element={<Products />}></Route>
        <Route path="/admin/purchases" element={<Purchases />}></Route>
        <Route path="/admin/users" element={<Users />}></Route>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contactUs" element={<ContactUs />}></Route>
        <Route path="/terms&services" element={<Journal />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/placeorder" element={<Payment />}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


