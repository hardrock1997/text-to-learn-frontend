// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import {BrowserRouter, Routes, Route} from "react-router-dom"

// import {Auth0Provider} from '@auth0/auth0-react'

// createRoot(document.getElementById('root')).render(

//   <BrowserRouter>
//   <Auth0Provider
//   domain="dev-mug1nnauc1ngm6kh.us.auth0.com"
//   clientId="OOuF61TuLr1rZ20BKT3QMVEHWGRywDfr"
//   authorizationParams={{
//     redirect_uri: window.location.origin,
//     audience: "https://text-to-learn/api",  // 👈 move here
//     scope: "openid profile email"
//   }}
//   useRefreshTokens={false}
//   cacheLocation="localstorage"
// >
//         <Routes>
//         {/* Layout wrapper */}
//         <Route path="/" element={<App />}>
//           {/* Nested routes */}
//           {/* <Route index element={<Home />} />
//           <Route path="courses" element={<Courses />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="*" element={<NotFound />} /> */}
//         </Route>
//       </Routes>
// </Auth0Provider>
// </BrowserRouter>


// )



import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "../src/components/ProtectedRoute.jsx";
import DashboardPage from "../src/pages/DahsboardPage.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-mug1nnauc1ngm6kh.us.auth0.com"
      clientId="OOuF61TuLr1rZ20BKT3QMVEHWGRywDfr"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://text-to-learn/api",
        scope: "openid profile email",
      }}
      useRefreshTokens={false}
      cacheLocation="localstorage"
    >
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} /> 
        </Route>
      </Routes>
    </Auth0Provider>
  </BrowserRouter>
);
