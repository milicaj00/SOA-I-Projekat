import { Model } from "../models/Model.js";

/**
 * GraphQL Resolvers
 **/

export const resolvers = {
  Query: {
    getAllData: (root, args) => {
      console.log({root, args})
      return new Promise((resolve, reject) => {
        const data = Model.find(args.filter).catch((err) => reject(err));
        if (data) {
          resolve(data);
        }
        reject("greska neka");
      });
    },
  },
  Mutation: {
    addData: (root, { input }) => {
      const new_data = new Model({
        Age: input.Age,
        SystolicBP: input.SystolicBP,
        DiastolicBP: input.DiastolicBP,
        BS: input.BS,
        BodyTemp: input.BodyTemp,
        HeartRate: input.HeartRate,
        RiskLevel: input.RiskLevel,
      });

      new_data.id = new_data._id;

      return new Promise((resolve, reject) => {
        new_data.save((err) => {
          if (err) reject(err);
          else resolve(new_data);
        });
      });
    },
  },
};
