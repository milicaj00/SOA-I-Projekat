export const validate = async (req, res, next) => {
  let errors = [];
  if (!req.body.Age || req.body.Age < 0) {
    errors.push({ Age: "Not valid age" });
  }
  if (!req.body.SystolicBP || req.body.SystolicBP < 0) {
    errors.push({ SystolicBP: "Not valid SystolicBP" });
  }
  if (!req.body.DiastolicBP || req.body.DiastolicBP < 0) {
    errors.push({ DiastolicBP: "Not valid DiastolicBP" });
  }
  if (!req.body.BS || req.body.BS < 0) {
    errors.push({ BS: "Not valid BS" });
  }
  if (!req.body.BodyTemp || req.body.BodyTemp < 0) {
    errors.push({ BodyTemp: "Not valid BodyTemp" });
  }
  if (!req.body.HeartRate || req.body.HeartRate < 0) {
    errors.push({ HeartRate: "Not valid HeartRate" });
  }
  if (!req.body.RiskLevel || req.body.RiskLevel.length < 1) {
    errors.push({ RiskLevel: "Not valid RiskLevel" });
  }
  if (errors.length) {
    return res.statur(422).json({ errors });
  }
  next();
};
