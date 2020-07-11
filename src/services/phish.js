const axios = require("axios");

const phish = axios.create({
  baseURL: "http://phish.in/api/v1",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.PHISHIN_API_KEY}`
  }
});

module.exports = phish;
