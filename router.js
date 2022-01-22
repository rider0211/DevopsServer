const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const ec2Controller = require('./controllers/ec2Controller');
const budgetController = require('./controllers/budgetController');



module.exports = function(app) {
  app.get('/protected_content', requireAuth, function(req, res) {
    res.send({ message: 'server response:  this GET request has been authorized for a user' });
  });

  app.get('/admin_area', requireAuth, function(req, res, next) {
    res.send({ message: 'server response:  this GET request has been authorized for an admin' });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.post('/admin_activation', Authentication.admin_activation);

  app.post('/plateform/getAllEc2Count', ec2Controller.getAllEc2Count);
  app.post('/plateform/getAllEc2Instance', ec2Controller.getAllEc2Instance);

  app.post('/budget/getM2dDataByMonth', budgetController.getM2dDataByMonth);
  app.post('/budget/getY2mGetData', budgetController.getY2mGetData);
  app.post('/budget/getLtsData', budgetController.getLtsData);


  


}
