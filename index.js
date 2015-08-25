var nextSpace = module.exports.nextSpace = function(string, startingPosition) {
	startingPosition = startingPosition || { row: 0, col: 0 };
	var index = string.indexOf(' ', (startingPosition.row * 9 + startingPosition.col));
	var result = { };

	result.row = Math.floor(index / 9);
	result.col = index % 9;

	return result;
};