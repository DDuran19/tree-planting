import "./App.css";
import "./styles/header.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./pages/LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/home",
            element: <LandingPage />,
        },
    ]);

    return (
        <>
            <Navbar />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
