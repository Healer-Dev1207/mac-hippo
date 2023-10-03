(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        54440: function(e, t) {
            var n;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var o = {}.hasOwnProperty;

                function r() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var i = typeof n;
                            if ("string" === i || "number" === i) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var l = r.apply(null, n);
                                    l && e.push(l)
                                }
                            } else if ("object" === i) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    e.push(n.toString());
                                    continue
                                }
                                for (var s in n) o.call(n, s) && n[s] && e.push(s)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 !== (n = (function() {
                    return r
                }).apply(t, [])) && (e.exports = n)
            }()
        },
        80048: function(e, t, n) {
            Promise.resolve().then(n.t.bind(n, 83015, 23)), Promise.resolve().then(n.bind(n, 89372)), Promise.resolve().then(n.bind(n, 25011)), Promise.resolve().then(n.t.bind(n, 44447, 23)), Promise.resolve().then(n.t.bind(n, 6328, 23)), Promise.resolve().then(n.t.bind(n, 23303, 23))
        },
        23043: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(57437);

            function r(e) {
                return (0, o.jsx)("a", {
                    href: e.href,
                    target: "_blank",
                    className: "el-button",
                    children: e.children
                })
            }
            n(378)
        },
        89372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var o = n(57437);
            n(51833), n(3310);
            var r = n(61396),
                i = n.n(r);
            n(23043);
            var l = n(2265),
                s = n(54440),
                a = n.n(s),
                c = !1;
            if ("undefined" != typeof window) {
                var u = {
                    get passive() {
                        c = !0;
                        return
                    }
                };
                window.addEventListener("testPassive", null, u), window.removeEventListener("testPassive", null, u)
            }
            var d = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
                f = [],
                v = !1,
                m = -1,
                h = void 0,
                p = void 0,
                y = void 0,
                w = function(e) {
                    return f.some(function(t) {
                        return !!(t.options.allowTouchMove && t.options.allowTouchMove(e))
                    })
                },
                g = function(e) {
                    var t = e || window.event;
                    return !!w(t.target) || t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1)
                },
                b = function(e) {
                    if (void 0 === y) {
                        var t = !!e && !0 === e.reserveScrollBarGap,
                            n = window.innerWidth - document.documentElement.clientWidth;
                        if (t && n > 0) {
                            var o = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
                            y = document.body.style.paddingRight, document.body.style.paddingRight = o + n + "px"
                        }
                    }
                    void 0 === h && (h = document.body.style.overflow, document.body.style.overflow = "hidden")
                },
                _ = function() {
                    void 0 !== y && (document.body.style.paddingRight = y, y = void 0), void 0 !== h && (document.body.style.overflow = h, h = void 0)
                },
                x = function() {
                    if (void 0 !== p) {
                        var e = -parseInt(document.body.style.top, 10),
                            t = -parseInt(document.body.style.left, 10);
                        document.body.style.position = p.position, document.body.style.top = p.top, document.body.style.left = p.left, window.scrollTo(t, e), p = void 0
                    }
                },
                k = function(e, t) {
                    var n = e.targetTouches[0].clientY - m;
                    return !w(e.target) && (t && 0 === t.scrollTop && n > 0 ? g(e) : t && t.scrollHeight - t.scrollTop <= t.clientHeight && n < 0 ? g(e) : (e.stopPropagation(), !0))
                },
                j = function(e, t) {
                    if (!e) {
                        console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                        return
                    }!f.some(function(t) {
                        return t.targetElement === e
                    }) && (f = [].concat(function(e) {
                        if (!Array.isArray(e)) return Array.from(e);
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }(f), [{
                        targetElement: e,
                        options: t || {}
                    }]), d ? window.requestAnimationFrame(function() {
                        if (void 0 === p) {
                            p = {
                                position: document.body.style.position,
                                top: document.body.style.top,
                                left: document.body.style.left
                            };
                            var e = window,
                                t = e.scrollY,
                                n = e.scrollX,
                                o = e.innerHeight;
                            document.body.style.position = "fixed", document.body.style.top = -t, document.body.style.left = -n, setTimeout(function() {
                                return window.requestAnimationFrame(function() {
                                    var e = o - window.innerHeight;
                                    e && t >= o && (document.body.style.top = -(t + e))
                                })
                            }, 300)
                        }
                    }) : b(t), d && (e.ontouchstart = function(e) {
                        1 === e.targetTouches.length && (m = e.targetTouches[0].clientY)
                    }, e.ontouchmove = function(t) {
                        1 === t.targetTouches.length && k(t, e)
                    }, v || (document.addEventListener("touchmove", g, c ? {
                        passive: !1
                    } : void 0), v = !0)))
                },
                C = function(e) {
                    if (!e) {
                        console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                        return
                    }
                    f = f.filter(function(t) {
                        return t.targetElement !== e
                    }), d && (e.ontouchstart = null, e.ontouchmove = null, v && 0 === f.length && (document.removeEventListener("touchmove", g, c ? {
                        passive: !1
                    } : void 0), v = !1)), d ? x() : _()
                };

            function N() {
                let [e, t] = (0, l.useState)(!1), n = (0, l.useRef)(null), r = () => {
                    C(n), t(!1)
                }, s = () => {
                    j(n), t(!0)
                }, c = a()({
                    nav: !0,
                    "nav--active": e
                });

                function u(e) {
                    e.preventDefault();
                    let t = document.getElementById(e.target.getAttribute("href").substr(1));
                    r(), window.scroll({
                        top: t.offsetTop - 64,
                        left: 0,
                        behavior: "smooth"
                    })
                }
                return (0, o.jsxs)("nav", {
                    ref: n,
                    className: c,
                    children: [(0, o.jsxs)("div", {
                        className: "nav__menu",
                        children: [(0, o.jsx)(i(), {
                            href: "#how-to-buy",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "How to buy"
                        }), (0, o.jsx)(i(), {
                            href: "#roadmap",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "Roadmap"
                        }), (0, o.jsx)(i(), {
                            href: "#tokenomics",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "Tokenomics"
                        }), (0, o.jsx)(i(), {
                            href: "#community",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "Community"
                        }), (0, o.jsx)(i(), {
                            href: "#analytics",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "Analytics"
                        }), (0, o.jsx)(i(), {
                            href: "#safety",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "Safety"
                        }), (0, o.jsx)(i(), {
                            href: "#contact",
                            scroll: !1,
                            onClick: u,
                            className: "nav__link",
                            children: "Contact"
                        })]
                    }), (0, o.jsx)("a", {
                        href: "https://app.uniswap.org/#/swap?theme=dark&exactField=input&exactAmount=0.1&inputCurrency=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&outputCurrency=".concat("0x7b744eea1deca2f1b7b31f15ba036fa1759452d7"),
                        className: "nav__buy el-button el-button--size-small",
                        children: "Buy $HIPP"
                    }), (0, o.jsx)("button", {
                        className: "nav__toggle",
                        type: "button",
                        onClick: () => {
                            e ? r() : s()
                        },
                        children: "Menu"
                    })]
                })
            }
            var E = n(25011);

            function S() {
                let [e, t] = (0, l.useState)(!1), n = () => {
                    window.scrollY > 10 ? t(!0) : t(!1)
                };
                (0, l.useEffect)(() => (window.addEventListener("scroll", n), () => {
                    window.removeEventListener("scroll", n)
                }));
                let r = a()({
                    header: !0,
                    "header--stuck": e
                });
                return (0, o.jsx)("header", {
                    className: r,
                    children: (0, o.jsxs)("div", {
                        className: "header__inner inner",
                        children: [(0, o.jsx)(E.default, {}), (0, o.jsx)(N, {})]
                    })
                })
            }
        },
        25011: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var o = n(57437);

            function r() {
                return (0, o.jsx)("a", {
                    href: "#top",
                    className: "logo",
                    onClick: function(e) {
                        e.preventDefault(), window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })
                    },
                    children: "El Hippo"
                })
            }
            n(13663)
        },
        378: function() {},
        23303: function() {},
        51833: function() {},
        13663: function() {},
        3310: function() {},
        6328: function() {},
        44447: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Gantari_42822f', '__Gantari_Fallback_42822f'",
                    fontStyle: "normal"
                },
                className: "__className_42822f"
            }
        }
    },
    function(e) {
        e.O(0, [8371, 2971, 596, 1744], function() {
            return e(e.s = 80048)
        }), _N_E = e.O()
    }
]);