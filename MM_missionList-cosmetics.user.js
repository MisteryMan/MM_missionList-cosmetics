// ==UserScript==
// @name         MM_missionList-cosmetics
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://*.missionchief.com/
// @match        https://meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("<style type='text/css' id='MM_missionList-cosmetics'>" +
      ".mission_panel_red > .panel-heading { background-color: #c9302c5e !important; }" +
      ".mission_panel_red > .panel-body { background-color: #c9302c5e !important; }" +
      ".mission_panel_yellow > .panel-heading { background-color: #f1f16f !important; }" +
      ".mission_panel_green > .panel-heading { background-color: lightgreen!important; }" +
      ".panel-default>.panel-heading { background-image: none!important; }" +
      "#missions-panel-body .panel { margin-bottom: -2px; }" +
      ".missionSideBarEntry .panel-heading { padding-top: 0px !important; padding-bottom: 0px !important; } " +
      "</style>").appendTo("head");
})();
