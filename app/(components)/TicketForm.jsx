"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";

const TicketForm = () => {
  const handleChange = (e) => {
    // e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    category: "Software Problem",
    priority: 1,
    progress: 0,
    status: "not started",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center">
      <form>
        <h3>Create your ticket!</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default TicketForm;
