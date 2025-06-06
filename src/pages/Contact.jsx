import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { sendEmailViaMSG91 } from "../utils/sendEmail";

import IndiaFlag from "../assets/india-flag-xs.png";

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",         // added email field
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",         // error for email
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors({ ...errors, [name]: "" });

    if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, phone: value });
      } else {
        setErrors({ ...errors, phone: "Only numbers are allowed." });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all the details correctly.");
      return;
    }

    try {
      const docId = `${formData.firstName}-${Date.now()}`;

      await setDoc(doc(db, "contacts", docId), {
        ...formData,
        createdAt: new Date(),
      });

      const commonData = {
  from: {
    email: "support@clinzee.com",
  },
  domain: "clinzee.com",
};

// Send email to support@clinzee.com
await sendEmailViaMSG91({
  ...commonData,
  template_id: import.meta.env.VITE_MSG91_SUPPORT_TEMPLATE_ID,
  recipients: [
    {
      to: [
        {
          email: "support@clinzee.com",
          name: "Clinzee Support",
        },
      ],
      variables: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
    },
  ],
});

// Send confirmation email to user
await sendEmailViaMSG91({
  ...commonData,
  template_id: import.meta.env.VITE_MSG91_USER_TEMPLATE_ID,
  recipients: [
    {
      to: [
        {
          email: formData.email,
          name: `${formData.firstName} ${formData.lastName}`,
        },
      ],
      variables: {
        name: `${formData.firstName} ${formData.lastName}`,
        message: formData.message,
      },
    },
  ],
});

      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <div className="pt-28 p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div className="w-1/2">
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
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
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>

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
