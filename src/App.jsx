import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";

// API URI from environment variable
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch a specific door (e.g., door with id = 1)
    fetch(`${API_URI}/1`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item:", error));
  }, []);

  return (
    <div>
      <h1>Update Door</h1>
      {item ? <UpdateItem item={item} /> : <p>Loading door...</p>}
    </div>
  );
}

export default App;
