import moment from "moment-timezone";

export default function getNextTime(a, b, c, d, e) {
	let newTimer = "";

	if (a === b) {
		if (c > d) {
			let tTime = new Date(e.setDate(e.getDate() + 1));
			let nTT = `${tTime.toDateString().split(" ").slice(1).join(" ")} ${d}`;
			newTimer = moment.tz(nTT, "MMM Do YYYY hA", "America/Toronto");
		}
		return newTimer.format();
	}
}
