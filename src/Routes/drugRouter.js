const express = require("express");
const drugRouter = express.Router("");
const Drug = require("../MongoDB/drugSchema");

drugRouter.get("/api/drug", async (req, res) => {
  const { company, page = 1, limit = 20 } = req.query;

  try {
    let query = {};
    
    if (company) {
      query.company = company;
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const totalCount = await Drug.countDocuments(query);
    const data = await Drug.find(query)
      .sort({ launchDate: -1 })
      .skip(skip)
      .limit(limitNum);

    res.json({
      success: true,
      data: data,
      pagination: {
        hasMore: pageNum * limitNum < totalCount,
        totalCount: totalCount
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data",
      error: error.message
    });
  }
});






drugRouter.get("/api/companies", async (req, res) => {
  try {
    const companies = await Drug.distinct('company').sort();
    res.json({
      success: true,
      data: ['', ...companies] // empty option for "All Companies"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch companies",
      error: error.message
    });
  }
});


module.exports = drugRouter;
