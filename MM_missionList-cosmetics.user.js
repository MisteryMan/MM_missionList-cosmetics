
// ==UserScript==
// @name         MM_missionList-cosmetics
// @namespace    http://tampermonkey.net/
// @version      0.6
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
      ".progressbarMod { width: 120px; height: 16px; }" +
      "#missions-panel-body .progress { margin-left: 5px; margin-top: 3px; }" +
      "</style>").appendTo("head");

    var original_func = missionMarkerAdd;
    moveProgressBar();
    missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);
        $("#mission_bar_outer_" + e.id).insertBefore("#creditsmissionlistlabel_" + e.id);
        $("#mission_panel_heading_" + e.id + " #mission_bar_outer_" + e.id).addClass("pull-right progressbarMod");
        $("#mission_address_" + e.id).css("display", "none");
        if ($("#mission_old_caption_" + e.id)) { $("#mission_old_caption_" + e.id).css("display", "none"); }

        console.log(e);
    }
    function moveProgressBar() {
        var i = 0;
        var missionList = $("#mission_list .missionSideBarEntry").not(".mission_deleted");
        for (i = 0; i < missionList.length; i++) {
            var mission_id = missionList[i].getAttribute("mission_id");
            $("#mission_bar_outer_" + mission_id).insertBefore("#creditsmissionlistlabel_" + mission_id);
            $("#mission_panel_heading_" + mission_id + " #mission_bar_outer_" + mission_id).addClass("pull-right progressbarMod");
            $("#mission_address_" + mission_id).css("display", "none");
            if ($("#mission_old_caption_" + mission_id)) { $("#mission_old_caption_" + mission_id).css("display", "none"); }

        }

    }
})();