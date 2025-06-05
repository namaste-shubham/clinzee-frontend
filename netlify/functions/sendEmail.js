// import fetch from "node-fetch";
/* eslint-env node */
if (process.env.NETLIFY_DEV) {
  require("dotenv").config();
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { recipients, from, domain, template_id } = JSON.parse(event.body);

    const authKey = process.env.MSG91_AUTHKEY;
    // this is your secret key from env vars
    if (!authKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "MSG91_AUTHKEY not configured" }),
      };
    }

    const response = await fetch(
      "https://control.msg91.com/api/v5/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authkey: authKey,
        },
        body: JSON.stringify({
          recipients,
          from,
          domain,
          template_id,
        }),
      }
    );

    const data = await response.json();

    return {
      statusCode: response.ok ? 200 : response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
}
