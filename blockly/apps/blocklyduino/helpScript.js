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

    // switch to implement different xml file to different demo's 
    switch (id) { 

      case 'demo1': 
        var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="inout_tone_time" id="19" x="163" y="113"><field name="PIN">3</field><field name="tone_choice">D5</field><field name="duration">800</field><next><block type="inout_tone_time" id="15"><field name="PIN">3</field><field name="tone_choice">E5</field><field name="duration">800</field><next><block type="inout_tone_time" id="1"><field name="PIN">3</field><field name="tone_choice">AS4</field><field name="duration">1200</field><next><block type="inout_tone_time" id="2"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="3"><field name="PIN">3</field><field name="tone_choice">F4</field><field name="duration">800</field><next><block type="inout_tone_time" id="4"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="5"><field name="PIN">3</field><field name="tone_choice">D5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="6"><field name="PIN">3</field><field name="tone_choice">F5</field><field name="duration">200</field><next><block type="inout_tone_time" id="7"><field name="PIN">3</field><field name="tone_choice">DS5</field><field name="duration">200</field><next><block type="inout_tone_time" id="8"><field name="PIN">3</field><field name="tone_choice">D5</field><field name="duration">400</field><next><block type="inout_tone_time" id="9"><field name="PIN">3</field><field name="tone_choice">AS4</field><field name="duration">1200</field><next><block type="inout_tone_time" id="10"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="11"><field name="PIN">3</field><field name="tone_choice">F4</field><field name="duration">2000</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
        break;
      
      case 'demo2':
        var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="inout_notone" id="306" x="163" y="-13"><field name="PIN">9</field><next><block type="inout_digital_write" id="275"><field name="PIN">7</field><field name="STAT">LOW</field><next><block type="controls_if" id="40"><value name="IF0"><block type="inout_digital_read" id="165"><field name="PIN">2</field></block></value><statement name="DO0"><block type="inout_digital_write" id="93"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="110"><field name="PIN">9</field><field name="tone_choice">C5</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="60"><value name="IF0"><block type="inout_digital_read" id="61"><field name="PIN">3</field></block></value><statement name="DO0"><block type="inout_digital_write" id="94"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="285"><field name="PIN">9</field><field name="tone_choice">B4</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="63"><value name="IF0"><block type="inout_digital_read" id="64"><field name="PIN">4</field></block></value>\
<statement name="DO0"><block type="inout_digital_write" id="95"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="286"><field name="PIN">9</field><field name="tone_choice">A4</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="66"><value name="IF0"><block type="inout_digital_read" id="67"><field name="PIN">5</field></block></value><statement name="DO0"><block type="inout_digital_write" id="96"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="287"><field name="PIN">9</field><field name="tone_choice">G4</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="69"><value name="IF0"><block type="inout_digital_read" id="70"><field name="PIN">6</field></block></value><statement name="DO0"><block type="inout_digital_write" id="97"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="288"><field name="PIN">9</field><field name="tone_choice">F4</field><field name="duration">10</field></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
        break;

      case 'demo3':
        var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_for" id="1" x="138" y="37"><field name="VAR">i</field><value name="FROM"><block type="math_number" id="2"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="3"><field name="NUM">10</field></block></value><value name="BY"><block type="variables_get" id="4"><field name="VAR">i</field></block></value><statement name="DO"><block type="inout_digital_write" id="5"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="base_delay" id="6"><value name="DELAY_TIME"><block type="math_number" id="7"><field name="NUM">1000</field></block></value><next><block type="inout_digital_write" id="8"><field name="PIN">7</field><field name="STAT">LOW</field><next><block type="base_delay" id="9"><value name="DELAY_TIME"><block type="math_number" id="10"><field name="NUM">1000</field></block></value><next><block type="variables_set" id="11"><field name="VAR">i</field><value name="VALUE"><block type="math_arithmetic" id="17"><field name="OP">ADD</field><value name="A"><block type="variables_get" id="28"><field name="VAR">i</field></block></value><value name="B"><block type="math_number" id="33"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_for" id="34"><field name="VAR">i</field><value name="FROM"><block type="math_number" id="35"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="36"><field name="NUM">10</field></block></value><value name="BY">\
<block type="variables_get" id="37"><field name="VAR">i</field></block></value><statement name="DO"><block type="inout_digital_write" id="38"><field name="PIN">7</field><field name="STAT">HIGH</field><next><block type="base_delay" id="39"><value name="DELAY_TIME"><block type="math_number" id="40"><field name="NUM">100</field></block></value><next><block type="inout_digital_write" id="41"><field name="PIN">7</field><field name="STAT">LOW</field><next><block type="base_delay" id="42"><value name="DELAY_TIME"><block type="math_number" id="43"><field name="NUM">100</field></block></value><next><block type="variables_set" id="44"><field name="VAR">i</field><value name="VALUE"><block type="math_arithmetic" id="45"><field name="OP">ADD</field><value name="A"><block type="variables_get" id="46"><field name="VAR">i</field></block></value><value name="B"><block type="math_number" id="47"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>';
        break;
    }

    
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