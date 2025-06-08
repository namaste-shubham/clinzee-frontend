import axios from "axios";

export const isValidEmailDomain = async (email) => {
  const API_KEY = import.meta.env.VITE_VALIDATE_EMAIL_API_KEY; // Replace this
  const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${API_KEY}&email=${email}`;

  try {
    const res = await axios.get(url);
    return res.data.is_valid_format.value && res.data.is_smtp_valid.value;
  } catch (err) {
    console.error("Email validation error:", err);
    return false;
  }
};
