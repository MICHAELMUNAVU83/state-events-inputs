import React, { useState } from "react";

function Submit() {
  const [formData, setFormData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData}
        onChange={(e) => {
          setFormData(e.target.value);
        }}
        type="text"
      />
      <button type="submit">submit from</button>
    </form>
  );
}

export default Submit;
