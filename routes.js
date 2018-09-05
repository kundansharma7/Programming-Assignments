const feedback = require('./routes/feedback.js');

/**
*  add routes file into below function
*/
module.exports = function (app) {
	feedback(app);
}