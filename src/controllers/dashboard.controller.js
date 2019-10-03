const Spot = require("../models/spot");

module.exports = {
  async show({ headers }, res) {
    const { user_id: user } = headers;
    const spots = await Spot.find({ user });
    return res.json(spots);
  }
};
