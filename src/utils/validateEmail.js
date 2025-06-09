import axios from "axios";

export const isValidEmailDomain = async (email) => {
  const API_KEY = import.meta.env.VITE_MAILBOXLAYER_API_KEY;
  const url = `https://apilayer.net/api/check?access_key=${API_KEY}&email=${email}&smtp=1&format=1`;

  try {
    const res = await axios.get(url);
    console.log("email validation check:::", res.data);
    const { format_valid, mx_found, smtp_check } = res.data;

    // ✅ All three should be true for a solid check
    return format_valid && mx_found && smtp_check;
  } catch (err) {
    console.error("Mailboxlayer error:", err);
    return false;
  }
};
