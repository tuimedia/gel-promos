'use strict';

var Promos = require('./gel-promos');

var promoGroups = document.querySelectorAll('.js-promo-group');


document.addEventListener('DOMContentLoaded', function(event) {

  for (var i = 0; i < promoGroups.length; i++) {

    try {
      var args = {
        el: promoGroups[i],
        arg1: 'arg1'
      };
      var promoGroupInstance = new Promos(args);
    } catch (e) {
      if (typeof console !== 'undefined') {
        console.error(e.stack);
      }
    }

  };

});
