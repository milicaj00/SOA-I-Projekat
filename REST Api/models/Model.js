import mongoose from "mongoose";

export const Model = new mongoose.model("Data", {
  Age: {
    type: Number,
  },
  SystolicBP: {
    type: Number,
  },
  DiastolicBP: {
    type: Number,
  },
  BS: {
    type: Number,
  },
  BodyTemp: {
    type: Number,
  },
  HeartRate: {
    type: Number,
  },
  RiskLevel: {
    type: String,
  },
});
