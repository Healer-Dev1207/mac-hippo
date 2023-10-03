"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5866], {
        5866: function(e, a, t) {
            t.r(a), t.d(a, {
                default: function() {
                    return k
                },
                validate: function() {
                    return s
                }
            });
            var r = t(60075),
                s = k,
                i = t(19497).default,
                n = RegExp("^[\\w ]+$", "u"),
                m = RegExp("^[\\w]+$", "u"),
                o = RegExp("^[ \\w]+$", "u"),
                p = RegExp("^[ \\w\\.,:]+$", "u"),
                h = t(25016).u5["date-time"],
                f = t(25016).u5.uri,
                d = RegExp("^0x[a-fA-F0-9]{40}$", "u"),
                u = RegExp("^[ \\S+]+$", "u"),
                c = RegExp("^\\S+$", "u");

            function y(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    r = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty, a.rootData;
                var s = null,
                    n = 0,
                    m = !1,
                    o = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        var p = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === s ? s = [p] : s.push(p), n++
                    } else if (1 > i(e)) {
                        var h = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === s ? s = [h] : s.push(h), n++
                    }
                } else {
                    var f = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === s ? s = [f] : s.push(f), n++
                }
                var d = 0 === n;
                if (!(o = o || d)) {
                    var u = n;
                    if ("boolean" != typeof e) {
                        var c = {
                            instancePath: r,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === s ? s = [c] : s.push(c), n++
                    }
                    var d = u === n;
                    if (!(o = o || d)) {
                        var l = n;
                        if (!("number" == typeof e && isFinite(e))) {
                            var g = {
                                instancePath: r,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === s ? s = [g] : s.push(g), n++
                        }
                        var d = l === n;
                        if (!(o = o || d)) {
                            var v = n;
                            if (null !== e) {
                                var P = {
                                    instancePath: r,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === s ? s = [P] : s.push(P), n++
                            }
                            var d = v === n;
                            o = o || d
                        }
                    }
                }
                if (o) n = 0, null !== s && (s = null);
                else {
                    var k = {
                        instancePath: r,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === s ? s = [k] : s.push(k), n++
                }
                var w = 0 === n;
                if (m = m || w) n = 0, null !== s && (s = null);
                else {
                    var b = {
                        instancePath: r,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === s ? s = [b] : s.push(b), n++, y.errors = s, !1
                }
                return y.errors = s, 0 === n
            }

            function l(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var n = a.rootData,
                    o = void 0 === n ? e : n,
                    p = null,
                    h = 0,
                    f = !1,
                    d = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        var u = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === p ? p = [u] : p.push(u), h++
                    } else if (1 > i(e)) {
                        var c = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === p ? p = [c] : p.push(c), h++
                    }
                } else {
                    var g = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === p ? p = [g] : p.push(g), h++
                }
                var v = 0 === h;
                if (!(d = d || v)) {
                    var P = h;
                    if ("boolean" != typeof e) {
                        var k = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === p ? p = [k] : p.push(k), h++
                    }
                    var v = P === h;
                    if (!(d = d || v)) {
                        var w = h;
                        if (!("number" == typeof e && isFinite(e))) {
                            var b = {
                                instancePath: s,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === p ? p = [b] : p.push(b), h++
                        }
                        var v = w === h;
                        if (!(d = d || v)) {
                            var x = h;
                            if (null !== e) {
                                var O = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === p ? p = [O] : p.push(O), h++
                            }
                            var v = x === h;
                            d = d || v
                        }
                    }
                }
                if (d) h = 0, null !== p && (p = null);
                else {
                    var N = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === p ? p = [N] : p.push(N), h++
                }
                var $ = 0 === h;
                if (!(f = f || $)) {
                    var T = h;
                    if (h === T) {
                        if (e && "object" == (0, r.Z)(e) && !Array.isArray(e)) {
                            if (Object.keys(e).length > 10) {
                                var I = {
                                    instancePath: s,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === p ? p = [I] : p.push(I), h++
                            } else {
                                for (var L in e) {
                                    var z = h,
                                        j = h;
                                    if (h === j) {
                                        if ("string" == typeof L) {
                                            if (i(L) > 40) {
                                                var D = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: L
                                                };
                                                null === p ? p = [D] : p.push(D), h++
                                            } else if (1 > i(L)) {
                                                var E = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: L
                                                };
                                                null === p ? p = [E] : p.push(E), h++
                                            } else if (!m.test(L)) {
                                                var V = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: L
                                                };
                                                null === p ? p = [V] : p.push(V), h++
                                            }
                                        } else {
                                            var A = {
                                                instancePath: s,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: L
                                            };
                                            null === p ? p = [A] : p.push(A), h++
                                        }
                                    }
                                    var _ = z === h;
                                    if (!_) {
                                        var R = {
                                            instancePath: s,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: L
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === p ? p = [R] : p.push(R), h++;
                                        break
                                    }
                                }
                                if (_)
                                    for (var q in e) {
                                        var M = h;
                                        if (y(e[q], {
                                                instancePath: s + "/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: q,
                                                rootData: o
                                            }) || (h = (p = null === p ? y.errors : p.concat(y.errors)).length), M !== h) break
                                    }
                            }
                        } else {
                            var F = {
                                instancePath: s,
                                schemaPath: "#/anyOf/1/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            };
                            null === p ? p = [F] : p.push(F), h++
                        }
                    }
                    var $ = T === h;
                    f = f || $
                }
                if (f) h = 0, null !== p && (p = null);
                else {
                    var U = {
                        instancePath: s,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === p ? p = [U] : p.push(U), h++, l.errors = p, !1
                }
                return l.errors = p, 0 === h
            }

            function g(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var n = a.rootData,
                    o = void 0 === n ? e : n,
                    p = null,
                    h = 0,
                    f = !1,
                    d = !1;
                if ("string" == typeof e) {
                    if (i(e) > 42) {
                        var u = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",
                            keyword: "maxLength",
                            params: {
                                limit: 42
                            },
                            message: "must NOT have more than 42 characters"
                        };
                        null === p ? p = [u] : p.push(u), h++
                    } else if (1 > i(e)) {
                        var c = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",
                            keyword: "minLength",
                            params: {
                                limit: 1
                            },
                            message: "must NOT have fewer than 1 characters"
                        };
                        null === p ? p = [c] : p.push(c), h++
                    }
                } else {
                    var y = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/0/type",
                        keyword: "type",
                        params: {
                            type: "string"
                        },
                        message: "must be string"
                    };
                    null === p ? p = [y] : p.push(y), h++
                }
                var v = 0 === h;
                if (!(d = d || v)) {
                    var P = h;
                    if ("boolean" != typeof e) {
                        var k = {
                            instancePath: s,
                            schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/1/type",
                            keyword: "type",
                            params: {
                                type: "boolean"
                            },
                            message: "must be boolean"
                        };
                        null === p ? p = [k] : p.push(k), h++
                    }
                    var v = P === h;
                    if (!(d = d || v)) {
                        var w = h;
                        if (!("number" == typeof e && isFinite(e))) {
                            var b = {
                                instancePath: s,
                                schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/2/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            };
                            null === p ? p = [b] : p.push(b), h++
                        }
                        var v = w === h;
                        if (!(d = d || v)) {
                            var x = h;
                            if (null !== e) {
                                var O = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf/3/type",
                                    keyword: "type",
                                    params: {
                                        type: "null"
                                    },
                                    message: "must be null"
                                };
                                null === p ? p = [O] : p.push(O), h++
                            }
                            var v = x === h;
                            d = d || v
                        }
                    }
                }
                if (d) h = 0, null !== p && (p = null);
                else {
                    var N = {
                        instancePath: s,
                        schemaPath: "#/definitions/ExtensionPrimitiveValue/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    null === p ? p = [N] : p.push(N), h++
                }
                var $ = 0 === h;
                if (!(f = f || $)) {
                    var T = h;
                    if (h === T) {
                        if (e && "object" == (0, r.Z)(e) && !Array.isArray(e)) {
                            if (Object.keys(e).length > 10) {
                                var I = {
                                    instancePath: s,
                                    schemaPath: "#/anyOf/1/maxProperties",
                                    keyword: "maxProperties",
                                    params: {
                                        limit: 10
                                    },
                                    message: "must NOT have more than 10 properties"
                                };
                                null === p ? p = [I] : p.push(I), h++
                            } else {
                                for (var L in e) {
                                    var z = h,
                                        j = h;
                                    if (h === j) {
                                        if ("string" == typeof L) {
                                            if (i(L) > 40) {
                                                var D = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                                    keyword: "maxLength",
                                                    params: {
                                                        limit: 40
                                                    },
                                                    message: "must NOT have more than 40 characters",
                                                    propertyName: L
                                                };
                                                null === p ? p = [D] : p.push(D), h++
                                            } else if (1 > i(L)) {
                                                var E = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                                    keyword: "minLength",
                                                    params: {
                                                        limit: 1
                                                    },
                                                    message: "must NOT have fewer than 1 characters",
                                                    propertyName: L
                                                };
                                                null === p ? p = [E] : p.push(E), h++
                                            } else if (!m.test(L)) {
                                                var V = {
                                                    instancePath: s,
                                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^[\\w]+$"
                                                    },
                                                    message: 'must match pattern "^[\\w]+$"',
                                                    propertyName: L
                                                };
                                                null === p ? p = [V] : p.push(V), h++
                                            }
                                        } else {
                                            var A = {
                                                instancePath: s,
                                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string",
                                                propertyName: L
                                            };
                                            null === p ? p = [A] : p.push(A), h++
                                        }
                                    }
                                    var _ = z === h;
                                    if (!_) {
                                        var R = {
                                            instancePath: s,
                                            schemaPath: "#/anyOf/1/propertyNames",
                                            keyword: "propertyNames",
                                            params: {
                                                propertyName: L
                                            },
                                            message: "property name must be valid"
                                        };
                                        null === p ? p = [R] : p.push(R), h++;
                                        break
                                    }
                                }
                                if (_)
                                    for (var q in e) {
                                        var M = h;
                                        if (l(e[q], {
                                                instancePath: s + "/" + q.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                parentData: e,
                                                parentDataProperty: q,
                                                rootData: o
                                            }) || (h = (p = null === p ? l.errors : p.concat(l.errors)).length), M !== h) break
                                    }
                            }
                        } else {
                            var F = {
                                instancePath: s,
                                schemaPath: "#/anyOf/1/type",
                                keyword: "type",
                                params: {
                                    type: "object"
                                },
                                message: "must be object"
                            };
                            null === p ? p = [F] : p.push(F), h++
                        }
                    }
                    var $ = T === h;
                    f = f || $
                }
                if (f) h = 0, null !== p && (p = null);
                else {
                    var U = {
                        instancePath: s,
                        schemaPath: "#/anyOf",
                        keyword: "anyOf",
                        params: {},
                        message: "must match a schema in anyOf"
                    };
                    return null === p ? p = [U] : p.push(U), h++, g.errors = p, !1
                }
                return g.errors = p, 0 === h
            }

            function v(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var n = a.rootData,
                    o = void 0 === n ? e : n,
                    p = null,
                    h = 0;
                if (!e || "object" != (0, r.Z)(e) || Array.isArray(e)) return v.errors = [{
                    instancePath: s,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (Object.keys(e).length > 10) return v.errors = [{
                    instancePath: s,
                    schemaPath: "#/maxProperties",
                    keyword: "maxProperties",
                    params: {
                        limit: 10
                    },
                    message: "must NOT have more than 10 properties"
                }], !1;
                for (var f in e) {
                    var d = h,
                        u = h;
                    if (h === u) {
                        if ("string" == typeof f) {
                            if (i(f) > 40) {
                                var c = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionIdentifier/maxLength",
                                    keyword: "maxLength",
                                    params: {
                                        limit: 40
                                    },
                                    message: "must NOT have more than 40 characters",
                                    propertyName: f
                                };
                                null === p ? p = [c] : p.push(c), h++
                            } else if (1 > i(f)) {
                                var y = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionIdentifier/minLength",
                                    keyword: "minLength",
                                    params: {
                                        limit: 1
                                    },
                                    message: "must NOT have fewer than 1 characters",
                                    propertyName: f
                                };
                                null === p ? p = [y] : p.push(y), h++
                            } else if (!m.test(f)) {
                                var l = {
                                    instancePath: s,
                                    schemaPath: "#/definitions/ExtensionIdentifier/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^[\\w]+$"
                                    },
                                    message: 'must match pattern "^[\\w]+$"',
                                    propertyName: f
                                };
                                null === p ? p = [l] : p.push(l), h++
                            }
                        } else {
                            var P = {
                                instancePath: s,
                                schemaPath: "#/definitions/ExtensionIdentifier/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string",
                                propertyName: f
                            };
                            null === p ? p = [P] : p.push(P), h++
                        }
                    }
                    var k = d === h;
                    if (!k) {
                        var w = {
                            instancePath: s,
                            schemaPath: "#/propertyNames",
                            keyword: "propertyNames",
                            params: {
                                propertyName: f
                            },
                            message: "property name must be valid"
                        };
                        return null === p ? p = [w] : p.push(w), h++, v.errors = p, !1
                    }
                }
                if (k)
                    for (var b in e) {
                        var x = h;
                        if (g(e[b], {
                                instancePath: s + "/" + b.replace(/~/g, "~0").replace(/\//g, "~1"),
                                parentData: e,
                                parentDataProperty: b,
                                rootData: o
                            }) || (h = (p = null === p ? g.errors : p.concat(g.errors)).length), x !== h) break
                    }
                return v.errors = p, 0 === h
            }

            function P(e) {
                var a, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    s = t.instancePath,
                    n = void 0 === s ? "" : s;
                t.parentData, t.parentDataProperty;
                var o = t.rootData,
                    p = void 0 === o ? e : o,
                    h = null,
                    y = 0;
                if (!e || "object" != (0, r.Z)(e) || Array.isArray(e)) return P.errors = [{
                    instancePath: n,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (void 0 === e.chainId && (a = "chainId") || void 0 === e.address && (a = "address") || void 0 === e.decimals && (a = "decimals") || void 0 === e.name && (a = "name") || void 0 === e.symbol && (a = "symbol")) return P.errors = [{
                    instancePath: n,
                    schemaPath: "#/required",
                    keyword: "required",
                    params: {
                        missingProperty: a
                    },
                    message: "must have required property '" + a + "'"
                }], !1;
                var l = y;
                for (var g in e)
                    if (!("chainId" === g || "address" === g || "decimals" === g || "name" === g || "symbol" === g || "logoURI" === g || "tags" === g || "extensions" === g)) return P.errors = [{
                        instancePath: n,
                        schemaPath: "#/additionalProperties",
                        keyword: "additionalProperties",
                        params: {
                            additionalProperty: g
                        },
                        message: "must NOT have additional properties"
                    }], !1;
                if (l === y) {
                    if (void 0 !== e.chainId) {
                        var k = e.chainId,
                            w = y;
                        if (!("number" == typeof k && !(k % 1) && !isNaN(k) && isFinite(k))) return P.errors = [{
                            instancePath: n + "/chainId",
                            schemaPath: "#/properties/chainId/type",
                            keyword: "type",
                            params: {
                                type: "integer"
                            },
                            message: "must be integer"
                        }], !1;
                        if (y === w && "number" == typeof k && isFinite(k) && (k < 1 || isNaN(k))) return P.errors = [{
                            instancePath: n + "/chainId",
                            schemaPath: "#/properties/chainId/minimum",
                            keyword: "minimum",
                            params: {
                                comparison: ">=",
                                limit: 1
                            },
                            message: "must be >= 1"
                        }], !1;
                        var b = w === y
                    } else var b = !0;
                    if (b) {
                        if (void 0 !== e.address) {
                            var x = e.address,
                                O = y;
                            if (y === O) {
                                if ("string" != typeof x) return P.errors = [{
                                    instancePath: n + "/address",
                                    schemaPath: "#/properties/address/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                if (!d.test(x)) return P.errors = [{
                                    instancePath: n + "/address",
                                    schemaPath: "#/properties/address/pattern",
                                    keyword: "pattern",
                                    params: {
                                        pattern: "^0x[a-fA-F0-9]{40}$"
                                    },
                                    message: 'must match pattern "^0x[a-fA-F0-9]{40}$"'
                                }], !1
                            }
                            var b = O === y
                        } else var b = !0;
                        if (b) {
                            if (void 0 !== e.decimals) {
                                var N = e.decimals,
                                    $ = y;
                                if (!("number" == typeof N && !(N % 1) && !isNaN(N) && isFinite(N))) return P.errors = [{
                                    instancePath: n + "/decimals",
                                    schemaPath: "#/properties/decimals/type",
                                    keyword: "type",
                                    params: {
                                        type: "integer"
                                    },
                                    message: "must be integer"
                                }], !1;
                                if (y === $ && "number" == typeof N && isFinite(N)) {
                                    if (N > 255 || isNaN(N)) return P.errors = [{
                                        instancePath: n + "/decimals",
                                        schemaPath: "#/properties/decimals/maximum",
                                        keyword: "maximum",
                                        params: {
                                            comparison: "<=",
                                            limit: 255
                                        },
                                        message: "must be <= 255"
                                    }], !1;
                                    if (N < 0 || isNaN(N)) return P.errors = [{
                                        instancePath: n + "/decimals",
                                        schemaPath: "#/properties/decimals/minimum",
                                        keyword: "minimum",
                                        params: {
                                            comparison: ">=",
                                            limit: 0
                                        },
                                        message: "must be >= 0"
                                    }], !1
                                }
                                var b = $ === y
                            } else var b = !0;
                            if (b) {
                                if (void 0 !== e.name) {
                                    var T = e.name,
                                        I = y,
                                        L = y,
                                        z = !1,
                                        j = y;
                                    if ("" !== T) {
                                        var D = {
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/anyOf/0/const",
                                            keyword: "const",
                                            params: {
                                                allowedValue: ""
                                            },
                                            message: "must be equal to constant"
                                        };
                                        null === h ? h = [D] : h.push(D), y++
                                    }
                                    var E = j === y;
                                    if (!(z = z || E)) {
                                        var V = y;
                                        if ("string" == typeof T && !u.test(T)) {
                                            var A = {
                                                instancePath: n + "/name",
                                                schemaPath: "#/properties/name/anyOf/1/pattern",
                                                keyword: "pattern",
                                                params: {
                                                    pattern: "^[ \\S+]+$"
                                                },
                                                message: 'must match pattern "^[ \\S+]+$"'
                                            };
                                            null === h ? h = [A] : h.push(A), y++
                                        }
                                        var E = V === y;
                                        z = z || E
                                    }
                                    if (z) y = L, null !== h && (L ? h.length = L : h = null);
                                    else {
                                        var _ = {
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/anyOf",
                                            keyword: "anyOf",
                                            params: {},
                                            message: "must match a schema in anyOf"
                                        };
                                        return null === h ? h = [_] : h.push(_), y++, P.errors = h, !1
                                    }
                                    if (y === I) {
                                        if ("string" != typeof T) return P.errors = [{
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        if (i(T) > 40) return P.errors = [{
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/maxLength",
                                            keyword: "maxLength",
                                            params: {
                                                limit: 40
                                            },
                                            message: "must NOT have more than 40 characters"
                                        }], !1;
                                        if (0 > i(T)) return P.errors = [{
                                            instancePath: n + "/name",
                                            schemaPath: "#/properties/name/minLength",
                                            keyword: "minLength",
                                            params: {
                                                limit: 0
                                            },
                                            message: "must NOT have fewer than 0 characters"
                                        }], !1
                                    }
                                    var b = I === y
                                } else var b = !0;
                                if (b) {
                                    if (void 0 !== e.symbol) {
                                        var R = e.symbol,
                                            q = y,
                                            M = y,
                                            F = !1,
                                            U = y;
                                        if ("" !== R) {
                                            var Z = {
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/anyOf/0/const",
                                                keyword: "const",
                                                params: {
                                                    allowedValue: ""
                                                },
                                                message: "must be equal to constant"
                                            };
                                            null === h ? h = [Z] : h.push(Z), y++
                                        }
                                        var S = U === y;
                                        if (!(F = F || S)) {
                                            var C = y;
                                            if ("string" == typeof R && !c.test(R)) {
                                                var H = {
                                                    instancePath: n + "/symbol",
                                                    schemaPath: "#/properties/symbol/anyOf/1/pattern",
                                                    keyword: "pattern",
                                                    params: {
                                                        pattern: "^\\S+$"
                                                    },
                                                    message: 'must match pattern "^\\S+$"'
                                                };
                                                null === h ? h = [H] : h.push(H), y++
                                            }
                                            var S = C === y;
                                            F = F || S
                                        }
                                        if (F) y = M, null !== h && (M ? h.length = M : h = null);
                                        else {
                                            var W = {
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/anyOf",
                                                keyword: "anyOf",
                                                params: {},
                                                message: "must match a schema in anyOf"
                                            };
                                            return null === h ? h = [W] : h.push(W), y++, P.errors = h, !1
                                        }
                                        if (y === q) {
                                            if ("string" != typeof R) return P.errors = [{
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            if (i(R) > 20) return P.errors = [{
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/maxLength",
                                                keyword: "maxLength",
                                                params: {
                                                    limit: 20
                                                },
                                                message: "must NOT have more than 20 characters"
                                            }], !1;
                                            if (0 > i(R)) return P.errors = [{
                                                instancePath: n + "/symbol",
                                                schemaPath: "#/properties/symbol/minLength",
                                                keyword: "minLength",
                                                params: {
                                                    limit: 0
                                                },
                                                message: "must NOT have fewer than 0 characters"
                                            }], !1
                                        }
                                        var b = q === y
                                    } else var b = !0;
                                    if (b) {
                                        if (void 0 !== e.logoURI) {
                                            var Y = e.logoURI,
                                                B = y;
                                            if (y === B && y === B) {
                                                if ("string" != typeof Y) return P.errors = [{
                                                    instancePath: n + "/logoURI",
                                                    schemaPath: "#/properties/logoURI/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                if (!f(Y)) return P.errors = [{
                                                    instancePath: n + "/logoURI",
                                                    schemaPath: "#/properties/logoURI/format",
                                                    keyword: "format",
                                                    params: {
                                                        format: "uri"
                                                    },
                                                    message: 'must match format "uri"'
                                                }], !1
                                            }
                                            var b = B === y
                                        } else var b = !0;
                                        if (b) {
                                            if (void 0 !== e.tags) {
                                                var G = e.tags,
                                                    J = y;
                                                if (y === J) {
                                                    if (!Array.isArray(G)) return P.errors = [{
                                                        instancePath: n + "/tags",
                                                        schemaPath: "#/properties/tags/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "array"
                                                        },
                                                        message: "must be array"
                                                    }], !1;
                                                    if (G.length > 10) return P.errors = [{
                                                        instancePath: n + "/tags",
                                                        schemaPath: "#/properties/tags/maxItems",
                                                        keyword: "maxItems",
                                                        params: {
                                                            limit: 10
                                                        },
                                                        message: "must NOT have more than 10 items"
                                                    }], !1;
                                                    for (var K = !0, Q = G.length, X = 0; X < Q; X++) {
                                                        var ee = G[X],
                                                            ea = y,
                                                            et = y;
                                                        if (y === et) {
                                                            if ("string" != typeof ee) return P.errors = [{
                                                                instancePath: n + "/tags/" + X,
                                                                schemaPath: "#/definitions/TagIdentifier/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            if (i(ee) > 10) return P.errors = [{
                                                                instancePath: n + "/tags/" + X,
                                                                schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                keyword: "maxLength",
                                                                params: {
                                                                    limit: 10
                                                                },
                                                                message: "must NOT have more than 10 characters"
                                                            }], !1;
                                                            if (1 > i(ee)) return P.errors = [{
                                                                instancePath: n + "/tags/" + X,
                                                                schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                keyword: "minLength",
                                                                params: {
                                                                    limit: 1
                                                                },
                                                                message: "must NOT have fewer than 1 characters"
                                                            }], !1;
                                                            if (!m.test(ee)) return P.errors = [{
                                                                instancePath: n + "/tags/" + X,
                                                                schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                keyword: "pattern",
                                                                params: {
                                                                    pattern: "^[\\w]+$"
                                                                },
                                                                message: 'must match pattern "^[\\w]+$"'
                                                            }], !1
                                                        }
                                                        var K = ea === y;
                                                        if (!K) break
                                                    }
                                                }
                                                var b = J === y
                                            } else var b = !0;
                                            if (b) {
                                                if (void 0 !== e.extensions) {
                                                    var er = y;
                                                    v(e.extensions, {
                                                        instancePath: n + "/extensions",
                                                        parentData: e,
                                                        parentDataProperty: "extensions",
                                                        rootData: p
                                                    }) || (y = (h = null === h ? v.errors : h.concat(v.errors)).length);
                                                    var b = er === y
                                                } else var b = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return P.errors = h, 0 === y
            }

            function k(e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = a.instancePath,
                    s = void 0 === t ? "" : t;
                a.parentData, a.parentDataProperty;
                var d = a.rootData,
                    u = void 0 === d ? e : d,
                    c = null,
                    y = 0;
                if (!e || "object" != (0, r.Z)(e) || Array.isArray(e)) return k.errors = [{
                    instancePath: s,
                    schemaPath: "#/type",
                    keyword: "type",
                    params: {
                        type: "object"
                    },
                    message: "must be object"
                }], !1;
                if (void 0 === e.tokens && (N = "tokens")) return k.errors = [{
                    instancePath: s,
                    schemaPath: "#/required",
                    keyword: "required",
                    params: {
                        missingProperty: N
                    },
                    message: "must have required property '" + N + "'"
                }], !1;
                var l = y;
                for (var g in e)
                    if (!("name" === g || "timestamp" === g || "version" === g || "tokens" === g || "tokenMap" === g || "keywords" === g || "tags" === g || "logoURI" === g)) return k.errors = [{
                        instancePath: s,
                        schemaPath: "#/additionalProperties",
                        keyword: "additionalProperties",
                        params: {
                            additionalProperty: g
                        },
                        message: "must NOT have additional properties"
                    }], !1;
                if (l === y) {
                    if (void 0 !== e.name) {
                        var v = e.name,
                            w = y;
                        if (y === w) {
                            if ("string" != typeof v) return k.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            if (i(v) > 30) return k.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/maxLength",
                                keyword: "maxLength",
                                params: {
                                    limit: 30
                                },
                                message: "must NOT have more than 30 characters"
                            }], !1;
                            if (1 > i(v)) return k.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/minLength",
                                keyword: "minLength",
                                params: {
                                    limit: 1
                                },
                                message: "must NOT have fewer than 1 characters"
                            }], !1;
                            if (!n.test(v)) return k.errors = [{
                                instancePath: s + "/name",
                                schemaPath: "#/properties/name/pattern",
                                keyword: "pattern",
                                params: {
                                    pattern: "^[\\w ]+$"
                                },
                                message: 'must match pattern "^[\\w ]+$"'
                            }], !1
                        }
                        var b = w === y
                    } else var b = !0;
                    if (b) {
                        if (void 0 !== e.timestamp) {
                            var x = e.timestamp,
                                O = y;
                            if (y === O && y === O) {
                                if ("string" != typeof x) return k.errors = [{
                                    instancePath: s + "/timestamp",
                                    schemaPath: "#/properties/timestamp/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                if (!h.validate(x)) return k.errors = [{
                                    instancePath: s + "/timestamp",
                                    schemaPath: "#/properties/timestamp/format",
                                    keyword: "format",
                                    params: {
                                        format: "date-time"
                                    },
                                    message: 'must match format "date-time"'
                                }], !1
                            }
                            var b = O === y
                        } else var b = !0;
                        if (b) {
                            if (void 0 !== e.version) {
                                var N, $, T = e.version,
                                    I = y,
                                    L = y;
                                if (y === L) {
                                    if (!T || "object" != (0, r.Z)(T) || Array.isArray(T)) return k.errors = [{
                                        instancePath: s + "/version",
                                        schemaPath: "#/definitions/Version/type",
                                        keyword: "type",
                                        params: {
                                            type: "object"
                                        },
                                        message: "must be object"
                                    }], !1;
                                    if (void 0 === T.major && ($ = "major") || void 0 === T.minor && ($ = "minor") || void 0 === T.patch && ($ = "patch")) return k.errors = [{
                                        instancePath: s + "/version",
                                        schemaPath: "#/definitions/Version/required",
                                        keyword: "required",
                                        params: {
                                            missingProperty: $
                                        },
                                        message: "must have required property '" + $ + "'"
                                    }], !1;
                                    var z = y;
                                    for (var j in T)
                                        if (!("major" === j || "minor" === j || "patch" === j)) return k.errors = [{
                                            instancePath: s + "/version",
                                            schemaPath: "#/definitions/Version/additionalProperties",
                                            keyword: "additionalProperties",
                                            params: {
                                                additionalProperty: j
                                            },
                                            message: "must NOT have additional properties"
                                        }], !1;
                                    if (z === y) {
                                        if (void 0 !== T.major) {
                                            var D = T.major,
                                                E = y;
                                            if (!("number" == typeof D && !(D % 1) && !isNaN(D) && isFinite(D))) return k.errors = [{
                                                instancePath: s + "/version/major",
                                                schemaPath: "#/definitions/Version/properties/major/type",
                                                keyword: "type",
                                                params: {
                                                    type: "integer"
                                                },
                                                message: "must be integer"
                                            }], !1;
                                            if (y === E && "number" == typeof D && isFinite(D) && (D < 0 || isNaN(D))) return k.errors = [{
                                                instancePath: s + "/version/major",
                                                schemaPath: "#/definitions/Version/properties/major/minimum",
                                                keyword: "minimum",
                                                params: {
                                                    comparison: ">=",
                                                    limit: 0
                                                },
                                                message: "must be >= 0"
                                            }], !1;
                                            var V = E === y
                                        } else var V = !0;
                                        if (V) {
                                            if (void 0 !== T.minor) {
                                                var A = T.minor,
                                                    _ = y;
                                                if (!("number" == typeof A && !(A % 1) && !isNaN(A) && isFinite(A))) return k.errors = [{
                                                    instancePath: s + "/version/minor",
                                                    schemaPath: "#/definitions/Version/properties/minor/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "integer"
                                                    },
                                                    message: "must be integer"
                                                }], !1;
                                                if (y === _ && "number" == typeof A && isFinite(A) && (A < 0 || isNaN(A))) return k.errors = [{
                                                    instancePath: s + "/version/minor",
                                                    schemaPath: "#/definitions/Version/properties/minor/minimum",
                                                    keyword: "minimum",
                                                    params: {
                                                        comparison: ">=",
                                                        limit: 0
                                                    },
                                                    message: "must be >= 0"
                                                }], !1;
                                                var V = _ === y
                                            } else var V = !0;
                                            if (V) {
                                                if (void 0 !== T.patch) {
                                                    var R = T.patch,
                                                        q = y;
                                                    if (!("number" == typeof R && !(R % 1) && !isNaN(R) && isFinite(R))) return k.errors = [{
                                                        instancePath: s + "/version/patch",
                                                        schemaPath: "#/definitions/Version/properties/patch/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "integer"
                                                        },
                                                        message: "must be integer"
                                                    }], !1;
                                                    if (y === q && "number" == typeof R && isFinite(R) && (R < 0 || isNaN(R))) return k.errors = [{
                                                        instancePath: s + "/version/patch",
                                                        schemaPath: "#/definitions/Version/properties/patch/minimum",
                                                        keyword: "minimum",
                                                        params: {
                                                            comparison: ">=",
                                                            limit: 0
                                                        },
                                                        message: "must be >= 0"
                                                    }], !1;
                                                    var V = q === y
                                                } else var V = !0
                                            }
                                        }
                                    }
                                }
                                var b = I === y
                            } else var b = !0;
                            if (b) {
                                if (void 0 !== e.tokens) {
                                    var M = e.tokens,
                                        F = y;
                                    if (y === F) {
                                        if (!Array.isArray(M)) return k.errors = [{
                                            instancePath: s + "/tokens",
                                            schemaPath: "#/properties/tokens/type",
                                            keyword: "type",
                                            params: {
                                                type: "array"
                                            },
                                            message: "must be array"
                                        }], !1;
                                        if (M.length > 1e4) return k.errors = [{
                                            instancePath: s + "/tokens",
                                            schemaPath: "#/properties/tokens/maxItems",
                                            keyword: "maxItems",
                                            params: {
                                                limit: 1e4
                                            },
                                            message: "must NOT have more than 10000 items"
                                        }], !1;
                                        if (M.length < 1) return k.errors = [{
                                            instancePath: s + "/tokens",
                                            schemaPath: "#/properties/tokens/minItems",
                                            keyword: "minItems",
                                            params: {
                                                limit: 1
                                            },
                                            message: "must NOT have fewer than 1 items"
                                        }], !1;
                                        for (var U = !0, Z = M.length, S = 0; S < Z; S++) {
                                            var C = y;
                                            P(M[S], {
                                                instancePath: s + "/tokens/" + S,
                                                parentData: M,
                                                parentDataProperty: S,
                                                rootData: u
                                            }) || (y = (c = null === c ? P.errors : c.concat(P.errors)).length);
                                            var U = C === y;
                                            if (!U) break
                                        }
                                    }
                                    var b = F === y
                                } else var b = !0;
                                if (b) {
                                    if (void 0 !== e.tokenMap) {
                                        var H = e.tokenMap,
                                            W = y;
                                        if (y === W) {
                                            if (!H || "object" != (0, r.Z)(H) || Array.isArray(H)) return k.errors = [{
                                                instancePath: s + "/tokenMap",
                                                schemaPath: "#/properties/tokenMap/type",
                                                keyword: "type",
                                                params: {
                                                    type: "object"
                                                },
                                                message: "must be object"
                                            }], !1;
                                            if (Object.keys(H).length > 1e4) return k.errors = [{
                                                instancePath: s + "/tokenMap",
                                                schemaPath: "#/properties/tokenMap/maxProperties",
                                                keyword: "maxProperties",
                                                params: {
                                                    limit: 1e4
                                                },
                                                message: "must NOT have more than 10000 properties"
                                            }], !1;
                                            if (Object.keys(H).length < 1) return k.errors = [{
                                                instancePath: s + "/tokenMap",
                                                schemaPath: "#/properties/tokenMap/minProperties",
                                                keyword: "minProperties",
                                                params: {
                                                    limit: 1
                                                },
                                                message: "must NOT have fewer than 1 properties"
                                            }], !1;
                                            for (var Y in H) {
                                                var B = y;
                                                if ("string" != typeof Y) {
                                                    var G = {
                                                        instancePath: s + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/propertyNames/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string",
                                                        propertyName: Y
                                                    };
                                                    null === c ? c = [G] : c.push(G), y++
                                                }
                                                var J = B === y;
                                                if (!J) {
                                                    var K = {
                                                        instancePath: s + "/tokenMap",
                                                        schemaPath: "#/properties/tokenMap/propertyNames",
                                                        keyword: "propertyNames",
                                                        params: {
                                                            propertyName: Y
                                                        },
                                                        message: "property name must be valid"
                                                    };
                                                    return null === c ? c = [K] : c.push(K), y++, k.errors = c, !1
                                                }
                                            }
                                            if (J)
                                                for (var Q in H) {
                                                    var X = y;
                                                    if (P(H[Q], {
                                                            instancePath: s + "/tokenMap/" + Q.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                            parentData: H,
                                                            parentDataProperty: Q,
                                                            rootData: u
                                                        }) || (y = (c = null === c ? P.errors : c.concat(P.errors)).length), X !== y) break
                                                }
                                        }
                                        var b = W === y
                                    } else var b = !0;
                                    if (b) {
                                        if (void 0 !== e.keywords) {
                                            var ee = e.keywords,
                                                ea = y;
                                            if (y === ea) {
                                                if (!Array.isArray(ee)) return k.errors = [{
                                                    instancePath: s + "/keywords",
                                                    schemaPath: "#/properties/keywords/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "array"
                                                    },
                                                    message: "must be array"
                                                }], !1;
                                                if (ee.length > 20) return k.errors = [{
                                                    instancePath: s + "/keywords",
                                                    schemaPath: "#/properties/keywords/maxItems",
                                                    keyword: "maxItems",
                                                    params: {
                                                        limit: 20
                                                    },
                                                    message: "must NOT have more than 20 items"
                                                }], !1;
                                                for (var et = !0, er = ee.length, es = 0; es < er; es++) {
                                                    var ei = ee[es],
                                                        en = y;
                                                    if (y === en) {
                                                        if ("string" != typeof ei) return k.errors = [{
                                                            instancePath: s + "/keywords/" + es,
                                                            schemaPath: "#/properties/keywords/items/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (i(ei) > 20) return k.errors = [{
                                                            instancePath: s + "/keywords/" + es,
                                                            schemaPath: "#/properties/keywords/items/maxLength",
                                                            keyword: "maxLength",
                                                            params: {
                                                                limit: 20
                                                            },
                                                            message: "must NOT have more than 20 characters"
                                                        }], !1;
                                                        if (1 > i(ei)) return k.errors = [{
                                                            instancePath: s + "/keywords/" + es,
                                                            schemaPath: "#/properties/keywords/items/minLength",
                                                            keyword: "minLength",
                                                            params: {
                                                                limit: 1
                                                            },
                                                            message: "must NOT have fewer than 1 characters"
                                                        }], !1;
                                                        if (!n.test(ei)) return k.errors = [{
                                                            instancePath: s + "/keywords/" + es,
                                                            schemaPath: "#/properties/keywords/items/pattern",
                                                            keyword: "pattern",
                                                            params: {
                                                                pattern: "^[\\w ]+$"
                                                            },
                                                            message: 'must match pattern "^[\\w ]+$"'
                                                        }], !1
                                                    }
                                                    var et = en === y;
                                                    if (!et) break
                                                }
                                                if (et) {
                                                    var em, eo = ee.length;
                                                    if (eo > 1)
                                                        for (var ep = {}; eo--;) {
                                                            var eh = ee[eo];
                                                            if ("string" == typeof eh) {
                                                                if ("number" == typeof ep[eh]) return em = ep[eh], k.errors = [{
                                                                    instancePath: s + "/keywords",
                                                                    schemaPath: "#/properties/keywords/uniqueItems",
                                                                    keyword: "uniqueItems",
                                                                    params: {
                                                                        i: eo,
                                                                        j: em
                                                                    },
                                                                    message: "must NOT have duplicate items (items ## " + em + " and " + eo + " are identical)"
                                                                }], !1;
                                                                ep[eh] = eo
                                                            }
                                                        }
                                                }
                                            }
                                            var b = ea === y
                                        } else var b = !0;
                                        if (b) {
                                            if (void 0 !== e.tags) {
                                                var ef = e.tags,
                                                    ed = y;
                                                if (y === ed) {
                                                    if (!ef || "object" != (0, r.Z)(ef) || Array.isArray(ef)) return k.errors = [{
                                                        instancePath: s + "/tags",
                                                        schemaPath: "#/properties/tags/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "object"
                                                        },
                                                        message: "must be object"
                                                    }], !1;
                                                    if (Object.keys(ef).length > 20) return k.errors = [{
                                                        instancePath: s + "/tags",
                                                        schemaPath: "#/properties/tags/maxProperties",
                                                        keyword: "maxProperties",
                                                        params: {
                                                            limit: 20
                                                        },
                                                        message: "must NOT have more than 20 properties"
                                                    }], !1;
                                                    for (var eu in ef) {
                                                        var ec = y,
                                                            ey = y;
                                                        if (y === ey) {
                                                            if ("string" == typeof eu) {
                                                                if (i(eu) > 10) {
                                                                    var el = {
                                                                        instancePath: s + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/maxLength",
                                                                        keyword: "maxLength",
                                                                        params: {
                                                                            limit: 10
                                                                        },
                                                                        message: "must NOT have more than 10 characters",
                                                                        propertyName: eu
                                                                    };
                                                                    null === c ? c = [el] : c.push(el), y++
                                                                } else if (1 > i(eu)) {
                                                                    var eg = {
                                                                        instancePath: s + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/minLength",
                                                                        keyword: "minLength",
                                                                        params: {
                                                                            limit: 1
                                                                        },
                                                                        message: "must NOT have fewer than 1 characters",
                                                                        propertyName: eu
                                                                    };
                                                                    null === c ? c = [eg] : c.push(eg), y++
                                                                } else if (!m.test(eu)) {
                                                                    var ev = {
                                                                        instancePath: s + "/tags",
                                                                        schemaPath: "#/definitions/TagIdentifier/pattern",
                                                                        keyword: "pattern",
                                                                        params: {
                                                                            pattern: "^[\\w]+$"
                                                                        },
                                                                        message: 'must match pattern "^[\\w]+$"',
                                                                        propertyName: eu
                                                                    };
                                                                    null === c ? c = [ev] : c.push(ev), y++
                                                                }
                                                            } else {
                                                                var eP = {
                                                                    instancePath: s + "/tags",
                                                                    schemaPath: "#/definitions/TagIdentifier/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string",
                                                                    propertyName: eu
                                                                };
                                                                null === c ? c = [eP] : c.push(eP), y++
                                                            }
                                                        }
                                                        var ek = ec === y;
                                                        if (!ek) {
                                                            var ew = {
                                                                instancePath: s + "/tags",
                                                                schemaPath: "#/properties/tags/propertyNames",
                                                                keyword: "propertyNames",
                                                                params: {
                                                                    propertyName: eu
                                                                },
                                                                message: "property name must be valid"
                                                            };
                                                            return null === c ? c = [ew] : c.push(ew), y++, k.errors = c, !1
                                                        }
                                                    }
                                                    if (ek)
                                                        for (var eb in ef) {
                                                            var ex = ef[eb],
                                                                eO = y,
                                                                eN = y;
                                                            if (y === eN) {
                                                                if (!ex || "object" != (0, r.Z)(ex) || Array.isArray(ex)) return k.errors = [{
                                                                    instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    schemaPath: "#/definitions/TagDefinition/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "object"
                                                                    },
                                                                    message: "must be object"
                                                                }], !1;
                                                                var e$ = void 0;
                                                                if (void 0 === ex.name && (e$ = "name") || void 0 === ex.description && (e$ = "description")) return k.errors = [{
                                                                    instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                    schemaPath: "#/definitions/TagDefinition/required",
                                                                    keyword: "required",
                                                                    params: {
                                                                        missingProperty: e$
                                                                    },
                                                                    message: "must have required property '" + e$ + "'"
                                                                }], !1;
                                                                var eT = y;
                                                                for (var eI in ex)
                                                                    if (!("name" === eI || "description" === eI)) return k.errors = [{
                                                                        instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1"),
                                                                        schemaPath: "#/definitions/TagDefinition/additionalProperties",
                                                                        keyword: "additionalProperties",
                                                                        params: {
                                                                            additionalProperty: eI
                                                                        },
                                                                        message: "must NOT have additional properties"
                                                                    }], !1;
                                                                if (eT === y) {
                                                                    if (void 0 !== ex.name) {
                                                                        var eL = ex.name,
                                                                            ez = y;
                                                                        if (y === ez) {
                                                                            if ("string" != typeof eL) return k.errors = [{
                                                                                instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                    type: "string"
                                                                                },
                                                                                message: "must be string"
                                                                            }], !1;
                                                                            if (i(eL) > 20) return k.errors = [{
                                                                                instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/maxLength",
                                                                                keyword: "maxLength",
                                                                                params: {
                                                                                    limit: 20
                                                                                },
                                                                                message: "must NOT have more than 20 characters"
                                                                            }], !1;
                                                                            if (1 > i(eL)) return k.errors = [{
                                                                                instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/minLength",
                                                                                keyword: "minLength",
                                                                                params: {
                                                                                    limit: 1
                                                                                },
                                                                                message: "must NOT have fewer than 1 characters"
                                                                            }], !1;
                                                                            if (!o.test(eL)) return k.errors = [{
                                                                                instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/name",
                                                                                schemaPath: "#/definitions/TagDefinition/properties/name/pattern",
                                                                                keyword: "pattern",
                                                                                params: {
                                                                                    pattern: "^[ \\w]+$"
                                                                                },
                                                                                message: 'must match pattern "^[ \\w]+$"'
                                                                            }], !1
                                                                        }
                                                                        var ej = ez === y
                                                                    } else var ej = !0;
                                                                    if (ej) {
                                                                        if (void 0 !== ex.description) {
                                                                            var eD = ex.description,
                                                                                eE = y;
                                                                            if (y === eE) {
                                                                                if ("string" != typeof eD) return k.errors = [{
                                                                                    instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                        type: "string"
                                                                                    },
                                                                                    message: "must be string"
                                                                                }], !1;
                                                                                if (i(eD) > 200) return k.errors = [{
                                                                                    instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/maxLength",
                                                                                    keyword: "maxLength",
                                                                                    params: {
                                                                                        limit: 200
                                                                                    },
                                                                                    message: "must NOT have more than 200 characters"
                                                                                }], !1;
                                                                                if (1 > i(eD)) return k.errors = [{
                                                                                    instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/minLength",
                                                                                    keyword: "minLength",
                                                                                    params: {
                                                                                        limit: 1
                                                                                    },
                                                                                    message: "must NOT have fewer than 1 characters"
                                                                                }], !1;
                                                                                if (!p.test(eD)) return k.errors = [{
                                                                                    instancePath: s + "/tags/" + eb.replace(/~/g, "~0").replace(/\//g, "~1") + "/description",
                                                                                    schemaPath: "#/definitions/TagDefinition/properties/description/pattern",
                                                                                    keyword: "pattern",
                                                                                    params: {
                                                                                        pattern: "^[ \\w\\.,:]+$"
                                                                                    },
                                                                                    message: 'must match pattern "^[ \\w\\.,:]+$"'
                                                                                }], !1
                                                                            }
                                                                            var ej = eE === y
                                                                        } else var ej = !0
                                                                    }
                                                                }
                                                            }
                                                            if (eO !== y) break
                                                        }
                                                }
                                                var b = ed === y
                                            } else var b = !0;
                                            if (b) {
                                                if (void 0 !== e.logoURI) {
                                                    var eV = e.logoURI,
                                                        eA = y;
                                                    if (y === eA && y === eA) {
                                                        if ("string" != typeof eV) return k.errors = [{
                                                            instancePath: s + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        if (!f(eV)) return k.errors = [{
                                                            instancePath: s + "/logoURI",
                                                            schemaPath: "#/properties/logoURI/format",
                                                            keyword: "format",
                                                            params: {
                                                                format: "uri"
                                                            },
                                                            message: 'must match format "uri"'
                                                        }], !1
                                                    }
                                                    var b = eA === y
                                                } else var b = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return k.errors = c, 0 === y
            }
        },
        19497: function(e, a) {
            function t(e) {
                let a;
                let t = e.length,
                    r = 0,
                    s = 0;
                for (; s < t;) r++, (a = e.charCodeAt(s++)) >= 55296 && a <= 56319 && s < t && (64512 & (a = e.charCodeAt(s))) == 56320 && s++;
                return r
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = t, t.code = 'require("ajv/dist/runtime/ucs2length").default'
        },
        25016: function(e, a) {
            function t(e, a) {
                return {
                    validate: e,
                    compare: a
                }
            }
            a.u5 = void 0, a.u5 = {
                date: t(i, n),
                time: t(o, p),
                "date-time": t(function(e) {
                    let a = e.split(h);
                    return 2 === a.length && i(a[0]) && o(a[1], !0)
                }, f),
                duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
                uri: function(e) {
                    return d.test(e) && u.test(e)
                },
                "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
                email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
                regex: function(e) {
                    if (v.test(e)) return !1;
                    try {
                        return new RegExp(e), !0
                    } catch (e) {
                        return !1
                    }
                },
                uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
                byte: function(e) {
                    return c.lastIndex = 0, c.test(e)
                },
                int32: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e) && e <= l && e >= y
                    }
                },
                int64: {
                    type: "number",
                    validate: function(e) {
                        return Number.isInteger(e)
                    }
                },
                float: {
                    type: "number",
                    validate: g
                },
                double: {
                    type: "number",
                    validate: g
                },
                password: !0,
                binary: !0
            }, a.u5, t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, n), t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, p), t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, f), Object.keys(a.u5);
            let r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function i(e) {
                var a;
                let t = r.exec(e);
                if (!t) return !1;
                let i = +t[1],
                    n = +t[2],
                    m = +t[3];
                return n >= 1 && n <= 12 && m >= 1 && m <= (2 === n && (a = i) % 4 == 0 && (a % 100 != 0 || a % 400 == 0) ? 29 : s[n])
            }

            function n(e, a) {
                if (e && a) return e > a ? 1 : e < a ? -1 : 0
            }
            let m = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;

            function o(e, a) {
                let t = m.exec(e);
                if (!t) return !1;
                let r = +t[1],
                    s = +t[2],
                    i = +t[3],
                    n = t[5];
                return (r <= 23 && s <= 59 && i <= 59 || 23 === r && 59 === s && 60 === i) && (!a || "" !== n)
            }

            function p(e, a) {
                if (!(e && a)) return;
                let t = m.exec(e),
                    r = m.exec(a);
                if (t && r) return (e = t[1] + t[2] + t[3] + (t[4] || "")) > (a = r[1] + r[2] + r[3] + (r[4] || "")) ? 1 : e < a ? -1 : 0
            }
            let h = /t|\s/i;

            function f(e, a) {
                if (!(e && a)) return;
                let [t, r] = e.split(h), [s, i] = a.split(h), m = n(t, s);
                if (void 0 !== m) return m || p(r, i)
            }
            let d = /\/|:/,
                u = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                c = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,
                y = -2147483648,
                l = 2147483648 - 1;

            function g() {
                return !0
            }
            let v = /[^\\]\\Z/
        }
    }
]);