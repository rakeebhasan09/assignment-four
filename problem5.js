function resultReport(marks) {
	if (!Array.isArray(marks)) {
		return "Invalid";
	}

	let totalMark = 0;
	const passed = [];
	const failed = [];
	for (const mark of marks) {
		if (mark < 40) {
			failed.push(mark);
		} else {
			passed.push(mark);
		}
		totalMark = totalMark + mark;
	}
	let averageMark;
	if (marks.length === 0) {
		averageMark = 0;
	} else {
		averageMark = parseInt(totalMark / marks.length);
	}

	const feedback = {
		finalScore: averageMark,
		pass: passed.length,
		fail: failed.length,
	};

	return feedback;
}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
