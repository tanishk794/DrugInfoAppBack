const { Schema, model } = require("mongoose");

const drugSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },

    genericName: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },

    launchDate: {
      type: Date,
      required: true,
    },
  },
  {timestamps : true}
);


const Drug = model("Drug", drugSchema)

module.exports = Drug