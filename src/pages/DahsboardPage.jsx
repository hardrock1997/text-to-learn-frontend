import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';

export default function DashboardPage() {
  const { logout, user, isAuthenticated, getAccessTokenSilently, isLoading: authLoading, loginWithRedirect } = useAuth0();
  const [prompt, setPrompt] = useState("");
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [loadingPrompt, setLoadingPrompt] = useState(false);

  // Fetch courses after authentication
  useEffect(() => {
    if (!isAuthenticated || authLoading) return;

    const fetchCourses = async () => {
      setLoadingCourses(true);
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://text-to-learn/api',
            scope: "openid profile email"
          }
        });

        const response = await axios.get("http://localhost:3000/courses/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.data.registered) {
          // Register the user if not already registered
          const signUpResponse = await axios.post(
            "http://localhost:3000/auth/signUp",
            { user: response.data.user },
            { headers: { "Content-Type": "application/json" } }
          );
          console.log("User registered:", signUpResponse.data);
        } else {
          setCourses(response.data.courses || []);
          console.log("Courses fetched:", response.data);
        }
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCourses();
  }, [isAuthenticated, authLoading, getAccessTokenSilently]);

  const handleChange = (e) => setPrompt(e.target.value);

  const handleSubmitPrompt = async () => {
    if (!isAuthenticated) {
      loginWithRedirect();
      return;
    }

    setLoadingPrompt(true);
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        "http://localhost:3000/ai/generate",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      console.log("AI response:", response.data);
    } catch (err) {
      console.error("Error submitting prompt:", err);
    } finally {
      setLoadingPrompt(false);
    }
  };

  if (authLoading || loadingCourses) {
    return <Loading />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Page</h1>
      {user && <h2>Welcome, {user.name}</h2>}

      {/* Prompt input */}
      <div style={{ margin: "20px 0" }}>
        <input
          type="text"
          value={prompt}
          onChange={handleChange}
          placeholder="Enter your prompt"
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={handleSubmitPrompt} disabled={loadingPrompt}>
          {loadingPrompt ? "Generating..." : "Send"}
        </button>
      </div>

      {/* Courses */}
      <div>
        <h3>Your Courses:</h3>
        {courses.length === 0 ? (
          <p>No courses available yet.</p>
        ) : (
          <ul>
            {courses.map((course) => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={logout} style={{ marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
}
