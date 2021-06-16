// Make the controller for multiple users
module.exports.profile = function(req, res){
    res.render('users', {
        title : "Users Page"
    });
}