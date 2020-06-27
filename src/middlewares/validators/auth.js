const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('error_msg','Please login first');
        res.redirect('/signin');
    }
}
module.exports = helpers;