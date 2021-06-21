/**
 * DatePlus v3.1.0 | A simple program to assist with date manipulation
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */
"use strict"
function n(n, r) {
    if (!(n instanceof r)) throw new TypeError("Cannot call a class as a function")
}
function r(n, r) {
    if ("function" != typeof r && null !== r)
        throw new TypeError("Super expression must either be null or a function")
    ;(n.prototype = Object.create(r && r.prototype, {
        constructor: {value: n, writable: !0, configurable: !0},
    })),
        r && t(n, r)
}
function e(n) {
    return (e = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n)
          })(n)
}
function t(n, r) {
    return (t =
        Object.setPrototypeOf ||
        function (n, r) {
            return (n.__proto__ = r), n
        })(n, r)
}
function u() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
    if (Reflect.construct.sham) return !1
    if ("function" == typeof Proxy) return !0
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
    } catch (n) {
        return !1
    }
}
function o(n, r, e) {
    return (o = u()
        ? Reflect.construct
        : function (n, r, e) {
              var u = [null]
              u.push.apply(u, r)
              var o = new (Function.bind.apply(n, u))()
              return e && t(o, e.prototype), o
          }).apply(null, arguments)
}
function i(n) {
    var r = "function" == typeof Map ? new Map() : void 0
    return (i = function (n) {
        if (null === n || ((u = n), -1 === Function.toString.call(u).indexOf("[native code]")))
            return n
        var u
        if ("function" != typeof n)
            throw new TypeError("Super expression must either be null or a function")
        if (void 0 !== r) {
            if (r.has(n)) return r.get(n)
            r.set(n, i)
        }
        function i() {
            return o(n, arguments, e(this).constructor)
        }
        return (
            (i.prototype = Object.create(n.prototype, {
                constructor: {value: i, enumerable: !1, writable: !0, configurable: !0},
            })),
            t(i, n)
        )
    })(n)
}
function f(n) {
    if (void 0 === n)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    return n
}
function c(n, r) {
    return !r || ("object" != typeof r && "function" != typeof r) ? f(n) : r
}
function a(n) {
    var r = u()
    return function () {
        var t,
            u = e(n)
        if (r) {
            var o = e(this).constructor
            t = Reflect.construct(u, arguments, o)
        } else t = u.apply(this, arguments)
        return c(this, t)
    }
}
function s(n, r) {
    ;(null == r || r > n.length) && (r = n.length)
    for (var e = 0, t = new Array(r); e < r; e++) t[e] = n[e]
    return t
}
function l(n, r) {
    var e
    if ("undefined" == typeof Symbol || null == n[Symbol.iterator]) {
        if (
            Array.isArray(n) ||
            (e = (function (n, r) {
                if (n) {
                    if ("string" == typeof n) return s(n, r)
                    var e = Object.prototype.toString.call(n).slice(8, -1)
                    return (
                        "Object" === e && n.constructor && (e = n.constructor.name),
                        "Map" === e || "Set" === e
                            ? Array.from(n)
                            : "Arguments" === e ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                            ? s(n, r)
                            : void 0
                    )
                }
            })(n)) ||
            (r && n && "number" == typeof n.length)
        ) {
            e && (n = e)
            var t = 0,
                u = function () {}
            return {
                s: u,
                n: function () {
                    return t >= n.length ? {done: !0} : {done: !1, value: n[t++]}
                },
                e: function (n) {
                    throw n
                },
                f: u,
            }
        }
        throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        )
    }
    var o,
        i = !0,
        f = !1
    return {
        s: function () {
            e = n[Symbol.iterator]()
        },
        n: function () {
            var n = e.next()
            return (i = n.done), n
        },
        e: function (n) {
            ;(f = !0), (o = n)
        },
        f: function () {
            try {
                i || null == e.return || e.return()
            } finally {
                if (f) throw o
            }
        },
    }
}
Object.defineProperty(exports, "t", {value: !0})
var v = (function (e) {
    r(u, i(Date))
    var t = a(u)
    function u() {
        return n(this, u), t.apply(this, arguments)
    }
    return u
})()
;(v.msToSecs = function (n) {
    return {ms: n % 1e3, seconds: (n - (n % 1e3)) / 1e3}
}),
    (v.msToMins = function (n) {
        var r = (n % 1e3) % 1e3,
            e = ((n - (n % 1e3)) / 1e3) % 60
        return {ms: r, seconds: e, minutes: (n - 1e3 * e - r) / 6e4}
    }),
    (v.msToHrs = function (n) {
        var r = (n % 1e3) % 1e3,
            e = ((n - (n % 1e3)) / 1e3) % 60,
            t = ((n - 1e3 * e - r) / 6e4) % 60
        return {ms: r, seconds: e, minutes: t, hours: (n - 1e3 * t * 60 - 1e3 * e - r) / 36e5}
    }),
    (v.msToDays = function (n) {
        var r = (n % 1e3) % 1e3,
            e = ((n - (n % 1e3)) / 1e3) % 60,
            t = ((n - 1e3 * e - r) / 6e4) % 60,
            u = ((n - 1e3 * t * 60 - 1e3 * e - r) / 36e5) % 24
        return {
            ms: r,
            seconds: e,
            minutes: t,
            hours: u,
            days: (n - 1e3 * u * 60 * 60 - 1e3 * t * 60 - 1e3 * e - r) / 864e5,
        }
    }),
    (v.secsToMs = function (n) {
        return 1e3 * n
    }),
    (v.secsToMins = function (n) {
        return v.msToMins(v.secsToMs(n))
    }),
    (v.secsToHrs = function (n) {
        return v.msToHrs(v.secsToMs(n))
    }),
    (v.secsToDays = function (n) {
        return v.msToDays(v.secsToMs(n))
    }),
    (v.minsToMs = function (n) {
        return 60 * n * 1e3
    }),
    (v.minsToSecs = function (n) {
        return 60 * n
    }),
    (v.minsToHrs = function (n) {
        return v.msToHrs(v.minsToMs(n))
    }),
    (v.minsToDays = function (n) {
        return v.msToDays(v.minsToMs(n))
    }),
    (v.hrsToMs = function (n) {
        return 60 * n * 60 * 1e3
    }),
    (v.hrsToSecs = function (n) {
        return 60 * n * 60
    }),
    (v.hrsToMins = function (n) {
        return 60 * n
    }),
    (v.hrsToDays = function (n) {
        return v.msToDays(v.hrsToMs(n))
    }),
    (v.daysToMs = function (n) {
        return 24 * n * 60 * 60 * 1e3
    }),
    (v.daysToSecs = function (n) {
        return 24 * n * 60 * 60
    }),
    (v.daysToMins = function (n) {
        return 24 * n * 60
    }),
    (v.daysToHrs = function (n) {
        return 24 * n
    })
var y = (function (e) {
    r(u, v)
    var t = a(u)
    function u() {
        var r
        return (
            n(this, u),
            ((r = t.apply(this, arguments)).getElapsedDays = function (n) {
                return -1 * Math.round((r.getTime() - n.getTime()) / u.u)
            }),
            r
        )
    }
    return u
})()
;(y.u = 864e5),
    (y.getElapsedDays = function (n, r) {
        return -1 * Math.round((n.getTime() - r.getTime()) / y.u)
    })
var d = (function (e) {
    r(u, y)
    var t = a(u)
    function u() {
        return n(this, u), t.apply(this, arguments)
    }
    return u
})()
;(d.msToSeconds = d.msToSecs),
    (d.msToMinutes = d.msToMins),
    (d.msToHours = d.msToHrs),
    (d.secondsToMs = d.secsToMs),
    (d.secondsToMinutes = d.secsToMins),
    (d.secondsToHours = d.secsToHrs),
    (d.secondsToDays = d.secsToDays),
    (d.minutesToMs = d.minsToMs),
    (d.minutesToSeconds = d.minsToSecs),
    (d.minutesToHours = d.minsToHrs),
    (d.minutesToDays = d.minsToDays),
    (d.hoursToMs = d.hrsToMs),
    (d.hoursToSeconds = d.hrsToSecs),
    (d.hoursToMinutes = d.hrsToMins),
    (d.hoursToDays = d.hrsToDays),
    (d.daysToSeconds = d.daysToSecs),
    (d.daysToMinutes = d.daysToMins),
    (d.daysToHours = d.daysToHrs)
var b = (function (e) {
    r(u, d)
    var t = a(u)
    function u() {
        var r
        return (
            n(this, u),
            ((r = t.apply(this, arguments)).addZeros = function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
                return u.addZeros(r.formatDate(), n)
            }),
            (r.formatDate = function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/"
                return u.formatDate(f(r), n)
            }),
            (r.getWordDay = function () {
                return u.o[r.getDay()]
            }),
            (r.getWordMonth = function () {
                return u.i[r.getMonth()]
            }),
            r
        )
    }
    return u
})()
;(b.o = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}),
    (b.l = {y: "year", m: "month", d: "day"}),
    (b.i = {
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
    }),
    (b.addZeros = function (n) {
        for (
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                e = "",
                t = 0;
            t < 2;
            t++
        )
            n.split(r)[t].length < 2
                ? (e += "0".concat(n.split(r)[t]).concat(r))
                : (e += "".concat(n.split(r)[t]).concat(r))
        return (
            n.split(r)[2].length < 2 ? (e += "0".concat(n.split(r)[2])) : (e += n.split(r)[2]), e
        )
    }),
    (b.formatDate = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
            e = n.getMonth().toString(),
            t = n.getDate().toString(),
            u = n.getFullYear().toString()
        return [u, e, t].join(r)
    }),
    (b.getDateValues = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y:m:d",
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "auto",
            t = "/"
        if ("auto" === e) {
            var u,
                o = l(n)
            try {
                for (o.s(); !(u = o.n()).done; ) {
                    var i = u.value
                    if (isNaN(Number(i))) {
                        t = i
                        break
                    }
                }
            } catch (n) {
                o.e(n)
            } finally {
                o.f()
            }
        } else t = e
        for (var f = n.split(t), c = r.split(":"), a = {}, s = 0; s < 3; s++) {
            var v = b.l[c[s]]
            a[v] = Number(f[s])
        }
        return a
    }),
    (b.getWordDay = function (n) {
        return b.o[n]
    }),
    (b.getWordMonth = function (n) {
        return b.i[n]
    }),
    (exports.DatePlus = b),
    (exports.default = b)
//# sourceMappingURL=dateplus.min.cjs.map
