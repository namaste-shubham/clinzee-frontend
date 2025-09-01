import axios from "axios";

export const isValidEmailDomain = async (email) => {
  const API_KEY = import.meta.env.VITE_MAILBOXLAYER_API_KEY;
  const url = `http://apilayer.net/api/check?access_key=${API_KEY}&email=${email}&smtp=1&format=1`;

  try {
    const res = await axios.get(url);
    const { format_valid, mx_found, smtp_check, did_you_mean, domain } =
      res.data;

    // List of common typos for manual detection
    const commonTypos = {
      "gmeil.com": "gmail.com",
      "gemel.com": "gmail.com",
      "gemeil.com": "gmail.com",
      "gmal.com": "gmail.com",
      "gmai.com": "gmail.com",
      "gmial.com": "gmail.com",
      "gimail.com": "gmail.com",
      "gnail.com": "gmail.com",
      "gimel.com": "gmail.com",
      "gimeil.com": "gmail.com",
      "hotmial.com": "hotmail.com",
      "yaho.com": "yahoo.com",
      "outlok.com": "outlook.com",
    };

    const domainLower = domain.toLowerCase();
    const manualSuggestion = commonTypos[domainLower]
      ? `${email.split("@")[0]}@${commonTypos[domainLower]}`
      : null;

    const isTypo = !!manualSuggestion;
    const isValid = format_valid && mx_found && smtp_check && !isTypo;

    return {
      isValid,
      didYouMean: manualSuggestion || did_you_mean || null,
    };
  } catch (err) {
    console.error("Mailboxlayer error:", err);
    return { isValid: false, didYouMean: null };
  }
};
