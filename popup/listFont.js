import {potentialFonts} from "./potentialSystemFonts.js";



let Detector = function() {
   /**
  * JavaScript code to detect available availability of a
  * particular font in a browser using JavaScript and CSS.
  *
  * Author : Lalit Patel
  * Website: http://www.lalit.org/lab/javascript-css-font-detect/
  * License: Apache Software License 2.0
  *          http://www.apache.org/licenses/LICENSE-2.0
  * Version: 0.15 (21 Sep 2009)
  *          Changed comparision font to default from sans-default-default,
  *          as in FF3.0 font of child element didn't fallback
  *          to parent element if the font is missing.
  * Version: 0.2 (04 Mar 2012)
  *          Comparing font against all the 3 generic font families ie,
  *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
  *          then that font is 100% not available in the system
  * Version: 0.3 (24 Mar 2012)
  *          Replaced sans with serif in the list of baseFonts
  * 
  * Version: current (modified by Quang Luong)
  *          Modernize JS code
  *          Early return for detect function
  */
  const baseFonts = ['monospace', 'sans-serif', 'serif'];
  const testString = "mmmmmmmmmmlli";
  const testSize = '72px';

  let h = document.getElementsByTagName("body")[0];
  let s = document.createElement("span");
  s.style.fontSize = testSize;
  s.innerHTML = testString;
  let defaultWidth = {};
  let defaultHeight = {};
  for (const font of baseFonts) {
    s.style.fontFamily = font;
    h.appendChild(s);
    defaultWidth[font] = s.offsetWidth;
    defaultHeight[font] = s.offsetHeight;
    h.removeChild(s);
  }

  function detect(font) {
    for (const f of baseFonts) {
      s.style.fontFamily = font + ',' + f;
      h.appendChild(s);
      const matched = (s.offsetWidth != defaultWidth[f] || s.offsetHeight != defaultHeight[f]);
      h.removeChild(s);
      if (matched)
        return true;
    }
    return false;
  }

  this.detect = detect;
};

const select = document.getElementById("dropdown");
const detector = new Detector();

for (const font of potentialFonts) {
  if (detector.detect(font)) {
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(font));
    option.value = font;
    select.appendChild(option);
  }
}