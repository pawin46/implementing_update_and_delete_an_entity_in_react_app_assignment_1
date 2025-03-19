import { useState } from "react";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const UpdateItem = ({ item }) => {
  // 1. Create a state for the form
  const [formData, setFormData] = useState({
    name: item.name,
    // Add more fields if needed (e.g., status, color, etc.)
  });

  const [responseMessage, setResponseMessage] = useState("");

  // 2. Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle form submission (PUT request)
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URI}/${item.id}`, {
      method: "PUT", // or "PATCH"
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setResponseMessage("Update successful!");
      })
      .catch((error) => {
        console.error("Error updating item:", error);
        setResponseMessage("Update failed.");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Door Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update Door</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default UpdateItem;
