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
        var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="inout_tone_time" id="1" x="113" y="113"><field name="PIN">3</field><field name="tone_choice">D5</field><field name="duration">800</field><next><block type="inout_tone_time" id="2"><field name="PIN">3</field><field name="tone_choice">E5</field><field name="duration">800</field><next><block type="inout_tone_time" id="3"><field name="PIN">3</field><field name="tone_choice">AS4</field><field name="duration">1200</field><next><block type="inout_tone_time" id="4"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="5"><field name="PIN">3</field><field name="tone_choice">F4</field><field name="duration">800</field><next><block type="inout_tone_time" id="6"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="7"><field name="PIN">3</field><field name="tone_choice">D5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="8"><field name="PIN">3</field><field name="tone_choice">F5</field><field name="duration">200</field><next><block type="inout_tone_time" id="9"><field name="PIN">3</field><field name="tone_choice">DS5</field><field name="duration">200</field><next><block type="inout_tone_time" id="10"><field name="PIN">3</field><field name="tone_choice">D5</field><field name="duration">400</field><next><block type="inout_tone_time" id="11"><field name="PIN">3</field><field name="tone_choice">AS4</field><field name="duration">1200</field><next><block type="inout_tone_time" id="12"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">1200</field><next><block type="inout_tone_time" id="13"><field name="PIN">3</field><field name="tone_choice">F4</field><field name="duration">2000</field></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
        break;
      
      case 'demo2':
        var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="inout_digital_write" id="65" x="163" y="164"><field name="PIN">2</field><field name="STAT">LOW</field><next><block type="controls_if" id="66"><value name="IF0"><block type="inout_digital_read" id="67"><field name="PIN">4</field></block></value><statement name="DO0"><block type="inout_digital_write" id="68"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="69"><field name="PIN">3</field><field name="tone_choice">C5</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="70"><value name="IF0"><block type="inout_digital_read" id="71"><field name="PIN">5</field></block></value><statement name="DO0"><block type="inout_digital_write" id="72"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="73"><field name="PIN">3</field><field name="tone_choice">B4</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="74"><value name="IF0"><block type="inout_digital_read" id="75"><field name="PIN">6</field></block></value><statement name="DO0"><block type="inout_digital_write" id="76"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="77"><field name="PIN">3</field><field name="tone_choice">A4</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="78"><value name="IF0"><block type="inout_digital_read" id="79"><field name="PIN">7</field></block></value><statement name="DO0"><block type="inout_digital_write" id="80"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="81"><field name="PIN">3</field><field name="tone_choice">G4</field><field name="duration">10</field></block></next></block></statement><next><block type="controls_if" id="82"><value name="IF0"><block type="inout_digital_read" id="83"><field name="PIN">8</field></block></value><statement name="DO0"><block type="inout_digital_write" id="84"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="inout_tone_time" id="85"><field name="PIN">3</field><field name="tone_choice">F4</field><field name="duration">10</field></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></xml>';
        break;

      case 'demo3':
        var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_for" id="86" x="138" y="37"><field name="VAR">i</field><value name="FROM"><block type="math_number" id="87"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="88"><field name="NUM">10</field></block></value><value name="BY"><block type="variables_get" id="89"><field name="VAR">i</field></block></value><statement name="DO"><block type="inout_digital_write" id="90"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="base_delay" id="91"><value name="DELAY_TIME"><block type="math_number" id="92"><field name="NUM">1000</field></block></value><next><block type="inout_digital_write" id="93"><field name="PIN">2</field><field name="STAT">LOW</field><next><block type="base_delay" id="94"><value name="DELAY_TIME"><block type="math_number" id="95"><field name="NUM">1000</field></block></value><next><block type="variables_set" id="96"><field name="VAR">i</field><value name="VALUE"><block type="math_arithmetic" id="97"><field name="OP">ADD</field><value name="A"><block type="variables_get" id="98"><field name="VAR">i</field></block></value><value name="B"><block type="math_number" id="99"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_for" id="100"><field name="VAR">i</field><value name="FROM"><block type="math_number" id="101"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="102"><field name="NUM">10</field></block></value><value name="BY"><block type="variables_get" id="103"><field name="VAR">i</field></block></value><statement name="DO"><block type="inout_digital_write" id="104"><field name="PIN">2</field><field name="STAT">HIGH</field><next><block type="base_delay" id="105"><value name="DELAY_TIME"><block type="math_number" id="106"><field name="NUM">100</field></block></value><next><block type="inout_digital_write" id="107"><field name="PIN">2</field><field name="STAT">LOW</field><next><block type="base_delay" id="108"><value name="DELAY_TIME"><block type="math_number" id="109"><field name="NUM">100</field></block></value><next><block type="variables_set" id="110"><field name="VAR">i</field><value name="VALUE"><block type="math_arithmetic" id="111"><field name="OP">ADD</field><value name="A"><block type="variables_get" id="112"><field name="VAR">i</field></block></value><value name="B"><block type="math_number" id="113"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></next></block></statement></block></next></block></xml>';
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