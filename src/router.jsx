// // import { createBrowserRouter, Route } from "react-router-dom";
// // import RootLayout from "./_root/RootLayout";
// // import SearchPage from "./_root/Pages/SearchPage";
// // import Offers from "./_root/Pages/OfferPage";
// // import ContactUs from "./_root/Pages/ContactUs";
// // import Terms from "./_root/Pages/TermsAndConditions";
// // import BuyGiftCard from "./_root/Pages/BuyGiftCard";
// // import MyGift from "./_root/Pages/MyGiftCard";
// // import FavoriteStore from "./_root/Pages/FavoriteRestaurants";
// // import DeliveryAddress from "./_root/Pages/DeliveryAddress";
// // import RestaurantsPage from "./_root/Pages/RestaurantsPage";
// // import Profile from "./_root/Pages/Profile";
// // import HomePage from "./_root/Pages/HomePage";
// // import Page404 from "./_root/Pages/Page404";
// // import Restaurants from "./components/Restaurants";
// // import Cart from "./components/Cart";
// // import Checkout from "./_root/Pages/Checkout";
// // import MyOrder from "./components/MyOrder";
// // import MyTransactions from "./components/MyTransactions";
// // import FavoriteFood from "./_root/Pages/FavoriteFood";
// // import FavoriteRestaurants from "./_root/Pages/FavoriteRestaurants";
// // import DeliverySupport from "./_root/Pages/DeliverySupport";
// // import TermsAndConditions from "./_root/Pages/TermsAndConditions";
// // import Privacy from "./_root/Pages/Privacy";
// // import DineRestaurants from "./components/Restaurants/AllRestaurants";
// // import AllRestaurants from "./components/Restaurants/AllRestaurants";
// // import RequestDineIn from "./components/Restaurants/RequestDineIn";
// // import TakeAway from "./components/Cart/TakeAway";
// // import ProductDetail from "./components/Product";
// // import SignUp from "./components/SignUpPages/SignUp";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <RootLayout />,
// //     children: [
// //       {
// //         path: "",
// //         element: <HomePage />,
// //       },
// //       //   <Route path="/signin" element={<SignUp />} />,
// //       //   <Route path="/phone" element={<Loginwithphone />} />,
// //       //   <Route path="/forget" element={<Forgotpassword />} />,
// //       //   <Route path="/login" element={<Login />} />,

// //       { path: "search", element: <SearchPage /> },
// //       // 	{path: "sign-in",
// //       // element: <SignUp />,
// //       // 	},
// //       {
// //         path: "offers",
// //         element: <Offers />,
// //       },
// //       {
// //         path: "contact-us",
// //         element: <ContactUs />,
// //       },
// //       {
// //         path: "terms",
// //         element: <TermsAndConditions />,
// //       },
// //       {
// //         path: "my-orders",
// //         element: <MyOrder />,
// //       },
// //       // {
// //       //   path: "login",
// //       //   element: <Login />,
// //       // },
// //       {
// //         path: "register",
// //         element: <SignUp />,
// //       },

// //       {
// //         path: "buy-gift-card",
// //         element: <BuyGiftCard />,
// //       },
// //       {
// //         path: "my-gift-cards",
// //         element: <MyGift />,
// //       },
// //       {
// //         path: "favorite-foods",
// //         element: <FavoriteFood />,
// //       },
// //       {
// //         path: "address-book",
// //         element: <DeliveryAddress />,
// //       },
// //       {
// //         path: "restaurants",
// //         element: <AllRestaurants title="All" />,
// //       },
// //       {
// //         path: "restaurant/:restaurantId",
// //         element: <RestaurantsPage />,
// //         children: [
// //           {
// //             path: "category/:categoryId",
// //             element: <Restaurants />,
// //           },
// //         ],
// //       },
// //       {
// //         path: "dine-in",
// //         element: <AllRestaurants title="Dine in" />,
// //       },
// //       {
// //         path: "register",
// //         element: <Terms />,
// //       },

// //       {
// //         path: "account",
// //         element: <Profile />,
// //       },
// //       {
// //         path: "category/:categoryId",
// //         element: <Restaurants />,
// //       },
// //       {
// //         path: "favorite-restaurant",
// //         element: <FavoriteRestaurants />,
// //       },
// //       {
// //         path: "*",
// //         element: <Page404 />,
// //       },

// //       {
// //         path: "delivery-support",
// //         element: <DeliverySupport />,
// //       },
// //       {
// //         path: "privacy",
// //         element: <Privacy />,
// //       },

// //       {
// //         path: "checkout",
// //         element: <Checkout />,
// //       },
// //       {
// //         path: "delivery",
// //         element: <Checkout />,
// //       },
// //       {
// //         path: "takeaway",
// //         element: <TakeAway />,
// //       },
// //       {
// //         path: "transactions",
// //         element: <MyTransactions />,
// //       },
// //       {
// //         path: "my-dine-in-requests",
// //         element: <RequestDineIn />,
// //       },
// //       {
// //         path: "product-detail",
// //         element: <ProductDetail />,
// //       },
// //     ],
// //   },
// // ]);

// // export default router;



// import { createBrowserRouter } from "react-router-dom"
// import RootLayout from "./_root/RootLayout"
// import HomePage from "./_root/Pages/HomePage"
// import RestaurantsPage from "./_root/Pages/RestaurantsPage"
// import Categories from "./_root/Pages/Categories"
// import OfferPage from "./_root/Pages/OfferPage"
// import Login from "./_root/Pages/Login"
// import SignUp from "./_root/Pages/SignUp"
// import Loginwithphone from "./_root/Pages/Loginwithphone"
// import Forgotpassword from "./_root/Pages/Forgotpassword"
// import ProductPage from "./_root/Pages/ProductPage"
// import WishlistPage from "./_root/Pages/WishlistPage"
// import SearchPage from "./_root/Pages/SearchPage"
// import ContactUs from "./_root/Pages/ContactUs"
// import TermsAndConditions from "./_root/Pages/TermsAndConditions"
// import Privacy from "./_root/Pages/Privacy"
// import Page404 from "./_root/Pages/Page404"
// import Profile from "./_root/Pages/Profile"
// import FavoriteFood from "./_root/Pages/FavoriteFood"
// import FavoriteRestaurants from "./_root/Pages/FavoriteRestaurants"
// import BuyGiftCard from "./_root/Pages/BuyGiftCard"
// import MyGiftCard from "./_root/Pages/MyGiftCard"
// import DeliverySupport from "./_root/Pages/DeliverySupport"
// import DeliveryAddress from "./_root/Pages/DeliveryAddress"
// import Checkout from "./_root/Pages/Checkout"
// import AccountPage from "./_root/Pages/AccountPage"
// import CheckoutPage from "./_root/Pages/CheckoutPage"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "restaurants",
//         element: <RestaurantsPage />,
//       },
//       {
//         path: "categories",
//         element: <Categories />,
//       },
//       {
//         path: "offers",
//         element: <OfferPage />,
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "signup",
//         element: <SignUp />,
//       },
//       {
//         path: "loginwithphone",
//         element: <Loginwithphone />,
//       },
//       {
//         path: "forgotpassword",
//         element: <Forgotpassword />,
//       },
//       {
//         path: "product-detail/:id",
//         element: <ProductPage />,
//       },
//       {
//         path: "wishlist",
//         element: <WishlistPage />,
//       },
//       {
//         path: "search",
//         element: <SearchPage />,
//       },
//       {
//         path: "contact",
//         element: <ContactUs />,
//       },
//       {
//         path: "terms",
//         element: <TermsAndConditions />,
//       },
//       {
//         path: "privacy",
//         element: <Privacy />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//       {
//         path: "account",
//         element: <AccountPage />,
//       },
//       {
//         path: "favorite-food",
//         element: <FavoriteFood />,
//       },
//       {
//         path: "favorite-restaurants",
//         element: <FavoriteRestaurants />,
//       },
//       {
//         path: "buy-gift-card",
//         element: <BuyGiftCard />,
//       },
//       {
//         path: "my-gift-card",
//         element: <MyGiftCard />,
//       },
//       {
//         path: "delivery-support",
//         element: <DeliverySupport />,
//       },
//       {
//         path: "delivery-address",
//         element: <DeliveryAddress />,
//       },
//       {
//         path: "checkout",
//         element: <CheckoutPage />,
//       },
//       {
//         path: "cart",
//         element: <Checkout />,
//       },
//       {
//         path: "*",
//         element: <Page404 />,
//       },
//     ],
//   },
// ])

// export default router



import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./_root/RootLayout"
import HomePage from "./_root/Pages/HomePage"
// import Login from "./_root/Pages/Login"
// import SignUp from "./_root/Pages/SignUp"
import SignUp from "./components/SignUpPages/SignUp";
import Login from "./components/SignUpPages/Login";

import Forgotpassword from "./_root/Pages/Forgotpassword"
import Loginwithphone from "./_root/Pages/Loginwithphone"
import RestaurantsPage from "./_root/Pages/RestaurantsPage"
import SearchPage from "./_root/Pages/SearchPage"
import OfferPage from "./_root/Pages/OfferPage"
import ContactUs from "./_root/Pages/ContactUs"
import FavoriteFood from "./_root/Pages/FavoriteFood"
import FavoriteRestaurants from "./_root/Pages/FavoriteRestaurants"
import Categories from "./_root/Pages/Categories"
import BuyGiftCard from "./_root/Pages/BuyGiftCard"
import MyGiftCard from "./_root/Pages/MyGiftCard"
import DeliveryAddress from "./_root/Pages/DeliveryAddress"
import DeliverySupport from "./_root/Pages/DeliverySupport"
import Privacy from "./_root/Pages/Privacy"
import TermsAndConditions from "./_root/Pages/TermsAndConditions"
import Page404 from "./_root/Pages/Page404"
import WishlistPage from "./_root/Pages/WishlistPage"
import ProductPage from "./_root/Pages/ProductPage"
import AccountPage from "./_root/Pages/AccountPage"
import CheckoutPage from "./_root/Pages/CheckoutPage"
import CartComponent from "./components/Cart/CartComponent"
import OrderDetailPage from "./_root/Pages/OrderDetailPage"
 import Checkout from "./_root/Pages/Checkout"
 import ProductDetail from "./components/Product";

 import DineRestaurants from "./components/Restaurants/AllRestaurants";
import AllRestaurants from "./components/Restaurants/AllRestaurants";
import RequestDineIn from "./components/Restaurants/RequestDineIn";
 import Restaurants from "./components/Restaurants";
import CategoryPage from "./_root/Pages/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "loginwithphone",
        element: <Loginwithphone />,
      },
      // {
      //   path: "restaurants",
      //   element: <RestaurantsPage />,
      // },

            {
        path: "restaurants",
        element: <AllRestaurants title="All" />,
      },
      {
        path: "restaurant/:restaurantId",
        element: <RestaurantsPage />,
        // children: [
        //   {
        //     path: "category/:categoryId",
        //     element: <Restaurants />,
        //   },
        // ],
      },
      {
        path: "category/:categoryId",
        element: <CategoryPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "offers",
        element: <OfferPage />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "favorite-food",
        element: <FavoriteFood />,
      },
      {
        path: "favorite-restaurants",
        element: <FavoriteRestaurants />,
      },
      {
        path: "categories",
        element: <CategoryPage />,
      },
      {
        path: "buy-gift-card",
        element: <BuyGiftCard />,
      },
      {
        path: "my-gift-card",
        element: <MyGiftCard />,
      },
      {
        path: "delivery-address",
        element: <DeliveryAddress />,
      },
      {
        path: "delivery-support",
        element: <DeliverySupport />,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      // {
      //   path: "product-detail/:id",
      //   element: <ProductPage />,
      // },
      // //       {
// //         path: "my-dine-in-requests",
// //         element: <RequestDineIn />,
// //       },
      {
        path: "product-detail",
        element: <ProductPage />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "cart",
        element: <CartComponent />,
      },
      {
        path: "order/:id",
        element: <OrderDetailPage />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
])

export default router
