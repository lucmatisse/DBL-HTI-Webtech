/**
 * This file implements javascript code for the help page
 */

// For save and load functions
//goog.require('Blockly.BlockSvg');

/**
 * Handles button click for loading demo files
 * @param {string} id The ID number of the selected button 
 */
function demoClick(id) {
  alert('Load demo ' + id);
  loadXMLDoc();
}

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "demo1.xml", true);
  xhttp.send();
}