var mongoose = require("mongoose");

var animeSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    rating: String,
    author:  {
      id :{
          type: mongoose.Schema.Types.ObjectId,
      ref: "User"
      } ,
      userName: String
   },
    comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});


module.exports = mongoose.model("Anime", animeSchema);
