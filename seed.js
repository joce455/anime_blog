    var mongoose = require("mongoose");
    var Animes = require("./models/anime");
    var Comment = require("./models/comment");
     
    var data = [
        {
            name: "Baki the gapler", 
            image: "https://vignette.wikia.nocookie.net/baki/images/e/ea/Bakithegrappler.jpg/revision/latest?cb=20111215160533",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            rating: "5"
        },
        {
            name: "Dragon ball super", 
            image: "http://dragonball.sullca.com/wp-content/uploads/2015/07/Dragon-Ball-Super-online.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            rating: "4"
        },
        {
            name: "Boku no hero academia", 
            image: "https://i1.wp.com/freakelitex.com/wp-content/uploads/2018/01/Boku-no-Hero-Academia-3rd-season.jpg?fit=1021%2C574",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            rating: "4"
        },
         {
            name: "Attack on titan", 
            image: "https://i.kinja-img.com/gawker-media/image/upload/s--fO8vE0zZ--/c_scale,f_auto,fl_progressive,q_80,w_800/daxmzx1vcvlhuldxdyro.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            rating: "4"
        }
    ]
     
    function seedDB(){
       
       Animes.remove({}, function(err){
            if(err){
                console.log(err);
            }
           /* console.log("removed dragons!");
            Comment.remove({}, function(err) {
                if(err){
                    console.log(err);
                }
                console.log("removed comments!");
                 
                data.forEach(function(seed){
                    Animes.create(seed, function(err, anime){
                        if(err){
                            console.log(err)
                        } else {
                            console.log("added a saiyan");
                            
                            Comment.create(
                                {
                                    text: "This place is great, but I wish there was internet",
                                    author: "Homer"
                                }, function(err, comment){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        anime.comments.push(comment);
                                        anime.save();
                                        console.log("Created new comment");
                                    }
                                });
                        }
                    });
                });
            });*/
        }); 
    }
     
    module.exports = seedDB;