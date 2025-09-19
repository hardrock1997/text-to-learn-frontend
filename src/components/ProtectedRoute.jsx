import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "../pages/LandingPage.jsx";
import Loading from "../components/Loading.jsx"

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

   if (isLoading || isAuthenticated === undefined) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <LandingPage />; // show login/signup
  }

  return children; // show the protected app
}

export default ProtectedRoute;
