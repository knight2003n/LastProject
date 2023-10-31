const UserController = require('./controllers/UserController');
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController');
const TreeController = require('./controllers/TreeController');

module.exports = (app) => {
    /* RESTful API for users management */
    // get all user
    app.get('/users', isAuthenController, UserController.index);

    // create user
    app.post('/user', UserController.create);

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put);

    // delete user
    app.delete('/user/:userId', UserController.remove);

    // get user by id
    app.get('/user/:userId', UserController.show);

    // get all tree
    app.get('/tree', TreeController.index);

    // create tree
    app.post('/tree', TreeController.create);

    // edit tree
    app.put('/tree/:treeId', TreeController.put);

    // delete tree
    app.delete('/tree/:treeId', TreeController.remove);

    // get tree by id
    app.get('/tree/:treeId', TreeController.show);

    app.post('/login', UserAuthenController.login);
}
