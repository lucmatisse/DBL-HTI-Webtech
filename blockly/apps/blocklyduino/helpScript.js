/**
 * This file implements javascript code for the help page
 */

// For save and load functions
goog.require('Blockly.BlockSvg');

/**
 * Handles button click for loading demo files
 * @param {string} id The ID number of the selected button 
 */
function demoClick(id) {
  //alert('Load demo ' + id);
  var xml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="40" x="38" y="13"><value name="IF0"><block type="inout_digital_read" id="68"><field name="PIN">1</field></block></value><statement name="DO0"><block type="inout_tone" id="31"><field name="PIN">2</field><field name="tone_choice">C4</field><field name="duration">1000</field></block></statement></block></xml>';
  test(xml);
}

function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("1").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "demo1.xml", true);
  xhttp.send();
}

function test(xml) {
  try {
    xml = Blockly.Xml.textToDom(xml);
  } catch (e) {
    alert('Error parsing XML:\n' + e);
    return;
  }
  var count = Blockly.mainWorkspace.getAllBlocks().length;
  if (count && confirm('Replace existing blocks?\n"Cancel" will merge.')) {
    Blockly.mainWorkspace.clear();
  }
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
  document.getElementById('load').value = '';
}
