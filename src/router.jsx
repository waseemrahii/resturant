import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import SearchPage from "./_root/Pages/SearchPage";
import Offers from "./_root/Pages/OfferPage";
import ContactUs from "./_root/Pages/ContactUs";
import Terms from "./_root/Pages/TermsAndConditions";
import Login from "./_root/Pages/Login";
import SignUp from "./_root/Pages/SignUp";
import BuyGiftCard from "./_root/Pages/BuyGiftCard";
import MyGift from "./_root/Pages/MyGiftCard";
import FavoriteStore from "./_root/Pages/FavoriteRestaurants";
import DeliveryAddress from "./_root/Pages/DeliveryAddress";
import RestaurantsPage from "./_root/Pages/RestaurantsPage";
import Profile from "./_root/Pages/Profile";
import HomePage from "./_root/Pages/HomePage";
import Page404 from "./_root/Pages/Page404";
import Restaurants from "./components/Restaurants";
import Cart from "./components/Cart";
import Checkout from "./_root/Pages/Checkout";
import MyOrder from "./components/MyOrder";
import MyTransactions from "./components/MyTransactions";
import FavoriteFood from "./_root/Pages/FavoriteFood";
import FavoriteRestaurants from "./_root/Pages/FavoriteRestaurants";
import DeliverySupport from "./_root/Pages/DeliverySupport";
import TermsAndConditions from "./_root/Pages/TermsAndConditions";
import Privacy from "./_root/Pages/Privacy";
import DineRestaurants from "./components/Restaurants/AllRestaurants";
import AllRestaurants from "./components/Restaurants/AllRestaurants";
import RequestDineIn from "./components/Restaurants/RequestDineIn";
import TakeAway from "./components/Cart/TakeAway";
import ProductDetail from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
			{
				path: "search",
        element: <SearchPage />,
			},
			{
				path: "offers",
        element: <Offers />,
			},
			{
				path: "contact-us",
        element: <ContactUs/>,
			},
			{
				path: "terms",
        element: <TermsAndConditions />,
			},
			{
				path: "my-orders",
        element: <MyOrder />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <SignUp/>
			},

			{
        path: "buy-gift-card",
        element: <BuyGiftCard />,
      },
			{
				path: "my-gift-cards",
        element: <MyGift />,
			},
			{
				path: "favorite-foods",
        element: <FavoriteFood />,
			},
			{
				path: "address-book",
        element: <DeliveryAddress/>,
			},
			{
				path: "restaurants",
        element: <AllRestaurants title='All'/>,
				
			},
			{
				path: "restaurant/:restaurantId",
				element: <RestaurantsPage />,
				children: [
					{
						path: "category/:categoryId",
						element: <Restaurants />,
					},
				],
			},
			{
				path: "dine-in",
        element: <AllRestaurants title='Dine in'/>,
			},
			{
				path: "register",
				element: <Terms/>
			},

			{
				path: "account",
				element: <Profile />,
			},
			{
				path: "category/:categoryId",
				element: <Restaurants />,
			},
			{
				path: "favorite-restaurant",
				element: <FavoriteRestaurants />,
			},
			{
				path: "*",
				element: <Page404 />,
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
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "delivery",
				element: <Checkout />,
			},
			{
				path:"takeaway",
				element:<TakeAway />
			},
			{
				path:"transactions",
				element:<MyTransactions/>
			},
			{
				path: "my-dine-in-requests",
				element: <RequestDineIn />,
			},
			{
				path:"product-detail",
				element: <ProductDetail/>
			}
    ],
  },
]);

export default router;
