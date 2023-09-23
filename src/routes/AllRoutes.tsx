import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import LandingPage from "../pages/landingPage/LandingPage";
import { ContactpageLayout } from "../layout/contactLayout";
import { HomePageLayout } from "../layout/homeLayout";
import { RegisterPageLayout } from "../layout/registerLayout";
// import Register from "../pages/register/Register";


const LandingPage = lazy(() => import("../pages/landingPage/LandingPage"))
const ContactPage = lazy(() => import("../pages/contact/ContactPage"))
const Register = lazy(() => import("../pages/register/Register"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactpageLayout />,
        children: [
            {
                index: true,
                element: <ContactPage />
            }
        ]
    },
    {
        path: "/register",
        element: <RegisterPageLayout />,
        children: [
            {
                index: true,
                element: <Register />
            }
        ]
    },
])

