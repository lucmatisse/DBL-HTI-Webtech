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
  var currentButton = document.getElementById(id);
  var active = true;

  // Toggle text of clicked button
  if (currentButton.innerText == 'Try this demo') {
    currentButton.innerText = 'Demo loaded!';
    active = true;      // This click activated this demo
    updateButtons(id);  // Reset the other buttons
  } else {
    currentButton.innerText = 'Try this demo';
    active = false;     // This click deactivated this demo
  }

  // Check if there is a demo loaded and clear it if needed
  if ('localStorage' in window && window.localStorage.demo) {
    window.localStorage.removeItem('demo');
  }
  
  // Load a new demo if this click activated one
  if (active) {
    // Load correct demo, not yet implemented
    // var xml = loadXMLDoc(id) // id corresponds to file name
    
    // Currently has a hardcoded demo as an alternative
    var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="16" x="88" y="88"><value name="IF0"><block type="inout_digital_read" id="34"><field name="PIN">1</field></block></value><statement name="DO0"><block type="inout_tone_time" id="49"><field name="PIN">2</field><field name="tone_choice">C4</field><field name="duration">1000</field></block></statement></block></xml>';
    
    // Load demo file to memory
    setDemoStorage(xml);
  }
}

/**
 * Function that iterates through all buttons when one is clicked and deactivates others 
 * @param {string} id ID value of the clicked button
 */
function updateButtons(id) {
  var demoIDs = ['demo1', 'demo2', 'demo3'];

  for (var i = 0; i < demoIDs.length; i++) {
    if (demoIDs[i] != id) {
      var otherButton = document.getElementById(demoIDs[i]);
      otherButton.innerText = 'Try this demo';
    }
 }
}

/**
 * Function for loading XML demo files, currently not working
 * @param {string} demoName Name of the required demo file in string format
 * @returns {string} String representation of the loaded xml
 */
function loadXMLDoc(demoName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert('Success'); 
      var xml = Blockly.Xml.domToText(this);
      return xml;
    }
  };
  xhttp.open("GET", demoName, true);
  xhttp.send();
}

/**
 * Load a demo to the shared localStorage
 * @param {*} xml The current demo file in XML format (currently string)
 */
function setDemoStorage(xml) {
  window.localStorage.setItem('demo', xml);
}