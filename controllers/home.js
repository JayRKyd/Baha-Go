const Post = require("../models/Post");
const User = require("../models/User")

module.exports = {
    getIndex: async(req, res) => {
        try {
        const limitNumber = 5;
        
            //posts renders the limitnumber variable. so if its 5 will show 5 reviews.
        
        const posts = await Post.find().sort({_id: - 1}).limit(limitNumber)
        // .sort({ createdAt: 'desc' })
        // .lean()
        var users = []
        for(i in posts){
        //   let user = await User.findById(posts[i].user)
        //   users.push(user.userName)
      }  
        res.render("index.ejs", {posts: posts})
        
        } catch (error) {
            res.status(500).send({message: error.message || "Error Occured"})
        } 
    },
};