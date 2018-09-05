const path = require('path');
const fs = require('fs');
const util = require('util');
const multipart = require('connect-multiparty');
const { feedbackCtrl } = require('../controllers/feedbackCtrl');
console.log(feedbackCtrl)
const uploadPath = path.resolve(__dirname + '/../uploads/');
module.exports = function (app) {
	/**
	*	Multiple file uploading and storing at the uploads directory 
	*/
	app.post('/upload',multipart(), (req, res) => {
		let files = util.isArray(req.files.file) ? req.files.file : [req.files.file];

		files.forEach(function (file) {
			fs.rename(file.path, path.resolve(uploadPath, file.name), function(err) {
			  if (err) throw err;
				fs.unlink(file.path, function() {
					if (err) throw err;
				});
			});
		});
		res.contentType('text/html');
		setTimeout((function() {
			res.json({files: files.map(function (file) { return file.name; }) });
		}), 2000);
	});

	/**
	*	Feedback routes
	*/
	app.post('/feedback', (req, res) => {
		console.log(req.body);
		if(req.body) {
			let data = { 
				name: req.body.name,
				description: req.body.description,
			  	files: req.body.files 
			};
			feedbackCtrl.saveData(data).then((data) => {
				res.send({
					success: true
				});
			}) .catch((err) => {
				res.send({
					success: false
				});
			});
		}
	});
}