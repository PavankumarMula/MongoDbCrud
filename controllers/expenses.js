const mongoose = require("mongoose");
const Expense = require("../models/expenseModel");
const { ObjectId } = require("mongodb");

// controller for saving expenses
exports.postExpenses = async (req, res) => {
  const { expenseName, description, price, quantity } = req.body;

  try {
    const expense = new Expense({
      expenseName: expenseName,
      expenseDescription: description,
      expensePrice: price,
      expenseQuantity: quantity,
    });

    const savedExpense = await expense.save(); // Wait for the save operation

    // Check if the save operation was successful
    if (savedExpense) {
      return res.status(201).json({
        success: true,
        message: "Expense added successfully",
        expense: savedExpense,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to add expense",
      });
    }
  } catch (error) {
    console.error("Error adding expense:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add expense",
    });
  }
};

// Controller for Fecthing all the expenses
exports.fetchExpenses = async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    if (allExpenses) {
      return res.status(200).json({
        success: true,
        expenses: allExpenses,
        message: "All Expenses fetched",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to add expense",
      });
    }
  } catch (error) {
    console.error("Error adding expense:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add expense",
    });
  }
};

// controller for editing the data
exports.editData = async (req, res) => {
  const { expenseName, description, price, quantity } = req.body;
  const id = req.params.id;

  try {
    // Find the expense to edit
    const expenseToEdit = await Expense.findOne({ _id: id });

    if (!expenseToEdit) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Update the expense data
    expenseToEdit.expenseName = expenseName;
    expenseToEdit.expenseDescription = description;
    expenseToEdit.expensePrice = price;
    expenseToEdit.expenseQuantity = quantity;

    // Save the updated expense
    await expenseToEdit.save();

    return res.status(200).json({ message: "Expense updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// controller for deleting an expense
exports.deleteExpense = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the expense to delete
    const expenseToDelete = await Expense.findOne({ _id: id });

    if (!expenseToDelete) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Delete the expense
    await expenseToDelete.deleteOne(); // or use deleteOne()

    return res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
