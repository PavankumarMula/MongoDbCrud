const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expenseName: {
    type: String,
    required: true,
  },

  expenseDescription: {
    type: String,
    required: true,
  },

  expensePrice: {
    type: Number,
    required: true,
  },

  expenseQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("Expense", expenseSchema);
