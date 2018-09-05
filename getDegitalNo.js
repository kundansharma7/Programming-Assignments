const fs = require('fs');
const { getNumber } = require('./parseDigital');

fs.readFile('./input_user_story_1.txt', 'utf8', function (err, data) {
	if(err) throw err;

	const lines = data.split('\n');
	let outputInvoices = [];
	for (let i=0; i<lines.length; i=i+4) {
		if(lines.slice(i, i+3)[0]) {
		   outputInvoices.push(getNumber(lines.slice(i, i+3)));
		}
	};
	outputInvoices = outputInvoices.join().split(",").join("\n")

	fs.writeFile('output_user_story_1.txt', outputInvoices, function(err) {
		if (err) throw err;
  		console.log('Saved!');
  	});
  	
})