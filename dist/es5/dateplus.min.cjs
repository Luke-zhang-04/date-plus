/**
 * DatePlus v4.0.0-beta1 | A simple program to assist with date manipulation
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */
"use strict"
Object.defineProperty(exports, "t", {value: !0})
var e = function (e) {
        return {ms: e % 1e3, seconds: (e - (e % 1e3)) / 1e3}
    },
    t = e,
    r = function (e) {
        var t = (e % 1e3) % 1e3,
            r = ((e - (e % 1e3)) / 1e3) % 60
        return {ms: t, seconds: r, minutes: (e - 1e3 * r - t) / 6e4}
    },
    n = r,
    o = function (e) {
        var t = (e % 1e3) % 1e3,
            r = ((e - (e % 1e3)) / 1e3) % 60,
            n = ((e - 1e3 * r - t) / 6e4) % 60
        return {ms: t, seconds: r, minutes: n, hours: (e - 1e3 * n * 60 - 1e3 * r - t) / 36e5}
    },
    u = o,
    i = function (e) {
        var t = (e % 1e3) % 1e3,
            r = ((e - (e % 1e3)) / 1e3) % 60,
            n = ((e - 1e3 * r - t) / 6e4) % 60,
            o = ((e - 1e3 * n * 60 - 1e3 * r - t) / 36e5) % 24
        return {
            ms: t,
            seconds: r,
            minutes: n,
            hours: o,
            days: (e - 1e3 * o * 60 * 60 - 1e3 * n * 60 - 1e3 * r - t) / 864e5,
        }
    },
    s = function (e) {
        return 1e3 * e
    },
    a = s,
    f = function (e) {
        return r(s(e))
    },
    c = f,
    p = function (e) {
        return o(s(e))
    },
    l = p,
    v = function (e) {
        return i(s(e))
    },
    x = v,
    y = function (e) {
        return 60 * e * 1e3
    },
    d = v,
    h = function (e) {
        return 60 * e
    },
    b = h,
    m = function (e) {
        return o(y(e))
    },
    M = m,
    g = function (e) {
        return i(y(e))
    },
    w = g,
    j = function (e) {
        return 60 * e * 60 * 1e3
    },
    O = j,
    S = function (e) {
        return 60 * e * 60
    },
    k = S,
    E = function (e) {
        return 60 * e
    },
    D = E,
    A = function (e) {
        return i(j(e))
    },
    R = A,
    T = function (e) {
        return 24 * e * 60 * 60
    },
    N = T,
    P = function (e) {
        return 24 * e * 60
    },
    F = P,
    I = function (e) {
        return 24 * e
    },
    J = I
function W(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
function B(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r]
        ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
    }
}
function C(e) {
    return (C = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          })(e)
}
function H(e, t) {
    return (H =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e
        })(e, t)
}
function _() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
    if (Reflect.construct.sham) return !1
    if ("function" == typeof Proxy) return !0
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
    } catch (e) {
        return !1
    }
}
function U(e, t, r) {
    return (U = _()
        ? Reflect.construct
        : function (e, t, r) {
              var n = [null]
              n.push.apply(n, t)
              var o = new (Function.bind.apply(e, n))()
              return r && H(o, r.prototype), o
          }).apply(null, arguments)
}
function Z(e) {
    var t = "function" == typeof Map ? new Map() : void 0
    return (Z = function (e) {
        if (null === e || ((r = e), -1 === Function.toString.call(r).indexOf("[native code]")))
            return e
        var r
        if ("function" != typeof e)
            throw new TypeError("Super expression must either be null or a function")
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e)
            t.set(e, n)
        }
        function n() {
            return U(e, arguments, C(this).constructor)
        }
        return (
            (n.prototype = Object.create(e.prototype, {
                constructor: {value: n, enumerable: !1, writable: !0, configurable: !0},
            })),
            H(n, e)
        )
    })(e)
}
function $(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return e
}
function q(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t) ? $(e) : t
}
function z(e, t) {
    ;(null == t || t > e.length) && (t = e.length)
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
    return n
}
function G(e, t) {
    var r = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]
    if (!r) {
        if (
            Array.isArray(e) ||
            (r = (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return z(e, t)
                    var r = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                        "Object" === r && e.constructor && (r = e.constructor.name),
                        "Map" === r || "Set" === r
                            ? Array.from(e)
                            : "Arguments" === r ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                            ? z(e, t)
                            : void 0
                    )
                }
            })(e)) ||
            (t && e && "number" == typeof e.length)
        ) {
            r && (e = r)
            var n = 0,
                o = function () {}
            return {
                s: o,
                n: function () {
                    return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
                },
                e: function (e) {
                    throw e
                },
                f: o,
            }
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        )
    }
    var u,
        i = !0,
        s = !1
    return {
        s: function () {
            r = r.call(e)
        },
        n: function () {
            var e = r.next()
            return (i = e.done), e
        },
        e: function (e) {
            ;(s = !0), (u = e)
        },
        f: function () {
            try {
                i || null == r.return || r.return()
            } finally {
                if (s) throw u
            }
        },
    }
}
var K = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    },
    L = {
        0: "January",
        1: "Feburary",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    },
    Q = 864e5,
    V = {y: "year", m: "month", d: "day"},
    X = function (e) {
        for (
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                r = "",
                n = 0;
            n < 2;
            n++
        )
            e.split(t)[n].length < 2
                ? (r += "0".concat(e.split(t)[n]).concat(t))
                : (r += "".concat(e.split(t)[n]).concat(t))
        return (
            e.split(t)[2].length < 2 ? (r += "0".concat(e.split(t)[2])) : (r += e.split(t)[2]), r
        )
    },
    Y = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
            r = e.getMonth().toString(),
            n = e.getDate().toString(),
            o = e.getFullYear().toString()
        return [o, r, n].join(t)
    },
    ee = function (e, t) {
        return -1 * Math.round((e.getTime() - t.getTime()) / Q)
    },
    te = function (e, t) {
        return -1 * Math.round((e.getTime() - t.getTime()) / 36e5)
    },
    re = function (e, t) {
        return -1 * Math.round((e.getTime() - t.getTime()) / 6e4)
    },
    ne = function (e, t) {
        return -1 * Math.round((e.getTime() - t.getTime()) / 1e3)
    },
    oe = function (e, t) {
        return -1 * Math.round(e.getTime() - t.getTime())
    },
    ue = function (e, t) {
        var r,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "about",
            o = 30,
            u = 365,
            i = Q * o,
            s = Q * u,
            a = oe(e, t)
        return a < 6e4
            ? ((r = Math.round(a / 1e3)),
              "".concat(r, " second").concat(1 === r ? "" : "s", " ago"))
            : a < 36e5
            ? ((r = Math.round(a / 6e4)),
              "".concat(r, " minute").concat(1 === r ? "" : "s", " ago"))
            : a < Q
            ? ((r = Math.round(a / 36e5)),
              "".concat(r, " hour").concat(1 === r ? "" : "s", " ago"))
            : a < i
            ? ((r = Math.round(a / Q)),
              ""
                  .concat(n, " ")
                  .concat(r, " day")
                  .concat(1 === r ? "" : "s", " ago"))
            : a < s
            ? ((r = Math.round(a / i)),
              ""
                  .concat(n, " ")
                  .concat(r, " month")
                  .concat(1 === r ? "" : "s", " ago"))
            : ((r = Math.round(a / s)),
              ""
                  .concat(n, " ")
                  .concat(r, " year")
                  .concat(1 === r ? "" : "s", " ago"))
    },
    ie = (function (e) {
        !(function (e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function")
            ;(e.prototype = Object.create(t && t.prototype, {
                constructor: {value: e, writable: !0, configurable: !0},
            })),
                t && H(e, t)
        })(s, Z(Date))
        var t,
            r,
            n,
            o,
            u,
            i =
                ((t = s),
                (r = _()),
                function () {
                    var e,
                        n = C(t)
                    if (r) {
                        var o = C(this).constructor
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments)
                    return q(this, e)
                })
        function s() {
            var e
            return (
                W(this, s),
                ((e = i.apply(this, arguments)).getElapsedString = function (t) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "about"
                    return ue($(e), t, r)
                }),
                e
            )
        }
        return (
            (n = s),
            (o = [
                {
                    key: "addZeros",
                    value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
                        return X(this.formatDate(), e)
                    },
                },
                {
                    key: "formatDate",
                    value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
                        return Y(this, e)
                    },
                },
                {
                    key: "getWordDay",
                    value: function () {
                        return K[this.getDay()]
                    },
                },
                {
                    key: "getWordMonth",
                    value: function () {
                        return L[this.getMonth()]
                    },
                },
                {
                    key: "getElapsedDays",
                    value: function (e) {
                        return ee(this, e)
                    },
                },
                {
                    key: "getElapsedHours",
                    value: function (e) {
                        return te(this, e)
                    },
                },
                {
                    key: "getElapsedMinutes",
                    value: function (e) {
                        return re(this, e)
                    },
                },
                {
                    key: "getElapsedSeconds",
                    value: function (e) {
                        return ne(this, e)
                    },
                },
                {
                    key: "getElapsedMs",
                    value: function (e) {
                        return oe(this, e)
                    },
                },
            ]) && B(n.prototype, o),
            u && B(n, u),
            s
        )
    })()
;(exports.DatePlus = ie),
    (exports.addZeros = X),
    (exports.daysReference = K),
    (exports.daysToHours = J),
    (exports.daysToHrs = I),
    (exports.daysToMins = P),
    (exports.daysToMinutes = F),
    (exports.daysToMs = function (e) {
        return 24 * e * 60 * 60 * 1e3
    }),
    (exports.daysToSeconds = N),
    (exports.daysToSecs = T),
    (exports.default = ie),
    (exports.formatDate = Y),
    (exports.getDateValues = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y:m:d",
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "auto",
            n = "/"
        if ("auto" === r) {
            var o,
                u = G(e)
            try {
                for (u.s(); !(o = u.n()).done; ) {
                    var i = o.value
                    if (isNaN(Number(i))) {
                        n = i
                        break
                    }
                }
            } catch (e) {
                u.e(e)
            } finally {
                u.f()
            }
        } else n = r
        for (var s = e.split(n), a = t.split(":"), f = {}, c = 0; c < 3; c++) {
            var p = V[a[c]]
            f[p] = Number(s[c])
        }
        return f
    }),
    (exports.getElapsedDays = ee),
    (exports.getElapsedHours = te),
    (exports.getElapsedMinutes = re),
    (exports.getElapsedMs = oe),
    (exports.getElapsedSeconds = ne),
    (exports.getElapsedString = ue),
    (exports.getUtcTime = function () {
        var e = new Date()
        return Date.UTC(
            e.getUTCFullYear(),
            e.getUTCMonth(),
            e.getUTCDate(),
            e.getUTCHours(),
            e.getUTCMinutes(),
            e.getUTCSeconds(),
            e.getUTCMilliseconds(),
        )
    }),
    (exports.getWordDay = function (e) {
        return K[e]
    }),
    (exports.getWordMonth = function (e) {
        return L[e]
    }),
    (exports.hoursToDays = R),
    (exports.hoursToMinutes = D),
    (exports.hoursToMs = O),
    (exports.hoursToSeconds = k),
    (exports.hrsToDays = A),
    (exports.hrsToMins = E),
    (exports.hrsToMs = j),
    (exports.hrsToSecs = S),
    (exports.minsToDays = g),
    (exports.minsToHrs = m),
    (exports.minsToMs = y),
    (exports.minsToSecs = h),
    (exports.minutesToDays = w),
    (exports.minutesToHours = M),
    (exports.minutesToMs = d),
    (exports.minutesToSeconds = b),
    (exports.monthsReference = L),
    (exports.msToDays = i),
    (exports.msToHours = u),
    (exports.msToHrs = o),
    (exports.msToMins = r),
    (exports.msToMinutes = n),
    (exports.msToSeconds = t),
    (exports.msToSecs = e),
    (exports.oneDay = Q),
    (exports.oneHour = 36e5),
    (exports.oneMinute = 6e4),
    (exports.secondsToDays = x),
    (exports.secondsToHours = l),
    (exports.secondsToMinutes = c),
    (exports.secondsToMs = a),
    (exports.secsToDays = v),
    (exports.secsToHrs = p),
    (exports.secsToMins = f),
    (exports.secsToMs = s),
    (exports.utcToLocal = function (e) {
        var t = e.constructor(e.getTime())
        return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t
    }),
    (exports.values = {hrsPerDay: 24, minsPerHr: 60, secsPerMin: 60, msPerSec: 1e3})
//# sourceMappingURL=dateplus.min.cjs.map
