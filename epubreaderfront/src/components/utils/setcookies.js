function setCookie(name, value, expires) {
	let date = new Date();
	date.setTime(date.getTime() + expires * 60 * 60 * 1000);
	let expiresString = "expires=" + date.toUTCString();
	document.cookie = `${name}=${value}; ${expiresString}; path=/`;
}
export default setCookie;
