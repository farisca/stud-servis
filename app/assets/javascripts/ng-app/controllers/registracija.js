angular.module('aplikacija')
    .controller('registerController', function () {
    	this.podaci={};
    	this.errorMsg="";

    	this.isError=function() {
    		return (!(this.errorMsg===""));
    	}
    	this.posalji= function() {
    		this.errorMsg="";
    		if (this.podaci.password != this.podaci.password2) this.errorMsg ="Password i potvrda passworda se razlikuju!";
    	}
        
    });
