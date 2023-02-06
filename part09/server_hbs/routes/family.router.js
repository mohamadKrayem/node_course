const express = require("express");
const familyController = require("../controllers/family.controller");

const familyRouter = express.Router();

familyRouter.use(function(req, res, next) {
   const timeBeforeThis = Date.now();
   console.log("this message will be displayed after a /family request");
   next();
   const timeToCompleteNext = Date.now() - timeBeforeThis;
   console.log(`The time it took to complete next() is ${timeToCompleteNext} ms`)
})

familyRouter.get("/", familyController.getAllFamily);
familyRouter.get("/:id", familyController.getSingleFamilyMember);
familyRouter.post("/", familyController.postAFamilyMember);

module.exports = familyRouter;
