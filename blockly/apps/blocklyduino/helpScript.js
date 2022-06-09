/**
 * This file implements javascript code for the help page
 */

// For save and load functions
goog.require('Blockly.BlockSvg');

/**
 * Handles button click for loading demo files. Currently all three demos load the same file, which is hardcoded as var xml
 * @param {string} id The ID number of the selected button 
 */
function demoClick(id) {
  alert('Loaded demo ' + id);
  var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="16" x="88" y="88"><value name="IF0"><block type="inout_digital_read" id="34"><field name="PIN">1</field></block></value><statement name="DO0"><block type="inout_tone_time" id="49"><field name="PIN">2</field><field name="tone_choice">C4</field><field name="duration">1000</field></block></statement></block></xml>';
  setDemoStorage(xml);
}

/**
 * Function for loading XML demo files, currently not working
 */
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert('Success'); 
    }
  };
  xhttp.open("GET", "demo1.xml", true);
  xhttp.send();
}

function setDemoStorage(xml) {
  window.localStorage.setItem('demo', xml);
}