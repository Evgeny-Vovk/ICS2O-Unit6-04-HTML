// Copyright (c) 2022 Evgeny All rights reserved
//
// Created by: Evgeny
// Created on: June 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-04-HTML/sw.js", {
    scope: "/ICS2O-Unit6-04-HTML/",
  })
}

"use strict"

window.onload = function() {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)
  
  // input
  const radiusSphere = params.get('r')

  // process
  const volume = 4/3 * Math.PI * Math.pow(radiusSphere, 3)
  const dimensions = "r = " + radiusSphere

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
}