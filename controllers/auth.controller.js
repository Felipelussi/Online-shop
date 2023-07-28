function getSignup(req, res){
    res.render('customer/auth/signup')
}

function getLogin(req, res){

}

export default {
    getSignup: getSignup,
    getLogin: getLogin, 

}