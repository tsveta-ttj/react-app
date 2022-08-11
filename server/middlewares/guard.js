function isAuth() {
    return (req, res, next) => {
        if (req.user){
            next();
        }else {
            res.status(401).json({message: 'Pleage log in'});
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (!req.user){
            next();
        }else {
            res.status(400).json({message: 'You are already signed in'});
        }
    }
}

function isOwner() {
    return (req, res, next) => {
        console.log('req.user', req.user);
        console.log('req.user._id', req.user._id);
        console.log('res.locals.item.owner', res.locals.item.owner);

        if (req.user && req.user._id == res.locals.item.owner._id){
            next();
        }else {
            res.status(403).json({message: 'You cannot modify this record'});
        }
    }

    
}

module.exports = {
    isAuth,
    isGuest,
    isOwner
}