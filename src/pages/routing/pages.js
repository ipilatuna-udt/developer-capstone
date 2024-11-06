import LoginPage from "../LoginPage";
import MenuPage from "../MenuPage";
import OrderOnlinePage from "../OrderOnlinePage";
import ReservationsPage from "../ReservationsPage";
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
  },
  {
    href: "/reservations",
    component: ReservationsPage,
    label: "Reservations",
  },
  {
    href: "/order-online",
    component: OrderOnlinePage,
    label: "Order Online",
  },
  {
    href: "/login",
    component: LoginPage,
    label: "Login",
  },
];

export default pages;
