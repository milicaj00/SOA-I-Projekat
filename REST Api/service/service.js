import { Model } from "../models/Model.js";

export const create = async (req, res) => {
  try {
    const new_data = new Model({
      Age: req.body.Age,
      SystolicBP: req.body.SystolicBP,
      DiastolicBP: req.body.DiastolicBP,
      BS: req.body.BS,
      BodyTemp: req.body.BodyTemp,
      HeartRate: req.body.HeartRate,
      RiskLevel: req.body.RiskLevel,
    });

    return await new_data
      .save()
      .then(() =>
        res.status(200).json({ message: "Successfully added new data" })
      )
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Connection error" });
  }
};

export const get = async (req, res) => {
  try {
    const perPage = req.query.perPage ? req.query.perPage : 25,
      page = req.query.page ? req.query.page : 1;

      /**
       * 
       */

    const data = await Model.find()
      .limit(perPage * 1)
      .skip((page - 1) * perPage);

    const count = await Model.countDocuments();

    return res.status(200).json({
      data,
      totalPages: Math.ceil(count / perPage),
      currentPage: page,
      perPage,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Connection error" });
  }
};

export const deleteData = async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    return res.status(200).json({
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({ message: "Connection error" });
  }
};

export const update = async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    if (!data) {
      return res.status(404).json({ message: "Data not found" });
    }

    return res.status(200).json({ message: "Successfully updated data" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Connection error" });
  }
};
