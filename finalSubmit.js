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
