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

console.log(
	bestTeam(
		{ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
		{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
	)
);
console.log(
	bestTeam(
		{ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
		{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
	)
);
console.log(
	bestTeam(
		{ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
		{ name: "France", foul: 10, cardY: 2, cardR: 1 }
	)
);

console.log(
	bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);
