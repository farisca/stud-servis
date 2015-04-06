// servis za smještaj JWT tokena u lokalni storage
angular.module('aplikacija').service('AuthToken', function() {
	this.set = function(token, tip) { localStorage.setItem("token", token); localStorage.setItem("tip", tip);};
	this.get = function() { return localStorage.getItem("token"); };
	this.tipKorisnika = function() { return localStorage.getItem("tip"); };
});