var express = require("express"),
    router = express.Router({mergeParams:true}),
    Animes= require("../models/anime"),
    Comment = require("../models/comment"),
    User = require("../models/user"),
    middleware = require("../middleware");

router.get("/new",middleware.isLoggedIn,function (req,res){
    Animes.findById(req.params.id,function(err, foundAnime){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {anime: foundAnime});
        }
    });
});
router.post("/",middleware.isLoggedIn,function (req,res){
    var newComment=req.body.comment;
    Animes.findById(req.params.id,function(err, foundAnime){
        if(err){
            console.log(err);
        } else {
              Comment.create(newComment, function(err, comment){
                                    if(err){
                                        console.log(err);
                                    } else {
                                            comment.author.id= req.user.id;
                                            comment.author.userName= req.user.local.userName;
                                            comment.save();
                                            foundAnime.comments.push(comment);
                                            foundAnime.save();
                                            console.log("Created new comment");
                                        
                                    }
                                });
         res.redirect("/animes/"+foundAnime._id);
        }
    });
});

router.get("/:comment_id/edit/",function (req,res){
    Comment.findById(req.params.comment_id,function(err, foundComment){
        res.render("comments/edit", {comment: foundComment,idAnime:req.params.id});
    });
    
});
router.put("/:comment_id",function (req,res){
    Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err, updateComment){
        if(err){
            console.log(err);
        } else {
            res.redirect("/animes/"+req.params.id)
        }
    });
});

router.delete("/:comment_id",middleware.checkCommentProperty,function (req,res){
    Comment.findByIdAndRemove(req.params.comment_id,function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/animes/"+req.params.id)
        }
    });
});


module.exports = router;
