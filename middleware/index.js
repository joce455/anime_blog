
var Animes= require("../models/anime"),
Comment = require("../models/comment"),
User = require("../models/user"),
middlewareObjects={};

middlewareObjects.checkAnimeProperty= function (req, res, next) {
 if(req.isAuthenticated()){
    Animes.findById(req.params.id,function(err, foundAnime){
        if(err){
            console.log(err);
        } else {
            if(foundAnime.author.id.equals(req.user.id)){
                next();
            } else{
                res.redirect("back")
            }
            
        }
    });
    }
    else{
        res.redirect("back")
    }
}

middlewareObjects.checkCommentProperty= function (req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id,function(err, foundComment){
            if(err){
                console.log(err);
            } else {
                if(foundComment.author.id.equals(req.user.id)){
                    next();
                } else{
                    res.redirect("back")
                }
                
            }
        });
        }
        else{
            
            res.redirect("back")
        }
}

middlewareObjects.isLoggedIn=function (req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'You must login first');
    res.redirect('/login');
}

module.exports =  middlewareObjects;
