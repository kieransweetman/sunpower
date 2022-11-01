/*! For license information please see map.bundle.js.LICENSE.txt */
(() => {
  var t = {
      984: (t, e, i) => {
        'use strict';
        i.d(e, { Z: () => m });
        var n = i(81),
          o = i.n(n),
          r = i(645),
          s = i.n(r),
          a = i(667),
          h = i.n(a),
          l = new URL(i(803), i.b),
          u = new URL(i(134), i.b),
          c = new URL(i(94), i.b),
          d = s()(o()),
          p = h()(l),
          _ = h()(u),
          f = h()(c);
        d.push([
          t.id,
          "/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\twidth: auto;\r\n\tpadding: 0;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\nsvg.leaflet-zoom-animated {\r\n\twill-change: transform;\r\n}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline-offset: 1px;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover,\r\n.leaflet-bar a:focus {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(" +
            p +
            ');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(' +
            _ +
            ');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r\n\tbackground-image: url(' +
            f +
            ');\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover,\r\n.leaflet-control-attribution a:focus {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-attribution-flag {\r\n\tdisplay: inline !important;\r\n\tvertical-align: baseline !important;\r\n\twidth: 1em;\r\n\theight: 0.6669em;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 24px 13px 20px;\r\n\tline-height: 1.3;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\tmin-height: 1px;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 17px 0;\r\n\tmargin: 1.3em 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-top: -1px;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\tpointer-events: auto;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\r\n\tcolor: #757575;\r\n\ttext-decoration: none;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover,\r\n.leaflet-container a.leaflet-popup-close-button:focus {\r\n\tcolor: #585858;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\t-ms-zoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-interactive {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: "";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/* Printing */\r\n\t\r\n@media print {\r\n\t/* Prevent printers from removing background-images of controls. */\r\n\t.leaflet-control {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tprint-color-adjust: exact;\r\n\t\t}\r\n\t}\r\n',
          '',
        ]);
        const m = d;
      },
      645: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var i = '',
                  n = void 0 !== e[5];
                return (
                  e[4] && (i += '@supports ('.concat(e[4], ') {')),
                  e[2] && (i += '@media '.concat(e[2], ' {')),
                  n && (i += '@layer'.concat(e[5].length > 0 ? ' '.concat(e[5]) : '', ' {')),
                  (i += t(e)),
                  n && (i += '}'),
                  e[2] && (i += '}'),
                  e[4] && (i += '}'),
                  i
                );
              }).join('');
            }),
            (e.i = function (t, i, n, o, r) {
              'string' == typeof t && (t = [[null, t, void 0]]);
              var s = {};
              if (n)
                for (var a = 0; a < this.length; a++) {
                  var h = this[a][0];
                  null != h && (s[h] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var u = [].concat(t[l]);
                (n && s[u[0]]) ||
                  (void 0 !== r &&
                    (void 0 === u[5] ||
                      (u[1] = '@layer'.concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {').concat(u[1], '}')),
                    (u[5] = r)),
                  i && (u[2] ? ((u[1] = '@media '.concat(u[2], ' {').concat(u[1], '}')), (u[2] = i)) : (u[2] = i)),
                  o &&
                    (u[4]
                      ? ((u[1] = '@supports ('.concat(u[4], ') {').concat(u[1], '}')), (u[4] = o))
                      : (u[4] = ''.concat(o))),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      667: (t) => {
        'use strict';
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)),
                e.hash && (t += e.hash),
                /["'() \t\n]|(%20)/.test(t) || e.needQuotes
                  ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                  : t)
              : t
          );
        };
      },
      81: (t) => {
        'use strict';
        t.exports = function (t) {
          return t[1];
        };
      },
      243: function (t, e) {
        !(function (t) {
          'use strict';
          function e(t) {
            var e, i, n, o;
            for (i = 1, n = arguments.length; i < n; i++) for (e in (o = arguments[i])) t[e] = o[e];
            return t;
          }
          var i =
            Object.create ||
            (function () {
              function t() {}
              return function (e) {
                return (t.prototype = e), new t();
              };
            })();
          function n(t, e) {
            var i = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
            var n = i.call(arguments, 2);
            return function () {
              return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
            };
          }
          var o = 0;
          function r(t) {
            return '_leaflet_id' in t || (t._leaflet_id = ++o), t._leaflet_id;
          }
          function s(t, e, i) {
            var n, o, r, s;
            return (
              (s = function () {
                (n = !1), o && (r.apply(i, o), (o = !1));
              }),
              (r = function () {
                n ? (o = arguments) : (t.apply(i, arguments), setTimeout(s, e), (n = !0));
              }),
              r
            );
          }
          function a(t, e, i) {
            var n = e[1],
              o = e[0],
              r = n - o;
            return t === n && i ? t : ((((t - o) % r) + r) % r) + o;
          }
          function h() {
            return !1;
          }
          function l(t, e) {
            if (!1 === e) return t;
            var i = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * i) / i;
          }
          function u(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
          }
          function c(t) {
            return u(t).split(/\s+/);
          }
          function d(t, e) {
            for (var n in (Object.prototype.hasOwnProperty.call(t, 'options') ||
              (t.options = t.options ? i(t.options) : {}),
            e))
              t.options[n] = e[n];
            return t.options;
          }
          function p(t, e, i) {
            var n = [];
            for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + '=' + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf('?') ? '&' : '?') + n.join('&');
          }
          var _ = /\{ *([\w_ -]+) *\}/g;
          function f(t, e) {
            return t.replace(_, function (t, i) {
              var n = e[i];
              if (void 0 === n) throw new Error('No value provided for variable ' + t);
              return 'function' == typeof n && (n = n(e)), n;
            });
          }
          var m =
            Array.isArray ||
            function (t) {
              return '[object Array]' === Object.prototype.toString.call(t);
            };
          function g(t, e) {
            for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
            return -1;
          }
          var v = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
          function y(t) {
            return window['webkit' + t] || window['moz' + t] || window['ms' + t];
          }
          var x = 0;
          function b(t) {
            var e = +new Date(),
              i = Math.max(0, 16 - (e - x));
            return (x = e + i), window.setTimeout(t, i);
          }
          var w = window.requestAnimationFrame || y('RequestAnimationFrame') || b,
            P =
              window.cancelAnimationFrame ||
              y('CancelAnimationFrame') ||
              y('CancelRequestAnimationFrame') ||
              function (t) {
                window.clearTimeout(t);
              };
          function T(t, e, i) {
            if (!i || w !== b) return w.call(window, n(t, e));
            t.call(e);
          }
          function z(t) {
            t && P.call(window, t);
          }
          var M = {
            __proto__: null,
            extend: e,
            create: i,
            bind: n,
            get lastId() {
              return o;
            },
            stamp: r,
            throttle: s,
            wrapNum: a,
            falseFn: h,
            formatNum: l,
            trim: u,
            splitWords: c,
            setOptions: d,
            getParamString: p,
            template: f,
            isArray: m,
            indexOf: g,
            emptyImageUrl: v,
            requestFn: w,
            cancelFn: P,
            requestAnimFrame: T,
            cancelAnimFrame: z,
          };
          function k() {}
          (k.extend = function (t) {
            var n = function () {
                d(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
              },
              o = (n.__super__ = this.prototype),
              r = i(o);
            for (var s in ((r.constructor = n), (n.prototype = r), this))
              Object.prototype.hasOwnProperty.call(this, s) &&
                'prototype' !== s &&
                '__super__' !== s &&
                (n[s] = this[s]);
            return (
              t.statics && e(n, t.statics),
              t.includes &&
                ((function (t) {
                  if ('undefined' != typeof L && L && L.Mixin) {
                    t = m(t) ? t : [t];
                    for (var e = 0; e < t.length; e++)
                      t[e] === L.Mixin.Events &&
                        console.warn(
                          'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
                          new Error().stack
                        );
                  }
                })(t.includes),
                e.apply(null, [r].concat(t.includes))),
              e(r, t),
              delete r.statics,
              delete r.includes,
              r.options && ((r.options = o.options ? i(o.options) : {}), e(r.options, t.options)),
              (r._initHooks = []),
              (r.callInitHooks = function () {
                if (!this._initHooksCalled) {
                  o.callInitHooks && o.callInitHooks.call(this), (this._initHooksCalled = !0);
                  for (var t = 0, e = r._initHooks.length; t < e; t++) r._initHooks[t].call(this);
                }
              }),
              n
            );
          }),
            (k.include = function (t) {
              var i = this.prototype.options;
              return (
                e(this.prototype, t), t.options && ((this.prototype.options = i), this.mergeOptions(t.options)), this
              );
            }),
            (k.mergeOptions = function (t) {
              return e(this.prototype.options, t), this;
            }),
            (k.addInitHook = function (t) {
              var e = Array.prototype.slice.call(arguments, 1),
                i =
                  'function' == typeof t
                    ? t
                    : function () {
                        this[t].apply(this, e);
                      };
              return (
                (this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(i), this
              );
            });
          var C = {
            on: function (t, e, i) {
              if ('object' == typeof t) for (var n in t) this._on(n, t[n], e);
              else for (var o = 0, r = (t = c(t)).length; o < r; o++) this._on(t[o], e, i);
              return this;
            },
            off: function (t, e, i) {
              if (arguments.length)
                if ('object' == typeof t) for (var n in t) this._off(n, t[n], e);
                else {
                  t = c(t);
                  for (var o = 1 === arguments.length, r = 0, s = t.length; r < s; r++)
                    o ? this._off(t[r]) : this._off(t[r], e, i);
                }
              else delete this._events;
              return this;
            },
            _on: function (t, e, i, n) {
              if ('function' == typeof e) {
                if (!1 === this._listens(t, e, i)) {
                  i === this && (i = void 0);
                  var o = { fn: e, ctx: i };
                  n && (o.once = !0),
                    (this._events = this._events || {}),
                    (this._events[t] = this._events[t] || []),
                    this._events[t].push(o);
                }
              } else console.warn('wrong listener type: ' + typeof e);
            },
            _off: function (t, e, i) {
              var n, o, r;
              if (this._events && (n = this._events[t]))
                if (1 !== arguments.length)
                  if ('function' == typeof e) {
                    var s = this._listens(t, e, i);
                    if (!1 !== s) {
                      var a = n[s];
                      this._firingCount && ((a.fn = h), (this._events[t] = n = n.slice())), n.splice(s, 1);
                    }
                  } else console.warn('wrong listener type: ' + typeof e);
                else {
                  if (this._firingCount) for (o = 0, r = n.length; o < r; o++) n[o].fn = h;
                  delete this._events[t];
                }
            },
            fire: function (t, i, n) {
              if (!this.listens(t, n)) return this;
              var o = e({}, i, { type: t, target: this, sourceTarget: (i && i.sourceTarget) || this });
              if (this._events) {
                var r = this._events[t];
                if (r) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var s = 0, a = r.length; s < a; s++) {
                    var h = r[s],
                      l = h.fn;
                    h.once && this.off(t, l, h.ctx), l.call(h.ctx || this, o);
                  }
                  this._firingCount--;
                }
              }
              return n && this._propagateEvent(o), this;
            },
            listens: function (t, e, i, n) {
              'string' != typeof t && console.warn('"string" type argument expected');
              var o = e;
              'function' != typeof e && ((n = !!e), (o = void 0), (i = void 0));
              var r = this._events && this._events[t];
              if (r && r.length && !1 !== this._listens(t, o, i)) return !0;
              if (n) for (var s in this._eventParents) if (this._eventParents[s].listens(t, e, i, n)) return !0;
              return !1;
            },
            _listens: function (t, e, i) {
              if (!this._events) return !1;
              var n = this._events[t] || [];
              if (!e) return !!n.length;
              i === this && (i = void 0);
              for (var o = 0, r = n.length; o < r; o++) if (n[o].fn === e && n[o].ctx === i) return o;
              return !1;
            },
            once: function (t, e, i) {
              if ('object' == typeof t) for (var n in t) this._on(n, t[n], e, !0);
              else for (var o = 0, r = (t = c(t)).length; o < r; o++) this._on(t[o], e, i, !0);
              return this;
            },
            addEventParent: function (t) {
              return (this._eventParents = this._eventParents || {}), (this._eventParents[r(t)] = t), this;
            },
            removeEventParent: function (t) {
              return this._eventParents && delete this._eventParents[r(t)], this;
            },
            _propagateEvent: function (t) {
              for (var i in this._eventParents)
                this._eventParents[i].fire(t.type, e({ layer: t.target, propagatedFrom: t.target }, t), !0);
            },
          };
          (C.addEventListener = C.on),
            (C.removeEventListener = C.clearAllEventListeners = C.off),
            (C.addOneTimeEventListener = C.once),
            (C.fireEvent = C.fire),
            (C.hasEventListeners = C.listens);
          var S = k.extend(C);
          function Z(t, e, i) {
            (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
          }
          var E =
            Math.trunc ||
            function (t) {
              return t > 0 ? Math.floor(t) : Math.ceil(t);
            };
          function A(t, e, i) {
            return t instanceof Z
              ? t
              : m(t)
              ? new Z(t[0], t[1])
              : null == t
              ? t
              : 'object' == typeof t && 'x' in t && 'y' in t
              ? new Z(t.x, t.y)
              : new Z(t, e, i);
          }
          function O(t, e) {
            if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
          }
          function I(t, e) {
            return !t || t instanceof O ? t : new O(t, e);
          }
          function B(t, e) {
            if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
          }
          function R(t, e) {
            return t instanceof B ? t : new B(t, e);
          }
          function N(t, e, i) {
            if (isNaN(t) || isNaN(e)) throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
            (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
          }
          function D(t, e, i) {
            return t instanceof N
              ? t
              : m(t) && 'object' != typeof t[0]
              ? 3 === t.length
                ? new N(t[0], t[1], t[2])
                : 2 === t.length
                ? new N(t[0], t[1])
                : null
              : null == t
              ? t
              : 'object' == typeof t && 'lat' in t
              ? new N(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
              : void 0 === e
              ? null
              : new N(t, e, i);
          }
          (Z.prototype = {
            clone: function () {
              return new Z(this.x, this.y);
            },
            add: function (t) {
              return this.clone()._add(A(t));
            },
            _add: function (t) {
              return (this.x += t.x), (this.y += t.y), this;
            },
            subtract: function (t) {
              return this.clone()._subtract(A(t));
            },
            _subtract: function (t) {
              return (this.x -= t.x), (this.y -= t.y), this;
            },
            divideBy: function (t) {
              return this.clone()._divideBy(t);
            },
            _divideBy: function (t) {
              return (this.x /= t), (this.y /= t), this;
            },
            multiplyBy: function (t) {
              return this.clone()._multiplyBy(t);
            },
            _multiplyBy: function (t) {
              return (this.x *= t), (this.y *= t), this;
            },
            scaleBy: function (t) {
              return new Z(this.x * t.x, this.y * t.y);
            },
            unscaleBy: function (t) {
              return new Z(this.x / t.x, this.y / t.y);
            },
            round: function () {
              return this.clone()._round();
            },
            _round: function () {
              return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
            },
            floor: function () {
              return this.clone()._floor();
            },
            _floor: function () {
              return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
            },
            ceil: function () {
              return this.clone()._ceil();
            },
            _ceil: function () {
              return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
            },
            trunc: function () {
              return this.clone()._trunc();
            },
            _trunc: function () {
              return (this.x = E(this.x)), (this.y = E(this.y)), this;
            },
            distanceTo: function (t) {
              var e = (t = A(t)).x - this.x,
                i = t.y - this.y;
              return Math.sqrt(e * e + i * i);
            },
            equals: function (t) {
              return (t = A(t)).x === this.x && t.y === this.y;
            },
            contains: function (t) {
              return (t = A(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
            },
            toString: function () {
              return 'Point(' + l(this.x) + ', ' + l(this.y) + ')';
            },
          }),
            (O.prototype = {
              extend: function (t) {
                var e, i;
                if (!t) return this;
                if (t instanceof Z || 'number' == typeof t[0] || 'x' in t) e = i = A(t);
                else if (((e = (t = I(t)).min), (i = t.max), !e || !i)) return this;
                return (
                  this.min || this.max
                    ? ((this.min.x = Math.min(e.x, this.min.x)),
                      (this.max.x = Math.max(i.x, this.max.x)),
                      (this.min.y = Math.min(e.y, this.min.y)),
                      (this.max.y = Math.max(i.y, this.max.y)))
                    : ((this.min = e.clone()), (this.max = i.clone())),
                  this
                );
              },
              getCenter: function (t) {
                return A((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
              },
              getBottomLeft: function () {
                return A(this.min.x, this.max.y);
              },
              getTopRight: function () {
                return A(this.max.x, this.min.y);
              },
              getTopLeft: function () {
                return this.min;
              },
              getBottomRight: function () {
                return this.max;
              },
              getSize: function () {
                return this.max.subtract(this.min);
              },
              contains: function (t) {
                var e, i;
                return (
                  (t = 'number' == typeof t[0] || t instanceof Z ? A(t) : I(t)) instanceof O
                    ? ((e = t.min), (i = t.max))
                    : (e = i = t),
                  e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
                );
              },
              intersects: function (t) {
                t = I(t);
                var e = this.min,
                  i = this.max,
                  n = t.min,
                  o = t.max,
                  r = o.x >= e.x && n.x <= i.x,
                  s = o.y >= e.y && n.y <= i.y;
                return r && s;
              },
              overlaps: function (t) {
                t = I(t);
                var e = this.min,
                  i = this.max,
                  n = t.min,
                  o = t.max,
                  r = o.x > e.x && n.x < i.x,
                  s = o.y > e.y && n.y < i.y;
                return r && s;
              },
              isValid: function () {
                return !(!this.min || !this.max);
              },
              pad: function (t) {
                var e = this.min,
                  i = this.max,
                  n = Math.abs(e.x - i.x) * t,
                  o = Math.abs(e.y - i.y) * t;
                return I(A(e.x - n, e.y - o), A(i.x + n, i.y + o));
              },
              equals: function (t) {
                return !!t && ((t = I(t)), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
              },
            }),
            (B.prototype = {
              extend: function (t) {
                var e,
                  i,
                  n = this._southWest,
                  o = this._northEast;
                if (t instanceof N) (e = t), (i = t);
                else {
                  if (!(t instanceof B)) return t ? this.extend(D(t) || R(t)) : this;
                  if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
                }
                return (
                  n || o
                    ? ((n.lat = Math.min(e.lat, n.lat)),
                      (n.lng = Math.min(e.lng, n.lng)),
                      (o.lat = Math.max(i.lat, o.lat)),
                      (o.lng = Math.max(i.lng, o.lng)))
                    : ((this._southWest = new N(e.lat, e.lng)), (this._northEast = new N(i.lat, i.lng))),
                  this
                );
              },
              pad: function (t) {
                var e = this._southWest,
                  i = this._northEast,
                  n = Math.abs(e.lat - i.lat) * t,
                  o = Math.abs(e.lng - i.lng) * t;
                return new B(new N(e.lat - n, e.lng - o), new N(i.lat + n, i.lng + o));
              },
              getCenter: function () {
                return new N(
                  (this._southWest.lat + this._northEast.lat) / 2,
                  (this._southWest.lng + this._northEast.lng) / 2
                );
              },
              getSouthWest: function () {
                return this._southWest;
              },
              getNorthEast: function () {
                return this._northEast;
              },
              getNorthWest: function () {
                return new N(this.getNorth(), this.getWest());
              },
              getSouthEast: function () {
                return new N(this.getSouth(), this.getEast());
              },
              getWest: function () {
                return this._southWest.lng;
              },
              getSouth: function () {
                return this._southWest.lat;
              },
              getEast: function () {
                return this._northEast.lng;
              },
              getNorth: function () {
                return this._northEast.lat;
              },
              contains: function (t) {
                t = 'number' == typeof t[0] || t instanceof N || 'lat' in t ? D(t) : R(t);
                var e,
                  i,
                  n = this._southWest,
                  o = this._northEast;
                return (
                  t instanceof B ? ((e = t.getSouthWest()), (i = t.getNorthEast())) : (e = i = t),
                  e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
                );
              },
              intersects: function (t) {
                t = R(t);
                var e = this._southWest,
                  i = this._northEast,
                  n = t.getSouthWest(),
                  o = t.getNorthEast(),
                  r = o.lat >= e.lat && n.lat <= i.lat,
                  s = o.lng >= e.lng && n.lng <= i.lng;
                return r && s;
              },
              overlaps: function (t) {
                t = R(t);
                var e = this._southWest,
                  i = this._northEast,
                  n = t.getSouthWest(),
                  o = t.getNorthEast(),
                  r = o.lat > e.lat && n.lat < i.lat,
                  s = o.lng > e.lng && n.lng < i.lng;
                return r && s;
              },
              toBBoxString: function () {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(',');
              },
              equals: function (t, e) {
                return (
                  !!t &&
                  ((t = R(t)),
                  this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
                );
              },
              isValid: function () {
                return !(!this._southWest || !this._northEast);
              },
            }),
            (N.prototype = {
              equals: function (t, e) {
                return (
                  !!t &&
                  ((t = D(t)),
                  Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                );
              },
              toString: function (t) {
                return 'LatLng(' + l(this.lat, t) + ', ' + l(this.lng, t) + ')';
              },
              distanceTo: function (t) {
                return H.distance(this, D(t));
              },
              wrap: function () {
                return H.wrapLatLng(this);
              },
              toBounds: function (t) {
                var e = (180 * t) / 40075017,
                  i = e / Math.cos((Math.PI / 180) * this.lat);
                return R([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
              },
              clone: function () {
                return new N(this.lat, this.lng, this.alt);
              },
            });
          var j,
            F = {
              latLngToPoint: function (t, e) {
                var i = this.projection.project(t),
                  n = this.scale(e);
                return this.transformation._transform(i, n);
              },
              pointToLatLng: function (t, e) {
                var i = this.scale(e),
                  n = this.transformation.untransform(t, i);
                return this.projection.unproject(n);
              },
              project: function (t) {
                return this.projection.project(t);
              },
              unproject: function (t) {
                return this.projection.unproject(t);
              },
              scale: function (t) {
                return 256 * Math.pow(2, t);
              },
              zoom: function (t) {
                return Math.log(t / 256) / Math.LN2;
              },
              getProjectedBounds: function (t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                  i = this.scale(t);
                return new O(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i));
              },
              infinite: !1,
              wrapLatLng: function (t) {
                var e = this.wrapLng ? a(t.lng, this.wrapLng, !0) : t.lng;
                return new N(this.wrapLat ? a(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
              },
              wrapLatLngBounds: function (t) {
                var e = t.getCenter(),
                  i = this.wrapLatLng(e),
                  n = e.lat - i.lat,
                  o = e.lng - i.lng;
                if (0 === n && 0 === o) return t;
                var r = t.getSouthWest(),
                  s = t.getNorthEast();
                return new B(new N(r.lat - n, r.lng - o), new N(s.lat - n, s.lng - o));
              },
            },
            H = e({}, F, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (t, e) {
                var i = Math.PI / 180,
                  n = t.lat * i,
                  o = e.lat * i,
                  r = Math.sin(((e.lat - t.lat) * i) / 2),
                  s = Math.sin(((e.lng - t.lng) * i) / 2),
                  a = r * r + Math.cos(n) * Math.cos(o) * s * s,
                  h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h;
              },
            }),
            W = 6378137,
            U = {
              R: W,
              MAX_LATITUDE: 85.0511287798,
              project: function (t) {
                var e = Math.PI / 180,
                  i = this.MAX_LATITUDE,
                  n = Math.max(Math.min(i, t.lat), -i),
                  o = Math.sin(n * e);
                return new Z(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
              },
              unproject: function (t) {
                var e = 180 / Math.PI;
                return new N((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
              },
              bounds: ((j = W * Math.PI), new O([-j, -j], [j, j])),
            };
          function V(t, e, i, n) {
            if (m(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
            (this._a = t), (this._b = e), (this._c = i), (this._d = n);
          }
          function q(t, e, i, n) {
            return new V(t, e, i, n);
          }
          V.prototype = {
            transform: function (t, e) {
              return this._transform(t.clone(), e);
            },
            _transform: function (t, e) {
              return (e = e || 1), (t.x = e * (this._a * t.x + this._b)), (t.y = e * (this._c * t.y + this._d)), t;
            },
            untransform: function (t, e) {
              return (e = e || 1), new Z((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
            },
          };
          var G = e({}, H, {
              code: 'EPSG:3857',
              projection: U,
              transformation: (function () {
                var t = 0.5 / (Math.PI * U.R);
                return q(t, 0.5, -t, 0.5);
              })(),
            }),
            K = e({}, G, { code: 'EPSG:900913' });
          function Y(t) {
            return document.createElementNS('http://www.w3.org/2000/svg', t);
          }
          function X(t, e) {
            var i,
              n,
              o,
              r,
              s,
              a,
              h = '';
            for (i = 0, o = t.length; i < o; i++) {
              for (n = 0, r = (s = t[i]).length; n < r; n++) h += (n ? 'L' : 'M') + (a = s[n]).x + ' ' + a.y;
              h += e ? (Ot.svg ? 'z' : 'x') : '';
            }
            return h || 'M0 0';
          }
          var J,
            $ = document.documentElement.style,
            Q = 'ActiveXObject' in window,
            tt = Q && !document.addEventListener,
            et = 'msLaunchUri' in navigator && !('documentMode' in document),
            it = At('webkit'),
            nt = At('android'),
            ot = At('android 2') || At('android 3'),
            rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
            st = nt && At('Google') && rt < 537 && !('AudioNode' in window),
            at = !!window.opera,
            ht = !et && At('chrome'),
            lt = At('gecko') && !it && !at && !Q,
            ut = !ht && At('safari'),
            ct = At('phantom'),
            dt = 'OTransition' in $,
            pt = 0 === navigator.platform.indexOf('Win'),
            _t = Q && 'transition' in $,
            ft = 'WebKitCSSMatrix' in window && 'm11' in new window.WebKitCSSMatrix() && !ot,
            mt = 'MozPerspective' in $,
            gt = !window.L_DISABLE_3D && (_t || ft || mt) && !dt && !ct,
            vt = 'undefined' != typeof orientation || At('mobile'),
            yt = vt && it,
            xt = vt && ft,
            bt = !window.PointerEvent && window.MSPointerEvent,
            wt = !(!window.PointerEvent && !bt),
            Pt = 'ontouchstart' in window || !!window.TouchEvent,
            Lt = !window.L_NO_TOUCH && (Pt || wt),
            Tt = vt && at,
            zt = vt && lt,
            Mt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            kt = (function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, 'passive', {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener('testPassiveEventSupport', h, e),
                  window.removeEventListener('testPassiveEventSupport', h, e);
              } catch (t) {}
              return t;
            })(),
            Ct = !!document.createElement('canvas').getContext,
            St = !(!document.createElementNS || !Y('svg').createSVGRect),
            Zt =
              !!St &&
              (((J = document.createElement('div')).innerHTML = '<svg/>'),
              'http://www.w3.org/2000/svg' === (J.firstChild && J.firstChild.namespaceURI)),
            Et =
              !St &&
              (function () {
                try {
                  var t = document.createElement('div');
                  t.innerHTML = '<v:shape adj="1"/>';
                  var e = t.firstChild;
                  return (e.style.behavior = 'url(#default#VML)'), e && 'object' == typeof e.adj;
                } catch (t) {
                  return !1;
                }
              })();
          function At(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
          }
          var Ot = {
              ie: Q,
              ielt9: tt,
              edge: et,
              webkit: it,
              android: nt,
              android23: ot,
              androidStock: st,
              opera: at,
              chrome: ht,
              gecko: lt,
              safari: ut,
              phantom: ct,
              opera12: dt,
              win: pt,
              ie3d: _t,
              webkit3d: ft,
              gecko3d: mt,
              any3d: gt,
              mobile: vt,
              mobileWebkit: yt,
              mobileWebkit3d: xt,
              msPointer: bt,
              pointer: wt,
              touch: Lt,
              touchNative: Pt,
              mobileOpera: Tt,
              mobileGecko: zt,
              retina: Mt,
              passiveEvents: kt,
              canvas: Ct,
              svg: St,
              vml: Et,
              inlineSvg: Zt,
              mac: 0 === navigator.platform.indexOf('Mac'),
              linux: 0 === navigator.platform.indexOf('Linux'),
            },
            It = Ot.msPointer ? 'MSPointerDown' : 'pointerdown',
            Bt = Ot.msPointer ? 'MSPointerMove' : 'pointermove',
            Rt = Ot.msPointer ? 'MSPointerUp' : 'pointerup',
            Nt = Ot.msPointer ? 'MSPointerCancel' : 'pointercancel',
            Dt = { touchstart: It, touchmove: Bt, touchend: Rt, touchcancel: Nt },
            jt = {
              touchstart: function (t, e) {
                e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Re(e), Gt(t, e);
              },
              touchmove: Gt,
              touchend: Gt,
              touchcancel: Gt,
            },
            Ft = {},
            Ht = !1;
          function Wt(t, e, i) {
            return (
              'touchstart' === e &&
                (Ht ||
                  (document.addEventListener(It, Ut, !0),
                  document.addEventListener(Bt, Vt, !0),
                  document.addEventListener(Rt, qt, !0),
                  document.addEventListener(Nt, qt, !0),
                  (Ht = !0))),
              jt[e]
                ? ((i = jt[e].bind(this, i)), t.addEventListener(Dt[e], i, !1), i)
                : (console.warn('wrong event specified:', e), L.Util.falseFn)
            );
          }
          function Ut(t) {
            Ft[t.pointerId] = t;
          }
          function Vt(t) {
            Ft[t.pointerId] && (Ft[t.pointerId] = t);
          }
          function qt(t) {
            delete Ft[t.pointerId];
          }
          function Gt(t, e) {
            if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || 'mouse')) {
              for (var i in ((e.touches = []), Ft)) e.touches.push(Ft[i]);
              (e.changedTouches = [e]), t(e);
            }
          }
          var Kt,
            Yt,
            Xt,
            Jt,
            $t,
            Qt = fe(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
            te = fe(['webkitTransition', 'transition', 'OTransition', 'MozTransition', 'msTransition']),
            ee = 'webkitTransition' === te || 'OTransition' === te ? te + 'End' : 'transitionend';
          function ie(t) {
            return 'string' == typeof t ? document.getElementById(t) : t;
          }
          function ne(t, e) {
            var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
            if ((!i || 'auto' === i) && document.defaultView) {
              var n = document.defaultView.getComputedStyle(t, null);
              i = n ? n[e] : null;
            }
            return 'auto' === i ? null : i;
          }
          function oe(t, e, i) {
            var n = document.createElement(t);
            return (n.className = e || ''), i && i.appendChild(n), n;
          }
          function re(t) {
            var e = t.parentNode;
            e && e.removeChild(t);
          }
          function se(t) {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
          function ae(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t);
          }
          function he(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
          }
          function le(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var i = pe(t);
            return i.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(i);
          }
          function ue(t, e) {
            if (void 0 !== t.classList) for (var i = c(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
            else if (!le(t, e)) {
              var r = pe(t);
              de(t, (r ? r + ' ' : '') + e);
            }
          }
          function ce(t, e) {
            void 0 !== t.classList ? t.classList.remove(e) : de(t, u((' ' + pe(t) + ' ').replace(' ' + e + ' ', ' ')));
          }
          function de(t, e) {
            void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
          }
          function pe(t) {
            return (
              t.correspondingElement && (t = t.correspondingElement),
              void 0 === t.className.baseVal ? t.className : t.className.baseVal
            );
          }
          function _e(t, e) {
            'opacity' in t.style
              ? (t.style.opacity = e)
              : 'filter' in t.style &&
                (function (t, e) {
                  var i = !1,
                    n = 'DXImageTransform.Microsoft.Alpha';
                  try {
                    i = t.filters.item(n);
                  } catch (t) {
                    if (1 === e) return;
                  }
                  (e = Math.round(100 * e)),
                    i
                      ? ((i.Enabled = 100 !== e), (i.Opacity = e))
                      : (t.style.filter += ' progid:' + n + '(opacity=' + e + ')');
                })(t, e);
          }
          function fe(t) {
            for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
            return !1;
          }
          function me(t, e, i) {
            var n = e || new Z(0, 0);
            t.style[Qt] =
              (Ot.ie3d ? 'translate(' + n.x + 'px,' + n.y + 'px)' : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') +
              (i ? ' scale(' + i + ')' : '');
          }
          function ge(t, e) {
            (t._leaflet_pos = e), Ot.any3d ? me(t, e) : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
          }
          function ve(t) {
            return t._leaflet_pos || new Z(0, 0);
          }
          if ('onselectstart' in document)
            (Kt = function () {
              Me(window, 'selectstart', Re);
            }),
              (Yt = function () {
                Ce(window, 'selectstart', Re);
              });
          else {
            var ye = fe(['userSelect', 'WebkitUserSelect', 'OUserSelect', 'MozUserSelect', 'msUserSelect']);
            (Kt = function () {
              if (ye) {
                var t = document.documentElement.style;
                (Xt = t[ye]), (t[ye] = 'none');
              }
            }),
              (Yt = function () {
                ye && ((document.documentElement.style[ye] = Xt), (Xt = void 0));
              });
          }
          function xe() {
            Me(window, 'dragstart', Re);
          }
          function be() {
            Ce(window, 'dragstart', Re);
          }
          function we(t) {
            for (; -1 === t.tabIndex; ) t = t.parentNode;
            t.style && (Pe(), (Jt = t), ($t = t.style.outline), (t.style.outline = 'none'), Me(window, 'keydown', Pe));
          }
          function Pe() {
            Jt && ((Jt.style.outline = $t), (Jt = void 0), ($t = void 0), Ce(window, 'keydown', Pe));
          }
          function Le(t) {
            do {
              t = t.parentNode;
            } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
            return t;
          }
          function Te(t) {
            var e = t.getBoundingClientRect();
            return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
          }
          var ze = {
            __proto__: null,
            TRANSFORM: Qt,
            TRANSITION: te,
            TRANSITION_END: ee,
            get: ie,
            getStyle: ne,
            create: oe,
            remove: re,
            empty: se,
            toFront: ae,
            toBack: he,
            hasClass: le,
            addClass: ue,
            removeClass: ce,
            setClass: de,
            getClass: pe,
            setOpacity: _e,
            testProp: fe,
            setTransform: me,
            setPosition: ge,
            getPosition: ve,
            get disableTextSelection() {
              return Kt;
            },
            get enableTextSelection() {
              return Yt;
            },
            disableImageDrag: xe,
            enableImageDrag: be,
            preventOutline: we,
            restoreOutline: Pe,
            getSizedParentNode: Le,
            getScale: Te,
          };
          function Me(t, e, i, n) {
            if (e && 'object' == typeof e) for (var o in e) Ee(t, o, e[o], i);
            else for (var r = 0, s = (e = c(e)).length; r < s; r++) Ee(t, e[r], i, n);
            return this;
          }
          var ke = '_leaflet_events';
          function Ce(t, e, i, n) {
            if (1 === arguments.length) Se(t), delete t[ke];
            else if (e && 'object' == typeof e) for (var o in e) Ae(t, o, e[o], i);
            else if (((e = c(e)), 2 === arguments.length))
              Se(t, function (t) {
                return -1 !== g(e, t);
              });
            else for (var r = 0, s = e.length; r < s; r++) Ae(t, e[r], i, n);
            return this;
          }
          function Se(t, e) {
            for (var i in t[ke]) {
              var n = i.split(/\d/)[0];
              (e && !e(n)) || Ae(t, n, null, null, i);
            }
          }
          var Ze = { mouseenter: 'mouseover', mouseleave: 'mouseout', wheel: !('onwheel' in window) && 'mousewheel' };
          function Ee(t, e, i, n) {
            var o = e + r(i) + (n ? '_' + r(n) : '');
            if (t[ke] && t[ke][o]) return this;
            var s = function (e) {
                return i.call(n || t, e || window.event);
              },
              a = s;
            !Ot.touchNative && Ot.pointer && 0 === e.indexOf('touch')
              ? (s = Wt(t, e, s))
              : Ot.touch && 'dblclick' === e
              ? (s = (function (t, e) {
                  t.addEventListener('dblclick', e);
                  var i,
                    n = 0;
                  function o(t) {
                    if (1 === t.detail) {
                      if (
                        'mouse' !== t.pointerType &&
                        (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)
                      ) {
                        var o = De(t);
                        if (
                          !o.some(function (t) {
                            return t instanceof HTMLLabelElement && t.attributes.for;
                          }) ||
                          o.some(function (t) {
                            return t instanceof HTMLInputElement || t instanceof HTMLSelectElement;
                          })
                        ) {
                          var r = Date.now();
                          r - n <= 200
                            ? 2 == ++i &&
                              e(
                                (function (t) {
                                  var e,
                                    i,
                                    n = {};
                                  for (i in t) (e = t[i]), (n[i] = e && e.bind ? e.bind(t) : e);
                                  return (
                                    (t = n),
                                    (n.type = 'dblclick'),
                                    (n.detail = 2),
                                    (n.isTrusted = !1),
                                    (n._simulated = !0),
                                    n
                                  );
                                })(t)
                              )
                            : (i = 1),
                            (n = r);
                        }
                      }
                    } else i = t.detail;
                  }
                  return t.addEventListener('click', o), { dblclick: e, simDblclick: o };
                })(t, s))
              : 'addEventListener' in t
              ? 'touchstart' === e || 'touchmove' === e || 'wheel' === e || 'mousewheel' === e
                ? t.addEventListener(Ze[e] || e, s, !!Ot.passiveEvents && { passive: !1 })
                : 'mouseenter' === e || 'mouseleave' === e
                ? ((s = function (e) {
                    (e = e || window.event), We(t, e) && a(e);
                  }),
                  t.addEventListener(Ze[e], s, !1))
                : t.addEventListener(e, a, !1)
              : t.attachEvent('on' + e, s),
              (t[ke] = t[ke] || {}),
              (t[ke][o] = s);
          }
          function Ae(t, e, i, n, o) {
            o = o || e + r(i) + (n ? '_' + r(n) : '');
            var s = t[ke] && t[ke][o];
            if (!s) return this;
            !Ot.touchNative && Ot.pointer && 0 === e.indexOf('touch')
              ? (function (t, e, i) {
                  Dt[e] ? t.removeEventListener(Dt[e], i, !1) : console.warn('wrong event specified:', e);
                })(t, e, s)
              : Ot.touch && 'dblclick' === e
              ? (function (t, e) {
                  t.removeEventListener('dblclick', e.dblclick), t.removeEventListener('click', e.simDblclick);
                })(t, s)
              : 'removeEventListener' in t
              ? t.removeEventListener(Ze[e] || e, s, !1)
              : t.detachEvent('on' + e, s),
              (t[ke][o] = null);
          }
          function Oe(t) {
            return (
              t.stopPropagation
                ? t.stopPropagation()
                : t.originalEvent
                ? (t.originalEvent._stopped = !0)
                : (t.cancelBubble = !0),
              this
            );
          }
          function Ie(t) {
            return Ee(t, 'wheel', Oe), this;
          }
          function Be(t) {
            return Me(t, 'mousedown touchstart dblclick contextmenu', Oe), (t._leaflet_disable_click = !0), this;
          }
          function Re(t) {
            return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
          }
          function Ne(t) {
            return Re(t), Oe(t), this;
          }
          function De(t) {
            if (t.composedPath) return t.composedPath();
            for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
            return e;
          }
          function je(t, e) {
            if (!e) return new Z(t.clientX, t.clientY);
            var i = Te(e),
              n = i.boundingClientRect;
            return new Z((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop);
          }
          var Fe =
            Ot.linux && Ot.chrome
              ? window.devicePixelRatio
              : Ot.mac
              ? 3 * window.devicePixelRatio
              : window.devicePixelRatio > 0
              ? 2 * window.devicePixelRatio
              : 1;
          function He(t) {
            return Ot.edge
              ? t.wheelDeltaY / 2
              : t.deltaY && 0 === t.deltaMode
              ? -t.deltaY / Fe
              : t.deltaY && 1 === t.deltaMode
              ? 20 * -t.deltaY
              : t.deltaY && 2 === t.deltaMode
              ? 60 * -t.deltaY
              : t.deltaX || t.deltaZ
              ? 0
              : t.wheelDelta
              ? (t.wheelDeltaY || t.wheelDelta) / 2
              : t.detail && Math.abs(t.detail) < 32765
              ? 20 * -t.detail
              : t.detail
              ? (t.detail / -32765) * 60
              : 0;
          }
          function We(t, e) {
            var i = e.relatedTarget;
            if (!i) return !0;
            try {
              for (; i && i !== t; ) i = i.parentNode;
            } catch (t) {
              return !1;
            }
            return i !== t;
          }
          var Ue = {
              __proto__: null,
              on: Me,
              off: Ce,
              stopPropagation: Oe,
              disableScrollPropagation: Ie,
              disableClickPropagation: Be,
              preventDefault: Re,
              stop: Ne,
              getPropagationPath: De,
              getMousePosition: je,
              getWheelDelta: He,
              isExternalTarget: We,
              addListener: Me,
              removeListener: Ce,
            },
            Ve = S.extend({
              run: function (t, e, i, n) {
                this.stop(),
                  (this._el = t),
                  (this._inProgress = !0),
                  (this._duration = i || 0.25),
                  (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
                  (this._startPos = ve(t)),
                  (this._offset = e.subtract(this._startPos)),
                  (this._startTime = +new Date()),
                  this.fire('start'),
                  this._animate();
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete());
              },
              _animate: function () {
                (this._animId = T(this._animate, this)), this._step();
              },
              _step: function (t) {
                var e = +new Date() - this._startTime,
                  i = 1e3 * this._duration;
                e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
              },
              _runFrame: function (t, e) {
                var i = this._startPos.add(this._offset.multiplyBy(t));
                e && i._round(), ge(this._el, i), this.fire('step');
              },
              _complete: function () {
                z(this._animId), (this._inProgress = !1), this.fire('end');
              },
              _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower);
              },
            }),
            qe = S.extend({
              options: {
                crs: G,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
              },
              initialize: function (t, e) {
                (e = d(this, e)),
                  (this._handlers = []),
                  (this._layers = {}),
                  (this._zoomBoundLayers = {}),
                  (this._sizeChanged = !0),
                  this._initContainer(t),
                  this._initLayout(),
                  (this._onResize = n(this._onResize, this)),
                  this._initEvents(),
                  e.maxBounds && this.setMaxBounds(e.maxBounds),
                  void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                  e.center && void 0 !== e.zoom && this.setView(D(e.center), e.zoom, { reset: !0 }),
                  this.callInitHooks(),
                  (this._zoomAnimated = te && Ot.any3d && !Ot.mobileOpera && this.options.zoomAnimation),
                  this._zoomAnimated && (this._createAnimProxy(), Me(this._proxy, ee, this._catchTransitionEnd, this)),
                  this._addLayers(this.options.layers);
              },
              setView: function (t, i, n) {
                return (
                  (i = void 0 === i ? this._zoom : this._limitZoom(i)),
                  (t = this._limitCenter(D(t), i, this.options.maxBounds)),
                  (n = n || {}),
                  this._stop(),
                  this._loaded &&
                  !n.reset &&
                  !0 !== n &&
                  (void 0 !== n.animate &&
                    ((n.zoom = e({ animate: n.animate }, n.zoom)),
                    (n.pan = e({ animate: n.animate, duration: n.duration }, n.pan))),
                  this._zoom !== i
                    ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom)
                    : this._tryAnimatedPan(t, n.pan))
                    ? (clearTimeout(this._sizeTimer), this)
                    : (this._resetView(t, i, n.pan && n.pan.noMoveStart), this)
                );
              },
              setZoom: function (t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : ((this._zoom = t), this);
              },
              zoomIn: function (t, e) {
                return (t = t || (Ot.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
              },
              zoomOut: function (t, e) {
                return (t = t || (Ot.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
              },
              setZoomAround: function (t, e, i) {
                var n = this.getZoomScale(e),
                  o = this.getSize().divideBy(2),
                  r = (t instanceof Z ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                  s = this.containerPointToLatLng(o.add(r));
                return this.setView(s, e, { zoom: i });
              },
              _getBoundsCenterZoom: function (t, e) {
                (e = e || {}), (t = t.getBounds ? t.getBounds() : R(t));
                var i = A(e.paddingTopLeft || e.padding || [0, 0]),
                  n = A(e.paddingBottomRight || e.padding || [0, 0]),
                  o = this.getBoundsZoom(t, !1, i.add(n));
                if ((o = 'number' == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                  return { center: t.getCenter(), zoom: o };
                var r = n.subtract(i).divideBy(2),
                  s = this.project(t.getSouthWest(), o),
                  a = this.project(t.getNorthEast(), o);
                return { center: this.unproject(s.add(a).divideBy(2).add(r), o), zoom: o };
              },
              fitBounds: function (t, e) {
                if (!(t = R(t)).isValid()) throw new Error('Bounds are not valid.');
                var i = this._getBoundsCenterZoom(t, e);
                return this.setView(i.center, i.zoom, e);
              },
              fitWorld: function (t) {
                return this.fitBounds(
                  [
                    [-90, -180],
                    [90, 180],
                  ],
                  t
                );
              },
              panTo: function (t, e) {
                return this.setView(t, this._zoom, { pan: e });
              },
              panBy: function (t, e) {
                if (((e = e || {}), !(t = A(t).round()).x && !t.y)) return this.fire('moveend');
                if (!0 !== e.animate && !this.getSize().contains(t))
                  return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (
                  (this._panAnim ||
                    ((this._panAnim = new Ve()),
                    this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)),
                  e.noMoveStart || this.fire('movestart'),
                  !1 !== e.animate)
                ) {
                  ue(this._mapPane, 'leaflet-pan-anim');
                  var i = this._getMapPanePos().subtract(t).round();
                  this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
                } else this._rawPanBy(t), this.fire('move').fire('moveend');
                return this;
              },
              flyTo: function (t, e, i) {
                if (!1 === (i = i || {}).animate || !Ot.any3d) return this.setView(t, e, i);
                this._stop();
                var n = this.project(this.getCenter()),
                  o = this.project(t),
                  r = this.getSize(),
                  s = this._zoom;
                (t = D(t)), (e = void 0 === e ? s : e);
                var a = Math.max(r.x, r.y),
                  h = a * this.getZoomScale(s, e),
                  l = o.distanceTo(n) || 1,
                  u = 1.42,
                  c = 2.0164;
                function d(t) {
                  var e = (h * h - a * a + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? h : a) * c * l),
                    i = Math.sqrt(e * e + 1) - e;
                  return i < 1e-9 ? -18 : Math.log(i);
                }
                function p(t) {
                  return (Math.exp(t) - Math.exp(-t)) / 2;
                }
                function _(t) {
                  return (Math.exp(t) + Math.exp(-t)) / 2;
                }
                var f = d(0);
                function m(t) {
                  return (a * (_(f) * (p((e = f + u * t)) / _(e)) - p(f))) / c;
                  var e;
                }
                var g = Date.now(),
                  v = (d(1) - f) / u,
                  y = i.duration ? 1e3 * i.duration : 1e3 * v * 0.8;
                return (
                  this._moveStart(!0, i.noMoveStart),
                  function i() {
                    var r = (Date.now() - g) / y,
                      h =
                        (function (t) {
                          return 1 - Math.pow(1 - t, 1.5);
                        })(r) * v;
                    r <= 1
                      ? ((this._flyToFrame = T(i, this)),
                        this._move(
                          this.unproject(n.add(o.subtract(n).multiplyBy(m(h) / l)), s),
                          this.getScaleZoom(
                            a /
                              (function (t) {
                                return a * (_(f) / _(f + u * t));
                              })(h),
                            s
                          ),
                          { flyTo: !0 }
                        ))
                      : this._move(t, e)._moveEnd(!0);
                  }.call(this),
                  this
                );
              },
              flyToBounds: function (t, e) {
                var i = this._getBoundsCenterZoom(t, e);
                return this.flyTo(i.center, i.zoom, e);
              },
              setMaxBounds: function (t) {
                return (
                  (t = R(t)),
                  this.listens('moveend', this._panInsideMaxBounds) && this.off('moveend', this._panInsideMaxBounds),
                  t.isValid()
                    ? ((this.options.maxBounds = t),
                      this._loaded && this._panInsideMaxBounds(),
                      this.on('moveend', this._panInsideMaxBounds))
                    : ((this.options.maxBounds = null), this)
                );
              },
              setMinZoom: function (t) {
                var e = this.options.minZoom;
                return (
                  (this.options.minZoom = t),
                  this._loaded && e !== t && (this.fire('zoomlevelschange'), this.getZoom() < this.options.minZoom)
                    ? this.setZoom(t)
                    : this
                );
              },
              setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return (
                  (this.options.maxZoom = t),
                  this._loaded && e !== t && (this.fire('zoomlevelschange'), this.getZoom() > this.options.maxZoom)
                    ? this.setZoom(t)
                    : this
                );
              },
              panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var i = this.getCenter(),
                  n = this._limitCenter(i, this._zoom, R(t));
                return i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this;
              },
              panInside: function (t, e) {
                var i = A((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                  n = A(e.paddingBottomRight || e.padding || [0, 0]),
                  o = this.project(this.getCenter()),
                  r = this.project(t),
                  s = this.getPixelBounds(),
                  a = I([s.min.add(i), s.max.subtract(n)]),
                  h = a.getSize();
                if (!a.contains(r)) {
                  this._enforcingBounds = !0;
                  var l = r.subtract(a.getCenter()),
                    u = a.extend(r).getSize().subtract(h);
                  (o.x += l.x < 0 ? -u.x : u.x),
                    (o.y += l.y < 0 ? -u.y : u.y),
                    this.panTo(this.unproject(o), e),
                    (this._enforcingBounds = !1);
                }
                return this;
              },
              invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
                var i = this.getSize();
                (this._sizeChanged = !0), (this._lastCenter = null);
                var o = this.getSize(),
                  r = i.divideBy(2).round(),
                  s = o.divideBy(2).round(),
                  a = r.subtract(s);
                return a.x || a.y
                  ? (t.animate && t.pan
                      ? this.panBy(a)
                      : (t.pan && this._rawPanBy(a),
                        this.fire('move'),
                        t.debounceMoveend
                          ? (clearTimeout(this._sizeTimer),
                            (this._sizeTimer = setTimeout(n(this.fire, this, 'moveend'), 200)))
                          : this.fire('moveend')),
                    this.fire('resize', { oldSize: i, newSize: o }))
                  : this;
              },
              stop: function () {
                return (
                  this.setZoom(this._limitZoom(this._zoom)),
                  this.options.zoomSnap || this.fire('viewreset'),
                  this._stop()
                );
              },
              locate: function (t) {
                if (((t = this._locateOptions = e({ timeout: 1e4, watch: !1 }, t)), !('geolocation' in navigator)))
                  return this._handleGeolocationError({ code: 0, message: 'Geolocation not supported.' }), this;
                var i = n(this._handleGeolocationResponse, this),
                  o = n(this._handleGeolocationError, this);
                return (
                  t.watch
                    ? (this._locationWatchId = navigator.geolocation.watchPosition(i, o, t))
                    : navigator.geolocation.getCurrentPosition(i, o, t),
                  this
                );
              },
              stopLocate: function () {
                return (
                  navigator.geolocation &&
                    navigator.geolocation.clearWatch &&
                    navigator.geolocation.clearWatch(this._locationWatchId),
                  this._locateOptions && (this._locateOptions.setView = !1),
                  this
                );
              },
              _handleGeolocationError: function (t) {
                if (this._container._leaflet_id) {
                  var e = t.code,
                    i = t.message || (1 === e ? 'permission denied' : 2 === e ? 'position unavailable' : 'timeout');
                  this._locateOptions.setView && !this._loaded && this.fitWorld(),
                    this.fire('locationerror', { code: e, message: 'Geolocation error: ' + i + '.' });
                }
              },
              _handleGeolocationResponse: function (t) {
                if (this._container._leaflet_id) {
                  var e = new N(t.coords.latitude, t.coords.longitude),
                    i = e.toBounds(2 * t.coords.accuracy),
                    n = this._locateOptions;
                  if (n.setView) {
                    var o = this.getBoundsZoom(i);
                    this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o);
                  }
                  var r = { latlng: e, bounds: i, timestamp: t.timestamp };
                  for (var s in t.coords) 'number' == typeof t.coords[s] && (r[s] = t.coords[s]);
                  this.fire('locationfound', r);
                }
              },
              addHandler: function (t, e) {
                if (!e) return this;
                var i = (this[t] = new e(this));
                return this._handlers.push(i), this.options[t] && i.enable(), this;
              },
              remove: function () {
                if (
                  (this._initEvents(!0),
                  this.options.maxBounds && this.off('moveend', this._panInsideMaxBounds),
                  this._containerId !== this._container._leaflet_id)
                )
                  throw new Error('Map container is being reused by another instance');
                try {
                  delete this._container._leaflet_id, delete this._containerId;
                } catch (t) {
                  (this._container._leaflet_id = void 0), (this._containerId = void 0);
                }
                var t;
                for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
                this._stop(),
                re(this._mapPane),
                this._clearControlPos && this._clearControlPos(),
                this._resizeRequest && (z(this._resizeRequest), (this._resizeRequest = null)),
                this._clearHandlers(),
                this._loaded && this.fire('unload'),
                this._layers))
                  this._layers[t].remove();
                for (t in this._panes) re(this._panes[t]);
                return (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this;
              },
              createPane: function (t, e) {
                var i = oe(
                  'div',
                  'leaflet-pane' + (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
                  e || this._mapPane
                );
                return t && (this._panes[t] = i), i;
              },
              getCenter: function () {
                return (
                  this._checkIfLoaded(),
                  this._lastCenter && !this._moved()
                    ? this._lastCenter.clone()
                    : this.layerPointToLatLng(this._getCenterLayerPoint())
                );
              },
              getZoom: function () {
                return this._zoom;
              },
              getBounds: function () {
                var t = this.getPixelBounds();
                return new B(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
              },
              getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
              },
              getMaxZoom: function () {
                return void 0 === this.options.maxZoom
                  ? void 0 === this._layersMaxZoom
                    ? 1 / 0
                    : this._layersMaxZoom
                  : this.options.maxZoom;
              },
              getBoundsZoom: function (t, e, i) {
                (t = R(t)), (i = A(i || [0, 0]));
                var n = this.getZoom() || 0,
                  o = this.getMinZoom(),
                  r = this.getMaxZoom(),
                  s = t.getNorthWest(),
                  a = t.getSouthEast(),
                  h = this.getSize().subtract(i),
                  l = I(this.project(a, n), this.project(s, n)).getSize(),
                  u = Ot.any3d ? this.options.zoomSnap : 1,
                  c = h.x / l.x,
                  d = h.y / l.y,
                  p = e ? Math.max(c, d) : Math.min(c, d);
                return (
                  (n = this.getScaleZoom(p, n)),
                  u &&
                    ((n = Math.round(n / (u / 100)) * (u / 100)),
                    (n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u)),
                  Math.max(o, Math.min(r, n))
                );
              },
              getSize: function () {
                return (
                  (this._size && !this._sizeChanged) ||
                    ((this._size = new Z(this._container.clientWidth || 0, this._container.clientHeight || 0)),
                    (this._sizeChanged = !1)),
                  this._size.clone()
                );
              },
              getPixelBounds: function (t, e) {
                var i = this._getTopLeftPoint(t, e);
                return new O(i, i.add(this.getSize()));
              },
              getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin;
              },
              getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
              },
              getPane: function (t) {
                return 'string' == typeof t ? this._panes[t] : t;
              },
              getPanes: function () {
                return this._panes;
              },
              getContainer: function () {
                return this._container;
              },
              getZoomScale: function (t, e) {
                var i = this.options.crs;
                return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
              },
              getScaleZoom: function (t, e) {
                var i = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var n = i.zoom(t * i.scale(e));
                return isNaN(n) ? 1 / 0 : n;
              },
              project: function (t, e) {
                return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint(D(t), e);
              },
              unproject: function (t, e) {
                return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(A(t), e);
              },
              layerPointToLatLng: function (t) {
                var e = A(t).add(this.getPixelOrigin());
                return this.unproject(e);
              },
              latLngToLayerPoint: function (t) {
                return this.project(D(t))._round()._subtract(this.getPixelOrigin());
              },
              wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(D(t));
              },
              wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(R(t));
              },
              distance: function (t, e) {
                return this.options.crs.distance(D(t), D(e));
              },
              containerPointToLayerPoint: function (t) {
                return A(t).subtract(this._getMapPanePos());
              },
              layerPointToContainerPoint: function (t) {
                return A(t).add(this._getMapPanePos());
              },
              containerPointToLatLng: function (t) {
                var e = this.containerPointToLayerPoint(A(t));
                return this.layerPointToLatLng(e);
              },
              latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(D(t)));
              },
              mouseEventToContainerPoint: function (t) {
                return je(t, this._container);
              },
              mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
              },
              mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
              },
              _initContainer: function (t) {
                var e = (this._container = ie(t));
                if (!e) throw new Error('Map container not found.');
                if (e._leaflet_id) throw new Error('Map container is already initialized.');
                Me(e, 'scroll', this._onScroll, this), (this._containerId = r(e));
              },
              _initLayout: function () {
                var t = this._container;
                (this._fadeAnimated = this.options.fadeAnimation && Ot.any3d),
                  ue(
                    t,
                    'leaflet-container' +
                      (Ot.touch ? ' leaflet-touch' : '') +
                      (Ot.retina ? ' leaflet-retina' : '') +
                      (Ot.ielt9 ? ' leaflet-oldie' : '') +
                      (Ot.safari ? ' leaflet-safari' : '') +
                      (this._fadeAnimated ? ' leaflet-fade-anim' : '')
                  );
                var e = ne(t, 'position');
                'absolute' !== e && 'relative' !== e && 'fixed' !== e && (t.style.position = 'relative'),
                  this._initPanes(),
                  this._initControlPos && this._initControlPos();
              },
              _initPanes: function () {
                var t = (this._panes = {});
                (this._paneRenderers = {}),
                  (this._mapPane = this.createPane('mapPane', this._container)),
                  ge(this._mapPane, new Z(0, 0)),
                  this.createPane('tilePane'),
                  this.createPane('overlayPane'),
                  this.createPane('shadowPane'),
                  this.createPane('markerPane'),
                  this.createPane('tooltipPane'),
                  this.createPane('popupPane'),
                  this.options.markerZoomAnimation ||
                    (ue(t.markerPane, 'leaflet-zoom-hide'), ue(t.shadowPane, 'leaflet-zoom-hide'));
              },
              _resetView: function (t, e, i) {
                ge(this._mapPane, new Z(0, 0));
                var n = !this._loaded;
                (this._loaded = !0), (e = this._limitZoom(e)), this.fire('viewprereset');
                var o = this._zoom !== e;
                this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire('viewreset'), n && this.fire('load');
              },
              _moveStart: function (t, e) {
                return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
              },
              _move: function (t, e, i, n) {
                void 0 === e && (e = this._zoom);
                var o = this._zoom !== e;
                return (
                  (this._zoom = e),
                  (this._lastCenter = t),
                  (this._pixelOrigin = this._getNewPixelOrigin(t)),
                  n
                    ? i && i.pinch && this.fire('zoom', i)
                    : ((o || (i && i.pinch)) && this.fire('zoom', i), this.fire('move', i)),
                  this
                );
              },
              _moveEnd: function (t) {
                return t && this.fire('zoomend'), this.fire('moveend');
              },
              _stop: function () {
                return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
              },
              _rawPanBy: function (t) {
                ge(this._mapPane, this._getMapPanePos().subtract(t));
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom();
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
              },
              _checkIfLoaded: function () {
                if (!this._loaded) throw new Error('Set map center and zoom first.');
              },
              _initEvents: function (t) {
                (this._targets = {}), (this._targets[r(this._container)] = this);
                var e = t ? Ce : Me;
                e(
                  this._container,
                  'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
                  this._handleDOMEvent,
                  this
                ),
                  this.options.trackResize && e(window, 'resize', this._onResize, this),
                  Ot.any3d &&
                    this.options.transform3DLimit &&
                    (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
              },
              _onResize: function () {
                z(this._resizeRequest),
                  (this._resizeRequest = T(function () {
                    this.invalidateSize({ debounceMoveend: !0 });
                  }, this));
              },
              _onScroll: function () {
                (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
              },
              _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit &&
                  this._resetView(this.getCenter(), this.getZoom());
              },
              _findEventTargets: function (t, e) {
                for (
                  var i, n = [], o = 'mouseout' === e || 'mouseover' === e, s = t.target || t.srcElement, a = !1;
                  s;

                ) {
                  if ((i = this._targets[r(s)]) && ('click' === e || 'preclick' === e) && this._draggableMoved(i)) {
                    a = !0;
                    break;
                  }
                  if (i && i.listens(e, !0)) {
                    if (o && !We(s, t)) break;
                    if ((n.push(i), o)) break;
                  }
                  if (s === this._container) break;
                  s = s.parentNode;
                }
                return n.length || a || o || !this.listens(e, !0) || (n = [this]), n;
              },
              _isClickDisabled: function (t) {
                for (; t && t !== this._container; ) {
                  if (t._leaflet_disable_click) return !0;
                  t = t.parentNode;
                }
              },
              _handleDOMEvent: function (t) {
                var e = t.target || t.srcElement;
                if (!(!this._loaded || e._leaflet_disable_events || ('click' === t.type && this._isClickDisabled(e)))) {
                  var i = t.type;
                  'mousedown' === i && we(e), this._fireDOMEvent(t, i);
                }
              },
              _mouseEvents: ['click', 'dblclick', 'mouseover', 'mouseout', 'contextmenu'],
              _fireDOMEvent: function (t, i, n) {
                if ('click' === t.type) {
                  var o = e({}, t);
                  (o.type = 'preclick'), this._fireDOMEvent(o, o.type, n);
                }
                var r = this._findEventTargets(t, i);
                if (n) {
                  for (var s = [], a = 0; a < n.length; a++) n[a].listens(i, !0) && s.push(n[a]);
                  r = s.concat(r);
                }
                if (r.length) {
                  'contextmenu' === i && Re(t);
                  var h = r[0],
                    l = { originalEvent: t };
                  if ('keypress' !== t.type && 'keydown' !== t.type && 'keyup' !== t.type) {
                    var u = h.getLatLng && (!h._radius || h._radius <= 10);
                    (l.containerPoint = u
                      ? this.latLngToContainerPoint(h.getLatLng())
                      : this.mouseEventToContainerPoint(t)),
                      (l.layerPoint = this.containerPointToLayerPoint(l.containerPoint)),
                      (l.latlng = u ? h.getLatLng() : this.layerPointToLatLng(l.layerPoint));
                  }
                  for (a = 0; a < r.length; a++)
                    if (
                      (r[a].fire(i, l, !0),
                      l.originalEvent._stopped ||
                        (!1 === r[a].options.bubblingMouseEvents && -1 !== g(this._mouseEvents, i)))
                    )
                      return;
                }
              },
              _draggableMoved: function (t) {
                return (
                  ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) ||
                  (this.boxZoom && this.boxZoom.moved())
                );
              },
              _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
              },
              whenReady: function (t, e) {
                return this._loaded ? t.call(e || this, { target: this }) : this.on('load', t, e), this;
              },
              _getMapPanePos: function () {
                return ve(this._mapPane) || new Z(0, 0);
              },
              _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0]);
              },
              _getTopLeftPoint: function (t, e) {
                return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(
                  this._getMapPanePos()
                );
              },
              _getNewPixelOrigin: function (t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
              },
              _latLngToNewLayerPoint: function (t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return this.project(t, e)._subtract(n);
              },
              _latLngBoundsToNewLayerBounds: function (t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return I([
                  this.project(t.getSouthWest(), e)._subtract(n),
                  this.project(t.getNorthWest(), e)._subtract(n),
                  this.project(t.getSouthEast(), e)._subtract(n),
                  this.project(t.getNorthEast(), e)._subtract(n),
                ]);
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
              },
              _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
              },
              _limitCenter: function (t, e, i) {
                if (!i) return t;
                var n = this.project(t, e),
                  o = this.getSize().divideBy(2),
                  r = new O(n.subtract(o), n.add(o)),
                  s = this._getBoundsOffset(r, i, e);
                return s.round().equals([0, 0]) ? t : this.unproject(n.add(s), e);
              },
              _limitOffset: function (t, e) {
                if (!e) return t;
                var i = this.getPixelBounds(),
                  n = new O(i.min.add(t), i.max.add(t));
                return t.add(this._getBoundsOffset(n, e));
              },
              _getBoundsOffset: function (t, e, i) {
                var n = I(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                  o = n.min.subtract(t.min),
                  r = n.max.subtract(t.max);
                return new Z(this._rebound(o.x, -r.x), this._rebound(o.y, -r.y));
              },
              _rebound: function (t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
              },
              _limitZoom: function (t) {
                var e = this.getMinZoom(),
                  i = this.getMaxZoom(),
                  n = Ot.any3d ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
              },
              _onPanTransitionStep: function () {
                this.fire('move');
              },
              _onPanTransitionEnd: function () {
                ce(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
              },
              _tryAnimatedPan: function (t, e) {
                var i = this._getCenterOffset(t)._trunc();
                return !((!0 !== (e && e.animate) && !this.getSize().contains(i)) || (this.panBy(i, e), 0));
              },
              _createAnimProxy: function () {
                var t = (this._proxy = oe('div', 'leaflet-proxy leaflet-zoom-animated'));
                this._panes.mapPane.appendChild(t),
                  this.on(
                    'zoomanim',
                    function (t) {
                      var e = Qt,
                        i = this._proxy.style[e];
                      me(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                        i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
                    },
                    this
                  ),
                  this.on('load moveend', this._animMoveEnd, this),
                  this._on('unload', this._destroyAnimProxy, this);
              },
              _destroyAnimProxy: function () {
                re(this._proxy), this.off('load moveend', this._animMoveEnd, this), delete this._proxy;
              },
              _animMoveEnd: function () {
                var t = this.getCenter(),
                  e = this.getZoom();
                me(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
              },
              _catchTransitionEnd: function (t) {
                this._animatingZoom && t.propertyName.indexOf('transform') >= 0 && this._onZoomTransitionEnd();
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName('leaflet-zoom-animated').length;
              },
              _tryAnimatedZoom: function (t, e, i) {
                if (this._animatingZoom) return !0;
                if (
                  ((i = i || {}),
                  !this._zoomAnimated ||
                    !1 === i.animate ||
                    this._nothingToAnimate() ||
                    Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                )
                  return !1;
                var n = this.getZoomScale(e),
                  o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(
                  (!0 !== i.animate && !this.getSize().contains(o)) ||
                  (T(function () {
                    this._moveStart(!0, !1)._animateZoom(t, e, !0);
                  }, this),
                  0)
                );
              },
              _animateZoom: function (t, e, i, o) {
                this._mapPane &&
                  (i &&
                    ((this._animatingZoom = !0),
                    (this._animateToCenter = t),
                    (this._animateToZoom = e),
                    ue(this._mapPane, 'leaflet-zoom-anim')),
                  this.fire('zoomanim', { center: t, zoom: e, noUpdate: o }),
                  this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
                  this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                  setTimeout(n(this._onZoomTransitionEnd, this), 250));
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom &&
                  (this._mapPane && ce(this._mapPane, 'leaflet-zoom-anim'),
                  (this._animatingZoom = !1),
                  this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                  this._tempFireZoomEvent && this.fire('zoom'),
                  delete this._tempFireZoomEvent,
                  this.fire('move'),
                  this._moveEnd(!0));
              },
            });
          var Ge = k.extend({
              options: { position: 'topright' },
              initialize: function (t) {
                d(this, t);
              },
              getPosition: function () {
                return this.options.position;
              },
              setPosition: function (t) {
                var e = this._map;
                return e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this;
              },
              getContainer: function () {
                return this._container;
              },
              addTo: function (t) {
                this.remove(), (this._map = t);
                var e = (this._container = this.onAdd(t)),
                  i = this.getPosition(),
                  n = t._controlCorners[i];
                return (
                  ue(e, 'leaflet-control'),
                  -1 !== i.indexOf('bottom') ? n.insertBefore(e, n.firstChild) : n.appendChild(e),
                  this._map.on('unload', this.remove, this),
                  this
                );
              },
              remove: function () {
                return this._map
                  ? (re(this._container),
                    this.onRemove && this.onRemove(this._map),
                    this._map.off('unload', this.remove, this),
                    (this._map = null),
                    this)
                  : this;
              },
              _refocusOnMap: function (t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
              },
            }),
            Ke = function (t) {
              return new Ge(t);
            };
          qe.include({
            addControl: function (t) {
              return t.addTo(this), this;
            },
            removeControl: function (t) {
              return t.remove(), this;
            },
            _initControlPos: function () {
              var t = (this._controlCorners = {}),
                e = 'leaflet-',
                i = (this._controlContainer = oe('div', e + 'control-container', this._container));
              function n(n, o) {
                var r = e + n + ' ' + e + o;
                t[n + o] = oe('div', r, i);
              }
              n('top', 'left'), n('top', 'right'), n('bottom', 'left'), n('bottom', 'right');
            },
            _clearControlPos: function () {
              for (var t in this._controlCorners) re(this._controlCorners[t]);
              re(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
            },
          });
          var Ye = Ge.extend({
              options: {
                collapsed: !0,
                position: 'topright',
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (t, e, i, n) {
                  return i < n ? -1 : n < i ? 1 : 0;
                },
              },
              initialize: function (t, e, i) {
                for (var n in (d(this, i),
                (this._layerControlInputs = []),
                (this._layers = []),
                (this._lastZIndex = 0),
                (this._handlingClick = !1),
                t))
                  this._addLayer(t[n], n);
                for (n in e) this._addLayer(e[n], n, !0);
              },
              onAdd: function (t) {
                this._initLayout(), this._update(), (this._map = t), t.on('zoomend', this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++)
                  this._layers[e].layer.on('add remove', this._onLayerChange, this);
                return this._container;
              },
              addTo: function (t) {
                return Ge.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
              },
              onRemove: function () {
                this._map.off('zoomend', this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++)
                  this._layers[t].layer.off('add remove', this._onLayerChange, this);
              },
              addBaseLayer: function (t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this;
              },
              addOverlay: function (t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this;
              },
              removeLayer: function (t) {
                t.off('add remove', this._onLayerChange, this);
                var e = this._getLayer(r(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
              },
              expand: function () {
                ue(this._container, 'leaflet-control-layers-expanded'), (this._section.style.height = null);
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return (
                  t < this._section.clientHeight
                    ? (ue(this._section, 'leaflet-control-layers-scrollbar'), (this._section.style.height = t + 'px'))
                    : ce(this._section, 'leaflet-control-layers-scrollbar'),
                  this._checkDisabledLayers(),
                  this
                );
              },
              collapse: function () {
                return ce(this._container, 'leaflet-control-layers-expanded'), this;
              },
              _initLayout: function () {
                var t = 'leaflet-control-layers',
                  e = (this._container = oe('div', t)),
                  i = this.options.collapsed;
                e.setAttribute('aria-haspopup', !0), Be(e), Ie(e);
                var n = (this._section = oe('section', t + '-list'));
                i &&
                  (this._map.on('click', this.collapse, this),
                  Me(
                    e,
                    {
                      mouseenter: function () {
                        Me(n, 'click', Re),
                          this.expand(),
                          setTimeout(function () {
                            Ce(n, 'click', Re);
                          });
                      },
                      mouseleave: this.collapse,
                    },
                    this
                  ));
                var o = (this._layersLink = oe('a', t + '-toggle', e));
                (o.href = '#'),
                  (o.title = 'Layers'),
                  o.setAttribute('role', 'button'),
                  Me(o, 'click', Re),
                  Me(o, 'focus', this.expand, this),
                  i || this.expand(),
                  (this._baseLayersList = oe('div', t + '-base', n)),
                  (this._separator = oe('div', t + '-separator', n)),
                  (this._overlaysList = oe('div', t + '-overlays', n)),
                  e.appendChild(n);
              },
              _getLayer: function (t) {
                for (var e = 0; e < this._layers.length; e++)
                  if (this._layers[e] && r(this._layers[e].layer) === t) return this._layers[e];
              },
              _addLayer: function (t, e, i) {
                this._map && t.on('add remove', this._onLayerChange, this),
                  this._layers.push({ layer: t, name: e, overlay: i }),
                  this.options.sortLayers &&
                    this._layers.sort(
                      n(function (t, e) {
                        return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                      }, this)
                    ),
                  this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                  this._expandIfNotCollapsed();
              },
              _update: function () {
                if (!this._container) return this;
                se(this._baseLayersList), se(this._overlaysList), (this._layerControlInputs = []);
                var t,
                  e,
                  i,
                  n,
                  o = 0;
                for (i = 0; i < this._layers.length; i++)
                  (n = this._layers[i]),
                    this._addItem(n),
                    (e = e || n.overlay),
                    (t = t || !n.overlay),
                    (o += n.overlay ? 0 : 1);
                return (
                  this.options.hideSingleBase &&
                    ((t = t && o > 1), (this._baseLayersList.style.display = t ? '' : 'none')),
                  (this._separator.style.display = e && t ? '' : 'none'),
                  this
                );
              },
              _onLayerChange: function (t) {
                this._handlingClick || this._update();
                var e = this._getLayer(r(t.target)),
                  i = e.overlay
                    ? 'add' === t.type
                      ? 'overlayadd'
                      : 'overlayremove'
                    : 'add' === t.type
                    ? 'baselayerchange'
                    : null;
                i && this._map.fire(i, e);
              },
              _createRadioElement: function (t, e) {
                var i =
                    '<input type="radio" class="leaflet-control-layers-selector" name="' +
                    t +
                    '"' +
                    (e ? ' checked="checked"' : '') +
                    '/>',
                  n = document.createElement('div');
                return (n.innerHTML = i), n.firstChild;
              },
              _addItem: function (t) {
                var e,
                  i = document.createElement('label'),
                  n = this._map.hasLayer(t.layer);
                t.overlay
                  ? (((e = document.createElement('input')).type = 'checkbox'),
                    (e.className = 'leaflet-control-layers-selector'),
                    (e.defaultChecked = n))
                  : (e = this._createRadioElement('leaflet-base-layers_' + r(this), n)),
                  this._layerControlInputs.push(e),
                  (e.layerId = r(t.layer)),
                  Me(e, 'click', this._onInputClick, this);
                var o = document.createElement('span');
                o.innerHTML = ' ' + t.name;
                var s = document.createElement('span');
                return (
                  i.appendChild(s),
                  s.appendChild(e),
                  s.appendChild(o),
                  (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
                  this._checkDisabledLayers(),
                  i
                );
              },
              _onInputClick: function () {
                var t,
                  e,
                  i = this._layerControlInputs,
                  n = [],
                  o = [];
                this._handlingClick = !0;
                for (var r = i.length - 1; r >= 0; r--)
                  (t = i[r]), (e = this._getLayer(t.layerId).layer), t.checked ? n.push(e) : t.checked || o.push(e);
                for (r = 0; r < o.length; r++) this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                for (r = 0; r < n.length; r++) this._map.hasLayer(n[r]) || this._map.addLayer(n[r]);
                (this._handlingClick = !1), this._refocusOnMap();
              },
              _checkDisabledLayers: function () {
                for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
                  (t = i[o]),
                    (e = this._getLayer(t.layerId).layer),
                    (t.disabled =
                      (void 0 !== e.options.minZoom && n < e.options.minZoom) ||
                      (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
              },
              _expandIfNotCollapsed: function () {
                return this._map && !this.options.collapsed && this.expand(), this;
              },
            }),
            Xe = Ge.extend({
              options: {
                position: 'topleft',
                zoomInText: '<span aria-hidden="true">+</span>',
                zoomInTitle: 'Zoom in',
                zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                zoomOutTitle: 'Zoom out',
              },
              onAdd: function (t) {
                var e = 'leaflet-control-zoom',
                  i = oe('div', e + ' leaflet-bar'),
                  n = this.options;
                return (
                  (this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + '-in', i, this._zoomIn)),
                  (this._zoomOutButton = this._createButton(
                    n.zoomOutText,
                    n.zoomOutTitle,
                    e + '-out',
                    i,
                    this._zoomOut
                  )),
                  this._updateDisabled(),
                  t.on('zoomend zoomlevelschange', this._updateDisabled, this),
                  i
                );
              },
              onRemove: function (t) {
                t.off('zoomend zoomlevelschange', this._updateDisabled, this);
              },
              disable: function () {
                return (this._disabled = !0), this._updateDisabled(), this;
              },
              enable: function () {
                return (this._disabled = !1), this._updateDisabled(), this;
              },
              _zoomIn: function (t) {
                !this._disabled &&
                  this._map._zoom < this._map.getMaxZoom() &&
                  this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
              },
              _zoomOut: function (t) {
                !this._disabled &&
                  this._map._zoom > this._map.getMinZoom() &&
                  this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
              },
              _createButton: function (t, e, i, n, o) {
                var r = oe('a', i, n);
                return (
                  (r.innerHTML = t),
                  (r.href = '#'),
                  (r.title = e),
                  r.setAttribute('role', 'button'),
                  r.setAttribute('aria-label', e),
                  Be(r),
                  Me(r, 'click', Ne),
                  Me(r, 'click', o, this),
                  Me(r, 'click', this._refocusOnMap, this),
                  r
                );
              },
              _updateDisabled: function () {
                var t = this._map,
                  e = 'leaflet-disabled';
                ce(this._zoomInButton, e),
                  ce(this._zoomOutButton, e),
                  this._zoomInButton.setAttribute('aria-disabled', 'false'),
                  this._zoomOutButton.setAttribute('aria-disabled', 'false'),
                  (this._disabled || t._zoom === t.getMinZoom()) &&
                    (ue(this._zoomOutButton, e), this._zoomOutButton.setAttribute('aria-disabled', 'true')),
                  (this._disabled || t._zoom === t.getMaxZoom()) &&
                    (ue(this._zoomInButton, e), this._zoomInButton.setAttribute('aria-disabled', 'true'));
              },
            });
          qe.mergeOptions({ zoomControl: !0 }),
            qe.addInitHook(function () {
              this.options.zoomControl && ((this.zoomControl = new Xe()), this.addControl(this.zoomControl));
            });
          var Je = Ge.extend({
              options: { position: 'bottomleft', maxWidth: 100, metric: !0, imperial: !0 },
              onAdd: function (t) {
                var e = 'leaflet-control-scale',
                  i = oe('div', e),
                  n = this.options;
                return (
                  this._addScales(n, e + '-line', i),
                  t.on(n.updateWhenIdle ? 'moveend' : 'move', this._update, this),
                  t.whenReady(this._update, this),
                  i
                );
              },
              onRemove: function (t) {
                t.off(this.options.updateWhenIdle ? 'moveend' : 'move', this._update, this);
              },
              _addScales: function (t, e, i) {
                t.metric && (this._mScale = oe('div', e, i)), t.imperial && (this._iScale = oe('div', e, i));
              },
              _update: function () {
                var t = this._map,
                  e = t.getSize().y / 2,
                  i = t.distance(
                    t.containerPointToLatLng([0, e]),
                    t.containerPointToLatLng([this.options.maxWidth, e])
                  );
                this._updateScales(i);
              },
              _updateScales: function (t) {
                this.options.metric && t && this._updateMetric(t),
                  this.options.imperial && t && this._updateImperial(t);
              },
              _updateMetric: function (t) {
                var e = this._getRoundNum(t),
                  i = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
                this._updateScale(this._mScale, i, e / t);
              },
              _updateImperial: function (t) {
                var e,
                  i,
                  n,
                  o = 3.2808399 * t;
                o > 5280
                  ? ((e = o / 5280), (i = this._getRoundNum(e)), this._updateScale(this._iScale, i + ' mi', i / e))
                  : ((n = this._getRoundNum(o)), this._updateScale(this._iScale, n + ' ft', n / o));
              },
              _updateScale: function (t, e, i) {
                (t.style.width = Math.round(this.options.maxWidth * i) + 'px'), (t.innerHTML = e);
              },
              _getRoundNum: function (t) {
                var e = Math.pow(10, (Math.floor(t) + '').length - 1),
                  i = t / e;
                return e * (i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1);
              },
            }),
            $e = Ge.extend({
              options: {
                position: 'bottomright',
                prefix:
                  '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                  (Ot.inlineSvg
                    ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> '
                    : '') +
                  'Leaflet</a>',
              },
              initialize: function (t) {
                d(this, t), (this._attributions = {});
              },
              onAdd: function (t) {
                for (var e in ((t.attributionControl = this),
                (this._container = oe('div', 'leaflet-control-attribution')),
                Be(this._container),
                t._layers))
                  t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), t.on('layeradd', this._addAttribution, this), this._container;
              },
              onRemove: function (t) {
                t.off('layeradd', this._addAttribution, this);
              },
              _addAttribution: function (t) {
                t.layer.getAttribution &&
                  (this.addAttribution(t.layer.getAttribution()),
                  t.layer.once(
                    'remove',
                    function () {
                      this.removeAttribution(t.layer.getAttribution());
                    },
                    this
                  ));
              },
              setPrefix: function (t) {
                return (this.options.prefix = t), this._update(), this;
              },
              addAttribution: function (t) {
                return t
                  ? (this._attributions[t] || (this._attributions[t] = 0),
                    this._attributions[t]++,
                    this._update(),
                    this)
                  : this;
              },
              removeAttribution: function (t) {
                return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
              },
              _update: function () {
                if (this._map) {
                  var t = [];
                  for (var e in this._attributions) this._attributions[e] && t.push(e);
                  var i = [];
                  this.options.prefix && i.push(this.options.prefix),
                    t.length && i.push(t.join(', ')),
                    (this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> '));
                }
              },
            });
          qe.mergeOptions({ attributionControl: !0 }),
            qe.addInitHook(function () {
              this.options.attributionControl && new $e().addTo(this);
            });
          (Ge.Layers = Ye),
            (Ge.Zoom = Xe),
            (Ge.Scale = Je),
            (Ge.Attribution = $e),
            (Ke.layers = function (t, e, i) {
              return new Ye(t, e, i);
            }),
            (Ke.zoom = function (t) {
              return new Xe(t);
            }),
            (Ke.scale = function (t) {
              return new Je(t);
            }),
            (Ke.attribution = function (t) {
              return new $e(t);
            });
          var Qe = k.extend({
            initialize: function (t) {
              this._map = t;
            },
            enable: function () {
              return this._enabled || ((this._enabled = !0), this.addHooks()), this;
            },
            disable: function () {
              return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
            },
            enabled: function () {
              return !!this._enabled;
            },
          });
          Qe.addTo = function (t, e) {
            return t.addHandler(e, this), this;
          };
          var ti,
            ei = { Events: C },
            ii = Ot.touch ? 'touchstart mousedown' : 'mousedown',
            ni = S.extend({
              options: { clickTolerance: 3 },
              initialize: function (t, e, i, n) {
                d(this, n), (this._element = t), (this._dragStartTarget = e || t), (this._preventOutline = i);
              },
              enable: function () {
                this._enabled || (Me(this._dragStartTarget, ii, this._onDown, this), (this._enabled = !0));
              },
              disable: function () {
                this._enabled &&
                  (ni._dragging === this && this.finishDrag(!0),
                  Ce(this._dragStartTarget, ii, this._onDown, this),
                  (this._enabled = !1),
                  (this._moved = !1));
              },
              _onDown: function (t) {
                if (this._enabled && ((this._moved = !1), !le(this._element, 'leaflet-zoom-anim')))
                  if (t.touches && 1 !== t.touches.length) ni._dragging === this && this.finishDrag();
                  else if (
                    !(
                      ni._dragging ||
                      t.shiftKey ||
                      (1 !== t.which && 1 !== t.button && !t.touches) ||
                      ((ni._dragging = this), this._preventOutline && we(this._element), xe(), Kt(), this._moving)
                    )
                  ) {
                    this.fire('down');
                    var e = t.touches ? t.touches[0] : t,
                      i = Le(this._element);
                    (this._startPoint = new Z(e.clientX, e.clientY)),
                      (this._startPos = ve(this._element)),
                      (this._parentScale = Te(i));
                    var n = 'mousedown' === t.type;
                    Me(document, n ? 'mousemove' : 'touchmove', this._onMove, this),
                      Me(document, n ? 'mouseup' : 'touchend touchcancel', this._onUp, this);
                  }
              },
              _onMove: function (t) {
                if (this._enabled)
                  if (t.touches && t.touches.length > 1) this._moved = !0;
                  else {
                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                      i = new Z(e.clientX, e.clientY)._subtract(this._startPoint);
                    (i.x || i.y) &&
                      (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                        ((i.x /= this._parentScale.x),
                        (i.y /= this._parentScale.y),
                        Re(t),
                        this._moved ||
                          (this.fire('dragstart'),
                          (this._moved = !0),
                          ue(document.body, 'leaflet-dragging'),
                          (this._lastTarget = t.target || t.srcElement),
                          window.SVGElementInstance &&
                            this._lastTarget instanceof window.SVGElementInstance &&
                            (this._lastTarget = this._lastTarget.correspondingUseElement),
                          ue(this._lastTarget, 'leaflet-drag-target')),
                        (this._newPos = this._startPos.add(i)),
                        (this._moving = !0),
                        (this._lastEvent = t),
                        this._updatePosition()));
                  }
              },
              _updatePosition: function () {
                var t = { originalEvent: this._lastEvent };
                this.fire('predrag', t), ge(this._element, this._newPos), this.fire('drag', t);
              },
              _onUp: function () {
                this._enabled && this.finishDrag();
              },
              finishDrag: function (t) {
                ce(document.body, 'leaflet-dragging'),
                  this._lastTarget && (ce(this._lastTarget, 'leaflet-drag-target'), (this._lastTarget = null)),
                  Ce(document, 'mousemove touchmove', this._onMove, this),
                  Ce(document, 'mouseup touchend touchcancel', this._onUp, this),
                  be(),
                  Yt(),
                  this._moved &&
                    this._moving &&
                    this.fire('dragend', { noInertia: t, distance: this._newPos.distanceTo(this._startPos) }),
                  (this._moving = !1),
                  (ni._dragging = !1);
              },
            });
          function oi(t, e) {
            if (!e || !t.length) return t.slice();
            var i = e * e;
            return (function (t, e) {
              var i = t.length,
                n = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(i);
              (n[0] = n[i - 1] = 1), si(t, n, e, 0, i - 1);
              var o,
                r = [];
              for (o = 0; o < i; o++) n[o] && r.push(t[o]);
              return r;
            })(
              (t = (function (t, e) {
                for (var i = [t[0]], n = 1, o = 0, r = t.length; n < r; n++)
                  ui(t[n], t[o]) > e && (i.push(t[n]), (o = n));
                return o < r - 1 && i.push(t[r - 1]), i;
              })(t, i)),
              i
            );
          }
          function ri(t, e, i) {
            return Math.sqrt(ci(t, e, i, !0));
          }
          function si(t, e, i, n, o) {
            var r,
              s,
              a,
              h = 0;
            for (s = n + 1; s <= o - 1; s++) (a = ci(t[s], t[n], t[o], !0)) > h && ((r = s), (h = a));
            h > i && ((e[r] = 1), si(t, e, i, n, r), si(t, e, i, r, o));
          }
          function ai(t, e, i, n, o) {
            var r,
              s,
              a,
              h = n ? ti : li(t, i),
              l = li(e, i);
            for (ti = l; ; ) {
              if (!(h | l)) return [t, e];
              if (h & l) return !1;
              (a = li((s = hi(t, e, (r = h || l), i, o)), i)), r === h ? ((t = s), (h = a)) : ((e = s), (l = a));
            }
          }
          function hi(t, e, i, n, o) {
            var r,
              s,
              a = e.x - t.x,
              h = e.y - t.y,
              l = n.min,
              u = n.max;
            return (
              8 & i
                ? ((r = t.x + (a * (u.y - t.y)) / h), (s = u.y))
                : 4 & i
                ? ((r = t.x + (a * (l.y - t.y)) / h), (s = l.y))
                : 2 & i
                ? ((r = u.x), (s = t.y + (h * (u.x - t.x)) / a))
                : 1 & i && ((r = l.x), (s = t.y + (h * (l.x - t.x)) / a)),
              new Z(r, s, o)
            );
          }
          function li(t, e) {
            var i = 0;
            return (
              t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
              t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
              i
            );
          }
          function ui(t, e) {
            var i = e.x - t.x,
              n = e.y - t.y;
            return i * i + n * n;
          }
          function ci(t, e, i, n) {
            var o,
              r = e.x,
              s = e.y,
              a = i.x - r,
              h = i.y - s,
              l = a * a + h * h;
            return (
              l > 0 &&
                ((o = ((t.x - r) * a + (t.y - s) * h) / l) > 1
                  ? ((r = i.x), (s = i.y))
                  : o > 0 && ((r += a * o), (s += h * o))),
              (a = t.x - r),
              (h = t.y - s),
              n ? a * a + h * h : new Z(r, s)
            );
          }
          function di(t) {
            return !m(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
          }
          function pi(t) {
            return console.warn('Deprecated use of _flat, please use L.LineUtil.isFlat instead.'), di(t);
          }
          function _i(t, e) {
            var i, n, o, r, s, a, h, l;
            if (!t || 0 === t.length) throw new Error('latlngs not passed');
            di(t) || (console.warn('latlngs are not flat! Only the first ring will be used'), (t = t[0]));
            var u = [];
            for (var c in t) u.push(e.project(D(t[c])));
            var d = u.length;
            for (i = 0, n = 0; i < d - 1; i++) n += u[i].distanceTo(u[i + 1]) / 2;
            if (0 === n) l = u[0];
            else
              for (i = 0, r = 0; i < d - 1; i++)
                if (((s = u[i]), (a = u[i + 1]), (r += o = s.distanceTo(a)) > n)) {
                  (h = (r - n) / o), (l = [a.x - h * (a.x - s.x), a.y - h * (a.y - s.y)]);
                  break;
                }
            return e.unproject(A(l));
          }
          var fi = {
            __proto__: null,
            simplify: oi,
            pointToSegmentDistance: ri,
            closestPointOnSegment: function (t, e, i) {
              return ci(t, e, i);
            },
            clipSegment: ai,
            _getEdgeIntersection: hi,
            _getBitCode: li,
            _sqClosestPointOnSegment: ci,
            isFlat: di,
            _flat: pi,
            polylineCenter: _i,
          };
          function mi(t, e, i) {
            var n,
              o,
              r,
              s,
              a,
              h,
              l,
              u,
              c,
              d = [1, 4, 2, 8];
            for (o = 0, l = t.length; o < l; o++) t[o]._code = li(t[o], e);
            for (s = 0; s < 4; s++) {
              for (u = d[s], n = [], o = 0, r = (l = t.length) - 1; o < l; r = o++)
                (a = t[o]),
                  (h = t[r]),
                  a._code & u
                    ? h._code & u || (((c = hi(h, a, u, e, i))._code = li(c, e)), n.push(c))
                    : (h._code & u && (((c = hi(h, a, u, e, i))._code = li(c, e)), n.push(c)), n.push(a));
              t = n;
            }
            return t;
          }
          function gi(t, e) {
            var i, n, o, r, s, a, h, l, u;
            if (!t || 0 === t.length) throw new Error('latlngs not passed');
            di(t) || (console.warn('latlngs are not flat! Only the first ring will be used'), (t = t[0]));
            var c = [];
            for (var d in t) c.push(e.project(D(t[d])));
            var p = c.length;
            for (a = h = l = 0, i = 0, n = p - 1; i < p; n = i++)
              (o = c[i]),
                (r = c[n]),
                (s = o.y * r.x - r.y * o.x),
                (h += (o.x + r.x) * s),
                (l += (o.y + r.y) * s),
                (a += 3 * s);
            return (u = 0 === a ? c[0] : [h / a, l / a]), e.unproject(A(u));
          }
          var vi = { __proto__: null, clipPolygon: mi, polygonCenter: gi },
            yi = {
              project: function (t) {
                return new Z(t.lng, t.lat);
              },
              unproject: function (t) {
                return new N(t.y, t.x);
              },
              bounds: new O([-180, -90], [180, 90]),
            },
            xi = {
              R: 6378137,
              R_MINOR: 6356752.314245179,
              bounds: new O([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
              project: function (t) {
                var e = Math.PI / 180,
                  i = this.R,
                  n = t.lat * e,
                  o = this.R_MINOR / i,
                  r = Math.sqrt(1 - o * o),
                  s = r * Math.sin(n),
                  a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), r / 2);
                return (n = -i * Math.log(Math.max(a, 1e-10))), new Z(t.lng * e * i, n);
              },
              unproject: function (t) {
                for (
                  var e,
                    i = 180 / Math.PI,
                    n = this.R,
                    o = this.R_MINOR / n,
                    r = Math.sqrt(1 - o * o),
                    s = Math.exp(-t.y / n),
                    a = Math.PI / 2 - 2 * Math.atan(s),
                    h = 0,
                    l = 0.1;
                  h < 15 && Math.abs(l) > 1e-7;
                  h++
                )
                  (e = r * Math.sin(a)),
                    (e = Math.pow((1 - e) / (1 + e), r / 2)),
                    (a += l = Math.PI / 2 - 2 * Math.atan(s * e) - a);
                return new N(a * i, (t.x * i) / n);
              },
            },
            bi = { __proto__: null, LonLat: yi, Mercator: xi, SphericalMercator: U },
            wi = e({}, H, {
              code: 'EPSG:3395',
              projection: xi,
              transformation: (function () {
                var t = 0.5 / (Math.PI * xi.R);
                return q(t, 0.5, -t, 0.5);
              })(),
            }),
            Pi = e({}, H, { code: 'EPSG:4326', projection: yi, transformation: q(1 / 180, 1, -1 / 180, 0.5) }),
            Li = e({}, F, {
              projection: yi,
              transformation: q(1, 0, -1, 0),
              scale: function (t) {
                return Math.pow(2, t);
              },
              zoom: function (t) {
                return Math.log(t) / Math.LN2;
              },
              distance: function (t, e) {
                var i = e.lng - t.lng,
                  n = e.lat - t.lat;
                return Math.sqrt(i * i + n * n);
              },
              infinite: !0,
            });
          (F.Earth = H), (F.EPSG3395 = wi), (F.EPSG3857 = G), (F.EPSG900913 = K), (F.EPSG4326 = Pi), (F.Simple = Li);
          var Ti = S.extend({
            options: { pane: 'overlayPane', attribution: null, bubblingMouseEvents: !0 },
            addTo: function (t) {
              return t.addLayer(this), this;
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd);
            },
            removeFrom: function (t) {
              return t && t.removeLayer(this), this;
            },
            getPane: function (t) {
              return this._map.getPane(t ? this.options[t] || t : this.options.pane);
            },
            addInteractiveTarget: function (t) {
              return (this._map._targets[r(t)] = this), this;
            },
            removeInteractiveTarget: function (t) {
              return delete this._map._targets[r(t)], this;
            },
            getAttribution: function () {
              return this.options.attribution;
            },
            _layerAdd: function (t) {
              var e = t.target;
              if (e.hasLayer(this)) {
                if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
                  var i = this.getEvents();
                  e.on(i, this),
                    this.once(
                      'remove',
                      function () {
                        e.off(i, this);
                      },
                      this
                    );
                }
                this.onAdd(e), this.fire('add'), e.fire('layeradd', { layer: this });
              }
            },
          });
          qe.include({
            addLayer: function (t) {
              if (!t._layerAdd) throw new Error('The provided object is not a Layer.');
              var e = r(t);
              return (
                this._layers[e] ||
                  ((this._layers[e] = t),
                  (t._mapToAdd = this),
                  t.beforeAdd && t.beforeAdd(this),
                  this.whenReady(t._layerAdd, t)),
                this
              );
            },
            removeLayer: function (t) {
              var e = r(t);
              return this._layers[e]
                ? (this._loaded && t.onRemove(this),
                  delete this._layers[e],
                  this._loaded && (this.fire('layerremove', { layer: t }), t.fire('remove')),
                  (t._map = t._mapToAdd = null),
                  this)
                : this;
            },
            hasLayer: function (t) {
              return r(t) in this._layers;
            },
            eachLayer: function (t, e) {
              for (var i in this._layers) t.call(e, this._layers[i]);
              return this;
            },
            _addLayers: function (t) {
              for (var e = 0, i = (t = t ? (m(t) ? t : [t]) : []).length; e < i; e++) this.addLayer(t[e]);
            },
            _addZoomLimit: function (t) {
              (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
                ((this._zoomBoundLayers[r(t)] = t), this._updateZoomLevels());
            },
            _removeZoomLimit: function (t) {
              var e = r(t);
              this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
            },
            _updateZoomLevels: function () {
              var t = 1 / 0,
                e = -1 / 0,
                i = this._getZoomSpan();
              for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
                  (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
              }
              (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
                (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
                i !== this._getZoomSpan() && this.fire('zoomlevelschange'),
                void 0 === this.options.maxZoom &&
                  this._layersMaxZoom &&
                  this.getZoom() > this._layersMaxZoom &&
                  this.setZoom(this._layersMaxZoom),
                void 0 === this.options.minZoom &&
                  this._layersMinZoom &&
                  this.getZoom() < this._layersMinZoom &&
                  this.setZoom(this._layersMinZoom);
            },
          });
          var zi = Ti.extend({
              initialize: function (t, e) {
                var i, n;
                if ((d(this, e), (this._layers = {}), t)) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
              },
              addLayer: function (t) {
                var e = this.getLayerId(t);
                return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
              },
              removeLayer: function (t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return (
                  this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
                );
              },
              hasLayer: function (t) {
                return ('number' == typeof t ? t : this.getLayerId(t)) in this._layers;
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this);
              },
              invoke: function (t) {
                var e,
                  i,
                  n = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
                return this;
              },
              onAdd: function (t) {
                this.eachLayer(t.addLayer, t);
              },
              onRemove: function (t) {
                this.eachLayer(t.removeLayer, t);
              },
              eachLayer: function (t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this;
              },
              getLayer: function (t) {
                return this._layers[t];
              },
              getLayers: function () {
                var t = [];
                return this.eachLayer(t.push, t), t;
              },
              setZIndex: function (t) {
                return this.invoke('setZIndex', t);
              },
              getLayerId: function (t) {
                return r(t);
              },
            }),
            Mi = zi.extend({
              addLayer: function (t) {
                return this.hasLayer(t)
                  ? this
                  : (t.addEventParent(this), zi.prototype.addLayer.call(this, t), this.fire('layeradd', { layer: t }));
              },
              removeLayer: function (t) {
                return this.hasLayer(t)
                  ? (t in this._layers && (t = this._layers[t]),
                    t.removeEventParent(this),
                    zi.prototype.removeLayer.call(this, t),
                    this.fire('layerremove', { layer: t }))
                  : this;
              },
              setStyle: function (t) {
                return this.invoke('setStyle', t);
              },
              bringToFront: function () {
                return this.invoke('bringToFront');
              },
              bringToBack: function () {
                return this.invoke('bringToBack');
              },
              getBounds: function () {
                var t = new B();
                for (var e in this._layers) {
                  var i = this._layers[e];
                  t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
                }
                return t;
              },
            }),
            ki = k.extend({
              options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
              initialize: function (t) {
                d(this, t);
              },
              createIcon: function (t) {
                return this._createIcon('icon', t);
              },
              createShadow: function (t) {
                return this._createIcon('shadow', t);
              },
              _createIcon: function (t, e) {
                var i = this._getIconUrl(t);
                if (!i) {
                  if ('icon' === t) throw new Error('iconUrl not set in Icon options (see the docs).');
                  return null;
                }
                var n = this._createImg(i, e && 'IMG' === e.tagName ? e : null);
                return (
                  this._setIconStyles(n, t),
                  (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                    (n.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                  n
                );
              },
              _setIconStyles: function (t, e) {
                var i = this.options,
                  n = i[e + 'Size'];
                'number' == typeof n && (n = [n, n]);
                var o = A(n),
                  r = A(('shadow' === e && i.shadowAnchor) || i.iconAnchor || (o && o.divideBy(2, !0)));
                (t.className = 'leaflet-marker-' + e + ' ' + (i.className || '')),
                  r && ((t.style.marginLeft = -r.x + 'px'), (t.style.marginTop = -r.y + 'px')),
                  o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
              },
              _createImg: function (t, e) {
                return ((e = e || document.createElement('img')).src = t), e;
              },
              _getIconUrl: function (t) {
                return (Ot.retina && this.options[t + 'RetinaUrl']) || this.options[t + 'Url'];
              },
            });
          var Ci = ki.extend({
              options: {
                iconUrl: 'marker-icon.png',
                iconRetinaUrl: 'marker-icon-2x.png',
                shadowUrl: 'marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
              },
              _getIconUrl: function (t) {
                return (
                  'string' != typeof Ci.imagePath && (Ci.imagePath = this._detectIconPath()),
                  (this.options.imagePath || Ci.imagePath) + ki.prototype._getIconUrl.call(this, t)
                );
              },
              _stripUrl: function (t) {
                var e = function (t, e, i) {
                  var n = e.exec(t);
                  return n && n[i];
                };
                return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
              },
              _detectIconPath: function () {
                var t = oe('div', 'leaflet-default-icon-path', document.body),
                  e = ne(t, 'background-image') || ne(t, 'backgroundImage');
                if ((document.body.removeChild(t), (e = this._stripUrl(e)))) return e;
                var i = document.querySelector('link[href$="leaflet.css"]');
                return i ? i.href.substring(0, i.href.length - 'leaflet.css'.length - 1) : '';
              },
            }),
            Si = Qe.extend({
              initialize: function (t) {
                this._marker = t;
              },
              addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new ni(t, t, !0)),
                  this._draggable
                    .on(
                      {
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd,
                      },
                      this
                    )
                    .enable(),
                  ue(t, 'leaflet-marker-draggable');
              },
              removeHooks: function () {
                this._draggable
                  .off(
                    {
                      dragstart: this._onDragStart,
                      predrag: this._onPreDrag,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this
                  )
                  .disable(),
                  this._marker._icon && ce(this._marker._icon, 'leaflet-marker-draggable');
              },
              moved: function () {
                return this._draggable && this._draggable._moved;
              },
              _adjustPan: function (t) {
                var e = this._marker,
                  i = e._map,
                  n = this._marker.options.autoPanSpeed,
                  o = this._marker.options.autoPanPadding,
                  r = ve(e._icon),
                  s = i.getPixelBounds(),
                  a = i.getPixelOrigin(),
                  h = I(s.min._subtract(a).add(o), s.max._subtract(a).subtract(o));
                if (!h.contains(r)) {
                  var l = A(
                    (Math.max(h.max.x, r.x) - h.max.x) / (s.max.x - h.max.x) -
                      (Math.min(h.min.x, r.x) - h.min.x) / (s.min.x - h.min.x),
                    (Math.max(h.max.y, r.y) - h.max.y) / (s.max.y - h.max.y) -
                      (Math.min(h.min.y, r.y) - h.min.y) / (s.min.y - h.min.y)
                  ).multiplyBy(n);
                  i.panBy(l, { animate: !1 }),
                    this._draggable._newPos._add(l),
                    this._draggable._startPos._add(l),
                    ge(e._icon, this._draggable._newPos),
                    this._onDrag(t),
                    (this._panRequest = T(this._adjustPan.bind(this, t)));
                }
              },
              _onDragStart: function () {
                (this._oldLatLng = this._marker.getLatLng()),
                  this._marker.closePopup && this._marker.closePopup(),
                  this._marker.fire('movestart').fire('dragstart');
              },
              _onPreDrag: function (t) {
                this._marker.options.autoPan &&
                  (z(this._panRequest), (this._panRequest = T(this._adjustPan.bind(this, t))));
              },
              _onDrag: function (t) {
                var e = this._marker,
                  i = e._shadow,
                  n = ve(e._icon),
                  o = e._map.layerPointToLatLng(n);
                i && ge(i, n),
                  (e._latlng = o),
                  (t.latlng = o),
                  (t.oldLatLng = this._oldLatLng),
                  e.fire('move', t).fire('drag', t);
              },
              _onDragEnd: function (t) {
                z(this._panRequest), delete this._oldLatLng, this._marker.fire('moveend').fire('dragend', t);
              },
            }),
            Zi = Ti.extend({
              options: {
                icon: new Ci(),
                interactive: !0,
                keyboard: !0,
                title: '',
                alt: 'Marker',
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: 'markerPane',
                shadowPane: 'shadowPane',
                bubblingMouseEvents: !1,
                autoPanOnFocus: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
              },
              initialize: function (t, e) {
                d(this, e), (this._latlng = D(t));
              },
              onAdd: function (t) {
                (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation),
                  this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
                  this._initIcon(),
                  this.update();
              },
              onRemove: function (t) {
                this.dragging &&
                  this.dragging.enabled() &&
                  ((this.options.draggable = !0), this.dragging.removeHooks()),
                  delete this.dragging,
                  this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
                  this._removeIcon(),
                  this._removeShadow();
              },
              getEvents: function () {
                return { zoom: this.update, viewreset: this.update };
              },
              getLatLng: function () {
                return this._latlng;
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return (this._latlng = D(t)), this.update(), this.fire('move', { oldLatLng: e, latlng: this._latlng });
              },
              setZIndexOffset: function (t) {
                return (this.options.zIndexOffset = t), this.update();
              },
              getIcon: function () {
                return this.options.icon;
              },
              setIcon: function (t) {
                return (
                  (this.options.icon = t),
                  this._map && (this._initIcon(), this.update()),
                  this._popup && this.bindPopup(this._popup, this._popup.options),
                  this
                );
              },
              getElement: function () {
                return this._icon;
              },
              update: function () {
                if (this._icon && this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(t);
                }
                return this;
              },
              _initIcon: function () {
                var t = this.options,
                  e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
                  i = t.icon.createIcon(this._icon),
                  n = !1;
                i !== this._icon &&
                  (this._icon && this._removeIcon(),
                  (n = !0),
                  t.title && (i.title = t.title),
                  'IMG' === i.tagName && (i.alt = t.alt || '')),
                  ue(i, e),
                  t.keyboard && ((i.tabIndex = '0'), i.setAttribute('role', 'button')),
                  (this._icon = i),
                  t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                  this.options.autoPanOnFocus && Me(i, 'focus', this._panOnFocus, this);
                var o = t.icon.createShadow(this._shadow),
                  r = !1;
                o !== this._shadow && (this._removeShadow(), (r = !0)),
                  o && (ue(o, e), (o.alt = '')),
                  (this._shadow = o),
                  t.opacity < 1 && this._updateOpacity(),
                  n && this.getPane().appendChild(this._icon),
                  this._initInteraction(),
                  o && r && this.getPane(t.shadowPane).appendChild(this._shadow);
              },
              _removeIcon: function () {
                this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                  this.options.autoPanOnFocus && Ce(this._icon, 'focus', this._panOnFocus, this),
                  re(this._icon),
                  this.removeInteractiveTarget(this._icon),
                  (this._icon = null);
              },
              _removeShadow: function () {
                this._shadow && re(this._shadow), (this._shadow = null);
              },
              _setPos: function (t) {
                this._icon && ge(this._icon, t),
                  this._shadow && ge(this._shadow, t),
                  (this._zIndex = t.y + this.options.zIndexOffset),
                  this._resetZIndex();
              },
              _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t);
              },
              _animateZoom: function (t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e);
              },
              _initInteraction: function () {
                if (
                  this.options.interactive &&
                  (ue(this._icon, 'leaflet-interactive'), this.addInteractiveTarget(this._icon), Si)
                ) {
                  var t = this.options.draggable;
                  this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()),
                    (this.dragging = new Si(this)),
                    t && this.dragging.enable();
                }
              },
              setOpacity: function (t) {
                return (this.options.opacity = t), this._map && this._updateOpacity(), this;
              },
              _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && _e(this._icon, t), this._shadow && _e(this._shadow, t);
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset);
              },
              _resetZIndex: function () {
                this._updateZIndex(0);
              },
              _panOnFocus: function () {
                var t = this._map;
                if (t) {
                  var e = this.options.icon.options,
                    i = e.iconSize ? A(e.iconSize) : A(0, 0),
                    n = e.iconAnchor ? A(e.iconAnchor) : A(0, 0);
                  t.panInside(this._latlng, { paddingTopLeft: n, paddingBottomRight: i.subtract(n) });
                }
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor;
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor;
              },
            });
          var Ei = Ti.extend({
              options: {
                stroke: !0,
                color: '#3388ff',
                weight: 3,
                opacity: 1,
                lineCap: 'round',
                lineJoin: 'round',
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: 0.2,
                fillRule: 'evenodd',
                interactive: !0,
                bubblingMouseEvents: !0,
              },
              beforeAdd: function (t) {
                this._renderer = t.getRenderer(this);
              },
              onAdd: function () {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
              },
              onRemove: function () {
                this._renderer._removePath(this);
              },
              redraw: function () {
                return this._map && this._renderer._updatePath(this), this;
              },
              setStyle: function (t) {
                return (
                  d(this, t),
                  this._renderer &&
                    (this._renderer._updateStyle(this),
                    this.options.stroke &&
                      t &&
                      Object.prototype.hasOwnProperty.call(t, 'weight') &&
                      this._updateBounds()),
                  this
                );
              },
              bringToFront: function () {
                return this._renderer && this._renderer._bringToFront(this), this;
              },
              bringToBack: function () {
                return this._renderer && this._renderer._bringToBack(this), this;
              },
              getElement: function () {
                return this._path;
              },
              _reset: function () {
                this._project(), this._update();
              },
              _clickTolerance: function () {
                return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
              },
            }),
            Ai = Ei.extend({
              options: { fill: !0, radius: 10 },
              initialize: function (t, e) {
                d(this, e), (this._latlng = D(t)), (this._radius = this.options.radius);
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return (this._latlng = D(t)), this.redraw(), this.fire('move', { oldLatLng: e, latlng: this._latlng });
              },
              getLatLng: function () {
                return this._latlng;
              },
              setRadius: function (t) {
                return (this.options.radius = this._radius = t), this.redraw();
              },
              getRadius: function () {
                return this._radius;
              },
              setStyle: function (t) {
                var e = (t && t.radius) || this._radius;
                return Ei.prototype.setStyle.call(this, t), this.setRadius(e), this;
              },
              _project: function () {
                (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
              },
              _updateBounds: function () {
                var t = this._radius,
                  e = this._radiusY || t,
                  i = this._clickTolerance(),
                  n = [t + i, e + i];
                this._pxBounds = new O(this._point.subtract(n), this._point.add(n));
              },
              _update: function () {
                this._map && this._updatePath();
              },
              _updatePath: function () {
                this._renderer._updateCircle(this);
              },
              _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
              },
              _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
              },
            });
          var Oi = Ai.extend({
            initialize: function (t, i, n) {
              if (
                ('number' == typeof i && (i = e({}, n, { radius: i })),
                d(this, i),
                (this._latlng = D(t)),
                isNaN(this.options.radius))
              )
                throw new Error('Circle radius cannot be NaN');
              this._mRadius = this.options.radius;
            },
            setRadius: function (t) {
              return (this._mRadius = t), this.redraw();
            },
            getRadius: function () {
              return this._mRadius;
            },
            getBounds: function () {
              var t = [this._radius, this._radiusY || this._radius];
              return new B(
                this._map.layerPointToLatLng(this._point.subtract(t)),
                this._map.layerPointToLatLng(this._point.add(t))
              );
            },
            setStyle: Ei.prototype.setStyle,
            _project: function () {
              var t = this._latlng.lng,
                e = this._latlng.lat,
                i = this._map,
                n = i.options.crs;
              if (n.distance === H.distance) {
                var o = Math.PI / 180,
                  r = this._mRadius / H.R / o,
                  s = i.project([e + r, t]),
                  a = i.project([e - r, t]),
                  h = s.add(a).divideBy(2),
                  l = i.unproject(h).lat,
                  u =
                    Math.acos(
                      (Math.cos(r * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))
                    ) / o;
                (isNaN(u) || 0 === u) && (u = r / Math.cos((Math.PI / 180) * e)),
                  (this._point = h.subtract(i.getPixelOrigin())),
                  (this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x),
                  (this._radiusY = h.y - s.y);
              } else {
                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                (this._point = i.latLngToLayerPoint(this._latlng)),
                  (this._radius = this._point.x - i.latLngToLayerPoint(c).x);
              }
              this._updateBounds();
            },
          });
          var Ii = Ei.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (t, e) {
              d(this, e), this._setLatLngs(t);
            },
            getLatLngs: function () {
              return this._latlngs;
            },
            setLatLngs: function (t) {
              return this._setLatLngs(t), this.redraw();
            },
            isEmpty: function () {
              return !this._latlngs.length;
            },
            closestLayerPoint: function (t) {
              for (var e, i, n = 1 / 0, o = null, r = ci, s = 0, a = this._parts.length; s < a; s++)
                for (var h = this._parts[s], l = 1, u = h.length; l < u; l++) {
                  var c = r(t, (e = h[l - 1]), (i = h[l]), !0);
                  c < n && ((n = c), (o = r(t, e, i)));
                }
              return o && (o.distance = Math.sqrt(n)), o;
            },
            getCenter: function () {
              if (!this._map) throw new Error('Must add layer to map before using getCenter()');
              return _i(this._defaultShape(), this._map.options.crs);
            },
            getBounds: function () {
              return this._bounds;
            },
            addLatLng: function (t, e) {
              return (e = e || this._defaultShape()), (t = D(t)), e.push(t), this._bounds.extend(t), this.redraw();
            },
            _setLatLngs: function (t) {
              (this._bounds = new B()), (this._latlngs = this._convertLatLngs(t));
            },
            _defaultShape: function () {
              return di(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (t) {
              for (var e = [], i = di(t), n = 0, o = t.length; n < o; n++)
                i ? ((e[n] = D(t[n])), this._bounds.extend(e[n])) : (e[n] = this._convertLatLngs(t[n]));
              return e;
            },
            _project: function () {
              var t = new O();
              (this._rings = []),
                this._projectLatlngs(this._latlngs, this._rings, t),
                this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
            },
            _updateBounds: function () {
              var t = this._clickTolerance(),
                e = new Z(t, t);
              this._rawPxBounds &&
                (this._pxBounds = new O([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]));
            },
            _projectLatlngs: function (t, e, i) {
              var n,
                o,
                r = t[0] instanceof N,
                s = t.length;
              if (r) {
                for (o = [], n = 0; n < s; n++) (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
                e.push(o);
              } else for (n = 0; n < s; n++) this._projectLatlngs(t[n], e, i);
            },
            _clipPoints: function () {
              var t = this._renderer._bounds;
              if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
                if (this.options.noClip) this._parts = this._rings;
                else {
                  var e,
                    i,
                    n,
                    o,
                    r,
                    s,
                    a,
                    h = this._parts;
                  for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                    for (i = 0, r = (a = this._rings[e]).length; i < r - 1; i++)
                      (s = ai(a[i], a[i + 1], t, i, !0)) &&
                        ((h[n] = h[n] || []),
                        h[n].push(s[0]),
                        (s[1] === a[i + 1] && i !== r - 2) || (h[n].push(s[1]), n++));
                }
            },
            _simplifyPoints: function () {
              for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
                t[i] = oi(t[i], e);
            },
            _update: function () {
              this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
            },
            _updatePath: function () {
              this._renderer._updatePoly(this);
            },
            _containsPoint: function (t, e) {
              var i,
                n,
                o,
                r,
                s,
                a,
                h = this._clickTolerance();
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (i = 0, r = this._parts.length; i < r; i++)
                for (n = 0, o = (s = (a = this._parts[i]).length) - 1; n < s; o = n++)
                  if ((e || 0 !== n) && ri(t, a[o], a[n]) <= h) return !0;
              return !1;
            },
          });
          Ii._flat = pi;
          var Bi = Ii.extend({
            options: { fill: !0 },
            isEmpty: function () {
              return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
              if (!this._map) throw new Error('Must add layer to map before using getCenter()');
              return gi(this._defaultShape(), this._map.options.crs);
            },
            _convertLatLngs: function (t) {
              var e = Ii.prototype._convertLatLngs.call(this, t),
                i = e.length;
              return i >= 2 && e[0] instanceof N && e[0].equals(e[i - 1]) && e.pop(), e;
            },
            _setLatLngs: function (t) {
              Ii.prototype._setLatLngs.call(this, t), di(this._latlngs) && (this._latlngs = [this._latlngs]);
            },
            _defaultShape: function () {
              return di(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
            },
            _clipPoints: function () {
              var t = this._renderer._bounds,
                e = this.options.weight,
                i = new Z(e, e);
              if (
                ((t = new O(t.min.subtract(i), t.max.add(i))),
                (this._parts = []),
                this._pxBounds && this._pxBounds.intersects(t))
              )
                if (this.options.noClip) this._parts = this._rings;
                else
                  for (var n, o = 0, r = this._rings.length; o < r; o++)
                    (n = mi(this._rings[o], t, !0)).length && this._parts.push(n);
            },
            _updatePath: function () {
              this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (t) {
              var e,
                i,
                n,
                o,
                r,
                s,
                a,
                h,
                l = !1;
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (o = 0, a = this._parts.length; o < a; o++)
                for (r = 0, s = (h = (e = this._parts[o]).length) - 1; r < h; s = r++)
                  (i = e[r]),
                    (n = e[s]),
                    i.y > t.y != n.y > t.y && t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x && (l = !l);
              return l || Ii.prototype._containsPoint.call(this, t, !0);
            },
          });
          var Ri = Mi.extend({
            initialize: function (t, e) {
              d(this, e), (this._layers = {}), t && this.addData(t);
            },
            addData: function (t) {
              var e,
                i,
                n,
                o = m(t) ? t : t.features;
              if (o) {
                for (e = 0, i = o.length; e < i; e++)
                  ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this;
              }
              var r = this.options;
              if (r.filter && !r.filter(t)) return this;
              var s = Ni(t, r);
              return s
                ? ((s.feature = Vi(t)),
                  (s.defaultOptions = s.options),
                  this.resetStyle(s),
                  r.onEachFeature && r.onEachFeature(t, s),
                  this.addLayer(s))
                : this;
            },
            resetStyle: function (t) {
              return void 0 === t
                ? this.eachLayer(this.resetStyle, this)
                : ((t.options = e({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this);
            },
            setStyle: function (t) {
              return this.eachLayer(function (e) {
                this._setLayerStyle(e, t);
              }, this);
            },
            _setLayerStyle: function (t, e) {
              t.setStyle && ('function' == typeof e && (e = e(t.feature)), t.setStyle(e));
            },
          });
          function Ni(t, e) {
            var i,
              n,
              o,
              r,
              s = 'Feature' === t.type ? t.geometry : t,
              a = s ? s.coordinates : null,
              h = [],
              l = e && e.pointToLayer,
              u = (e && e.coordsToLatLng) || ji;
            if (!a && !s) return null;
            switch (s.type) {
              case 'Point':
                return Di(l, t, (i = u(a)), e);
              case 'MultiPoint':
                for (o = 0, r = a.length; o < r; o++) (i = u(a[o])), h.push(Di(l, t, i, e));
                return new Mi(h);
              case 'LineString':
              case 'MultiLineString':
                return (n = Fi(a, 'LineString' === s.type ? 0 : 1, u)), new Ii(n, e);
              case 'Polygon':
              case 'MultiPolygon':
                return (n = Fi(a, 'Polygon' === s.type ? 1 : 2, u)), new Bi(n, e);
              case 'GeometryCollection':
                for (o = 0, r = s.geometries.length; o < r; o++) {
                  var c = Ni({ geometry: s.geometries[o], type: 'Feature', properties: t.properties }, e);
                  c && h.push(c);
                }
                return new Mi(h);
              case 'FeatureCollection':
                for (o = 0, r = s.features.length; o < r; o++) {
                  var d = Ni(s.features[o], e);
                  d && h.push(d);
                }
                return new Mi(h);
              default:
                throw new Error('Invalid GeoJSON object.');
            }
          }
          function Di(t, e, i, n) {
            return t ? t(e, i) : new Zi(i, n && n.markersInheritOptions && n);
          }
          function ji(t) {
            return new N(t[1], t[0], t[2]);
          }
          function Fi(t, e, i) {
            for (var n, o = [], r = 0, s = t.length; r < s; r++)
              (n = e ? Fi(t[r], e - 1, i) : (i || ji)(t[r])), o.push(n);
            return o;
          }
          function Hi(t, e) {
            return void 0 !== (t = D(t)).alt ? [l(t.lng, e), l(t.lat, e), l(t.alt, e)] : [l(t.lng, e), l(t.lat, e)];
          }
          function Wi(t, e, i, n) {
            for (var o = [], r = 0, s = t.length; r < s; r++)
              o.push(e ? Wi(t[r], di(t[r]) ? 0 : e - 1, i, n) : Hi(t[r], n));
            return !e && i && o.push(o[0]), o;
          }
          function Ui(t, i) {
            return t.feature ? e({}, t.feature, { geometry: i }) : Vi(i);
          }
          function Vi(t) {
            return 'Feature' === t.type || 'FeatureCollection' === t.type
              ? t
              : { type: 'Feature', properties: {}, geometry: t };
          }
          var qi = {
            toGeoJSON: function (t) {
              return Ui(this, { type: 'Point', coordinates: Hi(this.getLatLng(), t) });
            },
          };
          function Gi(t, e) {
            return new Ri(t, e);
          }
          Zi.include(qi),
            Oi.include(qi),
            Ai.include(qi),
            Ii.include({
              toGeoJSON: function (t) {
                var e = !di(this._latlngs);
                return Ui(this, {
                  type: (e ? 'Multi' : '') + 'LineString',
                  coordinates: Wi(this._latlngs, e ? 1 : 0, !1, t),
                });
              },
            }),
            Bi.include({
              toGeoJSON: function (t) {
                var e = !di(this._latlngs),
                  i = e && !di(this._latlngs[0]),
                  n = Wi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                return e || (n = [n]), Ui(this, { type: (i ? 'Multi' : '') + 'Polygon', coordinates: n });
              },
            }),
            zi.include({
              toMultiPoint: function (t) {
                var e = [];
                return (
                  this.eachLayer(function (i) {
                    e.push(i.toGeoJSON(t).geometry.coordinates);
                  }),
                  Ui(this, { type: 'MultiPoint', coordinates: e })
                );
              },
              toGeoJSON: function (t) {
                var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                if ('MultiPoint' === e) return this.toMultiPoint(t);
                var i = 'GeometryCollection' === e,
                  n = [];
                return (
                  this.eachLayer(function (e) {
                    if (e.toGeoJSON) {
                      var o = e.toGeoJSON(t);
                      if (i) n.push(o.geometry);
                      else {
                        var r = Vi(o);
                        'FeatureCollection' === r.type ? n.push.apply(n, r.features) : n.push(r);
                      }
                    }
                  }),
                  i
                    ? Ui(this, { geometries: n, type: 'GeometryCollection' })
                    : { type: 'FeatureCollection', features: n }
                );
              },
            });
          var Ki = Gi,
            Yi = Ti.extend({
              options: {
                opacity: 1,
                alt: '',
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: '',
                zIndex: 1,
                className: '',
              },
              initialize: function (t, e, i) {
                (this._url = t), (this._bounds = R(e)), d(this, i);
              },
              onAdd: function () {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
                  this.options.interactive &&
                    (ue(this._image, 'leaflet-interactive'), this.addInteractiveTarget(this._image)),
                  this.getPane().appendChild(this._image),
                  this._reset();
              },
              onRemove: function () {
                re(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
              },
              setOpacity: function (t) {
                return (this.options.opacity = t), this._image && this._updateOpacity(), this;
              },
              setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this;
              },
              bringToFront: function () {
                return this._map && ae(this._image), this;
              },
              bringToBack: function () {
                return this._map && he(this._image), this;
              },
              setUrl: function (t) {
                return (this._url = t), this._image && (this._image.src = t), this;
              },
              setBounds: function (t) {
                return (this._bounds = R(t)), this._map && this._reset(), this;
              },
              getEvents: function () {
                var t = { zoom: this._reset, viewreset: this._reset };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
              },
              setZIndex: function (t) {
                return (this.options.zIndex = t), this._updateZIndex(), this;
              },
              getBounds: function () {
                return this._bounds;
              },
              getElement: function () {
                return this._image;
              },
              _initImage: function () {
                var t = 'IMG' === this._url.tagName,
                  e = (this._image = t ? this._url : oe('img'));
                ue(e, 'leaflet-image-layer'),
                  this._zoomAnimated && ue(e, 'leaflet-zoom-animated'),
                  this.options.className && ue(e, this.options.className),
                  (e.onselectstart = h),
                  (e.onmousemove = h),
                  (e.onload = n(this.fire, this, 'load')),
                  (e.onerror = n(this._overlayOnError, this, 'error')),
                  (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                    (e.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                  this.options.zIndex && this._updateZIndex(),
                  t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
              },
              _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom),
                  i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                me(this._image, i, e);
              },
              _reset: function () {
                var t = this._image,
                  e = new O(
                    this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                    this._map.latLngToLayerPoint(this._bounds.getSouthEast())
                  ),
                  i = e.getSize();
                ge(t, e.min), (t.style.width = i.x + 'px'), (t.style.height = i.y + 'px');
              },
              _updateOpacity: function () {
                _e(this._image, this.options.opacity);
              },
              _updateZIndex: function () {
                this._image &&
                  void 0 !== this.options.zIndex &&
                  null !== this.options.zIndex &&
                  (this._image.style.zIndex = this.options.zIndex);
              },
              _overlayOnError: function () {
                this.fire('error');
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && ((this._url = t), (this._image.src = t));
              },
              getCenter: function () {
                return this._bounds.getCenter();
              },
            }),
            Xi = Yi.extend({
              options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
              _initImage: function () {
                var t = 'VIDEO' === this._url.tagName,
                  e = (this._image = t ? this._url : oe('video'));
                if (
                  (ue(e, 'leaflet-image-layer'),
                  this._zoomAnimated && ue(e, 'leaflet-zoom-animated'),
                  this.options.className && ue(e, this.options.className),
                  (e.onselectstart = h),
                  (e.onmousemove = h),
                  (e.onloadeddata = n(this.fire, this, 'load')),
                  t)
                ) {
                  for (var i = e.getElementsByTagName('source'), o = [], r = 0; r < i.length; r++) o.push(i[r].src);
                  this._url = i.length > 0 ? o : [e.src];
                } else {
                  m(this._url) || (this._url = [this._url]),
                    !this.options.keepAspectRatio &&
                      Object.prototype.hasOwnProperty.call(e.style, 'objectFit') &&
                      (e.style.objectFit = 'fill'),
                    (e.autoplay = !!this.options.autoplay),
                    (e.loop = !!this.options.loop),
                    (e.muted = !!this.options.muted),
                    (e.playsInline = !!this.options.playsInline);
                  for (var s = 0; s < this._url.length; s++) {
                    var a = oe('source');
                    (a.src = this._url[s]), e.appendChild(a);
                  }
                }
              },
            });
          var Ji = Yi.extend({
            _initImage: function () {
              var t = (this._image = this._url);
              ue(t, 'leaflet-image-layer'),
                this._zoomAnimated && ue(t, 'leaflet-zoom-animated'),
                this.options.className && ue(t, this.options.className),
                (t.onselectstart = h),
                (t.onmousemove = h);
            },
          });
          var $i = Ti.extend({
            options: { interactive: !1, offset: [0, 0], className: '', pane: void 0, content: '' },
            initialize: function (t, e) {
              t && (t instanceof L.LatLng || m(t))
                ? ((this._latlng = D(t)), d(this, e))
                : (d(this, t), (this._source = e)),
                this.options.content && (this._content = this.options.content);
            },
            openOn: function (t) {
              return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
            },
            close: function () {
              return this._map && this._map.removeLayer(this), this;
            },
            toggle: function (t) {
              return (
                this._map
                  ? this.close()
                  : (arguments.length ? (this._source = t) : (t = this._source),
                    this._prepareOpen(),
                    this.openOn(t._map)),
                this
              );
            },
            onAdd: function (t) {
              (this._zoomAnimated = t._zoomAnimated),
                this._container || this._initLayout(),
                t._fadeAnimated && _e(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                t._fadeAnimated && _e(this._container, 1),
                this.bringToFront(),
                this.options.interactive &&
                  (ue(this._container, 'leaflet-interactive'), this.addInteractiveTarget(this._container));
            },
            onRemove: function (t) {
              t._fadeAnimated
                ? (_e(this._container, 0), (this._removeTimeout = setTimeout(n(re, void 0, this._container), 200)))
                : re(this._container),
                this.options.interactive &&
                  (ce(this._container, 'leaflet-interactive'), this.removeInteractiveTarget(this._container));
            },
            getLatLng: function () {
              return this._latlng;
            },
            setLatLng: function (t) {
              return (this._latlng = D(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
            },
            getContent: function () {
              return this._content;
            },
            setContent: function (t) {
              return (this._content = t), this.update(), this;
            },
            getElement: function () {
              return this._container;
            },
            update: function () {
              this._map &&
                ((this._container.style.visibility = 'hidden'),
                this._updateContent(),
                this._updateLayout(),
                this._updatePosition(),
                (this._container.style.visibility = ''),
                this._adjustPan());
            },
            getEvents: function () {
              var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
            },
            isOpen: function () {
              return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
              return this._map && ae(this._container), this;
            },
            bringToBack: function () {
              return this._map && he(this._container), this;
            },
            _prepareOpen: function (t) {
              var e = this._source;
              if (!e._map) return !1;
              if (e instanceof Mi) {
                e = null;
                var i = this._source._layers;
                for (var n in i)
                  if (i[n]._map) {
                    e = i[n];
                    break;
                  }
                if (!e) return !1;
                this._source = e;
              }
              if (!t)
                if (e.getCenter) t = e.getCenter();
                else if (e.getLatLng) t = e.getLatLng();
                else {
                  if (!e.getBounds) throw new Error('Unable to get source layer LatLng.');
                  t = e.getBounds().getCenter();
                }
              return this.setLatLng(t), this._map && this.update(), !0;
            },
            _updateContent: function () {
              if (this._content) {
                var t = this._contentNode,
                  e = 'function' == typeof this._content ? this._content(this._source || this) : this._content;
                if ('string' == typeof e) t.innerHTML = e;
                else {
                  for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                  t.appendChild(e);
                }
                this.fire('contentupdate');
              }
            },
            _updatePosition: function () {
              if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                  e = A(this.options.offset),
                  i = this._getAnchor();
                this._zoomAnimated ? ge(this._container, t.add(i)) : (e = e.add(t).add(i));
                var n = (this._containerBottom = -e.y),
                  o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
                (this._container.style.bottom = n + 'px'), (this._container.style.left = o + 'px');
              }
            },
            _getAnchor: function () {
              return [0, 0];
            },
          });
          qe.include({
            _initOverlay: function (t, e, i, n) {
              var o = e;
              return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
            },
          }),
            Ti.include({
              _initOverlay: function (t, e, i, n) {
                var o = i;
                return (
                  o instanceof t ? (d(o, n), (o._source = this)) : (o = e && !n ? e : new t(n, this)).setContent(i), o
                );
              },
            });
          var Qi = $i.extend({
            options: {
              pane: 'popupPane',
              offset: [0, 7],
              maxWidth: 300,
              minWidth: 50,
              maxHeight: null,
              autoPan: !0,
              autoPanPaddingTopLeft: null,
              autoPanPaddingBottomRight: null,
              autoPanPadding: [5, 5],
              keepInView: !1,
              closeButton: !0,
              autoClose: !0,
              closeOnEscapeKey: !0,
              className: '',
            },
            openOn: function (t) {
              return (
                !(t = arguments.length ? t : this._source._map).hasLayer(this) &&
                  t._popup &&
                  t._popup.options.autoClose &&
                  t.removeLayer(t._popup),
                (t._popup = this),
                $i.prototype.openOn.call(this, t)
              );
            },
            onAdd: function (t) {
              $i.prototype.onAdd.call(this, t),
                t.fire('popupopen', { popup: this }),
                this._source &&
                  (this._source.fire('popupopen', { popup: this }, !0),
                  this._source instanceof Ei || this._source.on('preclick', Oe));
            },
            onRemove: function (t) {
              $i.prototype.onRemove.call(this, t),
                t.fire('popupclose', { popup: this }),
                this._source &&
                  (this._source.fire('popupclose', { popup: this }, !0),
                  this._source instanceof Ei || this._source.off('preclick', Oe));
            },
            getEvents: function () {
              var t = $i.prototype.getEvents.call(this);
              return (
                (void 0 !== this.options.closeOnClick
                  ? this.options.closeOnClick
                  : this._map.options.closePopupOnClick) && (t.preclick = this.close),
                this.options.keepInView && (t.moveend = this._adjustPan),
                t
              );
            },
            _initLayout: function () {
              var t = 'leaflet-popup',
                e = (this._container = oe('div', t + ' ' + (this.options.className || '') + ' leaflet-zoom-animated')),
                i = (this._wrapper = oe('div', t + '-content-wrapper', e));
              if (
                ((this._contentNode = oe('div', t + '-content', i)),
                Be(e),
                Ie(this._contentNode),
                Me(e, 'contextmenu', Oe),
                (this._tipContainer = oe('div', t + '-tip-container', e)),
                (this._tip = oe('div', t + '-tip', this._tipContainer)),
                this.options.closeButton)
              ) {
                var n = (this._closeButton = oe('a', t + '-close-button', e));
                n.setAttribute('role', 'button'),
                  n.setAttribute('aria-label', 'Close popup'),
                  (n.href = '#close'),
                  (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                  Me(
                    n,
                    'click',
                    function (t) {
                      Re(t), this.close();
                    },
                    this
                  );
              }
            },
            _updateLayout: function () {
              var t = this._contentNode,
                e = t.style;
              (e.width = ''), (e.whiteSpace = 'nowrap');
              var i = t.offsetWidth;
              (i = Math.min(i, this.options.maxWidth)),
                (i = Math.max(i, this.options.minWidth)),
                (e.width = i + 1 + 'px'),
                (e.whiteSpace = ''),
                (e.height = '');
              var n = t.offsetHeight,
                o = this.options.maxHeight,
                r = 'leaflet-popup-scrolled';
              o && n > o ? ((e.height = o + 'px'), ue(t, r)) : ce(t, r),
                (this._containerWidth = this._container.offsetWidth);
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                i = this._getAnchor();
              ge(this._container, e.add(i));
            },
            _adjustPan: function (t) {
              if (this.options.autoPan) {
                this._map._panAnim && this._map._panAnim.stop();
                var e = this._map,
                  i = parseInt(ne(this._container, 'marginBottom'), 10) || 0,
                  n = this._container.offsetHeight + i,
                  o = this._containerWidth,
                  r = new Z(this._containerLeft, -n - this._containerBottom);
                r._add(ve(this._container));
                var s = e.layerPointToContainerPoint(r),
                  a = A(this.options.autoPanPadding),
                  h = A(this.options.autoPanPaddingTopLeft || a),
                  l = A(this.options.autoPanPaddingBottomRight || a),
                  u = e.getSize(),
                  c = 0,
                  d = 0;
                s.x + o + l.x > u.x && (c = s.x + o - u.x + l.x),
                  s.x - c - h.x < 0 && (c = s.x - h.x),
                  s.y + n + l.y > u.y && (d = s.y + n - u.y + l.y),
                  s.y - d - h.y < 0 && (d = s.y - h.y),
                  (c || d) && e.fire('autopanstart').panBy([c, d], { animate: t && 'moveend' === t.type });
              }
            },
            _getAnchor: function () {
              return A(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
            },
          });
          qe.mergeOptions({ closePopupOnClick: !0 }),
            qe.include({
              openPopup: function (t, e, i) {
                return this._initOverlay(Qi, t, e, i).openOn(this), this;
              },
              closePopup: function (t) {
                return (t = arguments.length ? t : this._popup) && t.close(), this;
              },
            }),
            Ti.include({
              bindPopup: function (t, e) {
                return (
                  (this._popup = this._initOverlay(Qi, this._popup, t, e)),
                  this._popupHandlersAdded ||
                    (this.on({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !0)),
                  this
                );
              },
              unbindPopup: function () {
                return (
                  this._popup &&
                    (this.off({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !1),
                    (this._popup = null)),
                  this
                );
              },
              openPopup: function (t) {
                return (
                  this._popup && this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map), this
                );
              },
              closePopup: function () {
                return this._popup && this._popup.close(), this;
              },
              togglePopup: function () {
                return this._popup && this._popup.toggle(this), this;
              },
              isPopupOpen: function () {
                return !!this._popup && this._popup.isOpen();
              },
              setPopupContent: function (t) {
                return this._popup && this._popup.setContent(t), this;
              },
              getPopup: function () {
                return this._popup;
              },
              _openPopup: function (t) {
                if (this._popup && this._map) {
                  Ne(t);
                  var e = t.layer || t.target;
                  this._popup._source !== e || e instanceof Ei
                    ? ((this._popup._source = e), this.openPopup(t.latlng))
                    : this._map.hasLayer(this._popup)
                    ? this.closePopup()
                    : this.openPopup(t.latlng);
                }
              },
              _movePopup: function (t) {
                this._popup.setLatLng(t.latlng);
              },
              _onKeyPress: function (t) {
                13 === t.originalEvent.keyCode && this._openPopup(t);
              },
            });
          var tn = $i.extend({
            options: {
              pane: 'tooltipPane',
              offset: [0, 0],
              direction: 'auto',
              permanent: !1,
              sticky: !1,
              opacity: 0.9,
            },
            onAdd: function (t) {
              $i.prototype.onAdd.call(this, t),
                this.setOpacity(this.options.opacity),
                t.fire('tooltipopen', { tooltip: this }),
                this._source &&
                  (this.addEventParent(this._source), this._source.fire('tooltipopen', { tooltip: this }, !0));
            },
            onRemove: function (t) {
              $i.prototype.onRemove.call(this, t),
                t.fire('tooltipclose', { tooltip: this }),
                this._source &&
                  (this.removeEventParent(this._source), this._source.fire('tooltipclose', { tooltip: this }, !0));
            },
            getEvents: function () {
              var t = $i.prototype.getEvents.call(this);
              return this.options.permanent || (t.preclick = this.close), t;
            },
            _initLayout: function () {
              var t =
                'leaflet-tooltip ' +
                (this.options.className || '') +
                ' leaflet-zoom-' +
                (this._zoomAnimated ? 'animated' : 'hide');
              (this._contentNode = this._container = oe('div', t)),
                this._container.setAttribute('role', 'tooltip'),
                this._container.setAttribute('id', 'leaflet-tooltip-' + r(this));
            },
            _updateLayout: function () {},
            _adjustPan: function () {},
            _setPosition: function (t) {
              var e,
                i,
                n = this._map,
                o = this._container,
                r = n.latLngToContainerPoint(n.getCenter()),
                s = n.layerPointToContainerPoint(t),
                a = this.options.direction,
                h = o.offsetWidth,
                l = o.offsetHeight,
                u = A(this.options.offset),
                c = this._getAnchor();
              'top' === a
                ? ((e = h / 2), (i = l))
                : 'bottom' === a
                ? ((e = h / 2), (i = 0))
                : 'center' === a
                ? ((e = h / 2), (i = l / 2))
                : 'right' === a
                ? ((e = 0), (i = l / 2))
                : 'left' === a
                ? ((e = h), (i = l / 2))
                : s.x < r.x
                ? ((a = 'right'), (e = 0), (i = l / 2))
                : ((a = 'left'), (e = h + 2 * (u.x + c.x)), (i = l / 2)),
                (t = t.subtract(A(e, i, !0)).add(u).add(c)),
                ce(o, 'leaflet-tooltip-right'),
                ce(o, 'leaflet-tooltip-left'),
                ce(o, 'leaflet-tooltip-top'),
                ce(o, 'leaflet-tooltip-bottom'),
                ue(o, 'leaflet-tooltip-' + a),
                ge(o, t);
            },
            _updatePosition: function () {
              var t = this._map.latLngToLayerPoint(this._latlng);
              this._setPosition(t);
            },
            setOpacity: function (t) {
              (this.options.opacity = t), this._container && _e(this._container, t);
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
              this._setPosition(e);
            },
            _getAnchor: function () {
              return A(
                this._source && this._source._getTooltipAnchor && !this.options.sticky
                  ? this._source._getTooltipAnchor()
                  : [0, 0]
              );
            },
          });
          qe.include({
            openTooltip: function (t, e, i) {
              return this._initOverlay(tn, t, e, i).openOn(this), this;
            },
            closeTooltip: function (t) {
              return t.close(), this;
            },
          }),
            Ti.include({
              bindTooltip: function (t, e) {
                return (
                  this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                  (this._tooltip = this._initOverlay(tn, this._tooltip, t, e)),
                  this._initTooltipInteractions(),
                  this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                  this
                );
              },
              unbindTooltip: function () {
                return (
                  this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)),
                  this
                );
              },
              _initTooltipInteractions: function (t) {
                if (t || !this._tooltipHandlersAdded) {
                  var e = t ? 'off' : 'on',
                    i = { remove: this.closeTooltip, move: this._moveTooltip };
                  this._tooltip.options.permanent
                    ? (i.add = this._openTooltip)
                    : ((i.mouseover = this._openTooltip),
                      (i.mouseout = this.closeTooltip),
                      (i.click = this._openTooltip),
                      this._map ? this._addFocusListeners() : (i.add = this._addFocusListeners)),
                    this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                    this[e](i),
                    (this._tooltipHandlersAdded = !t);
                }
              },
              openTooltip: function (t) {
                return (
                  this._tooltip &&
                    this._tooltip._prepareOpen(t) &&
                    (this._tooltip.openOn(this._map),
                    this.getElement
                      ? this._setAriaDescribedByOnLayer(this)
                      : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this)),
                  this
                );
              },
              closeTooltip: function () {
                if (this._tooltip) return this._tooltip.close();
              },
              toggleTooltip: function () {
                return this._tooltip && this._tooltip.toggle(this), this;
              },
              isTooltipOpen: function () {
                return this._tooltip.isOpen();
              },
              setTooltipContent: function (t) {
                return this._tooltip && this._tooltip.setContent(t), this;
              },
              getTooltip: function () {
                return this._tooltip;
              },
              _addFocusListeners: function () {
                this.getElement
                  ? this._addFocusListenersOnLayer(this)
                  : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
              },
              _addFocusListenersOnLayer: function (t) {
                var e = t.getElement();
                e &&
                  (Me(
                    e,
                    'focus',
                    function () {
                      (this._tooltip._source = t), this.openTooltip();
                    },
                    this
                  ),
                  Me(e, 'blur', this.closeTooltip, this));
              },
              _setAriaDescribedByOnLayer: function (t) {
                var e = t.getElement();
                e && e.setAttribute('aria-describedby', this._tooltip._container.id);
              },
              _openTooltip: function (t) {
                !this._tooltip ||
                  !this._map ||
                  (this._map.dragging && this._map.dragging.moving()) ||
                  ((this._tooltip._source = t.layer || t.target),
                  this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
              },
              _moveTooltip: function (t) {
                var e,
                  i,
                  n = t.latlng;
                this._tooltip.options.sticky &&
                  t.originalEvent &&
                  ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
                  (i = this._map.containerPointToLayerPoint(e)),
                  (n = this._map.layerPointToLatLng(i))),
                  this._tooltip.setLatLng(n);
              },
            });
          var en = ki.extend({
            options: { iconSize: [12, 12], html: !1, bgPos: null, className: 'leaflet-div-icon' },
            createIcon: function (t) {
              var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
                i = this.options;
              if (
                (i.html instanceof Element
                  ? (se(e), e.appendChild(i.html))
                  : (e.innerHTML = !1 !== i.html ? i.html : ''),
                i.bgPos)
              ) {
                var n = A(i.bgPos);
                e.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
              }
              return this._setIconStyles(e, 'icon'), e;
            },
            createShadow: function () {
              return null;
            },
          });
          ki.Default = Ci;
          var nn = Ti.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: Ot.mobile,
              updateWhenZooming: !0,
              updateInterval: 200,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              maxNativeZoom: void 0,
              minNativeZoom: void 0,
              noWrap: !1,
              pane: 'tilePane',
              className: '',
              keepBuffer: 2,
            },
            initialize: function (t) {
              d(this, t);
            },
            onAdd: function () {
              this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
            },
            beforeAdd: function (t) {
              t._addZoomLimit(this);
            },
            onRemove: function (t) {
              this._removeAllTiles(),
                re(this._container),
                t._removeZoomLimit(this),
                (this._container = null),
                (this._tileZoom = void 0);
            },
            bringToFront: function () {
              return this._map && (ae(this._container), this._setAutoZIndex(Math.max)), this;
            },
            bringToBack: function () {
              return this._map && (he(this._container), this._setAutoZIndex(Math.min)), this;
            },
            getContainer: function () {
              return this._container;
            },
            setOpacity: function (t) {
              return (this.options.opacity = t), this._updateOpacity(), this;
            },
            setZIndex: function (t) {
              return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            isLoading: function () {
              return this._loading;
            },
            redraw: function () {
              if (this._map) {
                this._removeAllTiles();
                var t = this._clampZoom(this._map.getZoom());
                t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()), this._update();
              }
              return this;
            },
            getEvents: function () {
              var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd,
              };
              return (
                this.options.updateWhenIdle ||
                  (this._onMove || (this._onMove = s(this._onMoveEnd, this.options.updateInterval, this)),
                  (t.move = this._onMove)),
                this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
              );
            },
            createTile: function () {
              return document.createElement('div');
            },
            getTileSize: function () {
              var t = this.options.tileSize;
              return t instanceof Z ? t : new Z(t, t);
            },
            _updateZIndex: function () {
              this._container &&
                void 0 !== this.options.zIndex &&
                null !== this.options.zIndex &&
                (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (t) {
              for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, r = i.length; o < r; o++)
                (e = i[o].style.zIndex), i[o] !== this._container && e && (n = t(n, +e));
              isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
            },
            _updateOpacity: function () {
              if (this._map && !Ot.ielt9) {
                _e(this._container, this.options.opacity);
                var t = +new Date(),
                  e = !1,
                  i = !1;
                for (var n in this._tiles) {
                  var o = this._tiles[n];
                  if (o.current && o.loaded) {
                    var r = Math.min(1, (t - o.loaded) / 200);
                    _e(o.el, r), r < 1 ? (e = !0) : (o.active ? (i = !0) : this._onOpaqueTile(o), (o.active = !0));
                  }
                }
                i && !this._noPrune && this._pruneTiles(),
                  e && (z(this._fadeFrame), (this._fadeFrame = T(this._updateOpacity, this)));
              }
            },
            _onOpaqueTile: h,
            _initContainer: function () {
              this._container ||
                ((this._container = oe('div', 'leaflet-layer ' + (this.options.className || ''))),
                this._updateZIndex(),
                this.options.opacity < 1 && this._updateOpacity(),
                this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              if (void 0 !== t) {
                for (var i in this._levels)
                  (i = Number(i)),
                    this._levels[i].el.children.length || i === t
                      ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)), this._onUpdateLevel(i))
                      : (re(this._levels[i].el),
                        this._removeTilesAtZoom(i),
                        this._onRemoveLevel(i),
                        delete this._levels[i]);
                var n = this._levels[t],
                  o = this._map;
                return (
                  n ||
                    (((n = this._levels[t] = {}).el = oe(
                      'div',
                      'leaflet-tile-container leaflet-zoom-animated',
                      this._container
                    )),
                    (n.el.style.zIndex = e),
                    (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
                    (n.zoom = t),
                    this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                    n.el.offsetWidth,
                    this._onCreateLevel(n)),
                  (this._level = n),
                  n
                );
              }
            },
            _onUpdateLevel: h,
            _onRemoveLevel: h,
            _onCreateLevel: h,
            _pruneTiles: function () {
              if (this._map) {
                var t,
                  e,
                  i = this._map.getZoom();
                if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                else {
                  for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                  for (t in this._tiles)
                    if ((e = this._tiles[t]).current && !e.active) {
                      var n = e.coords;
                      this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
                    }
                  for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
                }
              }
            },
            _removeTilesAtZoom: function (t) {
              for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
            },
            _removeAllTiles: function () {
              for (var t in this._tiles) this._removeTile(t);
            },
            _invalidateAll: function () {
              for (var t in this._levels)
                re(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
              this._removeAllTiles(), (this._tileZoom = void 0);
            },
            _retainParent: function (t, e, i, n) {
              var o = Math.floor(t / 2),
                r = Math.floor(e / 2),
                s = i - 1,
                a = new Z(+o, +r);
              a.z = +s;
              var h = this._tileCoordsToKey(a),
                l = this._tiles[h];
              return l && l.active
                ? ((l.retain = !0), !0)
                : (l && l.loaded && (l.retain = !0), s > n && this._retainParent(o, r, s, n));
            },
            _retainChildren: function (t, e, i, n) {
              for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var r = 2 * e; r < 2 * e + 2; r++) {
                  var s = new Z(o, r);
                  s.z = i + 1;
                  var a = this._tileCoordsToKey(s),
                    h = this._tiles[a];
                  h && h.active
                    ? (h.retain = !0)
                    : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, r, i + 1, n));
                }
            },
            _resetView: function (t) {
              var e = t && (t.pinch || t.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
            },
            _animateZoom: function (t) {
              this._setView(t.center, t.zoom, !0, t.noUpdate);
            },
            _clampZoom: function (t) {
              var e = this.options;
              return void 0 !== e.minNativeZoom && t < e.minNativeZoom
                ? e.minNativeZoom
                : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
                ? e.maxNativeZoom
                : t;
            },
            _setView: function (t, e, i, n) {
              var o = Math.round(e);
              o =
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
                (void 0 !== this.options.minZoom && o < this.options.minZoom)
                  ? void 0
                  : this._clampZoom(o);
              var r = this.options.updateWhenZooming && o !== this._tileZoom;
              (n && !r) ||
                ((this._tileZoom = o),
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== o && this._update(t),
                i || this._pruneTiles(),
                (this._noPrune = !!i)),
                this._setZoomTransforms(t, e);
            },
            _setZoomTransforms: function (t, e) {
              for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
            },
            _setZoomTransform: function (t, e, i) {
              var n = this._map.getZoomScale(i, t.zoom),
                o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
              Ot.any3d ? me(t.el, o, n) : ge(t.el, o);
            },
            _resetGrid: function () {
              var t = this._map,
                e = t.options.crs,
                i = (this._tileSize = this.getTileSize()),
                n = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
              o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                (this._wrapX = e.wrapLng &&
                  !this.options.noWrap && [
                    Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
                    Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
                  ]),
                (this._wrapY = e.wrapLat &&
                  !this.options.noWrap && [
                    Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
                    Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
                  ]);
            },
            _onMoveEnd: function () {
              this._map && !this._map._animatingZoom && this._update();
            },
            _getTiledPixelBounds: function (t) {
              var e = this._map,
                i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                n = e.getZoomScale(i, this._tileZoom),
                o = e.project(t, this._tileZoom).floor(),
                r = e.getSize().divideBy(2 * n);
              return new O(o.subtract(r), o.add(r));
            },
            _update: function (t) {
              var e = this._map;
              if (e) {
                var i = this._clampZoom(e.getZoom());
                if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
                  var n = this._getTiledPixelBounds(t),
                    o = this._pxBoundsToTileRange(n),
                    r = o.getCenter(),
                    s = [],
                    a = this.options.keepBuffer,
                    h = new O(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                  if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                    throw new Error('Attempted to load an infinite number of tiles');
                  for (var l in this._tiles) {
                    var u = this._tiles[l].coords;
                    (u.z === this._tileZoom && h.contains(new Z(u.x, u.y))) || (this._tiles[l].current = !1);
                  }
                  if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                  else {
                    for (var c = o.min.y; c <= o.max.y; c++)
                      for (var d = o.min.x; d <= o.max.x; d++) {
                        var p = new Z(d, c);
                        if (((p.z = this._tileZoom), this._isValidTile(p))) {
                          var _ = this._tiles[this._tileCoordsToKey(p)];
                          _ ? (_.current = !0) : s.push(p);
                        }
                      }
                    if (
                      (s.sort(function (t, e) {
                        return t.distanceTo(r) - e.distanceTo(r);
                      }),
                      0 !== s.length)
                    ) {
                      this._loading || ((this._loading = !0), this.fire('loading'));
                      var f = document.createDocumentFragment();
                      for (d = 0; d < s.length; d++) this._addTile(s[d], f);
                      this._level.el.appendChild(f);
                    }
                  }
                }
              }
            },
            _isValidTile: function (t) {
              var e = this._map.options.crs;
              if (!e.infinite) {
                var i = this._globalTileRange;
                if (
                  (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
                  (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                )
                  return !1;
              }
              if (!this.options.bounds) return !0;
              var n = this._tileCoordsToBounds(t);
              return R(this.options.bounds).overlaps(n);
            },
            _keyToBounds: function (t) {
              return this._tileCoordsToBounds(this._keyToTileCoords(t));
            },
            _tileCoordsToNwSe: function (t) {
              var e = this._map,
                i = this.getTileSize(),
                n = t.scaleBy(i),
                o = n.add(i);
              return [e.unproject(n, t.z), e.unproject(o, t.z)];
            },
            _tileCoordsToBounds: function (t) {
              var e = this._tileCoordsToNwSe(t),
                i = new B(e[0], e[1]);
              return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
            },
            _tileCoordsToKey: function (t) {
              return t.x + ':' + t.y + ':' + t.z;
            },
            _keyToTileCoords: function (t) {
              var e = t.split(':'),
                i = new Z(+e[0], +e[1]);
              return (i.z = +e[2]), i;
            },
            _removeTile: function (t) {
              var e = this._tiles[t];
              e &&
                (re(e.el),
                delete this._tiles[t],
                this.fire('tileunload', { tile: e.el, coords: this._keyToTileCoords(t) }));
            },
            _initTile: function (t) {
              ue(t, 'leaflet-tile');
              var e = this.getTileSize();
              (t.style.width = e.x + 'px'),
                (t.style.height = e.y + 'px'),
                (t.onselectstart = h),
                (t.onmousemove = h),
                Ot.ielt9 && this.options.opacity < 1 && _e(t, this.options.opacity);
            },
            _addTile: function (t, e) {
              var i = this._getTilePos(t),
                o = this._tileCoordsToKey(t),
                r = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
              this._initTile(r),
                this.createTile.length < 2 && T(n(this._tileReady, this, t, null, r)),
                ge(r, i),
                (this._tiles[o] = { el: r, coords: t, current: !0 }),
                e.appendChild(r),
                this.fire('tileloadstart', { tile: r, coords: t });
            },
            _tileReady: function (t, e, i) {
              e && this.fire('tileerror', { error: e, tile: i, coords: t });
              var o = this._tileCoordsToKey(t);
              (i = this._tiles[o]) &&
                ((i.loaded = +new Date()),
                this._map._fadeAnimated
                  ? (_e(i.el, 0), z(this._fadeFrame), (this._fadeFrame = T(this._updateOpacity, this)))
                  : ((i.active = !0), this._pruneTiles()),
                e || (ue(i.el, 'leaflet-tile-loaded'), this.fire('tileload', { tile: i.el, coords: t })),
                this._noTilesToLoad() &&
                  ((this._loading = !1),
                  this.fire('load'),
                  Ot.ielt9 || !this._map._fadeAnimated
                    ? T(this._pruneTiles, this)
                    : setTimeout(n(this._pruneTiles, this), 250)));
            },
            _getTilePos: function (t) {
              return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
            },
            _wrapCoords: function (t) {
              var e = new Z(this._wrapX ? a(t.x, this._wrapX) : t.x, this._wrapY ? a(t.y, this._wrapY) : t.y);
              return (e.z = t.z), e;
            },
            _pxBoundsToTileRange: function (t) {
              var e = this.getTileSize();
              return new O(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
            },
            _noTilesToLoad: function () {
              for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
              return !0;
            },
          });
          var on = nn.extend({
            options: {
              minZoom: 0,
              maxZoom: 18,
              subdomains: 'abc',
              errorTileUrl: '',
              zoomOffset: 0,
              tms: !1,
              zoomReverse: !1,
              detectRetina: !1,
              crossOrigin: !1,
              referrerPolicy: !1,
            },
            initialize: function (t, e) {
              (this._url = t),
                (e = d(this, e)).detectRetina && Ot.retina && e.maxZoom > 0
                  ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                    e.zoomReverse
                      ? (e.zoomOffset--, (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                      : (e.zoomOffset++, (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
                    (e.minZoom = Math.max(0, e.minZoom)))
                  : e.zoomReverse
                  ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                  : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
                'string' == typeof e.subdomains && (e.subdomains = e.subdomains.split('')),
                this.on('tileunload', this._onTileRemove);
            },
            setUrl: function (t, e) {
              return this._url === t && void 0 === e && (e = !0), (this._url = t), e || this.redraw(), this;
            },
            createTile: function (t, e) {
              var i = document.createElement('img');
              return (
                Me(i, 'load', n(this._tileOnLoad, this, e, i)),
                Me(i, 'error', n(this._tileOnError, this, e, i)),
                (this.options.crossOrigin || '' === this.options.crossOrigin) &&
                  (i.crossOrigin = !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
                'string' == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy),
                (i.alt = ''),
                (i.src = this.getTileUrl(t)),
                i
              );
            },
            getTileUrl: function (t) {
              var i = { r: Ot.retina ? '@2x' : '', s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
              if (this._map && !this._map.options.crs.infinite) {
                var n = this._globalTileRange.max.y - t.y;
                this.options.tms && (i.y = n), (i['-y'] = n);
              }
              return f(this._url, e(i, this.options));
            },
            _tileOnLoad: function (t, e) {
              Ot.ielt9 ? setTimeout(n(t, this, null, e), 0) : t(null, e);
            },
            _tileOnError: function (t, e, i) {
              var n = this.options.errorTileUrl;
              n && e.getAttribute('src') !== n && (e.src = n), t(i, e);
            },
            _onTileRemove: function (t) {
              t.tile.onload = null;
            },
            _getZoomForUrl: function () {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset;
            },
            _getSubdomain: function (t) {
              var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
              return this.options.subdomains[e];
            },
            _abortLoading: function () {
              var t, e;
              for (t in this._tiles)
                if (
                  this._tiles[t].coords.z !== this._tileZoom &&
                  (((e = this._tiles[t].el).onload = h), (e.onerror = h), !e.complete)
                ) {
                  e.src = v;
                  var i = this._tiles[t].coords;
                  re(e), delete this._tiles[t], this.fire('tileabort', { tile: e, coords: i });
                }
            },
            _removeTile: function (t) {
              var e = this._tiles[t];
              if (e) return e.el.setAttribute('src', v), nn.prototype._removeTile.call(this, t);
            },
            _tileReady: function (t, e, i) {
              if (this._map && (!i || i.getAttribute('src') !== v)) return nn.prototype._tileReady.call(this, t, e, i);
            },
          });
          function rn(t, e) {
            return new on(t, e);
          }
          var sn = on.extend({
            defaultWmsParams: {
              service: 'WMS',
              request: 'GetMap',
              layers: '',
              styles: '',
              format: 'image/jpeg',
              transparent: !1,
              version: '1.1.1',
            },
            options: { crs: null, uppercase: !1 },
            initialize: function (t, i) {
              this._url = t;
              var n = e({}, this.defaultWmsParams);
              for (var o in i) o in this.options || (n[o] = i[o]);
              var r = (i = d(this, i)).detectRetina && Ot.retina ? 2 : 1,
                s = this.getTileSize();
              (n.width = s.x * r), (n.height = s.y * r), (this.wmsParams = n);
            },
            onAdd: function (t) {
              (this._crs = this.options.crs || t.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version));
              var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
              (this.wmsParams[e] = this._crs.code), on.prototype.onAdd.call(this, t);
            },
            getTileUrl: function (t) {
              var e = this._tileCoordsToNwSe(t),
                i = this._crs,
                n = I(i.project(e[0]), i.project(e[1])),
                o = n.min,
                r = n.max,
                s = (this._wmsVersion >= 1.3 && this._crs === Pi ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(
                  ','
                ),
                a = on.prototype.getTileUrl.call(this, t);
              return (
                a + p(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? '&BBOX=' : '&bbox=') + s
              );
            },
            setParams: function (t, i) {
              return e(this.wmsParams, t), i || this.redraw(), this;
            },
          });
          (on.WMS = sn),
            (rn.wms = function (t, e) {
              return new sn(t, e);
            });
          var an = Ti.extend({
              options: { padding: 0.1 },
              initialize: function (t) {
                d(this, t), r(this), (this._layers = this._layers || {});
              },
              onAdd: function () {
                this._container ||
                  (this._initContainer(), this._zoomAnimated && ue(this._container, 'leaflet-zoom-animated')),
                  this.getPane().appendChild(this._container),
                  this._update(),
                  this.on('update', this._updatePaths, this);
              },
              onRemove: function () {
                this.off('update', this._updatePaths, this), this._destroyContainer();
              },
              getEvents: function () {
                var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
              },
              _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom);
              },
              _onZoom: function () {
                this._updateTransform(this._map.getCenter(), this._map.getZoom());
              },
              _updateTransform: function (t, e) {
                var i = this._map.getZoomScale(e, this._zoom),
                  n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                  o = this._map.project(this._center, e),
                  r = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
                Ot.any3d ? me(this._container, r, i) : ge(this._container, r);
              },
              _reset: function () {
                for (var t in (this._update(), this._updateTransform(this._center, this._zoom), this._layers))
                  this._layers[t]._reset();
              },
              _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project();
              },
              _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update();
              },
              _update: function () {
                var t = this.options.padding,
                  e = this._map.getSize(),
                  i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                (this._bounds = new O(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
                  (this._center = this._map.getCenter()),
                  (this._zoom = this._map.getZoom());
              },
            }),
            hn = an.extend({
              options: { tolerance: 0 },
              getEvents: function () {
                var t = an.prototype.getEvents.call(this);
                return (t.viewprereset = this._onViewPreReset), t;
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0;
              },
              onAdd: function () {
                an.prototype.onAdd.call(this), this._draw();
              },
              _initContainer: function () {
                var t = (this._container = document.createElement('canvas'));
                Me(t, 'mousemove', this._onMouseMove, this),
                  Me(t, 'click dblclick mousedown mouseup contextmenu', this._onClick, this),
                  Me(t, 'mouseout', this._handleMouseOut, this),
                  (t._leaflet_disable_events = !0),
                  (this._ctx = t.getContext('2d'));
              },
              _destroyContainer: function () {
                z(this._redrawRequest),
                  delete this._ctx,
                  re(this._container),
                  Ce(this._container),
                  delete this._container;
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  for (var t in ((this._redrawBounds = null), this._layers)) this._layers[t]._update();
                  this._redraw();
                }
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  an.prototype._update.call(this);
                  var t = this._bounds,
                    e = this._container,
                    i = t.getSize(),
                    n = Ot.retina ? 2 : 1;
                  ge(e, t.min),
                    (e.width = n * i.x),
                    (e.height = n * i.y),
                    (e.style.width = i.x + 'px'),
                    (e.style.height = i.y + 'px'),
                    Ot.retina && this._ctx.scale(2, 2),
                    this._ctx.translate(-t.min.x, -t.min.y),
                    this.fire('update');
                }
              },
              _reset: function () {
                an.prototype._reset.call(this),
                  this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
              },
              _initPath: function (t) {
                this._updateDashArray(t), (this._layers[r(t)] = t);
                var e = (t._order = { layer: t, prev: this._drawLast, next: null });
                this._drawLast && (this._drawLast.next = e),
                  (this._drawLast = e),
                  (this._drawFirst = this._drawFirst || this._drawLast);
              },
              _addPath: function (t) {
                this._requestRedraw(t);
              },
              _removePath: function (t) {
                var e = t._order,
                  i = e.next,
                  n = e.prev;
                i ? (i.prev = n) : (this._drawLast = n),
                  n ? (n.next = i) : (this._drawFirst = i),
                  delete t._order,
                  delete this._layers[r(t)],
                  this._requestRedraw(t);
              },
              _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
              },
              _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t);
              },
              _updateDashArray: function (t) {
                if ('string' == typeof t.options.dashArray) {
                  var e,
                    i,
                    n = t.options.dashArray.split(/[, ]+/),
                    o = [];
                  for (i = 0; i < n.length; i++) {
                    if (((e = Number(n[i])), isNaN(e))) return;
                    o.push(e);
                  }
                  t.options._dashArray = o;
                } else t.options._dashArray = t.options.dashArray;
              },
              _requestRedraw: function (t) {
                this._map &&
                  (this._extendRedrawBounds(t), (this._redrawRequest = this._redrawRequest || T(this._redraw, this)));
              },
              _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                  var e = (t.options.weight || 0) + 1;
                  (this._redrawBounds = this._redrawBounds || new O()),
                    this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                    this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
                }
              },
              _redraw: function () {
                (this._redrawRequest = null),
                  this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
                  this._clear(),
                  this._draw(),
                  (this._redrawBounds = null);
              },
              _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                  var e = t.getSize();
                  this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
                } else
                  this._ctx.save(),
                    this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                    this._ctx.clearRect(0, 0, this._container.width, this._container.height),
                    this._ctx.restore();
              },
              _draw: function () {
                var t,
                  e = this._redrawBounds;
                if ((this._ctx.save(), e)) {
                  var i = e.getSize();
                  this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next)
                  (t = n.layer), (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
                (this._drawing = !1), this._ctx.restore();
              },
              _updatePoly: function (t, e) {
                if (this._drawing) {
                  var i,
                    n,
                    o,
                    r,
                    s = t._parts,
                    a = s.length,
                    h = this._ctx;
                  if (a) {
                    for (h.beginPath(), i = 0; i < a; i++) {
                      for (n = 0, o = s[i].length; n < o; n++) (r = s[i][n]), h[n ? 'lineTo' : 'moveTo'](r.x, r.y);
                      e && h.closePath();
                    }
                    this._fillStroke(h, t);
                  }
                }
              },
              _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                  var e = t._point,
                    i = this._ctx,
                    n = Math.max(Math.round(t._radius), 1),
                    o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                  1 !== o && (i.save(), i.scale(1, o)),
                    i.beginPath(),
                    i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
                    1 !== o && i.restore(),
                    this._fillStroke(i, t);
                }
              },
              _fillStroke: function (t, e) {
                var i = e.options;
                i.fill &&
                  ((t.globalAlpha = i.fillOpacity),
                  (t.fillStyle = i.fillColor || i.color),
                  t.fill(i.fillRule || 'evenodd')),
                  i.stroke &&
                    0 !== i.weight &&
                    (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
                    (t.globalAlpha = i.opacity),
                    (t.lineWidth = i.weight),
                    (t.strokeStyle = i.color),
                    (t.lineCap = i.lineCap),
                    (t.lineJoin = i.lineJoin),
                    t.stroke());
              },
              _onClick: function (t) {
                for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                  (e = o.layer).options.interactive &&
                    e._containsPoint(n) &&
                    (('click' !== t.type && 'preclick' !== t.type) || !this._map._draggableMoved(e)) &&
                    (i = e);
                this._fireEvent(!!i && [i], t);
              },
              _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                  var e = this._map.mouseEventToLayerPoint(t);
                  this._handleMouseHover(t, e);
                }
              },
              _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e &&
                  (ce(this._container, 'leaflet-interactive'),
                  this._fireEvent([e], t, 'mouseout'),
                  (this._hoveredLayer = null),
                  (this._mouseHoverThrottled = !1));
              },
              _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                  for (var i, o, r = this._drawFirst; r; r = r.next)
                    (i = r.layer).options.interactive && i._containsPoint(e) && (o = i);
                  o !== this._hoveredLayer &&
                    (this._handleMouseOut(t),
                    o &&
                      (ue(this._container, 'leaflet-interactive'),
                      this._fireEvent([o], t, 'mouseover'),
                      (this._hoveredLayer = o))),
                    this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
                    (this._mouseHoverThrottled = !0),
                    setTimeout(
                      n(function () {
                        this._mouseHoverThrottled = !1;
                      }, this),
                      32
                    );
                }
              },
              _fireEvent: function (t, e, i) {
                this._map._fireDOMEvent(e, i || e.type, t);
              },
              _bringToFront: function (t) {
                var e = t._order;
                if (e) {
                  var i = e.next,
                    n = e.prev;
                  i &&
                    ((i.prev = n),
                    n ? (n.next = i) : i && (this._drawFirst = i),
                    (e.prev = this._drawLast),
                    (this._drawLast.next = e),
                    (e.next = null),
                    (this._drawLast = e),
                    this._requestRedraw(t));
                }
              },
              _bringToBack: function (t) {
                var e = t._order;
                if (e) {
                  var i = e.next,
                    n = e.prev;
                  n &&
                    ((n.next = i),
                    i ? (i.prev = n) : n && (this._drawLast = n),
                    (e.prev = null),
                    (e.next = this._drawFirst),
                    (this._drawFirst.prev = e),
                    (this._drawFirst = e),
                    this._requestRedraw(t));
                }
              },
            });
          function ln(t) {
            return Ot.canvas ? new hn(t) : null;
          }
          var un = (function () {
              try {
                return (
                  document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
                  function (t) {
                    return document.createElement('<lvml:' + t + ' class="lvml">');
                  }
                );
              } catch (t) {}
              return function (t) {
                return document.createElement('<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
              };
            })(),
            cn = {
              _initContainer: function () {
                this._container = oe('div', 'leaflet-vml-container');
              },
              _update: function () {
                this._map._animatingZoom || (an.prototype._update.call(this), this.fire('update'));
              },
              _initPath: function (t) {
                var e = (t._container = un('shape'));
                ue(e, 'leaflet-vml-shape ' + (this.options.className || '')),
                  (e.coordsize = '1 1'),
                  (t._path = un('path')),
                  e.appendChild(t._path),
                  this._updateStyle(t),
                  (this._layers[r(t)] = t);
              },
              _addPath: function (t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
              },
              _removePath: function (t) {
                var e = t._container;
                re(e), t.removeInteractiveTarget(e), delete this._layers[r(t)];
              },
              _updateStyle: function (t) {
                var e = t._stroke,
                  i = t._fill,
                  n = t.options,
                  o = t._container;
                (o.stroked = !!n.stroke),
                  (o.filled = !!n.fill),
                  n.stroke
                    ? (e || (e = t._stroke = un('stroke')),
                      o.appendChild(e),
                      (e.weight = n.weight + 'px'),
                      (e.color = n.color),
                      (e.opacity = n.opacity),
                      n.dashArray
                        ? (e.dashStyle = m(n.dashArray) ? n.dashArray.join(' ') : n.dashArray.replace(/( *, *)/g, ' '))
                        : (e.dashStyle = ''),
                      (e.endcap = n.lineCap.replace('butt', 'flat')),
                      (e.joinstyle = n.lineJoin))
                    : e && (o.removeChild(e), (t._stroke = null)),
                  n.fill
                    ? (i || (i = t._fill = un('fill')),
                      o.appendChild(i),
                      (i.color = n.fillColor || n.color),
                      (i.opacity = n.fillOpacity))
                    : i && (o.removeChild(i), (t._fill = null));
              },
              _updateCircle: function (t) {
                var e = t._point.round(),
                  i = Math.round(t._radius),
                  n = Math.round(t._radiusY || i);
                this._setPath(t, t._empty() ? 'M0 0' : 'AL ' + e.x + ',' + e.y + ' ' + i + ',' + n + ' 0,23592600');
              },
              _setPath: function (t, e) {
                t._path.v = e;
              },
              _bringToFront: function (t) {
                ae(t._container);
              },
              _bringToBack: function (t) {
                he(t._container);
              },
            },
            dn = Ot.vml ? un : Y,
            pn = an.extend({
              _initContainer: function () {
                (this._container = dn('svg')),
                  this._container.setAttribute('pointer-events', 'none'),
                  (this._rootGroup = dn('g')),
                  this._container.appendChild(this._rootGroup);
              },
              _destroyContainer: function () {
                re(this._container),
                  Ce(this._container),
                  delete this._container,
                  delete this._rootGroup,
                  delete this._svgSize;
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  an.prototype._update.call(this);
                  var t = this._bounds,
                    e = t.getSize(),
                    i = this._container;
                  (this._svgSize && this._svgSize.equals(e)) ||
                    ((this._svgSize = e), i.setAttribute('width', e.x), i.setAttribute('height', e.y)),
                    ge(i, t.min),
                    i.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
                    this.fire('update');
                }
              },
              _initPath: function (t) {
                var e = (t._path = dn('path'));
                t.options.className && ue(e, t.options.className),
                  t.options.interactive && ue(e, 'leaflet-interactive'),
                  this._updateStyle(t),
                  (this._layers[r(t)] = t);
              },
              _addPath: function (t) {
                this._rootGroup || this._initContainer(),
                  this._rootGroup.appendChild(t._path),
                  t.addInteractiveTarget(t._path);
              },
              _removePath: function (t) {
                re(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r(t)];
              },
              _updatePath: function (t) {
                t._project(), t._update();
              },
              _updateStyle: function (t) {
                var e = t._path,
                  i = t.options;
                e &&
                  (i.stroke
                    ? (e.setAttribute('stroke', i.color),
                      e.setAttribute('stroke-opacity', i.opacity),
                      e.setAttribute('stroke-width', i.weight),
                      e.setAttribute('stroke-linecap', i.lineCap),
                      e.setAttribute('stroke-linejoin', i.lineJoin),
                      i.dashArray
                        ? e.setAttribute('stroke-dasharray', i.dashArray)
                        : e.removeAttribute('stroke-dasharray'),
                      i.dashOffset
                        ? e.setAttribute('stroke-dashoffset', i.dashOffset)
                        : e.removeAttribute('stroke-dashoffset'))
                    : e.setAttribute('stroke', 'none'),
                  i.fill
                    ? (e.setAttribute('fill', i.fillColor || i.color),
                      e.setAttribute('fill-opacity', i.fillOpacity),
                      e.setAttribute('fill-rule', i.fillRule || 'evenodd'))
                    : e.setAttribute('fill', 'none'));
              },
              _updatePoly: function (t, e) {
                this._setPath(t, X(t._parts, e));
              },
              _updateCircle: function (t) {
                var e = t._point,
                  i = Math.max(Math.round(t._radius), 1),
                  n = 'a' + i + ',' + (Math.max(Math.round(t._radiusY), 1) || i) + ' 0 1,0 ',
                  o = t._empty() ? 'M0 0' : 'M' + (e.x - i) + ',' + e.y + n + 2 * i + ',0 ' + n + 2 * -i + ',0 ';
                this._setPath(t, o);
              },
              _setPath: function (t, e) {
                t._path.setAttribute('d', e);
              },
              _bringToFront: function (t) {
                ae(t._path);
              },
              _bringToBack: function (t) {
                he(t._path);
              },
            });
          function _n(t) {
            return Ot.svg || Ot.vml ? new pn(t) : null;
          }
          Ot.vml && pn.include(cn),
            qe.include({
              getRenderer: function (t) {
                var e =
                  t.options.renderer ||
                  this._getPaneRenderer(t.options.pane) ||
                  this.options.renderer ||
                  this._renderer;
                return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
              },
              _getPaneRenderer: function (t) {
                if ('overlayPane' === t || void 0 === t) return !1;
                var e = this._paneRenderers[t];
                return void 0 === e && ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)), e;
              },
              _createRenderer: function (t) {
                return (this.options.preferCanvas && ln(t)) || _n(t);
              },
            });
          var fn = Bi.extend({
            initialize: function (t, e) {
              Bi.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
            },
            setBounds: function (t) {
              return this.setLatLngs(this._boundsToLatLngs(t));
            },
            _boundsToLatLngs: function (t) {
              return [(t = R(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
            },
          });
          (pn.create = dn),
            (pn.pointsToPath = X),
            (Ri.geometryToLayer = Ni),
            (Ri.coordsToLatLng = ji),
            (Ri.coordsToLatLngs = Fi),
            (Ri.latLngToCoords = Hi),
            (Ri.latLngsToCoords = Wi),
            (Ri.getFeature = Ui),
            (Ri.asFeature = Vi),
            qe.mergeOptions({ boxZoom: !0 });
          var mn = Qe.extend({
            initialize: function (t) {
              (this._map = t),
                (this._container = t._container),
                (this._pane = t._panes.overlayPane),
                (this._resetStateTimeout = 0),
                t.on('unload', this._destroy, this);
            },
            addHooks: function () {
              Me(this._container, 'mousedown', this._onMouseDown, this);
            },
            removeHooks: function () {
              Ce(this._container, 'mousedown', this._onMouseDown, this);
            },
            moved: function () {
              return this._moved;
            },
            _destroy: function () {
              re(this._pane), delete this._pane;
            },
            _resetState: function () {
              (this._resetStateTimeout = 0), (this._moved = !1);
            },
            _clearDeferredResetState: function () {
              0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
            },
            _onMouseDown: function (t) {
              if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
              this._clearDeferredResetState(),
                this._resetState(),
                Kt(),
                xe(),
                (this._startPoint = this._map.mouseEventToContainerPoint(t)),
                Me(
                  document,
                  { contextmenu: Ne, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown },
                  this
                );
            },
            _onMouseMove: function (t) {
              this._moved ||
                ((this._moved = !0),
                (this._box = oe('div', 'leaflet-zoom-box', this._container)),
                ue(this._container, 'leaflet-crosshair'),
                this._map.fire('boxzoomstart')),
                (this._point = this._map.mouseEventToContainerPoint(t));
              var e = new O(this._point, this._startPoint),
                i = e.getSize();
              ge(this._box, e.min), (this._box.style.width = i.x + 'px'), (this._box.style.height = i.y + 'px');
            },
            _finish: function () {
              this._moved && (re(this._box), ce(this._container, 'leaflet-crosshair')),
                Yt(),
                be(),
                Ce(
                  document,
                  { contextmenu: Ne, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown },
                  this
                );
            },
            _onMouseUp: function (t) {
              if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), (this._resetStateTimeout = setTimeout(n(this._resetState, this), 0));
                var e = new B(
                  this._map.containerPointToLatLng(this._startPoint),
                  this._map.containerPointToLatLng(this._point)
                );
                this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
              }
            },
            _onKeyDown: function (t) {
              27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
            },
          });
          qe.addInitHook('addHandler', 'boxZoom', mn), qe.mergeOptions({ doubleClickZoom: !0 });
          var gn = Qe.extend({
            addHooks: function () {
              this._map.on('dblclick', this._onDoubleClick, this);
            },
            removeHooks: function () {
              this._map.off('dblclick', this._onDoubleClick, this);
            },
            _onDoubleClick: function (t) {
              var e = this._map,
                i = e.getZoom(),
                n = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? i - n : i + n;
              'center' === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
            },
          });
          qe.addInitHook('addHandler', 'doubleClickZoom', gn),
            qe.mergeOptions({
              dragging: !0,
              inertia: !0,
              inertiaDeceleration: 3400,
              inertiaMaxSpeed: 1 / 0,
              easeLinearity: 0.2,
              worldCopyJump: !1,
              maxBoundsViscosity: 0,
            });
          var vn = Qe.extend({
            addHooks: function () {
              if (!this._draggable) {
                var t = this._map;
                (this._draggable = new ni(t._mapPane, t._container)),
                  this._draggable.on(
                    { dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd },
                    this
                  ),
                  this._draggable.on('predrag', this._onPreDragLimit, this),
                  t.options.worldCopyJump &&
                    (this._draggable.on('predrag', this._onPreDragWrap, this),
                    t.on('zoomend', this._onZoomEnd, this),
                    t.whenReady(this._onZoomEnd, this));
              }
              ue(this._map._container, 'leaflet-grab leaflet-touch-drag'),
                this._draggable.enable(),
                (this._positions = []),
                (this._times = []);
            },
            removeHooks: function () {
              ce(this._map._container, 'leaflet-grab'),
                ce(this._map._container, 'leaflet-touch-drag'),
                this._draggable.disable();
            },
            moved: function () {
              return this._draggable && this._draggable._moved;
            },
            moving: function () {
              return this._draggable && this._draggable._moving;
            },
            _onDragStart: function () {
              var t = this._map;
              if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
                var e = R(this._map.options.maxBounds);
                (this._offsetLimit = I(
                  this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
                  this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
                )),
                  (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
              } else this._offsetLimit = null;
              t.fire('movestart').fire('dragstart'), t.options.inertia && ((this._positions = []), (this._times = []));
            },
            _onDrag: function (t) {
              if (this._map.options.inertia) {
                var e = (this._lastTime = +new Date()),
                  i = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
                this._positions.push(i), this._times.push(e), this._prunePositions(e);
              }
              this._map.fire('move', t).fire('drag', t);
            },
            _prunePositions: function (t) {
              for (; this._positions.length > 1 && t - this._times[0] > 50; )
                this._positions.shift(), this._times.shift();
            },
            _onZoomEnd: function () {
              var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
              (this._initialWorldOffset = e.subtract(t).x),
                (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
            },
            _viscousLimit: function (t, e) {
              return t - (t - e) * this._viscosity;
            },
            _onPreDragLimit: function () {
              if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                  e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                  t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                  t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                  t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                  (this._draggable._newPos = this._draggable._startPos.add(t));
              }
            },
            _onPreDragWrap: function () {
              var t = this._worldWidth,
                e = Math.round(t / 2),
                i = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = ((n - e + i) % t) + e - i,
                r = ((n + e + i) % t) - e - i,
                s = Math.abs(o + i) < Math.abs(r + i) ? o : r;
              (this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = s);
            },
            _onDragEnd: function (t) {
              var e = this._map,
                i = e.options,
                n = !i.inertia || t.noInertia || this._times.length < 2;
              if ((e.fire('dragend', t), n)) e.fire('moveend');
              else {
                this._prunePositions(+new Date());
                var o = this._lastPos.subtract(this._positions[0]),
                  r = (this._lastTime - this._times[0]) / 1e3,
                  s = i.easeLinearity,
                  a = o.multiplyBy(s / r),
                  h = a.distanceTo([0, 0]),
                  l = Math.min(i.inertiaMaxSpeed, h),
                  u = a.multiplyBy(l / h),
                  c = l / (i.inertiaDeceleration * s),
                  d = u.multiplyBy(-c / 2).round();
                d.x || d.y
                  ? ((d = e._limitOffset(d, e.options.maxBounds)),
                    T(function () {
                      e.panBy(d, { duration: c, easeLinearity: s, noMoveStart: !0, animate: !0 });
                    }))
                  : e.fire('moveend');
              }
            },
          });
          qe.addInitHook('addHandler', 'dragging', vn), qe.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
          var yn = Qe.extend({
            keyCodes: {
              left: [37],
              right: [39],
              down: [40],
              up: [38],
              zoomIn: [187, 107, 61, 171],
              zoomOut: [189, 109, 54, 173],
            },
            initialize: function (t) {
              (this._map = t), this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
            },
            addHooks: function () {
              var t = this._map._container;
              t.tabIndex <= 0 && (t.tabIndex = '0'),
                Me(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this),
                this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
            },
            removeHooks: function () {
              this._removeHooks(),
                Ce(
                  this._map._container,
                  { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown },
                  this
                ),
                this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var t = document.body,
                  e = document.documentElement,
                  i = t.scrollTop || e.scrollTop,
                  n = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, i);
              }
            },
            _onFocus: function () {
              (this._focused = !0), this._map.fire('focus');
            },
            _onBlur: function () {
              (this._focused = !1), this._map.fire('blur');
            },
            _setPanDelta: function (t) {
              var e,
                i,
                n = (this._panKeys = {}),
                o = this.keyCodes;
              for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
              for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
              for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
              for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t];
            },
            _setZoomDelta: function (t) {
              var e,
                i,
                n = (this._zoomKeys = {}),
                o = this.keyCodes;
              for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
              for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t;
            },
            _addHooks: function () {
              Me(document, 'keydown', this._onKeyDown, this);
            },
            _removeHooks: function () {
              Ce(document, 'keydown', this._onKeyDown, this);
            },
            _onKeyDown: function (t) {
              if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e,
                  i = t.keyCode,
                  n = this._map;
                if (i in this._panKeys)
                  (n._panAnim && n._panAnim._inProgress) ||
                    ((e = this._panKeys[i]),
                    t.shiftKey && (e = A(e).multiplyBy(3)),
                    n.panBy(e),
                    n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                  if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                  n.closePopup();
                }
                Ne(t);
              }
            },
          });
          qe.addInitHook('addHandler', 'keyboard', yn),
            qe.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
          var xn = Qe.extend({
            addHooks: function () {
              Me(this._map._container, 'wheel', this._onWheelScroll, this), (this._delta = 0);
            },
            removeHooks: function () {
              Ce(this._map._container, 'wheel', this._onWheelScroll, this);
            },
            _onWheelScroll: function (t) {
              var e = He(t),
                i = this._map.options.wheelDebounceTime;
              (this._delta += e),
                (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
                this._startTime || (this._startTime = +new Date());
              var o = Math.max(i - (+new Date() - this._startTime), 0);
              clearTimeout(this._timer), (this._timer = setTimeout(n(this._performZoom, this), o)), Ne(t);
            },
            _performZoom: function () {
              var t = this._map,
                e = t.getZoom(),
                i = this._map.options.zoomSnap || 0;
              t._stop();
              var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
                r = i ? Math.ceil(o / i) * i : o,
                s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
              (this._delta = 0),
                (this._startTime = null),
                s &&
                  ('center' === t.options.scrollWheelZoom
                    ? t.setZoom(e + s)
                    : t.setZoomAround(this._lastMousePos, e + s));
            },
          });
          qe.addInitHook('addHandler', 'scrollWheelZoom', xn);
          qe.mergeOptions({ tapHold: Ot.touchNative && Ot.safari && Ot.mobile, tapTolerance: 15 });
          var bn = Qe.extend({
            addHooks: function () {
              Me(this._map._container, 'touchstart', this._onDown, this);
            },
            removeHooks: function () {
              Ce(this._map._container, 'touchstart', this._onDown, this);
            },
            _onDown: function (t) {
              if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
                var e = t.touches[0];
                (this._startPos = this._newPos = new Z(e.clientX, e.clientY)),
                  (this._holdTimeout = setTimeout(
                    n(function () {
                      this._cancel(),
                        this._isTapValid() &&
                          (Me(document, 'touchend', Re),
                          Me(document, 'touchend touchcancel', this._cancelClickPrevent),
                          this._simulateEvent('contextmenu', e));
                    }, this),
                    600
                  )),
                  Me(document, 'touchend touchcancel contextmenu', this._cancel, this),
                  Me(document, 'touchmove', this._onMove, this);
              }
            },
            _cancelClickPrevent: function t() {
              Ce(document, 'touchend', Re), Ce(document, 'touchend touchcancel', t);
            },
            _cancel: function () {
              clearTimeout(this._holdTimeout),
                Ce(document, 'touchend touchcancel contextmenu', this._cancel, this),
                Ce(document, 'touchmove', this._onMove, this);
            },
            _onMove: function (t) {
              var e = t.touches[0];
              this._newPos = new Z(e.clientX, e.clientY);
            },
            _isTapValid: function () {
              return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
            },
            _simulateEvent: function (t, e) {
              var i = new MouseEvent(t, {
                bubbles: !0,
                cancelable: !0,
                view: window,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
              });
              (i._simulated = !0), e.target.dispatchEvent(i);
            },
          });
          qe.addInitHook('addHandler', 'tapHold', bn), qe.mergeOptions({ touchZoom: Ot.touch, bounceAtZoomLimits: !0 });
          var wn = Qe.extend({
            addHooks: function () {
              ue(this._map._container, 'leaflet-touch-zoom'),
                Me(this._map._container, 'touchstart', this._onTouchStart, this);
            },
            removeHooks: function () {
              ce(this._map._container, 'leaflet-touch-zoom'),
                Ce(this._map._container, 'touchstart', this._onTouchStart, this);
            },
            _onTouchStart: function (t) {
              var e = this._map;
              if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var i = e.mouseEventToContainerPoint(t.touches[0]),
                  n = e.mouseEventToContainerPoint(t.touches[1]);
                (this._centerPoint = e.getSize()._divideBy(2)),
                  (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
                  'center' !== e.options.touchZoom &&
                    (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
                  (this._startDist = i.distanceTo(n)),
                  (this._startZoom = e.getZoom()),
                  (this._moved = !1),
                  (this._zooming = !0),
                  e._stop(),
                  Me(document, 'touchmove', this._onTouchMove, this),
                  Me(document, 'touchend touchcancel', this._onTouchEnd, this),
                  Re(t);
              }
            },
            _onTouchMove: function (t) {
              if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                  i = e.mouseEventToContainerPoint(t.touches[0]),
                  o = e.mouseEventToContainerPoint(t.touches[1]),
                  r = i.distanceTo(o) / this._startDist;
                if (
                  ((this._zoom = e.getScaleZoom(r, this._startZoom)),
                  !e.options.bounceAtZoomLimits &&
                    ((this._zoom < e.getMinZoom() && r < 1) || (this._zoom > e.getMaxZoom() && r > 1)) &&
                    (this._zoom = e._limitZoom(this._zoom)),
                  'center' === e.options.touchZoom)
                ) {
                  if (((this._center = this._startLatLng), 1 === r)) return;
                } else {
                  var s = i._add(o)._divideBy(2)._subtract(this._centerPoint);
                  if (1 === r && 0 === s.x && 0 === s.y) return;
                  this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
                }
                this._moved || (e._moveStart(!0, !1), (this._moved = !0)), z(this._animRequest);
                var a = n(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
                (this._animRequest = T(a, this, !0)), Re(t);
              }
            },
            _onTouchEnd: function () {
              this._moved && this._zooming
                ? ((this._zooming = !1),
                  z(this._animRequest),
                  Ce(document, 'touchmove', this._onTouchMove, this),
                  Ce(document, 'touchend touchcancel', this._onTouchEnd, this),
                  this._map.options.zoomAnimation
                    ? this._map._animateZoom(
                        this._center,
                        this._map._limitZoom(this._zoom),
                        !0,
                        this._map.options.zoomSnap
                      )
                    : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
                : (this._zooming = !1);
            },
          });
          qe.addInitHook('addHandler', 'touchZoom', wn),
            (qe.BoxZoom = mn),
            (qe.DoubleClickZoom = gn),
            (qe.Drag = vn),
            (qe.Keyboard = yn),
            (qe.ScrollWheelZoom = xn),
            (qe.TapHold = bn),
            (qe.TouchZoom = wn),
            (t.Bounds = O),
            (t.Browser = Ot),
            (t.CRS = F),
            (t.Canvas = hn),
            (t.Circle = Oi),
            (t.CircleMarker = Ai),
            (t.Class = k),
            (t.Control = Ge),
            (t.DivIcon = en),
            (t.DivOverlay = $i),
            (t.DomEvent = Ue),
            (t.DomUtil = ze),
            (t.Draggable = ni),
            (t.Evented = S),
            (t.FeatureGroup = Mi),
            (t.GeoJSON = Ri),
            (t.GridLayer = nn),
            (t.Handler = Qe),
            (t.Icon = ki),
            (t.ImageOverlay = Yi),
            (t.LatLng = N),
            (t.LatLngBounds = B),
            (t.Layer = Ti),
            (t.LayerGroup = zi),
            (t.LineUtil = fi),
            (t.Map = qe),
            (t.Marker = Zi),
            (t.Mixin = ei),
            (t.Path = Ei),
            (t.Point = Z),
            (t.PolyUtil = vi),
            (t.Polygon = Bi),
            (t.Polyline = Ii),
            (t.Popup = Qi),
            (t.PosAnimation = Ve),
            (t.Projection = bi),
            (t.Rectangle = fn),
            (t.Renderer = an),
            (t.SVG = pn),
            (t.SVGOverlay = Ji),
            (t.TileLayer = on),
            (t.Tooltip = tn),
            (t.Transformation = V),
            (t.Util = M),
            (t.VideoOverlay = Xi),
            (t.bind = n),
            (t.bounds = I),
            (t.canvas = ln),
            (t.circle = function (t, e, i) {
              return new Oi(t, e, i);
            }),
            (t.circleMarker = function (t, e) {
              return new Ai(t, e);
            }),
            (t.control = Ke),
            (t.divIcon = function (t) {
              return new en(t);
            }),
            (t.extend = e),
            (t.featureGroup = function (t, e) {
              return new Mi(t, e);
            }),
            (t.geoJSON = Gi),
            (t.geoJson = Ki),
            (t.gridLayer = function (t) {
              return new nn(t);
            }),
            (t.icon = function (t) {
              return new ki(t);
            }),
            (t.imageOverlay = function (t, e, i) {
              return new Yi(t, e, i);
            }),
            (t.latLng = D),
            (t.latLngBounds = R),
            (t.layerGroup = function (t, e) {
              return new zi(t, e);
            }),
            (t.map = function (t, e) {
              return new qe(t, e);
            }),
            (t.marker = function (t, e) {
              return new Zi(t, e);
            }),
            (t.point = A),
            (t.polygon = function (t, e) {
              return new Bi(t, e);
            }),
            (t.polyline = function (t, e) {
              return new Ii(t, e);
            }),
            (t.popup = function (t, e) {
              return new Qi(t, e);
            }),
            (t.rectangle = function (t, e) {
              return new fn(t, e);
            }),
            (t.setOptions = d),
            (t.stamp = r),
            (t.svg = _n),
            (t.svgOverlay = function (t, e, i) {
              return new Ji(t, e, i);
            }),
            (t.tileLayer = rn),
            (t.tooltip = function (t, e) {
              return new tn(t, e);
            }),
            (t.transformation = q),
            (t.version = '1.9.2'),
            (t.videoOverlay = function (t, e, i) {
              return new Xi(t, e, i);
            });
          var Pn = window.L;
          (t.noConflict = function () {
            return (window.L = Pn), this;
          }),
            (window.L = t);
        })(e);
      },
      379: (t) => {
        'use strict';
        var e = [];
        function i(t) {
          for (var i = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              i = n;
              break;
            }
          return i;
        }
        function n(t, n) {
          for (var r = {}, s = [], a = 0; a < t.length; a++) {
            var h = t[a],
              l = n.base ? h[0] + n.base : h[0],
              u = r[l] || 0,
              c = ''.concat(l, ' ').concat(u);
            r[l] = u + 1;
            var d = i(c),
              p = { css: h[1], media: h[2], sourceMap: h[3], supports: h[4], layer: h[5] };
            if (-1 !== d) e[d].references++, e[d].updater(p);
            else {
              var _ = o(p, n);
              (n.byIndex = a), e.splice(a, 0, { identifier: c, updater: _, references: 1 });
            }
            s.push(c);
          }
          return s;
        }
        function o(t, e) {
          var i = e.domAPI(e);
          return (
            i.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                i.update((t = e));
              } else i.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var r = n((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var s = 0; s < r.length; s++) {
              var a = i(r[s]);
              e[a].references--;
            }
            for (var h = n(t, o), l = 0; l < r.length; l++) {
              var u = i(r[l]);
              0 === e[u].references && (e[u].updater(), e.splice(u, 1));
            }
            r = h;
          };
        };
      },
      569: (t) => {
        'use strict';
        var e = {};
        t.exports = function (t, i) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var i = document.querySelector(t);
              if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                try {
                  i = i.contentDocument.head;
                } catch (t) {
                  i = null;
                }
              e[t] = i;
            }
            return e[t];
          })(t);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(i);
        };
      },
      216: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = document.createElement('style');
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, i) => {
        'use strict';
        t.exports = function (t) {
          var e = i.nc;
          e && t.setAttribute('nonce', e);
        };
      },
      795: (t) => {
        'use strict';
        t.exports = function (t) {
          var e = t.insertStyleElement(t);
          return {
            update: function (i) {
              !(function (t, e, i) {
                var n = '';
                i.supports && (n += '@supports ('.concat(i.supports, ') {')),
                  i.media && (n += '@media '.concat(i.media, ' {'));
                var o = void 0 !== i.layer;
                o && (n += '@layer'.concat(i.layer.length > 0 ? ' '.concat(i.layer) : '', ' {')),
                  (n += i.css),
                  o && (n += '}'),
                  i.media && (n += '}'),
                  i.supports && (n += '}');
                var r = i.sourceMap;
                r &&
                  'undefined' != typeof btoa &&
                  (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                    ' */'
                  )),
                  e.styleTagTransform(n, t, e.options);
              })(e, t, i);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        'use strict';
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      134: (t, e, i) => {
        'use strict';
        t.exports = i.p + '8f2c4d11474275fbc161.png';
      },
      803: (t, e, i) => {
        'use strict';
        t.exports = i.p + '416d91365b44e4b4f477.png';
      },
      94: (t, e, i) => {
        'use strict';
        t.exports = i.p + '2b3e1faf89f94a483539.png';
      },
    },
    e = {};
  function i(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var r = (e[n] = { id: n, exports: {} });
    return t[n].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = t),
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return i.d(e, { a: e }), e;
    }),
    (i.d = (t, e) => {
      for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      var t;
      i.g.importScripts && (t = i.g.location + '');
      var e = i.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var n = e.getElementsByTagName('script');
        n.length && (t = n[n.length - 1].src);
      }
      if (!t) throw new Error('Automatic publicPath is not supported in this browser');
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (i.p = t);
    })(),
    (i.b = document.baseURI || self.location.href),
    (i.nc = void 0),
    (() => {
      'use strict';
      var t = i(243),
        e = i.n(t),
        n = i(379),
        o = i.n(n),
        r = i(795),
        s = i.n(r),
        a = i(569),
        h = i.n(a),
        l = i(565),
        u = i.n(l),
        c = i(216),
        d = i.n(c),
        p = i(589),
        _ = i.n(p),
        f = i(984),
        m = {};
      (m.styleTagTransform = _()),
        (m.setAttributes = u()),
        (m.insert = h().bind(null, 'head')),
        (m.domAPI = s()),
        (m.insertStyleElement = d()),
        o()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      var g = i(94);
      const v = i.p + 'a0c6cc1401c107b501ef.png',
        y = i.p + 'c46eb5896e34364b98e0.png',
        x = e().map('map').setView([43.610769, 3.876716], 12);
      let b = [
        ["Client: Pradeo<br>Nombre d'ombrelles: 3<br>Capacité: 12 Wh", 43.567044, 3.943067],
        ["Client: Greenx<br>Nombre d'ombrelles: 7 <br> Capacité: 23 Wh", 43.57119189294555, 3.944850180592113],
        ["Client: E3 <br> Nombre d'ombrelles: 5 <br> Capacité: 18 Wh", 43.580029830572066, 3.930319133070283],
        ["Client: ExpX <br>Nombre d'ombrelles: 2<br>Capacité: 12 Wh", 43.5767955843162, 3.918006132209793],
        ["Client: Prosaic <br> Nombre d'ombrelles: 3 <br> Capacité: 17 Wh", 43.57292250029829, 3.910868572186806],
        ["Client: Testam  <br> Nombre d'ombrelles: 3 <br> Capacité: 17 Wh", 43.575271102211566, 3.905550948258604],
        ["Client: LoopX   <br> Nombre d'ombrelles: 6 <br> Capacité: 32 Wh", 43.588998746115195, 3.922262375095761],
        ["Client: SoapL   <br> Nombre d'ombrelles: 6 <br> Capacité: 13 Wh", 43.593426867911354, 3.908214747604587],
        ["Client: Digigi  <br> Nombre d'ombrelles: 7 <br> Capacité: 45 Wh", 43.599275741161804, 3.8797166221546115],
        ["Client: SunX    <br> Nombre d'ombrelles: 1 <br> Capacité: 7 Wh", 43.60519267120589, 3.8639512413617707],
        ["Client: FreakZ  <br> Nombre d'ombrelles: 3 <br> Capacité: 16 Wh", 43.62164407845158, 3.881687511542558],
        ["Client: Espera  <br> Nombre d'ombrelles: 4 <br> Capacité: 15 Wh", 43.62596089414691, 3.841287595793522],
      ];
      const w = e().icon({ iconUrl: g, shadowUrl: v }),
        P = e().icon({ iconUrl: y, shadowUrl: v, iconSize: [75, 75] });
      (function () {
        e()
          .tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=nJIl5Oa0J3EjlFmBVxci', {
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution:
              '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
            crossOrigin: !0,
          })
          .addTo(x);
        for (let t = 0; t < b.length; t++)
          setTimeout(() => {
            new (e().marker)([b[t][1], b[t][2]], { icon: w }).bindPopup(b[t][0]).addTo(x);
          }, 200 * t);
      })(),
        location.includes('/pages/map.html') &&
          document.querySelector('button[type=submit]').addEventListener('click', (t) => {
            t.preventDefault();
            const i = document.querySelector('input[name=ombrières]').value,
              n = document.querySelector('input[name=capacité]').value,
              o = document.querySelector('input[name=client]').value;
            !(function (t, i, n, o, r) {
              let s = `Client: ${n} <br> Nombre d'ombrelles: ${o} <br> Capacité: ${r} Wh`;
              new (e().marker)([t, i], { icon: P }).bindPopup(s).addTo(x);
            })(
              document.querySelector('input[name=lat]').value,
              document.querySelector('input[name=long]').value,
              o,
              i,
              n
            );
          });
    })();
})();
