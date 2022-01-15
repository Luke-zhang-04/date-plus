/**
 * DatePlus v4.0.0-beta2 | A simple program to assist with date manipulation
 *
 * @license MIT
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 */
"use strict"
Object.defineProperty(exports, "t", {value: !0})
const e = (e) => ({ms: e % 1e3, seconds: (e - (e % 1e3)) / 1e3}),
    t = e,
    s = (e) => {
        const t = (e % 1e3) % 1e3,
            s = ((e - (e % 1e3)) / 1e3) % 60
        return {ms: t, seconds: s, minutes: (e - 1e3 * s - t) / 6e4}
    },
    r = s,
    o = (e) => {
        const t = (e % 1e3) % 1e3,
            s = ((e - (e % 1e3)) / 1e3) % 60,
            r = ((e - 1e3 * s - t) / 6e4) % 60
        return {ms: t, seconds: s, minutes: r, hours: (e - 1e3 * r * 60 - 1e3 * s - t) / 36e5}
    },
    p = o,
    x = (e) => {
        const t = (e % 1e3) % 1e3,
            s = ((e - (e % 1e3)) / 1e3) % 60,
            r = ((e - 1e3 * s - t) / 6e4) % 60,
            o = ((e - 1e3 * r * 60 - 1e3 * s - t) / 36e5) % 24
        return {
            ms: t,
            seconds: s,
            minutes: r,
            hours: o,
            days: (e - 1e3 * o * 60 * 60 - 1e3 * r * 60 - 1e3 * s - t) / 864e5,
        }
    },
    a = (e) => 1e3 * e,
    n = a,
    u = (e) => s(a(e)),
    d = u,
    h = (e) => o(a(e)),
    c = h,
    i = (e) => x(a(e)),
    y = i,
    m = (e) => 60 * e * 1e3,
    M = i,
    g = (e) => 60 * e,
    l = g,
    b = (e) => o(m(e)),
    D = b,
    f = (e) => x(m(e)),
    E = f,
    S = (e) => 60 * e * 60 * 1e3,
    N = S,
    P = (e) => 60 * e * 60,
    J = P,
    W = (e) => 60 * e,
    v = W,
    A = (e) => x(S(e)),
    F = A,
    H = (e) => 24 * e * 60 * 60,
    O = H,
    T = (e) => 24 * e * 60,
    _ = T,
    j = (e) => 24 * e,
    k = j,
    w = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    },
    Z = {
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
    q = {y: "year", m: "month", d: "day"},
    z = (e, t = "/") =>
        e
            .split(t)
            .map((e) => (e.length < 2 ? "0".concat(e) : e))
            .join(t),
    B = (e, t = "y:m:d", s = "/") => {
        const r = {
            m: (e.getMonth() + 1).toString(),
            d: e.getDate().toString(),
            y: e.getFullYear().toString(),
        }
        return t
            .split(":")
            .map((e) => r[e])
            .join(s)
    },
    C = (e, t) => -1 * Math.round((e.getTime() - t.getTime()) / 864e5),
    G = (e, t) => -1 * Math.round((e.getTime() - t.getTime()) / 36e5),
    I = (e, t) => -1 * Math.round((e.getTime() - t.getTime()) / 6e4),
    K = (e, t) => -1 * Math.round((e.getTime() - t.getTime()) / 1e3),
    L = (e, t) => -1 * Math.round(e.getTime() - t.getTime()),
    Q = (e, t, s = "about") => {
        const r = 2592e6,
            o = 31536e6,
            p = L(e, t)
        let x
        return p < 6e4
            ? ((x = Math.round(p / 1e3)),
              "".concat(x, " second").concat(1 === x ? "" : "s", " ago"))
            : p < 36e5
            ? ((x = Math.round(p / 6e4)),
              "".concat(x, " minute").concat(1 === x ? "" : "s", " ago"))
            : p < 864e5
            ? ((x = Math.round(p / 36e5)),
              "".concat(x, " hour").concat(1 === x ? "" : "s", " ago"))
            : p < r
            ? ((x = Math.round(p / 864e5)),
              ""
                  .concat(s, " ")
                  .concat(x, " day")
                  .concat(1 === x ? "" : "s", " ago"))
            : p < o
            ? ((x = Math.round(p / r)),
              ""
                  .concat(s, " ")
                  .concat(x, " month")
                  .concat(1 === x ? "" : "s", " ago"))
            : ((x = Math.round(p / o)),
              ""
                  .concat(s, " ")
                  .concat(x, " year")
                  .concat(1 === x ? "" : "s", " ago"))
    }
class R extends Date {
    addZeros(e = "/") {
        return z(this.formatDate(), e)
    }
    formatDate(e = "y:m:d", t = "/") {
        return B(this, e, t)
    }
    getWordDay() {
        return w[this.getDay()]
    }
    getWordMonth() {
        return Z[this.getMonth()]
    }
    getElapsedDays(e) {
        return C(this, e)
    }
    getElapsedHours(e) {
        return G(this, e)
    }
    getElapsedMinutes(e) {
        return I(this, e)
    }
    getElapsedSeconds(e) {
        return K(this, e)
    }
    getElapsedMs(e) {
        return L(this, e)
    }
    getElapsedString(e, t = "about") {
        return Q(this, e, t)
    }
}
;(exports.DatePlus = R),
    (exports.addZeros = z),
    (exports.daysReference = w),
    (exports.daysToHours = k),
    (exports.daysToHrs = j),
    (exports.daysToMins = T),
    (exports.daysToMinutes = _),
    (exports.daysToMs = (e) => 24 * e * 60 * 60 * 1e3),
    (exports.daysToSeconds = O),
    (exports.daysToSecs = H),
    (exports.default = R),
    (exports.formatDate = B),
    (exports.getDateValues = (e, t = "y:m:d", s = "auto") => {
        let r = "/"
        if ("auto" === s) {
            for (const t of e)
                if (isNaN(Number(t))) {
                    r = t
                    break
                }
        } else r = s
        const o = e.split(r),
            p = t.split(":"),
            x = {}
        for (let e = 0; e < 3; e++) {
            x[q[p[e]]] = Number(o[e])
        }
        return x
    }),
    (exports.getElapsedDays = C),
    (exports.getElapsedHours = G),
    (exports.getElapsedMinutes = I),
    (exports.getElapsedMs = L),
    (exports.getElapsedSeconds = K),
    (exports.getElapsedString = Q),
    (exports.getUtcTime = () => {
        const e = new Date()
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
    (exports.getWordDay = (e) => w[e]),
    (exports.getWordMonth = (e) => Z[e]),
    (exports.hoursToDays = F),
    (exports.hoursToMinutes = v),
    (exports.hoursToMs = N),
    (exports.hoursToSeconds = J),
    (exports.hrsToDays = A),
    (exports.hrsToMins = W),
    (exports.hrsToMs = S),
    (exports.hrsToSecs = P),
    (exports.minsToDays = f),
    (exports.minsToHrs = b),
    (exports.minsToMs = m),
    (exports.minsToSecs = g),
    (exports.minutesToDays = E),
    (exports.minutesToHours = D),
    (exports.minutesToMs = M),
    (exports.minutesToSeconds = l),
    (exports.monthsReference = Z),
    (exports.msToDays = x),
    (exports.msToHours = p),
    (exports.msToHrs = o),
    (exports.msToMins = s),
    (exports.msToMinutes = r),
    (exports.msToSeconds = t),
    (exports.msToSecs = e),
    (exports.oneDay = 864e5),
    (exports.oneHour = 36e5),
    (exports.oneMinute = 6e4),
    (exports.secondsToDays = y),
    (exports.secondsToHours = c),
    (exports.secondsToMinutes = d),
    (exports.secondsToMs = n),
    (exports.secsToDays = i),
    (exports.secsToHrs = h),
    (exports.secsToMins = u),
    (exports.secsToMs = a),
    (exports.utcToLocal = (e) => {
        const t = e.constructor(e.getTime())
        return t.setMinutes(e.getMinutes() - e.getTimezoneOffset()), t
    }),
    (exports.values = {hrsPerDay: 24, minsPerHr: 60, secsPerMin: 60, msPerSec: 1e3})
//# sourceMappingURL=dateplus.min.cjs.map
