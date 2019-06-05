var express = require("express"),
    router = express.Router(),
    Animes= require("../models/anime"),
    middleware = require("../middleware");

router.get("/",function (req,res){
	Animes.find({},function(err,Allanimes){
        if(err){
            
        }else{
            res.render("animes/index",{animes:Allanimes})
        }
    })
});

router.get("/new",middleware.isLoggedIn,function (req,res){
    res.render("animes/new");
});

router.get("/:id",function (req,res){
	Animes.findById(req.params.id).populate("comments").exec(function(err, foundAnime){
        if(err){
            console.log(err);
        } else {
            res.render("animes/show", {anime: foundAnime});
        }
    });
});

router.get("/:id/edit",middleware.checkAnimeProperty,function (req,res){
    Animes.findById(req.params.id,function(err, foundAnime){
        res.render("animes/edit", {anime: foundAnime});
    });
});
router.put("/:id",function (req,res){
    Animes.findByIdAndUpdate(req.params.id,req.body.anime,function(err, updateAnime){
        if(err){
            console.log(err);
        } else {
            res.redirect("/animes/"+updateAnime._id)
        }
    });
});

router.delete("/:id",middleware.checkAnimeProperty,function (req,res){
    Animes.findByIdAndRemove(req.params.id,function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/animes")
        }
    });
});

router.post("/",middleware.isLoggedIn,function (req,res){
    var name=req.body.nameanime;
    var image=req.body.image;
    var description=req.body.desc;
    var author= {
        id : req.user.id,
        userName : req.user.local.userName
    };
    var newAnime= {name:name,image:image,description:description,author}
    Animes.create(newAnime, function(err,anime){
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/animes")
        }
    })
});


module.exports = router;