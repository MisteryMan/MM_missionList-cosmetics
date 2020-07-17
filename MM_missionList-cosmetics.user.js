
// ==UserScript==
// @name         MM_missionList-cosmetics
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       You
// @match        https://*.missionchief.com/
// @match        https://meldkamerspel.com/
// @match        https://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var strReplace = [];
    strReplace = strReplace.concat("Verkeersongeval=VKO");
    strReplace = strReplace.concat("(Melding via OMS / PAC)=(OMS/PAC)");
    strReplace = strReplace.concat("Brand in=BR");

    $("<style type='text/css' id='MM_missionList-cosmetics'>" +
      ".mission_panel_red > .panel-heading { background-color: #c9302c5e !important; }" +
      ".mission_panel_red > .panel-body { background-color: #c9302c5e !important; }" +
      ".mission_panel_yellow > .panel-heading { background-color: #f1f16f !important;}" +
      ".mission_panel_green > .panel-heading { background-color: lightgreen!important;}" +
      ".dark .mission_panel_red > .panel-heading { background-color: #c9302c5e !important;}" +
      ".dark .mission_panel_red > .panel-body { background-color: #c9302c5e !important; }" +
      ".dark .mission_panel_yellow > .panel-heading  { background-color: #8c8c00 !important; }" +
      ".dark .mission_panel_yellow > .panel-body { background-color: #8c8c00 !important; }" +
      ".dark .mission_panel_green > .panel-heading { background-color: #018201!important; }" +
      ".dark .mission_panel_green > .panel-body { background-color: #018201!important; }" +
      "body.dark .mission_panel_green, .mission_panel_yellow, .mission_panel_red .panel-body a { color: #000; }" +
      ".panel-default>.panel-heading { background-image: none!important; }" +
      "#missions-panel-body .panel { margin-bottom: -2px; }" +
      ".missionSideBarEntry .panel-heading { padding-top: 0px !important; padding-bottom: 0px !important; } " +
      ".progressbarMod { width: 120px; height: 16px; }" +
      "#missions-panel-body .progress { margin-left: 5px; margin-top: 3px; }" +
      ".alliance_true.btn-group { height: 22px; }" +
      "</style>").appendTo("head");
//      $("#lss-layout-01").remove();
//      $('<style rel="stylesheet" id="lss-layout-01" type="text/css">#map,#missions-panel-body{height:100%;}#map_outer{top:-19px;width:40%;height:calc(100vh - 90px);padding:0;}#buildings_outer,#chat_outer,#missions_outer,#radio_outer{width:calc(60% - 110px);height:calc(100vh - 90px);margin-left:20px;padding:0!important;float:left;overflow:hidden;overflow-y:hidden;}#buildings_outer,#chat_outer,#radio_outer{display:none;}#missions-panel-body{padding:0!important;}#buildings_outer .panel-body{height:calc(100vh - 135px)!important;padding-bottom:0;max-height:100%!important;}#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 40px)!important;max-height:100%!important;padding-bottom:0!important;}#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0;}#missions{height:100%;}#lssm_layout01_menu{width:45px;position:absolute;top:80px;right:17px;border-radius:5px;z-index:999;}#lssm_layout01_menu div{margin-bottom:20px;}.lssm_menu_btn{padding:10px;background-color:#fff;border-radius:4px;}.lssm_menu_btn:hover{background-color:#fb3c35;cursor:pointer;}.lssm_menu_btn:hover .lssm_menu_btn_svg {-webkit-filter:invert(100%) contrast(10);filter:invert(100%) contrast(10);cursor:pointer;}.lssm_menu_btn_active{padding:10px;background-color:#c9302c;border-radius:4px;}.lssm_menu_btn_active img,.lssm_menu_btn_svg:hover{-webkit-filter:invert(100%) contrast(10);filter:invert(100%) contrast(10);}.lssm_menu_btn_svg{width:20px;}#WachenplanungOnMap_settings{left:0!important;}#missions strong{display:none!important;}</style>').appendTo("head");
      setTimeout(() => { map.invalidateSize(true); }, 100);

    var original_func = missionMarkerAdd;
    setTimeout(() => { moveProgressBar(); }, 2000);
    missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);
        strReplace.forEach(function(item, index) {
            item = item.split("=");
            var content = document.getElementById("mission_caption_" + e.id).innerHTML;
            content = content.replace(item[0], item[1]);
            document.getElementById("mission_caption_" + e.id).innerHTML = content;
        });
        $("#mission_vehicle_state_" + e.id).prependTo("#mission_panel_heading_" + e.id);
        if ($("#mission_panel_heading_" + e.id + " > #creditsmissionlistlabel_" + e.id + "").length == "1") { $("#mission_bar_outer_" + e.id + "").insertBefore("#creditsmissionlistlabel_" + e.id + "");}
        else if ($("#mission_panel_heading_" + e.id + " > #creditsmissionlist_" + e.id + "").length == "1") { $("#mission_bar_outer_" + e.id + "").insertBefore("#creditsmissionlist_" + e.id + "");}
        else { $("#mission_bar_outer_" + e.id).appendTo("#mission_panel_heading_" + e.id); }
        $("#mission_panel_heading_" + e.id + " #mission_bar_outer_" + e.id).addClass("pull-right progressbarMod");
        $("#mission_address_" + e.id).css("display", "none");
        if ($("#mission_old_caption_" + e.id)) { $("#mission_old_caption_" + e.id).css("display", "none"); }

    }
    function moveProgressBar() {
        var i = 0;
        var missionList = $(".missionSideBarEntry").not(".mission_deleted");
        for (i = 0; i < missionList.length; i++) {
            var mission_id = missionList[i].getAttribute("mission_id");
            strReplace.forEach(function(item, index) {
                item = item.split("=");
                var content = document.getElementById("mission_caption_" + mission_id).innerHTML;
                content = content.replace(item[0], item[1]);
                document.getElementById("mission_caption_" + mission_id).innerHTML = content;
            });
            $("#mission_vehicle_state_" + mission_id).prependTo("#mission_panel_heading_" + mission_id);
            if ($("#mission_panel_heading_" + mission_id + " > #creditsmissionlistlabel_" + mission_id).length == "1") { $("#mission_bar_outer_" + mission_id).insertBefore("#creditsmissionlistlabel_" + mission_id); }
            else if ($("#mission_panel_heading_" + mission_id + " > #creditsmissionlist_" + mission_id).length == "1") { $("#mission_bar_outer_" + mission_id).insertBefore("#creditsmissionlist_" + mission_id); }
            else { $("#mission_bar_outer_" + mission_id).appendTo("#mission_panel_heading_" + mission_id); }
            $("#mission_panel_heading_" + mission_id + " #mission_bar_outer_" + mission_id).addClass("pull-right progressbarMod");
            $("#mission_address_" + mission_id).css("display", "none");
            if ($("#mission_old_caption_" + mission_id)) { $("#mission_old_caption_" + mission_id).css("display", "none"); }
            //console.log(document.getElementById("mission_caption_" + mission_id).textContent);


        }

    }
})();