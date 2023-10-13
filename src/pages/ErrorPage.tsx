import { useRouteError, ErrorResponse } from "react-router-dom";
import "../styles/error.css";

/**
 * Renders the error page with improved error handling.
 *
 * @return {JSX.Element} The error page component.
 */
export default function ErrorPage(): JSX.Element {
    const error = useRouteError() as ErrorResponse;
    console.error(error);
    let errorMessage: string;

    if ("message" in error) {
        errorMessage = error.message as string;
    } else if ("statusText" in error) {
        errorMessage = error.statusText;
    } else {
        errorMessage = "Sorry, an unexpected error has occurred.";
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>{errorMessage}</p>
            <a href="/">Go back home</a>
        </div>
    );
}
