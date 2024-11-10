import LoginPage from "../LoginPage";
import MenuPage from "../MenuPage";
import OrderOnlinePage from "../OrderOnlinePage";
import BookingsPage from "../BookingsPage";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";

const pages = [
  {
    href: "/",
    component: HomePage,
    label: "Home",
  },
  {
    href: "/about",
    component: AboutPage,
    label: "About",
  },
  {
    href: "/menu",
    component: MenuPage,
    label: "Menu",
    disabled: true,
  },
  {
    href: "/bookings",
    component: BookingsPage,
    label: "Bookings",
    visible: true,
  },
  {
    href: "/order-online",
    component: OrderOnlinePage,
    label: "Order Online",
    disabled: true,
  },
  {
    href: "/login",
    component: LoginPage,
    label: "Login",
    disabled: true,
  },
];

export default pages;
