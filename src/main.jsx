import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Auth0Provider} from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(

    <Auth0Provider
  domain="dev-mug1nnauc1ngm6kh.us.auth0.com"
  clientId="OOuF61TuLr1rZ20BKT3QMVEHWGRywDfr"
  authorizationParams={{
    redirect_uri: window.location.origin,
    audience: "https://text-to-learn/api",  // 👈 move here
    scope: "openid profile email"
  }}
  useRefreshTokens={false}
  cacheLocation="localstorage"
>
  <App />
</Auth0Provider>


)
