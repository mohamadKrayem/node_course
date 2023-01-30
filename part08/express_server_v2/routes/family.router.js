const express = require("express");

const family = require('../controllers/family.controller');

const familyRouter = express.Router();

//this middleware works only if the server passes through /family so it passes through the familyRouter
familyRouter.use(function(req, res, next) {
   console.log("from the familyRouter: ", req.ip);
   next();
});

//callbacks are in the controller because they controll the req and res;
familyRouter.get("/", family.getAllFamily);
familyRouter.post("/", family.postFamilyMember);
familyRouter.get("/:id", family.getSingleFamilyMember);

module.exports = familyRouter;
