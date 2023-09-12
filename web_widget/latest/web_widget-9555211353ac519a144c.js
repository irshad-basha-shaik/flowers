/*! For license information please see web_widget-9555211353ac519a144c.js.LICENSE.txt */
(self.webpackChunk_zendesk_embeddable_framework = self.webpackChunk_zendesk_embeddable_framework || []).push([
    [5139], {
        51069: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                fill: "none"
            }, r.createElement("rect", {
                width: 32,
                height: 32,
                fill: "#999",
                rx: 16
            }), r.createElement("g", {
                fill: "#FFF",
                transform: "translate(10 9)"
            }, r.createElement("ellipse", {
                cx: 6,
                cy: 3.675,
                rx: 3.6,
                ry: 3.675
            }), r.createElement("path", {
                d: "M6,8.16666667 C3,8.16666667 0.48,10.3716667 0,13.1891667 L12,13.1891667 C11.52,10.3716667 9,8.16666667 6,8.16666667 Z"
            })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    width: 32,
                    height: 32,
                    viewBox: "0 0 32 32",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        37546: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("defs", null, r.createElement("style", null, ".cls-1,.cls-2{fill:#cccccb}.cls-2{opacity:.3}")),
                c = r.createElement("g", {
                    id: "Layer_2",
                    "data-name": "Layer 2"
                }, r.createElement("g", {
                    id: "Layer_2-2",
                    "data-name": "Layer 2"
                }, r.createElement("path", {
                    className: "cls-1",
                    d: "M9.91 14.08H56.59c.75 0 1.36-.44 1.36-1s-.61-1-1.36-1H9.91c-.75 0-1.36.45-1.36 1S9.16 14.08 9.91 14.08zM9.91 22.25H56.59c.75 0 1.36-.44 1.36-1s-.61-1-1.36-1H9.91c-.75 0-1.36.45-1.36 1S9.16 22.25 9.91 22.25zM31.89 28.42h-22c-.75 0-1.36.45-1.36 1s.61 1 1.36 1h22c.75 0 1.36-.45 1.36-1S32.64 28.42 31.89 28.42z"
                }), r.createElement("path", {
                    className: "cls-2",
                    d: "M66,39.58A6.3,6.3,0,0,1,59.92,46H48.66v6.06h15a8.81,8.81,0,0,0,8.85-8.78V34.68H66Z"
                }), r.createElement("path", {
                    className: "cls-1",
                    d: "M64,39.5c-.1.55-.19,1.09-.26,1.61A4.82,4.82,0,0,0,64,39.58Z"
                }), r.createElement("path", {
                    className: "cls-1",
                    d: "M83.85,32.68H66V6.44A6.3,6.3,0,0,0,59.92,0H6.12A6.3,6.3,0,0,0,0,6.44V39.58A6.3,6.3,0,0,0,6.12,46h9.39v8.35a3.71,3.71,0,0,0,2.21,3.44,3.38,3.38,0,0,0,3.73-.67L33.66,46h13V57.28a4.25,4.25,0,0,0,4.15,4.33h16l7.38,6.69a2.49,2.49,0,0,0,1.72.7,2.56,2.56,0,0,0,1-.21,2.65,2.65,0,0,0,1.58-2.46V61.61h5.38A4.25,4.25,0,0,0,88,57.28V37A4.25,4.25,0,0,0,83.85,32.68ZM47.66,44H32.88L20.08,55.69a1.41,1.41,0,0,1-1.57.3,1.71,1.71,0,0,1-1-1.61V44H6.12A4.3,4.3,0,0,1,2,39.58V6.44A4.29,4.29,0,0,1,6.12,2h53.8A4.29,4.29,0,0,1,64,6.44V39.58a4.82,4.82,0,0,1-.26,1.53A4.16,4.16,0,0,1,59.92,44H47.66ZM86,57.28a2.25,2.25,0,0,1-2.15,2.34H76.47v6.71a.65.65,0,0,1-.38.63.48.48,0,0,1-.56-.12l-8-7.22H50.81a2.25,2.25,0,0,1-2.15-2.34V46H59.92A6.3,6.3,0,0,0,66,39.58v-4.9H83.85A2.25,2.25,0,0,1,86,37Z"
                })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    a = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    viewBox: "0 0 88 69",
                    "aria-labelledby": n
                }, a), e ? r.createElement("title", {
                    id: n
                }, e) : null, i, c)
            }
        },
        66310: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                fill: "none",
                fillRule: "nonzero"
            }, r.createElement("rect", {
                width: 28.44,
                height: 1.76,
                x: 17.75,
                y: 17.63,
                fill: "#CCCCCB",
                rx: .88
            }), r.createElement("rect", {
                width: 28.44,
                height: 1.76,
                x: 17.75,
                y: 24.66,
                fill: "#CCCCCB",
                rx: .88
            }), r.createElement("rect", {
                width: 14.22,
                height: 1.76,
                x: 17.75,
                y: 31.7,
                fill: "#CCCCCB",
                rx: .88
            }), r.createElement("path", {
                fill: "#CCC",
                opacity: .3,
                d: "M59.55 25.45L59.55 26.67 60.23 26.06zM34.17 2.64C32.9602921 1.46901693 31.0397079 1.46901693 29.83 2.64L24.32 7.58 39.67 7.58 34.17 2.64zM4.44 25.43L3.79 26.02 4.44 26.62z"
            }), r.createElement("path", {
                fill: "#CCCCCB",
                d: "M61.94,25.22 L59.56,23.08 L59.56,10.22 C59.5489939,8.75483096 58.3551999,7.57445035 56.89,7.58 L42.32,7.58 L35.32,1.34 C34.4116287,0.506803917 33.2322363,0.0307841003 32,0 C30.7608256,0.0259691317 29.5735159,0.502314936 28.66,1.34 L21.68,7.58 L7.11,7.58 C5.64480013,7.57445035 4.45100611,8.75483096 4.44,10.22 L4.44,23.08 L2.06,25.22 C0.761654382,26.1372135 -0.00732041035,27.6303685 -1.77635684e-15,29.22 L-1.77635684e-15,62.6 C0.00529234566,63.7722606 0.476052836,64.8944048 1.30871697,65.7195674 C2.1413811,66.5447301 3.26773949,67.0053163 4.44,67 L59.56,67 C60.7322605,67.0053163 61.8586189,66.5447301 62.691283,65.7195674 C63.5239472,64.8944048 63.9947077,63.7722606 64,62.6 L64,29.18 C63.9943193,27.6044909 63.2268011,26.1290676 61.94,25.22 Z M62.22,62.6 C62.2180961,63.3287368 61.9139113,64.0240164 61.38,64.52 L44.89,53.31 L43.59,52.43 L42.3,51.55 L38,48.63 L57.77,30.63 L58.66,29.82 L59.55,29.02 L61.55,27.21 C61.9694358,27.767562 62.203733,28.4424779 62.22,29.14 L62.22,62.6 Z M4.75,65.24 L22.31,53.31 L23.6,52.43 L24.89,51.55 L29.89,48.13 C31.1675001,47.2895573 32.8224999,47.2895573 34.1,48.13 L39.1,51.55 L40.39,52.43 L41.69,53.31 L59.3,65.24 L4.75,65.24 Z M1.75,29.18 C1.75791921,28.4563016 1.99999618,27.7546292 2.44,27.18 L4.44,28.97 L5.33,29.78 L6.22,30.58 L26.05,48.58 L21.75,51.5 L20.46,52.38 L19.17,53.26 L2.65,64.54 C2.09781346,64.0461122 1.78152825,63.3408325 1.78,62.6 L1.75,29.18 Z M4.41,25.43 L4.41,26.62 L3.79,26 L4.41,25.43 Z M60.2,26.06 L59.53,26.67 L59.53,25.45 L60.2,26.06 Z M39.67,7.58 L24.32,7.58 L29.83,2.64 C31.0397079,1.46901693 32.9602921,1.46901693 34.17,2.64 L39.67,7.58 Z M6.22,21.48 L6.22,10.22 C6.21998482,9.9848665 6.31407029,9.75950615 6.48127146,9.59418364 C6.64847264,9.42886113 6.87488168,9.33732803 7.11,9.34 L56.89,9.34 C57.1251183,9.33732803 57.3515274,9.42886113 57.5187285,9.59418364 C57.6859297,9.75950615 57.7800152,9.9848665 57.78,10.22 L57.78,28.28 L36.5,47.61 L35.14,46.68 C34.2071896,46.067607 33.1158672,45.7409054 32,45.74 C30.8971551,45.7446232 29.8196853,46.0713398 28.9,46.68 L27.53,47.61 L6.22,28.23 L6.22,21.48 Z"
            }));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    width: 64,
                    height: 67,
                    viewBox: "0 0 64 67",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        88400: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("defs", null, r.createElement("style", null, ".cls-1{fill:#cccccb}.cls-2{opacity:.3}")),
                c = r.createElement("g", {
                    id: "Layer_2",
                    "data-name": "Layer 2"
                }, r.createElement("g", {
                    id: "Layer_2-2",
                    "data-name": "Layer 2"
                }, r.createElement("path", {
                    className: "cls-1",
                    d: "M71.69,0H36.92a4.42,4.42,0,0,0-4.31,4.52V26a4.42,4.42,0,0,0,4.31,4.52h5.71v5.05a2.74,2.74,0,0,0,1.65,2.54,2.47,2.47,0,0,0,1,.22,2.58,2.58,0,0,0,1.76-.71l7.79-7.1H71.69A4.42,4.42,0,0,0,76,26V4.52A4.42,4.42,0,0,0,71.69,0ZM74,26a2.42,2.42,0,0,1-2.31,2.52H54.08L45.7,36.11a.56.56,0,0,1-.63.13.75.75,0,0,1-.44-.72V28.47H36.92A2.43,2.43,0,0,1,34.61,26V4.52A2.43,2.43,0,0,1,36.92,2H71.69A2.42,2.42,0,0,1,74,4.52Z"
                }), r.createElement("g", {
                    className: "cls-2"
                }, r.createElement("rect", {
                    className: "cls-1",
                    x: 39.87,
                    y: 9.18,
                    width: 28.88,
                    height: 2,
                    rx: 1,
                    ry: 1,
                    transform: "rotate(-180 54.305 10.185)"
                })), r.createElement("g", {
                    className: "cls-2"
                }, r.createElement("rect", {
                    className: "cls-1",
                    x: 39.87,
                    y: 18.02,
                    width: 28.88,
                    height: 2,
                    rx: 1,
                    ry: 1,
                    transform: "rotate(-180 54.305 19.015)"
                })), r.createElement("g", {
                    className: "cls-2"
                }, r.createElement("path", {
                    className: "cls-1",
                    d: "M3.18,25.71C1.56,29.24.37,36.34,8.05,47l.06.09c1,1.67,3.24,4.31,6.78,7.84l.27.28.15.15c3.43,3.4,6,5.63,7.69,6.58l.08,0c15.59,11.19,23.62,3.51,24,3.18a11.74,11.74,0,0,0,.93-1.1C19.49,63,5.82,32.37,3.18,25.71Z"
                })), r.createElement("path", {
                    className: "cls-1",
                    d: "M56,53.65a1.06,1.06,0,0,0-.93-.7c-.58-.1-4-1.54-6.42-2.59-5-2.1-6.49-2.71-7.09-2.74s-1.81.3-6.05,4.51c-1.2-.42-5-3.25-8.93-6.74-2.62-2.93-6.27-7.5-6.75-8.89,3.81-3.83,4.56-5.16,4.53-6,0-.6-.65-2.12-2.75-7C20.56,21,19.11,17.57,19,17.05a1.13,1.13,0,0,0-.74-1c-1.47-.58-12.53,3.36-14.83,5.65h0c-.38.38-9.21,9.53,3,26.41,1.06,1.81,3.3,4.43,6.89,8l.24.24.12.12.09.08c3.68,3.66,6.37,6,8.22,7C28.8,68.52,34.37,70,38.62,70c6.24,0,9.59-3.21,9.82-3.44C49.43,65.57,56.71,55.49,56,53.65Zm-8,10.4a11.74,11.74,0,0,1-.93,1.1c-.33.33-8.36,8-24-3.18l-.08,0c-1.66-1-4.26-3.18-7.69-6.58l-.15-.15-.27-.28c-3.54-3.53-5.82-6.17-6.78-7.84L8.05,47C.37,36.34,1.56,29.24,3.18,25.71a9.47,9.47,0,0,1,1.68-2.6c1.56-1.54,10-4.73,12.36-5.13.32,1,1.07,2.75,2.56,6.23,1,2.39,2.41,5.64,2.57,6.3-.11.3-.74,1.39-4.18,4.84-.52.51-1.73,1.72,7,11.41l.1.1C35,55.45,36,54.41,36.67,53.79c3.42-3.42,4.54-4,4.84-4.16.77.2,4,1.56,6.35,2.57,3.24,1.37,5,2.11,6,2.46A68.22,68.22,0,0,1,48,64.05Z"
                })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    a = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    viewBox: "0 0 76 70",
                    "aria-labelledby": n
                }, a), e ? r.createElement("title", {
                    id: n
                }, e) : null, i, c)
            }
        },
        15491: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M1.3,16c-0.7,0-1.1-0.3-1.2-0.8c-0.3-0.8,0.5-1.3,0.8-1.5c0.6-0.4,0.9-0.7,1-1c0-0.2-0.1-0.4-0.3-0.7c0,0,0-0.1-0.1-0.1 C0.5,10.6,0,9,0,7.4C0,3.3,3.4,0,7.5,0C11.6,0,15,3.3,15,7.4s-3.4,7.4-7.5,7.4c-0.5,0-1-0.1-1.5-0.2C3.4,15.9,1.5,16,1.5,16 C1.4,16,1.4,16,1.3,16z M3.3,10.9c0.5,0.7,0.7,1.5,0.6,2.2c0,0.1-0.1,0.3-0.1,0.4c0.5-0.2,1-0.4,1.6-0.7c0.2-0.1,0.4-0.2,0.6-0.1 c0,0,0.1,0,0.1,0c0.4,0.1,0.9,0.2,1.4,0.2c3,0,5.5-2.4,5.5-5.4S10.5,2,7.5,2C4.5,2,2,4.4,2,7.4c0,1.2,0.4,2.4,1.2,3.3 C3.2,10.8,3.3,10.8,3.3,10.9z"
            });
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    id: "Layer_1",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 15 16",
                    style: {
                        enableBackground: "new 0 0 15 16"
                    },
                    xmlSpace: "preserve",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        39525: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("defs", null, r.createElement("style", null, ".cls-1{fill:#fff}"), r.createElement("mask", {
                    id: "mask",
                    x: 0,
                    y: 13.5,
                    width: 15.75,
                    height: 2.25,
                    maskUnits: "userSpaceOnUse"
                }, r.createElement("g", {
                    transform: "translate(-10.13 -10.12)"
                }, r.createElement("g", {
                    id: "concierge-fill-b"
                }, r.createElement("path", {
                    id: "concierge-fill-a",
                    className: "cls-1",
                    d: "M10.13 23.63L25.88 23.63 25.88 25.88 10.13 25.88 10.13 23.63z"
                }))))),
                c = r.createElement("path", {
                    d: "M24.75 23.62H11.25a1.13 1.13 0 00-1.12 1.13v1.12H25.88V24.75a1.14 1.14 0 00-1.13-1.13M11.35 21.37h13.3a1.12 1.12 0 001.12-1.27 7.86 7.86 0 00-6.65-6.51V12.37h1.13a1.13 1.13 0 100-2.25h-4.5a1.13 1.13 0 100 2.25h1.13v1.22a7.86 7.86 0 00-6.65 6.51 1.12 1.12 0 001.12 1.27",
                    transform: "translate(-10.13 -10.12)"
                });
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    a = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    id: "Layer_1",
                    "data-name": "Layer 1",
                    viewBox: "0 0 15.75 15.75",
                    "aria-labelledby": n
                }, a), e ? r.createElement("title", {
                    id: n
                }, e) : null, i, c)
            }
        },
        43119: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M0 0H30V5H0z"
            });
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        18346: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                id: "Layer_4"
            }, r.createElement("path", {
                d: "M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z"
            }), r.createElement("circle", {
                cx: 10,
                cy: 15,
                r: 1
            }), r.createElement("path", {
                d: "M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z"
            }));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    style: {
                        enableBackground: "new 0 0 20 20"
                    },
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        89811: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("path", {
                d: "M1.0487928,0.596812159 C1.69010639,-0.0434473754 3.62439875,-0.150103513 3.63944091,0.188582163 C3.6538361,0.527106484 5.38222879,4.28233837 5.39759443,4.6208627 C5.41231311,4.95954837 4.25762516,6.11356455 3.91990441,6.45176616 C3.58541853,6.7865793 6.17833105,9.71679934 6.22733938,9.771983 C6.28314094,9.82135785 9.21361247,12.4145058 9.54826009,12.0801767 C9.8858191,11.7418137 11.0403453,10.5876362 11.3788748,10.6026423 C11.7174042,10.6176484 15.4729302,12.3457682 15.8116214,12.3604516 C16.1499891,12.3759418 16.0435618,14.3097902 15.4025717,14.9508565 C14.8555546,15.4978524 12.0206736,17.4852709 7.09088875,13.9365744 C6.55017972,13.6254805 5.69374707,12.9119655 4.39559249,11.6146654 C4.39446029,11.6138587 4.39397506,11.6133746 4.39365157,11.6127292 C4.39187239,11.611761 4.39171065,11.6107929 4.3904167,11.6096634 C4.38960798,11.6086953 4.38847577,11.6078885 4.38750531,11.6065976 C4.38653485,11.6057909 4.38540264,11.6048227 4.38443218,11.6038546 C3.08692459,10.3059091 2.37395856,9.4494329 2.063249,8.90937527 C-1.48508329,3.97947367 0.502099245,1.14429215 1.0487928,0.596812159 Z"
            });
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        40152: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                id: "Chat-unification---Mobile-designs",
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
                transform: "translate(-1253 -897)"
            }, r.createElement("g", {
                id: "type-area",
                transform: "translate(902 883)",
                fill: "#999"
            }, r.createElement("path", {
                d: "M352.557407,22.5218986 L358.807516,20.9997271 L352.557407,19.4688426 L351.051175,15.1567495 C350.792305,14.4161394 351.582213,13.7417486 352.292332,14.0981128 L364.515949,20.2233935 C365.16135,20.546648 365.16135,21.4528062 364.515949,21.7760607 L352.291445,27.9022127 C351.581326,28.2577055 350.791419,27.5841861 351.050289,26.843576 L352.557407,22.5218986 Z",
                id: "Fill-96"
            })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    width: 14,
                    height: 14,
                    viewBox: "0 0 14 14",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        48505: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                id: "Layer_2"
            }, r.createElement("g", {
                id: "Layer_1-2"
            }, r.createElement("path", {
                d: "M7 11c-.2 0-.4-.1-.6-.2L3.2 8.2H1c-.6 0-1-.4-1-1V3.7c0-.6.4-1 1-1h2.2l3.2-2.5C6.7 0 7.1 0 7.4.1 7.8.3 8 .6 8 1v9C8 10.6 7.6 11 7 11zM1.1 7.1h2.2c.2 0 .4.1.6.2l3 2.4V1.3l-3 2.4C3.7 3.8 3.5 3.9 3.3 3.9H1.1V7.1zM3.3 8.2L3.3 8.2zM12.6 5.5l1.2-1.2c.2-.2.2-.6 0-.9s-.6-.2-.9 0l-1.2 1.2-1.2-1.2c-.2-.2-.6-.2-.9 0S9.4 4 9.6 4.2l0 0 1.2 1.2L9.6 6.7c-.2.2-.2.6 0 .9s.6.2.9 0l0 0 1.2-1.2 1.2 1.2c.2.2.6.2.9 0s.2-.6 0-.9l0 0L12.6 5.5z"
            })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    id: "Layer_1",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 14 11",
                    style: {
                        enableBackground: "new 0 0 14 11"
                    },
                    xmlSpace: "preserve",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        6629: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("g", {
                id: "Layer_2"
            }, r.createElement("g", {
                id: "Layer_1-2"
            }, r.createElement("path", {
                d: "M7 11c-.2 0-.4-.1-.6-.2L3.2 8.2H1c-.6 0-1-.4-1-1V3.7c0-.6.4-1 1-1h2.2l3.2-2.5C6.7 0 7.1 0 7.4.1 7.8.3 8 .6 8 1v9C8 10.6 7.6 11 7 11zM1.1 7.1h2.2c.2 0 .4.1.6.2l3 2.4V1.3l-3 2.4C3.7 3.8 3.5 3.9 3.3 3.9H1.1V7.1zM3.3 8.2L3.3 8.2zM12.6 10c-.1 0-.2 0-.3-.1-.3-.2-.4-.5-.2-.8.5-1.1.8-2.4.8-3.6 0-1.3-.2-2.5-.8-3.6-.1-.3 0-.6.2-.8.3-.1.6 0 .8.2 0 0 0 0 0 0C13.7 2.6 14 4.1 14 5.5c0 1.4-.3 2.9-.9 4.2C13 9.9 12.8 10 12.6 10zM9.9 8.5c-.1 0-.3 0-.4-.1C9.3 8.2 9.2 7.9 9.4 7.6c0 0 0 0 0 0 .5-.6.7-1.3.7-2.1 0-.8-.2-1.5-.7-2.1C9.2 3.2 9.3 2.8 9.5 2.6c0 0 0 0 0 0 .3-.2.6-.2.8.1.6.8 1 1.8 1 2.8 0 1-.4 2-1 2.8C10.2 8.4 10.1 8.5 9.9 8.5z"
            })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    c = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    id: "Layer_1",
                    x: 0,
                    y: 0,
                    viewBox: "0 0 14 11",
                    style: {
                        enableBackground: "new 0 0 14 11"
                    },
                    xmlSpace: "preserve",
                    "aria-labelledby": n
                }, c), e ? r.createElement("title", {
                    id: n
                }, e) : null, i)
            }
        },
        86024: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("defs", null, r.createElement("style", null, ".cls-1{fill:#03363d}")),
                c = r.createElement("path", {
                    className: "cls-1",
                    d: "M2014.78,120.15A31.34,31.34,0,0,0,2037,111.5l11,11.91c-7.3,7.49-17.4,13.07-33.12,13.07-26.95,0-44.35-17.86-44.35-42.07,0-24,18.34-42.07,41.91-42.07,26.76,0,41.91,20.36,40.61,48.6H1989.9c2.24,11.72,10.48,19.21,24.88,19.21m19.27-32.65c-1.68-10.95-8.23-19-21.33-19-12.16,0-20.58,6.91-22.83,19h44.16Z",
                    transform: "translate(-1599.52 -16.89)"
                }),
                a = r.createElement("path", {
                    className: "cls-1",
                    d: "M0 102.38L48.68 52.94 1.14 52.94 1.14 37.42 71.24 37.42 71.24 53.26 22.56 102.7 71.89 102.7 71.89 118.22 0 118.22 0 102.38z"
                }),
                u = r.createElement("path", {
                    className: "cls-1",
                    d: "M1726.05 120.15a31.34 31.34 0 0022.27-8.65l11 11.91c-7.3 7.49-17.4 13.07-33.12 13.07-26.95 0-44.35-17.86-44.35-42.07 0-24 18.34-42.07 41.91-42.07 26.76 0 41.91 20.36 40.61 48.6h-63.24c2.24 11.72 10.48 19.21 24.88 19.21m19.27-32.65c-1.68-10.95-8.23-19-21.33-19-12.16 0-20.58 6.91-22.83 19h44.16zM1869.51 94.46c0-25.86 19.31-42 40.56-42 10.71 0 20.94 4.69 26.94 12.13V16.89h17.21v118H1937V123.71c-6.16 7.92-16.39 12.77-27.1 12.77-20.6 0-40.4-16.32-40.4-42m68.48-.16c0-14.38-10.87-26.18-25.64-26.18-14.44 0-25.64 11.47-25.64 26.18s11.19 26.34 25.64 26.34c14.77 0 25.64-11.8 25.64-26.34M2064.34 117.73l15.57-8.08a23.12 23.12 0 0020.77 11.79c9.74 0 14.77-5 14.77-10.66 0-6.46-9.41-7.92-19.63-10-13.8-2.91-28.07-7.44-28.07-24.08 0-12.77 12.17-24.57 31.32-24.4 15.09 0 26.29 6 32.62 15.67l-14.44 7.92c-3.73-5.66-10.06-9.21-18.17-9.21-9.25 0-14 4.53-14 9.7 0 5.82 7.46 7.43 19.15 10 13.3 2.91 28.39 7.27 28.39 24.08 0 11.15-9.73 26.18-32.78 26-16.87 0-28.72-6.79-35.53-18.75",
                    transform: "translate(-1599.52 -16.89)"
                }),
                l = r.createElement("path", {
                    className: "cls-1",
                    d: "M579.84 82.1L566.21 96.96 566.21 117.97 549.01 117.97 549.01 0 566.21 0 566.21 77.25 602.72 37.17 623.65 37.17 592.01 71.75 624.47 117.97 604.99 117.97 579.84 82.1z"
                }),
                s = r.createElement("path", {
                    className: "cls-1",
                    d: "M1817.53,52.42c-20.45,0-37.57,13.25-37.57,35.23v47.2h17.53v-45c0-13.25,7.62-21.18,20.6-21.18s19.48,7.93,19.48,21.18v45h17.53V87.65c0-22-17.12-35.23-37.57-35.23",
                    transform: "translate(-1599.52 -16.89)"
                });
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    f = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    id: "Layer_1",
                    "data-name": "Layer 1",
                    viewBox: "0 0 624.47 119.59",
                    "aria-labelledby": n
                }, f), e ? r.createElement("title", {
                    id: n
                }, e) : null, i, c, a, u, l, s)
            }
        },
        10563: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(2784);

            function o() {
                return (o = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var i = r.createElement("defs", null, r.createElement("style", null, ".talk-cls-1{fill:#cccccb}.cls-3{opacity:.3}.widgetIconTalk_L1 .widgetIconTalk_L2 path.talk-cls-2{fill:none!important}")),
                c = r.createElement("g", {
                    className: "widgetIconTalk_L1"
                }, r.createElement("g", {
                    className: "widgetIconTalk_L2"
                }, r.createElement("path", {
                    className: "talk-cls-1",
                    d: "M71.69,0H36.92a4.42,4.42,0,0,0-4.31,4.52V26a4.42,4.42,0,0,0,4.31,4.52h5.71v5.05a2.74,2.74,0,0,0,1.65,2.54,2.47,2.47,0,0,0,1,.22,2.58,2.58,0,0,0,1.76-.71l7.79-7.1H71.69A4.42,4.42,0,0,0,76,26V4.52A4.42,4.42,0,0,0,71.69,0ZM74,26a2.42,2.42,0,0,1-2.31,2.52H54.08L45.7,36.11a.56.56,0,0,1-.63.13.75.75,0,0,1-.44-.72V28.47H36.92A2.43,2.43,0,0,1,34.61,26V4.52A2.43,2.43,0,0,1,36.92,2H71.69A2.42,2.42,0,0,1,74,4.52Z"
                }), r.createElement("rect", {
                    className: "talk-cls-1 customColor",
                    x: 39.87,
                    y: 9.18,
                    width: 28.88,
                    height: 2,
                    rx: 1,
                    ry: 1,
                    transform: "rotate(-180 54.305 10.185)"
                }), r.createElement("rect", {
                    className: "talk-cls-1 customColor",
                    x: 39.87,
                    y: 18.02,
                    width: 28.88,
                    height: 2,
                    rx: 1,
                    ry: 1,
                    transform: "rotate(-180 54.305 19.015)"
                }), r.createElement("path", {
                    className: "talk-cls-2",
                    d: "M47.86,52.2c-2.37-1-5.58-2.37-6.35-2.57-.3.11-1.42.74-4.84,4.16-.63.62-1.67,1.66-11.44-6.93l-.1-.1c-8.69-9.69-7.48-10.9-7-11.41,3.44-3.45,4.07-4.54,4.18-4.84-.16-.66-1.55-3.91-2.57-6.3-1.49-3.48-2.24-5.27-2.56-6.23-2.35.4-10.8,3.59-12.36,5.13a9.47,9.47,0,0,0-1.68,2.6C5.82,32.37,19.49,63,48,64.05a68.22,68.22,0,0,0,5.92-9.39C52.87,54.31,51.1,53.57,47.86,52.2Z"
                }), r.createElement("g", {
                    className: "cls-3"
                }, r.createElement("path", {
                    className: "talk-cls-1",
                    d: "M3.18,25.71C1.56,29.24.37,36.34,8.05,47l.06.09c1,1.67,3.24,4.31,6.78,7.84l.27.28.15.15c3.43,3.4,6,5.63,7.69,6.58l.08,0c15.59,11.19,23.62,3.51,24,3.18a11.74,11.74,0,0,0,.93-1.1C19.49,63,5.82,32.37,3.18,25.71Z"
                })), r.createElement("path", {
                    className: "talk-cls-1",
                    d: "M56,53.65a1.06,1.06,0,0,0-.93-.7c-.58-.1-4-1.54-6.42-2.59-5-2.1-6.49-2.71-7.09-2.74s-1.81.3-6.05,4.51c-1.2-.42-5-3.25-8.93-6.74-2.62-2.93-6.27-7.5-6.75-8.89,3.81-3.83,4.56-5.16,4.53-6,0-.6-.65-2.12-2.75-7C20.56,21,19.11,17.57,19,17.05a1.13,1.13,0,0,0-.74-1c-1.47-.58-12.53,3.36-14.83,5.65h0c-.38.38-9.21,9.53,3,26.41,1.06,1.81,3.3,4.43,6.89,8l.24.24.12.12.09.08c3.68,3.66,6.37,6,8.22,7C28.8,68.52,34.37,70,38.62,70c6.24,0,9.59-3.21,9.82-3.44C49.43,65.57,56.71,55.49,56,53.65Zm-8,10.4a11.74,11.74,0,0,1-.93,1.1c-.33.33-8.36,8-24-3.18l-.08,0c-1.66-1-4.26-3.18-7.69-6.58l-.15-.15-.27-.28c-3.54-3.53-5.82-6.17-6.78-7.84L8.05,47C.37,36.34,1.56,29.24,3.18,25.71a9.47,9.47,0,0,1,1.68-2.6c1.56-1.54,10-4.73,12.36-5.13.32,1,1.07,2.75,2.56,6.23,1,2.39,2.41,5.64,2.57,6.3-.11.3-.74,1.39-4.18,4.84-.52.51-1.73,1.72,7,11.41l.1.1C35,55.45,36,54.41,36.67,53.79c3.42-3.42,4.54-4,4.84-4.16.77.2,4,1.56,6.35,2.57,3.24,1.37,5,2.11,6,2.46A68.22,68.22,0,0,1,48,64.05Z"
                })));
            e.default = function(t) {
                var e = t.title,
                    n = t.titleId,
                    a = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["title", "titleId"]);
                return r.createElement("svg", o({
                    viewBox: "0 0 76 70",
                    "aria-labelledby": n
                }, a), e ? r.createElement("title", {
                    id: n
                }, e) : null, i, c)
            }
        },
        81484: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return ys
                }
            });
            var r = n(57033),
                o = n.n(r),
                i = n(96677),
                c = n.n(i),
                a = n(7165),
                u = n.n(a),
                l = n(68336),
                s = n.n(l),
                f = (n(25047), n(1939), n(34769), n(58188), n(73439), n(67165)),
                d = n(64731),
                p = n(52322),
                h = n(28316),
                b = n(36408),
                g = n(99708),
                m = (n(15735), n(28673), n(6886), n(13980)),
                y = n.n(m),
                v = n(2784),
                O = (n(34115), n(634), n(20796), n(32501), n(26936), n(27233), n(95342), n(68625), n(62775), n(18178), n(43105), n(96928), n(61229), n(72779)),
                w = n.n(O),
                E = n(70803),
                S = n(70703),
                j = n(70902),
                C = n(40152),
                _ = n(38579),
                k = n(1034),
                P = n(43225),
                T = n(80712),
                A = n(27213),
                I = n(76914),
                L = n(82965),
                D = n(55936),
                x = n(405),
                R = n.n(x);

            function N(t) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function F(t, e) {
                return (F = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function M(t, e) {
                return !e || "object" !== N(e) && "function" != typeof e ? B(t) : e
            }

            function B(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function z(t) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function U(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var H = {
                    height: 215,
                    minHeight: 215,
                    width: 260,
                    marginTop: 7,
                    marginBottom: 7,
                    marginLeft: 7,
                    marginRight: 7
                },
                W = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && F(t, e)
                    }(i, t);
                    var e, n, r = (e = i, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = z(e);
                        if (n) {
                            var o = z(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return M(this, t)
                    });

                    function i(t, e) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), U(B(n = r.call(this, t, e)), "renderMinimizeButton", (function() {
                            return (0, p.jsx)(E.hU, {
                                isPill: !1,
                                className: x.locals.minimizeButton,
                                ignoreThemeOverride: !0,
                                onClick: n.props.handleChatBadgeMinimize,
                                size: "small",
                                children: (0, p.jsx)(j.Z, {})
                            })
                        })), U(B(n), "renderTitle", (function() {
                            if (!n.props.hideBranding) return (0, p.jsx)("div", {
                                className: x.locals.title,
                                children: "zendesk chat"
                            })
                        })), U(B(n), "renderLabel", (function() {
                            var t, e = w()(x.locals.textContainer, (U(t = {}, x.locals.textOnLeft, "image_right" === n.props.bannerSettings.layout), U(t, x.locals.textOnRight, "image_left" === n.props.bannerSettings.layout), U(t, x.locals.textOnly, "text_only" === n.props.bannerSettings.layout), t));
                            return (0, p.jsx)("td", {
                                className: e,
                                children: n.props.bannerSettings.label
                            }, "label")
                        })), U(B(n), "renderImage", (function() {
                            var t, e, r = n.props.bannerSettings,
                                o = r.image,
                                i = r.layout,
                                c = w()((U(t = {}, x.locals.chatIcon, !o), U(t, x.locals.imgRight, "image_right" === i), U(t, x.locals.imgLeft, "image_left" === i), U(t, x.locals.imgOnly, !o && "image_only" === i), U(t, x.locals.customImg, o && "image_only" !== i), U(t, x.locals.customImgOnly, o && "image_only" === i), t));
                            return e = o ? (0, p.jsx)("img", {
                                alt: n.props.bannerSettings.label,
                                src: n.props.bannerSettings.image,
                                className: c
                            }) : (0, p.jsx)(_.J, {
                                className: c,
                                type: k.UZ.CC_CHAT
                            }), (0, p.jsx)("td", {
                                className: x.locals.imageContainer,
                                children: e
                            }, "image")
                        })), U(B(n), "renderContent", (function() {
                            switch (n.props.bannerSettings.layout) {
                                case "text_only":
                                    return [n.renderLabel()];
                                case "image_only":
                                    return [n.renderImage()];
                                case "image_left":
                                    return [n.renderImage(), n.renderLabel()];
                                default:
                                    return [n.renderLabel(), n.renderImage()]
                            }
                        })), U(B(n), "renderSplashDisplay", (function() {
                            var t = w()(x.locals.splashDisplayContainer, U({}, x.locals.splashPadding, "image_only" !== n.props.bannerSettings.layout));
                            return (0, p.jsxs)(E.zx, {
                                isBasic: !0,
                                ignoreThemeOverride: !0,
                                onKeyPress: (0, D.Y)(n.props.chatBadgeClicked),
                                tabIndex: "0",
                                onClick: n.props.chatBadgeClicked,
                                className: t,
                                children: [n.renderTitle(), (0, p.jsx)("table", {
                                    className: x.locals.splashTable,
                                    children: (0, p.jsx)("tbody", {
                                        children: (0, p.jsx)("tr", {
                                            children: n.renderContent()
                                        })
                                    })
                                })]
                            })
                        })), U(B(n), "renderInputContainer", (function() {
                            var t = w()(x.locals.sendButton, U({}, x.locals.sendButtonActive, n.props.currentMessage.length > 0));
                            return (0, p.jsxs)("div", {
                                className: x.locals.inputContainer,
                                children: [(0, p.jsx)(S.gN, {
                                    children: (0, p.jsx)(S.II, {
                                        ref: function(t) {
                                            n.input = t
                                        },
                                        focusInset: !0,
                                        ignoreThemeOverride: !0,
                                        className: x.locals.input,
                                        placeholder: f.a.t("embeddable_framework.chat.chatBox.placeholder.type_your_message"),
                                        onChange: n.handleChange,
                                        onKeyDown: (0, D.Y)(n.sendChatMsg),
                                        defaultValue: n.props.currentMessage
                                    })
                                }), (0, p.jsx)(E.hU, {
                                    isPill: !1,
                                    ignoreThemeOverride: !0,
                                    onClick: n.sendChatMsg,
                                    className: t,
                                    focusInset: !0,
                                    children: (0, p.jsx)(C.default, {})
                                })]
                            })
                        })), U(B(n), "sendChatMsg", (function(t) {
                            o()(n.props.currentMessage) || (n.props.sendMsg(n.props.currentMessage), n.props.onSend(t))
                        })), U(B(n), "handleChange", (function(t) {
                            n.props.handleChatBadgeMessageChange(t.target.value)
                        })), U(B(n), "render", (function() {
                            var t;
                            return (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsx)(P.g7, {
                                    style: H
                                }), (0, p.jsxs)("div", {
                                    className: w()((t = {}, U(t, x.locals.container, !0), U(t, x.locals.containerForWidget, !n.props.isPreviewer), t)),
                                    children: [n.renderSplashDisplay(), n.renderInputContainer(), n.renderMinimizeButton()]
                                })]
                            })
                        })), n.input = null, n
                    }
                    return i
                }(v.Component);
            U(W, "propTypes", {
                onSend: y().func.isRequired,
                handleChatBadgeMessageChange: y().func.isRequired,
                currentMessage: y().string,
                sendMsg: y().func.isRequired,
                handleChatBadgeMinimize: y().func.isRequired,
                bannerSettings: y().object.isRequired,
                chatBadgeClicked: y().func.isRequired,
                hideBranding: y().bool,
                isPreviewer: y().bool
            }), U(W, "defaultProps", {
                currentMessage: "",
                bannerSettings: {},
                hideBranding: !1
            });
            var V = {
                    sendMsg: A.J7,
                    handleChatBadgeMessageChange: A.₹d,
                    handleChatBadgeMinimize: T.VR,
                    chatBadgeClicked: T.YH
                },
                K = (0, b.₹j)((function(t) {
                    return {
                        currentMessage: (0, I.hG)(t),
                        bannerSettings: (0, L.AA)(t)
                    }
                }), V, null, {
                    forwardRef: !0
                })(W),
                G = function(t) {
                    var e = t.title,
                        n = t.onTitleChange;
                    return (0, v.useEffect)((function() {
                        n(e)
                    }), [e]), null
                };
            G.propTypes = {
                title: y().string,
                onTitleChange: y().func
            };
            var q = G,
                Z = n(24949),
                Y = n(62190),
                X = n(94265),
                Q = (0, Z.createSelector)([function(t) {
                    return t.settings.launcher.settings.talkLabel
                }, Y.U6, X.Kd], (function(t, e, n) {
                    return f.a.getSettingTranslation(t) || f.a.t(e)
                })),
                J = (0, Z.createSelector)([function(t) {
                    return t.settings.launcher.settings.chatLabel
                }, X.Kd], (function(t, e) {
                    return f.a.getSettingTranslation(t) || f.a.t("embeddable_framework.launcher.label.chat")
                })),
                ₹ = (0, Z.createSelector)([function(t) {
                    return t.settings.launcher.settings.label
                }, X.Kd, function(t, e) {
                    return e
                }], (function(t, e, n) {
                    return f.a.getSettingTranslation(t) || f.a.t(n)
                })),
                tt = n(41225),
                et = n(77693),
                nt = n(88018),
                rt = n(18897),
                ot = n.n(rt);

            function it(t) {
                return (it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function ct(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function at(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ct(Object(n), !0).forEach((function(e) {
                        pt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ct(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ut(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function lt(t, e) {
                return (lt = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function st(t, e) {
                return !e || "object" !== it(e) && "function" != typeof e ? ft(t) : e
            }

            function ft(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function dt(t) {
                return (dt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function pt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var ht = {
                    width: 240
                },
                bt = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && lt(t, e)
                    }(c, t);
                    var e, n, r, o, i = (r = c, o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = dt(r);
                        if (o) {
                            var n = dt(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return st(this, t)
                    });

                    function c(t, e) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), pt(ft(n = i.call(this, t, e)), "getBrowserSafeWidth", (function(t) {
                            var e = t.getBoundingClientRect().width;
                            return et.G6 ? Math.ceil(e) : e
                        })), pt(ft(n), "getLabel", (function() {
                            var t = n.props,
                                e = t.helpCenterAvailable,
                                r = t.talkOnline,
                                o = t.chatAvailable,
                                i = t.launcherLabel,
                                c = t.chatLabel,
                                a = t.notificationCount,
                                u = t.talkLabel;
                            return a ? a > 1 ? f.a.t("embeddable_framework.chat.notification_multiple", {
                                count: a
                            }) : f.a.t("embeddable_framework.chat.notification") : o && r ? i : o && !e ? c : r && !e ? u : i
                        })), pt(ft(n), "getActiveEmbedLabel", (function() {
                            var t = n.props,
                                e = t.launcherLabel,
                                r = t.chatAvailable,
                                o = t.chatLabel,
                                i = t.chatOfflineAvailable,
                                c = t.activeEmbed,
                                a = t.notificationCount,
                                u = t.talkLabel;
                            if (a) return a > 1 ? f.a.t("embeddable_framework.chat.notification_multiple", {
                                count: a
                            }) : f.a.t("embeddable_framework.chat.notification");
                            switch (c) {
                                case "ticketSubmissionForm":
                                case "helpCenterForm":
                                    return e;
                                case "chat":
                                    return i ? e : r ? o : n.getLabel();
                                case "talk":
                                    return u;
                                default:
                                    return n.getLabel()
                            }
                        })), pt(ft(n), "getTitle", (function() {
                            var t = f.a.t("embeddable_framework.launcher.frame.title");
                            switch (n.props.activeEmbed) {
                                case "chat":
                                    return n.props.chatAvailable ? f.a.t("embeddable_framework.launcher.chat.title") : t;
                                case "talk":
                                    return f.a.t("embeddable_framework.launcher.talk.title");
                                default:
                                    return t
                            }
                        })), pt(ft(n), "getIconType", (function() {
                            var t = n.props,
                                e = t.talkOnline,
                                r = t.chatAvailable,
                                o = t.chatOfflineAvailable;
                            return r && e ? "Icon" : r && !o ? k.UZ.CHAT : e ? "Icon--launcher-talk" : "Icon"
                        })), pt(ft(n), "getActiveEmbedIconType", (function() {
                            switch (n.props.activeEmbed) {
                                case "ticketSubmissionForm":
                                    return "Icon";
                                case "chat":
                                    return n.props.chatAvailable && !n.props.chatOfflineAvailable ? k.UZ.CHAT : n.getIconType();
                                case "talk":
                                    return "Icon--launcher-talk";
                                default:
                                    return n.getIconType()
                            }
                        })), pt(ft(n), "render", (function() {
                            var t = n.props.isMobile,
                                e = t ? rt.locals.wrapperMobile : "",
                                r = t && !(n.props.notificationCount > 0) && !n.props.showLabelMobile,
                                o = r ? rt.locals.iconMobile : "",
                                i = r ? rt.locals.labelMobile : "",
                                c = n.getActiveEmbedIconType(),
                                a = f.a.getLocale(),
                                u = f.a.isRTL(),
                                l = "Icon" === c && u && "he" !== a || c === k.UZ.CHAT && u;
                            return (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsx)(P.g7, {
                                    style: n.state.style
                                }), (0, p.jsx)("div", {
                                    ref: n.container,
                                    children: (0, p.jsxs)("button", {
                                        "aria-label": n.getActiveEmbedLabel(),
                                        className: "".concat(rt.locals.wrapper, " ").concat(e),
                                        onClick: function(t) {
                                            n.props.onClick(t), n.props.launcherClicked()
                                        },
                                        children: [(0, p.jsx)(_.J, {
                                            type: c,
                                            flipX: l,
                                            className: "".concat(rt.locals.icon, " ").concat(o)
                                        }), (0, p.jsx)("span", {
                                            className: "".concat(rt.locals.label, " ").concat(i),
                                            children: n.getActiveEmbedLabel()
                                        })]
                                    })
                                }), (0, p.jsx)(q, {
                                    title: n.getTitle(),
                                    onTitleChange: function(t) {
                                        var e, r;
                                        null === (e = (r = n.props).updateFrameTitle) || void 0 === e || e.call(r, t)
                                    }
                                })]
                            })
                        })), n.container = (0, v.createRef)(), n.state = {
                            style: ht
                        }, n
                    }
                    return e = c, (n = [{
                        key: "componentDidUpdate",
                        value: function() {
                            var t = this;
                            (0, nt.Fc)((function() {
                                if (t.container.current && !t.hasUnmounted) {
                                    var e = t.getBrowserSafeWidth(t.container.current);
                                    t.state.style.width !== e && t.setState({
                                        style: at(at({}, ht), {}, {
                                            width: e
                                        })
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.hasUnmounted = !0
                        }
                    }]) && ut(e.prototype, n), c
                }(v.Component);
            pt(bt, "propTypes", {
                activeEmbed: y().string.isRequired,
                chatAvailable: y().bool.isRequired,
                helpCenterAvailable: y().bool.isRequired,
                talkOnline: y().bool.isRequired,
                onClick: y().func.isRequired,
                notificationCount: y().number.isRequired,
                updateFrameTitle: y().func,
                launcherClicked: y().func.isRequired,
                chatOfflineAvailable: y().bool.isRequired,
                isMobile: y().bool,
                launcherLabel: y().string.isRequired,
                chatLabel: y().string.isRequired,
                showLabelMobile: y().bool.isRequired,
                talkLabel: y().string.isRequired
            }), pt(bt, "defaultProps", {
                isMobile: !1
            });
            var gt = {
                    launcherClicked: T.Vj
                },
                mt = (0, b.₹j)((function(t, e) {
                    return {
                        activeEmbed: (0, X.SE)(t),
                        chatAvailable: (0, L.LL)(t),
                        helpCenterAvailable: (0, L.dN)(t),
                        talkOnline: (0, L.Bh)(t),
                        callbackEnabled: (0, Y.zo)(t),
                        notificationCount: (0, I.of)(t),
                        chatOfflineAvailable: (0, L.r2)(t),
                        chatLabel: J(t),
                        launcherLabel: ₹(t, e.label),
                        talkLabel: Q(t),
                        showLabelMobile: (0, tt.GO)(t).labelVisible
                    }
                }), gt, null, {
                    forwardRef: !0
                })(bt);

            function yt(t) {
                return (yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function vt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function Ot(t, e) {
                return (Ot = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function wt(t, e) {
                return !e || "object" !== yt(e) && "function" != typeof e ? Et(t) : e
            }

            function Et(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function St(t) {
                return (St = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function jt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ct = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && Ot(t, e)
                }(c, t);
                var e, n, r, o, i = (r = c, o = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }(), function() {
                    var t, e = St(r);
                    if (o) {
                        var n = St(this).constructor;
                        t = Reflect.construct(e, arguments, n)
                    } else t = e.apply(this, arguments);
                    return wt(this, t)
                });

                function c(t, e) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), jt(Et(n = i.call(this, t, e)), "handleBadgeClick", (function(t) {
                        n.props.onClickHandler(t), n.props.launcherClicked(t)
                    })), jt(Et(n), "getActiveComponent", (function() {
                        return Et(n)
                    })), jt(Et(n), "render", (function() {
                        return n.props.showChatBadgeLauncher ? (0, p.jsx)(K, {
                            ref: function(t) {
                                return n.chatBadge = t
                            },
                            onSend: n.handleBadgeClick,
                            hideBranding: n.props.hideBranding
                        }) : (0, p.jsx)(mt, {
                            ref: function(t) {
                                return n.launcher = t
                            },
                            onClick: n.props.onClickHandler,
                            updateFrameTitle: n.props.updateFrameTitle,
                            label: "embeddable_framework.launcher.label.".concat(n.props.labelKey),
                            isMobile: n.props.isMobile
                        })
                    })), n.launcher = null, n.chatBadge = null, n
                }
                return e = c, (n = [{
                    key: "forceUpdate",
                    value: function() {
                        this.launcher && this.launcher.forceUpdate(), this.chatBadge && this.chatBadge.forceUpdate()
                    }
                }]) && vt(e.prototype, n), c
            }(v.Component);
            jt(Ct, "propTypes", {
                showChatBadgeLauncher: y().bool,
                onClickHandler: y().func,
                updateFrameTitle: y().func,
                labelKey: y().string,
                launcherClicked: y().func,
                hideBranding: y().bool,
                isMobile: y().bool
            }), jt(Ct, "defaultProps", {
                labelKey: "help"
            });
            var _t = {
                    launcherClicked: T.Vj
                },
                kt = (0, b.₹j)((function(t) {
                    return {
                        showChatBadgeLauncher: (0, L.CE)(t),
                        hideBranding: (0, L.Dh)(t)
                    }
                }), _t, null, {
                    forwardRef: !0
                })(Ct),
                Pt = n(52413),
                Tt = n(26411),
                At = n(45150),
                It = n(86983),
                Lt = n(91386),
                Dt = "\n  ".concat(Lt.F, "\n  ").concat(ot(), "\n  ").concat(R(), "\n");

            function xt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Rt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? xt(Object(n), !0).forEach((function(e) {
                        Nt(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Nt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function Ft(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var Mt = k.Kt * (0, et.lX)(),
                Bt = "".concat(n(80912), " ").concat(Dt),
                zt = "html { font-size: ".concat(Mt, "px }"),
                Ut = {
                    width: 240,
                    height: 50,
                    padding: 0,
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    position: "fixed",
                    bottom: 30,
                    overflow: "visible",
                    opacity: 0,
                    border: 0
                },
                Ht = function(t) {
                    var e, n, r, o = t.labelKey,
                        i = (0, At.Z)(),
                        c = (n = (0, v.useState)(null !== (e = i("embeddable_framework.launcher.frame.title")) && void 0 !== e ? e : ""), r = 2, function(t) {
                            if (Array.isArray(t)) return t
                        }(n) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return n
                            }
                        }(n, r) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return Ft(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? Ft(t, e) : void 0
                            }
                        }(n, r) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        a = c[0],
                        u = c[1],
                        l = (0, v.useRef)(),
                        s = (0, b.I0)(),
                        f = (0, b.v9)((function(t) {
                            return (0, L.Lq)(t, "launcher")
                        })),
                        d = (0, b.v9)((function(t) {
                            return (0, L.IB)(t, "launcher")
                        })),
                        h = (0, b.v9)(L.Dh),
                        g = (0, b.v9)(tt.gM),
                        m = Rt(Rt({}, Ut), {}, {
                            zIndex: g - 1
                        });
                    return (0, et.K1)() && Object.assign(m, {
                        height: "".concat(50 * (0, et.lX)(), "px"),
                        bottom: 0,
                        marginTop: Math.round(parseInt(Ut.marginTop, 10) * (0, et.lX)()),
                        marginBottom: Math.round(parseInt(Ut.marginBottom, 10) * (0, et.lX)()),
                        marginLeft: Math.round(parseInt(Ut.marginLeft, 10) * (0, et.lX)()),
                        marginRight: Math.round(parseInt(Ut.marginRight, 10) * (0, et.lX)())
                    }), (0, p.jsx)(Tt.Z, {
                        visible: d,
                        children: function(t) {
                            return (0, p.jsxs)(Pt.ZP, {
                                title: a,
                                id: "launcher",
                                visible: d,
                                style: Rt(Rt({}, m), t),
                                color: f,
                                tabIndex: d ? "0" : "-1",
                                children: [(0, p.jsx)("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: Bt
                                    }
                                }), (0, p.jsx)("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: (0, It.EC)(f)
                                    }
                                }), (0, p.jsx)("style", {
                                    dangerouslySetInnerHTML: {
                                        __html: zt
                                    }
                                }), (0, p.jsx)("div", {
                                    ref: l,
                                    style: {
                                        float: "right"
                                    },
                                    children: (0, p.jsx)(kt, {
                                        onClickHandler: function(t) {
                                            t.preventDefault(), s((0, T.₹m)())
                                        },
                                        updateFrameTitle: u,
                                        hideBranding: h,
                                        fullscreen: !1,
                                        isMobile: (0, et.K1)(),
                                        labelKey: o
                                    })
                                })]
                            })
                        }
                    })
                };
            Ht.propTypes = {
                labelKey: y().string
            };
            var Wt = Ht,
                Vt = n(40969),
                Kt = (0, v.lazy)((function() {
                    return Promise.all([n.e(5477), n.e(6890)]).then(n.bind(n, 51315))
                })),
                Gt = function(t) {
                    var e, n, r, o = t.config,
                        i = (0, b.v9)((function(t) {
                            return (0, L.IB)(t, "webWidget")
                        })),
                        c = (0, b.v9)((function(t) {
                            return (0, Vt.Z)(t, "web_widget_prefetch_widget_container")
                        }));
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(Wt, {
                            labelKey: null == o || null === (e = o.embeds) || void 0 === e || null === (n = e.launcher) || void 0 === n || null === (r = n.props) || void 0 === r ? void 0 : r.labelKey
                        }), (0, p.jsx)(v.Suspense, {
                            fallback: (0, p.jsx)("span", {}),
                            children: (c || i) && (0, p.jsx)(Kt, {})
                        })]
                    })
                };
            Gt.propTypes = {
                config: y().shape({
                    embeds: y().shape({
                        launcher: y().shape({
                            props: y().shape({
                                labelKey: y().string
                            })
                        })
                    })
                })
            };
            var qt = Gt,
                Zt = n(35663),
                Yt = n(70570),
                Xt = function(t) {
                    var e = t.reduxStore,
                        n = t.config,
                        r = (0, Yt.Ht)().appendChild(Yt.tj.createElement("div"));
                    h.render((0, p.jsx)(b.zt, {
                        store: e,
                        children: (0, p.jsx)(g.F0, {
                            history: Zt.Z,
                            children: (0, p.jsx)(qt, {
                                config: n
                            })
                        })
                    }), r)
                },
                Qt = n(19599),
                Jt = n(5364),
                ₹t = (n(16781), n(18717)),
                te = n(17073),
                ee = n(43292),
                ne = n(86078),
                re = n.n(ne),
                oe = n(85581),
                ie = n(12252),
                ce = n(83166),
                ae = n(99282),
                ue = n(7110),
                le = n(22398),
                se = n(83738),
                fe = n(33044),
                de = n(2447),
                pe = n(23541),
                he = n(28464),
                be = n(3229),
                ge = n(68789),
                me = n.n(ge),
                ye = n(81620),
                ve = n.n(ye),
                Oe = n(15621),
                we = n.n(Oe),
                Ee = (n(67890), null),
                Se = function(t, e, n, r) {
                    Ee((function() {
                        var o = Ee.getAll() || [],
                            i = {
                                hitType: "event",
                                eventCategory: n,
                                eventAction: t,
                                eventLabel: e,
                                eventValue: r
                            };
                        o.length > 0 ? we()(o, (function(t) {
                            t.send("event", i)
                        })) : Ee("send", i)
                    }))
                },
                je = function(t, e, n, r) {
                    Ee.gaq.push((function() {
                        var o = Ee.gat,
                            i = o._getTrackers() || [o._getTrackerByName()];
                        we()(i, (function(o) {
                            o._trackEvent(n, t, e, r)
                        }))
                    }))
                };

            function Ce(t) {
                return Object.values(t).join(" - ")
            }
            var _e, ke = function() {
                    var t = Yt.p_.GoogleAnalyticsObject || "ga";
                    ve()(Yt.p_[t]) ? Ee = Yt.p_[t] : Yt.p_._gaq && Yt.p_._gat && (Ee = {
                        gaq: Yt.p_._gaq,
                        gat: Yt.p_._gat
                    })
                },
                Pe = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k.p1,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    if (!Ee) return null;
                    var o = me()(e) ? Ce(e) : e;
                    ve()(Ee) ? Se(t, o, n, r) : je(t, o, n, r)
                },
                Te = n(59298),
                Ae = n(78703);

            function Ie(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Le = Date.now(),
                De = function(t, e) {
                    var n = parseInt(t.department);
                    return s()((0, I.Ps)(e)[n], "name")
                },
                xe = !1,
                Re = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k.p1;
                    Te.A(oe.zM, [{
                        action: t,
                        properties: e,
                        category: n
                    }]), xe || Pe(t, e, n)
                },
                Ne = {
                    chat: function(t) {
                        Re("Chat Opened"), Re(Fe[t])
                    },
                    helpCenterForm: function(t) {
                        Re(Fe[t])
                    },
                    talk: function(t, e) {
                        var n = de.c9[(0, Y.F_)(e)];
                        Re(Fe[t], {
                            contactOption: n
                        })
                    }
                },
                Fe = {
                    chat: "Chat Shown",
                    helpCenterForm: "Help Center Shown",
                    talk: "Talk Shown"
                },
                Me = (Ie(_e = {}, pe.At, (function(t) {
                    var e = t.payload,
                        n = t.prevState,
                        r = (0, X.SE)(n);
                    if ((0, X.co)(n) && r !== e) {
                        var o = Ne[e];
                        o && o(e, n)
                    }
                })), Ie(_e, he.A, (function(t) {
                    var e = t.payload,
                        n = t.isAfterLoadTime;
                    (0, Ae.YN)(e.detail.nick) && n && Re("Chat Served by Operator", {
                        agent: e.detail.display_name
                    })
                })), Ie(_e, he.FP, (function(t) {
                    var e = t.payload,
                        n = t.prevState;
                    Re("Chat Offline Message Sent", {
                        department: De(e, n)
                    })
                })), Ie(_e, he.pt, (function(t) {
                    var e = t.payload,
                        n = t.isAfterLoadTime,
                        r = e.detail.new_rating;
                    n && Re(r ? "Chat Rating ".concat(re()(e.detail.new_rating)) : "Chat Rating Removed")
                })), Ie(_e, he.L7, (function(t) {
                    t.isAfterLoadTime && Re("Chat Comment Submitted")
                })), Ie(_e, he.Vc, (function(t) {
                    var e = t.payload,
                        n = t.prevState;
                    Re("Chat Request Form Submitted", {
                        department: De(e, n)
                    })
                })), Ie(_e, pe.QB, (function(t) {
                    if (!0 === t.payload) return Re("Web Widget Opened");
                    Re("Web Widget Minimised")
                })), Ie(_e, le.jk, (function(t) {
                    var e = t.payload,
                        n = t.prevState,
                        r = (0, fe.R3)(n, e.id);
                    if (!r) return Re("Contact Form Shown", {
                        name: e.id
                    });
                    Re("Contact Form Shown", {
                        id: e.id,
                        name: r.name
                    })
                })), Ie(_e, ae.tA, (function(t) {
                    var e = t.prevState;
                    if (!t.payload.isFallback) {
                        var n = (0, ue.He)(e);
                        Re("Help Center Search", {
                            term: n
                        })
                    }
                })), Ie(_e, ae.I, (function(t) {
                    var e = t.payload;
                    Re("Help Center Article Viewed", {
                        id: e.id,
                        name: e.name
                    })
                })), Ie(_e, ae.JF, (function(t) {
                    var e = t.prevState,
                        n = (0, ue.TL)(e),
                        r = (0, ue.Zz)(e)[n],
                        o = r.id,
                        i = r.name;
                    Re("Help Center View Original Article Clicked", {
                        id: o,
                        name: i
                    })
                })), Ie(_e, le.Yr, (function(t) {
                    var e = t.payload,
                        n = t.prevState;
                    if (e.name === se.Z.defaultFormId) return Re("Contact Form Submitted", {
                        name: se.Z.defaultFormId
                    });
                    var r = parseInt(e.name),
                        o = (0, fe.R3)(n, r),
                        i = o.id,
                        c = o.name;
                    Re("Contact Form Submitted", {
                        id: i,
                        name: c
                    })
                })), Ie(_e, be.Ri, (function() {
                    Re("Talk Callback Request Submitted")
                })), Ie(_e, ie.S6, (function(t) {
                    var e = t.payload,
                        n = t.prevState,
                        r = (0, ce.Yp)(n, e);
                    Re("Answer Bot Article Viewed", {
                        id: e.articleID,
                        name: null == r ? void 0 : r.title
                    })
                })), _e);

            function Be(t) {
                var e = t.getState;
                return function(t) {
                    return function(n) {
                        var r, o = n.type,
                            i = n.payload,
                            c = e();
                        xe = (0, tt.Fv)(c);
                        var a = s()(i, "detail.timestamp") > Le;
                        null === (r = Me[o]) || void 0 === r || r.call(Me, {
                            payload: i,
                            prevState: c,
                            isAfterLoadTime: a
                        });
                        var u, l, f, d = t(n),
                            p = e();
                        return !(0, X.co)(c) && (0, X.co)(p) && (u = p, l = (0, X.SE)(u), (f = Ne[l]) && f(l, u)), d
                    }
                }
            }
            var ze = n(57829),
                Ue = n(22551),
                He = n(41275),
                We = n(89931),
                Ve = n(97137),
                Ke = !1,
                Ge = !1,
                qe = function(t, e) {
                    var n = (0, Y.nG)(t),
                        r = n.nickname;
                    return {
                        supportedCountries: n.supportedCountries,
                        nickname: r,
                        phoneNumber: e,
                        averageWaitTime: (0, Y.pz)(t),
                        agentAvailability: (0, Y.x1)(t),
                        locale: f.a.getLocale()
                    }
                },
                Ze = function(t, e, n) {
                    var r = (0, ue.Gv)(t);
                    return {
                        query: (0, ue.He)(t),
                        resultsCount: r > 3 ? 3 : r,
                        uniqueSearchResultClick: !(0, ue.TL)(t),
                        articleId: e,
                        locale: f.a.getLocale(),
                        contextualSearch: (0, ue.vt)(t),
                        answerBot: Boolean(n)
                    }
                },
                Ye = function(t, e, n) {
                    var r = Ze(t, e, n);
                    We.N.trackUserAction("helpCenter", "viewOriginalArticle", {
                        label: "helpCenterForm",
                        value: r
                    })
                };

            function Xe(t) {
                var e = t.getState;
                return function(t) {
                    return function(n) {
                        var r, o, i, c, a, u, l, s = n.type,
                            d = n.payload,
                            p = e();
                        switch (s) {
                            case ie.zA:
                                ! function(t, e) {
                                    if ((0, ce.CL)(t) === Ue.yH && e === Ue.kK) {
                                        var n = {
                                            from: Ue.yH,
                                            to: Ue.kK
                                        };
                                        We.N.trackUserAction("answerBot", "userNavigation", {
                                            label: "journey",
                                            value: n
                                        })
                                    }
                                }(p, d);
                                break;
                            case ie.GT:
                                ! function(t, e) {
                                    var n = e.articleID,
                                        r = {
                                            query: (0, ue.He)(t),
                                            resultsCount: (0, ue.Gv)(t),
                                            contextualSearch: !0,
                                            articleId: n,
                                            locale: f.a.getLocale(),
                                            uniqueSearchResultClick: !1,
                                            answerBot: !0
                                        };
                                    We.N.trackUserAction("helpCenter", "click", {
                                        label: "helpCenterForm",
                                        value: r
                                    })
                                }(p, d);
                                break;
                            case ie.S6:
                                ! function(t, e) {
                                    var n = e.articleID,
                                        r = e.sessionID,
                                        o = (0, He.cB)(t, r),
                                        i = {
                                            query: o.query,
                                            resultsCount: o.articles.length,
                                            deflectionId: o.deflection.id,
                                            articleId: n,
                                            locale: f.a.getLocale(),
                                            uniqueSearchResultClick: !1,
                                            answerBot: !0
                                        };
                                    We.N.trackUserAction("helpCenter", "click", {
                                        label: "helpCenterForm",
                                        value: i
                                    })
                                }(p, d);
                                break;
                            case he.d8:
                                ! function(t) {
                                    var e = (0, L.rr)(t);
                                    We.N.trackUserAction("chat", "chatStarted", {
                                        label: "newChat",
                                        value: {
                                            departmentName: e ? e.name : null,
                                            departmentId: e ? e.id : null
                                        }
                                    })
                                }(e());
                                break;
                            case be.Ri:
                                r = p, i = (o = (0, Y.QL)(r)).phone, c = o.name, a = o.email, u = o.description, (l = qe(r, i)).user = {
                                    description: u,
                                    name: c,
                                    email: a
                                }, We.N.trackUserAction("talk", "request", {
                                    label: "callbackForm",
                                    value: l
                                });
                                break;
                            case pe.At:
                                if (!(0, X.co)(p)) break;
                                "talk" !== d || Ke || (function(t) {
                                        var e = qe(t, (0, Y.nG)(t).phoneNumber);
                                        We.N.trackUserAction("talk", "opened", {
                                            label: "phoneNumber",
                                            value: e
                                        })
                                    }(p), Ke = !0), (0, I.OQ)(p) || "chat" !== d || Ge || (We.N.trackUserAction("chat", "opened", {
                                        label: "newChat"
                                    }), Ge = !0),
                                    function(t, e) {
                                        if ("answerBot" === (0, X.SE)(t)) {
                                            var n = (0, ce._q)(t);
                                            We.N.trackUserAction("answerBot", "channelClicked", {
                                                label: "channelChoice",
                                                value: {
                                                    query: (0, ce.l5)(t),
                                                    deflectionId: n && n.id,
                                                    channel: e
                                                }
                                            })
                                        }
                                    }(p, d);
                                break;
                            case ae.I:
                                ! function(t, e) {
                                    if (e) {
                                        var n = Ze(t, e.id);
                                        We.N.trackUserAction("helpCenter", "click", {
                                            label: "helpCenterForm",
                                            value: n
                                        }), Ve.Z.articleViewed(e.id, e.locale, n)
                                    }
                                }(p, d);
                                break;
                            case ae.tA:
                            case ae.M1:
                                ! function(t) {
                                    0 === (0, ue.dU)(t) && We.N.trackUserAction("helpCenter", "search", {
                                        label: "helpCenterForm",
                                        value: (0, ue.He)(t)
                                    })
                                }(p);
                                break;
                            case pe.JB:
                                ! function(t) {
                                    var e = (0, X.SE)(t);
                                    We.N.trackUserAction("launcher", "click", {
                                        label: "launcher",
                                        value: {
                                            embedOpen: e
                                        }
                                    })
                                }(p);
                                break;
                            case ae.JF:
                                ! function(t) {
                                    var e = (0, ue.TL)(t);
                                    Ye(t, e)
                                }(p);
                                break;
                            case ze.h5:
                                Ye(p, n.payload.articleId, !0);
                                break;
                            case pe.QB:
                                !1 === d && function(t) {
                                    (0, ce.CL)(t) === Ue.yH && We.N.trackUserAction("answerBot", "articleClosed", {
                                        label: "helpCenterForm",
                                        value: {
                                            articleId: (0, ce.g)(t)
                                        }
                                    })
                                }(p)
                        }
                        return t(n)
                    }
                }
            }
            var Qe = n(59019),
                Je = n.n(Qe),
                ₹e = (n(77950), n(85940), n(74069), n(53599)),
                tn = n(35266),
                en = n(2847),
                nn = function(t, e, n, r) {
                    var i = n.type,
                        c = n.payload;
                    if (!o()((0, I.BV)(e))) {
                        var a = i === he.hk,
                            u = s()(c, "detail.nick", "").indexOf("agent:") > -1;
                        if (a && u) {
                            var l = (0, I.Vy)(t),
                                f = (0, I.Zv)(e),
                                d = (0, I.jk)(e);
                            r(0 !== f || d ? {
                                type: he.r0,
                                payload: l[c.detail.nick]
                            } : (0, A.Nl)())
                        }
                    }
                },
                rn = n(76152),
                on = !1;

            function cn(t, e, n) {
                if ((0, rn.NM)(t)) {
                    var r = [pe.L8, pe.JB, pe.yt, pe.R₹, pe.no, pe.E];
                    (0, X.lF)(t) && !on && u()(r, e.type) && (n((0, A.Oc)(!1)), on = !0)
                }
            }

            function an(t, e, n) {
                (0, X.LR)(t) && "chat" !== (0, X.SE)(t) && "chat" === (0, X.SE)(e) && n((0, A.HE)())
            }
            var un = n(17451),
                ln = n(94591);

            function sn(t, e, n, r) {
                !(0, L.hW)(t) && (0, L.hW)(e) ? (n((0, un.YY)(!0)), (0, et.K1)() && setTimeout((function() {
                    (0, L.hW)(r()) && ((0, et.PB)(!0), (0, I.₹F)(r()) || ((0, ln.ID)(0), (0, ln.zS)(!0)))
                }), k.jd)) : (0, L.hW)(t) && !(0, L.hW)(e) && (n((0, un.YY)(!1)), (0, et.K1)() && ((0, et.PB)(!1), (0, ln.zS)(!1), (0, ln.Gb)()))
            }
            var fn = n(83095),
                dn = n(81632),
                pn = n(59534),
                hn = n(4220),
                bn = n(36810),
                gn = n(80370),
                mn = null,
                yn = !1;

            function vn() {
                yn = !0
            }

            function On(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function wn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? On(Object(n), !0).forEach((function(e) {
                        En(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : On(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function En(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            "undefined" != typeof Proxy && (mn = new Proxy(new Object, {
                get: function(t, e) {
                    return "toJSON" === e ? {} : function(t) {
                        return yn ? (console.warn("You are trying to use a Zendesk Web Widget API method that is native to the Widget's Integrated Chat experience."), console.warn("Please go to your Zendesk Widget admin settings and enable the Integrated Chat option to enable this API call."), yn = !1) : setTimeout(vn, 2001), !1
                    }
                }
            }));
            var Sn = Date.now(),
                jn = !1,
                Cn = null,
                _n = function(t, e, n) {
                    (0, I.B5)(t) === ₹e.WO.CONNECTING && (0, I.B5)(e) === ₹e.WO.CONNECTED && (n((0, bn.b)()), n((0, dn.O)()), jn || (n((0, fn.wy)()), n((0, fn.B2)()), jn = !0), n((0, fn.th)()))
                },
                kn = function(t, e, n) {
                    var r = (0, I.uz)(t);
                    (0, I.uz)(e).length > r.length && (0, I.sO)(e) && function(t, e) {
                        var n, r, o, i, c = (0, X.SE)(t),
                            a = (0, X.LR)(t),
                            u = (0, X.Se)(t),
                            l = a && "chat" !== c,
                            s = (n = t, r = (0, I.uz)(n), o = Je()(r), i = (0, I.PC)(n), wn(wn({}, o), {}, {
                                proactive: i
                            })),
                            f = function(t) {
                                return t.timestamp && t.timestamp > Sn
                            }(s);
                        if (e((0, fn.lw)(s)), u && f && (0, I.q_)(t) && gn.Z.play("incoming_message"), !a || l) {
                            var d = (0, tt.Ir)(t),
                                p = (0, et.K1)();
                            ! function(t, e) {
                                var n = t.proactive;
                                Cn && clearTimeout(Cn), Cn = setTimeout((function() {
                                    e((0, fn.Dd)())
                                }), n ? 5e3 : 3e3)
                            }(s, e), a || u || !f || !s.proactive || p && d || e((0, fn.CZ)())
                        }
                    }(e, n)
                },
                Pn = function(t, e, n) {
                    (0, I.SJ)(t) === (0, I.SJ)(e) || (0, I.sO)(e) || n((0, fn.₹M)())
                },
                Tn = function(t, e, n) {
                    (0, I.BV)(t) !== (0, I.BV)(e) && ((0, I.jk)(e) || !(0, L.qN)(e) || (0, I.OQ)(e) || "chat" !== (0, X.SE)(e) || (0, Yt.Vk)() || (0, I.H_)(e) || n((0, T.OX)("ticketSubmissionForm")))
                },
                An = function(t, e, n) {
                    e.type === he.qU && ((0, I.jk)(t) || !(0, L.qN)(t) || (0, Yt.Vk)() || n((0, T.OX)("ticketSubmissionForm")), (0, L.P7)(t) && n((0, T.LO)(!0)))
                },
                In = function(t, e, n) {
                    var r = (0, ue.oM)(t),
                        o = (0, ue.oM)(e);
                    if (!r && o) {
                        n((0, T.OX)("helpCenterForm"));
                        var i = (0, X.so)(e),
                            c = (0, X.tN)(e),
                            a = tn.Z.articles(o);
                        c || !i ? Zt.Z.replace(a) : Zt.Z.push(a), (0, X.LR)(t) || n((0, T.CO)())
                    }
                },
                Ln = function(t, e) {
                    var n = t.type,
                        r = t.payload,
                        o = n === he.gy,
                        i = s()(r, "detail.auth"),
                        c = s()(i, "avatar₹string"),
                        a = !!s()(i, "type₹string", "none").match(/^(google|facebook)₹/i);
                    o && a && e({
                        type: he.WM,
                        payload: c
                    })
                },
                Dn = function(t, e, n) {
                    var r = (0, I.OQ)(t),
                        o = (0, I.OQ)(e),
                        i = (0, L.P7)(e);
                    !r && o && (n((0, fn.OT)()), i && n((0, T.LO)(!1)))
                },
                xn = function(t) {
                    t.type === pe.tX && (s()(t.payload, "embeds.chat") || vn())
                },
                Rn = function(t, e, n, r) {
                    var o = s()(t.payload, "webWidget.cookies"),
                        i = void 0 !== o && o !== !(0, tt.M8)(e);
                    t.type === hn.I && i && (!1 === o ? en.h.disable() : (en.h.enable(), (0, X.lF)(n) && !(0, I.B5)(n) && r((0, pn.O)())))
                };

            function Nn(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {};
                Dn(t, e, r), Tn(t, e, r), _n(t, e, r), kn(t, e, r), Pn(t, e, r), In(t, e, r), An(e, n, r), nn(t, e, n, r), Ln(n, r), sn(t, e, r, o), an(t, e, r), xn(n), cn(t, n, r), Rn(n, t, e, r)
            }
            var Fn = function(t) {
                    return function(e) {
                        return function(n) {
                            return function(r) {
                                var o = e.getState(),
                                    i = n(r),
                                    c = e.getState();
                                return t(o, c, r, e.dispatch, e.getState), i
                            }
                        }
                    }
                },
                Mn = n(60650),
                Bn = n.n(Mn),
                zn = {
                    activeEmbed: "base",
                    widgetShown: "base",
                    is_chatting: "chat"
                },
                Un = [pe.QB, pe.At, he.d8, he.qU];

            function Hn(t) {
                var e = t.getState;
                return function(t) {
                    return function(n) {
                        var r = t(n),
                            o = n.type,
                            i = e();
                        if (u()(Un, o)) {
                            var c = Bn()(zn, (function(t, e, n) {
                                return t[n] = i[e][n], t
                            }), {});
                            en.h.set("store", c)
                        }
                        return r
                    }
                }
            }

            function Wn(t) {
                return (Wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Vn(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Kn(t, e) {
                return (Kn = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function Gn(t, e) {
                return !e || "object" !== Wn(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function qn(t) {
                return (qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function Zn(t) {
                return (Zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function Yn(t, e) {
                return (Yn = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function Xn(t, e) {
                return !e || "object" !== Zn(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function Qn(t) {
                return (Qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var Jn = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && Yn(t, e)
                    }(o, t);
                    var e, n, r = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = Qn(e);
                        if (n) {
                            var o = Qn(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return Xn(this, t)
                    });

                    function o(t) {
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), r.call(this, t, "InfiniteLoopError")
                    }
                    return o
                }(function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && Kn(t, e)
                    }(o, t);
                    var e, n, r = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = qn(e);
                        if (n) {
                            var o = qn(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return Gn(this, t)
                    });

                    function o(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "FatalError";
                        return Vn(this, o), r.call(this, t, e)
                    }
                    return o
                }(n(23417).Z)),
                ₹n = [he.Ug, he.k5, he.nl, he.g3],
                tr = [],
                er = [],
                nr = !1,
                rr = function(t) {
                    return function(t) {
                        return function(e) {
                            var n = e.type;
                            if (u()(₹n, n)) return t(e);
                            var r = Date.now();
                            return tr.push(r), tr = tr.slice(-200), er.push(n), er = er.slice(-20), 200 === tr.length && r - tr[0] < 1e3 && (nr || (Qt.Z.error(new Jn("infiniteLoopDetected"), {
                                action: n,
                                prevActions: er
                            }), We.N.trackUserAction("infiniteLoopDetected", "warning", {
                                label: n,
                                value: er
                            }), nr = !0)), t(e)
                        }
                    }
                };

            function or(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var ir = function(t, e, n) {
                if (e.type === pe.mf) {
                    var r = (0, X.wo)(t);
                    r.performContextualSearch && (n(d.WA.apply(void 0, function(t) {
                        if (Array.isArray(t)) return or(t)
                    }(o = r.performContextualSearch) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(o) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return or(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? or(t, e) : void 0
                        }
                    }(o) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())), n((0, T.m6)("performContextualSearch")))
                }
                var o
            };

            function cr(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {};
                ir(e, n, r)
            }
            var ar = n(46709),
                ur = n.n(ar),
                lr = n(79264),
                sr = function(t, e) {
                    var n = (0, X.SE)(e),
                        r = [he.uu, he.Qk, he.nN],
                        o = ["chat", "channelChoice", "ticketSubmissionForm", k.MC],
                        i = u()(r, t),
                        c = u()(o, n);
                    return i && c
                },
                fr = function(t, e) {
                    var n = t.type,
                        r = t.payload;
                    if (n !== hn.I) return !1;
                    var i = Bn()(r.webWidget, (function(t, e, n) {
                            return (ur()(e, "suppress") || ur()(e, "hideWhenOffline")) && t.push(n), t
                        }), []),
                        c = (0, X.SE)(e),
                        a = (0, L.hW)(e),
                        l = u()(i, k.pm[c] || c);
                    return a ? l : !o()(i)
                },
                dr = function(t, e) {
                    var n = !1,
                        r = null,
                        o = k.MC,
                        i = (0, ue.₹c)(t);
                    (0, Yt.Vk)() ? o = "chat": (0, L.P7)(t) ? (o = "answerBot", i ? (o = "helpCenterForm", n = !0) : (0, I.OQ)(t) ? o = "chat" : (o = "answerBot", n = !1)) : (0, L.dN)(t) ? (o = "helpCenterForm", n = i, r = tn.Z.home()) : (0, L._N)(t) && i ? (o = "helpCenterForm", n = !1) : (0, L.nd)(t) ? o = "channelChoice" : (0, L.Bh)(t) ? o = "talk" : (0, L.LL)(t) || (0, X.Nw)(t) && !(0, I.wZ)(t) ? o = "chat" : (0, L.qN)(t) ? (o = "ticketSubmissionForm", r = se.Z.home()) : (0, I.wZ)(t) && (o = k.MC), e((0, T.OX)(o)), e((0, T.LO)(n)), r && Zt.Z.replace(r)
                };

            function pr(t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function() {},
                    o = n.type,
                    i = [be.jV, be.E9, pe.Ss, pe.R₹, pe.mf, he.UK, pe.mG, he.s9, be.nm, lr.cX, be.H1],
                    c = (0, L.hW)(t),
                    a = (0, I.OQ)(t) && "chat" === (0, X.SE)(t),
                    l = u()(i, o) && !a || sr(o, e),
                    s = o === pe.Nv && !(0, L.LL)(t) && "channelChoice" === (0, X.SE)(t);
                (!c && l || fr(n, t) || s) && dr(e, r)
            }

            function hr(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                return function() {
                    return function(n) {
                        return function(r) {
                            if (!t || e(r.type)) return n(r)
                        }
                    }
                }
            }
            var br = n(37908),
                gr = (0, ₹t.UY)({
                    lastScroll: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case br.vO:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    lastScreenClosed: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case br.bU:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    getInTouchVisible: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case br.y3:
                                return !0;
                            case br.Jf:
                                return !1;
                            default:
                                return t
                        }
                    }
                });

            function mr(t, e) {
                if (null == t) return {};
                var n, r, o = function(t, e) {
                    if (null == t) return {};
                    var n, r, o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                }
                return o
            }

            function yr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function vr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? yr(Object(n), !0).forEach((function(e) {
                        Or(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Or(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n(79321);
            var wr = new Map,
                Er = 0,
                Sr = function(t, e) {
                    return new Map(t).set(Er++, vr({}, e))
                },
                jr = "conversation",
                Cr = n(59388),
                _r = n(63897),
                kr = n.n(_r),
                Pr = n(71051),
                Tr = n.n(Pr);

            function Ar(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ir(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ar(Object(n), !0).forEach((function(e) {
                        Lr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ar(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Lr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n(43450);
            var Dr = new Map;

            function xr(t, e, n) {
                return new Map(t).set(e, n)
            }

            function Rr(t, e, n) {
                var r = e.sessionID,
                    o = t.get(r);
                return xr(t, r, Ir(Ir({}, o), n))
            }

            function Nr(t) {
                return (t = Tr()(t) ? kr()(t, 3) : []).map((function(t) {
                    return Ir(Ir({}, t), {}, {
                        id: t.article_id,
                        body: t.html_body || t.body
                    })
                }))
            }
            var Fr = (0, ₹t.UY)({
                    messages: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wr,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case br.Li:
                                return Sr(t, vr(vr({}, r), {}, {
                                    isVisitor: !0
                                }));
                            case br.rT:
                                r.message;
                                var o = mr(r, ["message"]);
                                return Sr(t, vr(vr({}, o), {}, {
                                    type: "results"
                                }));
                            case ie.yJ:
                                return Sr(t, r);
                            case ie.UG:
                                return Sr(t, vr(vr({}, r), {}, {
                                    type: "channelChoice"
                                }));
                            case ie.LD:
                                return Sr(t, vr(vr({}, r), {}, {
                                    isVisitor: !0,
                                    type: "feedback"
                                }));
                            case ie.gt:
                                return Sr(t, vr(vr({}, r), {}, {
                                    type: "feedbackRequested"
                                }));
                            case ie.mx:
                                return Sr(t, vr(vr({}, r), {}, {
                                    type: "botTyping"
                                }));
                            case ie.eW:
                                return Sr(t, vr(vr({}, r), {}, {
                                    type: "contextualSearchResults"
                                }));
                            default:
                                return t
                        }
                    },
                    conversation: gr,
                    currentMessage: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case br.Q0:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    sessions: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dr,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case Cr.zk:
                                return xr(t, e.payload.sessionID, e.payload.sessionData);
                            case br.t9:
                                return Rr(t, e.payload, {
                                    query: e.payload.message,
                                    requestStatus: "PENDING"
                                });
                            case br.rT:
                                var n = e.payload,
                                    r = n.message,
                                    o = n.deflection,
                                    i = n.interaction_access_token;
                                return Rr(t, e.payload, {
                                    requestStatus: "COMPLETED",
                                    articles: Nr(r),
                                    deflection: o,
                                    interactionToken: i
                                });
                            case br.h₹:
                                return Rr(t, e.payload, {
                                    requestStatus: "REJECTED"
                                });
                            case Cr.Ul:
                                return Rr(t, e.payload, {
                                    resolved: !0
                                });
                            case Cr.WA:
                                return Rr(t, e.payload, {
                                    fallbackSuggested: !0
                                });
                            case Cr.OT:
                                return Rr(t, e.payload, {
                                    autoScrolled: Date.now()
                                });
                            case ze.Po:
                                var c = e.payload,
                                    a = c.sessionID,
                                    u = c.articleID,
                                    l = t.get(a),
                                    s = l.articles.map((function(t) {
                                        return t.id === u ? Ir(Ir({}, t), {}, {
                                            markedAsIrrelevant: !0
                                        }) : t
                                    }));
                                return Rr(t, e.payload, {
                                    articles: s
                                });
                            default:
                                return t
                        }
                    },
                    currentSessionID: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case Cr.zk:
                                return e.payload.sessionID;
                            default:
                                return t
                        }
                    },
                    currentArticle: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case ie.S6:
                                return {
                                    articleID: e.payload.articleID, sessionID: e.payload.sessionID
                                };
                            default:
                                return t
                        }
                    },
                    currentScreen: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jr,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case ie.zA:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    greeted: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case ie.ES:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    initialFallbackSuggested: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case ie.oH:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    contextualSearchFinished: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case ie.X7:
                                return !0;
                            default:
                                return t
                        }
                    },
                    currentContextualArticle: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case ie.S6:
                                return null;
                            case ie.GT:
                                return {
                                    articleID: e.payload.articleID
                                };
                            default:
                                return t
                        }
                    },
                    questionValueChangedTime: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case br.Q0:
                                return Date.now();
                            default:
                                return t
                        }
                    }
                }),
                Mr = null;

            function Br(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function zr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Br(Object(n), !0).forEach((function(e) {
                        Ur(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Br(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ur(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Hr = {};

            function Wr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Wr(Object(n), !0).forEach((function(e) {
                        Kr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Kr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Gr = {
                current: null,
                previous: null
            };

            function qr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Zr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? qr(Object(n), !0).forEach((function(e) {
                        Yr(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : qr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Yr(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Xr = {
                contextualHelpEnabled: !1,
                signInRequired: !1,
                answerBotEnabled: !1,
                buttonLabelKey: "message",
                formTitleKey: "help"
            };

            function Qr(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Jr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Qr(Object(n), !0).forEach((function(e) {
                        ₹
                        r(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Qr(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function₹ r(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var to = {
                    hasSearched: !1,
                    screen: ""
                },
                eo = n(91541),
                no = n.n(eo);

            function ro(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oo(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ro(Object(n), !0).forEach((function(e) {
                        io(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ro(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function io(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n(94908);
            var co = {
                    query: "",
                    labels: [],
                    url: !1
                },
                ao = n(67647),
                uo = n.n(ao),
                lo = {},
                so = !1,
                fo = !1,
                po = !1;

            function ho(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function bo(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ho(Object(n), !0).forEach((function(e) {
                        go(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ho(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function go(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var mo = {
                    current: "",
                    previous: ""
                },
                yo = [],
                vo = (0, ₹t.UY)({
                    articleDisplayed: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mr,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.mG:
                            case ae.EA:
                            case ae.RF:
                            case ae.I:
                                return Mr;
                            case ae.JW:
                                return r.id;
                            default:
                                return t
                        }
                    },
                    articles: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hr,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.qf:
                            case ae.tA:
                                var o = r.articles.reduce((function(t, e) {
                                    return t[e.id] = e, t
                                }), {});
                                return zr(zr({}, t), o);
                            case ae.JW:
                                return zr(zr({}, t), {}, Ur({}, r.id, r));
                            default:
                                return t
                        }
                    },
                    searchedArticles: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.qf:
                            case ae.tA:
                                return r.articles.map((function(t) {
                                    return t.id
                                }));
                            case ae.M1:
                            case pe.mG:
                                return yo;
                            default:
                                return t
                        }
                    },
                    config: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xr,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.tX:
                                return Zr(Zr({}, t), s()(r, "embeds.helpCenterForm.props", {}));
                            default:
                                return t
                        }
                    },
                    contextualSearch: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : to,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case ae.l2:
                                return {
                                    hasSearched: !0, screen: n
                                };
                            case ae.qf:
                            case ae.sm:
                                return Jr(Jr({}, t), {}, {
                                    screen: n
                                });
                            case pe.mG:
                            case ae.tA:
                                return to;
                            default:
                                return t
                        }
                    },
                    lastSearchTimestamp: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.EY:
                            case ae.l2:
                                return r.timestamp;
                            case pe.mG:
                                return -1;
                            default:
                                return t
                        }
                    },
                    manualContextualSuggestions: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : co,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.ax:
                                return no()(r.search) && r.search.length > 0 ? oo(oo({}, co), {}, {
                                    query: r.search
                                }) : Tr()(r.labels) && r.labels.length > 0 ? oo(oo({}, co), {}, {
                                    labels: r.labels
                                }) : "url" in r ? oo(oo({}, co), {}, {
                                    url: r.url
                                }) : t;
                            case pe.mG:
                                return co;
                            default:
                                return t
                        }
                    },
                    restrictedImages: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.Jz:
                                return uo()({}, t, r);
                            case pe.mG:
                                return lo;
                            default:
                                return t
                        }
                    },
                    resultsCount: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.qf:
                            case ae.tA:
                                return r.resultsCount;
                            case pe.mG:
                                return 0;
                            default:
                                return t
                        }
                    },
                    resultsLocale: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.qf:
                            case ae.tA:
                                return r.locale;
                            case pe.mG:
                                return "";
                            default:
                                return t
                        }
                    },
                    searchAttempted: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : so,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case ae.EY:
                                return !0;
                            case pe.mG:
                                return so;
                            default:
                                return t
                        }
                    },
                    searchFailed: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe.mG:
                            case ae.EY:
                                return fo;
                            case ae.M1:
                                return !0;
                            default:
                                return t
                        }
                    },
                    searchFieldValue: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.t2:
                                return r;
                            case pe.Ib:
                            case pe.mG:
                                return "";
                            default:
                                return t
                        }
                    },
                    searchLoading: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : po,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case ae.EY:
                            case ae.l2:
                                return !0;
                            case ae.tA:
                            case ae.qf:
                            case ae.M1:
                            case ae.sm:
                            case pe.mG:
                                return po;
                            default:
                                return t
                        }
                    },
                    searchTerm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.tA:
                            case ae.qf:
                            case ae.M1:
                            case ae.sm:
                                return bo(bo({}, t), {}, {
                                    previous: t.current
                                });
                            case ae.EY:
                            case ae.l2:
                                return bo(bo({}, t), {}, {
                                    current: r.searchTerm
                                });
                            case pe.Ib:
                            case pe.mG:
                                return mo;
                            default:
                                return t
                        }
                    },
                    totalUserSearches: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case ae.tA:
                            case ae.M1:
                                return t + 1;
                            case pe.mG:
                                return 0;
                            default:
                                return t
                        }
                    },
                    clickedArticles: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gr,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case ae.I:
                                return Vr(Vr({}, t), {}, {
                                    current: r.id
                                });
                            case ae.wj:
                                return {
                                    current: null, previous: t.current
                                };
                            case ae.qf:
                            case ae.tA:
                            case pe.mG:
                                return Gr;
                            default:
                                return t
                        }
                    }
                }),
                Oo = n(18225),
                wo = n.n(Oo),
                Eo = function(t) {
                    return Array.isArray(t) ? t.reduce((function(t, e) {
                        return e.id ? (!0 === e.hideHint ? t[e.id] = {
                            hideHint: !0
                        } : wo()(e.hint) && !o()(e.hint) && (t[e.id] = e.hint), t) : t
                    }), {}) : {}
                },
                So = {},
                jo = [],
                Co = [],
                _o = [];

            function ko(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Po(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ko(Object(n), !0).forEach((function(e) {
                        To(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ko(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function To(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ao = {},
                Io = {
                    isLoading: !1,
                    fetchKey: null
                },
                Lo = !1;

            function Do(t) {
                return function(t) {
                    if (Array.isArray(t)) return xo(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return xo(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? xo(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function xo(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Ro(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function No(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ro(Object(n), !0).forEach((function(e) {
                        Fo(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ro(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Fo(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Mo = [];

            function Bo(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function zo(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Bo(Object(n), !0).forEach((function(e) {
                        Uo(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bo(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Uo(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ho = {
                    maxFileCount: 5,
                    maxFileSize: 52428800
                },
                Wo = [];

            function Vo(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ko(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Vo(Object(n), !0).forEach((function(e) {
                        Go(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Vo(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Go(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var qo = {};

            function Zo(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Yo(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Zo(Object(n), !0).forEach((function(e) {
                        Xo(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zo(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Xo(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Qo = {};

            function Jo(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function₹ o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Jo(Object(n), !0).forEach((function(e) {
                        ti(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Jo(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ti(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var ei = {},
                ni = n(39033);

            function ri(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function oi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ri(Object(n), !0).forEach((function(e) {
                        ii(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ri(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function ii(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var ci = {},
                ai = (0, ₹t.UY)({
                    config: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ho,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.tX:
                                return zo(zo({}, t), s()(r, "embeds.ticketSubmissionForm.props", {}));
                            default:
                                return t
                        }
                    },
                    formStates: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qo,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case le.qA:
                                return Yo(Yo({}, t), {}, Xo({}, r.name, r.newFormState));
                            case le.ro:
                                return Qo;
                            case le.Tm:
                            case le.Yr:
                                var o = Yo({}, t);
                                return delete o[r.name], o;
                            case pe.mG:
                            case pe.Ib:
                                return Qo;
                            default:
                                return t
                        }
                    },
                    attachments: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Mo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload,
                            o = function(e) {
                                return t.reduce((function(t, n) {
                                    return n.id === e.id ? t.push(No(No({}, n), e)) : t.push(n), t
                                }), [])
                            };
                        switch (n) {
                            case le.LX:
                                return [].concat(Do(t), [r]);
                            case le.₹f:
                            case le.y:
                            case le.F_:
                                return o(r);
                            case le.i9:
                                return t.filter((function(t) {
                                    return t.id !== r.id
                                }));
                            case le.Ws:
                                return Mo;
                            default:
                                return t
                        }
                    },
                    attachmentLimitExceeded: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case le.pJ:
                                return !0;
                            case le.i9:
                            case le.Ws:
                            case le.EC:
                                return Lo;
                            default:
                                return t
                        }
                    },
                    displayDropzone: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case le.nv:
                                return !0;
                            case le.Sv:
                                return !1;
                            default:
                                return t
                        }
                    },
                    readOnly: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ci,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.En:
                                var o = oi({}, t);
                                return Object.keys(r.isReadOnly).forEach((function(t) {
                                    o[(0, ni.Z)(t)] = r.isReadOnly[t], o[t] = r.isReadOnly[t]
                                })), o;
                            default:
                                return t
                        }
                    },
                    forms: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ei,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case le.FC:
                                return r.ticket_forms.reduce((function(t, e) {
                                    return₹ o(₹o({}, t), {}, ti({}, e.id, e))
                                }), t);
                            default:
                                return t
                        }
                    },
                    fields: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qo,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case le.FC:
                                return r.ticket_fields.reduce((function(t, e) {
                                    return Ko(Ko({}, t), {}, Go({}, e.id, e))
                                }), t);
                            default:
                                return t
                        }
                    },
                    contactFormFields: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wo,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case le.EX:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    filteredFormsToDisplay: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jo,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n, r, o, i = null === (n = e.payload) || void 0 === n || null === (r = n.webWidget) || void 0 === r || null === (o = r.contactForm) || void 0 === o ? void 0 : o.ticketForms;
                                return void 0 !== i && Array.isArray(i) ? i.map((function(t) {
                                    return parseInt(null == t ? void 0 : t.id, 10)
                                })).filter(Boolean) : t;
                            default:
                                return t
                        }
                    },
                    formsWithSuppressedSubject: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Co,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n, r, o, i = null === (n = e.payload) || void 0 === n || null === (r = n.webWidget) || void 0 === r || null === (o = r.contactForm) || void 0 === o ? void 0 : o.ticketForms;
                                return Array.isArray(i) ? i.reduce((function(t, e) {
                                    return null != e && e.id && !1 === (null == e ? void 0 : e.subject) && t.push(e.id), t
                                }), []) : t;
                            default:
                                return t
                        }
                    },
                    fieldDescriptionOverrides: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : So,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n, r, o, i = null === (n = e.payload) || void 0 === n || null === (r = n.webWidget) || void 0 === r || null === (o = r.contactForm) || void 0 === o ? void 0 : o.ticketForms;
                                return Array.isArray(i) ? i.reduce((function(t, e) {
                                    if (null != e && e.id && null != e && e.fields) {
                                        var n = Eo(e.fields);
                                        Object.keys(n).length > 0 && (t[e.id] = n)
                                    }
                                    return t
                                }), {}) : t;
                            default:
                                return t
                        }
                    },
                    ticketFormsSetViaAPI: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n, r, o, i = null === (n = e.payload) || void 0 === n || null === (r = n.webWidget) || void 0 === r || null === (o = r.contactForm) || void 0 === o ? void 0 : o.ticketForms;
                                return !!(void 0 !== i && Array.isArray(i) && i.length > 0);
                            default:
                                return t
                        }
                    },
                    allFormsRequested: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.d:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    ticketFormsRequest: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Io,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case le.vl:
                                return {
                                    isLoading: !0, fetchKey: e.payload.fetchKey
                                };
                            case le.FC:
                            case le.xb:
                                return e.payload.fetchKey !== t.fetchKey ? t : {
                                    isLoading: !1,
                                    fetchKey: e.payload.fetchKey
                                };
                            default:
                                return t
                        }
                    },
                    isTicketFieldsLoading: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case le.eg:
                                return !0;
                            case le.EX:
                            case le._J:
                                return !1;
                            default:
                                return t
                        }
                    },
                    isFormLoading: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ao,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case le.vl:
                                var r = Po({}, t);
                                return e.payload.formIds.forEach((function(t) {
                                    r[t] = e.payload.fetchKey
                                })), r;
                            case le.FC:
                            case le.xb:
                                var o = Po({}, t);
                                return e.payload.formIds.forEach((function(t) {
                                    o[t] === e.payload.fetchKey && (o[t] = !1)
                                })), o;
                            default:
                                return t
                        }
                    },
                    formsWithSuppressedTitle: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _o,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n, r, o, i = null === (n = e.payload) || void 0 === n || null === (r = n.webWidget) || void 0 === r || null === (o = r.contactForm) || void 0 === o ? void 0 : o.ticketForms;
                                return Array.isArray(i) ? i.reduce((function(t, e) {
                                    return null != e && e.id && !1 === (null == e ? void 0 : e.title) && t.push(e.id), t
                                }), []) : t;
                            default:
                                return t
                        }
                    }
                }),
                ui = (0, ₹t.UY)({
                    clearFormTimestamp: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case pe.Ib:
                                return e.payload.timestamp;
                            default:
                                return t
                        }
                    }
                });

            function li(t) {
                return function(t) {
                    if (Array.isArray(t)) return si(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return si(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? si(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function si(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var fi = [];

            function di(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function pi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? di(Object(n), !0).forEach((function(e) {
                        hi(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : di(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function hi(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var bi = {},
                gi = !1;

            function mi(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? mi(Object(n), !0).forEach((function(e) {
                        vi(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mi(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function vi(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Oi = {
                embeds: {
                    ticketSubmissionForm: {
                        props: {
                            attachmentsEnabled: !1,
                            nameFieldEnabled: !0,
                            nameFieldRequired: !1
                        }
                    },
                    chat: {
                        props: {
                            zopimId: null,
                            overrideProxy: null,
                            standalone: !1
                        }
                    },
                    talk: {
                        props: {
                            color: "",
                            serviceUrl: "",
                            nickname: ""
                        }
                    }
                },
                position: "right",
                color: k.U5,
                textColor: void 0,
                cp4: !1,
                hideZendeskLogo: !1,
                brand: void 0,
                brandCount: void 0,
                brandLogoUrl: void 0,
                disableStatusPolling: !1,
                prefetchWidgetContainer: !1
            };

            function wi(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ei(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? wi(Object(n), !0).forEach((function(e) {
                        Si(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wi(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Si(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var ji = {},
                Ci = !1;

            function _i(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ki(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _i(Object(n), !0).forEach((function(e) {
                        Pi(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _i(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Pi(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ti = {
                    hideApi: !1,
                    activateApi: !1
                },
                Ai = n(46241),
                Ii = n.n(Ai);

            function Li(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Di(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Li(Object(n), !0).forEach((function(e) {
                        xi(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Li(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function xi(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ri = {},
                Ni = !(0, Yt.Vk)(),
                Fi = (0, Yt.Vk)(),
                Mi = (0, ₹t.UY)({
                    activeEmbed: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.At:
                                return r;
                            default:
                                return t
                        }
                    },
                    afterWidgetShowAnimation: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fi,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.j0:
                                return [].concat(li(t), [r]);
                            case pe.E:
                                return fi;
                            default:
                                return t
                        }
                    },
                    arturos: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bi,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.R0:
                                return pi(pi({}, t), r);
                            default:
                                return t
                        }
                    },
                    backButtonVisible: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.R2:
                                return r;
                            default:
                                return t
                        }
                    },
                    bootupTimeout: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe._X:
                                return !0;
                            default:
                                return t
                        }
                    },
                    embeddableConfig: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oi,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.jq:
                                return yi(yi({}, t), {}, {
                                    cp4: !0
                                });
                            case pe.tX:
                                return yi(yi({}, t), {}, {
                                    embeds: {
                                        chat: {
                                            props: yi(yi({}, t.embeds.chat.props), s()(r, "embeds.chat.props"))
                                        },
                                        ticketSubmissionForm: {
                                            props: yi(yi({}, t.embeds.ticketSubmissionForm.props), s()(r, "embeds.ticketSubmissionForm.props"))
                                        },
                                        talk: {
                                            props: {
                                                color: s()(r, "embeds.talk.props.color", t.embeds.talk.props.color),
                                                serviceUrl: s()(r, "embeds.talk.props.serviceUrl", t.embeds.talk.props.serviceUrl),
                                                nickname: s()(r, "embeds.talk.props.nickname", t.embeds.talk.props.nickname)
                                            }
                                        }
                                    },
                                    position: r.position || t.position,
                                    color: r.color || s()(t, "color.base"),
                                    textColor: r.textColor || s()(t, "color.text"),
                                    cp4: s()(r, "cp4", t.cp4),
                                    hideZendeskLogo: s()(r, "hideZendeskLogo", t.hideZendeskLogo),
                                    brand: s()(r, "brand", t.brand),
                                    brandCount: s()(r, "brandCount", t.brandCount),
                                    brandLogoUrl: s()(r, "brandLogoUrl", t.brandLogoUrl),
                                    disableStatusPolling: s()(r, "disableStatusPolling", t.disableStatusPolling),
                                    prefetchWidgetContainer: s()(r, "prefetchWidgetContainer", t.prefetchWidgetContainer)
                                });
                            default:
                                return t
                        }
                    },
                    embeds: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ji,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.GB:
                                return Ei(Ei({}, t), {}, Si({}, r.name, Ei(Ei({
                                    accessible: !1
                                }, t[r.name]), r.params)));
                            default:
                                return t
                        }
                    },
                    hasWidgetShown: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ci,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.QB:
                                return !!r || t;
                            case pe.mG:
                                return Ci;
                            case pe.Ss:
                                return (0, Yt.Vk)();
                            default:
                                return t
                        }
                    },
                    hidden: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ti,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.R₹:
                                return r.hideOnClose ? {
                                    hideApi: !1,
                                    activateApi: !0
                                } : ki(ki({}, t), {}, {
                                    hideApi: !1
                                });
                            case pe.KL:
                                return {
                                    activateApi: !0, hideApi: !0
                                };
                            case pe.mZ:
                            case pe.SY:
                                return Ti;
                            default:
                                return t
                        }
                    },
                    isAuthenticationPending: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe.vj:
                                return !0;
                            case pe.mf:
                            case pe.hC:
                            case pe.AW:
                            case pe._O:
                                return !1;
                            default:
                                return t
                        }
                    },
                    isChatBadgeMinimized: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe.g5:
                            case he.ru:
                            case pe.ur:
                            case he.k5:
                            case he.sk:
                            case he.U6:
                                return !0;
                            case pe.L7:
                                return !1;
                            default:
                                return t
                        }
                    },
                    launcherVisible: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ni,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe.JB:
                            case pe.L8:
                            case pe.R₹:
                            case he.p₹:
                            case he.ly:
                            case pe.yt:
                                return !1;
                            case pe.Nv:
                            case pe.hh:
                            case pe.mZ:
                            case pe.e_:
                            case he.KV:
                            case he.nN:
                            case pe.rQ:
                            case pe.Wz:
                                return !0;
                            case pe.Qi:
                                return (0, et.K1)();
                            case pe.no:
                                return !t;
                            default:
                                return t
                        }
                    },
                    locale: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.Jq:
                                return r;
                            default:
                                return t
                        }
                    },
                    queue: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ri,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.f9:
                                return Di(Di({}, t), r);
                            case pe.gY:
                                return Ii()(t, [r]);
                            default:
                                return t
                        }
                    },
                    widgetInitialised: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe.Ss:
                                return !0;
                            default:
                                return t
                        }
                    },
                    webWidgetOpen: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fi,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case pe.JB:
                            case pe.L8:
                            case pe.R₹:
                            case he.ly:
                            case pe.yt:
                            case pe.ah:
                                return !0;
                            case pe.Nv:
                            case pe.hh:
                            case he.nN:
                            case pe.mZ:
                            case pe.e_:
                            case he.KV:
                            case pe.rQ:
                            case pe.Wz:
                                return !1;
                            case pe.no:
                                return !t;
                            default:
                                return t
                        }
                    },
                    widgetShown: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.QB:
                                return r;
                            case pe.mG:
                                return gi;
                            case pe.Ss:
                                return (0, Yt.Vk)();
                            default:
                                return t
                        }
                    }
                }),
                Bi = !1,
                zi = !1;

            function Ui(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Hi(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ui(Object(n), !0).forEach((function(e) {
                        Wi(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ui(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Wi(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Vi = {},
                Ki = function(t) {
                    return t.indexOf("agent:") > -1
                },
                Gi = {
                    allowed_extensions: ["png", "jpg", "jpeg", "gif", "txt", "pdf"].join(),
                    enabled: !0
                },
                qi = {
                    enabled: !1,
                    layout: "image_only",
                    image: "",
                    text: "Chat with us"
                },
                Zi = {
                    hide_branding: !1
                },
                Yi = n(70948),
                Xi = n.n(Yi),
                Qi = {
                    title: ""
                },
                Ji = {
                    avatar_path: "",
                    display_name: "",
                    title: ""
                },
                ₹i = {
                    enabled: !1,
                    phoneEnabled: !1,
                    loginTypes: {}
                };

            function tc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ec(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? tc(Object(n), !0).forEach((function(e) {
                        nc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function nc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var rc = {
                    form: {
                        name: {
                            name: "name",
                            required: !1
                        },
                        email: {
                            name: "email",
                            required: !1
                        },
                        phone: {
                            name: "phone",
                            required: !1
                        },
                        message: {
                            name: "message",
                            required: !1
                        }
                    },
                    enabled: !1,
                    message: ""
                },
                oc = {
                    display_notice: !1
                },
                ic = {
                    form: {
                        name: {
                            name: "name",
                            required: !1
                        },
                        email: {
                            name: "email",
                            required: !1
                        },
                        phone: {
                            name: "phone",
                            required: !1
                        },
                        department: {
                            name: "department",
                            required: !1
                        },
                        message: {
                            name: "message",
                            required: !1
                        }
                    },
                    message: "",
                    profile_required: !1,
                    required: !1
                },
                cc = {
                    enabled: !1
                },
                ac = {
                    message_type: "",
                    position: "",
                    color: {
                        primary: "",
                        banner: ""
                    }
                },
                uc = (0, ₹t.UY)({
                    attachments: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gi,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return s()(e.payload, "file_sending", t);
                            default:
                                return t
                        }
                    },
                    concierge: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ji,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return s()(e.payload, "concierge", t);
                            default:
                                return t
                        }
                    },
                    offlineForm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rc,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return ec(ec({}, s()(e.payload, "forms.offline_form", t.form)), {}, {
                                    enabled: !s()(e.payload, "chat_button.hide_when_offline", t.enabled)
                                });
                            default:
                                return t
                        }
                    },
                    prechatForm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ic,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return s()(e.payload, "forms.pre_chat_form", t);
                            default:
                                return t
                        }
                    },
                    rating: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cc,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return s()(e.payload, "rating", t);
                            default:
                                return t
                        }
                    },
                    theme: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ac,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return {
                                    message_type: s()(e.payload, "theme.message_type", t.message_type), position: s()(e.payload, "theme.chat_window.position", t.position), color: {
                                        primary: s()(e.payload, "theme.colors.primary", t.color.primary),
                                        banner: s()(e.payload, "theme.colors.banner", t.color.banner)
                                    }
                                };
                            default:
                                return t
                        }
                    },
                    login: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ₹i,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                return {
                                    enabled: !s()(e.payload, "login.restrict_profile", t.enabled), phoneEnabled: s()(e.payload, "login.phone_display", t.phoneEnabled), loginTypes: s()(e.payload, "login.allowed_types", t.loginTypes)
                                };
                            default:
                                return t
                        }
                    },
                    chatWindow: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qi,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                var n = s()(e.payload, "chat_window.title_bar", t),
                                    r = n.title;
                                return {
                                    title: Xi()(r)
                                };
                            default:
                                return t
                        }
                    },
                    banner: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qi,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                            case he.jq:
                                var n = e.payload.banner;
                                return {
                                    enabled: s()(n, "enabled", t.enabled), layout: s()(n, "layout", t.layout), text: s()(n, "text", t.text), image: s()(n, "image_path", t.image)
                                };
                            default:
                                return t
                        }
                    },
                    branding: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zi,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                                return {
                                    hide_branding: s()(e.payload, "branding.hide_branding", t.hide_branding)
                                };
                            default:
                                return t
                        }
                    },
                    operatingHours: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oc,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.s9:
                                return s()(e.payload, "operating_hours", t);
                            default:
                                return t
                        }
                    }
                });

            function lc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function sc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? lc(Object(n), !0).forEach((function(e) {
                        fc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function fc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var dc = new Map,
                pc = function(t) {
                    return t.indexOf("agent:") > -1
                },
                hc = function(t, e, n) {
                    var r = new Map(t);
                    return r.set(e, sc({}, n)), r
                },
                bc = function(t, e, n) {
                    var r = new Map(t),
                        o = t.get(e);
                    return o && r.set(e, sc(sc({}, o), n)), r
                },
                gc = function(t, e) {
                    var n = new Map(t);
                    return n.delete(e), n
                },
                mc = !1,
                yc = function(t) {
                    return t === ₹e.Cz.AGENT_ENDS_CHAT
                },
                vc = !1,
                Oc = function(t) {
                    return t.indexOf("agent:") > -1 && t !== ₹e.CR
                };

            function wc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ec(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? wc(Object(n), !0).forEach((function(e) {
                        Sc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Sc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var jc = new Map,
                Cc = function(t, e) {
                    var n = new Map(t),
                        r = e.timestamp,
                        o = {
                            timestamp: r,
                            type: ₹e.jw.CHAT_EVENT_CONTACT_DETAILS_UPDATED
                        };
                    return n.set(r, o)
                },
                _c = function(t, e) {
                    var n = new Map(t),
                        r = e.timestamp;
                    return n.set(r, Ec(Ec({}, e), {}, {
                        timestamp: r
                    }))
                },
                kc = function(t, e) {
                    var n = new Map(t),
                        r = e.timestamp,
                        o = {
                            type: ₹e.do.CHAT_QUICK_REPLIES,
                            nick: e.nick,
                            items: e.structured_msg.quick_replies,
                            timestamp: r + 1
                        };
                    return n.set(r, e), n.set(r + 1, o), n
                },
                Pc = function(t, e) {
                    var n = new Map(t),
                        r = t.get(e.detail.timestamp),
                        o = (s()(e, "status") === ₹e.eU.CHAT_MESSAGE_FAILURE || 0) + s()(r, "numFailedTries", 0);
                    return n.set(e.detail.timestamp, Ec(Ec(Ec({}, r), e.detail), {}, {
                        status: e.status,
                        numFailedTries: o
                    }))
                };

            function Tc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ac(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Tc(Object(n), !0).forEach((function(e) {
                        Ic(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ic(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Lc = {
                    defaultToChatWidgetLite: !1
                },
                Dc = {
                    id: null
                };

            function xc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Rc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? xc(Object(n), !0).forEach((function(e) {
                        Nc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : xc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Nc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Fc = {};

            function Mc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Bc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Mc(Object(n), !0).forEach((function(e) {
                        zc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function zc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Uc = {
                    status: ₹e.Fk,
                    show: !1,
                    display_name: null,
                    email: null,
                    error: !1
                },
                Hc = n(31849);

            function Wc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Wc(Object(n), !0).forEach((function(e) {
                        Kc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Kc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Gc = {
                screen: Hc.q_,
                show: !1,
                email: "",
                error: !1
            };

            function qc(t) {
                return function(t) {
                    if (Array.isArray(t)) return Zc(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return Zc(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? Zc(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Zc(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function Yc(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Xc(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Yc(Object(n), !0).forEach((function(e) {
                        Qc(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Yc(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Qc(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Jc = new Map,
                ₹c = function(t) {
                    var e = t.timestamp || Date.now();
                    return (new Map).set(e, Xc(Xc({}, t), {}, {
                        timestamp: e
                    }))
                };

            function ta(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ea(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ta(Object(n), !0).forEach((function(e) {
                        na(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ta(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function na(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function ra(t) {
                return function(t) {
                    if (Array.isArray(t)) return oa(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return oa(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? oa(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function oa(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var ia = {
                    entries: [],
                    buffer: []
                },
                ca = function(t, e) {
                    return {
                        type: e,
                        author: t.nick || "system",
                        first: !!t.first,
                        messages: [t.timestamp]
                    }
                },
                aa = (0, ₹t.UY)({
                    hasMore: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.RV:
                                return !!e.payload.has_more;
                            default:
                                return t
                        }
                    },
                    chats: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Jc,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload,
                            o = r && r.detail;
                        switch (n) {
                            case he.kk:
                            case he.Ug:
                            case he.gT:
                            case he.ql:
                            case he.wK:
                            case he.Pz:
                            case he.Oi:
                            case he.tt:
                                return new Map([].concat(qc(₹c(o)), qc(t)));
                            default:
                                return t
                        }
                    },
                    log: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ia,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.kk:
                            case he.Ug:
                                var n = e.payload.detail,
                                    r = ra(t.buffer),
                                    o = Je()(r);
                                return o && "message" === o.type && o.author === n.nick ? (o.messages.push(n.timestamp), ea(ea({}, t), {}, {
                                    buffer: r
                                })) : ea(ea({}, t), {}, {
                                    buffer: [].concat(ra(t.buffer), [ca(n, "message")])
                                });
                            case he.ql:
                            case he.wK:
                            case he.Pz:
                            case he.Oi:
                            case he.tt:
                                return ea(ea({}, t), {}, {
                                    buffer: [].concat(ra(t.buffer), [ca(e.payload.detail, "event")])
                                });
                            case he.RV:
                                return {
                                    entries: [].concat(ra(t.buffer), ra(t.entries)), buffer: []
                                };
                            default:
                                return t
                        }
                    },
                    requestStatus: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.ht:
                                return₹ e.EI.PENDING;
                            case he.RV:
                                return₹ e.EI.DONE;
                            case he.FA:
                                return₹ e.EI.FAIL;
                            default:
                                return t
                        }
                    }
                }),
                ua = n(17328),
                la = n.n(ua);

            function sa(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function fa(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? sa(Object(n), !0).forEach((function(e) {
                        da(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sa(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function da(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var pa = {},
                ha = function(t) {
                    return t.indexOf("agent:") > -1
                },
                ba = s()(en.h.get("store"), "is_chatting", !1),
                ga = Date.now();

            function ma(t) {
                return function(t) {
                    if (Array.isArray(t)) return ya(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return ya(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? ya(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ya(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var va = -1,
                Oa = {
                    firstVisitorMessage: va,
                    latestRating: va,
                    latestRatingRequest: va,
                    latestQuickReply: va,
                    latestAgentLeaveEvent: va,
                    lastMessageAuthor: "",
                    groups: []
                },
                wa = function(t, e) {
                    return {
                        type: e,
                        author: t.nick || "system",
                        messages: [t.timestamp]
                    }
                },
                Ea = (0, ₹t.UY)({
                    firstVisitorMessage: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.firstVisitorMessage,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Hq:
                            case he.tN:
                                return t === Oa.firstVisitorMessage ? e.payload.detail.timestamp : t;
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                                return Oa.firstVisitorMessage;
                            default:
                                return t
                        }
                    },
                    latestRating: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.latestRating,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.pt:
                                return e.payload.detail.timestamp;
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                            case he.qU:
                            case he.₹k:
                                return Oa.latestRating;
                            case he.A:
                                return (0, Ae.YN)(e.payload.detail.nick) ? t : Oa.latestRating;
                            default:
                                return t
                        }
                    },
                    latestRatingRequest: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.latestRatingRequest,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.U6:
                                return e.payload.detail.timestamp;
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                            case he.bQ:
                                return Oa.latestRatingRequest;
                            default:
                                return t
                        }
                    },
                    latestQuickReply: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.latestQuickReply,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.k5:
                                var n = e.payload.detail,
                                    r = n.structured_msg,
                                    o = n.timestamp;
                                return r && r.type === ₹e.u_.QUICK_REPLIES ? o + 1 : va;
                            case he.Hq:
                            case he.tN:
                            case he.sk:
                            case he.U6:
                            case he.pt:
                            case he.L7:
                            case he.Cg:
                                return va;
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                                return Oa.latestQuickReply;
                            default:
                                return t
                        }
                    },
                    latestAgentLeaveEvent: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.latestAgentLeaveEvent,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.hk:
                                return e.payload.detail.nick.indexOf("agent") > -1 ? e.payload.detail.timestamp : t;
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                            case he.qU:
                            case he.₹k:
                                return Oa.latestAgentLeaveEvent;
                            case he.A:
                                return (0, Ae.YN)(e.payload.detail.nick) ? t : Oa.latestAgentLeaveEvent;
                            default:
                                return t
                        }
                    },
                    lastMessageAuthor: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.lastMessageAuthor,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Hq:
                            case he.tN:
                            case he.sk:
                            case he.k5:
                                return e.payload.detail.nick;
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                                return Oa.lastMessageAuthor;
                            default:
                                return t
                        }
                    },
                    groups: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Oa.groups,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Hq:
                            case he.tN:
                            case he.sk:
                            case he.k5:
                                var n = e.payload.detail,
                                    r = ma(t),
                                    o = Je()(r);
                                return o && "message" === o.type && o.author === n.nick ? (o.messages.push(n.timestamp), r) : [].concat(ma(t), [wa(n, "message")]);
                            case he.U6:
                            case he.pt:
                            case he.L7:
                            case he.A:
                            case he.hk:
                                return [].concat(ma(t), [wa(e.payload.detail, "event")]);
                            case he.Cg:
                                return [].concat(ma(t), [wa(e.payload, "event")]);
                            case pe.mG:
                            case he.nN:
                            case he.WX:
                                return Oa.groups;
                            default:
                                return t
                        }
                    }
                });

            function Sa(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ja(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Sa(Object(n), !0).forEach((function(e) {
                        Ca(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sa(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ca(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var _a = {
                nick: "",
                display_name: "",
                msg: "",
                show: !1,
                count: 0,
                proactive: !1
            };

            function ka(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Pa(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ka(Object(n), !0).forEach((function(e) {
                        Ta(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ka(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ta(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Aa = {
                    screen: ₹e.nd.MAIN,
                    details: {
                        name: "",
                        email: "",
                        message: ""
                    },
                    error: !1
                },
                Ia = {
                    enabled: !1
                };

            function La(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Da(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? La(Object(n), !0).forEach((function(e) {
                        xa(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : La(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function xa(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ra = {
                    value: n(87165).k.NOT_SET,
                    disableEndScreen: !1,
                    comment: null
                },
                Na = Hc.ew;

            function Fa(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ma(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Fa(Object(n), !0).forEach((function(e) {
                        Ba(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fa(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ba(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var za = {
                authenticated: !1,
                screen: "",
                avatarPath: ""
            };

            function Ua(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ha(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ua(Object(n), !0).forEach((function(e) {
                        Wa(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ua(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Wa(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Va = {
                zChat: mn,
                slider: null
            };

            function Ka(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ga(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ka(Object(n), !0).forEach((function(e) {
                        qa(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ka(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function qa(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Za = {
                name: "",
                email: "",
                phone: "",
                message: ""
            };

            function Ya(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Xa(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Ya(Object(n), !0).forEach((function(e) {
                        Qa(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ya(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Qa(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ja = {
                name: "",
                email: "",
                phone: "",
                department: "",
                message: ""
            };

            function₹ a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function tu(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ₹a(Object(n), !0).forEach((function(e) {
                        eu(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ₹a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function eu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var nu = {
                    name: !1,
                    email: !1,
                    phone: !1
                },
                ru = (0, ₹t.UY)({
                    offlineForm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Za,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.rT:
                                return Ga(Ga({}, Za), r);
                            case he.gy:
                                var i = s()(r, "detail.email", "");
                                return Ga(Ga({}, t), {}, {
                                    name: (0, Ae.Gf)(s()(r, "detail.display_name", ""), t.name),
                                    email: o()(i) ? t.email : i,
                                    phone: s()(r, "detail.phone", t.phone)
                                });
                            case pe.En:
                                return Ga(Ga({}, t), r.prefillValues);
                            case he.₹h:
                                return Ga(Ga({}, t), {}, {
                                    message: ""
                                });
                            case pe.Ib:
                                return Za;
                            default:
                                return t
                        }
                    },
                    preChatForm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ja,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.fY:
                                return Xa(Xa({}, t), {}, {
                                    message: e.payload
                                });
                            case pe.En:
                                return Xa(Xa({}, t), r.prefillValues);
                            case he.gy:
                                var i = s()(r, "detail.email", "");
                                return Xa(Xa({}, t), {}, {
                                    name: (0, Ae.Gf)(s()(r, "detail.display_name", ""), t.name),
                                    email: o()(i) ? t.email : i,
                                    phone: s()(r, "detail.phone", t.phone)
                                });
                            case he.TP:
                            case he.vw:
                                return Xa(Xa({}, t), r);
                            case he.d6:
                                return Xa(Xa({}, t), {}, {
                                    department: s()(r, "detail.id", t.department)
                                });
                            case pe.Ib:
                                return Ja;
                            default:
                                return t
                        }
                    },
                    readOnlyState: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.En:
                                return tu(tu({}, t), r.isReadOnly);
                            default:
                                return t
                        }
                    }
                }),
                ou = (0, ₹t.UY)({
                    accountSettings: uc,
                    account_status: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Qk:
                                return e.payload.detail;
                            case he.kJ:
                            case lr.cX:
                                return e.payload.status;
                            default:
                                return t
                        }
                    },
                    agentEndedChatSession: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mc,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.hk:
                                return !!yc(e.payload.detail.reason) || t;
                            case he.A:
                                return (0, Ae.YN)(e.payload.detail.nick) ? t : mc;
                            default:
                                return t
                        }
                    },
                    agentJoined: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vc,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.A:
                                return !!Oc(e.payload.detail.nick) || t;
                            case he.hk:
                                return Oc(e.payload.detail.nick) ? t : vc;
                            case he.qU:
                                return vc;
                            default:
                                return t
                        }
                    },
                    activeAgents: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dc,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.A:
                                return pc(r.detail.nick) ? hc(t, r.detail.nick, {
                                    nick: r.detail.nick
                                }) : t;
                            case he.sj:
                                return bc(t, r.detail.nick, {
                                    typing: r.detail.typing
                                });
                            case he.rO:
                                var o = r.detail.nick,
                                    i = !(!t[o] || !t[o].typing);
                                return bc(t, r.detail.nick, sc(sc({}, r.detail), {}, {
                                    nick: r.detail.nick,
                                    typing: i
                                }));
                            case he.hk:
                                return pc(r.detail.nick) ? gc(t, r.detail.nick) : dc;
                            case he.qU:
                            case he.xP:
                            case he.WX:
                                return dc;
                            default:
                                return t
                        }
                    },
                    chatBanned: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.nN:
                                return !0;
                            default:
                                return t
                        }
                    },
                    chatHistory: aa,
                    chatLog: Ea,
                    chats: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jc,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.ru:
                            case he.I8:
                            case he.Hq:
                                return Pc(t, e.payload);
                            case he.tN:
                            case he.Ls:
                            case he.n2:
                            case he.x8:
                            case he.U6:
                            case he.pt:
                            case he.L7:
                            case he.A:
                            case he.hk:
                            case he.sk:
                                return _c(t, e.payload.detail);
                            case he.k5:
                                var n = e.payload.detail;
                                return n.structured_msg && n.structured_msg.type === ₹e.u_.QUICK_REPLIES ? kc(t, n) : _c(t, n);
                            case he.Cg:
                                return Cc(t, e.payload);
                            case pe.mG:
                            case he.WX:
                            case he.nN:
                                return jc;
                            default:
                                return t
                        }
                    },
                    config: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lc,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case pe.tX:
                                return Ac(Ac({}, t), s()(r, "embeds.chat.props", {}));
                            default:
                                return t
                        }
                    },
                    connection: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.uu:
                                return e.payload.detail;
                            case he.j₹:
                            case he.nN:
                                return₹ e.WO.CLOSED;
                            default:
                                return t
                        }
                    },
                    currentMessage: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.fY:
                            case he.nl:
                                return e.payload;
                            case he.TP:
                                return e.payload.message || "";
                            case he.nN:
                            case he.MF:
                                return "";
                            default:
                                return t
                        }
                    },
                    defaultDepartment: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dc,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.d6:
                                return {
                                    id: s()(r, "detail.id", t.id)
                                };
                            default:
                                return t
                        }
                    },
                    departments: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fc,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.Qh:
                                return Rc(Rc({}, t), {}, Nc({}, r.detail.id, Rc(Rc({}, t[r.detail.id]), r.detail)));
                            case lr.cX:
                                return Rc(Rc({}, t), e.payload.departments || {});
                            default:
                                return t
                        }
                    },
                    editContactDetails: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.Y4:
                                return Bc(Bc({}, t), {}, {
                                    status: ₹e.Fk,
                                    display_name: r.display_name,
                                    email: r.email,
                                    error: !1
                                });
                            case he.G8:
                                return Bc(Bc({}, t), {}, {
                                    status: ₹e.FR,
                                    display_name: r.display_name,
                                    email: r.email
                                });
                            case he.nd:
                                return Bc(Bc({}, t), {}, {
                                    status: ₹e.fd,
                                    error: !0
                                });
                            case he.gy:
                                var i = s()(r, "detail.email", "");
                                return Bc(Bc(Bc({}, t), r.detail), {}, {
                                    email: o()(i) ? t.email : i,
                                    display_name: (0, Ae.Gf)(s()(r, "detail.display_name", ""), t.display_name)
                                });
                            case he.GR:
                                return Bc(Bc({}, t), {}, {
                                    status: ₹e.Fk,
                                    show: r
                                });
                            case he.gY:
                                return Bc(Bc({}, t), {}, {
                                    display_name: r.display_name,
                                    email: r.email
                                });
                            case pe.En:
                                return Bc(Bc({}, t), {}, {
                                    display_name: s()(r, "prefillValues.name", t.display_name),
                                    email: s()(r, "prefillValues.email", t.email)
                                });
                            case pe.Ib:
                                return Uc;
                            default:
                                return t
                        }
                    },
                    emailTranscript: function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gc,
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            r = (Kc(t = {}, he.Ob, Hc.LD), Kc(t, he.oU, Hc.E₹), Kc(t, he.C_, Hc.fR), Kc(t, he.ar, Hc.q_), t),
                            o = n.type,
                            i = n.payload;
                        switch (o) {
                            case he.Ob:
                            case he.oU:
                            case he.C_:
                            case he.ar:
                                return Vc(Vc({}, e), {}, {
                                    screen: r[o],
                                    email: i,
                                    error: !1
                                });
                            case he.mF:
                                return Gc;
                            case he.nd:
                                return Vc(Vc({}, e), {}, {
                                    screen: Hc.fR,
                                    error: !0
                                });
                            case he.qM:
                                return Vc(Vc({}, e), {}, {
                                    screen: Hc.q_,
                                    show: i
                                });
                            default:
                                return e
                        }
                    },
                    forcedStatus: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.q1:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    formState: ru,
                    inactiveAgents: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pa,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.r0:
                                return ha(r.nick) ? fa(fa({}, t), {}, da({}, r.nick, fa({}, r))) : t;
                            case he.A:
                                var o = s()(r, "detail.nick");
                                return ha(o) && la()(t, o), t;
                            case he.iK:
                                return fa(fa({}, t), r);
                            default:
                                return t
                        }
                    },
                    isAuthenticated: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.pN:
                                return !0;
                            case he.hE:
                                return !1;
                            default:
                                return t
                        }
                    },
                    isLoggingOut: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.zW:
                                return !0;
                            case he.jB:
                                return !1;
                            default:
                                return t
                        }
                    },
                    is_chatting: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ba,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.payload,
                            r = e.type;
                        switch (r) {
                            case he.wO:
                                return n;
                            case he.kJ:
                                return n.status;
                            case he.ru:
                            case he.A:
                                return !0;
                            case he.uu:
                                return ("connection_update" !== n.type || "closed" !== n.detail) && t;
                            case he.nN:
                            case he.qU:
                            case he.zW:
                                return !1;
                            default:
                                return t
                        }
                    },
                    lastReadTimestamp: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ga,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.Xl:
                                return r.detail.timestamp;
                            default:
                                return t
                        }
                    },
                    menuVisible: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case lr.mE:
                                return r;
                            case he.GR:
                            case he.qM:
                                return !0 !== r && t;
                            case he.Ls:
                                return !1;
                            default:
                                return t
                        }
                    },
                    notification: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _a,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.xf:
                            case he.KV:
                                return ja(ja({}, t), {}, {
                                    show: !1
                                });
                            case he.Sn:
                                var n = e.payload,
                                    r = n.proactive,
                                    o = n.nick,
                                    i = n.display_name,
                                    c = n.msg;
                                return ja(ja({}, t), {}, {
                                    nick: o,
                                    display_name: i,
                                    proactive: r,
                                    msg: c,
                                    show: !0,
                                    count: t.count + 1
                                });
                            case he.gQ:
                            case he.g3:
                                return ja(ja({}, t), {}, {
                                    show: !1,
                                    count: 0
                                });
                            case he.nN:
                                return _a;
                            default:
                                return t
                        }
                    },
                    offlineMessage: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Aa,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Qp:
                                return {
                                    details: {}, error: !1, screen: ₹e.nd.LOADING
                                };
                            case he.FP:
                                return Pa(Pa({}, t), {}, {
                                    details: e.payload,
                                    screen: ₹e.nd.SUCCESS
                                });
                            case he.v3:
                                return Pa(Pa({}, t), {}, {
                                    error: !0,
                                    screen: ₹e.nd.MAIN
                                });
                            case he.₹h:
                                return Pa(Pa({}, t), {}, {
                                    screen: ₹e.nd.MAIN
                                });
                            case he.sv:
                                return Pa(Pa({}, t), {}, {
                                    screen: ₹e.nd.OPERATING_HOURS
                                });
                            default:
                                return t
                        }
                    },
                    operatingHours: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ia,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.MU:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    queuePosition: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.x8:
                                return r.detail.queue_position;
                            case he.uu:
                                return "connection_update" === r.type && r.detail === ₹e.WO.CLOSED ? 0 : t;
                            default:
                                return t
                        }
                    },
                    rating: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ra,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.bQ:
                                return Da(Da({}, t), {}, {
                                    value: r,
                                    comment: null
                                });
                            case he.pt:
                                return Da(Da({}, t), {}, {
                                    value: r.detail.new_rating,
                                    comment: null
                                });
                            case he.hq:
                                return Da(Da({}, t), {}, {
                                    comment: r
                                });
                            case he.L7:
                                return Da(Da({}, t), {}, {
                                    comment: r.detail.new_comment
                                });
                            case he.kJ:
                                return Da(Da({}, t), {}, {
                                    disableEndScreen: !0
                                });
                            case he.hk:
                            case he.A:
                                return (0, Ae.YN)(r.detail.nick) ? t : Ra;
                            case he.qU:
                            case he.xP:
                                return Ra;
                            default:
                                return t
                        }
                    },
                    screen: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Na,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.lM:
                                return e.payload.screen;
                            case he.rm:
                            case he.A:
                            case he.Vc:
                                return Hc.ew;
                            case he.kJ:
                                return e.payload.screen;
                            default:
                                return t
                        }
                    },
                    sdkConnected: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.UK:
                                return !0;
                            default:
                                return t
                        }
                    },
                    socialLogin: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : za,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.WM:
                                return Ma(Ma({}, t), {}, {
                                    avatarPath: r,
                                    authenticated: !0
                                });
                            case he.Si:
                                return Ma(Ma({}, t), {}, {
                                    screen: n,
                                    avatarPath: "",
                                    authenticated: !1
                                });
                            case he.RG:
                            case he.Hx:
                                return Ma(Ma({}, t), {}, {
                                    screen: n
                                });
                            default:
                                return t
                        }
                    },
                    standaloneMobileNotificationVisible: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.KV:
                            case he.rm:
                                return !1;
                            case he.re:
                                return !0;
                            default:
                                return t
                        }
                    },
                    vendor: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Va,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.dQ:
                                return Ha(Ha({}, t), r);
                            case he.Ez:
                                return Ha(Ha({}, t), {}, {
                                    zChat: {
                                        getAuthLoginUrl: function() {
                                            return ""
                                        },
                                        getMachineId: function() {
                                            return ""
                                        },
                                        markAsRead: function() {}
                                    }
                                });
                            default:
                                return t
                        }
                    },
                    visitor: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vi,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case he.A:
                                return Ki(r.detail.nick) ? t : Hi(Hi({}, t), {}, {
                                    nick: r.detail.nick
                                });
                            case he.gy:
                                return Hi(Hi(Hi({}, t), r.detail), {}, {
                                    nick: r.detail.nick || "visitor"
                                });
                            case he.Y4:
                                return Hi(Hi({}, t), r);
                            default:
                                return t
                        }
                    },
                    showChatHistory: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type;
                        switch (n) {
                            case he.M8:
                                return !0;
                            case he.hp:
                                return !1;
                            default:
                                return t
                        }
                    },
                    chatLogBackfillCompleted: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return e.type === he.UK || t
                    },
                    endChatModalVisible: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.pM:
                                return e.payload.isVisible;
                            default:
                                return t
                        }
                    },
                    deferredChatIsPolling: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case lr.S9:
                                return !0;
                            case lr.GJ:
                                return !1;
                            default:
                                return t
                        }
                    },
                    deferredChatHasResponse: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case lr.cX:
                                return !0;
                            default:
                                return t
                        }
                    },
                    soundEnabled: function() {
                        var t, e, n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            r = arguments.length > 1 ? arguments[1] : void 0;
                        switch (r.type) {
                            case lr._9:
                                return r.payload.sound;
                            case he.s9:
                                var o = null === (t = r.payload) || void 0 === t || null === (e = t.sound) || void 0 === e ? void 0 : e.disabled;
                                return void 0 !== o ? !o : n;
                            default:
                                return n
                        }
                    },
                    contactDetailsSubmissionPending: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : zi,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type;
                        switch (n) {
                            case he.G8:
                                return !0;
                            case he.nd:
                            case he.GR:
                            case he.M₹:
                            case he.Y4:
                                return zi;
                            default:
                                return t
                        }
                    },
                    contactDetailsSubmissionError: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bi,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type;
                        switch (n) {
                            case he.nd:
                            case he.M₹:
                                return !0;
                            case he.Y4:
                            case he.G8:
                            case he.GR:
                                return Bi;
                            default:
                                return t
                        }
                    }
                }),
                iu = n(5323);

            function cu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function au(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? cu(Object(n), !0).forEach((function(e) {
                        uu(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cu(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function uu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var lu = {},
                su = {
                    timestamp: 0,
                    values: {}
                };

            function fu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function du(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? fu(Object(n), !0).forEach((function(e) {
                        pu(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fu(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function pu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var hu = {
                timestamp: 0,
                values: {}
            };

            function bu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function gu(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? bu(Object(n), !0).forEach((function(e) {
                        mu(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bu(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function mu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var yu = {
                timestamp: 0,
                values: {}
            };

            function vu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ou(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? vu(Object(n), !0).forEach((function(e) {
                        wu(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vu(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function wu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Eu = {
                    timestamp: 0,
                    values: {}
                },
                Su = n(62117),
                ju = n.n(Su),
                Cu = function(t) {
                    var e = {};
                    return Array.isArray(t) ? (t.forEach((function(t) {
                        t.prefill && Object.keys(t.prefill).forEach((function(n) {
                            e[n] || (e[n] = {}), e[n][t.id] = t.prefill[n]
                        }))
                    })), e) : e
                },
                _u = {
                    timestamp: 0,
                    values: {}
                },
                ku = {
                    timestamp: 0,
                    values: {}
                },
                Pu = {
                    prefill: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Eu,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case pe.En:
                                return {
                                    timestamp: e.payload.timestamp, values: Ou(Ou({}, t.values || {}), e.payload.prefillValues)
                                };
                            default:
                                return t
                        }
                    },
                    identify: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yu,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Y4:
                                return {
                                    timestamp: e.payload.timestamp, values: gu(gu({}, t.values || {}), e.payload)
                                };
                            default:
                                return t
                        }
                    },
                    chatDepartmentSelect: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : su,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.d6:
                                return {
                                    timestamp: e.payload.timestamp, values: {
                                        departmentId: e.payload.detail.id
                                    }
                                };
                            case he.vw:
                                return {
                                    timestamp: e.payload.timestamp, values: {
                                        departmentId: e.payload.department
                                    }
                                };
                            default:
                                return t
                        }
                    },
                    chatVisitor: function() {
                        var t, e, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hu,
                            o = arguments.length > 1 ? arguments[1] : void 0;
                        switch (o.type) {
                            case he.gy:
                                return {
                                    timestamp: o.payload.timestamp, values: du(du({}, r.values), {}, {
                                        name: (0, Ae.Gf)(null === (t = o.payload.detail) || void 0 === t ? void 0 : t.display_name, r.name),
                                        email: null === (e = o.payload.detail) || void 0 === e ? void 0 : e.email,
                                        phone: null === (n = o.payload.detail) || void 0 === n ? void 0 : n.phone
                                    })
                                };
                            default:
                                return r
                        }
                    },
                    supportFields: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ku,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n = s()(e.payload, "webWidget.contactForm.fields", []);
                                return 0 === n.length ? t : {
                                    timestamp: Date.now(),
                                    values: ju()({}, t.values, Cu(n))
                                };
                            default:
                                return t
                        }
                    },
                    supportCustomFormFields: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _u,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case hn.I:
                                var n = s()(e.payload, "webWidget.contactForm.ticketForms", []),
                                    r = {};
                                return n.forEach((function(t) {
                                    r[t.id] = Cu(t.fields)
                                })), 0 === Object.keys(r).length ? t : {
                                    timestamp: Date.now(),
                                    values: ju()({}, t.values || {}, r)
                                };
                            default:
                                return t
                        }
                    }
                },
                Tu = (0, ₹t.UY)(Pu),
                Au = (0, ₹t.UY)({
                    acknowledged: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lu,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case iu.o:
                                return au(au({}, t), {}, uu({}, e.payload.type, au(au({}, t[e.payload.type] || {}), {}, uu({}, e.payload.id, e.payload.timestamp))));
                            default:
                                return t
                        }
                    },
                    types: Tu
                }),
                Iu = n(70855);

            function Lu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Du(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Lu(Object(n), !0).forEach((function(e) {
                        xu(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lu(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function xu(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ru = {},
                Nu = (0, ₹t.UY)({
                    formValues: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ru,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case Iu.qA:
                                return Du(Du({}, t), {}, xu({}, r.formId, r.newFormState));
                            case Iu._f:
                                return Ru;
                            case Iu.Tm:
                                var o = Du({}, t);
                                return delete o[r.formId], o;
                            case pe.mG:
                            case pe.Ib:
                                return Ru;
                            default:
                                return t
                        }
                    }
                }),
                Fu = n(34103),
                Mu = "widget/preview/PREVIEW_CHOICE_SELECTED",
                Bu = Fu.J,
                zu = (0, ₹t.UY)({
                    choice: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bu,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case Mu:
                                return e.payload;
                            default:
                                return t
                        }
                    },
                    enabled: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case he.Ez:
                                return !0;
                            default:
                                return t
                        }
                    }
                }),
                Uu = {
                    url: "",
                    name: {}
                },
                Hu = {
                    labels: []
                };

            function Wu(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Vu(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Wu(Object(n), !0).forEach((function(e) {
                        Ku(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wu(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ku(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Gu = {},
                qu = (0, ₹t.UY)({
                    avatar: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    url: s()(r, "webWidget.answerBot.avatar.url", t.url), name: s()(r, "webWidget.answerBot.avatar.name", t.name)
                                };
                            default:
                                return t
                        }
                    },
                    title: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Gu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return Vu(Vu({}, t), s()(r, "webWidget.answerBot.title", t));
                            default:
                                return t
                        }
                    },
                    search: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    labels: s()(r, "webWidget.answerBot.search.labels", t.labels)
                                };
                            default:
                                return t
                        }
                    },
                    suppress: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.answerBot.suppress", t);
                            default:
                                return t
                        }
                    },
                    delayChannelChoice: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.answerBot.contactOnlyAfterQuery", t);
                            default:
                                return t
                        }
                    }
                }),
                Zu = {
                    avatarPath: null,
                    name: null,
                    title: null
                },
                Yu = {
                    greeting: null
                },
                Xu = {
                    departmentLabel: null,
                    greeting: null
                },
                Qu = {
                    avatar: !0,
                    title: !0,
                    rating: !0
                },
                Ju = [],
                ₹u = (0, ₹t.UY)({
                    concierge: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Zu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    avatarPath: s()(r, "webWidget.chat.concierge.avatarPath", t.avatarPath), name: s()(r, "webWidget.chat.concierge.name", t.name), title: s()(r, "webWidget.chat.concierge.title", t.title)
                                };
                            default:
                                return t
                        }
                    },
                    connectionSuppress: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.chat.connectionSuppress", t);
                            default:
                                return t
                        }
                    },
                    connectOnDemand: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.chat.connectOnDemand", t);
                            default:
                                return t
                        }
                    },
                    departments: (0, ₹t.UY)({
                        enabled: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                e = arguments.length > 1 ? arguments[1] : void 0,
                                n = e.type,
                                r = e.payload;
                            switch (n) {
                                case hn.I:
                                    return s()(r, "webWidget.chat.departments.enabled", t);
                                default:
                                    return t
                            }
                        },
                        select: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = arguments.length > 1 ? arguments[1] : void 0,
                                n = e.type,
                                r = e.payload;
                            switch (n) {
                                case hn.I:
                                    return s()(r, "webWidget.chat.departments.select", t);
                                default:
                                    return t
                            }
                        }
                    }),
                    emailTranscriptEnabled: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return Boolean(s()(r, "webWidget.chat.menuOptions.emailTranscript", t));
                            default:
                                return t
                        }
                    },
                    hideWhenOffline: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return Boolean(s()(r, "webWidget.chat.hideWhenOffline", t));
                            default:
                                return t
                        }
                    },
                    mobileNotificationsDisabled: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.chat.notifications.mobile.disable", t);
                            default:
                                return t
                        }
                    },
                    offlineForm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    greeting: s()(r, "webWidget.chat.offlineForm.greeting", t.greeting)
                                };
                            default:
                                return t
                        }
                    },
                    prechatForm: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    departmentLabel: s()(r, "webWidget.chat.prechatForm.departmentLabel", t.departmentLabel), greeting: s()(r, "webWidget.chat.prechatForm.greeting", t.greeting)
                                };
                            default:
                                return t
                        }
                    },
                    profileCard: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Qu,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    avatar: s()(r, "webWidget.chat.profileCard.avatar", t.avatar), title: s()(r, "webWidget.chat.profileCard.title", t.title), rating: s()(r, "webWidget.chat.profileCard.rating", t.rating)
                                };
                            default:
                                return t
                        }
                    },
                    suppress: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.chat.suppress", t);
                            default:
                                return t
                        }
                    },
                    tags: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ju,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.chat.tags", t);
                            default:
                                return t
                        }
                    },
                    title: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.chat.title", t);
                            default:
                                return t
                        }
                    },
                    connectOnPageLoad: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return Boolean(s()(r, "webWidget.chat.connectOnPageLoad", t));
                            default:
                                return t
                        }
                    }
                }),
                tl = n(10099),
                el = {
                    launcher: "",
                    launcherText: "",
                    theme: null,
                    button: "",
                    resultLists: "",
                    header: "",
                    articleLinks: ""
                },
                nl = {
                    attachments: !0,
                    subject: !1,
                    suppress: !1,
                    tags: [],
                    title: {},
                    selectTicketForm: {}
                },
                rl = (0, ₹t.UY)({
                    settings: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    selectTicketForm: s()(r, "webWidget.contactForm.selectTicketForm", t.selectTicketForm), attachments: s()(r, "webWidget.contactForm.attachments", t.attachments), subject: s()(r, "webWidget.contactForm.subject", t.subject), suppress: s()(r, "webWidget.contactForm.suppress", t.suppress), tags: s()(r, "webWidget.contactForm.tags", t.tags), title: s()(r, "webWidget.contactForm.title", t.title)
                                };
                            default:
                                return t
                        }
                    }
                }),
                ol = {
                    chatLabelOnline: null,
                    chatLabelOffline: null
                },
                il = (0, ₹t.UY)({
                    enabled: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.contactOptions.enabled", t);
                            default:
                                return t
                        }
                    },
                    chat: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ol,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    chatLabelOnline: s()(r, "webWidget.contactOptions.chatLabelOnline", t.chatLabelOnline), chatLabelOffline: s()(r, "webWidget.contactOptions.chatLabelOffline", t.chatLabelOffline)
                                };
                            default:
                                return t
                        }
                    },
                    contactButton: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.contactOptions.contactButton", t);
                            default:
                                return t
                        }
                    },
                    contactFormLabel: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.contactOptions.contactFormLabel", t);
                            default:
                                return t
                        }
                    }
                }),
                cl = {
                    originalArticleButton: !0,
                    suppress: !1,
                    localeFallbacks: [],
                    chatButton: null,
                    sectionFilter: null,
                    categoryFilter: null,
                    labelFilter: null,
                    messageButton: null,
                    searchPlaceholder: null,
                    title: null
                },
                al = (0, ₹t.UY)({
                    label: function() {
                        var t, e, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            o = arguments.length > 1 ? arguments[1] : void 0,
                            i = o.type,
                            c = o.payload;
                        switch (i) {
                            case hn.I:
                                return null !== (t = null == c || null === (e = c.webWidget) || void 0 === e || null === (n = e.launcher) || void 0 === n ? void 0 : n.label) && void 0 !== t ? t : r;
                            default:
                                return r
                        }
                    },
                    chatLabel: function() {
                        var t, e, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            o = arguments.length > 1 ? arguments[1] : void 0,
                            i = o.type,
                            c = o.payload;
                        switch (i) {
                            case hn.I:
                                return null !== (t = null == c || null === (e = c.webWidget) || void 0 === e || null === (n = e.launcher) || void 0 === n ? void 0 : n.chatLabel) && void 0 !== t ? t : r;
                            default:
                                return r
                        }
                    },
                    talkLabel: function() {
                        var t, e, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            o = arguments.length > 1 ? arguments[1] : void 0,
                            i = o.type,
                            c = o.payload;
                        switch (i) {
                            case hn.I:
                                return null !== (t = null == c || null === (e = c.webWidget) || void 0 === e || null === (n = e.launcher) || void 0 === n ? void 0 : n.talkLabel) && void 0 !== t ? t : r;
                            default:
                                return r
                        }
                    }
                }),
                ul = {
                    layout: null,
                    image: null,
                    label: null
                },
                ll = function(t, e, n) {
                    var r = t.layout,
                        i = s()(n, "webWidget.launcher.badge.layout", e.layout);
                    return o()(i) ? r : (i = i.toLowerCase(), u()(["image_only", "text_only", "image_right", "image_left"], i) ? i : r)
                },
                sl = {
                    labelVisible: !1
                },
                fl = (0, ₹t.UY)({
                    badge: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ul,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    layout: ll(ul, t, r), image: s()(r, "webWidget.launcher.badge.image", t.image), label: s()(r, "webWidget.launcher.badge.label", t.label)
                                };
                            default:
                                return t
                        }
                    },
                    settings: al,
                    mobile: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    labelVisible: s()(r, "webWidget.launcher.mobile.labelVisible", t.labelVisible)
                                };
                            default:
                                return t
                        }
                    }
                }),
                dl = {
                    popoutButton: {
                        enabled: !0
                    }
                },
                pl = {
                    zIndex: 999999,
                    positionVertical: "bottom",
                    positionHorizontal: null,
                    offsetHorizontal: 0,
                    offsetVertical: 0,
                    offsetMobileHorizontal: 0,
                    offsetMobileVertical: 0
                },
                hl = {
                    title: {},
                    suppress: !1,
                    nickname: null
                },
                bl = (0, ₹t.UY)({
                    analytics: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.analytics", t);
                            default:
                                return t
                        }
                    },
                    answerBot: qu,
                    chat: ₹u,
                    color: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : el,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload,
                            o = function(e) {
                                return (0, tl.tJ)(s()(r, "webWidget.color.".concat(e))) || t[e]
                            };
                        switch (n) {
                            case hn.I:
                                return {
                                    articleLinks: o("articleLinks"), button: o("button"), header: o("header"), launcher: o("launcher"), launcherText: o("launcherText"), resultLists: o("resultLists"), theme: o("theme")
                                };
                            default:
                                return t
                        }
                    },
                    cookies: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return s()(r, "webWidget.cookies", t);
                            default:
                                return t
                        }
                    },
                    contactForm: rl,
                    contactOptions: il,
                    helpCenter: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    chatButton: s()(r, "webWidget.helpCenter.chatButton", t.chatButton), originalArticleButton: Boolean(s()(r, "webWidget.helpCenter.originalArticleButton", t.originalArticleButton)), suppress: Boolean(s()(r, "webWidget.helpCenter.suppress", t.suppress)), localeFallbacks: kr()(s()(r, "webWidget.helpCenter.localeFallbacks", t.localeFallbacks), 3), sectionFilter: s()(r, "webWidget.helpCenter.filter.section", t.sectionFilter), categoryFilter: s()(r, "webWidget.helpCenter.filter.category", t.categoryFilter), labelFilter: s()(r, "webWidget.helpCenter.filter.label_names", t.labelFilter), messageButton: s()(r, "webWidget.helpCenter.messageButton", t.messageButton), searchPlaceholder: s()(r, "webWidget.helpCenter.searchPlaceholder", t.searchPlaceholder), title: s()(r, "webWidget.helpCenter.title", t.title)
                                };
                            default:
                                return t
                        }
                    },
                    launcher: fl,
                    navigation: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    popoutButton: {
                                        enabled: s()(r, "webWidget.navigation.popoutButton.enabled", t.popoutButton.enabled)
                                    }
                                };
                            default:
                                return t
                        }
                    },
                    styling: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    positionHorizontal: s()(r, "webWidget.position.horizontal", t.positionHorizontal), positionVertical: s()(r, "webWidget.position.vertical", t.positionVertical), offsetHorizontal: s()(r, "webWidget.offset.horizontal", t.offsetHorizontal), offsetMobileHorizontal: s()(r, "webWidget.offset.mobile.horizontal", t.offsetMobileHorizontal), offsetMobileVertical: s()(r, "webWidget.offset.mobile.vertical", t.offsetMobileVertical), offsetVertical: s()(r, "webWidget.offset.vertical", t.offsetVertical), zIndex: s()(r, "webWidget.zIndex", t.zIndex)
                                };
                            default:
                                return t
                        }
                    },
                    talk: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case hn.I:
                                return {
                                    nickname: s()(r, "webWidget.talk.nickname", t.nickname), suppress: s()(r, "webWidget.talk.suppress", t.suppress), title: s()(r, "webWidget.talk.title", t.title)
                                };
                            default:
                                return t
                        }
                    }
                }),
                gl = n(80472);

            function ml(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function yl(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ml(Object(n), !0).forEach((function(e) {
                        vl(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ml(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function vl(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ol = {
                    isCallInProgress: !1,
                    hasLastCallFailed: !1
                },
                wl = n(39319),
                El = {
                    waitTime: "0",
                    enabled: !1
                };

            function Sl(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function jl(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Sl(Object(n), !0).forEach((function(e) {
                        Cl(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Sl(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Cl(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var _l = {
                    isSending: !1,
                    success: !1,
                    error: {},
                    phoneNumber: ""
                },
                kl = n(96190),
                Pl = n.n(kl),
                Tl = (n(48319), n(67317));

            function Al(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Il(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Al(Object(n), !0).forEach((function(e) {
                        Ll(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Al(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ll(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Dl = {
                    0: Tl.kg,
                    1: Tl.zm,
                    2: Tl.g,
                    3: Tl.Kn
                },
                xl = {
                    averageWaitTimeSetting: null,
                    capability: (0, Vt.Z)(null, "digital_voice_enabled") ? Tl.Kn : Tl.kg,
                    enabled: !1,
                    nickname: "",
                    phoneNumber: "",
                    supportedCountries: [],
                    connected: !1,
                    deferredStatusOnline: !1
                };

            function Rl(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Nl(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Rl(Object(n), !0).forEach((function(e) {
                        Fl(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rl(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Fl(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Ml = {
                name: "",
                phone: ""
            };

            function Bl(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function zl(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Bl(Object(n), !0).forEach((function(e) {
                        Ul(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bl(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Ul(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Hl = {
                    io: null
                },
                Wl = (0, ₹t.UY)({
                    agentAvailability: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case be.jV:
                            case be.E9:
                                return s()(e.payload, "agentAvailability", t);
                            case be.Jt:
                                return !1;
                            default:
                                return t
                        }
                    },
                    averageWaitTime: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : El,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case be.nf:
                            case be.jV:
                                var n = e.payload,
                                    r = n.averageWaitTime,
                                    o = n.averageWaitTimeSetting,
                                    i = n.averageWaitTimeEnabled;
                                return {
                                    waitTime: r || t.waitTime, enabled: !!o && i
                                };
                            default:
                                return t
                        }
                    },
                    callback: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _l,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case be.nm:
                                return jl(jl({}, t), {}, {
                                    success: _l.success
                                });
                            case be.kh:
                                return {
                                    error: {}, phoneNumber: r.phone, isSending: !0, success: !1
                                };
                            case be.Ri:
                                return {
                                    error: {}, phoneNumber: r.phone, isSending: !1, success: !0
                                };
                            case be.CR:
                                return jl(jl({}, t), {}, {
                                    error: r,
                                    isSending: !1,
                                    success: !1
                                });
                            default:
                                return t
                        }
                    },
                    embeddableConfig: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : xl,
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.payload;
                        switch (e.type) {
                            case be.jV:
                                var r = n.supportedCountries;
                                return r = r ? r.split(",") : [], Il(Il({}, n), {}, {
                                    supportedCountries: Pl()(r, "", null),
                                    capability: (0, Vt.Z)(null, "digital_voice_enabled") ? Tl.Kn : Dl[n.capability],
                                    enabled: !0 === n.enabled,
                                    connected: !0,
                                    deferredStatusOnline: !1
                                });
                            case be.Jt:
                                return Il(Il({}, t), {}, {
                                    enabled: !1
                                });
                            case be.H1:
                                return Il(Il({}, t), {}, {
                                    capability: (0, Vt.Z)(null, "digital_voice_enabled") ? Tl.Kn : Dl[n.capability],
                                    enabled: !0 === n.enabled,
                                    deferredStatusOnline: n.availability
                                });
                            default:
                                return t
                        }
                    },
                    embeddedVoiceCallStatus: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ol,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type;
                        switch (n) {
                            case gl.zo:
                                return {
                                    isCallInProgress: !0, hasLastCallFailed: !1
                                };
                            case gl.me:
                                return yl(yl({}, t), {}, {
                                    isCallInProgress: !1
                                });
                            case gl.zD:
                                return yl(yl({}, t), {}, {
                                    hasLastCallFailed: !0
                                });
                            case gl.Rr:
                                return yl(yl({}, t), {}, {
                                    hasLastCallFailed: !1
                                });
                            default:
                                return t
                        }
                    },
                    formState: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ml,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case be.iE:
                                return Nl(Nl({}, Ml), e.payload);
                            case pe.Ib:
                                return Ml;
                            default:
                                return t
                        }
                    },
                    isPolling: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type;
                        switch (n) {
                            case be.Ee:
                                return !1;
                            default:
                                return t
                        }
                    },
                    microphoneMuted: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 ? arguments[1] : void 0,
                            n = e.type;
                        switch (n) {
                            case gl.uv:
                                return !0;
                            case gl.hz:
                                return !1;
                            default:
                                return t
                        }
                    },
                    recordingConsent: wl.ZP,
                    timeInCall: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type;
                        switch (n) {
                            case gl.FQ:
                                return t + 1;
                            case gl.zo:
                                return 0;
                            default:
                                return t
                        }
                    },
                    vendor: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hl,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.type,
                            r = e.payload;
                        switch (n) {
                            case be.Ee:
                                return zl(zl({}, t), r);
                            default:
                                return t
                        }
                    }
                }),
                Vl = (0, ₹t.UY)({
                    base: Mi,
                    settings: bl,
                    chat: function(t, e) {
                        return e.type === he.zW && (t = {
                            vendor: t.vendor,
                            isLoggingOut: t.isLoggingOut,
                            screen: t.screen,
                            accountSettings: t.accountSettings
                        }), ou(t, e)
                    },
                    talk: Wl,
                    helpCenter: vo,
                    answerBot: Fr,
                    preview: zu,
                    support: ai,
                    webWidget: ui,
                    customerProvidedPrefill: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        switch (e.type) {
                            case pe.mG:
                                return Au(void 0, e);
                            default:
                                return Au(t, e)
                        }
                    },
                    form: Nu
                });

            function Kl(t, e) {
                return function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (arguments.length > 1 ? arguments[1] : void 0).type, t
                }(Vl(t, e), e)
            }
            var Gl = n(36031),
                ql = function(t) {
                    return (0, te.createLogger)({
                        collapsed: !0,
                        titleFormatter: function(e) {
                            return ["".concat(t), "%c".concat(String(e.type)), "%c"].join(" ")
                        }
                    })
                },
                Zl = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
                Yl = function(t) {
                    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                        name: t
                    })
                };

            function Xl() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "web_widget",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = [ee.Z, rr, hr(e.throttleEvents, e.allowedActionsFn), Fn(Nn), Xe, Fn(pr), Be, Hn, Fn(cr)],
                    r = ₹t.qC;
                return (0, Gl.w)() && (Zl ? r = Yl(t) : n.push(ql(t))), r(₹t.md.apply(void 0, n))(₹t.MT)(Kl)
            }
            var Ql = n(863),
                Jl = n(85597),
                ₹l = n(14156),
                ts = n(29150),
                es = n(39147),
                ns = (n(27567), n(32465)),
                rs = n(45554);

            function os(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var is = function(t) {
                    var e = t.getState();
                    (0, X.Fh)(e) && t.dispatch((0, T.dy)())
                },
                cs = function t(e, n) {
                    return Object.keys(n).forEach((function(r) {
                        var o = n[r];
                        "function" == typeof o ? n[r] = function() {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return o.apply(void 0, [e].concat(n))
                        } : t(e, o)
                    })), n
                },
                as = function(t) {
                    var e, n;
                    return cs(t, {
                        webWidget: {
                            hide: Jl.jO,
                            show: Jl.tI,
                            open: Jl.im,
                            close: Jl.TU,
                            toggle: Jl.zT,
                            setLocale: Jl.VK,
                            identify: Jl.Lr,
                            updateSettings: Jl.xW,
                            logout: Jl.XB,
                            updatePath: Jl.J9,
                            clear: Jl.eL,
                            prefill: Jl.rw,
                            "chat:addTags": function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                return (0, Jl.rb)(t).apply(void 0, n)
                            },
                            "chat:removeTags": function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                                return (0, Jl.kN)(t).apply(void 0, n)
                            },
                            "chat:end": Jl.LI,
                            "chat:send": Jl.JL,
                            "chat:reauthenticate": Jl.hB,
                            reset: is,
                            popout: Jl.nJ,
                            "helpCenter:reauthenticate": Jl.X8,
                            "helpCenter:setSuggestions": Jl.zp
                        },
                        "webWidget:on": (e = {
                            userEvent: function(t, e) {
                                Te.j(e, oe.zM)
                            }
                        }, os(e, ns.QX, (function(t, e) {
                            return Te.j(e, oe.iC)
                        })), os(e, ns.sN, (function(t, e) {
                            return Te.j(e, oe.dM)
                        })), os(e, "chat:".concat(ns.gs), (function(t, e) {
                            return Te.j(e, oe.zf)
                        })), os(e, "chat:".concat(ns.jp), (function(t, e) {
                            return Te.j(e, oe.G1)
                        })), os(e, "chat:".concat(ns.CI), (function(t, e) {
                            return Te.j((function() {
                                (0, I.wk)(t.getState()) && e()
                            }), oe.H6)
                        })), os(e, "chat:".concat(ns.ek), (function(t, e) {
                            Te.j(e, oe.WL)
                        })), os(e, "chat:".concat(ns.H₹), (function(t, e) {
                            Te.j((function() {
                                return e((0, I.of)(t.getState()))
                            }), oe.lD)
                        })), os(e, "chat:".concat(ns.cc), (function(t, e) {
                            Te.j((function() {
                                return e((0, I.BV)(t.getState()))
                            }), oe.Ne)
                        })), os(e, "chat:".concat(ns.Id), (function(t, e) {
                            Te.j((function() {
                                return e((0, I.BV)(t.getState()))
                            }), oe.t8)
                        })), e),
                        "webWidget:get": (n = {}, os(n, ns.e_, Jl.Gr), os(n, "chat:".concat(ns.en), Jl.Un), os(n, "chat:".concat(ns.aR), Jl.DS), os(n, "chat:".concat(ns.hK), Jl.xD), n)
                    })
                };
            var us = {
                dispatch: function() {},
                getState: function() {},
                subscribe: function() {}
            };
            var ls = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : us;
                    n.dispatch((0, T.vY)("ipmWidget", !0))
                },
                ss = function(t, e) {
                    var n = !o()(e.embeds);
                    return {
                        configureIPMWidget: function(r) {
                            n || ls(r, e, t)
                        },
                        showIPMArticle: function(e) {
                            t.dispatch((0, d.xC)(e))
                        },
                        showIPMWidget: function() {
                            t.dispatch((0, T.CO)())
                        },
                        hideIPMWidget: function() {
                            (0, Jl.jO)(t)
                        },
                        identify: function(e) {
                            if ((0, Jl.Lr)(t, e), e && e.email && e.name) {
                                var n = {
                                    name: {
                                        value: e.name
                                    },
                                    email: {
                                        value: e.email
                                    }
                                };
                                (0, Jl.rw)(t, n)
                            }
                        },
                        logout: function() {
                            return (0, Jl.XB)(t)
                        },
                        setHelpCenterSuggestions: function(e) {
                            return (0, Jl.zp)(t, e)
                        },
                        activate: function(e) {
                            t.dispatch((0, T.CO)(e))
                        },
                        activateIpm: function() {},
                        hide: function() {
                            rs.Z.track("zE.hide"), (0, Jl.jO)(t)
                        },
                        show: function() {
                            var e = t.getState();
                            (0, X.vf)(e) && t.dispatch((0, T.zs)())
                        },
                        setLocale: function(e) {
                            rs.Z.track("zE.setLocale", e), (0, Jl.VK)(t, e)
                        }
                    }
                };

            function fs(t, e, n, r, o, i, c) {
                try {
                    var a = t[i](c),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function ds(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function c(t) {
                            fs(i, r, o, c, a, "next", t)
                        }

                        function a(t) {
                            fs(i, r, o, c, a, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }
            var ps = !1,
                hs = !1,
                bs = {
                    dispatch: function() {},
                    getState: function() {},
                    subscribe: function() {}
                },
                gs = function(t) {
                    var e = s()(document.zendesk, "web_widget.features");
                    return e ? (!u()(e, "talk") && c()(t.embeds, "talk") && delete t.embeds.talk, !u()(e, "chat") && c()(t.embeds, "chat") && delete t.embeds.chat, t) : t
                };

            function ms() {
                return (ms = ds(regeneratorRuntime.mark((function t(e) {
                    var n, r, i;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (n = e.config, !ps) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return ps = !0, r = Xl(), i = gs(n), ts.X.init(r), ke(), ₹l.Z.setupZopimQueue(Yt.p_), Yt.p_.zE !== Yt.p_.zEmbed && We.N.trackUserAction("zEmbedFallback", "warning"), s()(i, "embeds.chat") && ₹l.Z.setUpZopimApiMethods(Yt.p_, r), n.hostMapping && es.d.updateConfig({
                                    hostMapping: n.hostMapping
                                }), r.dispatch((0, T.ey)(n)), Yt.p_.zESettings && We.N.trackSettings(ts.X.getTrackSettings()), (0, et.K1)() && Yt.p_.addEventListener("click", et.qR, !0), f.a.init(r), t.next = 18, new Promise((function(t) {
                                    f.a.setLocale(void 0, t, n.locale)
                                }));
                            case 18:
                                if (Jt.Z.registerApi(as(r)), Jt.Z.registerLegacyApi(ss(r, i)), Qt.Z.configure({
                                        enabled: ts.X.getErrorReportingEnabled()
                                    }), !o()(i.embeds)) {
                                    t.next = 23;
                                    break
                                }
                                return t.abrupt("return");
                            case 23:
                                return n.webWidgetCustomizations && ts.X.enableCustomizations(), f.a.getLocale() || (0, Jl.VK)(r, n.locale), t.abrupt("return", {
                                    reduxStore: r,
                                    filteredConfig: i
                                });
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            var ys = {
                run: function(t) {
                    var e = t.config,
                        n = t.embeddableData;
                    if (!hs && n) {
                        hs = !0;
                        var r = n.reduxStore,
                            i = n.filteredConfig;
                        o()(i.embeds) || (function(t, e) {
                            Object.keys(t.embeds).forEach((function(t) {
                                e.dispatch((0, T.vY)(t, !0))
                            }))
                        }(i, r), function(t, e) {
                            t.chat && e.dispatch((0, A.Oc)(!0)), t.talk && e.dispatch((0, Ql.lR)()), t.helpCenterForm && e.dispatch((0, d.yz)())
                        }(i.embeds, r), r.dispatch((0, T.ix)()), Xt({
                            reduxStore: r,
                            config: e
                        }))
                    }
                },
                init: function(t) {
                    return ms.apply(this, arguments)
                },
                initIPM: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bs;
                    n.dispatch((0, T.vY)("ipmWidget", !0))
                }
            }
        },
        67165: function(t, e, n) {
            "use strict";
            n.d(e, {
                a: function() {
                    return x
                }
            });
            var r, o, i = n(57033),
                c = n.n(i),
                a = n(17408),
                u = n.n(a),
                l = n(81830),
                s = n.n(l),
                f = n(7165),
                d = n.n(f),
                p = n(25022),
                h = n.n(p),
                b = n(84818),
                g = n.n(b),
                m = (n(34769), n(18178), n(80131)),
                y = n(30745),
                v = n.n(y),
                O = n(19599),
                w = n(97105),
                E = n(23541),
                S = n(94265),
                j = n(25785),
                C = n.n(j),
                _ = n(70570),
                k = Object.keys(C());

            function P() {
                return r ? (0, S.Kd)(r.getState()) : ""
            }

            function T(t, e) {
                return "Missing translation (".concat(e, "): ").concat(t)
            }

            function A(t, e) {
                try {
                    return (0, m.sprintf)(t, e)
                } catch (e) {
                    return t
                }
            }

            function I(t) {
                return h()(t, "_", "-")
            }

            function L(t) {
                return t.toLowerCase()
            }

            function D(t) {
                var e = L(I(t)),
                    n = e.toLowerCase(),
                    r = e.substring(0, e.indexOf("-"));
                return d()(k, e) ? e : d()(k, n) ? n : d()(k, r) ? r : "tl" === t ? "fil" : s()(t, "zh") ? function(t) {
                    t = t.toLowerCase();
                    var e = u()(t, "-");
                    if (e.length > 2) {
                        var n = e[1];
                        if ("hant" === n) return "mo" === e[2] ? "zh-mo" : "zh-tw";
                        if ("hans" === n) return "sg" === e[2] ? "zh-sg" : "zh-cn"
                    }
                    switch (t) {
                        case "zh-cn":
                        case "zh-my":
                        case "zh-hans":
                        case "zh":
                            return "zh-cn";
                        case "zh-hant":
                            return "zh-tw";
                        default:
                            return "zh-cn"
                    }
                }(t) : "en-us"
            }
            var x = {
                t: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = v()(t),
                        r = P();
                    return g()(n) ? T(t, r) : A(n, e)
                },
                dateTimeFormat: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return v().dateTimeFormat(e).format(t)
                },
                getLocaleId: function() {
                    return C()[P()]
                },
                setLocale: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en-us";
                    r && (o = D(t || o || i), (0, w.Z)(o).then((function(t) {
                        var i = t.default.locale;
                        o === i.locale && (window[n.g.__ZENDESK_CLIENT_I18N_GLOBAL] = void 0, v().set(i), r.dispatch({
                            type: E.Jq,
                            payload: o
                        }), e && e())
                    })).catch((function(t) {
                        O.Z.error("Failed loading locale", t.message)
                    })))
                },
                getLocale: P,
                isRTL: function() {
                    return "rtl" === v().dir
                },
                setCustomTranslations: function() {},
                getSettingTranslation: function(t) {
                    var e, n = L(I(x.getLocale()));
                    if (!c()(t)) return t[n] || (e = t, Object.keys(e).reduce((function(t, n) {
                        return t[n.toLowerCase()] = e[n], t
                    }), {}))[n] || t["*"] || null
                },
                init: function(t) {
                    r = t
                },
                reset: function() {
                    r = void 0, o = void 0
                },
                parseLocale: D,
                getClientLocale: function() {
                    var t = _.ry;
                    return t.languages && t.languages[0] || t.browserLanguage || t.language || "en-us"
                }
            }
        },
        38579: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return j
                }
            }), n(96928), n(61229), n(58188), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775), n(634), n(20796), n(15735), n(28673), n(6886);
            var r, o = n(52322),
                i = n(72779),
                c = n.n(i),
                a = n(13980),
                u = n.n(a),
                l = n(2784),
                s = n(1034),
                f = n(77693),
                d = n(55936),
                p = n(99680);

            function h(t) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                        E(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function v(t, e) {
                return (v = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function O(t, e) {
                return !e || "object" !== h(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function w(t) {
                return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function E(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var S = (E(r = {
                    Icon: n(18346)
                }, s.UZ.DASH, n(43119)), E(r, s.UZ.ERROR_FILL, n(60047)), E(r, s.UZ.SEND_CHAT, n(40152)), E(r, s.UZ.AGENT_AVATAR, n(51069)), E(r, "Icon--clock-stroke", n(82465)), E(r, s.UZ.AVATAR, n(39525)), E(r, s.UZ.CC_SUPPORT, n(66310)), E(r, s.UZ.CC_TALK, n(88400)), E(r, s.UZ.CC_CLICK_TO_CALL, n(10563)), E(r, s.UZ.CHAT, n(15491)), E(r, "Icon--checkmark-fill", n(7329)), E(r, "Icon--chevron-left-fill", n(38278)), E(r, "Icon--chevron-right-fill", n(99146)), E(r, "Icon--close", n(142)), E(r, "Icon--launcher-talk", n(89811)), E(r, "Icon--image-stroke", n(80068)), E(r, s.UZ.LINK_EXTERNAL, n(81778)), E(r, "Icon--mini-tick", n(93924)), E(r, "Icon--preview-default", n(27280)), E(r, "Icon--preview-document", n(24106)), E(r, "Icon--preview-error", n(15358)), E(r, "Icon--preview-image", n(54451)), E(r, "Icon--preview-pdf", n(14836)), E(r, "Icon--preview-presentation", n(41271)), E(r, "Icon--preview-spreadsheet", n(90586)), E(r, "Icon--preview-zip", n(38858)), E(r, "Icon--remove", n(77148)), E(r, "Icon--sound-off", n(48505)), E(r, "Icon--sound-on", n(6629)), E(r, "Icon--thumbDown", n(76838)), E(r, "Icon--thumbUp", n(33367)), E(r, "Icon--zendesk", n(86024)), E(r, "Icon--trash-fill", n(46338)), E(r, s.UZ.CC_CHAT, n(37546)), E(r, "Icon--previous", n(68164)), r),
                j = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && v(t, e)
                    }(u, t);
                    var e, n, r, i, a = (r = u, i = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, e = w(r);
                        if (i) {
                            var n = w(this).constructor;
                            t = Reflect.construct(e, arguments, n)
                        } else t = e.apply(this, arguments);
                        return O(this, t)
                    });

                    function u() {
                        return m(this, u), a.apply(this, arguments)
                    }
                    return e = u, (n = [{
                        key: "render",
                        value: function() {
                            var t, e = this.props,
                                n = e.type,
                                r = e.onClick,
                                i = e.className,
                                a = e.isMobile,
                                u = e.flipX,
                                l = S[n].default,
                                s = c()(p.locals.container, i, n, (E(t = {}, p.locals.mobile, a), E(t, p.locals.flipX, u), t)),
                                f = r ? {
                                    tabIndex: 0,
                                    role: "button",
                                    onKeyDown: (0, d.Y)(r),
                                    onClick: r
                                } : {};
                            return (0, o.jsx)("span", g(g({}, f), {}, {
                                className: s,
                                type: n,
                                children: (0, o.jsx)(l, {
                                    "aria-hidden": "true"
                                })
                            }))
                        }
                    }]) && y(e.prototype, n), u
                }(l.Component);
            E(j, "propTypes", {
                className: u().string,
                isMobile: u().bool,
                onClick: u().func,
                type: u().string,
                flipX: u().bool
            }), E(j, "defaultProps", {
                isMobile: (0, f.K1)(),
                flipX: !1
            })
        },
        51711: function(t, e, n) {
            "use strict";
            n.d(e, {
                pE: function() {
                    return A
                },
                _e: function() {
                    return p
                },
                oF: function() {
                    return v
                },
                l9: function() {
                    return E
                }
            }), n(18178), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(93899),
                o = n(65683),
                i = n(1034),
                c = n(86983),
                a = n(10099),
                u = n(77693);

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                        f(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var d = (0, u.K1)(),
                p = d ? (0, r.iv)(["font-size:", "rem !important;"], 15 / i.Kt) : "",
                h = (0, r.iv)(["", " font-weight:500 !important;"], p),
                b = d ? (0, r.iv)(["", " [dir='ltr'] &{padding-left:", "rem !important;}[dir='rtl'] &{padding-right:", "rem !important;}"], p, 22 / i.Kt, 22 / i.Kt) : "",
                g = (0, r.iv)(["margin-bottom:", "rem !important;"], 16 / i.Kt),
                m = d ? (0, r.iv)(["border-radius:", "rem !important;border-width:", "rem !important;"], 4 / i.Kt, 1.1 / i.Kt) : "",
                y = d ? (0, r.iv)(["&:before{background-size:", "rem !important;width:", "rem !important;height:", "rem !important;}"], 10 / i.Kt, 28 / i.Kt, 42 / i.Kt) : "",
                v = (0, r.iv)(["background-color:", ";", " ", ";", ""], (function(t) {
                    return t.focused && "".concat(o.zdColorGrey100, " !important")
                }), p, d ? "padding: ".concat(16 / i.Kt, "rem ").concat(25 / i.Kt, "rem !important") : "", y),
                O = d ? (0, r.iv)(["&::before{background-size:", "rem !important;width:", "rem !important;height:", "rem !important;}"], 14 / i.Kt, 50 / i.Kt, 40 / i.Kt) : "",
                w = (0, r.iv)(["", " ", ""], v, O),
                E = (0, r.iv)(["", ""], (function(t) {
                    return t.ignoreThemeOverride ? "" : (0, r.iv)([":hover,:focus{border-color:", ";}:focus{box-shadow:", ";}box-shadow:", ";border-color:", ";cursor:", " ", ";"], (function(t) {
                        var e = t.validation;
                        return (!e || "none" === e) && "".concat(o.zdColorGrey600, " !important;")
                    }), (function(t) {
                        var e = t.validation,
                            n = t.isBare;
                        return (!e || "none" === e) && !n && "0 0 0 ".concat(3 / i.Kt, "rem rgba(153,153,153, 0.4) !important")
                    }), (function(t) {
                        var e = t.focused,
                            n = t.validation;
                        return e && (!n || "none" === n) && "0 0 0 ".concat(3 / i.Kt, "rem rgba(153,153,153, 0.4) !important")
                    }), (function(t) {
                        var e = t.focused,
                            n = t.validation;
                        return e && (!n || "none" === n) && "".concat(o.zdColorGrey600, " !important")
                    }), (function(t) {
                        return t.readOnly ? "default" : "auto"
                    }), p)
                })),
                S = (0, u.G6)() ? (0, r.iv)(["text-rendering:auto;"]) : "",
                j = (0, r.iv)(["", " ", " ", ""], E, m, S),
                C = d ? (0, r.iv)(["", " margin-top:", "rem !important;background-size:", "rem !important;background-position-y:", "rem !important;[dir='ltr'] &{padding-left:", "rem !important;}[dir='rtl'] &{padding-right:", "rem !important;}"], p, 7 / i.Kt, 14 / i.Kt, 2 / i.Kt, 20 / i.Kt, 20 / i.Kt) : "",
                _ = function(t) {
                    return (0, r.iv)(["", ""], (function(e) {
                        return e.ignoreThemeOverride ? "" : (0, r.iv)(["height:", "rem !important;font-size:", " !important;border-radius:", " !important;white-space:nowrap !important;overflow:hidden !important;text-overflow:ellipsis !important;line-height:", "rem !important;:not([disabled]){background-color:", " !important;color:", " !important;border-color:", " !important;&:hover,&:focus,&:active{background-color:", " !important;color:", " !important;}}"], 38 / i.Kt, d && "".concat(15 / i.Kt, "rem"), (function(t) {
                            return !t.pill && d && "".concat(4 / i.Kt, "rem")
                        }), 36 / i.Kt, (function(e) {
                            return e.isPrimary ? t.buttonColorStr : o.zdColorWhite
                        }), (function(e) {
                            return e.isPrimary ? t.buttonTextColorStr : t.buttonColorStr
                        }), t.buttonColorStr, (function(e) {
                            return !e.isLink && !d && (e.isPrimary ? t.buttonHighlightColorStr : t.buttonColorStr)
                        }), (function(e) {
                            return !e.isLink && !d && t.buttonTextColorStr
                        }))
                    }))
                },
                k = d ? (0, r.iv)(["", " &:before{width:", "rem !important;height:", "rem !important;top:", "rem !important;margin-top:-", "rem !important;", "}:hover:before{border-color:", " !important;}[dir='ltr'] &{padding-left:", "rem !important;}[dir='rtl'] &{padding-right:", "rem !important;}:focus{box-shadow:0 0 0 ", "rem rgba(153,153,153,0.4) !important;}box-shadow:", ";border-color:", ";"], h, 14 / i.Kt, 14 / i.Kt, 8 / i.Kt, 4 / i.Kt, m, o.zdColorGrey600, 22 / i.Kt, 22 / i.Kt, 3 / i.Kt, (function(t) {
                    return t.focused && "0 0 0 ".concat(3 / i.Kt, "rem rgba(153,153,153, 0.4) !important")
                }), (function(t) {
                    return t.focused && "".concat(o.zdColorGrey600, " !important")
                })) : (0, r.iv)(["", " &&&&:hover:before{border-color:", " !important;}&:before{box-shadow:", ";border-color:", " !important;}&:active:before,&:focus:before{background-color:rgba(153,153,153,0.4) !important;border-color:", " !important;}"], h, o.zdColorGrey600, (function(t) {
                    return t.focused && "0 0 0 ".concat(3 / i.Kt, "rem rgba(153,153,153, 0.4) !important")
                }), o.zdColorGrey400, o.zdColorGrey600),
                P = function(t) {
                    return (0, r.iv)(["&:checked ~:before{background-color:", " !important;border-color:", " !important;}&[data-garden-focus-visible='true'] ~ [data-garden-id='forms.checkbox_label']::before{box-shadow:", ";border-color:", " !important;}"], t, o.zdColorGrey600, "0 0 0 ".concat(3 / i.Kt, "rem rgba(153,153,153, 0.4) !important"), o.zdColorGrey400)
                },
                T = {
                    "modals.modal": (0, r.iv)(["&&&{width:auto;margin-bottom:0;max-height:calc(100% - 48px);overflow-y:auto;top:auto !important;right:24px;left:24px;bottom:24px;", "}"], (0, u.K1)() && "\n    top: 4rem !important;\n    bottom: auto !important;\n    "),
                    "modals.header": (0, r.iv)(["padding:", "rem ", "rem;font-size:", "rem;"], (function(t) {
                        return 16 / t.theme.fontSize
                    }), (function(t) {
                        return 20 / t.theme.fontSize
                    }), (function(t) {
                        return 14 / t.theme.fontSize
                    })),
                    "modals.footer": (0, r.iv)(["padding:", "rem ", "rem;justify-content:space-between;"], (function(t) {
                        return 16 / t.theme.fontSize
                    }), (function(t) {
                        return 20 / t.theme.fontSize
                    })),
                    "modals.body": (0, r.iv)(["padding:", "rem ", "rem;"], (function(t) {
                        return 16 / t.theme.fontSize
                    }), (function(t) {
                        return 20 / t.theme.fontSize
                    })),
                    "modals.footerItem": (0, r.iv)(["flex:1;> *{width:100%;}"])
                };

            function A(t) {
                var e = (0, a.pe)(),
                    n = (0, c.k0)(s(s({}, e), t));
                return s({
                    "forms.textarea": j,
                    "forms.input": j,
                    "forms.text_label": h,
                    "forms.label": h,
                    "forms.message": C,
                    "dropdowns.message": C,
                    "checkboxes.message": C,
                    "textfields.hint": p,
                    "buttons.button": _(n),
                    "forms.checkbox_label": k,
                    "forms.checkbox": P(e),
                    "forms.checkbox_hint": b,
                    "dropdowns.label": p,
                    "dropdowns.hint": p,
                    "dropdowns.faux_input": (0, r.iv)(["", " ", " box-shadow:", ";border-color:", ";", " ", " min-height:", ";"], E, m, (function(t) {
                        return t.isFocused && "0 0 0 ".concat(3 / i.Kt, "rem rgba(153,153,153, 0.4) !important")
                    }), (function(t) {
                        return (t.focused || t.hovered) && "".concat(o.zdColorGrey600, " !important")
                    }), g, O, d ? "".concat(42.5 / i.Kt, "rem !important") : ""),
                    "dropdowns.item": v,
                    "dropdowns.next_item": w,
                    "dropdowns.input": (0, r.iv)(["width:1px !important;min-height:auto;max-height:1px !important;display:block !important;max-width:1px !important;min-width:auto !important;top:0;"]),
                    "tooltip.tooltip": (0, u.K1)() && (0, r.iv)(["display:none !important;"])
                }, T)
            }
        },
        76455: function(t, e, n) {
            "use strict";
            n.d(e, {
                i: function() {
                    return i
                }
            });
            var r = n(2784),
                o = (0, r.createContext)((function() {})),
                i = function() {
                    return (0, r.useContext)(o)
                };
            e.Z = o.Provider
        },
        96386: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return m
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(52322),
                o = n(13980),
                i = n.n(o),
                c = n(36408),
                a = n(93899),
                u = n(1034),
                l = n(82965),
                s = n(86983),
                f = n(10099),
                d = n(77693);

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        b(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function b(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var g = function(t) {
                var e = t.children,
                    n = t.theme;
                return (0, r.jsx)(a.f6, {
                    theme: n,
                    children: e
                })
            };
            g.propTypes = {
                children: i().node,
                theme: i().shape({
                    baseColor: i().string,
                    baseHighlightColor: i().string,
                    buttonColorStr: i().string,
                    buttonHighlightColorStr: i().string,
                    buttonTextColorStr: i().string,
                    listColorStr: i().string,
                    listHighlightColorStr: i().string,
                    linkColorStr: i().string,
                    linkTextColorStr: i().string,
                    headerColorStr: i().string,
                    headerTextColorStr: i().string,
                    headerFocusRingColorStr: i().string,
                    headerBackgroundColorStr: i().string,
                    iconColor: i().string,
                    isMobile: i().bool
                }).isRequired
            }, g.defaultProps = {
                children: []
            };
            var m = (0, c.₹j)((function(t, e) {
                return {
                    theme: h(h({}, (n = (0, l.Lq)(t, "webWidget"), r = (0, f.pe)(), (0, s.k0)(h(h({}, r), n)))), {}, {
                        fontSize: u.Kt,
                        isMobile: (0, d.K1)()
                    }, e.theme)
                };
                var n, r
            }), null)(g)
        },
        45254: function(t, e, n) {
            "use strict";
            n.d(e, {
                xE: function() {
                    return j
                },
                PZ: function() {
                    return P
                },
                ₹_: function() {
                    return rt
                },
                wE: function() {
                    return₹
                },
                h4: function() {
                    return R
                },
                Km: function() {
                    return H
                },
                VJ: function() {
                    return I
                },
                mu: function() {
                    return T
                },
                or: function() {
                    return Q
                },
                Dx: function() {
                    return A
                },
                PU: function() {
                    return D
                },
                ₹L: function() {
                    return d
                },
                W3: function() {
                    return ot.Z
                }
            });
            var r = n(52322),
                o = n(13980),
                i = n.n(o),
                c = n(93899),
                a = n(65683),
                u = n(77693),
                l = n(70570),
                s = c.ZP.div.withConfig({
                    componentId: "sc-6hk0h1-0"
                })(["display:flex;flex-direction:column;box-sizing:border-box;color:", ";height:100%;width:100%;max-width:100vw;position:relative;overflow:hidden;background-color:", ";box-shadow:0 0 ", "rem 0 rgba(0,0,0,0.2);border-radius:", ";"], a.zdColorGrey800, a.zdColorWhite, (function(t) {
                    return 6 / t.theme.fontSize
                }), (function(t) {
                    return (0, u.K1)() || (0, l.Vk)() ? "none" : "".concat(8 / t.theme.fontSize, "rem")
                })),
                f = function(t) {
                    var e = t.children;
                    return (0, r.jsx)(s, {
                        children: e
                    })
                };
            f.propTypes = {
                children: i().node
            };
            var d = f,
                p = n(36408),
                h = n(99708),
                b = n(76455),
                g = n(1034),
                m = n(45150),
                y = n(82965),
                v = n(2784);

            function O() {
                return (O = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var w = v.createElement("path", {
                    d: "M12,4H3.4l2.3-2.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-4,4C0.2,4.4,0.1,4.5,0.1,4.6C0,4.9,0,5.1,0.1,5.4 c0.1,0.1,0.1,0.2,0.2,0.3l4,4C4.5,9.9,4.7,10,5,10s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L3.4,6H12c0.6,0,1-0.4,1-1S12.6,4,12,4z",
                    id: "Layer_4"
                }),
                E = (0, c.ZP)((function(t) {
                    var e = t.title,
                        n = t.titleId,
                        r = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = function(t, e) {
                                if (null == t) return {};
                                var n, r, o = {},
                                    i = Object.keys(t);
                                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                            }
                            return o
                        }(t, ["title", "titleId"]);
                    return v.createElement("svg", O({
                        width: 13,
                        height: 10,
                        viewBox: "0 0 13 9",
                        style: {
                            enableBackground: "new 0 0 13 9"
                        },
                        "aria-labelledby": n
                    }, r), e ? v.createElement("title", {
                        id: n
                    }, e) : null, w)
                })).withConfig({
                    componentId: "sc-1x4ee3r-0"
                })(["fill:", ";", ""], a.zdColorWhite, (function(t) {
                    return t.theme.rtl && "path {\n    transform: rotate(180deg);\n    transform-origin: 50% 50%;\n  }"
                })),
                S = function(t) {
                    var e = t.useReactRouter,
                        n = t.history,
                        o = (0, m.Z)(),
                        i = (0, p.v9)(y.tE),
                        c = (0, b.i)();
                    if (!e && !i) return null;
                    if (e && n.length <= 1) return null;
                    var a = e ? n.goBack : c;
                    return (0, r.jsx)(H, {
                        onClick: a,
                        "aria-label": o("embeddable_framework.navigation.back"),
                        children: (0, r.jsx)(E, {})
                    })
                };
            S.propTypes = {
                useReactRouter: i().bool,
                history: i().object
            };
            var j = (0, h.EN)(S),
                C = n(70902),
                _ = n(80712),
                k = function(t) {
                    var e = t.onClick,
                        n = (0, m.Z)(),
                        o = (0, p.I0)(),
                        i = e || function() {
                            return o((0, _.YC)())
                        };
                    return (0, r.jsx)(H, {
                        onClick: i,
                        "aria-label": n("embeddable_framework.navigation.minimize"),
                        children: (0, r.jsx)(C.Z, {})
                    })
                };
            k.propTypes = {
                onClick: i().func
            };
            var P = k,
                T = c.ZP.div.withConfig({
                    componentId: "sc-1q7kfbv-0"
                })(["padding:", "rem ", "rem;background:", " !important;color:", " !important;"], 8 / g.Kt, 14 / g.Kt, (function(t) {
                    return t.theme.headerColorStr
                }), (function(t) {
                    return t.theme.headerTextColorStr
                })),
                A = c.ZP.h1.attrs((function() {
                    return {
                        "data-testid": g.z7.WIDGET_TITLE
                    }
                })).withConfig({
                    componentId: "sc-7xf140-0"
                })(["font-weight:700;text-align:center;letter-spacing:", "rem;line-height:1.5;font-size:", "rem;flex-grow:1;margin-bottom:2px;"], .3 / g.Kt, 15 / g.Kt),
                I = c.ZP.div.withConfig({
                    componentId: "sc-5q4vmp-0"
                })([":not(:first-child){margin-top:", "rem;}"], 4 / g.Kt),
                L = (0, c.ZP)(I).withConfig({
                    componentId: "sc-1eab28x-0"
                })(["display:flex;align-content:stretch;align-items:center;min-height:", "rem;", "{&:first-child{margin-left:", "rem;}&:nth-child(2){margin-left:", "rem;}&:last-child{margin-right:", "rem;}&:nth-last-child(2){margin-right:", "rem;}}"], 2, A, 4, 2, 4, 2);
            L.propTypes = {
                children: i().node
            };
            var D = L,
                x = function(t) {
                    var e = t.children,
                        n = t.title,
                        o = t.useReactRouter,
                        i = t.showBackButton,
                        c = t.showCloseButton;
                    return (0, r.jsxs)(T, {
                        children: [(0, r.jsxs)(D, {
                            children: [i && (0, r.jsx)(j, {
                                useReactRouter: o
                            }), (0, r.jsx)(A, {
                                children: n
                            }), c && (0, r.jsx)(P, {})]
                        }), e]
                    })
                };
            x.propTypes = {
                children: i().node,
                title: i().string.isRequired,
                useReactRouter: i().bool.isRequired,
                showBackButton: i().bool.isRequired,
                showCloseButton: i().bool.isRequired
            }, x.defaultProps = {
                title: "",
                useReactRouter: !1,
                showTitle: !0,
                showBackButton: !0,
                showCloseButton: !0
            };
            var R = x,
                N = (n(34115), n(95342), n(68625), n(1939), n(62775), n(34769), n(70803)),
                F = (0, c.ZP)(N.hU).withConfig({
                    componentId: "d697ci-0"
                })(["flex-shrink:0;display:flex;align-items:center;justify-content:center;&&{width:", "rem;height:", "rem;}svg{width:1rem !important;height:1rem !important;}", " &:focus{outline:none !important;box-shadow:0 0 0 ", "rem rgba(255,255,255,0.4) !important;}&:hover{background:", " !important;}"], 2, 2, (function(t) {
                    return t.theme.headerTextColorStr ? (0, c.iv)(["svg,path{fill:", " !important;color:", " !important;}"], (function(t) {
                        return t.theme.headerTextColorStr
                    }), (function(t) {
                        return t.theme.headerTextColorStr
                    })) : ""
                }), 3 / g.Kt, (function(t) {
                    return t.theme.headerBackgroundColorStr
                }));

            function M(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function B(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? M(Object(n), !0).forEach((function(e) {
                        z(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function z(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var U = (0, v.forwardRef)((function(t, e) {
                var n = t.children,
                    o = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["children"]);
                return (0, r.jsx)(F, B(B({
                    isPill: !1,
                    ignoreThemeOverride: !0,
                    size: "small",
                    ref: e
                }, o), {}, {
                    children: n
                }))
            }));
            U.propTypes = {
                children: i().node
            };
            var H = U,
                W = (n(43105), n(18178), (0, u.vU)()),
                V = (0, u.w1)(),
                K = "\n  &::-webkit-scrollbar-track {\n    margin: ".concat(15 / g.Kt, " 0;\n  }\n\n  &::-webkit-scrollbar {\n    box-shadow: none;\n    width: ").concat(6 / g.Kt, "rem;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ").concat(a.zdColorGrey300, ";\n    border-radius: ").concat(3 / g.Kt, "rem;\n  }"),
                G = "\n  padding-left: ".concat(20 / g.Kt, "rem;\n  padding-right: ").concat(20 / g.Kt, "rem;\n  margin: 0;\n  scrollbar-width: thin;\n"),
                q = c.ZP.div.withConfig({
                    componentId: "sc-176ougy-0"
                })(["flex-grow:2;padding-top:", "rem;padding-left:", "rem;padding-right:", "rem;margin-left:", "rem;margin-right:", "rem;overflow-y:auto;overflow-x:hidden;height:100%;", " ", ""], 15 / g.Kt, 10 / g.Kt, 15 / g.Kt, 10 / g.Kt, 5 / g.Kt, !(W || V) && K, W && G);

            function Z(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Z(Object(n), !0).forEach((function(e) {
                        X(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function X(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var Q = (0, v.forwardRef)((function(t, e) {
                    var n = Object.assign({}, t);
                    return (0, r.jsx)(q, Y(Y({}, n), {}, {
                        ref: e
                    }))
                })),
                J = c.ZP.footer.withConfig({
                    componentId: "sc-6drfsk-0"
                })(["padding:", ";", ""], (function(t) {
                    switch (t.size) {
                        case "small":
                            return "".concat(10 / g.Kt, "rem ").concat(20 / g.Kt, "rem");
                        case "large":
                            return "".concat(15 / g.Kt, "rem ").concat(20 / g.Kt, "rem");
                        case "minimal":
                            return "0"
                    }
                }), (function(t) {
                    return t.shadow && "\n    border-top: ".concat(1.1 / g.Kt, "rem solid ").concat(a.zdColorGrey200, ";\n    box-shadow: ").concat("0 -".concat(1 / g.Kt, "rem ").concat(12 / g.Kt, "rem rgba(0,0,0,0.08)"), ";\n  ")
                }));
            J.propTypes = {
                size: i().oneOf(["small", "large", "minimal"]),
                shadow: i().bool
            }, J.defaultProps = {
                size: "large"
            };
            var₹ = J, tt = n(81155), et = c.ZP.div.withConfig({
                componentId: "bjzn5q-0"
            })(["display:flex;justify-content:space-between;align-items:flex-end;", " ", ""], (function(t) {
                return t.justLogo && "\n    justify-content: center;\n    align-items: center;\n  "
            }), (function(t) {
                return t.justChildren && "\n    justify-content: flex-end;\n  "
            })), nt = function(t) {
                var e = t.hideZendeskLogo,
                    n = t.children,
                    o = t.shadow,
                    i = void 0 === o || o;
                if (!n && e) return null;
                var c = !n;
                return (0, r.jsx)(₹, {
                    shadow: i,
                    size: c ? "small" : "large",
                    children: (0, r.jsxs)(et, {
                        justLogo: c,
                        justChildren: e,
                        children: [!e && (0, r.jsx)(tt.Z, {}), n]
                    })
                })
            };
            nt.propTypes = {
                hideZendeskLogo: i().bool,
                shadow: i().bool,
                children: i().node
            };
            var rt = (0, p.₹j)((function(t) {
                    return {
                        hideZendeskLogo: (0, y.Dh)(t)
                    }
                }))(nt),
                ot = n(96386)
        },
        81155: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return g
                }
            });
            var r = n(52322),
                o = (n(18178), n(13980)),
                i = n.n(o),
                c = n(36408),
                a = n(93899),
                u = n(65683),
                l = n(86024),
                s = (n(1034), n(16781), n(67165)),
                f = n(94265),
                d = n(70570),
                p = function(t, e) {
                    var n = (0, f.KO)(t),
                        r = (0, f.Kd)(t);
                    if (e) {
                        var o = ["?utm_source=webwidgetchat", "&utm_medium=poweredbyzendeskchat", "&utm_campaign=poweredbyzendesk", "&utm_term=".concat(n), "&utm_content=".concat((0, d.Jc)(d.tj)), "&iref=".concat(n), "&lang=".concat(r)].join("");
                        return [s.a.t("embeddable_framework.zendeskLogo.powered_by_url.chat"), o].join("")
                    }
                    return [s.a.t("embeddable_framework.zendeskLogo.powered_by_url.embeddables"), "?utm_source=webwidget&utm_medium=poweredbyzendesk&utm_campaign=image"].join("")
                },
                h = a.ZP.a.withConfig({
                    componentId: "sc-1slnzzg-0"
                })(["", ""], (function(t) {
                    return "\n      position: relative;\n      display: inline-block;\n\n      svg {\n        min-width: ".concat(50 / t.theme.fontSize, "rem;\n        width: ").concat(50 / t.theme.fontSize, "rem;\n        height: ").concat(10 / t.theme.fontSize, "rem;\n\n        &:hover,\n        &:active,\n        &:focus {\n          path {\n            fill: ").concat(u.zdColorGrey600, ";\n          }\n        }\n\n        path {\n          fill: ").concat(u.zdColorGrey500, ";\n        }\n      }\n  ")
                })),
                b = function(t) {
                    var e = t.href;
                    return (0, r.jsx)(h, {
                        href: e,
                        target: "_blank",
                        tabIndex: "-1",
                        children: (0, r.jsx)(l.default, {
                            title: "zendesk"
                        })
                    })
                };
            b.propTypes = {
                href: i().string.isRequired
            };
            var g = (0, c.₹j)((function(t, e) {
                return {
                    href: p(t, e.linkToChat)
                }
            }))(b)
        },
        32465: function(t, e, n) {
            "use strict";
            n.d(e, {
                sN: function() {
                    return r
                },
                gs: function() {
                    return o
                },
                jp: function() {
                    return i
                },
                CI: function() {
                    return c
                },
                cc: function() {
                    return a
                },
                H₹: function() {
                    return u
                },
                QX: function() {
                    return l
                },
                ek: function() {
                    return s
                },
                Id: function() {
                    return f
                },
                en: function() {
                    return d
                },
                aR: function() {
                    return p
                },
                hK: function() {
                    return h
                },
                e_: function() {
                    return b
                }
            });
            var r = "close",
                o = "connected",
                i = "end",
                c = "start",
                a = "status",
                u = "unreadMessages",
                l = "open",
                s = "departmentStatus",
                f = "popout",
                d = "isChatting",
                p = "departments",
                h = "department",
                b = "display"
        },
        53599: function(t, e, n) {
            "use strict";
            n.d(e, {
                Rl: function() {
                    return r
                },
                Fh: function() {
                    return o
                },
                SC: function() {
                    return i
                },
                LX: function() {
                    return c
                },
                E9: function() {
                    return a
                },
                YP: function() {
                    return u
                },
                Bz: function() {
                    return l
                },
                Fk: function() {
                    return s
                },
                FR: function() {
                    return f
                },
                fd: function() {
                    return d
                },
                EI: function() {
                    return p
                },
                t₹: function() {
                    return h
                },
                Fy: function() {
                    return b
                },
                do: function() {
                    return g
                },
                jw: function() {
                    return m
                },
                me: function() {
                    return y
                },
                bQ: function() {
                    return v
                },
                W7: function() {
                    return O
                },
                nd: function() {
                    return w
                },
                eU: function() {
                    return E
                },
                CR: function() {
                    return S
                },
                WO: function() {
                    return j
                },
                Hz: function() {
                    return C
                },
                u_: function() {
                    return _
                },
                B_: function() {
                    return k
                },
                x6: function() {
                    return P
                },
                Cz: function() {
                    return T
                }
            });
            var r = "websdk",
                o = "jwt verification error",
                i = 200,
                c = 2500,
                a = 6e4,
                u = 18e5,
                l = 1,
                s = "widget/chat/EDIT_CONTACT_DETAILS_SCREEN",
                f = "widget/chat/EDIT_CONTACT_DETAILS_LOADING_SCREEN",
                d = "widget/chat/EDIT_CONTACT_DETAILS_ERROR_SCREEN",
                p = {
                    PENDING: "pending",
                    DONE: "done",
                    FAIL: "fail"
                },
                h = {
                    GOOGLE: "google",
                    FACEBOOK: "facebook"
                },
                b = {
                    CHAT_EVENT_MSG: "chat.msg",
                    CHAT_EVENT_FILE: "chat.file"
                },
                g = {
                    CHAT_QUICK_REPLIES: "chat.quick_replies"
                },
                m = {
                    CHAT_EVENT_MEMBERJOIN: "chat.memberjoin",
                    CHAT_EVENT_MEMBERLEAVE: "chat.memberleave",
                    CHAT_EVENT_COMMENT: "chat.comment",
                    CHAT_EVENT_RATING: "chat.rating",
                    CHAT_EVENT_REQUEST_RATING: "chat.request.rating",
                    CHAT_EVENT_CONTACT_DETAILS_UPDATED: "chat.contact_details.updated"
                },
                y = ["user_no_ping", "disconnect_user", "kick_account", "unauthorized_user"],
                v = {
                    NOT_SUPPORTED: "not_supported",
                    NOT_ALLOWED: "not_allowed",
                    CONN_ERROR: "conn_error",
                    INVALID_EXTENSION: "invalid_extension",
                    EXCEED_SIZE_LIMIT: "exceed_size_limit",
                    INTERNAL_ERROR: "internal_error",
                    UNKNOWN_ERROR: "unknown_error",
                    INVALID_PLAN: "not_allowed"
                },
                O = {
                    LOGOUT_PENDING: "widget/chat/CHAT_SOCIAL_LOGOUT_PENDING",
                    LOGOUT_SUCCESS: "widget/chat/CHAT_SOCIAL_LOGOUT_SUCCESS",
                    LOGOUT_FAILURE: "widget/chat/CHAT_SOCIAL_LOGOUT_FAILURE"
                },
                w = {
                    MAIN: "widget/chat/OFFLINE_FORM_MAIN_SCREEN",
                    LOADING: "widget/chat/OFFLINE_FORM_LOADING_SCREEN",
                    SUCCESS: "widget/chat/OFFLINE_FORM_SUCCESS_SCREEN",
                    OPERATING_HOURS: "widget/chat/OFFLINE_FORM_OPERATING_HOURS_SCREEN"
                },
                E = {
                    CHAT_MESSAGE_SUCCESS: "CHAT_MESSAGE_SUCCESS",
                    CHAT_MESSAGE_FAILURE: "CHAT_MESSAGE_FAILURE",
                    CHAT_MESSAGE_PENDING: "CHAT_MESSAGE_PENDING"
                },
                S = "agent:trigger",
                j = {
                    CONNECTING: "connecting",
                    CONNECTED: "connected",
                    CLOSED: "closed"
                },
                C = {
                    ONLINE: "online",
                    OFFLINE: "offline",
                    AWAY: "away"
                },
                _ = {
                    QUICK_REPLIES: "QUICK_REPLIES",
                    CHAT_STRUCTURED_MESSAGE_TYPE: {
                        BUTTON_TEMPLATE: "BUTTON_TEMPLATE",
                        PANEL_TEMPLATE: "PANEL_TEMPLATE",
                        LIST_TEMPLATE: "LIST_TEMPLATE"
                    },
                    CAROUSEL: {
                        PANEL_TEMPLATE: "PANEL_TEMPLATE_CAROUSEL"
                    }
                },
                k = {
                    QUICK_REPLY_ACTION: "QUICK_REPLY_ACTION",
                    LINK_ACTION: "LINK_ACTION"
                },
                P = {
                    UNKNOWN: "unknown",
                    BANNED: "banned",
                    IDLE: "idle_disconnect",
                    SERVER_ERROR: "server_error",
                    LOGOUT: "logged_out",
                    AUTH_FAIL: "authentication_fail"
                },
                T = {
                    AGENT_ENDS_CHAT: "agent_ends_chat"
                }
        },
        85581: function(t, e, n) {
            "use strict";
            n.d(e, {
                dM: function() {
                    return r
                },
                iC: function() {
                    return o
                },
                zf: function() {
                    return i
                },
                G1: function() {
                    return c
                },
                H6: function() {
                    return a
                },
                Ne: function() {
                    return u
                },
                lD: function() {
                    return l
                },
                WL: function() {
                    return s
                },
                t8: function() {
                    return f
                },
                zM: function() {
                    return d
                }
            });
            var r = "WIDGET_CLOSED_EVENT",
                o = "WIDGET_OPENED_EVENT",
                i = "CHAT_CONNECTED_EVENT",
                c = "CHAT_ENDED_EVENT",
                a = "CHAT_STARTED_EVENT",
                u = "CHAT_STATUS_EVENT",
                l = "CHAT_UNREAD_MESSAGES_EVENT",
                s = "CHAT_DEPARTMENT_STATUS_EVENT",
                f = "CHAT_POPOUT_EVENT",
                d = "USER_EVENT"
        },
        34103: function(t, e, n) {
            "use strict";
            n.d(e, {
                J: function() {
                    return r
                }
            });
            var r = "preview/CHAT"
        },
        91386: function(t, e, n) {
            "use strict";
            n.d(e, {
                F: function() {
                    return s
                }
            }), n(18178);
            var r = n(22031),
                o = n.n(r),
                i = n(99680),
                c = n.n(i),
                a = n(49149),
                u = n.n(a),
                l = n(47871),
                s = "\n  ".concat(n.n(l)(), "\n  ").concat(o(), "\n  ").concat(u(), "\n  ").concat(c(), "\n")
        },
        57829: function(t, e, n) {
            "use strict";
            n.d(e, {
                Po: function() {
                    return r
                },
                Yn: function() {
                    return o
                },
                F9: function() {
                    return i
                },
                Wr: function() {
                    return c
                },
                Tf: function() {
                    return a
                },
                sm: function() {
                    return u
                },
                h5: function() {
                    return l
                }
            });
            var r = "widget/answerBot/ARTICLE_DISMISSED_PENDING",
                o = "widget/answerBot/ARTICLE_DISMISSED_FULFILLED",
                i = "widget/answerBot/ARTICLE_DISMISSED_REJECTED",
                c = "widget/answerBot/ARTICLE_VIEWED_PENDING",
                a = "widget/answerBot/ARTICLE_VIEWED_FULFILLED",
                u = "widget/answerBot/ARTICLE_VIEWED_REJECTED",
                l = "widget/answerBot/ORIGINAL_ARTICLE_CLICKED"
        },
        37908: function(t, e, n) {
            "use strict";
            n.d(e, {
                Q0: function() {
                    return r
                },
                Li: function() {
                    return o
                },
                t9: function() {
                    return i
                },
                rT: function() {
                    return c
                },
                h₹: function() {
                    return a
                },
                vO: function() {
                    return u
                },
                bU: function() {
                    return l
                },
                y3: function() {
                    return s
                },
                Jf: function() {
                    return f
                }
            });
            var r = "widget/answerBot/QUESTION_VALUE_CHANGED",
                o = "widget/answerBot/QUESTION_VALUE_SUBMITTED",
                i = "widget/answerBot/QUESTION_SUBMITTED_PENDING",
                c = "widget/answerBot/QUESTION_SUBMITTED_FULFILLED",
                a = "widget/answerBot/QUESTION_SUBMITTED_REJECTED",
                u = "widget/answerBot/CONVERSATION_SCROLL_CHANGED",
                l = "widget/answerBot/CONVERSATION_SCREEN_CLOSED",
                s = "widget/answerBot/GET_IN_TOUCH_SHOWN",
                f = "widget/answerBot/GET_IN_TOUCH_CLICKED"
        },
        12252: function(t, e, n) {
            "use strict";
            n.d(e, {
                yJ: function() {
                    return r
                },
                ES: function() {
                    return o
                },
                oH: function() {
                    return i
                },
                UG: function() {
                    return c
                },
                LD: function() {
                    return a
                },
                gt: function() {
                    return u
                },
                mx: function() {
                    return l
                },
                eW: function() {
                    return s
                },
                zA: function() {
                    return f
                },
                S6: function() {
                    return d
                },
                GT: function() {
                    return p
                },
                X7: function() {
                    return h
                }
            });
            var r = "widget/answerBot/BOT_MESSAGE",
                o = "widget/answerBot/BOT_GREETED",
                i = "widget/answerBot/BOT_INITIAL_FALLBACK",
                c = "widget/answerBot/BOT_CHANNEL_CHOICE",
                a = "widget/answerBot/BOT_FEEDBACK",
                u = "widget/answerBot/BOT_FEEDBACK_REQUESTED",
                l = "widget/answerBot/BOT_TYPING",
                s = "widget/answerBot/BOT_CONTEXTUAL_SEARCH_RESULTS",
                f = "widget/answerBot/SCREEN_CHANGED",
                d = "widget/answerBot/ARTICLE_SHOWN",
                p = "widget/answerBot/CONTEXTUAL_ARTICLE_SHOWN",
                h = "widget/answerBot/CONTEXTUAL_SEARCH_FINISHED"
        },
        59388: function(t, e, n) {
            "use strict";
            n.d(e, {
                zk: function() {
                    return r
                },
                Ul: function() {
                    return o
                },
                x_: function() {
                    return i
                },
                Od: function() {
                    return c
                },
                WA: function() {
                    return a
                },
                OT: function() {
                    return u
                }
            });
            var r = "widget/answerBot/SESSION_STARTED",
                o = "widget/answerBot/SESSION_RESOLVED_PENDING",
                i = "widget/answerBot/SESSION_RESOLVED_REJECTED",
                c = "widget/answerBot/SESSION_RESOLVED_FULFILLED",
                a = "widget/answerBot/SESSION_FALLBACK",
                u = "widget/answerBot/SESSION_AUTO_SCROLL"
        },
        22551: function(t, e, n) {
            "use strict";
            n.d(e, {
                Bw: function() {
                    return r
                },
                S8: function() {
                    return o
                },
                kK: function() {
                    return i
                },
                yH: function() {
                    return c
                }
            });
            var r = 1,
                o = 65,
                i = "conversation",
                c = "article"
        },
        46605: function(t, e, n) {
            "use strict";
            n.d(e, {
                jI: function() {
                    return E
                },
                sP: function() {
                    return S
                },
                CZ: function() {
                    return _
                },
                u_: function() {
                    return k
                },
                yW: function() {
                    return P
                },
                y4: function() {
                    return T
                }
            }), n(34115), n(634), n(20796), n(95342), n(68625), n(62775), n(32501), n(26936);
            var r = n(15621),
                o = n.n(r),
                i = n(68336),
                c = n.n(i),
                a = (n(43450), n(34769), n(15735), n(79321), n(58188), n(28673), n(6886), n(1939), n(27233), n(24949)),
                u = n(67165),
                l = n(41275),
                s = n(94265);

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        h(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function b(t) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var g = function(t) {
                    return t.answerBot.conversation
                },
                m = function(t, e) {
                    return e.messageKeys.map((function(e) {
                        return O(t).get(e)
                    }))
                },
                y = function(t, e) {
                    t[Object.keys(t).length] = e
                },
                v = (0, a.createSelector)([function(t) {
                    return t.answerBot
                }], (function(t) {
                    return t.messages
                })),
                O = (0, a.createSelector)([v, s.Kd], (function(t, e) {
                    var n = new Map;
                    return t.forEach((function(t, e) {
                        t.message && "object" === b(t.message) ? n.set(e, p(p({}, t), {}, {
                            message: u.a.t(t.message.key, t.message.interpolation)
                        })) : n.set(e, t)
                    })), n
                })),
                w = (0, a.createSelector)(O, (function(t) {
                    var e = t.size;
                    return 0 === e ? null : Array.from(t)[e - 1][1]
                })),
                E = (0, a.createSelector)(w, (function(t) {
                    return c()(t, "type", "")
                })),
                S = (0, a.createSelector)(O, (function(t) {
                    var e, n, r = {},
                        o = {
                            messageKeys: [],
                            isVisitor: void 0
                        },
                        i = !1,
                        c = [],
                        a = function(t, e) {
                            var n;
                            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                                if (Array.isArray(t) || (n = function(t, e) {
                                        if (t) {
                                            if ("string" == typeof t) return f(t, e);
                                            var n = Object.prototype.toString.call(t).slice(8, -1);
                                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? f(t, e) : void 0
                                        }
                                    }(t)) || e && t && "number" == typeof t.length) {
                                    n && (t = n);
                                    var r = 0,
                                        o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return r >= t.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: t[r++]
                                            }
                                        },
                                        e: function(t) {
                                            throw t
                                        },
                                        f: o
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var i, c = !0,
                                a = !1;
                            return {
                                s: function() {
                                    n = t[Symbol.iterator]()
                                },
                                n: function() {
                                    var t = n.next();
                                    return c = t.done, t
                                },
                                e: function(t) {
                                    a = !0, i = t
                                },
                                f: function() {
                                    try {
                                        c || null == n.return || n.return()
                                    } finally {
                                        if (a) throw i
                                    }
                                }
                            }
                        }(t);
                    try {
                        for (a.s(); !(n = a.n()).done;) {
                            var u = n.value,
                                l = u[1];
                            if (e = u, "botTyping" !== l.type) {
                                if (i) {
                                    if ("feedback" === l.type || l.feedbackRelated) {
                                        c.push(u);
                                        continue
                                    }
                                    "feedbackRequested" !== l.type && (o = j(c, o, r), i = !1, c = [])
                                }
                                "feedbackRequested" !== l.type ? o = C(o, r, u) : (i = !0, c = [])
                            }
                        }
                    } catch (t) {
                        a.e(t)
                    } finally {
                        a.f()
                    }
                    return c.length > 0 && (o = j(c, o, r)), e && "botTyping" === e[1].type && (o = C(o, r, e)), y(r, o), r
                })),
                j = function(t, e, n) {
                    return o()(t, (function(r, o) {
                        var i;
                        if ("feedback" === r[1].type && ((i = t[o + 1]) && i[1].feedbackRelated && i[1].isVisitor)) return;
                        e = C(e, n, r)
                    })), e
                },
                C = function(t, e, n) {
                    var r = n[1];
                    return r.isVisitor !== t.isVisitor && (t.messageKeys.length > 0 && y(e, t), t = {
                        messageKeys: [],
                        isVisitor: r.isVisitor
                    }), t.messageKeys.push(n[0]), t
                },
                _ = function() {
                    return (0, a.createSelector)([m, l.Rx], (function(t, e) {
                        return t.map((function(t) {
                            return "results" === t.type && (t.articles = e.get(t.sessionID).articles), t
                        }))
                    }))
                },
                k = (0, a.createSelector)([g], (function(t) {
                    return t.lastScroll
                })),
                P = (0, a.createSelector)([g], (function(t) {
                    return t.lastScreenClosed
                })),
                T = (0, a.createSelector)(g, (function(t) {
                    return t.getInTouchVisible
                }))
        },
        83166: function(t, e, n) {
            "use strict";
            n.d(e, {
                sI: function() {
                    return f
                },
                ej: function() {
                    return d
                },
                pb: function() {
                    return p
                },
                _q: function() {
                    return h
                },
                LC: function() {
                    return b
                },
                l5: function() {
                    return g
                },
                IG: function() {
                    return m
                },
                g: function() {
                    return y
                },
                uL: function() {
                    return E
                },
                Yp: function() {
                    return S
                },
                pZ: function() {
                    return j
                },
                CL: function() {
                    return C
                },
                hG: function() {
                    return _
                },
                Ku: function() {
                    return k
                },
                fi: function() {
                    return P
                },
                dg: function() {
                    return T
                },
                o2: function() {
                    return A
                },
                ₹x: function() {
                    return I
                },
                bW: function() {
                    return L
                }
            });
            var r = n(68336),
                o = n.n(r),
                i = (n(49228), n(24949)),
                c = n(46605),
                a = n(41275),
                u = n(7110),
                l = n(82965),
                s = function(t) {
                    return t.answerBot
                },
                f = (0, i.createSelector)([s], (function(t) {
                    return t.currentSessionID
                })),
                d = (0, i.createSelector)([s], (function(t) {
                    return t.questionValueChangedTime
                })),
                p = (0, i.createSelector)([f, a.Rx], (function(t, e) {
                    var n = e && e.get(t);
                    return n ? n.requestStatus : null
                })),
                h = (0, i.createSelector)([f, a.Rx], (function(t, e) {
                    var n = e && e.get(t);
                    return n ? n.deflection : null
                })),
                b = (0, i.createSelector)([f, a.Rx], (function(t, e) {
                    var n = e && e.get(t);
                    return n ? n.interactionToken : null
                })),
                g = (0, i.createSelector)([f, a.Rx], (function(t, e) {
                    var n = e && e.get(t);
                    return n ? n.query : null
                })),
                m = (0, i.createSelector)([f, a.Rx], (function(t, e) {
                    var n = e && e.get(t);
                    return !(!n || !n.resolved)
                })),
                y = (0, i.createSelector)(s, (function(t) {
                    return o()(t, "currentArticle.articleID", null)
                })),
                v = (0, i.createSelector)(s, (function(t) {
                    return o()(t, "currentContextualArticle.articleID", null)
                })),
                O = (0, i.createSelector)([s], (function(t) {
                    return t.currentArticle ? t.currentArticle.sessionID : null
                })),
                w = (0, i.createSelector)([v, u.Zz], (function(t, e) {
                    return t ? e[t] : null
                })),
                E = (0, i.createSelector)([w, y, O, a.Rx], (function(t, e, n, r) {
                    if (t) return t;
                    var o = r && r.get(n);
                    return (o && o.articles || []).find((function(t) {
                        return t.id === e
                    }))
                })),
                S = function(t, e) {
                    var n = e.sessionID,
                        r = e.articleID,
                        o = (0, a.Rx)(t),
                        i = o && o.get(n);
                    return (i && i.articles || []).find((function(t) {
                        return t.id === r
                    }))
                },
                j = (0, i.createSelector)([v, E, O, f, m], (function(t, e, n, r, o) {
                    return !(t || n !== r || o || e && e.markedAsIrrelevant)
                })),
                C = (0, i.createSelector)([s], (function(t) {
                    return t.currentScreen
                })),
                _ = (0, i.createSelector)([s], (function(t) {
                    return t.currentMessage
                })),
                k = (0, i.createSelector)([s], (function(t) {
                    return !!t.greeted
                })),
                P = (0, i.createSelector)([s], (function(t) {
                    return !!t.initialFallbackSuggested
                })),
                T = (0, i.createSelector)(s, (function(t) {
                    return !!t.contextualSearchFinished
                })),
                A = (0, i.createSelector)([u.vt, u.Af, c.jI, u.Gv], (function(t, e, n, r) {
                    return t ? e && "botTyping" !== n ? "PENDING" : !e && r > 0 ? "COMPLETED" : e || 0 !== r ? null : "NO_RESULTS" : null
                })),
                I = (0, i.createSelector)([c.y4, l.Yj], (function(t, e) {
                    return e && t
                })),
                L = function(t) {
                    var e = O(t);
                    if (e) {
                        var n = (0, a.cB)(t, e);
                        if (n && n.deflection) return n.deflection.auth_token
                    }
                }
        },
        41275: function(t, e, n) {
            "use strict";
            n.d(e, {
                Rx: function() {
                    return i
                },
                cB: function() {
                    return c
                },
                ic: function() {
                    return a
                },
                WZ: function() {
                    return u
                },
                DO: function() {
                    return l
                }
            });
            var r = n(24949),
                o = function(t) {
                    return t.answerBot.currentSessionID
                },
                i = function(t) {
                    return t.answerBot.sessions
                },
                c = function(t, e) {
                    return t.answerBot.sessions && t.answerBot.sessions.get(e)
                },
                a = (0, r.createSelector)([i], (function(t) {
                    return 1 === t.size
                })),
                u = (0, r.createSelector)([o, i], (function(t, e) {
                    var n = e && e.get(t);
                    return !(!n || !n.fallbackSuggested)
                })),
                l = (0, r.createSelector)([o, i], (function(t, e) {
                    var n = e && e.get(t);
                    return n && n.articles && n.articles.length || 0
                }))
        },
        79264: function(t, e, n) {
            "use strict";
            n.d(e, {
                cX: function() {
                    return r
                },
                S9: function() {
                    return o
                },
                GJ: function() {
                    return i
                },
                Ob: function() {
                    return c
                },
                oU: function() {
                    return a
                },
                C_: function() {
                    return u
                },
                mE: function() {
                    return l
                },
                _9: function() {
                    return s
                }
            });
            var r = "widget/chat/RECEIVE_DEFERRED_CHAT_STATUS",
                o = "widget/chat/DEFER_CHAT_SETUP",
                i = "widget/chat/BEGIN_CHAT_SETUP",
                c = "widget/chat/EMAIL_TRANSCRIPT_REQUEST_SENT",
                a = "widget/chat/EMAIL_TRANSCRIPT_SUCCESS",
                u = "widget/chat/EMAIL_TRANSCRIPT_FAILURE",
                l = "widget/chat/UPDATE_CHAT_MENU_VISIBILITY",
                s = "widget/chat/SOUND_ICON_CLICKED"
        },
        87165: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return g
                },
                k: function() {
                    return h
                }
            });
            var r = n(52322),
                o = n(13980),
                i = n.n(o),
                c = n(76838),
                a = n(33367),
                u = n(1034),
                l = n(45150),
                s = (n(18178), n(93899)),
                f = n(70803),
                d = s.ZP.div.withConfig({
                    componentId: "sc-124qdci-0"
                })(["display:inline-flex;flex-shrink:0;"]),
                p = (0, s.ZP)(f.hU).withConfig({
                    componentId: "sc-124qdci-1"
                })(["&&&{", " &{width:3rem;height:3rem;}svg{width:42%;height:42%;}&:focus{box-shadow:inset 0 0 0 ", "rem ", " !important;}"], (function(t) {
                    return t.selected && "\n      background-color: ".concat(t.theme.baseColor, " !important;\n      color: ").concat(t.theme.headerTextColorStr, " !important;\n\n      &:hover, &:focus {\n        background-color: ").concat(t.theme.baseHighlightColor, " !important\n      }\n  ")
                }), 3 / u.Kt, (function(t) {
                    return t.selected ? "rgba(255,255,255,0.4)" : t.theme.headerFocusRingColorStr
                })),
                h = {
                    GOOD: "good",
                    BAD: "bad",
                    NOT_SET: null
                },
                b = function(t) {
                    var e = t.rating,
                        n = void 0 === e ? h.NOT_SET : e,
                        o = t.updateRating,
                        i = (0, l.Z)(),
                        u = function(t) {
                            var e = n === t ? h.NOT_SET : t;
                            o(e)
                        };
                    return (0, r.jsxs)(d, {
                        children: [(0, r.jsx)(p, {
                            size: "small",
                            selected: n === h.GOOD,
                            "aria-label": i("embeddable_framework.chat.chatLog.rating.title.good"),
                            onClick: function() {
                                return u(h.GOOD)
                            },
                            ignoreThemeOverride: !0,
                            children: (0, r.jsx)(a.default, {})
                        }), (0, r.jsx)(p, {
                            isThumbsDown: !0,
                            selected: n === h.BAD,
                            size: "small",
                            "aria-label": i("embeddable_framework.chat.chatLog.rating.title.bad"),
                            onClick: function() {
                                return u(h.BAD)
                            },
                            ignoreThemeOverride: !0,
                            children: (0, r.jsx)(c.default, {})
                        })]
                    })
                };
            b.propTypes = {
                updateRating: i().func.isRequired,
                rating: i().string
            };
            var g = b
        },
        76914: function(t, e, n) {
            "use strict";
            n.d(e, {
                yj: function() {
                    return r.yj
                },
                Bn: function() {
                    return r.Bn
                },
                bc: function() {
                    return r.bc
                },
                c_: function() {
                    return r.c_
                },
                SX: function() {
                    return r.SX
                },
                Jj: function() {
                    return r.Jj
                },
                Zc: function() {
                    return r.Zc
                },
                Y7: function() {
                    return r.Y7
                },
                Y8: function() {
                    return r.Y8
                },
                YA: function() {
                    return r.YA
                },
                wZ: function() {
                    return r.wZ
                },
                L2: function() {
                    return r.L2
                },
                jk: function() {
                    return r.jk
                },
                sc: function() {
                    return r.sc
                },
                Cb: function() {
                    return r.Cb
                },
                BV: function() {
                    return r.BV
                },
                X8: function() {
                    return r.X8
                },
                B5: function() {
                    return r.B5
                },
                kE: function() {
                    return r.kE
                },
                hG: function() {
                    return r.hG
                },
                hp: function() {
                    return r.hp
                },
                gy: function() {
                    return r.gy
                },
                oO: function() {
                    return r.oO
                },
                Ps: function() {
                    return r.Ps
                },
                By: function() {
                    return r.By
                },
                QD: function() {
                    return r.QD
                },
                Fu: function() {
                    return r.Fu
                },
                oA: function() {
                    return r.oA
                },
                LX: function() {
                    return r.LX
                },
                Tm: function() {
                    return r.Tm
                },
                yH: function() {
                    return r.yH
                },
                lK: function() {
                    return r.lK
                },
                wk: function() {
                    return r.wk
                },
                OH: function() {
                    return r.OH
                },
                iM: function() {
                    return r.iM
                },
                Qb: function() {
                    return r.Qb
                },
                j3: function() {
                    return r.j3
                },
                OQ: function() {
                    return r.OQ
                },
                Yi: function() {
                    return r.Yi
                },
                H_: function() {
                    return r.H_
                },
                kh: function() {
                    return r.kh
                },
                r2: function() {
                    return r.r2
                },
                SJ: function() {
                    return r.SJ
                },
                KU: function() {
                    return r.KU
                },
                Ok: function() {
                    return r.Ok
                },
                EL: function() {
                    return r.EL
                },
                G7: function() {
                    return r.G7
                },
                de: function() {
                    return r.de
                },
                v6: function() {
                    return r.v6
                },
                of: function() {
                    return r.of
                },
                AC: function() {
                    return r.AC
                },
                ₹w: function() {
                    return r.₹w
                },
                Pv: function() {
                    return r.Pv
                },
                hB: function() {
                    return r.hB
                },
                ek: function() {
                    return r.ek
                },
                _A: function() {
                    return r._A
                },
                b7: function() {
                    return r.b7
                },
                cA: function() {
                    return r.cA
                },
                ₹F: function() {
                    return r.₹F
                },
                qT: function() {
                    return r.pe
                },
                hC: function() {
                    return r.hC
                },
                q_: function() {
                    return r.q_
                },
                MP: function() {
                    return r.MP
                },
                ps: function() {
                    return r.ps
                },
                u6: function() {
                    return r.u6
                },
                Zv: function() {
                    return o.Zv
                },
                Vy: function() {
                    return o.Vy
                },
                FZ: function() {
                    return o.FZ
                },
                ud: function() {
                    return o.ud
                },
                zC: function() {
                    return o.zC
                },
                SR: function() {
                    return o.SR
                },
                Ef: function() {
                    return o.Ef
                },
                uz: function() {
                    return o.uz
                },
                Lg: function() {
                    return o.Lg
                },
                iI: function() {
                    return o.iI
                },
                S7: function() {
                    return o.S7
                },
                PV: function() {
                    return o.PV
                },
                pe: function() {
                    return o.pe
                },
                PC: function() {
                    return o.PC
                },
                O3: function() {
                    return o.O3
                },
                BH: function() {
                    return o.BH
                },
                G2: function() {
                    return o.G2
                },
                v7: function() {
                    return o.v7
                },
                ZL: function() {
                    return o.ZL
                },
                E0: function() {
                    return o.oA
                },
                sO: function() {
                    return o.sO
                }
            });
            var r = n(44141),
                o = n(81578)
        },
        81578: function(t, e, n) {
            "use strict";
            n.d(e, {
                BH: function() {
                    return x
                },
                zC: function() {
                    return R
                },
                Vy: function() {
                    return N
                },
                Zv: function() {
                    return F
                },
                ud: function() {
                    return M
                },
                FZ: function() {
                    return B
                },
                PC: function() {
                    return z
                },
                oA: function() {
                    return U
                },
                PV: function() {
                    return H
                },
                v7: function() {
                    return W
                },
                G2: function() {
                    return V
                },
                uz: function() {
                    return K
                },
                sO: function() {
                    return G
                },
                ZL: function() {
                    return q
                },
                iI: function() {
                    return Z
                },
                Lg: function() {
                    return Y
                },
                S7: function() {
                    return X
                },
                O3: function() {
                    return Q
                },
                pe: function() {
                    return J
                },
                SR: function() {
                    return₹
                },
                Ef: function() {
                    return tt
                }
            }), n(34115), n(634), n(20796), n(32501), n(68625), n(1939), n(62775);
            var r = n(91541),
                o = n.n(r),
                i = n(85267),
                c = n.n(i),
                a = n(78053),
                u = n.n(a),
                l = n(12643),
                s = n.n(l),
                f = n(73340),
                d = n.n(f),
                p = n(67647),
                h = n.n(p),
                b = n(23117),
                g = n.n(b),
                m = n(7165),
                y = n.n(m),
                v = n(60650),
                O = n.n(v),
                w = n(68336),
                E = n.n(w),
                S = (n(43450), n(95342), n(27233), n(28673), n(18178), n(34769), n(15735), n(58188), n(6886), n(26936), n(51095)),
                j = n.n(S),
                C = n(24949),
                _ = n(53599),
                k = n(78703),
                P = n(70570),
                T = n(44141);

            function A(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? A(Object(n), !0).forEach((function(e) {
                        D(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function L(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function D(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var x = (0, C.createSelector)([T.Y8], (function(t) {
                    return t.required
                })),
                R = (0, C.createSelector)([T.G7, T.j3, T.u6], (function(t, e, n) {
                    return !E()(n, "getAuthLoginUrl") || e ? {} : O()(t.loginTypes, (function(t, e, r) {
                        var o = y()(_.t₹, r);
                        return e && o && (t[r] = n.getAuthLoginUrl(r)), t
                    }), {})
                })),
                N = (0, C.createSelector)(T.y2, (function(t) {
                    var e, n = Array.from(t).filter((function(t) {
                        return t[0] !== _.CR
                    })).map((function(t) {
                        return D({}, t[0], t[1])
                    }));
                    return g().apply(void 0, [{}].concat(function(t) {
                        if (Array.isArray(t)) return L(t)
                    }(e = n) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return L(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? L(t, e) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()))
                })),
                F = (0, C.createSelector)(N, (function(t) {
                    return Object.keys(t).length
                })),
                M = (0, C.createSelector)([N, T.WJ], (function(t, e) {
                    return h()({}, t, e)
                })),
                B = function(t) {
                    return d()(N(t), (function(t, e) {
                        return t.typing && e !== _.CR
                    }))
                },
                z = function(t) {
                    for (var e = Array.from((0, T.zG)(t).values()), n = !1, r = e.length - 1; r >= 0; r--) {
                        var o = e[r];
                        if (o.nick && o.nick.indexOf("visitor") > -1) {
                            if (o.type === _.jw.CHAT_EVENT_MEMBERLEAVE) break;
                            if (o.type !== _.jw.CHAT_EVENT_MEMBERJOIN) return !1
                        }
                        y()(_.Fy, o.type) && (0, T.YN)(o.nick) && (n = !0)
                    }
                    return n
                },
                U = (0, C.createSelector)(T.uc, (function(t) {
                    switch (t) {
                        case "basic_avatar":
                        case "bubble_avatar":
                            return !0;
                        default:
                            return !1
                    }
                })),
                H = (0, C.createSelector)([T.B2, T.By, T.JI], (function(t, e, n) {
                    return n ? t.department_schedule ? I(I({}, t), {}, {
                        department_schedule: s()(t.department_schedule, (function(t, n) {
                            return I({
                                schedule: t
                            }, u()(e, (function(t) {
                                return t.id == n
                            })))
                        }))
                    }) : t : {
                        enabled: !1
                    }
                })),
                W = (0, C.createSelector)([T.sc, T.hB, N], (function(t, e, n) {
                    return !t.value && e.enabled && c()(n) > 0 && !t.disableEndScreen
                })),
                V = (0, C.createSelector)([T.jk, T.OQ, W, T.H_], (function(t, e, n, r) {
                    return !(t || e || n || r)
                })),
                K = (0, C.createSelector)([T.zG], (function(t) {
                    var e = Array.from(t.values());
                    return d()(e, (function(t) {
                        return y()(t.nick, "agent") && y()(_.Fy, t.type)
                    }))
                })),
                G = (0, C.createSelector)([K, T.SJ], (function(t, e) {
                    return !e || !!u()(t, (function(t) {
                        return t.timestamp > e
                    }))
                })),
                q = (0, C.createSelector)(T.G7, T.X8, (function(t, e) {
                    var n = e.display_name && !(0, k.Dd)(e.display_name),
                        r = !!e.email;
                    return !!t.enabled && !(n || r)
                })),
                Z = function(t, e) {
                    return u()((0, T.By)(t), (function(t) {
                        return o()(e) ? t.name === e : t.id === e
                    }))
                },
                Y = (0, C.createSelector)([T.zG], (function(t) {
                    return t.size
                })),
                X = j()(T.zG, (function(t, e) {
                    return e
                }), (function(t, e) {
                    return s()(e, (function(e) {
                        return t.get(e)
                    }))
                }))((function(t, e) {
                    return e[e.length - 1]
                })),
                Q = (0, C.createSelector)(T.zG, T.tZ, (function(t, e) {
                    return t.get(e)
                })),
                J = function(t) {
                    return !(0, T.j3)(t) && (0, T.jk)(t) && !(0, P.Vk)()
                },
                ₹ = function(t) {
                    return (0, T.B5)(t) === _.WO.CONNECTED
                },
                tt = function(t) {
                    return₹ (t) || function(t) {
                        return (0, T.B5)(t) === _.WO.CLOSED
                    }(t)
                }
        },
        44141: function(t, e, n) {
            "use strict";
            n.d(e, {
                kh: function() {
                    return g
                },
                oO: function() {
                    return m
                },
                MP: function() {
                    return y
                },
                de: function() {
                    return v
                },
                q_: function() {
                    return O
                },
                v6: function() {
                    return w
                },
                zG: function() {
                    return E
                },
                YN: function() {
                    return S
                },
                uc: function() {
                    return j
                },
                y2: function() {
                    return C
                },
                JI: function() {
                    return _
                },
                WJ: function() {
                    return k
                },
                cA: function() {
                    return P
                },
                B5: function() {
                    return T
                },
                hG: function() {
                    return A
                },
                sc: function() {
                    return I
                },
                Cb: function() {
                    return L
                },
                _A: function() {
                    return D
                },
                BV: function() {
                    return x
                },
                X8: function() {
                    return R
                },
                OQ: function() {
                    return N
                },
                of: function() {
                    return F
                },
                Fu: function() {
                    return M
                },
                c_: function() {
                    return B
                },
                hB: function() {
                    return z
                },
                Pv: function() {
                    return U
                },
                ek: function() {
                    return H
                },
                AC: function() {
                    return W
                },
                ₹w: function() {
                    return V
                },
                bc: function() {
                    return K
                },
                SJ: function() {
                    return G
                },
                B2: function() {
                    return q
                },
                G7: function() {
                    return Z
                },
                ₹F: function() {
                    return Y
                },
                j3: function() {
                    return X
                },
                u6: function() {
                    return Q
                },
                b7: function() {
                    return J
                },
                ps: function() {
                    return₹
                },
                pe: function() {
                    return tt
                },
                Zc: function() {
                    return et
                },
                Y7: function() {
                    return nt
                },
                Y8: function() {
                    return rt
                },
                Ps: function() {
                    return ot
                },
                Bn: function() {
                    return it
                },
                iM: function() {
                    return ct
                },
                yj: function() {
                    return at
                },
                By: function() {
                    return ut
                },
                H_: function() {
                    return lt
                },
                L2: function() {
                    return st
                },
                yH: function() {
                    return ft
                },
                Jj: function() {
                    return dt
                },
                jk: function() {
                    return ht
                },
                hC: function() {
                    return bt
                },
                lK: function() {
                    return gt
                },
                EL: function() {
                    return mt
                },
                Ok: function() {
                    return yt
                },
                r2: function() {
                    return vt
                },
                KU: function() {
                    return Ot
                },
                tZ: function() {
                    return wt
                },
                wZ: function() {
                    return Et
                },
                OH: function() {
                    return St
                },
                wk: function() {
                    return jt
                },
                Yi: function() {
                    return Ct
                },
                hp: function() {
                    return _t
                },
                gy: function() {
                    return kt
                },
                oA: function() {
                    return Pt
                },
                YA: function() {
                    return Tt
                },
                SX: function() {
                    return At
                },
                LX: function() {
                    return It
                },
                kE: function() {
                    return Lt
                },
                QD: function() {
                    return Dt
                },
                Qb: function() {
                    return xt
                },
                Tm: function() {
                    return Rt
                }
            });
            var r = n(68336),
                o = n.n(r),
                i = n(7165),
                c = n.n(i),
                a = n(5175),
                u = n.n(a),
                l = (n(15735), n(58188), n(6886), n(95342), n(26936), n(18178), n(51095)),
                s = n.n(l),
                f = n(24949),
                d = n(40969),
                p = n(94265),
                h = n(41225),
                b = function(t) {
                    return t.chat
                },
                g = function(t) {
                    return !(0, p.MM)(t).disableStatusPolling && b(t).deferredChatIsPolling
                },
                m = function(t) {
                    return b(t).deferredChatHasResponse
                },
                y = function(t) {
                    return b(t).visitor.email
                },
                v = function(t) {
                    return b(t).menuVisible
                },
                O = function(t) {
                    return b(t).soundEnabled
                },
                w = function(t) {
                    return b(t).notification
                },
                E = function(t) {
                    return b(t).chats
                },
                S = function(t) {
                    return !!t && t.indexOf("agent:") > -1
                },
                j = function(t) {
                    return b(t).accountSettings.theme.message_type
                },
                C = function(t) {
                    return b(t).activeAgents
                },
                _ = function(t) {
                    return b(t).accountSettings.operatingHours.display_notice
                },
                k = function(t) {
                    return b(t).inactiveAgents
                },
                P = function(t) {
                    return b(t).socialLogin
                },
                T = function(t) {
                    return b(t).connection
                },
                A = function(t) {
                    return b(t).currentMessage
                },
                I = function(t) {
                    return b(t).rating
                },
                L = function(t) {
                    return b(t).screen
                },
                D = function(t) {
                    return b(t).showChatHistory
                },
                x = function(t) {
                    return b(t).account_status
                },
                R = function(t) {
                    return b(t).visitor
                },
                N = function(t) {
                    return b(t).is_chatting
                },
                F = function(t) {
                    return w(t).count
                },
                M = function(t) {
                    return b(t).emailTranscript
                },
                B = function(t) {
                    return b(t).accountSettings.attachments.enabled
                },
                z = function(t) {
                    return b(t).accountSettings.rating
                },
                U = function(t) {
                    return b(t).queuePosition
                },
                H = function(t) {
                    return b(t).formState.readOnlyState
                },
                W = function(t) {
                    return b(t).offlineMessage
                },
                V = function(t) {
                    return b(t).formState.preChatForm
                },
                K = function(t) {
                    return b(t).agentEndedChatSession
                },
                G = function(t) {
                    return b(t).lastReadTimestamp
                },
                q = function(t) {
                    return b(t).operatingHours
                },
                Z = function(t) {
                    return b(t).accountSettings.login
                },
                Y = function(t) {
                    return b(t).standaloneMobileNotificationVisible
                },
                X = function(t) {
                    return b(t).isAuthenticated
                },
                Q = function(t) {
                    return b(t).vendor.zChat
                },
                J = function(t) {
                    return b(t).vendor.slider
                },
                ₹ = function(t) {
                    return b(t).accountSettings.chatWindow
                },
                tt = function(t) {
                    return {
                        base: b(t).accountSettings.theme.color.primary,
                        text: void 0
                    }
                },
                et = function(t) {
                    return b(t).accountSettings.concierge
                },
                nt = function(t) {
                    return b(t).accountSettings.offlineForm
                },
                rt = function(t) {
                    return b(t).accountSettings.prechatForm
                },
                ot = function(t) {
                    return b(t).departments
                },
                it = function(t) {
                    return b(t).accountSettings.banner
                },
                ct = function(t) {
                    return b(t).accountSettings.branding.hide_branding
                },
                at = function(t) {
                    return b(t).defaultDepartment.id
                },
                ut = function(t) {
                    return u()(ot(t))
                },
                lt = function(t) {
                    return b(t).isLoggingOut
                },
                st = function(t) {
                    return t.chat.chatLog.groups
                },
                ft = function(t) {
                    var e = E(t).values().next().value;
                    return e ? e.timestamp : Date.now()
                },
                dt = function(t) {
                    var e = N(t),
                        n = "online" === x(t);
                    return e || n
                },
                pt = (0, f.createSelector)([h.ak, ut], (function(t, e) {
                    return !!Array.isArray(t) && 0 !== t.length && 0 === e.filter((function(e) {
                        return c()(t, e.id) || c()(t, e.name.toLowerCase())
                    })).filter((function(t) {
                        return "online" === t.status
                    })).length
                })),
                ht = function(t) {
                    var e = function(t) {
                        return b(t).forcedStatus
                    }(t);
                    if ("online" === e) return !0;
                    if ("offline" === e) return !1;
                    var n = c()(["online", "away"], x(t)),
                        r = (0, d.Z)(t, "web_widget_prechat_form_visible_departments");
                    return !(n && r && pt(t)) && n
                },
                bt = function(t) {
                    switch (t.chat.accountSettings.theme.position) {
                        case "br":
                            return "right";
                        case "bl":
                            return "left";
                        default:
                            return
                    }
                },
                gt = function(t) {
                    return t.chat.chatLog.firstVisitorMessage
                },
                mt = function(t) {
                    return t.chat.chatLog.latestRatingRequest
                },
                yt = function(t) {
                    return t.chat.chatLog.latestRating
                },
                vt = function(t) {
                    return t.chat.chatLog.lastMessageAuthor
                },
                Ot = function(t) {
                    return t.chat.chatLog.latestAgentLeaveEvent
                },
                wt = function(t) {
                    return t.chat.chatLog.latestQuickReply
                },
                Et = function(t) {
                    return t.chat.chatBanned
                },
                St = function(t) {
                    return t.chat.sdkConnected
                },
                jt = function(t) {
                    return t.chat.chatLogBackfillCompleted
                },
                Ct = function(t) {
                    return t.chat.endChatModalVisible
                },
                _t = function(t) {
                    return t.chat.config.defaultToChatWidgetLite
                },
                kt = function(t) {
                    var e = (0, p.MM)(t),
                        n = (0, p.KO)(t),
                        r = o()(e, "embeds.chat.props.mediatorHost");
                    return r && n ? "https://".concat(r, "/client/widget/account/status?embed_key=").concat(n) : null
                },
                Pt = function(t) {
                    return t.chat.config.badge
                },
                Tt = function(t) {
                    return function(t) {
                        return it(t).enabled
                    }(t) || function(t) {
                        return Boolean(t.chat.config.badge && t.chat.config.badge.enabled)
                    }(t)
                },
                At = function(t) {
                    return function(t) {
                        return b(t).accountSettings.theme.color.banner
                    }(t) || function(t) {
                        return t.chat.config.badge && t.chat.config.badge.color
                    }(t)
                },
                It = function(t) {
                    return o()(t.chat.config, "forms.offlineEnabled", !1)
                },
                Lt = function(t) {
                    return b(t).contactDetailsSubmissionError
                },
                Dt = function(t) {
                    return b(t).editContactDetails
                },
                xt = s()((function(t) {
                    return t.chat.chatHistory.chats
                }), (function(t, e) {
                    return e
                }), (function(t, e) {
                    return t.get(e)
                }))((function(t, e) {
                    return e
                })),
                Rt = s()(E, (function(t, e) {
                    return e
                }), (function(t, e) {
                    return t.get(e)
                }))((function(t, e) {
                    return e
                }))
        },
        99282: function(t, e, n) {
            "use strict";
            n.d(e, {
                EY: function() {
                    return r
                },
                tA: function() {
                    return o
                },
                M1: function() {
                    return i
                },
                l2: function() {
                    return c
                },
                qf: function() {
                    return a
                },
                sm: function() {
                    return u
                },
                I: function() {
                    return l
                },
                wj: function() {
                    return s
                },
                JF: function() {
                    return f
                },
                Jz: function() {
                    return d
                },
                t2: function() {
                    return p
                },
                RF: function() {
                    return h
                },
                JW: function() {
                    return b
                },
                EA: function() {
                    return g
                },
                ax: function() {
                    return m
                }
            });
            var r = "widget/helpCenter/SEARCH_REQUEST_SENT",
                o = "widget/helpCenter/SEARCH_REQUEST_SUCCESS",
                i = "widget/helpCenter/SEARCH_REQUEST_FAILURE",
                c = "widget/helpCenter/CONTEXTUAL_SEARCH_REQUEST_SENT",
                a = "widget/helpCenter/CONTEXTUAL_SEARCH_REQUEST_SUCCESS",
                u = "widget/helpCenter/CONTEXTUAL_SEARCH_REQUEST_FAILURE",
                l = "widget/helpCenter/ARTICLE_VIEWED",
                s = "widget/helpCenter/ARTICLE_CLOSED",
                f = "widget/helpCenter/ORIGINAL_ARTICLE_CLICKED",
                d = "widget/helpCenter/ADD_RESTRICTED_IMAGE",
                p = "widget/helpCenter/SEARCH_FIELD_CHANGED",
                h = "widget/helpCenter/GET_ARTICLE_REQUEST_SENT",
                b = "widget/helpCenter/GET_ARTICLE_REQUEST_SUCCESS",
                g = "widget/helpCenter/GET_ARTICLE_REQUEST_FAILURE",
                m = "widget/helpCenter/CONTEXTUAL_SUGGESTIONS_MANUALLY_SET"
        },
        64731: function(t, e, n) {
            "use strict";
            n.d(e, {
                p5: function() {
                    return D
                },
                tw: function() {
                    return L
                },
                uO: function() {
                    return P
                },
                xC: function() {
                    return R
                },
                so: function() {
                    return I
                },
                zr: function() {
                    return A
                },
                TX: function() {
                    return x
                },
                WA: function() {
                    return T
                },
                gU: function() {
                    return _
                },
                ii: function() {
                    return k
                },
                pE: function() {
                    return N
                },
                yz: function() {
                    return F
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(57033),
                o = n.n(r),
                i = n(67647),
                c = n.n(i),
                a = (n(18178), n(58188), n(73439), n(25047), n(67165)),
                u = n(7110),
                l = n(80712),
                s = n(94265),
                f = n(45089),
                d = n(41225),
                p = n(29150),
                h = n(39147),
                b = n(70570),
                g = n(52363),
                m = n(99282);

            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) {
                        O(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function O(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function w(t, e, n, r, o, i, c) {
                try {
                    var a = t[i](c),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function E(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function c(t) {
                            w(i, r, o, c, a, "next", t)
                        }

                        function a(t) {
                            w(i, r, o, c, a, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }
            var S = function() {
                    var t = E(regeneratorRuntime.mark((function t(e, n, r, o, i, a) {
                        var u, l, f;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return u = (0, s.bW)(), l = (0, g.GU)() && "http:" === b.xh.protocol, f = c()(n, i), t.abrupt("return", h.d.get({
                                        forceHttp: l,
                                        useHostMappingIfAvailable: (0, g.GU)(),
                                        path: e,
                                        query: f,
                                        authorization: u ? "Bearer ".concat(u) : "",
                                        responseType: a
                                    }).then((function(t) {
                                        r(t)
                                    })).catch((function(t) {
                                        o && o(t)
                                    })));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r, o, i, c) {
                        return t.apply(this, arguments)
                    }
                }(),
                j = function(t) {
                    var e = t.body,
                        n = e.results,
                        r = void 0 === n ? [] : n,
                        o = e.count;
                    return {
                        articles: r,
                        resultsCount: void 0 === o ? 0 : o,
                        locale: r.length > 0 ? r[0].locale : ""
                    }
                },
                C = function(t, e) {
                    return e !== (0, u.Yl)(t())
                };

            function _(t, e) {
                var n = (0, s.bW)();
                return h.d.getImage({
                    path: t,
                    callbacks: {
                        done: e
                    },
                    authorization: n ? "Bearer ".concat(n) : ""
                }), {
                    type: ""
                }
            }

            function k(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                return function() {
                    var i = E(regeneratorRuntime.mark((function i(c, u) {
                        var l, s, f, p, h, b;
                        return regeneratorRuntime.wrap((function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    if (l = [a.a.getLocale()].concat([(0, d.f3)(u()) || [""]]), !(r >= l.length)) {
                                        i.next = 3;
                                        break
                                    }
                                    return i.abrupt("return");
                                case 3:
                                    return s = {
                                        locale: l[r],
                                        query: t,
                                        per_page: 9,
                                        origin: "web_widget"
                                    }, f = Date.now(), p = function(i) {
                                        C(u, f) || (c({
                                            type: m.tA,
                                            payload: v(v({}, j(i)), {}, {
                                                isFallback: r > 0
                                            })
                                        }), i.body.count > 0 || o()(l) ? e(i) : c(k(t, e, n, r + 1)))
                                    }, h = function(t) {
                                        C(u, f) || (c({
                                            type: m.M1
                                        }), n(t))
                                    }, c({
                                        type: m.EY,
                                        payload: {
                                            searchTerm: s.query,
                                            timestamp: f
                                        }
                                    }), b = (0, d.xn)(u()), i.abrupt("return", S("/api/v2/help_center/articles/embeddable_search.json", s, p, h, b));
                                case 11:
                                case "end":
                                    return i.stop()
                            }
                        }), i)
                    })));
                    return function(t, e) {
                        return i.apply(this, arguments)
                    }
                }()
            }

            function P(t) {
                return function(e, n) {
                    var r = n();
                    (0, u.pR)(r) && ((0, f.XV)(r) ? e(T(t, t)) : (0, s.ll)(r) && e((0, l.pT)({
                        performContextualSearch: {}
                    })))
                }
            }

            function T() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    n = Date.now();
                return function() {
                    var r = E(regeneratorRuntime.mark((function r(o, i) {
                        var c, l, s, f, p;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    if ((c = (0, u.uP)(i())).query || c.label_names) {
                                        r.next = 3;
                                        break
                                    }
                                    return r.abrupt("return");
                                case 3:
                                    return l = v({
                                        locale: a.a.getLocale(),
                                        per_page: 3
                                    }, c), s = function(e) {
                                        C(i, n) || (o({
                                            type: m.qf,
                                            payload: j(e)
                                        }), t(e))
                                    }, f = function(t) {
                                        C(i, n) || (o({
                                            type: m.sm
                                        }), e(t))
                                    }, o({
                                        type: m.l2,
                                        payload: {
                                            searchTerm: c.query || c.label_names,
                                            timestamp: n
                                        }
                                    }), p = (0, d.xn)(i()), r.abrupt("return", S("/api/v2/help_center/articles/embeddable_search.json", l, s, f, p));
                                case 10:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })));
                    return function(t, e) {
                        return r.apply(this, arguments)
                    }
                }()
            }

            function A() {
                return {
                    type: m.JF
                }
            }

            function I(t) {
                return {
                    type: m.I,
                    payload: t
                }
            }

            function L() {
                return {
                    type: m.wj
                }
            }

            function D(t) {
                return {
                    type: m.Jz,
                    payload: t
                }
            }

            function x(t) {
                return {
                    type: m.t2,
                    payload: t || ""
                }
            }

            function R(t) {
                return function(e) {
                    e({
                        type: m.RF
                    });
                    var n = (0, g.GU)() && "http:" === b.xh.protocol;
                    return h.d.get({
                        method: "get",
                        forceHttp: n,
                        path: "/api/v2/help_center/articles/".concat(t, ".json"),
                        useHostMappingIfAvailable: (0, g.GU)()
                    }, !1).then((function(t) {
                        e({
                            type: m.JW,
                            payload: t.body.article
                        })
                    })).catch((function(t) {
                        e({
                            type: m.EA,
                            payload: t.response ? t.response : t
                        })
                    }))
                }
            }

            function N(t) {
                return function(e, n) {
                    e({
                        type: m.ax,
                        payload: t
                    }), (0, s.Se)(n()) && e(P())
                }
            }

            function F() {
                return function(t, e) {
                    var n = (0, u.mJ)(e());
                    n && t((0, l.zb)(n));
                    var r = p.X.getAuthSettingsJwtFn();
                    if (r) return r((function(e) {
                        t((0, l.YR)(e))
                    }));
                    var o = p.X.getAuthSettingsJwt();
                    o && t((0, l.YR)(o))
                }
            }
        },
        35266: function(t, e) {
            "use strict";
            e.Z = {
                home: function() {
                    return "/"
                },
                searchPrompt: function() {
                    return "/search-prompt"
                },
                search: function() {
                    return "/search"
                },
                articles: function(t) {
                    return "/articles/".concat(t || ":id")
                }
            }
        },
        7110: function(t, e, n) {
            "use strict";
            n.d(e, {
                yU: function() {
                    return l
                },
                TL: function() {
                    return s
                },
                Af: function() {
                    return f
                },
                II: function() {
                    return d
                },
                He: function() {
                    return p
                },
                Ip: function() {
                    return h
                },
                dU: function() {
                    return b
                },
                ₹c: function() {
                    return g
                },
                Zz: function() {
                    return m
                },
                Gv: function() {
                    return y
                },
                pw: function() {
                    return v
                },
                oM: function() {
                    return O
                },
                Cz: function() {
                    return w
                },
                vZ: function() {
                    return E
                },
                vt: function() {
                    return S
                },
                Yl: function() {
                    return j
                },
                H: function() {
                    return _
                },
                eL: function() {
                    return k
                },
                uc: function() {
                    return P
                },
                CV: function() {
                    return T
                },
                mJ: function() {
                    return A
                },
                DU: function() {
                    return I
                },
                pR: function() {
                    return x
                },
                uP: function() {
                    return R
                },
                lW: function() {
                    return N
                },
                CE: function() {
                    return F
                },
                jg: function() {
                    return M
                }
            }), n(16781), n(43450);
            var r = n(24949),
                o = n(99282),
                i = n(52363),
                c = n(88018),
                a = function(t) {
                    return t.helpCenter.contextualSearch
                },
                u = function(t) {
                    return a(t).screen
                },
                l = function(t) {
                    return t.helpCenter.clickedArticles.previous
                },
                s = function(t) {
                    return t.helpCenter.clickedArticles.current
                },
                f = function(t) {
                    return t.helpCenter.searchLoading
                },
                d = function(t) {
                    return t.helpCenter.searchFailed
                },
                p = function(t) {
                    return t.helpCenter.searchTerm.current
                },
                h = function(t) {
                    return t.helpCenter.searchTerm.previous
                },
                b = function(t) {
                    return t.helpCenter.totalUserSearches
                },
                g = function(t) {
                    return !!s(t)
                },
                m = function(t) {
                    return t.helpCenter.articles
                },
                y = function(t) {
                    return t.helpCenter.resultsCount
                },
                v = function(t) {
                    return t.helpCenter.resultsLocale
                },
                O = function(t) {
                    return t.helpCenter.articleDisplayed
                },
                w = function(t) {
                    return t.helpCenter.restrictedImages
                },
                E = function(t) {
                    return t.helpCenter.searchFieldValue
                },
                S = function(t) {
                    return a(t).hasSearched
                },
                j = function(t) {
                    return t.helpCenter.lastSearchTimestamp
                },
                C = function(t) {
                    return t.helpCenter.manualContextualSuggestions
                },
                _ = function(t) {
                    return t.helpCenter.config.signInRequired
                },
                k = function(t) {
                    return t.helpCenter.config.answerBotEnabled
                },
                P = function(t) {
                    return t.helpCenter.config.buttonLabelKey
                },
                T = function(t) {
                    return t.helpCenter.config.formTitleKey
                },
                A = function(t) {
                    return t.helpCenter.config.tokensRevokedAt
                },
                I = (0, r.createSelector)([S, function(t) {
                    return t.helpCenter.searchAttempted
                }], (function(t, e) {
                    return t || e
                })),
                L = (0, r.createSelector)([function(t) {
                    return t.helpCenter.config.contextualHelpEnabled
                }], (function(t) {
                    return t && !(0, i.dJ)() && !!(0, c.h3)()
                })),
                D = (0, r.createSelector)([C], (function(t) {
                    var e = !!t.query,
                        n = !!t.labels && t.labels.length > 0,
                        r = !!t.url && !!(0, c.h3)();
                    return e || n || r
                })),
                x = (0, r.createSelector)([L, D], (function(t, e) {
                    return t || e
                })),
                R = (0, r.createSelector)([C], (function(t) {
                    var e = {};
                    return t.query ? e.query = t.query : t.labels && t.labels.length > 0 ? e.label_names = t.labels.join(",") : e.query = (0, c.h3)(), e
                })),
                N = (0, r.createSelector)([I, x, g], (function(t, e, n) {
                    return !t && !e && !n
                })),
                F = (0, r.createSelector)([S, function(t) {
                    return function(t) {
                        return u(t) === o.qf
                    }(t) || function(t) {
                        return u(t) === o.sm
                    }(t)
                }, x, b], (function(t, e, n, r) {
                    return t && e || n && 0 === r
                })),
                M = (0, r.createSelector)([function(t) {
                    return t.helpCenter.searchedArticles
                }, m], (function(t, e) {
                    return t.map((function(t) {
                        return e[t]
                    }))
                }))
        },
        22398: function(t, e, n) {
            "use strict";
            n.d(e, {
                jk: function() {
                    return r
                },
                qA: function() {
                    return o
                },
                Tm: function() {
                    return i
                },
                ro: function() {
                    return c
                },
                LX: function() {
                    return a
                },
                ₹f: function() {
                    return u
                },
                y: function() {
                    return l
                },
                F_: function() {
                    return s
                },
                i9: function() {
                    return f
                },
                Ws: function() {
                    return d
                },
                Kl: function() {
                    return p
                },
                Yr: function() {
                    return h
                },
                Lt: function() {
                    return b
                },
                pJ: function() {
                    return g
                },
                EC: function() {
                    return m
                },
                Sv: function() {
                    return y
                },
                nv: function() {
                    return v
                },
                C1: function() {
                    return O
                },
                vl: function() {
                    return w
                },
                FC: function() {
                    return E
                },
                xb: function() {
                    return S
                },
                eg: function() {
                    return j
                },
                EX: function() {
                    return C
                },
                _J: function() {
                    return _
                }
            });
            var r = "widget/support/FORM_OPENED",
                o = "widget/support/SET_FORM_STATE",
                i = "widget/support/CLEARED_FORM_STATE",
                c = "widget/support/CLEARED_FORM_STATES",
                a = "widget/support/ATTACHMENT_UPLOAD_REQUESTED",
                u = "widget/support/ATTACHMENT_UPLOAD_SUCCEEDED",
                l = "widget/support/ATTACHMENT_UPLOAD_FAILED",
                s = "widget/support/ATTACHMENT_UPLOAD_UPDATED",
                f = "widget/support/ATTACHMENT_REMOVED",
                d = "widget/support/ATTACHMENTS_CLEARED",
                p = "widget/support/TICKET_SUBMISSION_REQUEST_SENT",
                h = "widget/support/TICKET_SUBMISSION_REQUEST_SUCCESS",
                b = "widget/support/TICKET_SUBMISSION_REQUEST_FAILURE",
                g = "widget/support/ATTACHMENT_LIMIT_EXCEEDED",
                m = "widget/support/CLEAR_LIMIT_EXCEEDED_ERROR",
                y = "widget/support/DRAG_END",
                v = "widget/support/DRAG_START",
                O = "widget/submitTicket/TICKET_FORM_UPDATE",
                w = "widget/submitTicket/TICKET_FORMS_REQUEST_SENT",
                E = "widget/submitTicket/TICKET_FORMS_REQUEST_SUCCESS",
                S = "widget/submitTicket/TICKET_FORMS_REQUEST_FAILURE",
                j = "widget/submitTicket/TICKET_FIELDS_REQUEST_SENT",
                C = "widget/submitTicket/TICKET_FIELDS_REQUEST_SUCCESS",
                _ = "widget/submitTicket/TICKET_FIELDS_REQUEST_FAILURE"
        },
        61908: function(t, e, n) {
            "use strict";
            n.d(e, {
                vC: function() {
                    return tt
                },
                hO: function() {
                    return Q
                },
                OW: function() {
                    return et
                },
                dK: function() {
                    return J
                },
                R5: function() {
                    return₹
                },
                Nc: function() {
                    return rt
                },
                Uh: function() {
                    return ot
                }
            }), n(34769), n(34115), n(95342), n(68625), n(62775), n(634), n(20796), n(15735), n(6886), n(32501);
            var r = n(35937),
                o = n.n(r),
                i = n(90736),
                c = n.n(i),
                a = (n(26936), n(43450), n(58188), n(73439), n(77950), n(85940), n(27233), n(28673), n(1939), n(18178), n(67165)),
                u = n(46272),
                l = n(83738),
                s = n(33044),
                f = n(39147),
                d = n(57033),
                p = n.n(d),
                h = n(15621),
                b = n.n(h),
                g = n(62893),
                m = n.n(g),
                y = n(12643),
                v = n.n(y),
                O = n(68336),
                w = n.n(O),
                E = n(78053),
                S = n.n(E),
                j = (n(48319), n(16781), n(41225)),
                C = n(70570);

            function _(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(n), !0).forEach((function(e) {
                        P(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function P(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var T = function(t, e) {
                    var n = S()(e, (function(e) {
                        return e.id === t
                    }));
                    return w()(n, "originalId", null)
                },
                A = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return t.length <= 50 ? t : "".concat(t.slice(0, 50), "...")
                },
                I = function(t, e, n, r) {
                    var o = k({}, t),
                        i = {
                            fields: {}
                        };
                    return e && e.forEach((function(t) {
                        if (!t.required && void 0 === o[t.originalId || t.id]) switch (t.type) {
                            case "checkbox":
                                o[t.originalId || t.id] = 0;
                                break;
                            case "integer":
                            case "decimal":
                            case "text":
                            case "tagger":
                            case "textarea":
                                o[t.originalId || t.id] = ""
                        }
                    })), b()(o, (function(t, e) {
                        var o = parseInt(e, 10);
                        isNaN(o) || o === n || o === r || (i.fields[e] = t)
                    })), i
                },
                L = function(t, e, n, r, o) {
                    var i, c, u, s, f, d = r !== l.Z.defaultFormId,
                        h = d ? function(t, e) {
                            var n = T("description", e),
                                r = t[n],
                                o = T("subject", e),
                                i = t[o];
                            return {
                                description: r,
                                subject: p()(i) ? A(r) : i,
                                descriptionField: n,
                                subjectField: o
                            }
                        }(e, o) : function(t, e) {
                            var n = t.description,
                                r = t.subject;
                            return {
                                description: n,
                                subject: (0, j.cE)(e) && !p()(r) ? r : A(n)
                            }
                        }(e, t);
                    return {
                        request: k({
                            subject: h.subject,
                            tags: ["web_widget"].concat((0, j.XL)(t)),
                            via_id: 48,
                            comment: {
                                body: (u = h.description, s = a.a.t("embeddable_framework.submitTicket.form.submittedFrom.label", {
                                    url: C.xh.href
                                }), f = "\n\n------------------\n".concat(s), (0, C.Wq)() ? u : "".concat(u).concat(f)),
                                uploads: n || []
                            },
                            requester: {
                                name: e.name || (i = e.email, c = i.split("@", 2)[0].split(/[._\-]/), v()(c, m()).join(" ")),
                                email: e.email,
                                locale_id: a.a.getLocaleId()
                            },
                            ticket_form_id: d ? parseInt(r) : null
                        }, I(e, o, h.subjectField, h.descriptionField))
                    }
                },
                D = n(67647),
                x = n.n(D),
                R = n(7110),
                N = n(94265),
                F = n(82965),
                M = n(89931),
                B = n(97137),
                z = n(58193),
                U = n(35663),
                H = n(2847),
                W = "rateRimitingQueues",
                V = H.h.get(W) || {},
                K = n(22398);

            function G(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function q(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? q(Object(n), !0).forEach((function(e) {
                        Y(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function Y(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var X = {},
                Q = function() {
                    return {
                        type: K.EC
                    }
                },
                J = function() {
                    return {
                        type: K.nv
                    }
                },
                ₹ = function(t) {
                    return {
                        type: K.jk,
                        payload: {
                            id: t
                        }
                    }
                },
                tt = function() {
                    return function(t, e) {
                        X = {}, t({
                            type: K.Ws
                        })
                    }
                },
                et = function(t) {
                    return function(e, n) {
                        try {
                            X[t].abort(), delete X[t]
                        } catch (t) {}
                        e(function(t) {
                            return {
                                type: K.i9,
                                payload: {
                                    id: t
                                }
                            }
                        }(t))
                    }
                },
                nt = function(t, e) {
                    return function(n, r) {
                        var o = (0, s.SL)(r()),
                            i = t.size >= o,
                            c = i ? u.n.TOO_LARGE : null,
                            a = t.type || "application/octet-stream",
                            l = {
                                id: e,
                                fileName: t.name,
                                fileSize: t.size,
                                fileType: a,
                                errorMessage: c,
                                fileUrl: null,
                                uploading: !i,
                                uploadProgress: 0,
                                uploadToken: null
                            };
                        n(function(t) {
                            return {
                                type: K.LX,
                                payload: t
                            }
                        }(l)), i || (X[e] = function(t, e, n, r) {
                            var o = {
                                method: "post",
                                path: "/api/v2/uploads",
                                file: t,
                                callbacks: {
                                    done: e,
                                    fail: n,
                                    progress: r
                                }
                            };
                            return f.d.sendFile(o)
                        }(t, (function(t) {
                            return n(function(t, e) {
                                var n = {
                                    id: t,
                                    uploading: !1
                                };
                                try {
                                    var r = JSON.parse(e.text).upload.token;
                                    if (!r) throw new Error;
                                    n = Z(Z({}, n), {}, {
                                        uploadToken: r
                                    })
                                } catch (t) {
                                    n = Z(Z({}, n), {}, {
                                        errorMessage: u.n.UPLOAD_ERROR
                                    })
                                }
                                return {
                                    type: K.₹f,
                                    payload: n
                                }
                            }(e, t))
                        }), (function() {
                            return n(function(t) {
                                return {
                                    type: K.y,
                                    payload: {
                                        id: t,
                                        uploading: !1,
                                        errorMessage: u.n.UPLOAD_ERROR
                                    }
                                }
                            }(e))
                        }), (function(t) {
                            return n(function(t, e) {
                                return {
                                    type: K.F_,
                                    payload: {
                                        id: t,
                                        uploadProgress: e.percent || 100
                                    }
                                }
                            }(e, t))
                        })))
                    }
                };

            function rt(t, e, n) {
                return function(r, o) {
                    return new Promise((function(i, c) {
                        var u = o(),
                            d = function() {
                                var t = arguments.length > 1 ? arguments[1] : void 0,
                                    e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).ids;
                                return e ? (0, s.sW)(t, e).map((function(t) {
                                    return t.uploadToken
                                })) : []
                            }(t.attachments, u),
                            p = {
                                method: "post",
                                path: "/api/v2/requests",
                                params: L(u, t, d, e, n),
                                callbacks: {
                                    done: function(n) {
                                        U.Z.replace(l.Z.success()), r({
                                                type: K.Yr,
                                                payload: {
                                                    name: e
                                                }
                                            }), r((0, z.eL)("support-".concat(e))), i(),
                                            function(t, e, n) {
                                                var r, o = (0, R.He)(n),
                                                    i = (0, N.Kd)(n),
                                                    c = (0, R.vt)(n),
                                                    a = (0, F.c_)(n),
                                                    u = (0, s.sW)(n, (null == e || null === (r = e.attachments) || void 0 === r ? void 0 : r.ids) || []),
                                                    l = (0, F.dN)(n),
                                                    f = {
                                                        res: t,
                                                        email: null == e ? void 0 : e.email,
                                                        searchTerm: o,
                                                        searchLocale: i,
                                                        contextualSearch: c
                                                    };
                                                a && x()(f, {
                                                    attachmentsCount: u.length,
                                                    attachmentTypes: u.map((function(t) {
                                                        return t.fileType
                                                    }))
                                                });
                                                var d = f.res.body.request || f.res.body.suspended_ticket,
                                                    p = {
                                                        query: f.searchTerm,
                                                        locale: f.searchLocale,
                                                        ticketId: d.id,
                                                        attachmentsCount: f.attachmentsCount,
                                                        attachmentTypes: f.attachmentTypes,
                                                        contextualSearch: f.contextualSearch
                                                    };
                                                M.N.trackUserAction("submitTicket", "send", {
                                                    label: "ticketSubmissionForm",
                                                    value: p
                                                }), l && B.Z.ticketSubmitted(d.id, f.searchTerm)
                                            }(n, t, o())
                                    },
                                    fail: function(t) {
                                        r({
                                            type: K.Lt,
                                            payload: t.timeout ? a.a.t("embeddable_framework.submitTicket.notify.message.timeout") : a.a.t("embeddable_framework.submitTicket.notify.message.error")
                                        }), c()
                                    }
                                }
                            };
                        r({
                                type: K.Kl
                            }),
                            function(t, e, n, r) {
                                (function(t, e) {
                                    V[t] = V[t] || [];
                                    var n = V[t],
                                        r = n[n.length - 1],
                                        o = r ? e - r : 0;
                                    o > 72e5 && (n.length = 0);
                                    var i, c = (i = n.length) < 1 ? 0 : 1 === i ? 1e3 : 1e3 * Math.pow(2, i - 1);
                                    return !!(r && c > o) || (n.push(e), H.h.set(W, V), !1)
                                })(n, Date.now()) && M.N.trackUserAction("api", "rateLimited", {
                                    label: n
                                }), t(e)
                            }(f.d.send, p, "TICKET_SUBMISSION_REQUEST")
                    }))
                }
            }
            var ot = function(t, e, n) {
                return function(r, i) {
                    var a = Array.from(t).map((function(t) {
                            return {
                                file: t,
                                id: c()()
                            }
                        })),
                        u = i(),
                        l = (0, s.W2)(u),
                        f = (0, s.sW)(u, n.ids).length,
                        d = l - f,
                        p = [];
                    o()(a, 0, d).forEach((function(t) {
                        r(nt(t.file, t.id)), p.push(t.id)
                    }));
                    var h, b = !1;
                    f + a.length > l && (e ? b = !0 : r({
                        type: K.pJ
                    })), e && e({
                        ids: [].concat(p, (h = n.ids, function(t) {
                            if (Array.isArray(t)) return G(t)
                        }(h) || function(t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                        }(h) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return G(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? G(t, e) : void 0
                            }
                        }(h) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())),
                        limitExceeded: b
                    })
                }
            }
        },
        46272: function(t, e, n) {
            "use strict";
            n.d(e, {
                n: function() {
                    return r
                }
            });
            var r = {
                TOO_LARGE: "too large",
                UPLOAD_ERROR: "upload error"
            }
        },
        83738: function(t, e) {
            "use strict";
            e.Z = {
                home: function() {
                    return "/support"
                },
                form: function(t) {
                    return "/support/ticketForm/".concat(t || ":id")
                },
                list: function() {
                    return "/support/ticketFormsList"
                },
                success: function() {
                    return "/support/success"
                },
                defaultFormId: "contact-form"
            }
        },
        33044: function(t, e, n) {
            "use strict";
            n.d(e, {
                W2: function() {
                    return g
                },
                SL: function() {
                    return m
                },
                yN: function() {
                    return y
                },
                K₹: function() {
                    return v
                },
                pF: function() {
                    return O
                },
                yo: function() {
                    return w
                },
                Y2: function() {
                    return E
                },
                nW: function() {
                    return S
                },
                n7: function() {
                    return j
                },
                sW: function() {
                    return _
                },
                ek: function() {
                    return k
                },
                jO: function() {
                    return P
                },
                QL: function() {
                    return T
                },
                Wh: function() {
                    return L
                },
                b2: function() {
                    return D
                },
                le: function() {
                    return x
                },
                R3: function() {
                    return R
                },
                WH: function() {
                    return N
                },
                S6: function() {
                    return z
                },
                sF: function() {
                    return U
                }
            }), n(95342), n(39529), n(31235), n(1939), n(43450), n(27233), n(28673), n(15735), n(58188), n(93244), n(6886), n(34769), n(49228), n(18178), n(34115), n(634), n(68625), n(62775), n(20796), n(32501), n(26936);
            var r = n(24949),
                o = n(67165),
                i = n(83738),
                c = n(39033),
                a = n(56832),
                u = n(94265),
                l = n(41225);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? f(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        h(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var b = function(t) {
                    return t.support.config
                },
                g = function(t) {
                    return b(t).maxFileCount
                },
                m = function(t) {
                    return b(t).maxFileSize
                },
                y = function(t) {
                    return t.support.attachments
                },
                v = function(t) {
                    return t.support.attachmentLimitExceeded
                },
                O = function(t, e) {
                    var n = _(t, e).length;
                    return n > 0 ? o.a.t("embeddable_framework.submitTicket.attachments.title_withCount", {
                        count: n
                    }) : o.a.t("embeddable_framework.submitTicket.attachments.title")
                },
                w = function(t, e) {
                    return e === i.Z.defaultFormId ? t.support.isTicketFieldsLoading : Boolean(t.support.isFormLoading[e])
                },
                E = function(t) {
                    return t.support.ticketFormsRequest.isLoading
                },
                S = function(t, e) {
                    return t.support.ticketFormsRequest.fetchKey === e
                },
                j = (0, r.createSelector)([l.Vy, u.CV, u.Kd], (function(t, e, n) {
                    return o.a.getSettingTranslation(t) || o.a.t("embeddable_framework.submitTicket.form.title.".concat(e))
                })),
                C = function(t) {
                    return Boolean((0, u.GV)(t) && (0, l.₹t)(t))
                },
                _ = function(t, e) {
                    var n = y(t);
                    return e ? n.filter((function(t) {
                        return e.includes(t.id)
                    })) : n
                },
                k = function(t) {
                    return t.support.readOnly
                },
                P = function(t, e) {
                    var n = z(t, e),
                        r = {};
                    return n.forEach((function(t) {
                        switch (t.type) {
                            case "tagger":
                                if (!t.options) return;
                                t.options.forEach((function(e) {
                                    e.default && (r[t.id] = e.value)
                                }))
                        }
                    })), r
                },
                T = function(t, e) {
                    return t.support.formStates[e] || P(t, e)
                },
                A = (0, r.createSelector)(y, (function(t) {
                    return t.filter((function(t) {
                        return t.uploadToken
                    }))
                })),
                I = ((0, r.createSelector)(A, (function(t) {
                    return t.map((function(t) {
                        return t.uploadToken
                    }))
                })), (0, r.createSelector)([y, A], (function(t, e) {
                    return t.length === e.length
                })), (0, r.createSelector)(y, (function(t) {
                    return t.map((function(t) {
                        return t.fileType
                    }))
                })), (0, r.createSelector)([u.RL, function(t) {
                    return t.support.ticketFormsSetViaAPI
                }], (function(t, e) {
                    return t || e
                }))),
                L = (0, r.createSelector)([function(t) {
                    return t.support.allFormsRequested
                }, function(t) {
                    return t.support.filteredFormsToDisplay
                }, I, function(t) {
                    return t.support.forms
                }], (function(t, e, n, r) {
                    if (n) {
                        var o = Array.from(new Set(e));
                        return o.length > 0 ? o : t ? Object.keys(r).map((function(t) {
                            return parseInt(t, 10)
                        })) : []
                    }
                })),
                D = (0, r.createSelector)(L, (function(t) {
                    return t.support.forms
                }), (function(t, e) {
                    return Array.isArray(t) ? null == t ? void 0 : t.map((function(t) {
                        return e[t]
                    })).filter((function(t) {
                        return null == t ? void 0 : t.active
                    })).sort((function(t, e) {
                        return t.position - e.position
                    })) : []
                })),
                x = (0, r.createSelector)([L, I, function(t) {
                    return t.support.forms
                }], (function(t, e, n) {
                    var r = Object.keys(n).map((function(t) {
                            return parseInt(t, 10)
                        })),
                        o = r.length > 0,
                        i = Boolean(e && 0 == t.length),
                        c = o && (i || e && t.length > 1),
                        a = (null == t ? void 0 : t.filter((function(t) {
                            return r.includes(t)
                        }))) || [];
                    return {
                        ids: t,
                        validatedIds: a,
                        showList: c,
                        requestAll: i,
                        active: e
                    }
                })),
                R = function(t, e) {
                    return t.support.forms[e]
                },
                N = function(t, e) {
                    return Boolean(D(t).find((function(t) {
                        return "".concat(t.id) === "".concat(e)
                    })))
                },
                F = (0, r.createSelector)([function(t) {
                    return t.support.contactFormFields
                }, l.cE, u.Nr, u.cu, C, u.Kd], (function(t, e, n, r, i) {
                    var c = t.map(M).map((function(t) {
                            return p(p({}, t), {}, {
                                visible: !0
                            })
                        })),
                        u = (0, a.U)(c),
                        l = (0, a.M6)(c);
                    return [n && {
                        id: "name",
                        title: o.a.t("embeddable_framework.submitTicket.field.name.label"),
                        required: r,
                        visible: !0,
                        type: "text",
                        validation: "name"
                    }, {
                        id: "email",
                        title: o.a.t("embeddable_framework.form.field.email.label"),
                        required: !0,
                        visible: !0,
                        type: "text",
                        validation: "email"
                    }].concat(s(l.filter((function(t) {
                        return "description" !== t.type
                    }))), [e && {
                        id: "subject",
                        title: o.a.t("embeddable_framework.submitTicket.field.subject.label"),
                        required: !1,
                        visible: !0,
                        type: "text"
                    }, {
                        id: "description",
                        title: o.a.t("embeddable_framework.submitTicket.field.description.label"),
                        required: !0,
                        visible: !0,
                        type: "textarea"
                    }], s(u), [i && {
                        id: "attachments",
                        visible: !0,
                        type: "attachments",
                        validation: "attachments"
                    }]).filter(Boolean)
                })),
                M = function(t) {
                    var e = {
                        originalId: t.id,
                        id: (0, c.Z)(t.id),
                        title: t.title_in_portal,
                        required: t.required_in_portal,
                        visible: t.visible_in_portal,
                        type: t.type,
                        description: t.description
                    };
                    return t.custom_field_options && (e.options = t.custom_field_options), e
                },
                B = function(t, e) {
                    return t.hideHint ? null : o.a.getSettingTranslation(t) || e
                },
                z = function(t, e) {
                    return e === i.Z.defaultFormId ? F(t) : function(t, e) {
                        var n = C(t),
                            r = R(t, e) || {
                                ticket_field_ids: []
                            },
                            i = (0, u.Nr)(t),
                            c = (0, u.cu)(t),
                            a = function(t) {
                                return t.support.formsWithSuppressedSubject
                            }(t).find((function(t) {
                                return "".concat(t) === "".concat(e)
                            })),
                            l = function(t) {
                                return t.support.fieldDescriptionOverrides
                            }(t),
                            f = r.ticket_field_ids.map((function(e) {
                                return function(t, e) {
                                    return t.support.fields[e]
                                }(t, e)
                            })).filter(Boolean).map(M);
                        return [i && {
                            id: "name",
                            title: o.a.t("embeddable_framework.submitTicket.field.name.label"),
                            required: c,
                            visible: !0,
                            type: "text",
                            validation: "name"
                        }, {
                            id: "email",
                            title: o.a.t("embeddable_framework.form.field.email.label"),
                            required: !0,
                            visible: !0,
                            type: "text",
                            validation: "email"
                        }].concat(s(f), [n && {
                            id: "attachments",
                            visible: !0,
                            type: "attachments",
                            validation: "attachments"
                        }]).filter(Boolean).map((function(t) {
                            return "description" === t.type ? p(p({}, t), {}, {
                                id: "description"
                            }) : "subject" === t.type ? a ? {} : p(p({}, t), {}, {
                                id: "subject"
                            }) : t
                        })).map((function(t) {
                            var n = l[e] && (l[e][t.id] || l[e][t.originalId]);
                            return n ? p(p({}, t), {}, {
                                description: B(n, t.description)
                            }) : t
                        }))
                    }(t, e)
                },
                U = function(t, e) {
                    if (! function(t) {
                            return t.support.formsWithSuppressedTitle
                        }(t).find((function(t) {
                            return "".concat(t) === "".concat(e)
                        }))) {
                        var n = R(t, e);
                        return n ? n.display_name : void 0
                    }
                }
        },
        39033: function(t, e) {
            "use strict";
            e.Z = function(t) {
                return "key:".concat(t)
            }
        },
        56832: function(t, e, n) {
            "use strict";
            n.d(e, {
                AR: function() {
                    return i
                },
                U: function() {
                    return r
                },
                M6: function() {
                    return o
                }
            }), n(95342), n(71245), n(18178), n(1939);
            var r = function(t) {
                    return t.filter((function(t) {
                        return "checkbox" === t.type
                    }))
                },
                o = function(t) {
                    return t.filter((function(t) {
                        return "checkbox" !== t.type
                    }))
                },
                i = function(t, e) {
                    switch (t) {
                        case "checkbox":
                            return e ? Number(e) : 0;
                        case "attachments":
                            return "" === e ? {
                                limitExceeded: !1,
                                ids: []
                            } : e;
                        default:
                            return e
                    }
                }
        },
        80472: function(t, e, n) {
            "use strict";
            n.d(e, {
                uv: function() {
                    return r
                },
                hz: function() {
                    return o
                },
                qs: function() {
                    return i
                },
                nb: function() {
                    return c
                },
                me: function() {
                    return a
                },
                zo: function() {
                    return u
                },
                zD: function() {
                    return l
                },
                Rr: function() {
                    return s
                },
                FQ: function() {
                    return f
                }
            });
            var r = "widget/talk/MICROPHONE_MUTED",
                o = "widget/talk/MICROPHONE_UNMUTED",
                i = "widget/talk/RECORDING_CONSENT_DENIED",
                c = "widget/talk/RECORDING_CONSENT_ACCEPTED",
                a = "widget/talk/CALL_ENDED",
                u = "widget/talk/CALL_STARTED",
                l = "widget/talk/CALL_FAILED",
                s = "widget/talk/RESET_CALL_FAILED",
                f = "widget/talk/INCREMENT_CALL_TIMER"
        },
        2447: function(t, e, n) {
            "use strict";
            n.d(e, {
                Lk: function() {
                    return r
                },
                c9: function() {
                    return o
                }
            });
            var r = {
                    CALLBACK_ONLY: "widget/talk/CALLBACK_ONLY",
                    PHONE_ONLY: "widget/talk/PHONE_ONLY",
                    CALLBACK_AND_PHONE: "widget/talk/CALLBACK_AND_PHONE",
                    CLICK_TO_CALL: "widget/talk/CLICK_TO_CALL"
                },
                o = {
                    "widget/talk/CALLBACK_ONLY": "Request a callback",
                    "widget/talk/PHONE_ONLY": "Call us",
                    "widget/talk/CALLBACK_AND_PHONE": "Request a callback and call us",
                    "widget/talk/CLICK_TO_CALL": "Click to call"
                }
        },
        39319: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function() {
                    return a
                },
                vx: function() {
                    return i
                }
            });
            var r = n(80472),
                o = n(3229),
                i = "opt-in",
                c = "opt-out",
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 ? arguments[1] : void 0,
                        n = e.type,
                        a = e.payload;
                    switch (n) {
                        case r.nb:
                            return i;
                        case r.qs:
                            return c;
                        case o.jV:
                            var u = a.recordingConsent;
                            switch (u) {
                                case i:
                                    return c;
                                case c:
                                    return i;
                                default:
                                    return t
                            }
                        default:
                            return t
                    }
                }
        },
        62190: function(t, e, n) {
            "use strict";
            n.d(e, {
                u5: function() {
                    return f
                },
                qT: function() {
                    return d
                },
                sE: function() {
                    return p
                },
                nH: function() {
                    return h
                },
                ₹₹: function() {
                    return b
                },
                Y2: function() {
                    return g
                },
                nG: function() {
                    return m
                },
                ly: function() {
                    return y
                },
                xD: function() {
                    return v
                },
                So: function() {
                    return O
                },
                ee: function() {
                    return w
                },
                Am: function() {
                    return E
                },
                x1: function() {
                    return S
                },
                QL: function() {
                    return j
                },
                RN: function() {
                    return C
                },
                pz: function() {
                    return _
                },
                od: function() {
                    return k
                },
                xL: function() {
                    return P
                },
                zo: function() {
                    return T
                },
                RK: function() {
                    return A
                },
                F_: function() {
                    return I
                },
                Nj: function() {
                    return L
                },
                U6: function() {
                    return D
                }
            });
            var r = n(7165),
                o = n.n(r),
                i = n(24949),
                c = n(67165),
                a = n(2447),
                u = n(40969),
                l = n(41225),
                s = n(67317),
                f = function(t) {
                    return t.talk.embeddedVoiceCallStatus.isCallInProgress
                },
                d = function(t) {
                    return t.talk.embeddedVoiceCallStatus.hasLastCallFailed
                },
                p = function(t) {
                    return t.talk.recordingConsent
                },
                h = function(t) {
                    return t.talk.embeddableConfig.recordingConsent
                },
                b = function(t) {
                    return t.talk.microphoneMuted
                },
                g = function(t) {
                    return t.talk.timeInCall
                },
                m = function(t) {
                    return t.talk.embeddableConfig
                },
                y = (0, i.createSelector)(m, (function(t) {
                    return t.phoneNumber
                })),
                v = function(t) {
                    var e;
                    return (null === (e = m(t)) || void 0 === e ? void 0 : e.capability) === s.Kn
                },
                O = function(t) {
                    return m(t).enabled
                },
                w = function(t) {
                    return m(t).deferredStatusOnline
                },
                E = function(t) {
                    return m(t).connected
                },
                S = function(t) {
                    return t.talk.agentAvailability
                },
                j = function(t) {
                    return t.talk.formState
                },
                C = function(t) {
                    return t.talk.callback
                },
                _ = function(t) {
                    return t.talk.averageWaitTime.waitTime
                },
                k = function(t) {
                    return t.talk.vendor.io
                },
                P = function(t) {
                    return t.talk.isPolling
                },
                T = function(t) {
                    var e = t.talk.embeddableConfig.capability;
                    return o()([s.kg, s.g], e)
                },
                A = (0, i.createSelector)([function(t) {
                    return t.talk.averageWaitTime.enabled
                }, _], (function(t, e) {
                    var n = parseInt(e, 10);
                    if (!t || 0 === n) return null;
                    var r = n > 1 ? "Plural" : "Singular";
                    return c.a.t("embeddable_framework.talk.form.averageWaitTime".concat(r), {
                        averageWaitTime: e
                    })
                })),
                I = (0, i.createSelector)([m, function(t) {
                    return (0, u.Z)(null, "embedded_voice_enabled")
                }], (function(t, e) {
                    return e ? s.Kn : t.capability
                })),
                L = function(t) {
                    var e = I(t),
                        n = c.a.getSettingTranslation((0, l.Vr)(t));
                    if (n) return n;
                    switch (e) {
                        case a.Lk.PHONE_ONLY:
                            return c.a.t("embeddable_framework.talk.phoneOnly.title");
                        case a.Lk.CLICK_TO_CALL:
                            return c.a.t("embeddable_framework.talk.embeddedVoice.channel.title");
                        case a.Lk.CALLBACK_AND_PHONE:
                        case a.Lk.CALLBACK_ONLY:
                        default:
                            return c.a.t("embeddable_framework.talk.form.title")
                    }
                },
                D = (0, i.createSelector)([I, T], (function(t, e) {
                    return t === s.Kn ? "embeddable_framework.talk.embeddedVoice.channel.title" : e ? "embeddable_framework.launcher.label.talk.request_callback" : "embeddable_framework.launcher.label.talk.call_us"
                }))
        },
        67317: function(t, e, n) {
            "use strict";
            n.d(e, {
                kg: function() {
                    return r
                },
                zm: function() {
                    return o
                },
                g: function() {
                    return i
                },
                Kn: function() {
                    return c
                }
            });
            var r = "widget/talk/CALLBACK_ONLY",
                o = "widget/talk/PHONE_ONLY",
                i = "widget/talk/CALLBACK_AND_PHONE",
                c = "widget/talk/CLICK_TO_CALL"
        },
        43225: function(t, e, n) {
            "use strict";
            n.d(e, {
                kO: function() {
                    return l
                },
                Gd: function() {
                    return d
                },
                g7: function() {
                    return f
                },
                Zm: function() {
                    return s
                }
            }), n(34115), n(634), n(58188), n(20796), n(15735), n(28673), n(6886), n(32501), n(26936), n(27233);
            var r = n(52322),
                o = n(13980),
                i = n.n(o),
                c = n(2784);

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = (0, c.createContext)({
                    style: {},
                    setStyle: function() {}
                }),
                l = function(t) {
                    var e, n, o = t.children,
                        i = (e = (0, c.useState)({}), n = 2, function(t) {
                            if (Array.isArray(t)) return t
                        }(e) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return n
                            }
                        }(e, n) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return a(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? a(t, e) : void 0
                            }
                        }(e, n) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        l = i[0],
                        s = i[1];
                    return (0, r.jsx)(u.Provider, {
                        value: {
                            style: l,
                            setStyle: s
                        },
                        children: o
                    })
                };
            l.propTypes = {
                children: i().node
            };
            var s = function(t) {
                    var e = (0, c.useContext)(u);
                    return (0, c.useEffect)((function() {
                        return t && e.setStyle(t),
                            function() {
                                e.setStyle({})
                            }
                    }), [t]), e.style
                },
                f = function(t) {
                    var e = t.style;
                    return s(e), null
                },
                d = u.Consumer
        },
        26411: function(t, e, n) {
            "use strict";
            n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(52322),
                o = n(68336),
                i = n.n(o),
                c = n(13980),
                a = n.n(c),
                u = n(2784),
                l = n(36408),
                s = n(85268),
                f = n(1034),
                d = n(82965),
                p = n(41225),
                h = n(77693);

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                        m(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function m(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var y = function(t) {
                var e, n, o, c = t.visible,
                    a = t.children,
                    b = t.onEntered,
                    y = (e = (0, l.v9)(d.Zg), n = (0, l.v9)(p.yK), o = (0, l.v9)(p.EU), (0, u.useMemo)((function() {
                        var t = function(t) {
                            var r, c = i()(o, "mobile", {}),
                                a = (0, h.K1)() ? i()(c, "horizontal", 0) : i()(o, "horizontal", 0),
                                u = (0, h.K1)() ? i()(c, "vertical", 0) : i()(o, "vertical", 0);
                            return m(r = {}, e, a), m(r, n, parseInt(u) + t), r
                        };
                        return {
                            entering: g({
                                opacity: 0
                            }, t(0)),
                            entered: g({
                                opacity: 1
                            }, t(0)),
                            exiting: g({
                                opacity: 0
                            }, t(-20)),
                            exited: {
                                opacity: 0,
                                top: "-9999px",
                                visibility: "hidden"
                            }
                        }
                    }), [o, e, n])),
                    v = {
                        transitionDuration: "".concat(f.Qo, "ms"),
                        transitionTimingFunction: "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        transitionProperty: "opacity, top, bottom"
                    };
                return (0, r.jsx)(s.default, {
                    in: c,
                    timeout: f.Qo,
                    onEntered: b,
                    appear: !0,
                    children: function(t) {
                        return a(g(g({}, v), y[t]))
                    }
                })
            };
            y.propTypes = {
                visible: a().bool,
                children: a().func,
                onEntered: a().func
            }, e.Z = y
        },
        52413: function(t, e, n) {
            "use strict";
            n.d(e, {
                ZP: function() {
                    return j
                }
            }), n(34769), n(34115), n(634), n(58188), n(20796), n(15735), n(28673), n(6886), n(32501), n(26936), n(27233), n(95342), n(68625), n(1939), n(62775);
            var r = n(52322),
                o = (n(91321), n(13980)),
                i = n.n(o),
                c = n(2784),
                a = n(48237),
                u = n(67165),
                l = n(51711),
                s = n(45254),
                f = n(1034),
                d = n(43225),
                p = n(36408),
                h = n(16884),
                b = n(94265),
                g = function(t) {
                    var e = t.baseFontSize,
                        n = (0, p.v9)(b.Kd),
                        r = (0, h.ND)();
                    return (0, c.useEffect)((function() {
                        var t, o, i;
                        null === (t = r.document.documentElement) || void 0 === t || t.setAttribute("lang", n), null === (o = r.document.documentElement) || void 0 === o || o.setAttribute("dir", u.a.isRTL() ? "rtl" : "ltr"), null !== (i = r.document.documentElement) && void 0 !== i && i.style && (r.document.documentElement.style.fontSize = e)
                    }), [n, e]), null
                },
                m = n(77693);

            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) {
                        O(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function O(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var E = function() {
                    return f.Kt * (0, m.lX)().toFixed(2) + "px"
                },
                S = function(t) {
                    var e, n, o = t.children,
                        i = t.style,
                        f = t.color,
                        p = t.visible,
                        b = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = function(t, e) {
                                if (null == t) return {};
                                var n, r, o = {},
                                    i = Object.keys(t);
                                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                                return o
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                            }
                            return o
                        }(t, ["children", "style", "color", "visible"]),
                        m = (e = (0, c.useState)(E()), n = 2, function(t) {
                            if (Array.isArray(t)) return t
                        }(e) || function(t, e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
                                } catch (t) {
                                    o = !0, i = t
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return n
                            }
                        }(e, n) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return w(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? w(t, e) : void 0
                            }
                        }(e, n) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        y = m[0],
                        O = m[1];
                    return (0, c.useEffect)((function() {
                        p && O(E())
                    }), [p]), (0, r.jsx)(d.kO, {
                        children: (0, r.jsx)(d.Gd, {
                            children: function(t) {
                                return (0, r.jsx)(h.ZP, v(v({}, b), {}, {
                                    style: v(v({}, i), t.style),
                                    children: (0, r.jsx)(h.₹N, {
                                        children: function(t) {
                                            return (0, r.jsx)(a.ThemeProvider, {
                                                theme: v(v({}, a.DEFAULT_THEME), {}, {
                                                    document: t.document,
                                                    rtl: u.a.isRTL(),
                                                    components: (0, l.pE)(f),
                                                    colors: v(v({}, a.DEFAULT_THEME.colors), {}, {
                                                        primaryHue: "grey"
                                                    })
                                                }),
                                                children: (0, r.jsx)(s.W3, {
                                                    children: (0, r.jsxs)("div", {
                                                        id: "Embed",
                                                        children: [(0, r.jsx)(g, {
                                                            baseFontSize: y
                                                        }), o]
                                                    })
                                                })
                                            })
                                        }
                                    })
                                }))
                            }
                        })
                    })
                };
            S.propTypes = {
                children: i().node,
                style: i().objectOf(i().any),
                onEntered: i().func,
                visible: i().bool,
                color: i().objectOf(i().oneOfType([i().string, i().number]))
            };
            var j = S
        },
        40969: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return s
                }
            }), n(18178), n(16781);
            var r = n(2847),
                o = n(91069),
                i = n(36031),
                c = {
                    web_widget_prechat_form_visible_departments: {
                        defaultValue: !1,
                        getArturoValue: function(t) {
                            var e, n, r, o, i;
                            return null === (e = t.base) || void 0 === e || null === (n = e.embeddableConfig) || void 0 === n || null === (r = n.embeds) || void 0 === r || null === (o = r.chat) || void 0 === o || null === (i = o.props) || void 0 === i ? void 0 : i.webWidgetPrechatFormVisibleDepartments
                        }
                    },
                    use_production_sunco: {
                        defaultValue: !1
                    },
                    digital_voice_enabled: {
                        defaultValue: !1
                    },
                    web_widget_messenger_animations_disabled: {
                        defaultValue: !1
                    },
                    log_all_messenger_errors: {
                        defaultValue: !1,
                        getArturoValue: function(t) {
                            return null == t ? void 0 : t.logMessengerErrors
                        }
                    },
                    web_widget_channel_linking: {
                        defaultValue: !1,
                        getArturoValue: function(t) {
                            return null == t ? void 0 : t.channelLinking
                        }
                    },
                    web_widget_prefetch_widget_container: {
                        defaultValue: !1,
                        getArturoValue: function(t) {
                            var e, n;
                            return null == t || null === (e = t.base) || void 0 === e || null === (n = e.embeddableConfig) || void 0 === n ? void 0 : n.prefetchWidgetContainer
                        }
                    }
                },
                a = function(t) {
                    return "".concat(r.h.prefix).concat("feature-").concat(t)
                },
                u = {},
                l = function(t, e) {
                    if (u[t] !== e) {
                        u[t] = e;
                        var n = ['Feature flag "'.concat(t, '" is currently overridden to be "').concat(e, '"'), "To stop overriding this feature enter the following into the browser console", '\n\tdelete localStorage["'.concat(a(t), '"]')].join("\n");
                        o.Z.devLog(n)
                    }
                },
                s = function(t, e) {
                    var n = c[e];
                    if (!n) return !1;
                    if ((0, i.w)()) {
                        var r = localStorage.getItem(a(e));
                        if ("true" === r) return l(e, r), !0;
                        if ("false" === r) return l(e, r), !1;
                        u[e] && (o.Z.devLog('You are no longer overriding feature "'.concat(e, '"')), delete u[e])
                    }
                    return n.getArturoValue ? Boolean(n.getArturoValue(t)) : n.defaultValue
                }
        },
        16884: function(t, e, n) {
            "use strict";
            n.d(e, {
                ₹
                N: function() {
                    return p
                },
                ZP: function() {
                    return w
                },
                ND: function() {
                    return d
                }
            }), n(34115), n(634), n(58188), n(20796), n(15735), n(28673), n(6886), n(32501), n(26936), n(27233), n(95342), n(68625), n(1939), n(62775);
            var r = n(52322),
                o = (n(34769), n(13980)),
                i = n.n(o),
                c = n(2784),
                a = n(28316),
                u = n(93899);

            function l(t) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            n(17368), n(77950), n(88233), n(16781);
            var s = function(t, e) {
                    var n = t,
                        r = e;
                    if (!("scrollBehavior" in r.documentElement.style) || !0 === n.__forceSmoothScrollPolyfill__) {
                        var o, i = n.HTMLElement || n.Element,
                            c = {
                                scroll: n.scroll || n.scrollTo,
                                scrollBy: n.scrollBy,
                                elementScroll: i.prototype.scroll || s,
                                scrollIntoView: i.prototype.scrollIntoView
                            },
                            a = n.performance && n.performance.now ? n.performance.now.bind(n.performance) : Date.now,
                            u = (o = n.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(o) ? 1 : 0);
                        n.scroll = n.scrollTo = function() {
                            void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? m.call(n, r.body, void 0 !== arguments[0].left ? ~~arguments[0].left : n.scrollX || n.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : n.scrollY || n.pageYOffset) : c.scroll.call(n, void 0 !== arguments[0].left ? arguments[0].left : "object" !== l(arguments[0]) ? arguments[0] : n.scrollX || n.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : n.scrollY || n.pageYOffset))
                        }, n.scrollBy = function() {
                            void 0 !== arguments[0] && (f(arguments[0]) ? c.scrollBy.call(n, void 0 !== arguments[0].left ? arguments[0].left : "object" !== l(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : m.call(n, r.body, ~~arguments[0].left + (n.scrollX || n.pageXOffset), ~~arguments[0].top + (n.scrollY || n.pageYOffset)))
                        }, i.prototype.scroll = i.prototype.scrollTo = function() {
                            if (void 0 !== arguments[0])
                                if (!0 !== f(arguments[0])) {
                                    var t = arguments[0].left,
                                        e = arguments[0].top;
                                    m.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                    c.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== l(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }, i.prototype.scrollBy = function() {
                            void 0 !== arguments[0] && (!0 !== f(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : c.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }, i.prototype.scrollIntoView = function() {
                            if (!0 !== f(arguments[0])) {
                                var t = b(this),
                                    e = t.getBoundingClientRect(),
                                    o = this.getBoundingClientRect();
                                t !== r.body ? (m.call(this, t, t.scrollLeft + o.left - e.left, t.scrollTop + o.top - e.top), "fixed" !== n.getComputedStyle(t).position && n.scrollBy({
                                    left: e.left,
                                    top: e.top,
                                    behavior: "smooth"
                                })) : n.scrollBy({
                                    left: o.left,
                                    top: o.top,
                                    behavior: "smooth"
                                })
                            } else c.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                    }

                    function s(t, e) {
                        this.scrollLeft = t, this.scrollTop = e
                    }

                    function f(t) {
                        if (null === t || "object" !== l(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
                        if ("object" === l(t) && "smooth" === t.behavior) return !1;
                        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                    }

                    function d(t, e) {
                        return "Y" === e ? t.clientHeight + u < t.scrollHeight : "X" === e ? t.clientWidth + u < t.scrollWidth : void 0
                    }

                    function p(t, e) {
                        var r = n.getComputedStyle(t, null)["overflow" + e];
                        return "auto" === r || "scroll" === r
                    }

                    function h(t) {
                        var e = d(t, "Y") && p(t, "Y"),
                            n = d(t, "X") && p(t, "X");
                        return e || n
                    }

                    function b(t) {
                        for (; t !== r.body && !1 === h(t);) t = t.parentNode || t.host;
                        return t
                    }

                    function g(t) {
                        var e, r, o, i, c = (a() - t.startTime) / 468;
                        i = c = c > 1 ? 1 : c, e = .5 * (1 - Math.cos(Math.PI * i)), r = t.startX + (t.x - t.startX) * e, o = t.startY + (t.y - t.startY) * e, t.method.call(t.scrollable, r, o), r === t.x && o === t.y || n.requestAnimationFrame(g.bind(n, t))
                    }

                    function m(t, e, o) {
                        var i, u, l, f, d = a();
                        t === r.body ? (i = n, u = n.scrollX || n.pageXOffset, l = n.scrollY || n.pageYOffset, f = c.scroll) : (i = t, u = t.scrollLeft, l = t.scrollTop, f = s), g({
                            scrollable: i,
                            method: f,
                            startTime: d,
                            startX: u,
                            startY: l,
                            x: e,
                            y: o
                        })
                    }
                },
                f = (0, c.createContext)({
                    document: document,
                    window: window
                }),
                d = function() {
                    return (0, c.useContext)(f)
                },
                p = f.Consumer,
                h = f.Provider;

            function b(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? b(Object(n), !0).forEach((function(e) {
                        m(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function m(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function y(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            o = !0, i = t
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return v(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? v(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var O = c.forwardRef((function(t, e) {
                var n, o, i, l = t.children,
                    f = t.rootElement,
                    d = t.title,
                    p = t.hidden,
                    b = function(t, e) {
                        if (null == t) return {};
                        var n, r, o = function(t, e) {
                            if (null == t) return {};
                            var n, r, o = {},
                                i = Object.keys(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                            return o
                        }(t, e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(t);
                            for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
                        }
                        return o
                    }(t, ["children", "rootElement", "title", "hidden"]),
                    m = y((n = e, o = (0, c.useRef)(null), i = (0, c.useCallback)((function(t) {
                        o.current = t, n && ("function" == typeof n ? n(o.current) : n.current = o.current)
                    }), [o, n]), [o, i]), 2),
                    v = m[0],
                    O = m[1],
                    w = (0, c.useRef)(f),
                    E = y((0, c.useState)(!1), 2),
                    S = E[0],
                    j = E[1],
                    C = y((0, c.useState)(!1), 2),
                    _ = C[0],
                    k = C[1];
                (0, c.useEffect)((function() {
                    var t = function() {
                        j(!0)
                    };
                    if ("complete" !== v.current.contentDocument.readyState) {
                        var e = v.current;
                        return e.addEventListener("load", t),
                            function() {
                                return e.removeEventListener("load", t)
                            }
                    }
                    t()
                }), [v]), (0, c.useEffect)((function() {
                    if (S) {
                        w.current || (w.current = document.createElement("div"));
                        var t = w.current,
                            e = v.current,
                            n = e.contentDocument.body;
                        return n.appendChild(t), "scrollBehavior" in e.contentDocument.documentElement.style || s(window, window.document), k(!0),
                            function() {
                                return n.removeChild(t)
                            }
                    }
                }), [v, f, S]);
                var P = g({}, b.style);
                return S && _ && !p || (P.display = "none"), (0, r.jsx)("iframe", g(g({
                    ref: O,
                    title: d
                }, b), {}, {
                    style: P,
                    children: S && _ && (0, r.jsx)(u.LC, {
                        target: v.current.contentDocument.querySelector("head"),
                        children: (0, r.jsx)(h, {
                            value: {
                                document: v.current.contentDocument,
                                window: v.current.contentWindow
                            },
                            children: !p && a.createPortal(l, w.current)
                        })
                    })
                }))
            }));
            O.propTypes = {
                children: i().node,
                rootElement: i().instanceOf(Element),
                title: i().string.isRequired,
                hidden: i().bool,
                style: i().object
            };
            var w = O
        },
        45150: function(t, e, n) {
            "use strict";
            var r = n(36408),
                o = n(67165);
            e.Z = function() {
                return (0, r.v9)((function() {
                    return function() {
                        return o.a.t.apply(o.a, arguments)
                    }
                }))
            }
        },
        23541: function(t, e, n) {
            "use strict";
            n.d(e, {
                At: function() {
                    return r
                },
                R0: function() {
                    return o
                },
                GB: function() {
                    return i
                },
                R2: function() {
                    return c
                },
                QB: function() {
                    return a
                },
                En: function() {
                    return u
                },
                yt: function() {
                    return l
                },
                rQ: function() {
                    return s
                },
                no: function() {
                    return f
                },
                R₹: function() {
                    return d
                },
                KL: function() {
                    return p
                },
                SY: function() {
                    return h
                },
                L7: function() {
                    return b
                },
                ur: function() {
                    return g
                },
                mZ: function() {
                    return m
                },
                mf: function() {
                    return y
                },
                hC: function() {
                    return v
                },
                vj: function() {
                    return O
                },
                AW: function() {
                    return w
                },
                _O: function() {
                    return E
                },
                tX: function() {
                    return S
                },
                f9: function() {
                    return j
                },
                gY: function() {
                    return C
                },
                Nv: function() {
                    return _
                },
                Wz: function() {
                    return k
                },
                Jq: function() {
                    return P
                },
                g5: function() {
                    return T
                },
                E: function() {
                    return A
                },
                Ib: function() {
                    return I
                },
                mG: function() {
                    return L
                },
                JB: function() {
                    return D
                },
                L8: function() {
                    return x
                },
                Ss: function() {
                    return R
                },
                _X: function() {
                    return N
                },
                Qi: function() {
                    return F
                },
                e_: function() {
                    return M
                },
                j0: function() {
                    return B
                },
                hh: function() {
                    return z
                },
                ah: function() {
                    return U
                }
            });
            var r = "widget/base/UPDATE_ACTIVE_EMBED",
                o = "widget/base/UPDATE_ARTUROS",
                i = "widget/base/UPDATE_EMBED",
                c = "widget/base/UPDATE_BACK_BUTTON_VISIBILITY",
                a = "widget/base/UPDATE_WIDGET_SHOWN",
                u = "widget/base/PREFILL_RECEIVED",
                l = "widget/base/OPEN_RECEIVED",
                s = "widget/base/CLOSE_RECEIVED",
                f = "widget/base/TOGGLE_RECEIVED",
                d = "widget/base/ACTIVATE_RECEIVED",
                p = "widget/base/HIDE_RECEIVED",
                h = "widget/base/SHOW_RECEIVED",
                b = "widget/base/BADGE_SHOW_RECEIVED",
                g = "widget/base/BADGE_HIDE_RECEIVED",
                m = "widget/base/LEGACY_SHOW_RECEIVED",
                y = "widget/base/AUTHENTICATION_SUCCESS",
                v = "widget/base/AUTHENTICATION_FAILURE",
                O = "widget/base/AUTHENTICATION_PENDING",
                w = "widget/base/AUTHENTICATION_TOKEN_REVOKED",
                E = "widget/base/AUTHENTICATION_TOKEN_NOT_REVOKED",
                S = "widget/base/UPDATE_EMBEDDABLE_CONFIG",
                j = "widget/base/UPDATE_QUEUE",
                C = "widget/base/REMOVE_FROM_QUEUE",
                _ = "widget/base/CLOSE_BUTTON_CLICKED",
                k = "widget/base/ESCAPE_KEY_PRESSED",
                P = "widget/base/LOCALE_SET",
                T = "widget/base/CHAT_BADGE_MINIMIZED",
                A = "widget/base/WIDGET_SHOW_ANIMATION_COMPLETE",
                I = "widget/base/API_CLEAR_FORM",
                L = "widget/base/API_RESET_WIDGET",
                D = "widget/base/LAUNCHER_CLICKED",
                x = "widget/base/CHAT_BADGE_CLICKED",
                R = "widget/base/WIDGET_INITIALISED",
                N = "widget/base/BOOT_UP_TIMER_COMPLETE",
                F = "widget/base/NEXT_BUTTON_CLICKED",
                M = "widget/base/CANCEL_BUTTON_CLICKED",
                B = "widget/base/ADD_TO_AFTER_SHOW_ANIMATE",
                z = "widget/base/POPOUT_CREATED",
                U = "widget/base/SHOW_WIDGET"
        },
        17451: function(t, e, n) {
            "use strict";
            n.d(e, {
                CO: function() {
                    return H
                },
                pr: function() {
                    return F
                },
                dy: function() {
                    return M
                },
                YR: function() {
                    return w
                },
                n7: function() {
                    return Q
                },
                OC: function() {
                    return J
                },
                x8: function() {
                    return Y
                },
                YH: function() {
                    return z
                },
                S3: function() {
                    return q
                },
                zb: function() {
                    return j
                },
                VR: function() {
                    return X
                },
                YC: function() {
                    return D
                },
                Cw: function() {
                    return x
                },
                L1: function() {
                    return N
                },
                MC: function() {
                    return T
                },
                Kd: function() {
                    return W
                },
                Vj: function() {
                    return B
                },
                zs: function() {
                    return K
                },
                kS: function() {
                    return C
                },
                bp: function() {
                    return at
                },
                Lu: function() {
                    return ct
                },
                mx: function() {
                    return ut
                },
                EY: function() {
                    return G
                },
                m6: function() {
                    return I
                },
                ₹m: function() {
                    return E
                },
                YF: function() {
                    return it
                },
                Yg: function() {
                    return V
                },
                ₹7: function() {
                    return R
                },
                VG: function() {
                    return Z
                },
                OX: function() {
                    return rt
                },
                LO: function() {
                    return ot
                },
                vY: function() {
                    return k
                },
                ey: function() {
                    return _
                },
                pT: function() {
                    return A
                },
                YY: function() {
                    return P
                },
                ix: function() {
                    return U
                },
                zu: function() {
                    return L
                }
            }), n(26936), n(1939);
            var r = n(85581),
                o = n(64731),
                i = n(7110),
                c = n(61908),
                a = n(2847),
                u = n(94265),
                l = n(59737),
                s = n(27213),
                f = n(31849),
                d = n(76914),
                p = n(59298),
                h = n(29150),
                b = n(39147),
                g = n(70570),
                m = n(88018),
                y = n(23541);

            function v(t, e, n, r) {
                a.h.set("zE_oauth", {
                    id: e,
                    token: t.body.oauth_token,
                    expiry: t.body.oauth_expiry,
                    createdAt: t.body.oauth_created_at,
                    webToken: r
                }), n({
                    type: y.mf
                })
            }

            function O(t, e) {
                a.h.remove("zE_oauth"), e({
                    type: y.hC
                })
            }
            var w = function(t) {
                    return function(e) {
                        e({
                            type: y.vj
                        });
                        var n = (0, u.ck)(),
                            r = (0, l.Qm)(t);
                        if (!(0, u.W5)() || n && r !== n.id) {
                            a.h.remove("zE_oauth");
                            var o = {
                                method: "POST",
                                path: "/embeddable/authenticate",
                                params: {
                                    body: t
                                },
                                timeout: 1e4,
                                callbacks: {
                                    done: function(n) {
                                        return v(n, r, e, t)
                                    },
                                    fail: function(t) {
                                        return O(0, e)
                                    }
                                }
                            };
                            b.d.send(o)
                        } else e({
                            type: y.mf
                        })
                    }
                },
                E = function() {
                    return function(t) {
                        var e = (0, u.ck)();
                        if ((0, l.Xg)(e)) {
                            var n = {
                                method: "POST",
                                path: "/embeddable/authenticate/renew",
                                params: {
                                    body: e.webToken,
                                    token: {
                                        oauth_token: e.token,
                                        oauth_expiry: e.expiry
                                    }
                                },
                                callbacks: {
                                    done: function(n) {
                                        return v(n, e.id, t, e.webToken)
                                    },
                                    fail: function(e) {
                                        return O(0, t)
                                    }
                                }
                            };
                            b.d.send(n)
                        }
                        var r = h.X.getAuthSettingsJwtFn();
                        if (r && (!e || (0, l.pw)(e))) return r((function(e) {
                            t(w(e))
                        }))
                    }
                },
                S = function() {
                    return a.h.remove("zE_oauth"), {
                        type: y.AW
                    }
                },
                j = function(t) {
                    var e = (0, u.ck)();
                    return e && e.createdAt <= t ? S() : {
                        type: y._O
                    }
                },
                C = function() {
                    return S()
                },
                _ = function(t) {
                    return {
                        type: y.tX,
                        payload: t
                    }
                },
                k = function(t, e) {
                    return {
                        type: y.GB,
                        payload: {
                            name: t,
                            params: {
                                accessible: e
                            }
                        }
                    }
                },
                P = function(t) {
                    var e = {
                        type: y.QB,
                        payload: t
                    };
                    return function(n, r) {
                        var c = r();
                        !(0, i.vt)(c) && t && n((0, o.uO)()), n(e)
                    }
                },
                T = function(t) {
                    var e = t.name,
                        n = void 0 === e ? {} : e,
                        r = t.email,
                        o = void 0 === r ? {} : r,
                        i = t.phone,
                        c = void 0 === i ? {} : i,
                        a = {},
                        u = {};
                    return "boolean" == typeof n.readOnly && (u.name = n.readOnly), "boolean" == typeof o.readOnly && (u.email = o.readOnly), "boolean" == typeof c.readOnly && (u.phone = c.readOnly), (0, m.BC)(n.value) && (a.name = n.value), (0, m.s₹)(o.value) && (a.email = o.value), (0, m.iT)(c.value) && (a.phone = c.value), {
                        type: y.En,
                        payload: {
                            prefillValues: a,
                            isReadOnly: u,
                            timestamp: Date.now()
                        }
                    }
                },
                A = function(t) {
                    return {
                        type: y.f9,
                        payload: t
                    }
                },
                I = function(t) {
                    return {
                        type: y.gY,
                        payload: t
                    }
                },
                L = function() {
                    return function(t, e) {
                        (0, u.t9)(e()).forEach((function(e) {
                            t(e())
                        })), t({
                            type: y.E
                        })
                    }
                },
                D = function() {
                    return function(t) {
                        t({
                            type: y.Nv
                        }), (0, g.Gc)(), p.A(r.dM)
                    }
                },
                x = function() {
                    return function(t, e) {
                        (0, u.co)(e()) && (t({
                            type: y.Wz
                        }), p.A(r.dM))
                    }
                },
                R = function() {
                    return function(t, e) {
                        (0, u.vf)(e()) || t({
                            type: y.ah
                        })
                    }
                },
                N = function() {
                    return p.A(r.t8), {
                        type: y.hh
                    }
                },
                F = function() {
                    return function(t, e) {
                        t({
                            type: y.Ib,
                            payload: {
                                timestamp: Date.now()
                            }
                        }), t((0, c.vC)())
                    }
                },
                M = function() {
                    return function(t, e) {
                        var n = e();
                        t(F()), t({
                            type: y.mG
                        }), (0, d.BH)(n) && t((0, s.a9)(f.KF))
                    }
                },
                B = function() {
                    return function(t) {
                        t({
                            type: y.JB
                        }), p.A(r.iC)
                    }
                },
                z = function() {
                    return function(t) {
                        var e;
                        t({
                            type: y.L8
                        }), p.A(r.iC), t((e = X, {
                            type: y.j0,
                            payload: e
                        }))
                    }
                },
                U = function() {
                    return function(t) {
                        t({
                            type: y.Ss
                        }), setTimeout((function() {
                            return t({
                                type: y._X
                            })
                        }), 5e3)
                    }
                },
                H = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        type: y.R₹,
                        payload: t
                    }
                },
                W = function() {
                    return {
                        type: y.KL
                    }
                },
                V = function() {
                    return {
                        type: y.SY
                    }
                },
                K = function() {
                    return {
                        type: y.mZ
                    }
                },
                G = function() {
                    return function(t, e) {
                        (0, u.co)(e()) || (t({
                            type: y.yt
                        }), p.A(r.iC))
                    }
                },
                q = function() {
                    return function(t, e) {
                        (0, u.co)(e()) && (t({
                            type: y.rQ
                        }), p.A(r.dM))
                    }
                },
                Z = function() {
                    return function(t, e) {
                        t({
                            type: y.no
                        }), (0, u.co)(e()) ? p.A(r.iC) : p.A(r.dM)
                    }
                },
                Y = function() {
                    return function(t, e) {
                        t({
                            type: y.e_
                        }), p.A(r.dM)
                    }
                },
                X = function() {
                    return {
                        type: y.g5
                    }
                },
                Q = function() {
                    return {
                        type: y.ur
                    }
                },
                J = function() {
                    return {
                        type: y.L7
                    }
                },
                ₹ = (n(77950), n(85940), n(83738)),
                tt = n(33044),
                et = n(82965),
                nt = n(35663),
                rt = function(t) {
                    return {
                        type: y.At,
                        payload: t
                    }
                },
                ot = function() {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return {
                        type: y.R2,
                        payload: t
                    }
                },
                it = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        proactive: !1
                    };
                    return function(e) {
                        e(rt("chat")), t.proactive && e((0, s.a9)(f.ew))
                    }
                },
                ct = function(t) {
                    return function(e) {
                        e(ot(!0)), "chat" === t ? e(it()) : (e(rt(t)), "ticketSubmissionForm" === t && nt.Z.push(₹.Z.home()))
                    }
                },
                at = function() {
                    return function(t, e) {
                        var n = e(),
                            r = (0, et.dN)(n),
                            o = (0, et.P7)(n),
                            c = (0, et.nd)(n),
                            a = (0, tt.b2)(n);
                        if (o) t(ot(!1)), t(rt("answerBot")), nt.Z.replace("/");
                        else if (r) {
                            var u = (0, i.₹c)(n);
                            t(rt("helpCenterForm")), t(ot(u)), nt.Z.goBack(), a.length > 1 && nt.Z.goBack()
                        } else c ? (t(rt("channelChoice")), t(ot(!1))) : (nt.Z.canGo(-1) ? nt.Z.goBack() : nt.Z.replace("/"), t(Y()))
                    }
                },
                ut = function() {
                    return function(t, e) {
                        var n = e(),
                            r = (0, et.LL)(n),
                            o = (0, et.Bh)(n),
                            i = (0, et.nd)(n),
                            c = (0, et.dN)(n);
                        i ? (t(rt("channelChoice")), c && t(ot(!0))) : r ? (t(it()), t(ot(!0))) : o ? (t(rt("talk")), t(ot(!0))) : (t(rt("ticketSubmissionForm")), nt.Z.push(₹.Z.home()), c && t(ot(!0))), t({
                            type: y.Qi
                        })
                    }
                }
        },
        94265: function(t, e, n) {
            "use strict";
            n.d(e, {
                NQ: function() {
                    return p
                },
                fy: function() {
                    return h
                },
                B: function() {
                    return b
                },
                lF: function() {
                    return g
                },
                so: function() {
                    return m
                },
                n6: function() {
                    return y
                },
                SE: function() {
                    return v
                },
                LR: function() {
                    return O
                },
                tN: function() {
                    return w
                },
                tC: function() {
                    return E
                },
                co: function() {
                    return S
                },
                Fh: function() {
                    return j
                },
                Kd: function() {
                    return C
                },
                eg: function() {
                    return _
                },
                t9: function() {
                    return k
                },
                ₹D: function() {
                    return P
                },
                K6: function() {
                    return T
                },
                gn: function() {
                    return A
                },
                jN: function() {
                    return I
                },
                ZV: function() {
                    return L
                },
                T4: function() {
                    return D
                },
                vf: function() {
                    return x
                },
                ck: function() {
                    return R
                },
                bW: function() {
                    return N
                },
                Se: function() {
                    return F
                },
                W5: function() {
                    return M
                },
                ll: function() {
                    return B
                },
                MM: function() {
                    return z
                },
                GV: function() {
                    return U
                },
                Nr: function() {
                    return H
                },
                cu: function() {
                    return W
                },
                RL: function() {
                    return V
                },
                X1: function() {
                    return K
                },
                Rz: function() {
                    return G
                },
                Nw: function() {
                    return q
                },
                wo: function() {
                    return Z
                },
                KO: function() {
                    return Y
                },
                CV: function() {
                    return X
                },
                m1: function() {
                    return Q
                },
                DV: function() {
                    return J
                },
                Yw: function() {
                    return tt
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(68336),
                o = n.n(r),
                i = n(96677),
                c = n.n(i),
                a = n(24949),
                u = n(2847),
                l = n(59737),
                s = n(70570);

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var p = function(t) {
                    return t.base.hidden.hideApi
                },
                h = function(t) {
                    return t.base.hidden.activateApi
                },
                b = function(t) {
                    return !!t.base.embeds.ticketSubmissionForm
                },
                g = function(t) {
                    return !!t.base.embeds.chat
                },
                m = function(t) {
                    return !!t.base.embeds.helpCenterForm
                },
                y = function(t) {
                    return !!t.base.embeds.talk
                },
                v = function(t) {
                    return t.base.activeEmbed
                },
                O = function(t) {
                    return t.base.widgetShown
                },
                w = function(t) {
                    return !!t.base.embeds.ipmWidget
                },
                E = function(t) {
                    return t.base.bootupTimeout
                },
                S = function(t) {
                    return t.base.webWidgetOpen
                },
                j = function(t) {
                    return t.base.launcherVisible
                },
                C = function(t) {
                    return t.base.locale
                },
                _ = function(t) {
                    return t.base.isChatBadgeMinimized
                },
                k = function(t) {
                    return t.base.afterWidgetShowAnimation
                },
                P = function(t) {
                    return t.base.embeddableConfig.embeds.chat
                },
                T = function(t) {
                    return t.base.embeddableConfig.embeds.talk
                },
                A = function(t) {
                    return t.base.embeddableConfig.brandLogoUrl
                },
                I = function(t) {
                    return t.base.embeddableConfig.brand
                },
                L = function(t) {
                    return t.base.embeddableConfig.brandCount
                },
                D = function(t) {
                    return t.base.backButtonVisible
                },
                x = function(t) {
                    return p(t) || h(t) && !S(t)
                },
                R = function() {
                    return u.h.get("zE_oauth")
                },
                N = function() {
                    var t = R();
                    return t && t.token ? t.token : null
                },
                F = function(t) {
                    return t.base.hasWidgetShown
                },
                M = function() {
                    return (0, l.D3)(R())
                },
                B = function(t) {
                    return t.base.isAuthenticationPending
                },
                z = function(t) {
                    return t.base.embeddableConfig
                },
                U = function(t) {
                    return z(t).embeds.ticketSubmissionForm.props.attachmentsEnabled
                },
                H = function(t) {
                    return z(t).embeds.ticketSubmissionForm.props.nameFieldEnabled
                },
                W = function(t) {
                    return z(t).embeds.ticketSubmissionForm.props.nameFieldRequired
                },
                V = function(t) {
                    return z(t).embeds.ticketSubmissionForm.props.ticketFormsEnabled
                },
                K = function(t) {
                    return z(t).embeds.ticketSubmissionForm.props.customFields || {}
                },
                G = function(t) {
                    var e = z(t);
                    return c()(e, "embeds.ticketSubmissionForm.props.customFields.ids") || c()(e, "embeds.ticketSubmissionForm.props.customFields.all")
                },
                q = (0, a.createSelector)(z, (function(t) {
                    return t.embeds.chat.props.standalone
                })),
                Z = function(t) {
                    return t.base.queue
                },
                Y = (0, a.createSelector)([z], (function(t) {
                    return t.embeds.chat.props.zopimId
                })),
                X = ((0, a.createSelector)([z], (function(t) {
                    return {
                        base: t.color,
                        text: t.textColor
                    }
                })), (0, a.createSelector)(z, (function(t) {
                    return o()(t, "embeds.ticketSubmissionForm.props.formTitleKey", "message")
                }))),
                Q = (0, a.createSelector)([z], (function(t) {
                    return t.color
                })),
                J = (0, a.createSelector)([z], (function(t) {
                    return t.textColor
                })),
                ₹ = (0, a.createSelector)([z], (function(t) {
                    return t.embeds.chat.props.overrideProxy
                })),
                tt = (0, a.createSelector)([Y, ₹], (function(t, e) {
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? f(Object(n), !0).forEach((function(e) {
                                d(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }({
                        account_key: t,
                        activity_window: s.p_
                    }, e && {
                        override_proxy: e
                    })
                }))
        },
        59737: function(t, e, n) {
            "use strict";
            n.d(e, {
                D3: function() {
                    return c
                },
                Qm: function() {
                    return a
                },
                Xg: function() {
                    return u
                },
                pw: function() {
                    return l
                }
            });
            var r = n(41993),
                o = n.n(r),
                i = (n(77950), n(48319), n(88018));

            function c(t) {
                if (t && t.expiry) {
                    var e = Math.floor(Date.now() / 1e3);
                    return t.expiry > e
                }
                return !1
            }
            var a = o()((function(t) {
                var e = t.split(".")[1];
                if (void 0 === e) return null;
                var n = (0, i.EL)(e),
                    r = JSON.parse(n);
                return r.email ? (0, i.q4)(r.email) : null
            }));

            function u(t) {
                if (t && t.expiry) {
                    var e = Math.floor(Date.now() / 1e3),
                        n = t.expiry - e;
                    return n > 0 && n <= 1200
                }
                return !1
            }

            function l(t) {
                if (t && t.expiry) {
                    var e = Math.floor(Date.now() / 1e3);
                    return t.expiry < e
                }
                return !1
            }
        },
        80712: function(t, e, n) {
            "use strict";
            n.d(e, {
                CO: function() {
                    return r.CO
                },
                pr: function() {
                    return r.pr
                },
                dy: function() {
                    return r.dy
                },
                YR: function() {
                    return r.YR
                },
                n7: function() {
                    return r.n7
                },
                OC: function() {
                    return r.OC
                },
                x8: function() {
                    return r.x8
                },
                YH: function() {
                    return r.YH
                },
                S3: function() {
                    return r.S3
                },
                zb: function() {
                    return r.zb
                },
                VR: function() {
                    return r.VR
                },
                YC: function() {
                    return r.YC
                },
                Cw: function() {
                    return r.Cw
                },
                L1: function() {
                    return r.L1
                },
                MC: function() {
                    return r.MC
                },
                Kd: function() {
                    return r.Kd
                },
                Vj: function() {
                    return r.Vj
                },
                zs: function() {
                    return r.zs
                },
                kS: function() {
                    return r.kS
                },
                bp: function() {
                    return r.bp
                },
                Lu: function() {
                    return r.Lu
                },
                mx: function() {
                    return r.mx
                },
                EY: function() {
                    return r.EY
                },
                m6: function() {
                    return r.m6
                },
                ₹m: function() {
                    return r.₹m
                },
                YF: function() {
                    return r.YF
                },
                Yg: function() {
                    return r.Yg
                },
                ₹7: function() {
                    return r.₹7
                },
                VG: function() {
                    return r.VG
                },
                OX: function() {
                    return r.OX
                },
                LO: function() {
                    return r.LO
                },
                vY: function() {
                    return r.vY
                },
                ey: function() {
                    return r.ey
                },
                pT: function() {
                    return r.pT
                },
                ix: function() {
                    return r.ix
                },
                zu: function() {
                    return r.zu
                }
            });
            var r = n(17451)
        },
        28464: function(t, e, n) {
            "use strict";
            n.d(e, {
                q1: function() {
                    return o
                },
                qU: function() {
                    return i
                },
                VV: function() {
                    return c
                },
                Hq: function() {
                    return a
                },
                ru: function() {
                    return u
                },
                I8: function() {
                    return l
                },
                G8: function() {
                    return s
                },
                Y4: function() {
                    return f
                },
                M₹: function() {
                    return d
                },
                L: function() {
                    return p
                },
                tf: function() {
                    return h
                },
                s9: function() {
                    return b
                },
                MU: function() {
                    return g
                },
                wO: function() {
                    return m
                },
                d8: function() {
                    return y
                },
                UK: function() {
                    return v
                },
                bQ: function() {
                    return O
                },
                l8: function() {
                    return w
                },
                nl: function() {
                    return E
                },
                hq: function() {
                    return S
                },
                X0: function() {
                    return j
                },
                ₹k: function() {
                    return C
                },
                Ls: function() {
                    return _
                },
                n2: function() {
                    return k
                },
                tN: function() {
                    return P
                },
                lM: function() {
                    return T
                },
                Sn: function() {
                    return A
                },
                gQ: function() {
                    return I
                },
                ly: function() {
                    return L
                },
                p₹: function() {
                    return D
                },
                KV: function() {
                    return x
                },
                Ob: function() {
                    return R
                },
                oU: function() {
                    return N
                },
                C_: function() {
                    return F
                },
                ar: function() {
                    return M
                },
                mF: function() {
                    return B
                },
                xf: function() {
                    return z
                },
                rm: function() {
                    return U
                },
                g3: function() {
                    return H
                },
                rT: function() {
                    return W
                },
                TP: function() {
                    return V
                },
                Vc: function() {
                    return K
                },
                Qp: function() {
                    return G
                },
                FP: function() {
                    return q
                },
                v3: function() {
                    return Z
                },
                ₹h: function() {
                    return Y
                },
                sv: function() {
                    return X
                },
                xP: function() {
                    return Q
                },
                GR: function() {
                    return J
                },
                qM: function() {
                    return₹
                },
                MF: function() {
                    return tt
                },
                re: function() {
                    return et
                },
                iK: function() {
                    return nt
                },
                r0: function() {
                    return rt
                },
                ht: function() {
                    return ot
                },
                RV: function() {
                    return it
                },
                FA: function() {
                    return ct
                },
                kJ: function() {
                    return at
                },
                jq: function() {
                    return ut
                },
                Ez: function() {
                    return lt
                },
                WM: function() {
                    return st
                },
                RG: function() {
                    return ft
                },
                Si: function() {
                    return dt
                },
                Hx: function() {
                    return pt
                },
                pN: function() {
                    return ht
                },
                hE: function() {
                    return bt
                },
                dQ: function() {
                    return gt
                },
                zW: function() {
                    return mt
                },
                jB: function() {
                    return yt
                },
                vw: function() {
                    return vt
                },
                gY: function() {
                    return Ot
                },
                Cg: function() {
                    return wt
                },
                fY: function() {
                    return Et
                },
                nN: function() {
                    return St
                },
                WX: function() {
                    return jt
                },
                j₹: function() {
                    return Ct
                },
                M8: function() {
                    return _t
                },
                hp: function() {
                    return kt
                },
                pM: function() {
                    return Pt
                },
                nd: function() {
                    return Tt
                },
                k5: function() {
                    return At
                },
                sk: function() {
                    return It
                },
                x8: function() {
                    return Lt
                },
                A: function() {
                    return Dt
                },
                hk: function() {
                    return xt
                },
                U6: function() {
                    return Rt
                },
                pt: function() {
                    return Nt
                },
                L7: function() {
                    return Ft
                },
                sj: function() {
                    return Mt
                },
                Xl: function() {
                    return Bt
                },
                rO: function() {
                    return zt
                },
                gy: function() {
                    return Ut
                },
                Qh: function() {
                    return Ht
                },
                uu: function() {
                    return Wt
                },
                Qk: function() {
                    return Vt
                },
                d6: function() {
                    return Kt
                },
                Ug: function() {
                    return Gt
                },
                kk: function() {
                    return qt
                },
                gT: function() {
                    return Zt
                },
                Oi: function() {
                    return Yt
                },
                tt: function() {
                    return Xt
                },
                ql: function() {
                    return Qt
                },
                wK: function() {
                    return Jt
                },
                Pz: function() {
                    return₹ t
                }
            });
            var r = n(53599),
                o = "widget/chat/API_FORCE_STATUS_CALLED",
                i = "widget/chat/END_CHAT_REQUEST_SUCCESS",
                c = "widget/chat/END_CHAT_REQUEST_FAILURE",
                a = "widget/chat/CHAT_MSG_REQUEST_SENT",
                u = "widget/chat/CHAT_MSG_REQUEST_SUCCESS",
                l = "widget/chat/CHAT_MSG_REQUEST_FAILURE",
                s = "widget/chat/SET_VISITOR_INFO_REQUEST_PENDING",
                f = "widget/chat/SET_VISITOR_INFO_REQUEST_SUCCESS",
                d = "widget/chat/SET_VISITOR_INFO_REQUEST_FAILURE",
                p = "widget/chat/SEND_VISITOR_PATH_REQUEST_SUCCESS",
                h = "widget/chat/SEND_VISITOR_PATH_REQUEST_FAILURE",
                b = "widget/chat/GET_ACCOUNT_SETTINGS_REQUEST_SUCCESS",
                g = "widget/chat/GET_OPERATING_HOURS_REQUEST_SUCCESS",
                m = "widget/chat/IS_CHATTING",
                y = "widget/chat/CHAT_STARTED",
                v = "widget/chat/CHAT_CONNECTED",
                O = "widget/chat/CHAT_RATING_REQUEST_SUCCESS",
                w = "widget/chat/CHAT_RATING_REQUEST_FAILURE",
                E = "widget/chat/CHAT_BOX_CHANGED",
                S = "widget/chat/CHAT_RATING_COMMENT_REQUEST_SUCCESS",
                j = "widget/chat/CHAT_RATING_COMMENT_REQUEST_FAILURE",
                C = "widget/chat/CHAT_LAST_CHAT_RATING_REQUEST_COMPLETE",
                _ = "widget/chat/CHAT_FILE_REQUEST_SUCCESS",
                k = "widget/chat/CHAT_FILE_REQUEST_FAILURE",
                P = "widget/chat/CHAT_FILE_REQUEST_SENT",
                T = "widget/chat/UPDATE_CHAT_SCREEN",
                A = "widget/chat/NEW_AGENT_MESSAGE_RECEIVED",
                I = "widget/chat/CHAT_OPENED",
                L = "widget/chat/CHAT_WINDOW_OPEN_ON_NAVIGATE",
                D = "widget/chat/PROACTIVE_CHAT_RECEIVED",
                x = "widget/chat/PROACTIVE_CHAT_NOTIFICATION_DISMISSED",
                R = "widget/chat/EMAIL_TRANSCRIPT_REQUEST_SENT",
                N = "widget/chat/EMAIL_TRANSCRIPT_SUCCESS",
                F = "widget/chat/EMAIL_TRANSCRIPT_FAILURE",
                M = "widget/chat/EMAIL_TRANSCRIPT_IDLE",
                B = "widget/chat/RESET_EMAIL_TRANSCRIPT",
                z = "widget/chat/CHAT_NOTIFICATION_DISMISSED",
                U = "widget/chat/CHAT_NOTIFICATION_RESPONDED",
                H = "widget/chat/CHAT_NOTIFICATION_RESET",
                W = "widget/chat/CHAT_OFFLINE_FORM_CHANGED",
                V = "widget/chat/PRE_CHAT_FORM_ON_CHANGE",
                K = "widget/chat/PRE_CHAT_FORM_SUBMIT",
                G = "widget/chat/OFFLINE_FORM_REQUEST_SENT",
                q = "widget/chat/OFFLINE_FORM_REQUEST_SUCCESS",
                Z = "widget/chat/OFFLINE_FORM_REQUEST_FAILURE",
                Y = "widget/chat/OFFLINE_FORM_BACK_BUTTON_CLICKED",
                X = "widget/chat/OFFLINE_FORM_OPERATING_HOURS_LINK_CLICKED",
                Q = "widget/chat/CHAT_RECONNECT",
                J = "widget/chat/UPDATE_CHAT_CONTACT_DETAILS_VISIBILITY",
                ₹ = "widget/chat/UPDATE_CHAT_EMAIL_TRANSCRIPT_VISIBILITY",
                tt = "widget/chat/RESET_CURRENT_MESSAGE",
                et = "widget/chat/SHOW_STANDALONE_MOBILE_NOTIFICATION",
                nt = "widget/chat/CHAT_ALL_AGENTS_INACTIVE",
                rt = "widget/chat/CHAT_AGENT_INACTIVE",
                ot = "widget/chat/HISTORY_REQUEST_SENT",
                it = "widget/chat/HISTORY_REQUEST_SUCCESS",
                ct = "widget/chat/HISTORY_REQUEST_FAILURE",
                at = "widget/chat/UPDATE_PREVIEWER_SCREEN",
                ut = "widget/chat/UPDATE_PREVIEWER_SETTINGS",
                lt = "widget/chat/PREVIEWER_LOADED",
                st = "widget/chat/CHAT_SOCIAL_LOGIN_SUCCESS",
                ft = "widget/chat/CHAT_SOCIAL_LOGOUT_PENDING",
                dt = "widget/chat/CHAT_SOCIAL_LOGOUT_SUCCESS",
                pt = "widget/chat/CHAT_SOCIAL_LOGOUT_FAILURE",
                ht = "widget/chat/AUTHENTICATION_STARTED",
                bt = "widget/chat/AUTHENTICATION_FAILED",
                gt = "widget/chat/CHAT_VENDOR_LOADED",
                mt = "widget/chat/CHAT_USER_LOGGING_OUT",
                yt = "widget/chat/CHAT_USER_LOGGED_OUT",
                vt = "widget/chat/VISITOR_DEFAULT_DEPARTMENT_SELECTED",
                Ot = "widget/chat/UPDATE_CHAT_CONTACT_DETAILS_INFO",
                wt = "widget/chat/CHAT_CONTACT_DETAILS_UPDATE_SUCCESS",
                Et = "widget/chat/CHAT_BADGE_MESSAGE_CHANGED",
                St = "widget/chat/CHAT_BANNED",
                jt = "widget/chat/CHAT_DROPPED",
                Ct = "widget/chat/CHAT_CONNECTION_ERROR",
                _t = "widget/chat/OPENED_CHAT_HISTORY",
                kt = "widget/chat/CLOSED_CHAT_HISTORY",
                Pt = "widget/chat/UPDATE_END_CHAT_MODAL_VISIBILITY",
                Tt = "".concat(r.Rl, "/error"),
                At = "".concat(r.Rl, "/chat.msg"),
                It = "".concat(r.Rl, "/chat.file"),
                Lt = "".concat(r.Rl, "/chat.queue_position"),
                Dt = "".concat(r.Rl, "/chat.memberjoin"),
                xt = "".concat(r.Rl, "/chat.memberleave"),
                Rt = "".concat(r.Rl, "/chat.request.rating"),
                Nt = "".concat(r.Rl, "/chat.rating"),
                Ft = "".concat(r.Rl, "/chat.comment"),
                Mt = "".concat(r.Rl, "/typing"),
                Bt = "".concat(r.Rl, "/last_read"),
                zt = "".concat(r.Rl, "/agent_update"),
                Ut = "".concat(r.Rl, "/visitor_update"),
                Ht = "".concat(r.Rl, "/department_update"),
                Wt = "".concat(r.Rl, "/connection_update"),
                Vt = "".concat(r.Rl, "/account_status"),
                Kt = "".concat(r.Rl, "/visitor_default_department_update"),
                Gt = "".concat(r.Rl, "/history/chat.msg"),
                qt = "".concat(r.Rl, "/history/chat.file"),
                Zt = "".concat(r.Rl, "/history/chat.queue_position"),
                Yt = "".concat(r.Rl, "/history/chat.memberjoin"),
                Xt = "".concat(r.Rl, "/history/chat.memberleave"),
                Qt = "".concat(r.Rl, "/history/chat.request.rating"),
                Jt = "".concat(r.Rl, "/history/chat.rating"),
                ₹t = "".concat(r.Rl, "/history/chat.comment")
        },
        83095: function(t, e, n) {
            "use strict";
            n.d(e, {
                g_: function() {
                    return V
                },
                Nl: function() {
                    return K
                },
                ry: function() {
                    return G
                },
                a9: function() {
                    return q
                },
                jB: function() {
                    return Z
                },
                QF: function() {
                    return Y
                },
                i9: function() {
                    return X
                },
                tH: function() {
                    return J
                },
                vK: function() {
                    return₹
                },
                bn: function() {
                    return tt
                },
                Co: function() {
                    return et
                },
                KQ: function() {
                    return nt
                },
                cq: function() {
                    return rt
                },
                Zf: function() {
                    return ot
                },
                o8: function() {
                    return it
                },
                wy: function() {
                    return ct
                },
                B2: function() {
                    return at
                },
                Dd: function() {
                    return ut
                },
                NM: function() {
                    return lt
                },
                dd: function() {
                    return st
                },
                lI: function() {
                    return ft
                },
                ₹M: function() {
                    return dt
                },
                mJ: function() {
                    return pt
                },
                lw: function() {
                    return ht
                },
                HE: function() {
                    return bt
                },
                KD: function() {
                    return gt
                },
                VA: function() {
                    return mt
                },
                Ez: function() {
                    return yt
                },
                fH: function() {
                    return vt
                },
                M₹: function() {
                    return Ot
                },
                rn: function() {
                    return wt
                },
                ₹d: function() {
                    return Et
                },
                fj: function() {
                    return St
                },
                Nw: function() {
                    return jt
                },
                Uy: function() {
                    return Ct
                },
                Gv: function() {
                    return _t
                },
                pI: function() {
                    return kt
                },
                Nx: function() {
                    return Pt
                },
                Be: function() {
                    return Tt
                },
                XX: function() {
                    return At
                },
                HS: function() {
                    return It
                },
                Ok: function() {
                    return Lt
                },
                CZ: function() {
                    return Dt
                },
                aK: function() {
                    return xt
                },
                OT: function() {
                    return Rt
                },
                th: function() {
                    return Nt
                },
                OL: function() {
                    return Ft
                },
                zJ: function() {
                    return Mt
                },
                KH: function() {
                    return zt
                },
                J7: function() {
                    return Ut
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(23117),
                o = n.n(r),
                i = n(15621),
                c = n.n(i),
                a = n(39835),
                u = n.n(a),
                l = n(91541),
                s = n.n(l),
                f = n(90856),
                d = n.n(f),
                p = n(96703),
                h = n.n(p),
                b = (n(25047), n(58188), n(73439), n(15735), n(28673), n(6886), n(77950), n(85940), n(53599)),
                g = n(85581),
                m = n(19599),
                y = n(80712),
                v = n(94265),
                O = n(76914),
                w = n(88706),
                E = n(58193),
                S = n(82965),
                j = n(59298),
                C = n(14156),
                _ = n(93982),
                k = n(80370),
                P = n(78703),
                T = n(77693),
                A = n(88018),
                I = n(28464),
                L = n(31849);

            function D(t, e, n, r, o, i, c) {
                try {
                    var a = t[i](c),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function x(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function c(t) {
                            D(i, r, o, c, a, "next", t)
                        }

                        function a(t) {
                            D(i, r, o, c, a, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }

            function R(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? R(Object(n), !0).forEach((function(e) {
                        F(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function F(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var M = [],
                B = function(t, e, n) {
                    return {
                        type: "chat.msg",
                        timestamp: n,
                        nick: e.nick,
                        display_name: e.display_name,
                        msg: t
                    }
                },
                z = function() {},
                U = function(t, e, n) {
                    return function(r, o) {
                        (0, O.u6)(o()).sendTyping(!1), r({
                            type: I.Hq,
                            payload: {
                                detail: N({}, B(t, e, n)),
                                status: b.eU.CHAT_MESSAGE_PENDING
                            }
                        })
                    }
                },
                H = function(t, e, n) {
                    return {
                        type: I.ru,
                        payload: {
                            detail: N({}, B(t, e, n)),
                            status: b.eU.CHAT_MESSAGE_SUCCESS
                        }
                    }
                },
                W = function(t, e, n) {
                    return {
                        type: I.I8,
                        payload: {
                            detail: N({}, B(t, e, n)),
                            status: b.eU.CHAT_MESSAGE_FAILURE
                        }
                    }
                };

            function V(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                return function(n, r) {
                    (0, _.DX)((function() {
                        var o = (0, O.X8)(r());
                        n(U(t, o, e)), (0, w.A)(r, "sendChatMsg")(t, (function(i) {
                            o = (0, O.X8)(r()), n(i ? W(t, o, e) : H(t, o, e))
                        }))
                    }))
                }
            }
            var K = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z;
                    return function(e, n) {
                        (0, w.A)(n, "endChat")((function(r) {
                            if ((0, w.f)(r)) {
                                var o = (0, O.Vy)(n());
                                e({
                                    type: I.iK,
                                    payload: o
                                }), e({
                                    type: I.qU
                                }), e((0, y.LO)((0, S.dN)(n()) || (0, S.nd)(n())))
                            } else e({
                                type: I.VV
                            });
                            t()
                        }))
                    }
                },
                G = function() {
                    return function(t, e) {
                        (0, O.v7)(e()) ? t(q(L.DW)): t(K())
                    }
                },
                q = function(t) {
                    return {
                        type: I.lM,
                        payload: {
                            screen: t
                        }
                    }
                };

            function Z() {
                return {
                    type: I.MF
                }
            }

            function Y() {
                return {
                    type: I.M8
                }
            }

            function X() {
                return {
                    type: I.hp
                }
            }
            var Q = h()((function(t) {
                return t.sendTyping(!1)
            }), 2e3);

            function J(t) {
                return function(e, n) {
                    var r = (0, O.u6)(n());
                    e({
                        type: I.nl,
                        payload: t
                    }), 0 === t.length ? r.sendTyping(!1) : (r.sendTyping(!0), Q(r))
                }
            }

            function₹() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.visitor,
                    n = t.successAction,
                    r = t.identifier,
                    o = t.retry,
                    i = void 0 === o || o,
                    c = t.timestamp,
                    a = void 0 === c ? Date.now() : c;
                return function(t, o) {
                    var c = o();
                    if (!(0, O.wZ)(c)) {
                        var u = (0, O.j3)(c),
                            l = N({}, e);
                        if (u) {
                            if (!e.phone) return;
                            l = {
                                phone: e.phone
                            }
                        }
                        return t({
                            type: I.G8,
                            payload: N(N({}, l), {}, {
                                timestamp: a
                            })
                        }), new Promise((function(c, u) {
                            (0, _.ck)((function() {
                                (0, w.A)(o, "setVisitorInfo")(l, function() {
                                    var o = x(regeneratorRuntime.mark((function o(s) {
                                        return regeneratorRuntime.wrap((function(o) {
                                            for (;;) switch (o.prev = o.next) {
                                                case 0:
                                                    if (s) {
                                                        o.next = 6;
                                                        break
                                                    }
                                                    t({
                                                        type: I.Y4,
                                                        payload: N(N({}, l), {}, {
                                                            timestamp: a
                                                        })
                                                    }), d()(n) && t(n), c(), o.next = 9;
                                                    break;
                                                case 6:
                                                    if ("ETIMEDOUT" !== s.code || !i) {
                                                        o.next = 8;
                                                        break
                                                    }
                                                    return o.abrupt("return", c(t(₹({
                                                        visitor: e,
                                                        successAction: n,
                                                        identifier: r,
                                                        retry: !1
                                                    }))));
                                                case 8:
                                                    u(s);
                                                case 9:
                                                case "end":
                                                    return o.stop()
                                            }
                                        }), o)
                                    })));
                                    return function(t) {
                                        return o.apply(this, arguments)
                                    }
                                }())
                            }))
                        })).catch((function(e) {
                            m.Z.error(e || new Error("Unknown reason"), {
                                rollbarFingerprint: "Failed to set user information while starting chat ".concat(r),
                                rollbarTitle: "Failed to set user information while starting chat ".concat(r)
                            }), t({
                                type: I.M₹
                            })
                        }))
                    }
                }
            }

            function tt(t) {
                return₹ ({
                    visitor: t,
                    successAction: {
                        type: I.Cg,
                        payload: N(N({}, t), {}, {
                            timestamp: Date.now()
                        })
                    },
                    identifier: "edit contact details"
                })
            }

            function et() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function(e, n) {
                    (0, _.DX)((function() {
                        var r = (0, O.u6)(n()),
                            o = {};
                        o.title = t.title && s()(t.title) ? t.title : (0, A.pz)(), o.url = (0, A.jv)(t.url) ? t.url : (0, A.ms)(), o.title || (o.title = o.url), r.sendVisitorPath(o, (function(t) {
                            e(t ? {
                                type: I.tf
                            } : {
                                type: I.L,
                                payload: o
                            })
                        }))
                    }))
                }
            }

            function nt() {
                return {
                    type: I.mF
                }
            }

            function rt() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return function(e, n) {
                    (0, w.A)(n, "sendChatRating")(t, (function(n) {
                        (0, w.f)(n) ? e({
                            type: I.bQ,
                            payload: t
                        }): e({
                            type: I.l8
                        })
                    }))
                }
            }

            function ot() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return function(e, n) {
                    (0, w.A)(n, "sendChatComment")(t, (function(n) {
                        (0, w.f)(n) ? e({
                            type: I.hq,
                            payload: t
                        }): e({
                            type: I.X0
                        })
                    }))
                }
            }

            function it() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return function(e, n) {
                    (0, w.A)(n, "sendLastChatRatingInfo")(t, (function(n) {
                        (0, w.f)(n) ? ("rating" in t && e({
                            type: I.bQ,
                            payload: t.rating
                        }), "comment" in t && e({
                            type: I.hq,
                            payload: t.comment
                        })) : (e({
                            type: I.l8
                        }), e({
                            type: I.X0
                        })), e({
                            type: I.₹k
                        })
                    }))
                }
            }

            function ct() {
                return function(t, e) {
                    var r = (0, O.u6)(e()).getAccountSettings();
                    r.forms.pre_chat_form.required && !(0, O.OQ)(e()) && t(q(L.KF)), r.sound.disabled || n.e(5376).then(n.bind(n, 62677)).then((function(t) {
                        k.Z.load("incoming_message", t.default)
                    })).catch((function() {})), t({
                        type: I.s9,
                        payload: r
                    })
                }
            }

            function at() {
                return function(t, e) {
                    var n = (0, O.u6)(e()).getOperatingHours();
                    if (n) {
                        var r = n.type,
                            o = n.timezone,
                            i = n.enabled;
                        if (!i) return t({
                            type: I.MU,
                            payload: {
                                enabled: i
                            }
                        });
                        var c = N(N({}, n), {}, {
                            type: r,
                            enabled: i,
                            timezone: o.replace(/_/g, " ")
                        }, "account" === r ? {
                            account_schedule: (0, P.cV)(n.account_schedule)
                        } : {
                            department_schedule: u()(n.department_schedule, P.cV)
                        });
                        t({
                            type: I.MU,
                            payload: c
                        })
                    }
                }
            }

            function ut() {
                return function(t, e) {
                    var n = e(),
                        r = (0, O.v6)(n).show;
                    (0, O.₹F)(n) ? t(st()): r && t(lt())
                }
            }

            function lt() {
                return {
                    type: I.xf
                }
            }

            function st() {
                return {
                    type: I.KV
                }
            }

            function ft() {
                return {
                    type: I.rm
                }
            }

            function dt() {
                return {
                    type: I.g3
                }
            }

            function pt(t) {
                return function(e, n) {
                    var r = (0, O.u6)(n()),
                        i = (0, O.X8)(n());
                    c()(t, (function(t) {
                        var n = {
                            type: "chat.file",
                            timestamp: Date.now(),
                            nick: i.nick,
                            display_name: i.display_name
                        };
                        e({
                            type: I.tN,
                            payload: {
                                detail: N(N({}, n), {}, {
                                    file: o()(t, {
                                        uploading: !0
                                    })
                                })
                            }
                        }), r.sendFile(t, (function(r, i) {
                            e(r ? {
                                type: I.n2,
                                payload: {
                                    detail: N(N({}, n), {}, {
                                        file: o()(t, {
                                            error: r,
                                            uploading: !1
                                        })
                                    })
                                }
                            } : {
                                type: I.Ls,
                                payload: {
                                    detail: N(N({}, n), {}, {
                                        file: o()(t, {
                                            url: i.url,
                                            uploading: !1
                                        })
                                    })
                                }
                            })
                        }))
                    }))
                }
            }

            function ht(t) {
                return function(e) {
                    e({
                        type: I.Sn,
                        payload: t
                    }), j.A(g.lD)
                }
            }

            function bt() {
                return {
                    type: I.gQ
                }
            }

            function gt() {
                return {
                    type: I.nN
                }
            }

            function mt() {
                return {
                    type: I.WX
                }
            }

            function yt() {
                return {
                    type: I.j₹
                }
            }

            function vt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z;
                return function(r, o) {
                    (0, w.A)(o, "setVisitorDefaultDepartment")(t, (function(o) {
                        r(Bt(t, Date.now())), o ? n(o) : e()
                    }))
                }
            }

            function Ot() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z;
                return function(e, n) {
                    (0, w.A)(n, "clearVisitorDefaultDepartment")((function(e) {
                        t()
                    }))
                }
            }

            function wt(t) {
                return {
                    type: I.TP,
                    payload: t
                }
            }

            function Et(t) {
                return {
                    type: I.fY,
                    payload: t
                }
            }

            function St(t) {
                return {
                    type: I.GR,
                    payload: t
                }
            }

            function jt(t) {
                return {
                    type: I.qM,
                    payload: t
                }
            }

            function Ct() {
                return {
                    type: I.₹h
                }
            }

            function _t() {
                return {
                    type: I.sv
                }
            }

            function kt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z;
                return function(r, o) {
                    r({
                        type: I.Qp
                    });
                    var i = N({}, t);
                    i.phone || delete i.phone, (0, w.A)(o, "sendOfflineMsg")(i, (function(t) {
                        t ? (r({
                            type: I.v3
                        }), n()) : (r({
                            type: I.FP,
                            payload: i
                        }), r((0, E.uC)("offline-form", N(N({}, i), {}, {
                            message: ""
                        }))), e())
                    }))
                }
            }

            function Pt() {
                return function(t, e) {
                    (0, O.u6)(e()).reconnect(), t({
                        type: I.xP
                    })
                }
            }
            var Tt = function() {
                return function(t, e) {
                    t({
                        type: I.ht
                    }), (0, w.A)(e, "fetchChatHistory")((function(e, n) {
                        (0, w.f)(e) ? t({
                            type: I.RV,
                            payload: N(N({}, n), {}, {
                                history: M
                            })
                        }): t({
                            type: I.FA,
                            payload: e
                        }), M = []
                    }))
                }
            };

            function At() {
                return function(t, e) {
                    t({
                        type: I.RG
                    }), (0, w.A)(e, "doAuthLogout", 1e4)((function(e) {
                        t(e ? {
                            type: I.Hx
                        } : {
                            type: I.Si
                        })
                    }))
                }
            }

            function It(t) {
                return {
                    type: I.Vc,
                    payload: t
                }
            }

            function Lt(t) {
                return {
                    type: I.dQ,
                    payload: t
                }
            }

            function Dt() {
                return function(t) {
                    t({
                        type: I.p₹
                    }), t((0, y.₹7)()), t((0, y.YF)({
                        proactive: !0
                    })), (0, T.K1)() && t({
                        type: I.re
                    })
                }
            }

            function xt() {
                return {
                    type: I.ly
                }
            }

            function Rt() {
                return function(t, e) {
                    var n = e();
                    t({
                        type: I.d8
                    }), "chat" === (0, v.SE)(n) && t((0, y.LO)((0, S.dN)(n))), j.A(g.H6)
                }
            }

            function Nt() {
                return function(t) {
                    C.Z.handleChatConnected(), t({
                        type: I.UK
                    }), j.A(g.zf)
                }
            }

            function Ft(t) {
                return {
                    type: I.q1,
                    payload: t
                }
            }

            function Mt() {
                return function(t, e) {
                    var n = e();
                    (0, O.u6)(n).markAsRead(), t(dt())
                }
            }

            function Bt(t, e) {
                return {
                    type: I.vw,
                    payload: {
                        timestamp: e,
                        department: t
                    }
                }
            }

            function zt(t) {
                return {
                    type: I.pM,
                    payload: {
                        isVisible: t
                    }
                }
            }

            function Ut(t) {
                return function(e, n) {
                    (0, _.DX)((function() {
                        var r = (0, O.BH)(n()),
                            o = r ? L.KF : L.ew;
                        e(q(o)), r || (e(V(t)), e(Z()))
                    }))
                }
            }
        },
        81632: function(t, e, n) {
            "use strict";
            n.d(e, {
                O: function() {
                    return p
                }
            });
            var r = n(68336),
                o = n.n(r),
                i = n(2847),
                c = n(80712),
                a = n(28464),
                u = n(83095),
                l = n(76914),
                s = n(77693),
                f = o()(i.h.get("store"), "widgetShown"),
                d = o()(i.h.get("store"), "activeEmbed");

            function p() {
                return function(t, e) {
                    var n = (0, l.u6)(e()).isChatting(),
                        r = o()(i.h.get("store"), "is_chatting");
                    if (t({
                            type: a.wO,
                            payload: n
                        }), n) {
                        var p = d;
                        p && t((0, c.OX)(p)), f && !(0, s.K1)() && t((0, u.aK)())
                    } else r && t((0, u.VA)())
                }
            }
        },
        88413: function(t, e, n) {
            "use strict";
            n.d(e, {
                KD: function() {
                    return r.KD
                },
                Ez: function() {
                    return r.Ez
                },
                NM: function() {
                    return r.NM
                },
                lI: function() {
                    return r.lI
                },
                HE: function() {
                    return r.HE
                },
                M₹: function() {
                    return r.M₹
                },
                i9: function() {
                    return r.i9
                },
                bn: function() {
                    return r.bn
                },
                Nl: function() {
                    return r.Nl
                },
                ry: function() {
                    return r.ry
                },
                Be: function() {
                    return r.Be
                },
                ₹d: function() {
                    return r.₹d
                },
                tH: function() {
                    return r.tH
                },
                Ok: function() {
                    return r.Ok
                },
                Uy: function() {
                    return r.Uy
                },
                Gv: function() {
                    return r.Gv
                },
                rn: function() {
                    return r.rn
                },
                HS: function() {
                    return r.HS
                },
                Nx: function() {
                    return r.Nx
                },
                XX: function() {
                    return r.XX
                },
                zJ: function() {
                    return r.zJ
                },
                QF: function() {
                    return r.QF
                },
                dd: function() {
                    return r.dd
                },
                AE: function() {
                    return h
                },
                jB: function() {
                    return r.jB
                },
                KQ: function() {
                    return r.KQ
                },
                mJ: function() {
                    return r.mJ
                },
                J7: function() {
                    return r.J7
                },
                Zf: function() {
                    return r.Zf
                },
                cq: function() {
                    return r.cq
                },
                o8: function() {
                    return r.o8
                },
                g_: function() {
                    return r.g_
                },
                pI: function() {
                    return r.pI
                },
                Co: function() {
                    return r.Co
                },
                fH: function() {
                    return r.fH
                },
                OL: function() {
                    return r.OL
                },
                Oc: function() {
                    return o.O
                },
                vK: function() {
                    return r.vK
                },
                a9: function() {
                    return r.a9
                },
                fj: function() {
                    return r.fj
                },
                Nw: function() {
                    return r.Nw
                },
                KH: function() {
                    return r.KH
                }
            });
            var r = n(83095),
                o = n(59534),
                i = (n(81632), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775), n(53599)),
                c = n(94265),
                a = n(76914),
                u = n(93982),
                l = n(29150),
                s = n(28464);

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach((function(e) {
                        p(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function p(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return function(e, n) {
                    (0, u.ck)((function() {
                        var o = n(),
                            u = (0, a.u6)(o),
                            f = (0, c.Yw)(o);
                        u.on("connection_update", (function(t) {
                            var r = (0, a.H_)(n());
                            t === i.WO.CONNECTED && r && e({
                                type: s.jB
                            })
                        })), u.endChat((function() {
                            if (e({
                                    type: s.zW
                                }), t) {
                                var n = l.X.getChatAuthSettings();
                                null != n && n.jwtFn && (f = d(d({}, f), {}, {
                                    authentication: {
                                        jwt_fn: n.jwtFn
                                    }
                                }))
                            }
                            u.logoutForAll(), u.init(f), t && (e({
                                type: s.pN
                            }), u.setOnFirstReady({
                                fetchHistory: function() {
                                    e((0, r.Be)())
                                }
                            }))
                        }))
                    }))
                }
            }
        },
        59534: function(t, e, n) {
            "use strict";
            n.d(e, {
                O: function() {
                    return W
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775), n(634), n(20796), n(27233), n(32501), n(26936);
            var r = n(17328),
                o = n.n(r),
                i = n(32214),
                c = n.n(i),
                a = n(81805),
                u = n.n(a),
                l = n(68336),
                s = n.n(l),
                f = (n(39529), n(31235), n(15735), n(58188), n(73439), n(28673), n(6886), n(53599)),
                d = (n(25047), n(79264)),
                p = n(62955),
                h = n(76914),
                b = n(19599),
                g = n(70570),
                m = n(1400);

            function y(t, e, n, r, o, i, c) {
                try {
                    var a = t[i](c),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, o)
            }
            var v = function() {
                    return {
                        type: d.GJ
                    }
                },
                O = 0,
                w = function() {
                    if (O < f.Bz) return O += 1, f.E9;
                    var t = f.E9 * Math.pow(2, O - f.Bz);
                    return O += 1, Math.min(t, f.YP)
                },
                E = function() {
                    return function() {
                        var t, e = (t = regeneratorRuntime.mark((function t(e, n) {
                            var r, o, i;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(0, h.kh)(n())) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        e({
                                            type: d.S9
                                        });
                                    case 3:
                                        if (!(0, h.kh)(n())) {
                                            t.next = 24;
                                            break
                                        }
                                        if (g.tj.hidden && O > 1) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.prev = 6, t.next = 9, (0, p.M)((0, h.gy)(n()));
                                    case 9:
                                        if (r = t.sent, o = r.status, i = r.departments, (0, h.kh)(n())) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 14:
                                        e({
                                            type: d.cX,
                                            payload: {
                                                status: o,
                                                departments: i
                                            }
                                        }), t.next = 20;
                                        break;
                                    case 17:
                                        t.prev = 17, t.t0 = t.catch(6), b.Z.warn(t.t0, {
                                            rollbarFingerprint: "Failed to connect to chat ODVR endpoint",
                                            rollbarTitle: "Failed to connect to chat ODVR endpoint"
                                        });
                                    case 20:
                                        return t.next = 22, (0, m.Z)(w());
                                    case 22:
                                        t.next = 3;
                                        break;
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [6, 17]
                            ])
                        })), function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = t.apply(e, n);

                                function c(t) {
                                    y(i, r, o, c, a, "next", t)
                                }

                                function a(t) {
                                    y(i, r, o, c, a, "throw", t)
                                }
                                c(void 0)
                            }))
                        });
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                S = n(2847),
                j = n(94265),
                C = n(27213),
                _ = n(28464),
                k = (n(18178), n(85581)),
                P = n(40969),
                T = n(44141),
                A = n(59298),
                I = n(78703),
                L = function(t, e, n) {
                    return function(r) {
                        var o;
                        o = "history" === r.type ? "".concat(f.Rl, "/history/").concat(r.detail.type) : r.detail.type ? "".concat(f.Rl, "/").concat(r.detail.type) : "".concat(f.Rl, "/").concat(r.type), "chat" === r.type && r.detail && !r.detail.timestamp ? r.detail.timestamp = Date.now() : r.timestamp = Date.now(), r.isLastChatRatingEnabled = (0, P.Z)(n(), "web_widget_enable_last_chat_rating");
                        var i = {
                            type: o,
                            payload: r
                        };
                        e(i),
                            function(t, e) {
                                switch (t.type) {
                                    case _.Qh:
                                        A.A(k.WL, [t.payload.detail]);
                                        break;
                                    case _.Qk:
                                        A.A(k.Ne);
                                        break;
                                    case _.hk:
                                        (0, I.YE)(t.payload.detail.nick) && (0, T.wk)(e()) && A.A(k.G1)
                                }
                            }(i, n),
                            function(t, e, n) {
                                "connection_update" === n.type && "closed" === n.detail && t.getConnectionClosedReason() === f.x6.BANNED && e((0, C.KD)())
                            }(t, e, r)
                    }
                },
                D = n(82965),
                x = n(41225),
                R = n(14156),
                N = n(29150);

            function F(t) {
                return function(t) {
                    if (Array.isArray(t)) return M(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return M(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? M(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function B(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function z(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? B(Object(n), !0).forEach((function(e) {
                        U(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function U(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function H(t) {
                var e = s()(t, "authentication.jwtFn"),
                    n = e ? {
                        jwt_fn: e
                    } : null;
                return u()({
                    account_key: S.h.get("chatAccountKey") || t.zopimId,
                    override_proxy: S.h.get("chatOverrideProxy") || t.overrideProxy,
                    override_auth_server_host: S.h.get("chatOverrideAuthServerHost") || t.overrideAuthServerHost,
                    authentication: n,
                    activity_window: g.p_,
                    popout: (0, g.Vk)(),
                    suppress_console_error: !0
                }, c())
            }

            function W() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    e = arguments.length > 1 ? arguments[1] : void 0;
                return function(r, i) {
                    if (!(0, D.tX)(i()) && !(0, x.M8)(i()))
                        if (t && (0, D.NM)(i())) r(E());
                        else {
                            r(v()), R.Z.handleZopimQueue(g.p_);
                            var c, a = N.X.getChatAuthSettings(),
                                u = i(),
                                l = z(z({}, (0, j.₹D)(u).props), {}, {
                                    authentication: a
                                }),
                                d = (0, j.ZV)(u),
                                p = (0, j.jN)(u);
                            (void 0 === d || d > 1) && (c = (0, I.sF)(p));
                            var h = function(t, n) {
                                t = t, r((0, C.Ok)({
                                    zChat: t,
                                    slider: n.default
                                })), t.on("error", (function(t) {
                                    console.warn(t.message), t.message.includes("Visitor has been banned") && r((0, C.KD)())
                                })), l.authentication && (t.on("error", (function(e) {
                                    s()(e, "extra.reason") === f.Fh ? (o()(l, "authentication"), r({
                                        type: _.hE
                                    }), t.init(H(l)), c && t.addTag(c)) : r((0, C.Ez)())
                                })), r({
                                    type: _.pN
                                })), t.init(H(l)), t.setOnFirstReady({
                                    fetchHistory: function() {
                                        s()(l, "authentication.jwtFn") && r((0, C.Be)())
                                    },
                                    ready: function() {
                                        c && t.addTags([c]), R.Z.handleChatSDKInitialized(), e && e()
                                    }
                                }), t.getFirehose().on("data", L(t, r, i))
                            };
                            Promise.all([n.e(8876).then(n.t.bind(n, 98367, 23)), n.e(8876).then(n.bind(n, 23467))]).then((function(t) {
                                return h.apply(void 0, F(t))
                            })).catch((function(t) {
                                b.Z.error(t)
                            }))
                        }
                }
            }
        },
        31849: function(t, e, n) {
            "use strict";
            n.d(e, {
                KF: function() {
                    return r
                },
                ew: function() {
                    return o
                },
                Yw: function() {
                    return i
                },
                DW: function() {
                    return c
                },
                fb: function() {
                    return a
                },
                q_: function() {
                    return u
                },
                fR: function() {
                    return l
                },
                E₹: function() {
                    return s
                },
                LD: function() {
                    return f
                },
                fm: function() {
                    return d
                },
                dG: function() {
                    return p
                }
            });
            var r = "widget/chat/PRECHAT_SCREEN",
                o = "widget/chat/CHATTING_SCREEN",
                i = "widget/chat/FEEDBACK_SCREEN",
                c = "widget/chat/POST_CHAT_SCREEN",
                a = "widget/chat/OFFLINE_MESSAGE_SUCCESS_SCREEN",
                u = "widget/chat/EMAIL_TRANSCRIPT_SCREEN",
                l = "widget/chat/EMAIL_TRANSCRIPT_FAILURE_SCREEN",
                s = "widget/chat/EMAIL_TRANSCRIPT_SUCCESS_SCREEN",
                f = "widget/chat/EMAIL_TRANSCRIPT_LOADING_SCREEN",
                d = "widget/chat/AGENT_LIST_SCREEN",
                p = "widget/chat/LOADING_SCREEN"
        },
        88706: function(t, e, n) {
            "use strict";
            n.d(e, {
                A: function() {
                    return a
                },
                f: function() {
                    return u
                }
            });
            var r = n(78991),
                o = n.n(r),
                i = n(53599),
                c = n(76914);

            function a(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.LX,
                    r = (0, c.u6)(t());
                return o()(r[e], n)
            }

            function u(t) {
                return !t || "ETIMEDOUT" === t.code
            }
        },
        27213: function(t, e, n) {
            "use strict";
            n.d(e, {
                KD: function() {
                    return r.KD
                },
                Ez: function() {
                    return r.Ez
                },
                NM: function() {
                    return r.NM
                },
                lI: function() {
                    return r.lI
                },
                HE: function() {
                    return r.HE
                },
                M₹: function() {
                    return r.M₹
                },
                i9: function() {
                    return r.i9
                },
                bn: function() {
                    return r.bn
                },
                Nl: function() {
                    return r.Nl
                },
                ry: function() {
                    return r.ry
                },
                Be: function() {
                    return r.Be
                },
                ₹d: function() {
                    return r.₹d
                },
                tH: function() {
                    return r.tH
                },
                Ok: function() {
                    return r.Ok
                },
                Uy: function() {
                    return r.Uy
                },
                Gv: function() {
                    return r.Gv
                },
                rn: function() {
                    return r.rn
                },
                HS: function() {
                    return r.HS
                },
                Nx: function() {
                    return r.Nx
                },
                XX: function() {
                    return r.XX
                },
                zJ: function() {
                    return r.zJ
                },
                QF: function() {
                    return r.QF
                },
                dd: function() {
                    return r.dd
                },
                jB: function() {
                    return r.jB
                },
                KQ: function() {
                    return r.KQ
                },
                mJ: function() {
                    return r.mJ
                },
                J7: function() {
                    return r.J7
                },
                Zf: function() {
                    return r.Zf
                },
                cq: function() {
                    return r.cq
                },
                o8: function() {
                    return r.o8
                },
                g_: function() {
                    return r.g_
                },
                pI: function() {
                    return r.pI
                },
                fH: function() {
                    return r.fH
                },
                OL: function() {
                    return r.OL
                },
                Oc: function() {
                    return r.Oc
                },
                vK: function() {
                    return r.vK
                },
                a9: function() {
                    return r.a9
                },
                fj: function() {
                    return r.fj
                },
                Nw: function() {
                    return r.Nw
                },
                KH: function() {
                    return r.KH
                }
            });
            var r = n(88413)
        },
        5323: function(t, e, n) {
            "use strict";
            n.d(e, {
                o: function() {
                    return r
                }
            });
            var r = "widget/watchable/ACKNOWLEDGED"
        },
        70855: function(t, e, n) {
            "use strict";
            n.d(e, {
                qA: function() {
                    return r
                },
                Tm: function() {
                    return o
                },
                _f: function() {
                    return i
                }
            });
            var r = "widget/support/SET_FORM_STATE",
                o = "widget/support/CLEARED_FORM_STATE",
                i = "widget/support/ALL_FORMS_CLEARED"
        },
        58193: function(t, e, n) {
            "use strict";
            n.d(e, {
                uC: function() {
                    return o
                },
                eL: function() {
                    return i
                }
            });
            var r = n(70855),
                o = function(t, e) {
                    return {
                        type: r.qA,
                        payload: {
                            formId: t,
                            newFormState: e
                        }
                    }
                },
                i = function(t) {
                    return {
                        type: r.Tm,
                        payload: {
                            formId: t
                        }
                    }
                }
        },
        76152: function(t, e, n) {
            "use strict";
            n.d(e, {
                _5: function() {
                    return R
                },
                U: function() {
                    return F
                },
                AA: function() {
                    return M
                },
                B9: function() {
                    return B
                },
                _v: function() {
                    return z
                },
                qo: function() {
                    return U
                },
                KF: function() {
                    return H
                },
                Ph: function() {
                    return V
                },
                rr: function() {
                    return G
                },
                z8: function() {
                    return Z
                },
                I5: function() {
                    return Y
                },
                O3: function() {
                    return X
                },
                iI: function() {
                    return Q
                },
                sw: function() {
                    return J
                },
                Gh: function() {
                    return₹
                },
                bB: function() {
                    return tt
                },
                NM: function() {
                    return et
                },
                dJ: function() {
                    return nt
                }
            }), n(34769), n(34115), n(68625), n(1939), n(62775);
            var r = n(12643),
                o = n.n(r),
                i = n(85267),
                c = n.n(i),
                a = n(67647),
                u = n.n(a),
                l = n(76995),
                s = n.n(l),
                f = n(7165),
                d = n.n(f),
                p = n(78053),
                h = n.n(p),
                b = n(5175),
                g = n.n(b),
                m = n(25859),
                y = n.n(m),
                v = n(96639),
                O = n.n(v),
                w = n(73391),
                E = n.n(w),
                S = n(68336),
                j = n.n(S),
                C = (n(26936), n(95342), n(43450), n(24949)),
                _ = n(67165),
                k = n(53599),
                P = n(94265),
                T = n(31849),
                A = n(76914),
                I = n(41225);

            function L(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? L(Object(n), !0).forEach((function(e) {
                        x(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function x(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n(70570);
            var R = (0, C.createSelector)([I._A, A.hB], (function(t, e) {
                    return {
                        avatar: t.avatar,
                        title: t.title,
                        rating: e.enabled && t.rating
                    }
                })),
                N = (0, C.createSelector)([A.ps, P.Kd], (function(t, e) {
                    return t.title || _.a.t("embeddable_framework.chat.title")
                })),
                F = (0, C.createSelector)([I.R9, N, P.Kd], (function(t, e, n) {
                    return _.a.getSettingTranslation(t) || e
                })),
                M = ((0, C.createSelector)([P.Kd], (function(t) {
                    return _.a.t("embeddable_framework.chat.historyLink.label")
                })), (0, C.createSelector)([I.g_, A.Bn, A.oA, P.Kd], (function(t, e, n, r) {
                    var o = {};
                    e.enabled ? o = e : n && n.enabled && ((o = n).image = n.imagePath);
                    var i = j()(t, "label", {}),
                        c = _.a.getSettingTranslation(i) || o.text || _.a.t("embeddable_framework.chat.badge.label"),
                        a = E()(c, {
                            length: 60,
                            omission: "…"
                        });
                    return O()({}, o, t, {
                        label: a
                    }, (function(t, e) {
                        return null === e ? t : e
                    }))
                }))),
                B = (0, C.createSelector)([I.a7, A.Zc, P.Kd], (function(t, e, n) {
                    var r = D({}, e);
                    return t && (t.avatarPath && (r.avatar_path = t.avatarPath), t.name && (r.display_name = t.name), t.title && (r.title = _.a.getSettingTranslation(t.title))), r
                })),
                z = (0, C.createSelector)([I.p7, A.Y7, P.Kd], (function(t, e, n) {
                    var r = j()(t, "greeting", null);
                    return D(D({}, e), {}, {
                        message: _.a.getSettingTranslation(r) || j()(e, "message", null) || _.a.t("embeddable_framework.chat.preChat.offline.greeting")
                    })
                })),
                U = function(t) {
                    return (0, I.Vf)(t) && (0, A.pe)(t) && "chat" === (0, P.SE)(t)
                },
                H = (0, C.createSelector)([I.n7, A.Y8, P.Kd], (function(t, e, n) {
                    var r = j()(t, "greeting", null),
                        o = j()(t, "departmentLabel", null);
                    return D(D({}, e), {}, {
                        message: _.a.getSettingTranslation(r) || j()(e, "message", ""),
                        departmentLabel: _.a.getSettingTranslation(o) || j()(e, "departmentLabel", "")
                    })
                })),
                W = function(t) {
                    return y()(g()(t.form), "name")
                },
                V = (0, C.createSelector)(H, W),
                K = (0, C.createSelector)([V, I.n7, P.Kd], (function(t, e, n) {
                    var r = j()(e, "departmentLabel", null);
                    return D(D({}, t), {}, {
                        department: D(D({}, t.department), {}, {
                            label: _.a.getSettingTranslation(r) || j()(t, "department.label", null) || _.a.t("embeddable_framework.chat.form.common.dropdown.chooseDepartment")
                        })
                    })
                })),
                G = (0, C.createSelector)([I.Lj, A.yj, A.By], (function(t, e, n) {
                    var r = t || e;
                    return h()(n, (function(t) {
                        return t.name.toLowerCase() === r || t.id === r
                    }))
                })),
                q = (0, C.createSelector)([I.ak, A.By], (function(t, e) {
                    return Array.isArray(t) ? e.filter((function(e) {
                        return d()(t, e.id) || d()(t, e.name.toLowerCase())
                    })) : e
                })),
                Z = (0, C.createSelector)([K, z, G, q, P.Kd], (function(t, e, n, r, o) {
                    var i = !0,
                        c = s()(r, [function(t) {
                            return t.name.toLowerCase()
                        }], ["asc"]).map((function(r) {
                            var o = D(D({}, r), {}, {
                                value: r.id,
                                isDefault: n && n.id === r.id
                            });
                            return r.status === k.Hz.OFFLINE ? (e.enabled || (o.disabled = !0), o.name = _.a.t("embeddable_framework.chat.department.offline.label", {
                                department: r.name
                            })) : i && j()(t, "department.required", !1) && !n && (o.default = !0, i = !1), o
                        }));
                    return u()({}, t, {
                        departments: c
                    })
                })),
                Y = (0, C.createSelector)([A.Vy, B], (function(t, e) {
                    return 0 === c()(t) ? [e] : o()(t, (function(t) {
                        return t.avatar_path ? t : D(D({}, t), {}, {
                            avatar_path: e.avatar_path
                        })
                    }))
                })),
                X = (0, C.createSelector)(z, W),
                Q = (0, C.createSelector)([A.v6, A.Vy, B], (function(t, e, n) {
                    var r = e[t.nick],
                        o = j()(r, "avatar_path") || n.avatar_path;
                    return D(D(D({}, t), r), {}, {
                        avatar_path: o
                    })
                })),
                J = (0, C.createSelector)([A.Cb, P.SE, P.LR], (function(t, e, n) {
                    return n && t === T.ew && "chat" === e
                })),
                ₹ = (0, C.createSelector)([z, A.LX], (function(t, e) {
                    return t.enabled || e
                })),
                tt = (0, C.createSelector)([A.hp, I.Ay, I.dz], (function(t, e, n) {
                    return e || !n || t
                })),
                et = (0, C.createSelector)([tt, A.OQ, A.B5], (function(t, e, n) {
                    return !e && !n && t
                })),
                nt = (0, C.createSelector)([R, A.Zv, A.OQ, A.Cb], (function(t, e, n, r) {
                    return t.rating && e > 0 && n && r === T.ew
                }))
        },
        45089: function(t, e, n) {
            "use strict";
            n.d(e, {
                XV: function() {
                    return s
                },
                dN: function() {
                    return f
                },
                YQ: function() {
                    return d
                },
                bI: function() {
                    return p
                }
            });
            var r = n(24949),
                o = n(7110),
                i = n(94265),
                c = n(41225),
                a = n(77693),
                u = n(52363),
                l = (0, r.createSelector)([i.so, c.r7], (function(t, e) {
                    return t && !e
                })),
                s = (0, r.createSelector)([i.W5, o.H, u.dJ], (function(t, e, n) {
                    return t || !e || n
                })),
                f = (0, r.createSelector)([l, s], (function(t, e) {
                    return t && e
                })),
                d = (0, r.createSelector)([o.lW, f, i.SE], (function(t, e, n) {
                    return !(0, a.K1)() && t && e && "helpCenterForm" === n
                })),
                p = function(t) {
                    return !(0, i.so)(t) || s(t)
                }
        },
        82965: function(t, e, n) {
            "use strict";
            n.d(e, {
                iI: function() {
                    return r.iI
                },
                U: function() {
                    return r.U
                },
                B9: function() {
                    return r.B9
                },
                I5: function() {
                    return r.I5
                },
                Ph: function() {
                    return r.Ph
                },
                rr: function() {
                    return r.rr
                },
                NM: function() {
                    return r.NM
                },
                qo: function() {
                    return r.qo
                },
                AA: function() {
                    return r.AA
                },
                O3: function() {
                    return r.O3
                },
                _v: function() {
                    return r._v
                },
                z8: function() {
                    return r.z8
                },
                KF: function() {
                    return r.KF
                },
                _5: function() {
                    return r._5
                },
                dJ: function() {
                    return r.dJ
                },
                sw: function() {
                    return r.sw
                },
                P7: function() {
                    return o.P7
                },
                c_: function() {
                    return o.c_
                },
                Yj: function() {
                    return o.Yj
                },
                nd: function() {
                    return o.nd
                },
                LL: function() {
                    return o.LL
                },
                ni: function() {
                    return o.ni
                },
                tX: function() {
                    return o.tX
                },
                xZ: function() {
                    return o.xZ
                },
                tf: function() {
                    return o.tf
                },
                r2: function() {
                    return o.r2
                },
                Lq: function() {
                    return o.Lq
                },
                Xh: function() {
                    return o.Xh
                },
                rw: function() {
                    return o.rw
                },
                qj: function() {
                    return o.qj
                },
                HJ: function() {
                    return o.HJ
                },
                IB: function() {
                    return o.IB
                },
                xK: function() {
                    return o.xK
                },
                Dh: function() {
                    return o.Dh
                },
                Zg: function() {
                    return o.Zg
                },
                _N: function() {
                    return o._N
                },
                YP: function() {
                    return o.YP
                },
                gt: function() {
                    return o.gt
                },
                nr: function() {
                    return o.nr
                },
                DH: function() {
                    return o.DH
                },
                DF: function() {
                    return o.DF
                },
                tE: function() {
                    return o.tE
                },
                CE: function() {
                    return o.CE
                },
                xI: function() {
                    return o.xI
                },
                qN: function() {
                    return o.qN
                },
                XJ: function() {
                    return o.XJ
                },
                jG: function() {
                    return o.jG
                },
                Nx: function() {
                    return o.Nx
                },
                b8: function() {
                    return o.b8
                },
                Bh: function() {
                    return o.Bh
                },
                Jb: function() {
                    return o.Jb
                },
                hW: function() {
                    return o.hW
                },
                Y6: function() {
                    return o.Y6
                },
                dN: function() {
                    return i.dN
                }
            });
            var r = n(76152),
                o = n(6897),
                i = n(45089)
        },
        6897: function(t, e, n) {
            "use strict";
            n.d(e, {
                XJ: function() {
                    return j
                },
                Nx: function() {
                    return C
                },
                DF: function() {
                    return _
                },
                DH: function() {
                    return k
                },
                Dh: function() {
                    return P
                },
                YP: function() {
                    return I
                },
                qN: function() {
                    return L
                },
                tX: function() {
                    return x
                },
                tf: function() {
                    return R
                },
                xZ: function() {
                    return N
                },
                r2: function() {
                    return B
                },
                LL: function() {
                    return z
                },
                b8: function() {
                    return U
                },
                jG: function() {
                    return H
                },
                Bh: function() {
                    return V
                },
                nd: function() {
                    return K
                },
                rw: function() {
                    return Z
                },
                Xh: function() {
                    return Y
                },
                qj: function() {
                    return X
                },
                CE: function() {
                    return₹
                },
                Lq: function() {
                    return rt
                },
                Zg: function() {
                    return it
                },
                _N: function() {
                    return ct
                },
                hW: function() {
                    return lt
                },
                IB: function() {
                    return ft
                },
                Y6: function() {
                    return dt
                },
                c_: function() {
                    return pt
                },
                Jb: function() {
                    return ht
                },
                HJ: function() {
                    return bt
                },
                nr: function() {
                    return gt
                },
                gt: function() {
                    return mt
                },
                P7: function() {
                    return yt
                },
                Yj: function() {
                    return vt
                },
                ni: function() {
                    return Ot
                },
                xI: function() {
                    return wt
                },
                xK: function() {
                    return St
                },
                tE: function() {
                    return jt
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(57033),
                o = n.n(r),
                i = n(68336),
                c = n.n(i),
                a = (n(77950), n(48319), n(18178), n(24949)),
                u = n(67165),
                l = n(53599),
                s = n(1034),
                f = n(7110),
                d = n(76152),
                p = n(45089),
                h = (n(29150), n(77693)),
                b = n(70570),
                g = n(94265),
                m = n(76914),
                y = n(41225),
                v = n(62190);

            function O(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(n), !0).forEach((function(e) {
                        E(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function E(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var S = function(t, e) {
                    return u.a.t(t, e)
                },
                j = (0, a.createSelector)([g.Kd], (function(t) {
                    var e = S("embeddable_framework.common.textLabel.description");
                    return S("embeddable_framework.validation.label.new_optional", {
                        label: e
                    })
                })),
                C = (0, a.createSelector)([g.Kd], (function(t) {
                    var e = S("embeddable_framework.common.textLabel.name");
                    return S("embeddable_framework.validation.label.new_optional", {
                        label: e
                    })
                })),
                _ = (0, a.createSelector)([y.Hs, g.Kd, f.CV], (function(t, e, n) {
                    var r = "embeddable_framework.helpCenter.form.title.".concat(n);
                    return u.a.getSettingTranslation(t) || u.a.t(r)
                })),
                k = (0, a.createSelector)([y.OX, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.helpCenter.search.label.how_can_we_help")
                })),
                P = function(t) {
                    return (0, g.MM)(t).hideZendeskLogo || (0, m.iM)(t)
                },
                T = (0, a.createSelector)([y.vV, g.Kd, f.uc], (function(t, e, n) {
                    var r = "embeddable_framework.helpCenter.submitButton.label.submitTicket.".concat(n);
                    return u.a.getSettingTranslation(t) || u.a.t(r)
                })),
                A = (0, a.createSelector)([y.FV, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.common.button.chat")
                })),
                I = ((0, a.createSelector)([y.Vy, g.CV, g.Kd], (function(t, e, n) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.submitTicket.form.title.".concat(e))
                })), (0, a.createSelector)([y._J, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.submitTicket.ticketForms.title")
                }))),
                L = ((0, a.createSelector)([P, m.₹F, g.tN, p.YQ], (function(t, e, n, r) {
                    if (n) return {};
                    if (r) {
                        var o = t ? s.pl + 2 * s.iF : s.₹e + 2 * s.iF;
                        return {
                            maxHeight: "".concat(o, "px"),
                            minHeight: "".concat(o, "px")
                        }
                    }
                    return e ? {
                        height: "".concat(s.Dd + 2 * s.iF / s.Kt, "rem"),
                        bottom: 0,
                        top: "initial",
                        background: "transparent"
                    } : {}
                })), function(t) {
                    return (0, g.B)(t) && !(0, y.py)(t)
                }),
                D = function(t) {
                    return !(0, m.G2)(t)
                },
                x = (0, a.createSelector)([m.OQ, m.SR, y.rV, y.M8], (function(t, e, n, r) {
                    return r && !t && !e || n
                })),
                R = (0, a.createSelector)([g.lF, y.KO, x, m.OQ], (function(t, e, n, r) {
                    return t && (!e || r) && !n
                })),
                N = (0, a.createSelector)([m.Lg, y.Qr], (function(t, e) {
                    return t > 0 && e
                })),
                F = (0, a.createSelector)([d.bB, m.oO], (function(t, e) {
                    return t && e
                })),
                M = (0, a.createSelector)([g.lF, m.Ef, x, F], (function(t, e, n, r) {
                    return !t || e || n || r
                })),
                B = function(t) {
                    return R(t) && !D(t) && (0, g.lF)(t) && (0, d.Gh)(t) && !(0, g.B)(t)
                },
                z = function(t) {
                    var e = B(t) && !(0, y.Bu)(t);
                    return R(t) && (D(t) || e) && !(0, m.wZ)(t)
                },
                U = (0, a.createSelector)([y.s_, g.K6], (function(t, e) {
                    return t || c()(e, "props.nickname")
                })),
                H = (0, a.createSelector)([y.GV, g.n6, U], (function(t, e, n) {
                    return !o()(n) && !t && e
                })),
                W = (0, a.createSelector)([H, v.So, v.ly, v.ee, v.xD], (function(t, e, n, r, i) {
                    return t && e && (!o()(n) || r || i)
                })),
                V = (0, a.createSelector)([W, v.x1, v.ee], (function(t, e, n) {
                    return t && (e || n)
                })),
                K = (0, a.createSelector)([function(t) {
                    return (0, y.Pe)(t) && L(t)
                }, L, V, z, B, m.OQ], (function(t, e, n, r, o, i) {
                    return (t || n) && e + n + r + o > 1 && !i
                })),
                G = (0, a.createSelector)([g.SE, g.so, K], (function(t, e, n) {
                    return "talk" === t && (e || n)
                })),
                q = (0, a.createSelector)([y.dg, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.helpCenter.submitButton.label.submitTicket.contact")
                })),
                Z = (0, a.createSelector)([y.kj, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.common.button.chat")
                })),
                Y = (0, a.createSelector)([y.kK, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.channelChoice.button.label.chat_offline_v3")
                })),
                X = (0, a.createSelector)([y.oY, g.Kd], (function(t, e) {
                    return u.a.getSettingTranslation(t) || u.a.t("embeddable_framework.channelChoice.button.label.submitTicket")
                })),
                Q = (0, a.createSelector)([g.MM, y.r5, m.qT, g.m1, g.DV], (function(t, e, n, r, o) {
                    return t.cp4 && n && n.base ? {
                        base: e || n.base
                    } : {
                        base: e || r,
                        text: o
                    }
                })),
                J = (0, a.createSelector)([Q, y.sR], (function(t, e) {
                    return w(w({}, e), t)
                })),
                ₹ = (0, a.createSelector)([g.eg, g.Nw, D, m.YA, g.Se], (function(t, e, n, r, o) {
                    return !t && e && !(0, h.K1)() && n && r && !o
                })),
                tt = (0, a.createSelector)([y.k3, ₹, m.SX, g.m1, y.r5, m.qT, g.MM], (function(t, e, n, r, o, i, c) {
                    var a = e ? n : void 0,
                        u = c.cp4 && i ? i.base : null;
                    return t || o || a || u || r
                })),
                et = (0, a.createSelector)([y.OC, g.DV], (function(t, e) {
                    return t || e
                })),
                nt = (0, a.createSelector)([tt, et], (function(t, e) {
                    return {
                        base: t,
                        launcherText: e
                    }
                })),
                rt = function(t, e) {
                    return "webWidget" === e ? J(t) : nt(t)
                },
                ot = (0, a.createSelector)([g.MM, m.hC], (function(t, e) {
                    return t.cp4 && e ? e : t.position
                })),
                it = (0, a.createSelector)([y.bX, ot], (function(t, e) {
                    return t || e
                })),
                ct = (0, a.createSelector)(g.so, (function(t) {
                    return !t
                })),
                at = (0, a.createSelector)([function(t) {
                    return !(0, g.n6)(t) || (0, v.Am)(t)
                }, M, p.bI, g.tC], (function(t, e, n, r) {
                    return t && e && n || r
                })),
                ut = (0, a.createSelector)([z, V, p.dN, L], (function(t, e, n, r) {
                    return t || e || n || r
                })),
                lt = function(t) {
                    return (0, g.co)(t) && !(0, g.NQ)(t) && at(t) && "nilEmbed" !== (0, g.SE)(t)
                },
                st = (0, a.createSelector)([g.Fh, ut, g.NQ, g.fy, at], (function(t, e, n, r, o) {
                    return t && e && !n && !r && o
                })),
                ft = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "webWidget";
                    return "webWidget" === e || "ipmWidget" === e ? lt(t) : st(t)
                },
                dt = (0, a.createSelector)([st, lt, g.SE], (function(t, e, n) {
                    return e ? s.pm[n] : t ? s.FK : "hidden"
                })),
                pt = function(t) {
                    return Boolean((0, g.GV)(t) && (0, y.₹t)(t))
                },
                ht = (0, a.createSelector)(g.K6, (function(t) {
                    return t.props.serviceUrl
                })),
                bt = (0, a.createSelector)([ht, U], (function(t, e) {
                    var n = (0, b.Jc)(document).split(".")[0];
                    return "".concat(t, "/talk_embeddables_service/web/status?subdomain=").concat(n, "&nickname=").concat(e)
                })),
                gt = (0, a.createSelector)([y.ZC, g.jN, g.Kd], (function(t, e, n) {
                    return u.a.getSettingTranslation(t) || e || u.a.t("embeddable_framework.answerBot.header.title")
                })),
                mt = (0, a.createSelector)([y.jT, g.jN, g.Kd], (function(t, e, n) {
                    return u.a.getSettingTranslation(t) || e || u.a.t("embeddable_framework.answerBot.bot.name")
                })),
                yt = (0, a.createSelector)([f.eL, y.c1], (function(t, e) {
                    return !e && t
                })),
                vt = function(t) {
                    return L(t) || V(t) || z(t)
                },
                Ot = (0, a.createSelector)([m.B5, g.lF, y.M8], (function(t, e, n) {
                    return !n && e && (t === l.WO.CONNECTING || "" === t)
                })),
                wt = (0, a.createSelector)([L, z, V], (function(t, e, n) {
                    return t || e || n
                })),
                Et = (0, a.createSelector)([A, m.of, B, T], (function(t, e, n, r) {
                    return e > 0 ? e > 1 ? u.a.t("embeddable_framework.common.notification.manyMessages", {
                        plural_number: e
                    }) : u.a.t("embeddable_framework.common.notification.oneMessage") : n ? r : t
                })),
                St = (0, a.createSelector)([m.OQ, K, z, B, V, v.zo, q, Et, T], (function(t, e, n, r, o, i, c, a, l) {
                    return t ? a : e ? c : n || r ? a : o ? i ? u.a.t("embeddable_framework.helpCenter.submitButton.label.callback") : u.a.t("embeddable_framework.helpCenter.submitButton.label.phone") : l
                })),
                jt = (0, a.createSelector)([m._A, g.T4, G, g.SE], (function(t, e, n, r) {
                    return (t || e || n) && "helpCenterForm" !== r
                }))
        },
        88544: function(t, e, n) {
            "use strict";
            n.d(e, {
                V: function() {
                    return r.V
                }
            });
            var r = n(36810)
        },
        4220: function(t, e, n) {
            "use strict";
            n.d(e, {
                I: function() {
                    return r
                },
                d: function() {
                    return o
                }
            });
            var r = "widget/settings/UPDATE_SETTINGS",
                o = "widget/settings/ALL_FORMS_REQUESTED"
        },
        36810: function(t, e, n) {
            "use strict";
            n.d(e, {
                V: function() {
                    return w
                },
                b: function() {
                    return E
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(68336),
                o = n.n(r),
                i = n(6966),
                c = n.n(i),
                a = n(71051),
                u = n.n(a),
                l = n(73465),
                s = n.n(l),
                f = n(53599),
                d = n(27213),
                p = n(76914),
                h = n(82965),
                b = n(41225),
                g = n(29150),
                m = n(4220);

            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) {
                        O(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function O(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function w(t) {
                return function(e, n) {
                    var r, i, c, a, u, l, s;
                    o()(t, "webWidget") || (t = {
                        webWidget: v({}, t)
                    }), null !== (r = t) && void 0 !== r && null !== (i = r.webWidget) && void 0 !== i && null !== (c = i.authenticate) && void 0 !== c && null !== (a = c.chat) && void 0 !== a && a.jwtFn && g.X.storeChatAuth(t.webWidget.authenticate.chat.jwtFn), null !== (u = t) && void 0 !== u && null !== (l = u.webWidget) && void 0 !== l && null !== (s = l.authenticate) && void 0 !== s && s.jwtFn && g.X.storeHelpCenterAuth(t.webWidget.authenticate.jwtFn);
                    var d = (0, b.M2)(n());
                    e({
                        type: m.I,
                        payload: t
                    });
                    var h = n();
                    (0, p.B5)(h) === f.WO.CONNECTED && e(E(d))
                }
            }

            function E(t) {
                return function(e, n) {
                    var r = n(),
                        i = (0, b.M2)(r),
                        a = (0, p.u6)(r),
                        l = o()((0, h.rr)(r), "id");
                    ! function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        if (!s()(e, n) && u()(e) && u()(n)) {
                            var r = c()(e, n),
                                o = c()(n, e);
                            r.length > 0 && t.addTags(r), o.length > 0 && t.removeTags(o)
                        }
                    }(a, i, t), l && e((0, d.fH)(l))
                }
            }
        },
        41225: function(t, e, n) {
            "use strict";
            n.d(e, {
                Ir: function() {
                    return d
                },
                Fv: function() {
                    return p
                },
                M8: function() {
                    return h
                },
                KO: function() {
                    return g
                },
                rV: function() {
                    return m
                },
                Ay: function() {
                    return y
                },
                dz: function() {
                    return v
                },
                M2: function() {
                    return O
                },
                a7: function() {
                    return w
                },
                p7: function() {
                    return E
                },
                n7: function() {
                    return S
                },
                R9: function() {
                    return j
                },
                _A: function() {
                    return C
                },
                Bu: function() {
                    return _
                },
                Qr: function() {
                    return k
                },
                g_: function() {
                    return P
                },
                GO: function() {
                    return T
                },
                sR: function() {
                    return A
                },
                k3: function() {
                    return I
                },
                OC: function() {
                    return L
                },
                r5: function() {
                    return D
                },
                Vr: function() {
                    return x
                },
                s_: function() {
                    return R
                },
                GV: function() {
                    return N
                },
                gM: function() {
                    return F
                },
                yK: function() {
                    return M
                },
                bX: function() {
                    return B
                },
                EU: function() {
                    return V
                },
                Vf: function() {
                    return K
                },
                ₹t: function() {
                    return G
                },
                cE: function() {
                    return q
                },
                Vy: function() {
                    return Z
                },
                _J: function() {
                    return Y
                },
                py: function() {
                    return X
                },
                XL: function() {
                    return Q
                },
                Pe: function() {
                    return J
                },
                dg: function() {
                    return₹
                },
                kj: function() {
                    return tt
                },
                kK: function() {
                    return et
                },
                oY: function() {
                    return nt
                },
                tl: function() {
                    return rt
                },
                r7: function() {
                    return ot
                },
                f3: function() {
                    return it
                },
                FV: function() {
                    return ct
                },
                vV: function() {
                    return at
                },
                OX: function() {
                    return ut
                },
                Hs: function() {
                    return lt
                },
                xn: function() {
                    return st
                },
                ak: function() {
                    return ft
                },
                Lj: function() {
                    return dt
                },
                bw: function() {
                    return ht
                },
                ZC: function() {
                    return bt
                },
                jp: function() {
                    return gt
                },
                YW: function() {
                    return mt
                },
                pS: function() {
                    return vt
                },
                jT: function() {
                    return Ot
                },
                c1: function() {
                    return wt
                }
            });
            var r = n(57074),
                o = n.n(r),
                i = n(43003),
                c = n.n(i),
                a = n(86660),
                u = n.n(a),
                l = n(71051),
                s = n.n(l),
                f = (n(43450), n(77950), n(94908), n(26936), n(24949)),
                d = function(t) {
                    return t.settings.chat.mobileNotificationsDisabled
                },
                p = function(t) {
                    return !t.settings.analytics
                },
                h = function(t) {
                    return !t.settings.cookies
                },
                b = function(t) {
                    return t.settings.chat.departments.enabled
                },
                g = function(t) {
                    return t.settings.chat.suppress
                },
                m = function(t) {
                    return t.settings.chat.connectionSuppress
                },
                y = function(t) {
                    return t.settings.chat.connectOnDemand
                },
                v = function(t) {
                    return t.settings.chat.connectOnPageLoad
                },
                O = function(t) {
                    return t.settings.chat.tags
                },
                w = function(t) {
                    return t.settings.chat.concierge
                },
                E = function(t) {
                    return t.settings.chat.offlineForm
                },
                S = function(t) {
                    return t.settings.chat.prechatForm
                },
                j = function(t) {
                    return t.settings.chat.title
                },
                C = function(t) {
                    return t.settings.chat.profileCard
                },
                _ = function(t) {
                    return t.settings.chat.hideWhenOffline
                },
                k = function(t) {
                    return t.settings.chat.emailTranscriptEnabled
                },
                P = function(t) {
                    return t.settings.launcher.badge
                },
                T = function(t) {
                    return t.settings.launcher.mobile
                },
                A = function(t) {
                    return t.settings.color
                },
                I = function(t) {
                    return A(t).launcher
                },
                L = function(t) {
                    return A(t).launcherText
                },
                D = function(t) {
                    return A(t).theme
                },
                x = function(t) {
                    return t.settings.talk.title
                },
                R = function(t) {
                    return t.settings.talk.nickname
                },
                N = function(t) {
                    return t.settings.talk.suppress
                },
                F = function(t) {
                    return t.settings.styling.zIndex
                },
                M = function(t) {
                    return t.settings.styling.positionVertical
                },
                B = function(t) {
                    return t.settings.styling.positionHorizontal
                },
                z = function(t) {
                    return t.settings.styling.offsetVertical
                },
                U = function(t) {
                    return t.settings.styling.offsetHorizontal
                },
                H = function(t) {
                    return t.settings.styling.offsetMobileVertical
                },
                W = function(t) {
                    return t.settings.styling.offsetMobileHorizontal
                },
                V = function(t) {
                    return {
                        vertical: z(t),
                        horizontal: U(t),
                        mobile: {
                            vertical: H(t),
                            horizontal: W(t)
                        }
                    }
                },
                K = function(t) {
                    return t.settings.navigation.popoutButton.enabled
                },
                G = function(t) {
                    return t.settings.contactForm.settings.attachments
                },
                q = function(t) {
                    return t.settings.contactForm.settings.subject
                },
                Z = function(t) {
                    return t.settings.contactForm.settings.title
                },
                Y = function(t) {
                    return t.settings.contactForm.settings.selectTicketForm
                },
                X = function(t) {
                    return t.settings.contactForm.settings.suppress
                },
                Q = function(t) {
                    return t.settings.contactForm.settings.tags
                },
                J = function(t) {
                    return t.settings.contactOptions.enabled
                },
                ₹ = function(t) {
                    return t.settings.contactOptions.contactButton
                },
                tt = function(t) {
                    return t.settings.contactOptions.chat.chatLabelOnline
                },
                et = function(t) {
                    return t.settings.contactOptions.chat.chatLabelOffline
                },
                nt = function(t) {
                    return t.settings.contactOptions.contactFormLabel
                },
                rt = function(t) {
                    return t.settings.helpCenter.originalArticleButton
                },
                ot = function(t) {
                    return t.settings.helpCenter.suppress
                },
                it = function(t) {
                    return t.settings.helpCenter.localeFallbacks
                },
                ct = function(t) {
                    return t.settings.helpCenter.chatButton
                },
                at = function(t) {
                    return t.settings.helpCenter.messageButton
                },
                ut = function(t) {
                    return t.settings.helpCenter.searchPlaceholder
                },
                lt = function(t) {
                    return t.settings.helpCenter.title
                },
                st = (0, f.createSelector)([function(t) {
                    return t.settings.helpCenter.labelFilter
                }, function(t) {
                    return t.settings.helpCenter.categoryFilter
                }, function(t) {
                    return t.settings.helpCenter.sectionFilter
                }], (function(t, e, n) {
                    var r = {};
                    return t && (r.label_names = t), n && (r.section = n), e && (r.category = e), r
                })),
                ft = (0, f.createSelector)(b, (function(t) {
                    if (s()(t)) return u()(t.map((function(t) {
                        return pt(t)
                    })))
                })),
                dt = ((0, f.createSelector)(b, (function(t) {
                    return !!s()(t) && 0 === t.length
                })), (0, f.createSelector)((function(t) {
                    return t.settings.chat.departments.select
                }), (function(t) {
                    return pt(t)
                }))),
                pt = function(t) {
                    return c()(t) ? t : o()(t)
                },
                ht = (0, f.createSelector)([j, k, ft, S, E, w, A], (function(t, e, n, r, o, i, c) {
                    return {
                        webWidget: {
                            chat: {
                                title: t,
                                menuOptions: {
                                    emailTranscript: e
                                },
                                departments: {
                                    enabled: n
                                },
                                prechatForm: r,
                                offlineForm: o,
                                concierge: i
                            },
                            color: c
                        }
                    }
                })),
                bt = function(t) {
                    return t.settings.answerBot.title
                },
                gt = function(t) {
                    return t.settings.answerBot.delayChannelChoice
                },
                mt = function(t) {
                    return t.settings.answerBot.search.labels
                },
                yt = function(t) {
                    return t.settings.answerBot.avatar
                },
                vt = function(t) {
                    return yt(t).url
                },
                Ot = function(t) {
                    return yt(t).name
                },
                wt = function(t) {
                    return t.settings.answerBot.suppress
                }
        },
        863: function(t, e, n) {
            "use strict";
            n.d(e, {
                VX: function() {
                    return r.VX
                },
                lR: function() {
                    return r.lR
                },
                uO: function() {
                    return r.uO
                },
                g4: function() {
                    return r.g4
                },
                xD: function() {
                    return r.xD
                },
                T1: function() {
                    return r.T1
                },
                WR: function() {
                    return r.WR
                },
                kQ: function() {
                    return r.kQ
                },
                dZ: function() {
                    return r.dZ
                }
            });
            var r = n(74487)
        },
        3229: function(t, e, n) {
            "use strict";
            n.d(e, {
                jV: function() {
                    return r
                },
                E9: function() {
                    return o
                },
                nf: function() {
                    return i
                },
                Jt: function() {
                    return c
                },
                iE: function() {
                    return a
                },
                kh: function() {
                    return u
                },
                Ri: function() {
                    return l
                },
                CR: function() {
                    return s
                },
                Ee: function() {
                    return f
                },
                nm: function() {
                    return d
                },
                H1: function() {
                    return p
                }
            });
            var r = "widget/talk/TALK_EMBEDDABLE_CONFIG_SOCKET_EVENT",
                o = "widget/talk/TALK_AGENT_AVAILABILITY_SOCKET_EVENT",
                i = "widget/talk/TALK_AVERAGE_WAIT_TIME_SOCKET_EVENT",
                c = "widget/talk/TALK_DISCONNECT_SOCKET_EVENT",
                a = "widget/talk/UPDATE_CALLBACK_FORM",
                u = "widget/talk/TALK_CALLBACK_REQUEST",
                l = "widget/talk/TALK_CALLBACK_SUCCESS",
                s = "widget/talk/TALK_CALLBACK_FAILURE",
                f = "widget/talk/TALK_VENDOR_LOADED",
                d = "widget/talk/TALK_SUCCESS_DONE_BUTTON_CLICKED",
                p = "widget/talk/RECEIVED_DEFERRED_TALK_STATUS"
        },
        74487: function(t, e, n) {
            "use strict";
            n.d(e, {
                VX: function() {
                    return P
                },
                lR: function() {
                    return k
                },
                uO: function() {
                    return S
                },
                g4: function() {
                    return T
                },
                xD: function() {
                    return w
                },
                T1: function() {
                    return v
                },
                WR: function() {
                    return O
                },
                kQ: function() {
                    return E
                },
                dZ: function() {
                    return y
                }
            });
            var r = n(57033),
                o = n.n(r),
                i = n(95280),
                c = n.n(i),
                a = n(51215),
                u = n.n(a),
                l = (n(25047), n(26936), n(34115), n(634), n(77950), n(48319), n(15735), n(58188), n(73439), n(28673), n(6886), n(19599)),
                s = n(80712),
                f = n(82965),
                d = n(3229),
                p = n(39147),
                h = n(88018),
                b = n(1400),
                g = n(62190);

            function m(t, e, n, r, o, i, c) {
                try {
                    var a = t[i](c),
                        u = a.value
                } catch (t) {
                    return void n(t)
                }
                a.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function y(t) {
                return {
                    type: d.jV,
                    payload: t
                }
            }

            function v(t) {
                return {
                    type: d.E9,
                    payload: t
                }
            }

            function O(t) {
                return {
                    type: d.nf,
                    payload: t
                }
            }

            function w() {
                return {
                    type: d.Jt
                }
            }

            function E(t) {
                return {
                    type: d.iE,
                    payload: t
                }
            }

            function S(t, e) {
                return function(n, r) {
                    var o = (0, g.QL)(r()),
                        i = u()({
                            name: o.name,
                            description: o.description
                        }, c()),
                        a = (0, h.en)(t).hostname.split(".")[0],
                        l = {
                            phoneNumber: o.phone,
                            additionalInfo: i,
                            subdomain: a,
                            keyword: e
                        },
                        f = {
                            done: function() {
                                n({
                                    type: d.Ri,
                                    payload: o
                                }), n(E({})), n((0, s.LO)(!1))
                            },
                            fail: function(t) {
                                var e = {
                                    message: t.responseJSON ? t.responseJSON.error : JSON.parse(t.response.text).error,
                                    status: t.status
                                };
                                n({
                                    type: d.CR,
                                    payload: e
                                })
                            }
                        };
                    n({
                        type: d.kh,
                        payload: o
                    }), p.d.callMeRequest(t, {
                        params: l,
                        callbacks: f
                    })
                }
            }
            var j = 0,
                C = function() {
                    if (j < 1) return j += 1, 6e4;
                    var t = 6e4 * Math.pow(2, j - 1);
                    return j += 1, Math.min(t, 18e5)
                },
                _ = {};

            function k() {
                return function() {
                    var t, e = (t = regeneratorRuntime.mark((function t(e, n) {
                        var r;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    r = (0, f.HJ)(n());
                                case 1:
                                    if (!(0, g.xL)(n())) {
                                        t.next = 8;
                                        break
                                    }
                                    return document.hidden && j > 1 || _[r] || p.d.get({
                                        path: r
                                    }, {
                                        skipCache: !0
                                    }).then((function(t) {
                                        (0, g.xL)(n()) && e({
                                            type: d.H1,
                                            payload: t.body
                                        })
                                    })).catch((function(t) {
                                        l.Z.warn(t, {
                                            rollbarFingerprint: "Failed to connect to deferred talk endpoint",
                                            rollbarTitle: "Failed to connect to deferred talk endpoint"
                                        }), 404 == t.status && (_[r] = !0)
                                    })), t.next = 6, (0, b.Z)(C());
                                case 6:
                                    t.next = 1;
                                    break;
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })), function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function c(t) {
                                m(i, r, o, c, a, "next", t)
                            }

                            function a(t) {
                                m(i, r, o, c, a, "throw", t)
                            }
                            c(void 0)
                        }))
                    });
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }

            function P() {
                return function(t, e) {
                    if ((0, f.jG)(e())) {
                        var r = (0, f.b8)(e());
                        return n.e(6672).then(n.t.bind(n, 17768, 23)).then((function(n) {
                            var i, c = n.default;
                            if (t((i = {
                                    io: c
                                }, {
                                    type: d.Ee,
                                    payload: i
                                })), !o()(r)) {
                                var a = p.s.connect(c, (0, f.Jb)(e()), r);
                                p.s.mapEventsToActions(a, {
                                    dispatch: t
                                })
                            }
                        })).catch((function(t) {
                            l.Z.error(t)
                        }))
                    }
                }
            }
            var T = function() {
                return function(t) {
                    t((0, s.YC)()), t({
                        type: d.nm
                    })
                }
            }
        },
        85597: function(t, e, n) {
            "use strict";
            n.d(e, {
                kN: function() {
                    return L
                },
                rb: function() {
                    return D
                },
                LI: function() {
                    return x
                },
                JL: function() {
                    return R
                },
                hB: function() {
                    return N
                },
                Lr: function() {
                    return F
                },
                im: function() {
                    return M
                },
                TU: function() {
                    return B
                },
                zT: function() {
                    return z
                },
                VK: function() {
                    return U
                },
                xW: function() {
                    return H
                },
                XB: function() {
                    return W
                },
                zp: function() {
                    return V
                },
                rw: function() {
                    return K
                },
                jO: function() {
                    return G
                },
                tI: function() {
                    return q
                },
                X8: function() {
                    return Z
                },
                nJ: function() {
                    return X
                },
                J9: function() {
                    return Q
                },
                eL: function() {
                    return J
                },
                Gr: function() {
                    return₹
                },
                Un: function() {
                    return tt
                },
                xD: function() {
                    return et
                },
                DS: function() {
                    return nt
                },
                Xt: function() {
                    return rt
                }
            }), n(34769), n(34115), n(95342), n(68625), n(62775);
            var r = n(91541),
                o = n.n(r),
                i = n(70194),
                c = n.n(i),
                a = n(57033),
                u = n.n(a),
                l = (n(1939), n(77950), n(48319), n(45794), n(26936), n(18178), n(67165)),
                s = n(32465),
                f = n(85581),
                d = n(64731),
                p = n(80712),
                h = n(17451),
                b = n(94265),
                g = n(27213),
                m = n(88413),
                y = n(76914),
                v = n(82965),
                O = n(88544),
                w = n(41225),
                E = n(59298),
                S = n(93982),
                j = n(89931),
                C = n(38817),
                _ = n(78703),
                k = n(88018);

            function P(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(n), !0).forEach((function(e) {
                        A(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function A(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var I = function(t, e, n) {
                    (0, S.DX)((function() {
                        var r = t.getState(),
                            o = (0, y.u6)(r),
                            i = function(t) {
                                return t.reduce((function(t, e) {
                                    return u()(e) || e.split(",").forEach((function(e) {
                                        var n = e.trim();
                                        u()(n) || t.push(n)
                                    })), t
                                }), [])
                            }(c()(e));
                        0 != i.length && ("remove" === n ? o.removeTags(i) : o.addTags(i))
                    }))
                },
                L = function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return I(t, n, "remove")
                    }
                },
                D = function(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return I(t, n, "add")
                    }
                },
                x = function(t) {
                    t.dispatch((0, m.Nl)())
                },
                R = function(t, e) {
                    var n = o()(e) ? e : "";
                    t.dispatch((0, m.g_)(n))
                },
                N = function(t) {
                    t.dispatch((0, m.AE)(!0))
                },
                F = function(t, e) {
                    var n = e.email && (0, k.s₹)(e.email),
                        r = e.name && (0, k.BC)(e.name),
                        o = !!e.phone,
                        i = o && (0, k.iT)(e.phone),
                        c = T(T(T(T({}, n && {
                            email: e.email
                        }), r && {
                            name: e.name
                        }), i && {
                            phone: e.phone
                        }), {}, {
                            organization: e.organization
                        });
                    c.email || c.name || c.phone || c.organization ? (!r && console.warn("invalid name passed into zE.identify", e.name), !n && console.warn("invalid email passed into zE.identify", e.email), !i && o && console.warn("invalid phone passed into zE.identify", e.phone), t.dispatch((0, m.vK)({
                        visitor: T(T(T({}, c.name && {
                            display_name: c.name
                        }), c.email && {
                            email: c.email
                        }), c.phone && {
                            phone: c.phone
                        }),
                        identifier: "identify api"
                    }))) : console.warn("invalid params passed into zE.identify", e), r && n && (!o || i) && (j.N.identify(c, l.a.getLocaleId()), C.y.setUserIdentity(c))
                },
                M = function(t) {
                    t.dispatch((0, p.EY)())
                },
                B = function(t) {
                    t.dispatch((0, p.S3)())
                },
                z = function(t) {
                    t.dispatch((0, p.VG)())
                },
                U = function(t, e) {
                    l.a.setLocale(e)
                },
                H = function(t, e) {
                    t.dispatch((0, O.V)(e))
                },
                W = function(t) {
                    t.dispatch((0, p.kS)()), t.dispatch((0, p.S3)()), t.dispatch((0, m.AE)(!1)), t.dispatch((0, h.dy)())
                },
                V = function(t, e) {
                    t.dispatch((0, d.pE)(e))
                },
                K = function(t, e) {
                    t.dispatch((0, p.MC)(e))
                },
                G = function(t) {
                    var e = t.getState();
                    (0, b.vf)(e) || t.dispatch((0, p.Kd)())
                },
                q = function(t) {
                    var e = t.getState();
                    (0, b.vf)(e) && t.dispatch((0, p.Yg)())
                },
                Z = function(t) {
                    t.dispatch((0, p.₹m)())
                },
                Y = function(t, e) {
                    var n = e();
                    (0, _.nG)((0, w.bw)(n), (0, y.u6)(n).getMachineId(), l.a.getLocale()), t((0, p.L1)())
                },
                X = function(t) {
                    var e = t.getState();
                    (0, y.pe)(e) && ((0, y.SR)(e) ? Y(t.dispatch, t.getState) : t.dispatch((0, g.Oc)(!1, (function() {
                        Y(t.dispatch, t.getState)
                    }))))
                },
                Q = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t.dispatch((0, m.Co)(e))
                },
                J = function(t) {
                    t.dispatch((0, p.pr)())
                },
                ₹ = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return v.Y6.apply(void 0, [t.getState()].concat(n))
                },
                tt = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return y.OQ.apply(void 0, [t.getState()].concat(n))
                },
                et = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return y.iI.apply(void 0, [t.getState()].concat(n))
                },
                nt = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return y.By.apply(void 0, [t.getState()].concat(n))
                },
                rt = function() {
                    var t, e;
                    return e = {
                        userEvent: function(t, e) {
                            E.j(e, f.zM)
                        },
                        chat: (t = {}, A(t, s.gs, (function(t, e) {
                            return E.j(e, f.zf)
                        })), A(t, s.jp, (function(t, e) {
                            return E.j(e, f.G1)
                        })), A(t, s.CI, (function(t, e) {
                            return E.j((function() {
                                (0, y.wk)(t.getState()) && e()
                            }), f.H6)
                        })), A(t, s.ek, (function(t, e) {
                            E.j(e, f.WL)
                        })), A(t, s.H₹, (function(t, e) {
                            E.j((function() {
                                return e((0, y.of)(t.getState()))
                            }), f.lD)
                        })), A(t, s.cc, (function(t, e) {
                            E.j((function() {
                                return e((0, y.BV)(t.getState()))
                            }), f.Ne)
                        })), A(t, s.Id, (function(t, e) {
                            E.j((function() {
                                return e((0, y.BV)(t.getState()))
                            }), f.t8)
                        })), t)
                    }, A(e, s.QX, (function(t, e) {
                        return E.j(e, f.iC)
                    })), A(e, s.sN, (function(t, e) {
                        return E.j(e, f.dM)
                    })), e
                }
        },
        59298: function(t, e, n) {
            "use strict";
            n.d(e, {
                j: function() {
                    return h
                },
                A: function() {
                    return b
                }
            });
            var r, o = n(81620),
                i = n.n(o),
                c = n(96677),
                a = n.n(c),
                u = (n(1939), n(34115), n(634), n(58188), n(20796), n(15735), n(28673), n(6886), n(27233), n(32501), n(26936), n(85581));

            function l(t) {
                return function(t) {
                    if (Array.isArray(t)) return s(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return s(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array₹/.test(n) ? s(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var d = (f(r = {}, u.iC, []), f(r, u.dM, []), f(r, u.zf, []), f(r, u.G1, []), f(r, u.H6, []), f(r, u.WL, []), f(r, u.lD, []), f(r, u.Ne, []), f(r, u.t8, []), f(r, u.zM, []), r),
                p = function(t) {
                    return a()(d, t)
                },
                h = function(t, e) {
                    p(e) && d[e].push(t)
                },
                b = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    p(t) && d[t].forEach((function(t) {
                        return i()(t) ? t.apply(void 0, l(e)) : null
                    }))
                }
        },
        93982: function(t, e, n) {
            "use strict";
            n.d(e, {
                DX: function() {
                    return a
                },
                ck: function() {
                    return u
                },
                wl: function() {
                    return l
                },
                sC: function() {
                    return s
                }
            }), n(1939);
            var r = !1,
                o = !1,
                i = [],
                c = [],
                a = function(t) {
                    if (r) return t();
                    i.push(t)
                },
                u = function(t) {
                    if (o) return t();
                    c.push(t)
                },
                l = function() {
                    f(i), r = !0
                },
                s = function() {
                    f(c), o = !0
                },
                f = function(t) {
                    t.forEach((function(t) {
                        return t()
                    })), t = []
                }
        },
        14156: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return tt
                }
            });
            var r = n(93982),
                o = n(11796),
                i = n.n(o),
                c = n(68336),
                a = n.n(c),
                u = n(15621),
                l = n.n(u),
                s = (n(77950), n(85940), n(45794), n(96928), n(61229), n(58188), n(34115), n(634), n(20796), n(15735), n(28673), n(6886), n(86660)),
                f = n.n(s),
                d = n(91541),
                p = n.n(d),
                h = (n(32501), n(16781), n(2133));

            function b(t) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function m(t, e) {
                return (m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function y(t, e) {
                return !e || "object" !== b(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var O = function(t) {
                    return p()(t) ? t.length > 200 ? "".concat(t.slice(0, 200), " \n\t...\n}") : t : null
                },
                w = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && m(t, e)
                    }(o, t);
                    var e, n, r = (e = o, n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }(), function() {
                        var t, r = v(e);
                        if (n) {
                            var o = v(this).constructor;
                            t = Reflect.construct(r, arguments, o)
                        } else t = r.apply(this, arguments);
                        return y(this, t)
                    });

                    function o() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        g(this, o);
                        var i = f()(["An error occurred within your use of the ₹zopim Widget API:", O(e), "Check out the Developer API docs to make sure you're using it correctly", "https://api.zopim.com/files/meshim/widget/controllers/LiveChatAPI-js.html", n.stack]).join("\n\n");
                        return (t = r.call(this, i, "ZopimApiError")).realError = n, t.rollbarFingerprint = "₹zopim() API user error", t.rollbarTitle = "₹zopim() API user error", t
                    }
                    return o
                }(h.Z),
                E = n(45224);
            n(34769), n(95342), n(68625), n(1939), n(62775);
            var S = n(84818),
                j = n.n(S),
                C = (n(18178), n(32465)),
                _ = n(80712),
                k = n(94265),
                P = n(27213),
                T = n(76914),
                A = n(76152),
                I = n(85597),
                L = n(29150),
                D = n(45554),
                x = n(88018),
                R = n(96703),
                N = n.n(R),
                F = n(81620),
                M = n.n(F),
                B = n(7165),
                z = n.n(B),
                U = n(64320),
                H = n.n(U),
                W = n(85581),
                V = n(59298),
                K = function(t) {
                    return function(e) {
                        var n = {
                                b: "bottom",
                                t: "top",
                                m: null,
                                r: "right",
                                l: "left"
                            },
                            r = n[e[0]],
                            o = n[e[1]];
                        "left" !== o && "right" !== o || Y(t, "webWidget.position.horizontal", o), "top" !== r && "bottom" !== r || Y(t, "webWidget.position.vertical", r)
                    }
                },
                G = function(t) {
                    return {
                        setOffsetVerticalMobile: function(e) {
                            return Y(t, "webWidget.offset.mobile.vertical", e)
                        },
                        setOffsetHorizontalMobile: function(e) {
                            return Y(t, "webWidget.offset.mobile.horizontal", e)
                        }
                    }
                },
                q = function(t) {
                    return function(e) {
                        var n = {
                                webWidget: {
                                    chat: {
                                        profileCard: {}
                                    }
                                }
                            },
                            r = n.webWidget.chat.profileCard;
                        H()(e.avatar) && (r.avatar = e.avatar), H()(e.title) && (r.title = e.title), H()(e.rating) && (r.rating = e.rating), (0, I.xW)(t, n)
                    }
                },
                Z = ["color", "name", "email", "language", "phone", "status", "greetings", "disableGoogleAnalytics", "onConnected", "onChatStart", "onChatEnd", "onStatus", "onUnreadMsgs"],
                Y = function(t, e, n) {
                    var r = i()({}, e, n);
                    (0, I.xW)(t, r)
                };

            function X(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? X(Object(n), !0).forEach((function(e) {
                        J(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function J(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var₹ = function() {}, tt = {
                setupZopimQueue: function(t) {
                    var e, n, r;
                    t.₹zopim && (n = t.₹zopim._, t.₹zopim.set && (r = t.₹zopim.set._)), (e = t.₹zopim = function(t) {
                        e._exec ? t() : e._.push(t)
                    }).set = function(t) {
                        e.set._.push(t)
                    }, e._ = [], e.set._ = [], e._setByWW = !0, n && l()(n, (function(t) {
                        e._.push(t)
                    })), r && l()(r, (function(t) {
                        e.set._.push(t)
                    }))
                },
                handleZopimQueue: function(t) {
                    !1 !== a()(t.₹zopim, "_setByWW") && !0 !== a()(t.₹zopim, "_exec") && (i()(t.₹zopim, "_exec", !0), l()(a()(t.₹zopim, "_", []), (function(t) {
                        try {
                            t()
                        } catch (n) {
                            var e = "".concat(t).trim().replace(/\s{2,}/, " ");
                            (0, E.d)(new w(e, n))
                        }
                    })))
                },
                setUpZopimApiMethods: function(t, e) {
                    if (t.₹zopim = t.₹zopim || {}, j()(t.₹zopim.livechat)) {
                        var n = (0, I.Xt)(),
                            o = function(t) {
                                return {
                                    setOffsetVertical: function(e) {
                                        return Y(t, "webWidget.offset.vertical", e)
                                    },
                                    setOffsetHorizontal: function(e) {
                                        return Y(t, "webWidget.offset.horizontal", e)
                                    }
                                }
                            }(e),
                            i = o.setOffsetVertical,
                            c = o.setOffsetHorizontal;
                        t.₹zopim.livechat = {
                                authenticate: function(t) {
                                    var e = t.jwtFn;
                                    return L.X.storeChatAuth(e)
                                },
                                cookieLaw: {
                                    comply: ₹,
                                    showPrivacyPanel: ₹,
                                    setDefaultImplicitConsent: function() {
                                        return Y(e, "cookies", !1)
                                    }
                                },
                                unreadflag: {
                                    enable: ₹,
                                    disable: ₹
                                },
                                window: {
                                    toggle: function() {
                                        return (0, I.zT)(e)
                                    },
                                    hide: function() {
                                        return (0, I.jO)(e)
                                    },
                                    show: function() {
                                        (0, A.NM)(e.getState()) ? ((0, I.tI)(e), (0, I.im)(e), e.dispatch((0, _.OX)("chat"))) : (0, r.DX)((function() {
                                            (0, I.tI)(e), (0, I.im)(e), (0, T.Jj)(e.getState()) && e.dispatch((0, _.OX)("chat"))
                                        }))
                                    },
                                    setSize: ₹,
                                    getDisplay: function() {
                                        return (0, k.co)(e.getState())
                                    },
                                    onHide: function(t) {
                                        return n[C.sN](e, t)
                                    },
                                    onShow: function(t) {
                                        return n[C.QX](e, t)
                                    },
                                    setTitle: function(t) {
                                        return Y(e, "webWidget.chat.title.*", t)
                                    },
                                    setColor: function(t) {
                                        return Y(e, "webWidget.color.theme", t)
                                    },
                                    openPopout: function() {
                                        return (0, r.DX)((function() {
                                            return (0, I.nJ)(e)
                                        }))
                                    },
                                    setPosition: K(e),
                                    setOffsetHorizontal: c,
                                    setOffsetVertical: i,
                                    setOffsetBottom: i,
                                    setBg: ₹,
                                    getSettings: ₹
                                },
                                badge: {
                                    hide: function() {
                                        return function(t) {
                                            t.dispatch((0, _.n7)())
                                        }(e)
                                    },
                                    show: function() {
                                        ! function(t) {
                                            t.dispatch((0, _.OC)())
                                        }(e), (0, I.tI)(e)
                                    },
                                    setColor: function(t) {
                                        return Y(e, "webWidget.color.launcher", t)
                                    },
                                    setText: function(t) {
                                        return Y(e, "webWidget.launcher.badge.label.*", t)
                                    },
                                    setImage: function(t) {
                                        return Y(e, "webWidget.launcher.badge.image", t)
                                    },
                                    setLayout: function(t) {
                                        return Y(e, "webWidget.launcher.badge.layout", t)
                                    }
                                },
                                prechatForm: {
                                    setGreetings: function(t) {
                                        return Y(e, "webWidget.chat.prechatForm.greeting.*", t)
                                    }
                                },
                                offlineForm: {
                                    setGreetings: function(t) {
                                        return Y(e, "webWidget.chat.offlineForm.greeting.*", t)
                                    }
                                },
                                button: Q(Q({
                                    hide: function() {
                                        return (0, I.jO)(e)
                                    },
                                    show: function() {
                                        (0, I.tI)(e), (0, I.TU)(e)
                                    },
                                    setHideWhenOffline: function(t) {
                                        return Y(e, "webWidget.chat.hideWhenOffline", t)
                                    },
                                    setPosition: K(e),
                                    setPositionMobile: K(e),
                                    setColor: function(t) {
                                        return Y(e, "webWidget.color.launcher", t)
                                    },
                                    setOffsetVertical: i,
                                    setOffsetHorizontal: c
                                }, G(e)), {}, {
                                    setOffsetBottom: i,
                                    useFavicon: ₹,
                                    setTheme: ₹,
                                    setImage: ₹
                                }),
                                theme: {
                                    setColor: function(t) {
                                        return Y(e, "webWidget.color.theme", t)
                                    },
                                    setColors: function(t) {
                                        t.primary && Y(e, "webWidget.color.theme", t.primary)
                                    },
                                    reload: ₹,
                                    setProfileCardConfig: q(e),
                                    setFontConfig: ₹,
                                    setTheme: ₹
                                },
                                mobileNotifications: {
                                    setDisabled: function(t) {
                                        return Y(e, "webWidget.chat.notifications.mobile.disable", t)
                                    },
                                    setIgnoreChatButtonVisibility: ₹
                                },
                                departments: {
                                    setLabel: function(t) {
                                        return (0, r.DX)((function() {
                                            Y(e, "webWidget.chat.prechatForm.departmentLabel.*", t)
                                        }))
                                    },
                                    getDepartment: function(t) {
                                        return (0, I.xD)(e, t)
                                    },
                                    getAllDepartments: function() {
                                        return (0, I.DS)(e)
                                    },
                                    filter: function() {
                                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                        return (0, r.DX)((function() {
                                            Y(e, "webWidget.chat.departments.enabled", [].concat(n))
                                        }))
                                    },
                                    setVisitorDepartment: function(t) {
                                        return (0, r.DX)((function() {
                                            Y(e, "webWidget.chat.departments.select", t)
                                        }))
                                    },
                                    clearVisitorDepartment: function() {
                                        return (0, r.DX)((function() {
                                            Y(e, "webWidget.chat.departments.select", "")
                                        }))
                                    }
                                },
                                concierge: {
                                    setAvatar: function(t) {
                                        return Y(e, "webWidget.chat.concierge.avatarPath", t)
                                    },
                                    setName: function(t) {
                                        return Y(e, "webWidget.chat.concierge.name", t)
                                    },
                                    setTitle: function(t) {
                                        return Y(e, "webWidget.chat.concierge.title.*", t)
                                    }
                                },
                                setColor: function(t) {
                                    return Y(e, "webWidget.color.theme", t)
                                },
                                hideAll: function() {
                                    return (0, I.jO)(e)
                                },
                                set: function(e) {
                                    return (0, r.ck)((function() {
                                        return function(t, e) {
                                            for (var n in e)
                                                if (z()(Z, n)) {
                                                    var r = "set" + (i = n, (i += "").charAt(0).toUpperCase() + i.substring(1)),
                                                        o = e[n];
                                                    t.₹zopim.livechat[r](o)
                                                } var i
                                        }(t, e)
                                    }))
                                },
                                isChatting: function() {
                                    return (0, I.Un)(e)
                                },
                                say: function(t) {
                                    return (0, I.JL)(e, t)
                                },
                                endChat: function() {
                                    return (0, I.LI)(e)
                                },
                                addTags: (0, I.rb)(e),
                                removeTags: (0, I.kN)(e),
                                setName: function(t) {
                                    (0, x.BC)(t) ? (0, r.ck)((function() {
                                        e.dispatch((0, P.vK)({
                                            visitor: {
                                                display_name: t
                                            },
                                            identifier: "zopim api"
                                        })), (0, I.rw)(e, {
                                            name: {
                                                value: t
                                            }
                                        })
                                    })) : console.warn("invalid name passed into setName: ".concat(t))
                                },
                                setPhone: function(t) {
                                    (0, x.iT)(t) ? (0, r.ck)((function() {
                                        e.dispatch((0, P.vK)({
                                            visitor: {
                                                phone: t
                                            },
                                            identifier: "zopim api"
                                        })), (0, I.rw)(e, {
                                            phone: {
                                                value: t
                                            }
                                        })
                                    })) : console.warn("invalid phone number passed into setPhone: ".concat(t))
                                },
                                setEmail: function(t) {
                                    (0, x.s₹)(t) ? (0, r.ck)((function() {
                                        e.dispatch((0, P.vK)({
                                            visitor: {
                                                email: t
                                            },
                                            identifier: "zopim api"
                                        })), (0, I.rw)(e, {
                                            email: {
                                                value: t
                                            }
                                        })
                                    })) : console.warn("invalid email passed into setEmail: ".concat(t))
                                },
                                setLanguage: function(t) {
                                    return (0, I.VK)(e, t)
                                },
                                sendVisitorPath: function(t) {
                                    return (0, I.J9)(e, t)
                                },
                                clearAll: function() {
                                    return (0, r.ck)((function() {
                                        return (0, I.XB)(e)
                                    }))
                                },
                                setStatus: function(t) {
                                    "online" !== t && "offline" !== t || e.dispatch((0, P.OL)(t))
                                },
                                setDisableGoogleAnalytics: function(t) {
                                    return Y(e, "webWidget.analytics", !t)
                                },
                                setGreetings: function(t) {
                                    return function(t, e) {
                                        var n = a()(e, "online"),
                                            r = a()(e, "offline");
                                        p()(n) && Y(t, "webWidget.launcher.chatLabel.*", n), p()(r) && Y(t, "webWidget.launcher.label.*", r)
                                    }(e, t)
                                },
                                setOnConnected: function(t) {
                                    return n.chat[C.gs](e, t)
                                },
                                setOnChatStart: function(t) {
                                    return n.chat[C.CI](e, t)
                                },
                                setOnChatEnd: function(t) {
                                    return n.chat[C.jp](e, t)
                                },
                                setOnStatus: function(t) {
                                    return function(t, e) {
                                        if (M()(e)) {
                                            var n = function() {
                                                var n = (0, T.BV)(t.getState());
                                                n && e(n)
                                            };
                                            n();
                                            var r = N()(n, 0);
                                            V.j(r, W.Ne), V.j(r, W.WL)
                                        }
                                    }(e, t)
                                },
                                setOnUnreadMsgs: function(t) {
                                    return n.chat[C.H₹](e, t)
                                },
                                bubble: {
                                    show: ₹,
                                    setTitle: ₹,
                                    setText: ₹,
                                    setImage: ₹,
                                    setColor: ₹,
                                    reset: ₹,
                                    hide: ₹
                                },
                                getName: ₹,
                                getEmail: ₹,
                                getPhone: ₹,
                                setNotes: ₹,
                                appendNotes: ₹,
                                setOnGreeting: ₹,
                                setOnFlashReady: ₹,
                                setDisableSound: ₹,
                                freeze: ₹,
                                fire: ₹
                            },
                            function(t) {
                                D.Z.addTo(t.₹zopim.livechat.theme, "₹zopim.livechat.theme"), D.Z.addTo(t.₹zopim.livechat.window, "₹zopim.livechat.window"), D.Z.addTo(t.₹zopim.livechat.button, "₹zopim.livechat.button"), D.Z.addTo(t.₹zopim.livechat.departments, "₹zopim.livechat.departments"), D.Z.addTo(t.₹zopim.livechat.concierge, "₹zopim.livechat.concierge"), D.Z.addTo(t.₹zopim.livechat.mobileNotifications, "₹zopim.livechat.mobileNotifications"), D.Z.addTo(t.₹zopim.livechat.prechatForm, "₹zopim.livechat.prechatForm"), D.Z.addTo(t.₹zopim.livechat.offlineForm, "₹zopim.livechat.offlineForm"), D.Z.addTo(t.₹zopim.livechat.cookieLaw, "₹zopim.livechat.cookieLaw"), D.Z.addTo(t.₹zopim.livechat, "₹zopim.livechat")
                            }(t)
                    }
                },
                handleChatSDKInitialized: r.sC,
                handleChatConnected: r.wl
            }
        },
        80370: function(t, e) {
            "use strict";
            var n = {},
                r = {
                    load: function(t, e) {
                        n[t], n[t] = new Audio(e)
                    },
                    play: function(t) {
                        var e;
                        null === (e = n[t]) || void 0 === e || e.play()
                    }
                };
            e.Z = r
        },
        97137: function(t, e, n) {
            "use strict";
            n(18178);
            var r = n(67165),
                o = n(94265),
                i = n(39147),
                c = n(52363);
            e.Z = {
                articleViewed: function(t, e, n) {
                    var r = (0, o.bW)();
                    i.d.send({
                        timeout: 2e3,
                        method: "post",
                        path: "/api/v2/help_center/".concat(e, "/articles/").concat(t, "/stats/view.json"),
                        useHostMappingIfAvailable: (0, c.GU)(),
                        params: {
                            last_search: {
                                query: n.query,
                                results_count: n.resultsCount,
                                origin: "web_widget"
                            },
                            unique_search_result_click: n.uniqueSearchResultClick
                        },
                        authorization: r ? "Bearer ".concat(r) : ""
                    })
                },
                ticketSubmitted: function(t, e) {
                    var n = (0, o.bW)(),
                        a = r.a.getLocale();
                    i.d.send({
                        timeout: 2e3,
                        method: "post",
                        path: "/api/v2/help_center/".concat(a.toLowerCase(), "/tickets/").concat(t, "/stats.json"),
                        useHostMappingIfAvailable: (0, c.GU)(),
                        params: {
                            last_search: {
                                query: e,
                                origin: "web_widget"
                            }
                        },
                        authorization: n ? "Bearer ".concat(n) : ""
                    })
                }
            }
        },
        35663: function(t, e, n) {
            "use strict";
            var r = (0, n(70809).PP)();
            e.Z = r
        },
        29150: function(t, e, n) {
            "use strict";
            n.d(e, {
                X: function() {
                    return z
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(62117),
                o = n.n(r),
                i = n(81620),
                c = n.n(i),
                a = n(57033),
                u = n.n(a),
                l = n(46241),
                s = n.n(l),
                f = n(84818),
                d = n.n(f),
                p = n(81805),
                h = n.n(p),
                b = n(23117),
                g = n.n(b),
                m = n(76986),
                y = n.n(m),
                v = n(68336),
                O = n.n(v),
                w = n(11796),
                E = n.n(w),
                S = n(96677),
                j = n.n(S),
                C = n(88544),
                _ = n(70570),
                k = n(88018);

            function P(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function T(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? P(Object(n), !0).forEach((function(e) {
                        A(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function A(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var I = ["answerBot.search.labels", "answerBot.title", "answerBot.avatar.name", "answerBot.avatar.url", "answerBot.suppress", "answerBot.contactOnlyAfterQuery", "authenticate", "authenticate.support", "authenticate.chat", "contactOptions.enabled", "contactOptions.contactButton", "contactOptions.chatLabelOnline", "contactOptions.chatLabelOffline", "contactOptions.contactFormLabel", "chat.concierge.avatarPath", "chat.departments.enabled", "chat.suppress", "chat.departments.select", "chat.notifications.mobile.disable", "chat.prechatForm.departmentLabel", "chat.title", "chat.connectOnPageLoad", "chat.prechatForm.greeting", "chat.offlineForm.greeting", "chat.connectionSuppress", "chat.connectOnDemand", "chat.concierge.title", "chat.concierge.name", "chat.hideWhenOffline", "chat.menuOptions.emailTranscript", "chat.tags", "color.theme", "color.button", "color.header", "color.launcher", "color.launcherText", "color.articleLinks", "color.resultLists", "contactForm.attachments", "contactForm.fields", "contactForm.selectTicketForm", "contactForm.subject", "contactForm.suppress", "contactForm.tags", "contactForm.ticketForms", "contactForm.title", "helpCenter.chatButton", "helpCenter.filter", "helpCenter.localeFallbacks", "helpCenter.messageButton", "helpCenter.originalArticleButton", "helpCenter.searchPlaceholder", "helpCenter.suppress", "helpCenter.title", "navigation", "launcher.chatLabel", "launcher.label", "launcher.talkLabel", "launcher.badge.layout", "launcher.badge.image", "launcher.badge.label", "launcher.mobile.labelVisible", "offset.horizontal", "offset.vertical", "offset.mobile.horizontal", "offset.mobile.vertical", "position.horizontal", "position.vertical", "talk.nickname", "talk.suppress", "talk.title", "zIndex"],
                L = ["helpCenter.localeFallbacks"],
                D = {
                    answerBot: {
                        avatar: {
                            url: "",
                            name: {}
                        },
                        title: {},
                        search: {
                            labels: []
                        },
                        suppress: !1
                    },
                    contactForm: {
                        fields: [],
                        ticketForms: []
                    },
                    helpCenter: {},
                    contactOptions: {
                        enabled: !1
                    },
                    chat: {
                        concierge: {
                            avatarPath: null
                        },
                        departments: {
                            enabled: null,
                            select: ""
                        },
                        suppress: !1,
                        connectionSuppress: !1,
                        notifications: {
                            mobile: {
                                disable: !1
                            }
                        },
                        tags: []
                    },
                    launcher: {},
                    margin: 8,
                    talk: {
                        suppress: !1,
                        nickname: null,
                        title: {}
                    },
                    viaId: 48,
                    viaIdAnswerBot: 67
                },
                x = {
                    errorReporting: !0,
                    analytics: !0,
                    cookies: !0
                },
                R = {},
                N = {},
                F = !1,
                M = function(t, e, n) {
                    var r = e.reduce((function(e, n) {
                        return j()(t, n) && E()(e, n, O()(t, n, null)), e
                    }), {});
                    return y()(r, n)
                };

            function B(t) {
                return L.indexOf(t) > -1 && !F ? O()(D, t, null) : O()(N, t, null)
            }
            var z = {
                init: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        dispatch: function() {}
                    };
                    (R = g()({}, x, _.p_.zESettings)).authenticate && (R.webWidget || (R.webWidget = {}), R.webWidget.authenticate = R.authenticate), N = M(R.webWidget, I, D), t.dispatch((0, C.V)({
                        webWidget: T(T({}, N), R)
                    }))
                },
                get: B,
                getTranslations: function() {
                    var t = {
                        contactFormSelectTicketForm: N.contactForm.selectTicketForm,
                        contactFormTitle: N.contactForm.title,
                        helpCenterChatButton: N.helpCenter.chatButton,
                        helpCenterMessageButton: N.helpCenter.messageButton,
                        helpCenterSearchPlaceholder: N.helpCenter.searchPlaceholder,
                        helpCenterTitle: N.helpCenter.title,
                        launcherChatLabel: N.launcher.chatLabel,
                        launcherLabel: N.launcher.label
                    };
                    return h()(t, d())
                },
                getTrackSettings: function() {
                    var t = ["margin", "viaId", "viaIdAnswerBot"],
                        e = s()(N, t),
                        n = s()(D, t),
                        r = (0, k.Nu)(e, n);
                    if (r.authenticate) {
                        var o = r.authenticate;
                        r.authenticate = {
                            helpCenter: !!o.jwt || !!O()(o, "support.jwt"),
                            chat: !(!o.chat || !o.chat.jwtFn)
                        }
                    }
                    return h()({
                        webWidget: r
                    }, u())
                },
                getAuthSettingsJwt: function() {
                    return B("authenticate.jwt") || B("authenticate.support.jwt")
                },
                getAuthSettingsJwtFn: function() {
                    var t = B("authenticate.jwtFn");
                    return c()(t) ? t : null
                },
                getChatAuthSettings: function() {
                    var t = B("authenticate.chat");
                    return t && t.jwtFn ? t : null
                },
                getErrorReportingEnabled: function() {
                    return Boolean(R.errorReporting)
                },
                enableCustomizations: function() {
                    F = !0
                },
                storeChatAuth: function(t) {
                    o()(N, {
                        authenticate: {
                            chat: {
                                jwtFn: t
                            }
                        }
                    })
                },
                storeHelpCenterAuth: function(t) {
                    o()(N, {
                        authenticate: {
                            jwtFn: t
                        }
                    })
                },
                disableCustomizations: function() {
                    F = !1
                }
            }
        },
        39147: function(t, e, n) {
            "use strict";
            n.d(e, {
                d: function() {
                    return y
                },
                s: function() {
                    return E
                }
            }), n(34769), n(34115), n(95342), n(68625), n(1939), n(62775);
            var r = n(81620),
                o = n.n(r),
                i = n(57033),
                c = n.n(i),
                a = (n(18178), n(58188), n(73439), n(26936), n(139)),
                u = n.n(a),
                l = n(29150),
                s = n(70570),
                f = n(90169);

            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        h(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function h(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var b = (0, s.Jc)(document),
                g = {},
                m = {
                    timeout: {
                        response: 5e3,
                        deadline: 6e4
                    },
                    retries: 1
                },
                y = {
                    getImage: function(t) {
                        var e = t.callbacks.done;
                        return u()("get", t.path).responseType("blob").set("Authorization", t.authorization).end((function(t, n) {
                            t || e(n)
                        }))
                    },
                    send: f.lW,
                    sendWithMeta: f.yS,
                    sendFile: function(t) {
                        if (!b) throw "Missing zendeskHost config param.";
                        return u()(t.method.toUpperCase(), (0, f.JJ)(t)).query({
                            filename: t.file.name
                        }).query({
                            via_id: l.X.get("viaId")
                        }).attach("uploaded_data", t.file).on("progress", (function(e) {
                            t.callbacks && o()(t.callbacks.progress) && t.callbacks.progress(e)
                        })).end((function(e, n) {
                            t.callbacks && (e ? o()(t.callbacks.fail) && t.callbacks.fail(e) : o()(t.callbacks.done) && t.callbacks.done(n)), e && (0, f.F4)(e, t)
                        }))
                    },
                    get: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = p(p({}, m), {}, {
                                method: "GET"
                            }, e),
                            r = (0, f.JJ)(t),
                            o = "".concat(n.method, "-").concat(r).concat(t.query ? "-".concat(JSON.stringify(t.query)) : "").concat(t.authorization ? "-".concat(JSON.stringify(t.authorization)) : "");
                        if (g[o] && !e.skipCache) return g[o];
                        var i = u()(n.method, r).timeout(n.timeout).set("Authorization", t.authorization).retry(n.retries);
                        t.responseType && i.responseType(t.responseType), c()(t.query) || i.query(t.query), t.locale && i.set("Accept-Language", t.locale);
                        var a = g[o] = new Promise((function(e, r) {
                            i.then((function(t) {
                                e(t)
                            })).catch((function(e) {
                                r(e), (0, f.F4)(e, p(p({}, n), t))
                            }))
                        }));
                        return a.catch((function() {
                            delete g[o]
                        })), a
                    },
                    callMeRequest: function(t, e) {
                        var n = "talk_embeddables_service/callback_request",
                            r = "POST";
                        u()(r, "".concat(t, "/").concat(n)).send(e.params).end((function(t, i) {
                            var c = e.callbacks,
                                a = c.done,
                                u = c.fail;
                            t ? (o()(u) && u(t, i), (0, f.F4)(t, p({
                                path: n,
                                method: r
                            }, e))) : o()(a) && a(i)
                        }))
                    },
                    updateConfig: f.rF,
                    getDynamicHostname: f.BL,
                    getConfig: f.iE,
                    resetConfig: f.Ih,
                    clearCache: function() {
                        g = {}
                    },
                    logFailure: f.F4
                },
                v = (n(77950), n(48319), n(88018)),
                O = n(863);

            function w(t, e) {
                var n = encodeURIComponent(t),
                    r = encodeURIComponent(e);
                return "subdomain=".concat(n, "&keyword=").concat(r)
            }
            var E = {
                connect: function(t, e, n) {
                    return t(e, {
                        query: w((0, v.en)(e).hostname.split(".")[0], n),
                        path: "/talk_embeddables_service/socket.io",
                        reconnectionAttempts: 6,
                        reconnectionDelay: 5e3,
                        reconnectionDelayMax: 3e4,
                        timeout: 45e3,
                        transports: ["websocket"]
                    })
                },
                mapEventsToActions: function(t, e) {
                    ! function(t, e) {
                        t.on("socket.embeddableConfig", (function(t) {
                            e.dispatch((0, O.dZ)(t))
                        })), t.on("disconnect", (function() {
                            e.dispatch((0, O.xD)())
                        }))
                    }(t, e),
                    function(t, e) {
                        t.on("socket.availability", (function(t) {
                            e.dispatch((0, O.T1)(t))
                        }))
                    }(t, e),
                    function(t, e) {
                        t.on("socket.waitTimeChange", (function(t) {
                            e.dispatch((0, O.WR)(t))
                        }))
                    }(t, e)
                }
            }
        },
        78703: function(t, e, n) {
            "use strict";
            n.d(e, {
                cV: function() {
                    return O
                },
                Dd: function() {
                    return S
                },
                YN: function() {
                    return w
                },
                YE: function() {
                    return E
                },
                nG: function() {
                    return C
                },
                Gf: function() {
                    return j
                },
                sF: function() {
                    return _
                }
            }), n(34769), n(34115), n(95342), n(68625), n(62775);
            var r = n(12643),
                o = n.n(r),
                i = n(6751),
                c = n.n(i),
                a = n(39835),
                u = n.n(a),
                l = n(56300),
                s = n.n(l),
                f = n(13171),
                d = n.n(f),
                p = (n(1939), n(58188), n(88233), n(43450), n(18178), n(77950), n(48319), n(17368), n(85940), n(67165)),
                h = n(53599),
                b = n(70570);

            function g(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function m(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? g(Object(n), !0).forEach((function(e) {
                        y(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function y(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var v = function(t) {
                return t.map((function(t) {
                    return "".concat(t.start, ",").concat(t.end)
                })).toString()
            };

            function O(t) {
                delete(t = m(m({}, t), {}, {
                    7: t[0]
                }))[0];
                var e = s()(u()(t, v));
                return c()(o()(e, (function(t, e) {
                    return {
                        periods: (a = e, a ? d()(a.split(","), 2).map((function(t) {
                            return {
                                start: parseInt(t[0], 10),
                                end: parseInt(t[1], 10)
                            }
                        })) : []),
                        days: (n = t, i = [], c = function() {
                            return o = void i.push(o ? [o, r] : r)
                        }, n.forEach((function(t) {
                            t = parseInt(t, 10), r === t - 1 ? o || (o = r) : r && c(), r = t
                        })), c(), i)
                    };
                    var n, r, o, i, c, a
                })), ["days"])
            }

            function w(t) {
                return t.indexOf("agent:") > -1 && t !== h.CR
            }

            function E(t) {
                return t.indexOf("visitor") > -1 && t !== h.CR
            }

            function S(t) {
                return new RegExp(/^Visitor [0-9]{3,}₹/).test(t)
            }

            function j(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return S(t) ? e : t
            }

            function C(t, e, n) {
                var r;
                r = "".concat("", "/web_widget/latest/liveChat.html"), r += function(t, e, n) {
                    var r = (0, b.Jc)(document),
                        o = function(t) {
                            return b.p_.btoa(encodeURIComponent(JSON.stringify(t)))
                        }(t),
                        i = encodeURI(p.a.t("embeddable_framework.popout.title"));
                    return "?v=10#key=".concat(r, "&settings=").concat(o, "&mid=").concat(e, "&locale=").concat(n, "&title=").concat(i)
                }(t, e, n), b.p_.open(r, "WebWidgetLiveChat", "height=600,width=400")
            }

            function _(t) {
                if (t) return t.replace(/,/g, "")
            }
        },
        86983: function(t, e, n) {
            "use strict";
            n.d(e, {
                EC: function() {
                    return p
                },
                iS: function() {
                    return d
                },
                k0: function() {
                    return f
                }
            }), n(18178);
            var r = n(35276),
                o = n.n(r),
                i = n(40199),
                c = n(65683);

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var l = function t(e) {
                var n = this,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a(this, t), u(this, "getBaseColor", (function() {
                    return n.baseColor.hex()
                })), u(this, "isAlmostWhite", (function(t) {
                    return n._isAlmostWhite(o()(t))
                })), u(this, "highlight", (function(t) {
                    var e = o()(t);
                    return n._highlightColor(e).hex()
                })), u(this, "alpha", (function(t, e) {
                    return o()(t).alpha(e).string()
                })), u(this, "getButtonColor", (function() {
                    return n.buttonColor.hex()
                })), u(this, "getIconColor", (function() {
                    return n.iconColor.hex()
                })), u(this, "getListColor", (function() {
                    return n.listColor.hex()
                })), u(this, "uiElementColorFrom", (function(t) {
                    var e = o()(t);
                    return n._uiElementColor(e).hex()
                })), u(this, "foregroundColorFrom", (function(t) {
                    var e = o()(t);
                    return n._foregroundColor(e).hex()
                })), u(this, "_uiElementColor", (function(t) {
                    return n._isLight(t) ? n._accentuate(t) : t
                })), u(this, "_buttonColor", (function(t) {
                    return n._isAlmostWhite(t) ? o()(c.zdColorGrey800) : t
                })), u(this, "_iconColor", (function(t) {
                    return n._isAlmostWhite(t) ? o()(c.zdColorGrey500) : t
                })), u(this, "_listColor", (function(t) {
                    return !n._isLight(t) && n._meetsAccessibilityRequirement(t, n.white) ? t : n._accentuate(t)
                })), u(this, "_foregroundColor", (function(t) {
                    return !n._isLight(t) && n._meetsAccessibilityRequirement(t, n.white) ? n.white : n._accentuate(t)
                })), u(this, "_highlightColor", (function(e) {
                    var r = t.highlightBy;
                    return n._isLight(e) ? e.darken(r.dark) : e.lighten(r.light)
                })), u(this, "_accentuate", (function(e) {
                    if (n.accents[e.hex()]) return n.accents[e.hex()];
                    for (var r = e.mix(n.neutralColor, t.mixFactor).darken(t.darkenFactor); !n._meetsAccessibilityRequirement(e, r) && r.hex() !== n.black.hex();) r = r.darken(t.darkenIncreaseBy);
                    return n.accents[e.hex()] = r, r
                })), u(this, "_meetsAccessibilityRequirement", (function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.baseColor;
                    return "AA" === t.level(e).substring(0, 2)
                })), u(this, "_isAlmostWhite", (function(e) {
                    return n._isLight(e, t.almostWhiteYIQ)
                })), u(this, "_isLight", (function(t) {
                    return !(0, i.Us)(t.hex(), "#ffffff").AA
                })), this.accents = {}, this.options = r, this.white = o()("#FFF"), this.black = o()("#000"), this.neutralColor = o()("#7C7C7C"), this.baseColor = o()(e), this.buttonColor = this._buttonColor(this.baseColor), this.iconColor = this._iconColor(this.baseColor), this.listColor = this._listColor(this.baseColor)
            };
            u(l, "highlightBy", {
                light: .1,
                dark: .15
            }), u(l, "yiqValues", {
                r: 299,
                g: 587,
                b: 114
            }), u(l, "mixFactor", .25), u(l, "darkenFactor", .5), u(l, "darkenIncreaseBy", .1), u(l, "luminosityThreshold", .15), u(l, "almostWhiteYIQ", 240), u(l, "defaultLightYIQ", 190);
            var s = n(10099);

            function f(t) {
                var e = new l((0, s.EN)(t && t.base)),
                    n = e.getBaseColor(),
                    r = t && t.text ? (0, s.Dq)(t.text) : null,
                    o = e.highlight(n),
                    i = e.getIconColor(),
                    c = (0, s.bG)(t.button, e.getButtonColor()),
                    a = e.highlight(c),
                    u = r || e.foregroundColorFrom(c),
                    f = (0, s.bG)(t.resultLists, e.getListColor()),
                    d = e.highlight(f),
                    p = (0, s.bG)(t.articleLinks, e.getListColor()),
                    h = e.uiElementColorFrom(p),
                    b = (0, s.bG)(t.header, n);
                return {
                    baseColor: n,
                    baseHighlightColor: o,
                    buttonColorStr: c,
                    buttonHighlightColorStr: a,
                    buttonTextColorStr: u,
                    listColorStr: f,
                    listHighlightColorStr: d,
                    linkColorStr: p,
                    linkTextColorStr: h,
                    headerColorStr: b,
                    headerTextColorStr: r || e.foregroundColorFrom(b),
                    headerFocusRingColorStr: e.alpha(b, .4),
                    headerBackgroundColorStr: e.highlight(b),
                    iconColor: i
                }
            }

            function d(t) {
                var e = f(t);
                return "\n    .u-userTextDecorationColor {\n      text-decoration-color: ".concat(e.baseColor, " !important;\n    }\n    .u-userColor {\n      color: ").concat(e.baseColor, " !important;\n    }\n    .u-iconColor {\n      color: ").concat(e.iconColor, " !important;\n    }\n    .rf-CheckboxGroup__checkbox:checked + span:before,\n    .u-userTextColor:not([disabled]) {\n      color: ").concat(e.listColorStr, " !important;\n      fill: ").concat(e.listColorStr, " !important;\n    }\n    .u-userTextColor:not([disabled]):hover,\n    .u-userTextColor:not([disabled]):active,\n    .u-userTextColor:not([disabled]):focus {\n      color: ").concat(e.listHighlightColorStr, " !important;\n      fill: ").concat(e.listHighlightColorStr, " !important;\n    }\n    .u-userFillColor:not([disabled]) svg {\n      fill: ").concat(e.listColorStr, " !important;\n    }\n    .u-userFillColor:not([disabled]) svg path {\n      fill: ").concat(e.listColorStr, " !important;\n    }\n    .u-userFillCustomColor svg path.customColor,\n    .u-userFillCustomColor svg rect.customColor {\n      fill: ").concat(e.listColorStr, " !important;\n    }\n    .u-userBackgroundColorNoHover {\n      background-color: ").concat(e.buttonColorStr, " !important;\n      color: ").concat(e.buttonTextColorStr, " !important;\n    }\n    .u-userBackgroundColor:not([disabled]) {\n      background-color: ").concat(e.buttonColorStr, " !important;\n      color: ").concat(e.buttonTextColorStr, " !important;\n    }\n    .u-userBackgroundColor:not([disabled]):hover,\n    .u-userBackgroundColor:not([disabled]):active,\n    .u-userBackgroundColor:not([disabled]):focus {\n      background-color: ").concat(e.buttonHighlightColorStr, " !important;\n    }\n    .u-userBorderColor:not([disabled]) {\n      color: ").concat(e.buttonColorStr, " !important;\n      background-color: transparent !important;\n      border-color: ").concat(e.buttonColorStr, " !important;\n    }\n    .u-userBorderColor:not([disabled]):hover,\n    .u-userBorderColor:not([disabled]):active,\n    .u-userBorderColor:not([disabled]):focus {\n      color: ").concat(e.buttonTextColorStr, " !important;\n      background-color: ").concat(e.buttonColorStr, " !important;\n      border-color: ").concat(e.buttonColorStr, " !important;\n    }\n    .u-userLinkColor a {\n      color: ").concat(e.linkColorStr, " !important;\n    }\n    .u-userLinkColor a span {\n      color: ").concat(e.linkColorStr, " !important;\n    }\n    .u-userLinkColor a:hover {\n      color: ").concat(e.linkTextColorStr, " !important;\n    }\n    .u-userStrokeColor {\n      stroke: ").concat(e.baseColor, " !important;\n    }\n    .u-userHeaderColor {\n      background: ").concat(e.headerColorStr, " !important;\n      color: ").concat(e.headerTextColorStr, " !important;\n    }\n    .u-userHeaderButtonColor {\n      fill: ").concat(e.headerTextColorStr, " !important;\n    }\n    .u-userHeaderButtonColor svg path {\n      fill: ").concat(e.headerTextColorStr, " !important;\n    }\n    .u-userHeaderButtonColor:hover,\n    .u-userHeaderButtonColor:active,\n    .u-userHeaderButtonColor:focus {\n      background: ").concat(e.headerBackgroundColorStr, " !important;\n    }\n    .u-userHeaderButtonColor:focus svg {\n      background: ").concat(e.headerBackgroundColorStr, " !important;\n    }\n    .u-userHeaderButtonColorMobile {\n      fill: ").concat(e.headerTextColorStr, " !important;\n    }\n  ")
            }

            function p(t) {
                var e = function(t) {
                    var e = new l((0, s.EN)(t && t.base)),
                        n = e.getBaseColor(),
                        r = (0, s.Dq)(t && t.text),
                        o = (0, s.bG)(t.base, n),
                        i = (0, s.bG)(t.launcherText, r, e.foregroundColorFrom(o));
                    return {
                        launcherColorStr: o,
                        launcherTextColorStr: i,
                        launcherFocusRingColorStr: e.alpha(i, .3),
                        launcherIsAlmostWhite: e.isAlmostWhite(o)
                    }
                }(t);
                return "\n    .u-userLauncherColor:not([disabled]) {\n      background-color: ".concat(e.launcherColorStr, " !important;\n      color: ").concat(e.launcherTextColorStr, " !important;\n      fill: ").concat(e.launcherTextColorStr, " !important;\n    }\n\n    .u-userLauncherColor:not([disabled]) svg {\n      color: ").concat(e.launcherTextColorStr, ";\n      fill: ").concat(e.launcherTextColorStr, ";\n    }\n\n    .u-userLauncherColor:not([disabled]) svg path {\n      fill: ").concat(e.launcherTextColorStr, ";\n    }\n\n  ")
            }
        },
        10099: function(t, e, n) {
            "use strict";
            n.d(e, {
                EN: function() {
                    return a
                },
                Dq: function() {
                    return u
                },
                bG: function() {
                    return l
                },
                pe: function() {
                    return d
                },
                tJ: function() {
                    return s
                }
            });
            var r = n(78053),
                o = n.n(r),
                i = (n(58188), n(88233), n(65683)).zdColorBlue600,
                c = {
                    base: i
                };

            function a() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = l(f(t), i);
                return c.base = e, e
            }

            function u() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = l(f(t));
                return c.text = e, e
            }

            function l() {
                var t = arguments,
                    e = o()(t, (function(t) {
                        return s(t)
                    }));
                return f(e)
            }

            function s(t) {
                var e = f(t);
                return function(t) {
                    return t && function(t) {
                        return t && /(^#[0-9A-F]{6}₹)|(^#[0-9A-F]{3}₹)/i.test(t)
                    }(t)
                }(e) ? e : null
            }

            function f(t) {
                try {
                    var e = t.toString();
                    return "#" === e[0] ? e : "#".concat(e)
                } catch (t) {
                    return
                }
            }

            function d() {
                return c
            }
        },
        55936: function(t, e, n) {
            "use strict";
            n.d(e, {
                D: function() {
                    return r
                },
                Y: function() {
                    return o
                }
            });
            var r = {
                    ENTER: 13,
                    SPACE: 32
                },
                o = function(t) {
                    return function(e) {
                        e.keyCode !== r.ENTER || e.shiftKey || (e.preventDefault(), t(e))
                    }
                }
        },
        94591: function(t, e, n) {
            "use strict";
            n.d(e, {
                zS: function() {
                    return b
                },
                ID: function() {
                    return p
                },
                Gb: function() {
                    return h
                },
                DL: function() {
                    return g
                }
            });
            var r, o, i, c, a, u, l = n(77693),
                s = n(70570),
                f = null,
                d = !1;

            function p(t) {
                null === f && (f = s.p_.scrollY), s.p_.scrollTo(s.p_.scrollX, t)
            }

            function h() {
                null !== f && (s.p_.scrollTo(s.p_.scrollX, f), f = null)
            }

            function b(t) {
                t ? d || (r = s.tj.body.style.position, o = s.tj.body.style.top, i = s.tj.body.style.bottom, c = s.tj.body.style.left, a = s.tj.body.style.right, u = s.tj.body.style.margin, s.tj.body.style.position = "fixed", s.tj.body.style.top = 0, s.tj.body.style.bottom = 0, s.tj.body.style.left = 0, s.tj.body.style.right = 0, s.tj.body.style.margin = 0, d = !0) : d && (s.tj.body.style.position = r, s.tj.body.style.top = o, s.tj.body.style.bottom = i, s.tj.body.style.left = c, s.tj.body.style.right = a, s.tj.body.style.margin = u, d = !1)
            }

            function g(t) {
                t ? ((0, l.PB)(!0), p(0), b(!0)) : ((0, l.PB)(!1), b(!1), h())
            }
        },
        1400: function(t, e, n) {
            "use strict";
            n(58188), n(73439), e.Z = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return new Promise((function(e) {
                    setTimeout((function() {
                        e()
                    }), t)
                }))
            }
        },
        22031: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, ".avatar-1srMe{border-radius:50%;background-color:#87929d;height:2.28571rem;width:2.28571rem}\n", ""]), e.locals = {
                avatar: "avatar-1srMe u-block u-paddingAN u-textCenter"
            }, t.exports = e
        },
        99680: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, ".mobile-2jLdd{padding:0}.container-3PFIa{display:inline-block}.container-3PFIa:hover{color:currentColor}.button-1X9bW{position:relative;cursor:pointer;margin:0;padding:0;border:none;background:transparent}.button-1X9bW:focus{outline:none}.altText-1q1Hc{position:absolute;left:-10000px;top:auto;width:.07143rem;height:.07143rem;overflow:hidden}.wrapper-UVxWw{position:relative}.flipX-2McbG>svg{transform:scaleX(-1)}\n", ""]), e.locals = {
                mobile: "mobile-2jLdd is-mobile",
                container: "container-3PFIa u-userColor",
                button: "button-1X9bW",
                altText: "altText-1q1Hc",
                wrapper: "wrapper-UVxWw",
                flipX: "flipX-2McbG"
            }, t.exports = e
        },
        49149: function(t, e, n) {
            var r = n(23645),
                o = n(8667);
            (e = r(!1)).i(o), e.push([t.id, ".container-Jg8-o{z-index:1}.button-3iR1r{position:absolute;border:none;font-size:1rem;border-radius:.35714rem;color:#fff;cursor:pointer;top:0;margin-top:.96429rem !important;margin-right:1rem !important;margin-left:1rem !important;padding:.42857rem !important;background:transparent}.button-3iR1r:disabled{background:#e9ebed}.button-3iR1r.is-mobile-ks6xs{padding:1rem}.button-3iR1r:focus{outline:none;box-shadow:0 0 0 .21429rem rgba(255,255,255,0.4)}.left-2ktz1{padding-left:1.78571rem}.leftRtl-qHKFq{}.desktop-3KhEI{}.fullscreen-3AGFv{font-size:1.07143rem;margin-top:0 !important;margin-right:.14286rem !important;margin-left:.14286rem !important;padding:1.14286rem !important}.right-3fyol{padding-right:1.78571rem}[dir='rtl'] .right-3fyol{padding-right:0;padding-left:1.78571rem}.rightRtl-2Ez5I{}.rtl-dQLHR{transform:scaleX(-1)}\n", ""]), e.locals = {
                container: "container-Jg8-o u-posRelative",
                button: "button-3iR1r",
                "is-mobile": "is-mobile-ks6xs",
                left: "left-2ktz1 u-posStart--flush",
                leftRtl: "leftRtl-qHKFq u-posEnd--flush",
                desktop: "desktop-3KhEI u-userHeaderButtonColor " + o.locals.AnimColorEaseInOut,
                fullscreen: "fullscreen-3AGFv u-isActionable u-userHeaderButtonColorMobile",
                right: "right-3fyol u-posEnd--flush",
                rightRtl: "rightRtl-2Ez5I u-posStart--flush",
                rtl: "rtl-dQLHR"
            }, t.exports = e
        },
        405: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, ".container-1-ZOL{border-radius:.57143rem;height:14.28571rem;width:17.5rem;box-shadow:0 0 .42857rem 0 rgba(0,0,0,0.2);margin-right:.42857rem;margin-top:.42857rem}.containerForWidget-2jSmS{margin:0;position:fixed;bottom:5px;left:50%;top:50%;transform:translateX(-50%) translateY(-50%)}.textContainer-33aq2{vertical-align:middle;word-wrap:break-word;overflow:hidden !important;text-overflow:ellipsis;font-size:1.14286rem;font-family:Verdana, Geneva, sans-serif;padding:.71429rem 0}.textOnLeft-3Yi2D{padding-right:.21429rem;padding-left:.71429rem}.textOnRight-2xcGt{padding-left:.28571rem;padding-right:.42857rem}.textOnly-f_fzj{font-size:1.42857rem !important;text-align:center !important}.imageContainer-1MRiB{vertical-align:middle;text-align:center;width:7.14286rem}.splashDisplayContainer-22i6A{background-color:#49545c;border-radius:.57143rem .57143rem 0 0;border:0;padding:0;overflow:hidden;position:relative;height:11.42857rem}.splashPadding-HegMF{padding:1.42857rem .71429rem .71429rem}.splashTable-168XT{width:100%;height:100%;table-layout:fixed;direction:ltr;margin-top:8px}.title-1G91k{z-index:1;position:absolute;top:.21429rem;height:1.42857rem !important;width:80%;text-align:center;padding-top:.64286rem !important;font-family:Verdana, Geneva, sans-serif;font-size:.71429rem !important;line-height:1em}.chatIcon-3zWxB{width:5.35714rem;height:3.85714rem}.chatIcon-3zWxB svg path[class='cls-1']{fill:#fff}.inputContainer-3UJOk{height:2.85714rem;border-bottom-left-radius:.57143rem;border-bottom-right-radius:.57143rem;display:flex}.inputContainer-3UJOk>div:first-child{height:2.85714rem;flex:1}.input-3kko7{color:#49545c;display:inline-block;vertical-align:top;padding:0 .57143rem;letter-spacing:-0.01071rem;font-family:Verdana, Geneva, sans-serif;border-radius:0;min-height:2.85714rem}.input-3kko7:not(:focus){border:none}.input-3kko7:-ms-input-placeholder{color:#87929d}.input-3kko7::placeholder{color:#87929d}[dir='ltr'] .input-3kko7{border-bottom-left-radius:.57143rem}[dir='rtl'] .input-3kko7{border-bottom-right-radius:.57143rem}.sendButton-1Dqkv{background-color:#fff;display:inline-flex;justify-content:center;align-items:center;height:2.85714rem;width:2.85714rem;border-top-left-radius:0;border-top-right-radius:0}[dir='ltr'] .sendButton-1Dqkv{border-bottom-right-radius:.57143rem;border-bottom-left-radius:0}[dir='rtl'] .sendButton-1Dqkv{border-bottom-left-radius:.57143rem;border-bottom-right-radius:0}[dir='rtl'] .sendButton-1Dqkv svg{transform:scale(-1)}.sendButton-1Dqkv svg{fill:#c2c8cc !important}.sendButton-1Dqkv svg path{fill:#c2c8cc !important}.sendButtonActive-2YYTD svg{fill:#68737d !important}.sendButtonActive-2YYTD svg path{fill:#68737d !important}.minimizeButton-31FRu{position:absolute;top:.71429rem;height:1.42857rem;width:1.5rem}[dir='ltr'] .minimizeButton-31FRu{right:.42857rem}[dir='rtl'] .minimizeButton-31FRu{left:.42857rem}.customImg-17c3D{max-height:7.14286rem;max-width:7.14286rem}.customImgOnly-SSXCp{width:17.5rem;border-top-left-radius:.57143rem;border-top-right-radius:.57143rem}.imgOnly-10Jfr{padding-left:.57143rem;margin-top:1.71429rem}.imgRight-35TUF{margin-left:.35714rem}.imgLeft-2BeQ0{margin-right:.35714rem}\n", ""]), e.locals = {
                container: "container-1-ZOL",
                containerForWidget: "containerForWidget-2jSmS",
                textContainer: "textContainer-33aq2 u-userLauncherColor",
                textOnLeft: "textOnLeft-3Yi2D",
                textOnRight: "textOnRight-2xcGt",
                textOnly: "textOnly-f_fzj",
                imageContainer: "imageContainer-1MRiB",
                splashDisplayContainer: "splashDisplayContainer-22i6A u-userLauncherColor",
                splashPadding: "splashPadding-HegMF",
                splashTable: "splashTable-168XT",
                title: "title-1G91k",
                chatIcon: "chatIcon-3zWxB",
                inputContainer: "inputContainer-3UJOk",
                input: "input-3kko7",
                sendButton: "sendButton-1Dqkv sendButtonColor",
                sendButtonActive: "sendButtonActive-2YYTD",
                minimizeButton: "minimizeButton-31FRu u-userLauncherColor",
                customImg: "customImg-17c3D",
                customImgOnly: "customImgOnly-SSXCp",
                imgOnly: "imgOnly-10Jfr",
                imgRight: "imgRight-35TUF",
                imgLeft: "imgLeft-2BeQ0"
            }, t.exports = e
        },
        18897: function(t, e, n) {
            var r = n(23645),
                o = n(44999);
            (e = r(!1)).i(o), e.push([t.id, ".wrapper-AtBcr{color:#fff;fill:#fff;padding:.92857rem 1.57143rem;border-radius:999rem;bottom:0;letter-spacing:0.6;font-size:1.07143rem}.wrapper-AtBcr:focus{outline:none;box-shadow:inset 0 0 0 .21429rem rgba(255,255,255,0.4)}.wrapperMobile-1Ets2{padding:1rem}.icon-3E9qF{padding-right:.57143rem}[dir='rtl'] .icon-3E9qF{padding-left:.57143rem;padding-right:0}.iconMobile-1KJit{}.label-3kk12{}.labelMobile-1CefB{}\n", ""]), e.locals = {
                wrapper: "wrapper-AtBcr u-isActionable u-textLeft u-inlineBlock u-borderNone u-textBold u-textNoWrap Arrange Arrange--middle u-userLauncherColor",
                wrapperMobile: "wrapperMobile-1Ets2",
                icon: "icon-3E9qF " + o.locals.Icon + " Arrange-sizeFit u-textInheritColor u-inlineBlock",
                iconMobile: "iconMobile-1KJit u-paddingHN",
                label: "label-3kk12 Arrange-sizeFit u-textInheritColor u-inlineBlock",
                labelMobile: "labelMobile-1CefB u-isHidden"
            }, t.exports = e
        },
        47871: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, ".circle-39UEa{animation:stroke-8xq0y 3s linear infinite, dash-2Hz-8 3s linear infinite;fill:none;stroke:#03363d;stroke-dasharray:333;stroke-width:.28571rem}.spinner-1HFKJ{width:2.28571rem;height:2.28571rem;animation:spin-10c6M 0.8s linear infinite}@keyframes spin-10c6M{100%{transform:rotate(360deg)}}@keyframes stroke-8xq0y{0%{stroke-dashoffset:0}100%{stroke-dashoffset:888}}@keyframes dash-2Hz-8{0%{stroke-dasharray:444}100%{stroke-dasharray:444}}\n", ""]), e.locals = {
                circle: "circle-39UEa",
                stroke: "stroke-8xq0y",
                dash: "dash-2Hz-8",
                spinner: "spinner-1HFKJ",
                spin: "spin-10c6M"
            }, t.exports = e
        },
        8667: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, ".Anim-color-pMZbF{transition:background-color 0.5s ease}.AnimColorEaseInOut-2I2Qy{transition:background-color 0.25s ease-in-out}\n", ""]), e.locals = {
                "Anim-color": "Anim-color-pMZbF",
                AnimColorEaseInOut: "AnimColorEaseInOut-2I2Qy"
            }, t.exports = e
        },
        44999: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, ".Icon-2SEmO{padding-right:.85714rem}[dir='rtl'] .Icon-2SEmO{padding-right:0;padding-left:.85714rem}.Icon-2SEmO svg{min-width:1.42857rem;min-height:1.42857rem;height:1.42857rem;width:1.42857rem}.Icon--search-2BN7b svg{fill:#c2c8cc;min-width:1rem;min-height:1rem;height:1rem;width:1rem}.Icon--zendesk-1wqe8{margin-left:1.5rem;margin-right:1.5rem}.Icon--zendesk-1wqe8 svg{min-width:3.57143rem;min-height:1.85714rem;width:3.57143rem;height:1.85714rem}.Icon--zendesk-1wqe8 svg:hover path,.Icon--zendesk-1wqe8 svg:active path,.Icon--zendesk-1wqe8 svg:focus path{fill:#68737d}.Icon--zendesk-1wqe8 svg path{fill:#87929d}.Icon--close-2OxCY{padding:0;color:#68737d}.Icon--close-2OxCY.is-mobile-1RnQX{display:block;margin-top:.14286rem}.Icon--close-2OxCY svg{fill:#68737d;min-width:.71429rem;min-height:.71429rem;height:.71429rem;width:.71429rem}.Icon--dash-22Qt3{display:block;padding-bottom:.35714rem !important;padding-top:.35714rem !important}.Icon--dash-22Qt3.is-mobile-1RnQX{display:block;margin-top:.14286rem}.Icon--dash-22Qt3 svg{min-width:.85714rem;min-height:.14286rem;height:.14286rem;width:.85714rem}.Icon--check-Q-B66 svg{fill:#87929d;margin-left:.14286rem;margin-top:.14286rem;min-width:.71429rem;min-height:.71429rem;height:.71429rem;width:.71429rem}[dir='rtl'] .Icon--check-Q-B66{padding-left:0;padding-right:.14286rem}.Icon--avatar-3O2hn{box-sizing:border-box}.Icon--avatar-3O2hn svg{fill:#fff;color:#fff;width:1.21429rem;padding:.42857rem 0 0;display:inline-block;position:relative}.Icon--ellipsis-220iV{padding-right:0}.Icon--ellipsis-220iV svg{padding:.35714rem;border-radius:.28571rem;min-width:1rem;min-height:1rem;width:1rem;height:1rem}.Icon--preview-3N7Qv{padding-right:.57143rem;margin-top:.28571rem}[dir='rtl'] .Icon--preview-3N7Qv{padding-left:.57143rem;padding-right:0}.Icon--preview-3N7Qv svg{min-width:1.71429rem;min-height:1.71429rem;height:1.71429rem;width:1.71429rem}.Icon--preview-close-3OZqI{position:absolute;top:50%;right:.35714rem;margin-top:-1.28571rem !important}.Icon--preview-close-3OZqI svg{fill:#87929d;min-width:.5rem;min-height:.5rem;height:.5rem;width:.5rem}.Icon--preview-default-WEOaB path{fill:#03363d}.Icon--preview-pdf-QiuWb path{fill:#ec4d63}.Icon--preview-presentation-30FzT path{fill:#ffb648}.Icon--preview-spreadsheet-1JXEo path{fill:#00a656}.Icon--preview-document-3bimD path{fill:#3091ec}.Icon--preview-image-2l_dE path{fill:#02a191}.Icon--preview-zip-1kcdM path{fill:#03363d}.Icon--preview-error-3Pro9 path{fill:#d8dcde}.Icon--error-fill-3KE5L path{fill:#d93f4c}.Icon--checkmark-fill-1hJqY path{fill:#228f67}.Icon--checkmark-fill-1hJqY svg{min-width:1.07143rem;min-height:1.07143rem;height:1.07143rem;width:1.07143rem}.Icon--remove-1HWzz path{fill:#87929d}.Icon--trash-fill-3VNs_ svg{min-width:1.07143rem;min-height:1.07143rem;max-height:1.07143rem;max-width:1.07143rem;height:1.07143rem;width:1.07143rem}.Icon--success-contactForm-2fNl8 svg{min-width:11.42857rem;width:11.42857rem;height:5.71429rem}.Icon--clock-stroke-bGqp3 svg{color:#68737d;min-width:1.07143rem;min-height:1.07143rem;height:1.07143rem;width:1.07143rem}.Icon--clock-stroke-bGqp3 svg path{fill:#c2c8cc}.Icon--agent-avatar-4Ix95 svg rect{fill:#87929d}\n", ""]), e.locals = {
                Icon: "Icon-2SEmO",
                "Icon--search": "Icon--search-2BN7b",
                "Icon--zendesk": "Icon--zendesk-1wqe8",
                "Icon--close": "Icon--close-2OxCY",
                "is-mobile": "is-mobile-1RnQX",
                "Icon--dash": "Icon--dash-22Qt3",
                "Icon--check": "Icon--check-Q-B66",
                "Icon--avatar": "Icon--avatar-3O2hn",
                "Icon--ellipsis": "Icon--ellipsis-220iV",
                "Icon--preview": "Icon--preview-3N7Qv",
                "Icon--preview-close": "Icon--preview-close-3OZqI",
                "Icon--preview-default": "Icon--preview-default-WEOaB",
                "Icon--preview-pdf": "Icon--preview-pdf-QiuWb",
                "Icon--preview-presentation": "Icon--preview-presentation-30FzT",
                "Icon--preview-spreadsheet": "Icon--preview-spreadsheet-1JXEo",
                "Icon--preview-document": "Icon--preview-document-3bimD",
                "Icon--preview-image": "Icon--preview-image-2l_dE",
                "Icon--preview-zip": "Icon--preview-zip-1kcdM",
                "Icon--preview-error": "Icon--preview-error-3Pro9",
                "Icon--error-fill": "Icon--error-fill-3KE5L",
                "Icon--checkmark-fill": "Icon--checkmark-fill-1hJqY",
                "Icon--remove": "Icon--remove-1HWzz",
                "Icon--trash-fill": "Icon--trash-fill-3VNs_",
                "Icon--success-contactForm": "Icon--success-contactForm-2fNl8",
                "Icon--clock-stroke": "Icon--clock-stroke-bGqp3",
                "Icon--agent-avatar": "Icon--agent-avatar-4Ix95"
            }, t.exports = e
        },
        80912: function(t, e, n) {
            (e = n(23645)(!1)).push([t.id, "{/*!\n * Copyright Zendesk, Inc.\n *\n * Use of this source code is governed under the Apache License, Version 2.0\n * found at http://www.apache.org/licenses/LICENSE-2.0.\n *//*! normalize.css v3.0.1 | MIT License | git.io/normalize *//*! suit-base v0.4.0 | MIT License | github.com/suitcss *//*! suit-utils-link v0.3.1 | MIT License | github.com/suitcss *//*! suit-arrange v0.3.0 | MIT License | github.com/suitcss *//*! suit-button v3.1.0 | MIT License | github.com/suitcss *//*! suit-button-group v2.1.0 | MIT License | github.com/suitcss *//*! normalize.css v3.0.1 | MIT License | git.io/normalize *//*! suit-base v0.4.0 | MIT License | github.com/suitcss *//*! suit-utils-link v0.3.1 | MIT License | github.com/suitcss *//*! suit-arrange v0.3.0 | MIT License | github.com/suitcss *//*! suit-button v3.1.0 | MIT License | github.com/suitcss *//*! suit-button-group v2.1.0 | MIT License | github.com/suitcss */}.Icon{padding-right:.85714rem}[dir='rtl'] .Icon{padding-right:0;padding-left:.85714rem}.Icon svg{min-width:1.42857rem;min-height:1.42857rem;height:1.42857rem;width:1.42857rem}.Icon--search svg{fill:#c2c8cc;min-width:1rem;min-height:1rem;height:1rem;width:1rem}.Icon--zendesk{margin-left:1.5rem;margin-right:1.5rem}.Icon--zendesk svg{min-width:3.57143rem;min-height:1.85714rem;width:3.57143rem;height:1.85714rem}.Icon--zendesk svg:hover path,.Icon--zendesk svg:active path,.Icon--zendesk svg:focus path{fill:#68737d}.Icon--zendesk svg path{fill:#87929d}.Icon--close{padding:0;color:#68737d}.Icon--close.is-mobile{display:block;margin-top:.14286rem}.Icon--close svg{fill:#68737d;min-width:.71429rem;min-height:.71429rem;height:.71429rem;width:.71429rem}.Icon--dash{display:block;padding-bottom:.35714rem !important;padding-top:.35714rem !important}.Icon--dash.is-mobile{display:block;margin-top:.14286rem}.Icon--dash svg{min-width:.85714rem;min-height:.14286rem;height:.14286rem;width:.85714rem}.Icon--check svg{fill:#87929d;margin-left:.14286rem;margin-top:.14286rem;min-width:.71429rem;min-height:.71429rem;height:.71429rem;width:.71429rem}[dir='rtl'] .Icon--check{padding-left:0;padding-right:.14286rem}.Icon--avatar{box-sizing:border-box}.Icon--avatar svg{fill:#fff;color:#fff;width:1.21429rem;padding:.42857rem 0 0;display:inline-block;position:relative}.Icon--ellipsis{padding-right:0}.Icon--ellipsis svg{padding:.35714rem;border-radius:.28571rem;min-width:1rem;min-height:1rem;width:1rem;height:1rem}.Icon--preview{padding-right:.57143rem;margin-top:.28571rem}[dir='rtl'] .Icon--preview{padding-left:.57143rem;padding-right:0}.Icon--preview svg{min-width:1.71429rem;min-height:1.71429rem;height:1.71429rem;width:1.71429rem}.Icon--preview-close{position:absolute;top:50%;right:.35714rem;margin-top:-1.28571rem !important}.Icon--preview-close svg{fill:#87929d;min-width:.5rem;min-height:.5rem;height:.5rem;width:.5rem}.Icon--preview-default path{fill:#03363d}.Icon--preview-pdf path{fill:#ec4d63}.Icon--preview-presentation path{fill:#ffb648}.Icon--preview-spreadsheet path{fill:#00a656}.Icon--preview-document path{fill:#3091ec}.Icon--preview-image path{fill:#02a191}.Icon--preview-zip path{fill:#03363d}.Icon--preview-error path{fill:#d8dcde}.Icon--error-fill path{fill:#d93f4c}.Icon--checkmark-fill path{fill:#228f67}.Icon--checkmark-fill svg{min-width:1.07143rem;min-height:1.07143rem;height:1.07143rem;width:1.07143rem}.Icon--remove path{fill:#87929d}.Icon--trash-fill svg{min-width:1.07143rem;min-height:1.07143rem;max-height:1.07143rem;max-width:1.07143rem;height:1.07143rem;width:1.07143rem}.Icon--success-contactForm svg{min-width:11.42857rem;width:11.42857rem;height:5.71429rem}.Icon--clock-stroke svg{color:#68737d;min-width:1.07143rem;min-height:1.07143rem;height:1.07143rem;width:1.07143rem}.Icon--clock-stroke svg path{fill:#c2c8cc}.Icon--agent-avatar svg rect{fill:#87929d}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}html{background-color:#fff;min-height:100%;box-sizing:border-box;overflow-y:scroll;line-height:20px;color:#2f3941;font-feature-settings:\"kern\", \"kern\";-webkit-font-kerning:normal;font-kerning:normal;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,Arial,sans-serif;font-size:14px}*{font-weight:inherit}*,:after,:before{box-sizing:inherit}a{color:#1f73b7}a,ins,u{text-decoration:none}a:focus,a:hover{text-decoration:underline;color:#1f73b7}a:focus{outline:none}b{font-weight:600}button{cursor:pointer;padding:0}button,input,optgroup,select,textarea{line-height:inherit;font-family:inherit}code{font-size:.95em}code,kbd,pre,samp{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace}em{font-style:inherit}fieldset,iframe{border:0}h1,h2,h3,h4,h5,h6{font-size:inherit}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,ul{margin:0;padding:0}hr{border:none;border-top:1px solid}ol,ul{list-style:none}img{max-width:100%}strong{font-weight:inherit}svg{max-height:100%}[tabindex=\"-1\"]:focus{outline:none !important}html{color:#2f3941;overflow:hidden}h1,h2,h3,h4,h5,h6{margin-top:0}a{color:#78a300;text-decoration:none}p{margin-bottom:1.07143rem}a:hover,a:focus,a:active{color:#78a300;text-decoration:underline}fieldset{border:0;margin:0;padding:0}iframe{border:0}[tabindex='-1']:focus{outline:none !important}input[type='search']{box-sizing:border-box;border-radius:0;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}select{-webkit-appearance:none;appearance:none}select::-ms-expand{display:none}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{height:auto}input[type='search']{-webkit-appearance:textfield;box-sizing:content-box}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{background:inherit;color:inherit;line-height:normal}a{color:#069;text-decoration:none}a:hover,a:focus,a:active{color:#069;text-decoration:underline}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,figure,p,pre{margin:0}fieldset{border:0;margin:0;padding:0}iframe{border:0}ol,ul{margin:0;list-style:none;padding:0}[tabindex='-1']:focus{outline:none !important}.u-alignMiddle{vertical-align:middle !important}.u-alignTop{vertical-align:top !important}.u-inlineBlock{display:inline-block !important;max-width:100%}.u-block{display:block !important}.u-cf:before,.u-cf:after{content:' ';display:table}.u-cf:after{clear:both}.u-nbfc{overflow:hidden !important}.u-pullLeft{float:left !important}.u-pullRight{float:right !important}.u-linkClean,.u-linkClean:hover,.u-linkClean:focus,.u-linkClean:active{text-decoration:none !important}.u-posAbsolute{position:absolute !important}.u-posRelative{position:relative !important}.u-sizeFull{box-sizing:border-box !important;display:block !important;width:100% !important}.u-isActionable{cursor:pointer !important}.u-isHidden{display:none !important;visibility:hidden !important}.u-isHiddenVisually{position:absolute !important;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important}.u-textCenter{text-align:center !important}.u-textLeft{text-align:left !important}.u-textInheritColor{color:inherit !important}.u-textNoWrap{white-space:nowrap !important}.u-textTruncate{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.Arrange{box-sizing:border-box;display:table;margin:0;min-width:100%;padding:0;table-layout:auto}.Arrange-sizeFill,.Arrange-sizeFit{display:table-cell;padding:0;vertical-align:top}.Arrange-sizeFill{width:100%}.Arrange-sizeFill img{height:auto;max-width:100%}.Arrange-sizeFit img{max-width:none !important;width:auto !important}.Arrange--middle .Arrange-sizeFill,.Arrange--middle .Arrange-sizeFit{vertical-align:middle}.Arrange--bottom .Arrange-sizeFill,.Arrange--bottom .Arrange-sizeFit{vertical-align:bottom}.Button{-webkit-appearance:none;background:transparent;border-color:currentcolor;border-style:solid;border-width:1px;box-sizing:border-box;color:inherit;cursor:pointer;display:inline-block;font:inherit;line-height:normal;margin:0;padding:0.4em 0.75em;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.Button::-moz-focus-inner{border:0;padding:0}.Button:hover,.Button:focus,.Button:active{text-decoration:none}.Button:disabled,.Button.is-disabled{cursor:default;opacity:0.6;-ms-filter:'alpha(opacity=60)'}.u-hiddenButton{border:none;text-align:initial;width:100%;background:none}.u-hiddenButtonFlexibleWidth{border:none;text-align:initial;background:none}.ButtonGroup{display:block;font-size:0;margin:0;list-style:none;padding:0}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}h1{font-size:2em;margin:0.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace, monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{height:auto}input[type='search']{-webkit-appearance:textfield;box-sizing:content-box}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:bold}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}html{background:inherit;color:inherit;line-height:normal}a{color:#069;text-decoration:none}a:hover,a:focus,a:active{color:#069;text-decoration:underline}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,figure,p,pre{margin:0}fieldset{border:0;margin:0;padding:0}iframe{border:0}ol,ul{margin:0;list-style:none;padding:0}[tabindex='-1']:focus{outline:none !important}.u-alignMiddle{vertical-align:middle !important}.u-alignTop{vertical-align:top !important}.u-inlineBlock{display:inline-block !important;max-width:100%}.u-block{display:block !important}.u-cf:before,.u-cf:after{content:' ';display:table}.u-cf:after{clear:both}.u-nbfc{overflow:hidden !important}.u-pullLeft{float:left !important}.u-pullRight{float:right !important}.u-linkClean,.u-linkClean:hover,.u-linkClean:focus,.u-linkClean:active{text-decoration:none !important}.u-posAbsolute{position:absolute !important}.u-posRelative{position:relative !important}.u-sizeFull{box-sizing:border-box !important;display:block !important;width:100% !important}.u-isActionable{cursor:pointer !important}.u-isHidden{display:none !important;visibility:hidden !important}.u-isHiddenVisually{position:absolute !important;overflow:hidden !important;width:1px !important;height:1px !important;padding:0 !important;border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important}.u-textCenter{text-align:center !important}.u-textLeft{text-align:left !important}.u-textInheritColor{color:inherit !important}.u-textNoWrap{white-space:nowrap !important}.u-textTruncate{max-width:100%;overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important;word-wrap:normal !important}.Arrange{box-sizing:border-box;display:table;margin:0;min-width:100%;padding:0;table-layout:auto}.Arrange-sizeFill,.Arrange-sizeFit{display:table-cell;padding:0;vertical-align:top}.Arrange-sizeFill{width:100%}.Arrange-sizeFill img{height:auto;max-width:100%}.Arrange-sizeFit img{max-width:none !important;width:auto !important}.Arrange--middle .Arrange-sizeFill,.Arrange--middle .Arrange-sizeFit{vertical-align:middle}.Arrange--bottom .Arrange-sizeFill,.Arrange--bottom .Arrange-sizeFit{vertical-align:bottom}.Button{-webkit-appearance:none;background:transparent;border-color:currentcolor;border-style:solid;border-width:1px;box-sizing:border-box;color:inherit;cursor:pointer;display:inline-block;font:inherit;line-height:normal;margin:0;padding:0.4em 0.75em;position:relative;text-align:center;text-decoration:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.Button::-moz-focus-inner{border:0;padding:0}.Button:hover,.Button:focus,.Button:active{text-decoration:none}.Button:disabled,.Button.is-disabled{cursor:default;opacity:0.6;-ms-filter:'alpha(opacity=60)'}.u-hiddenButton{border:none;text-align:initial;width:100%;background:none}.u-hiddenButtonFlexibleWidth{border:none;text-align:initial;background:none}.ButtonGroup{display:block;font-size:0;margin:0;list-style:none;padding:0}.u-posEnd--flush{right:0}.u-posStart--flush{left:0}.u-posStart--vert{top:1.14286rem}.u-posFill{top:0;bottom:0;left:0;right:0}.u-marginBN{margin-bottom:0 !important}.u-marginBS{margin-bottom:.71429rem !important}.u-marginBM{margin-bottom:1.07143rem !important}.u-marginBL{margin-bottom:1.42857rem !important}.u-marginTT{margin-top:.35714rem !important}.u-marginTM{margin-top:1.07143rem !important}.u-marginTL{margin-top:1.42857rem !important}.u-marginTN{margin-top:0 !important}.u-marginVS{margin-top:.71429rem !important;margin-bottom:.71429rem !important}.u-marginHS{margin-left:.71429rem !important;margin-right:.71429rem !important}.u-paddingAN{padding:0 !important}.u-paddingAL{padding:1.42857rem !important}.u-paddingHN{padding-left:0 !important;padding-right:0 !important}.u-paddingHL{padding-left:1.42857rem !important;padding-right:1.42857rem !important}.u-paddingVL{padding-top:1.42857rem !important;padding-bottom:1.42857rem !important}.u-paddingLN{padding-left:0 !important}.u-paddingTT{padding-top:.35714rem !important}.u-paddingTM{padding-top:1.07143rem !important}.u-paddingTN{padding-top:0 !important}.u-paddingBT{padding-bottom:.35714rem !important}.u-textBold{font-weight:700}.u-textHeightMed{line-height:1.28571rem}.u-textHeightLrg{line-height:1.42857rem}.u-wordBreakAll{word-break:break-all;word-break:break-word}.u-borderTransparent{border:.07143rem solid transparent !important}.u-borderNone{border:none !important}.u-borderBottom{border-bottom:.07857rem solid #e9ebed}.u-hsizeAll{width:100% !important}.u-flex{display:flex !important}.u-flexJustifyCenter{justify-content:center !important}.u-flexAlignItemsCenter{align-items:center !important}@media print{.u-noPrint{display:none !important}}.structuredMessageSlider .slick-list,.structuredMessageSlider .slick-slider,.structuredMessageSlider .slick-track{position:relative;display:block}.structuredMessageSlider .slick-loading .slick-slide,.structuredMessageSlider .slick-loading .slick-track{visibility:hidden}.structuredMessageSlider .slick-slider{box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.structuredMessageSlider .slick-list{overflow:hidden;margin:0;padding:0}.structuredMessageSlider .slick-list:focus{outline:0}.structuredMessageSlider .slick-list.dragging{cursor:pointer;cursor:hand}.structuredMessageSlider .slick-slider .slick-list,.structuredMessageSlider .slick-slider .slick-track{transform:translate3d(0, 0, 0)}.structuredMessageSlider .slick-track{top:0;left:0}.structuredMessageSlider .slick-track:after,.structuredMessageSlider .slick-track:before{display:table;content:''}.structuredMessageSlider .slick-track:after{clear:both}.structuredMessageSlider .slick-slide{display:none;float:left;height:100%;min-height:1px}.structuredMessageSlider [dir='rtl'] .slick-slide{float:right}.structuredMessageSlider .slick-slide img{display:block}.structuredMessageSlider .slick-slide.slick-loading img{display:none}.structuredMessageSlider .slick-slide.dragging img{pointer-events:none}.structuredMessageSlider .slick-initialized .slick-slide{display:block}.structuredMessageSlider .slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.structuredMessageSlider .slick-arrow.slick-hidden{display:none}\n", ""]), t.exports = e
        }
    }
]);