import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Outlet } from "react-router-dom";


import { useAuth0 } from '@auth0/auth0-react'

function App() {

//   const {loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0()

//   useEffect(()=>{
//     if (!isAuthenticated) return; 
//     const fetchToken = async()=>{
//       try {
//         const token = await getAccessTokenSilently({
//         authorizationParams: {
//           audience: 'https://text-to-learn/api',
//           scope: "openid profile email"
//         }
//     });

  //   if(isAuthenticated) {
  //       const response = await axios.get("http://localhost:3000/courses" 
  //     ,{
  //     headers:{
  //       authorization:`Bearer ${token}`
  //     }
  //   }
  // )

//   console.log(response.data)
//      if(!response.data.registered) {
//          const signUpResponse = await axios.post(
//         "http://localhost:3000/auth/signUp",
//         {
//           user: response.data.user
//         },
//         {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
// );
//       } 
//       // user is already registered
//       else {
//          console.log(response.data)
//       }
//   }

//     }
//       catch(error) {
//         console.log(error)
//       }
//     }

//     fetchToken();

//   },[isAuthenticated])


// async function handleSubmitPrompt(e) {
//   e.preventDefault(); // 👈 Prevents button default refresh behavior

//   if (!isAuthenticated) {
//     loginWithRedirect();
//     return;
//   }

//   try {
//     const token = await getAccessTokenSilently();

//     const response = await axios.post(
//       "http://localhost:3000/ai/generate",
//       { prompt: "I want to learn cooking" },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log(response.data);
//   } catch (err) {
//     console.error("Error submitting prompt:", err);
//   }
// }


  return (
    <>
    {/* <button onClick={loginWithRedirect}>Login WIth Redirect</button>
    <button onClick={logout}>Logout</button>
    <button onClick={handleSubmitPrompt} type="button">Submit Prompt</button>
   {user &&  <h2>Logged in user is {user.name}</h2> } */}

   <Outlet/>
    </>
  )
}

export default App
