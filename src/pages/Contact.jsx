import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IndiaFlag from "../assets/india-flag-xs.png"; // Adjust path if needed

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setPhoneError("");
        setFormData({ ...formData, phone: value });
      } else {
        setPhoneError("Only 10-digit numbers are allowed.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, phone, message } = formData;
    if (firstName && lastName && phone && message && !phoneError) {
      navigate("/thank-you");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="pt-28 p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="flex gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded"
          />
        </div>

        <div>
          <div className="flex items-center border rounded overflow-hidden">
            <span className="bg-gray-100 px-2 flex items-center gap-1">
              <img src={IndiaFlag} alt="India Flag" className="w-5 h-auto" />
              <span className="text-gray-700">+91</span>
            </span>
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>
          {phoneError && (
            <p className="text-red-600 text-sm mt-1">{phoneError}</p>
          )}
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
