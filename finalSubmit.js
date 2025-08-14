function totalFine(fare) {
	if (typeof fare !== "number" || fare <= 0) {
		return "Invalid";
	}
	const surcharge = fare * (20 / 100);
	const serviceCharge = 30;
	const total = fare + surcharge + serviceCharge;
	return total;
}

function onlyCharacter(str) {
	if (typeof str !== "string") {
		return "Invalid";
	}
	const noSpace = str.replaceAll(" ", "");
	const capitalizeStr = noSpace.toUpperCase();
	return capitalizeStr;
}

function bestTeam(player1, player2) {
	const player1Foul = player1.foul;
	const player1CardY = player1.cardY;
	const player1CardR = player1.cardR;
	const isFare1 = player1Foul + player1CardY + player1CardR;

	const player2Foul = player2.foul;
	const player2CardY = player2.cardY;
	const player2CardR = player2.cardR;
	const isFare2 = player2Foul + player2CardY + player2CardR;

	if (typeof player1 !== "object" || typeof player2 !== "object") {
		return "Invalid";
	} else if (isFare1 == isFare2) {
		return "Tie";
	} else if (isFare1 < isFare2) {
		return player1.name;
	} else {
		return player2.name;
	}
}

function isSame(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
		return "Invalid";
	}
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

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
