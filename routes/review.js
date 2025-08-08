const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapasync.js");

const{isLoggedIn,validateReview,isreviewAuthor}=require("../middleware.js")

const reviewController=require("../controllers/reviews.js");

//post Route for reviews
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.newReview));


//delete route for reviews
router.delete("/:reviewId",isLoggedIn,isreviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;