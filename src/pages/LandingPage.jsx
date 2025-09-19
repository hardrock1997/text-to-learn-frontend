import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isAuthenticated && (
        <>
          <button
            onClick={() => loginWithRedirect()}
            style={{ marginRight: "10px" }}
          >
            Log In
          </button>
          <button
            onClick={() =>
              loginWithRedirect({ screen_hint: "signup" })
            }
          >
            Sign Up
          </button>
        </>
      )}


      <h1>Master any Topic</h1>
      <h2>Choose to learn smart, not hard.</h2>
      <h4>
        Unlock AI-powered learning. Choose a topic and get custom lessons,
        code examples, quizzes, and revision — instantly. Fast. Free. Smart.
      </h4>
    </div>
  );
}
