require("dotenv").config();
const axios = require("axios");

const phish = axios.create({
  baseURL: "http://phish.in/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.PHISHIN_API_KEY}`
  }
});

exports.handler = async (event, context) => {
  if (event.httpMethod === "POST") {
    return {
      statusCode: 405,
      body: { status: "error", error: "Method Not Allowed" }
    };
  }

  const searchTerm = event.queryStringParameters.s || "Phish";

  return phish
    .get(`/search/${searchTerm}`)
    .then(({ data }) => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};
