const Spot = require("../models/spot");
const User = require("../models/User");

module.exports = {
  async index({ query }, res) {
    const { tech } = query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  },
  async store({ file, body, headers }, res) {
    const { filename: thumbnail } = file;
    const { company, techs, price } = body;
    const { user_id: user } = headers;

    const userConsist = await User.findById(user);

    if (!userConsist)
      return res.status(400).json({ error: "Usuario non exciste" });

    const spot = await Spot.create({
      thumbnail,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price,
      user
    });

    return res.json(spot);
  }
};
