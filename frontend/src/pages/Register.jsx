import React, { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", passowrd: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Register Failed");
      console.log("Unable to Register", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded-xl shadow-96"
        onSubmit={handleRegister}
      >
        <h1 className="text-2xl text-center font-bold mb-4">Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="w-full p-2 border rounded mb-3"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="w-full p-2 border rounded mb-3"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          className="w-full p-2 border rounded mb-3"
          onChange={handleChange}
        />

        <button className="w-full bg-black text-white py-2 rounded-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
