function totalFine(fare) {
	if (typeof fare !== "number" || fare <= 0) {
		return "Invalid";
	}
	const surcharge = fare * (20 / 100);
	const serviceCharge = 30;
	const total = fare + surcharge + serviceCharge;
	return total;
}

// Test Cases
console.log(totalFine(200)); // 270
console.log(totalFine(0)); // Invalid
console.log(totalFine(50)); // 90
console.log(totalFine(552)); // 692.4
console.log(totalFine(-35)); // Invalid
console.log(totalFine("65")); // Invalid
console.log(totalFine("Gorib tai ticket katinai")); // Invalid
