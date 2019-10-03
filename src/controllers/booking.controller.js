const Booking = require("../models/booking");
module.exports = {
  async store({ headers, params, body }, res) {
    const { user_id: user } = headers;
    const { spot_id: spot } = params;
    const { date } = body;
    const booking = await Booking.create({
      user,
      spot,
      date
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();

    return res.json({ booking });
  }
};
