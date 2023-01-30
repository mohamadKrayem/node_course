const express = require("express");

const family = require('../controllers/family.controller');

const familyRouter = express.Router();

//callbacks are in the controller because they controll the req and res;
familyRouter.use(function(req, res, next) {
   console.log("from the familyRouter: ", req.ip);
   next();
});
familyRouter.get("/", family.getAllFamily);
familyRouter.post("/", family.postFamilyMember);
familyRouter.get("/:id", family.getSingleFamilyMember);

module.exports = familyRouter;
