const family = require("../models/family.model");//this is the data inside the Model

function getAllFamily(req, res) {
   res.status(200).json(family);//family here is the View
}

function getSingleFamilyMember(req, res) {
   const id = req.params.id;
   if(id>=family.length) {
      res.status(400).json({
         error: "The member does not exist"
      });
   return;
   }
   res.status(200).json(family[id]);
}

function postFamilyMember(req, res) {
   if(!req.body.name) {
      res.status(400).json({
         error: "Missing name property !!"
      })
      return 
   }
   family.push({
      id: family.length,
      name: req.body.name,
      DateOfBirth: req.body.DateOfBirth
   })
   res.status(200).json(family)
}

module.exports = {
   getAllFamily,
   getSingleFamilyMember,
   postFamilyMember
}
