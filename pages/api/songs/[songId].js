const phish = require("../../../services/phish");

export default async (req, res) => {
  try {
    const { songId } = req.query;

    if (!songId) {
      return res
        .status(400)
        .json({ status: "error", error: "Must provide a song ID" });
    }

    const { data } = await phish.get(`/songs/${songId}`);
    res.status(200).json({ status: "ok", data });
  } catch (err) {
    res
      .status(err.response.status)
      .json({ status: "error", error: err.response.data.message });
  }
};
