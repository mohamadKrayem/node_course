const familyData = require('../models/family.model');

function getAllFamily(req, res) {
   res.status(200).json(familyData);
}

function getSingleFamilyMember(req, res) {
   if(!familyData[req.params.id]) {
      res.status(404).json({
         error: "Family member is Not found !!!"
      })
      return 
   }
   res.status(200).json(familyData[req.params.id]);
}

function postAFamilyMember(req, res) {
   if(!req.body.name) {
      res.status(400).json({
         error: "Missing name property"
      })
      return 
   }
   familyData.push({
      id: familyData.length,
      name: req.body.name,
      DateOfBirth: req.body.DateOfBirth
   })

   getAllFamily(req, res);
}

module.exports = {
   getAllFamily,
   getSingleFamilyMember,
   postAFamilyMember
}
