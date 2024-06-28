const therapistModel = require("../../models/Therapist/therapistModel");

// Get Therapist Details By ID...

const getTherapistById = async (req, res) => {
  const therapist_id = req.params.id;
  try {
    const therapist = await therapistModel.findById(therapist_id);
    if (!therapist) {
      return res.status(404).json({ error: "Therapist not found" });
    }
    const {_id, name, role } = therapist;
    return res.status(200).json({_id, name, role });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
};

// Get All Therapists Details...

const getAllTherapists = async (req, res) => {
  const { name } = req.query;
  let query = {};
  if (name) {
    query = { name: new RegExp(`^${name.trim()}$`, "i") };
  }

  try {
    const allTherapists = await therapistModel
      .find(query)
      .select("-admin -password");
    return res.send(allTherapists);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Internal server error", details: err.message });
  }
};

module.exports = { getTherapistById, getAllTherapists };
