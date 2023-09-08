const express = require("express");
const router = express.Router();
const {postExpenses} = require("../controllers/expenses");
const {fetchExpenses ,editData,deleteExpense} = require("../controllers/expenses");

// Router For Posting Expenses
router.post("/expenses",postExpenses);

// Router For fetching All Expenses
router.get("/display",fetchExpenses);

// Router for Editing the expenses
router.put("/expenses/:id",editData);

// expense for deleting
router.delete("/expenses/:id",deleteExpense);

module.exports = router;