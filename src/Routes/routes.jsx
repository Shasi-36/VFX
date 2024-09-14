import HomePage from "../Pages/HomePage";
import RegistrationPage from "../Pages/Registration";
import LoginPage from "../Pages/LoginPage"
import AboutPage from "../Pages/AboutPage"
import PlacementsPage from "../Pages/Placements"
import ContactPage from "../Pages/ContactPage"
import CoursePage from "../Pages/CoursePage";



export const routes = [
    {
      path: "/",
      component: <HomePage/>
    },
      {
        path: "/about",
        component: <AboutPage/>
      },
      {
        path: "/courses",
        component: <CoursePage/>
      },
      {
        path: "/placements",
        component: <PlacementsPage/>
      },
      {
        path: "/contact",
        component: <ContactPage/>
      },
      {
        path: "/registration",
        component: <RegistrationPage/>
      },
      {
          path: "/login",
          component: <LoginPage/>
        }
  ];
  
  export const links = [
    {
      link: "Home",
      to: "/",
  },
    {
        link: "About",
        to: "/about",
    },
    {
        link: "Placements",
        to: "/palcement",
      },
      {
        link: "Contact Us",
        to: "/contact",
      },
      {
        link: "SIgn Up/Register",
        to: "/registration",
      },
      {
          link: "Login",
          to: "/login",
        }
  ];