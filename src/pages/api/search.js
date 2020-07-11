const phish = require("../../services/phish");

export default async (req, res) => {
  try {
    const searchTerm = req.query.s;

    if (!searchTerm) {
      return res
        .status(400)
        .json({ status: "error", error: "Must provide a search term" });
    }

    const { data } = await phish.get(`/search/${searchTerm}`);
    res.status(200).json({ status: "ok", data });
  } catch (err) {
    res
      .status(err.response.status)
      .json({ status: "error", error: err.response.data.message });
  }
};
