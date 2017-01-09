'use strict';

function loveit() {

  this.love = function() {
    console.log("Eu me expresso através de código. Essa é minha forma de dizer que Love U <3");
    return "love";
  };

  this.boy = function() {
    console.log("Mozão <3");
    return "Mozão <3";
  };

  this.girl = function() {
    console.log("Mozona <3");
    return "Mozona <3";
  };

}

module.exports = new loveit();
