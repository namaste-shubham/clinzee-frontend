export async function sendEmailViaMSG91({ recipients, from, domain, type }) {
  try {
    const response = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipients, from, domain, type }),
    });

    console.log("response::::", response);

    const text = await response.text(); // Read raw response
    console.log("text: ", text);

    try {
      const data = JSON.parse(text); // Try parsing it as JSON
      console.log("text:", data);
      if (!response.ok) {
        console.error("MSG91 API error:", data);
        throw new Error(data.error || "Failed to send email");
      }
      return data;
    } catch (parseError) {
      console.error("Invalid JSON from Netlify function:", text);
      throw new Error("Unexpected response from server:", parseError);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
