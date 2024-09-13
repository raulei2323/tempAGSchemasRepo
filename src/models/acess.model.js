const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    motorDisability: {
      wheelchairAccessible: true,
      ramps: true,
      elevator: true,
      accessibleBathroom: true,
      parking: {
        available: true,
        spaces: 5
      }
    },

    blind: {
      brailleSignage: false,
      audioGuides: true,
      guidePaths: false
    },
    deaf: {
      signLanguage: true,
      visualAlerts: true
    },
    neurodiversity: {
      quietRooms: true,
      staffTraining: true,
      clearSignage: true
    },



})
module.exports = mongoose.model("Access", accessSchema)