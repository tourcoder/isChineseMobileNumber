'use strict';

exports.ischinesemobilenumber = function ischinesemobilenumber(phonenumber) {
	let checkmobile = /^1[3456789]\d{9}$/;
	if (checkmobile.test(phonenumber)) {
		return true;
	}
	return false; 
}
