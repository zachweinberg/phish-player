const withSCSS = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
  withSCSS({
    /* config options here */
  })
);
