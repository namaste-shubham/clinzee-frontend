import axios from "axios";

export const isValidEmailDomain = async (email) => {
  const API_KEY = import.meta.env.VITE_MAILBOXLAYER_API_KEY;
  const url = `https://apilayer.net/api/check?access_key=${API_KEY}&email=${email}&smtp=1&format=1`;

  try {
    const res = await axios.get(url);
    const { format_valid, mx_found, smtp_check, did_you_mean, domain } =
      res.data;

    const domainTypos = [
      "gmeil.com",
      "gmal.com",
      "gmai.com",
      "gmial.com",
      "gimail.com",
    ];
    const isTypo = did_you_mean || domainTypos.includes(domain.toLowerCase());

    const isValid = format_valid && mx_found && smtp_check && !isTypo;

    return { isValid, didYouMean: did_you_mean };
  } catch (err) {
    console.error("Mailboxlayer error:", err);
    return { isValid: false, didYouMean: null };
  }
};
