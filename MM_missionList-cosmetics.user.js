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
    $("#lss-layout-01").remove();
    $('<style rel="stylesheet" id="lss-layout-01" type="text/css">#map,#missions-panel-body{height:100%}#map_outer{top:-19px;width:40%;height:calc(100vh - 90px);padding:0}#buildings_outer,#chat_outer,#missions_outer,#radio_outer{width:calc(60% - 110px);height:calc(100vh - 90px);margin-left:20px;padding:0!important;float:left;overflow:hidden;overflow-y:hidden}#buildings_outer,#chat_outer,#radio_outer{display:none}#missions-panel-body{padding:0!important}#buildings_outer .panel-body{height:calc(100vh - 135px)!important;padding-bottom:0;max-height:100%!important}#chat_outer .panel-body,#radio_outer .panel-body{height:calc(100% - 40px)!important;max-height:100%!important;padding-bottom:0!important}#chat_outer>div,#radio>div,#radio_outer>div{height:100%;margin:0}#missions{height:100%}#lssm_layout01_menu{width:45px;position:absolute;top:80px;right:17px;border-radius:5px;z-index:999}#lssm_layout01_menu div{margin-bottom:20px}.lssm_menu_btn{padding:10px;background-color:#fff;border-radius:4px}.lssm_menu_btn:hover{background-color:#fb3c35;cursor:pointer}.lssm_menu_btn:hover .lssm_menu_btn_svg {-webkit-filter:invert(100%) contrast(10);filter:invert(100%) contrast(10);cursor:pointer}.lssm_menu_btn_active{padding:10px;background-color:#c9302c;border-radius:4px}.lssm_menu_btn_active img,.lssm_menu_btn_svg:hover{-webkit-filter:invert(100%) contrast(10);filter:invert(100%) contrast(10)}.lssm_menu_btn_svg{width:20px}#WachenplanungOnMap_settings{left:0!important}#missions strong{display:none!important}</style>').appendTo("head");
})();
