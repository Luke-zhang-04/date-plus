/* dateplus v2.0.3 | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */


function _wrapNativeSuper (Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined 

    _wrapNativeSuper = function _wrapNativeSuper (Class) {
        if (Class === null || !_isNativeFunction(Class)) {
            return Class 
        } if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function") 
        } if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) {
                return _cache.get(Class) 
            } _cache.set(Class, Wrapper) 
        } function Wrapper () {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor) 
        } Wrapper.prototype = Object.create(Class.prototype, {constructor: {value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true}}) 

        return _setPrototypeOf(Wrapper, Class) 
    } 

    return _wrapNativeSuper(Class) 
}

function _construct (Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct 
    } else {
        _construct = function _construct (Parent, args, Class) {
            var a = [null] 

            a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a), 
                instance = new Constructor() 

            if (Class) {
                _setPrototypeOf(instance, Class.prototype) 
            } 

            return instance 
        } 
    } 

    return _construct.apply(null, arguments) 
}

function _isNativeFunction (fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1 
}

function _createForOfIteratorHelper (o, allowArrayLike) {
    var it 

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) {
                o = it 
            } var i = 0, 
                F = function F () {} 

            return {s: F,
                n: function n () {
                    if (i >= o.length) {
                        return {done: true} 
                    } 

                    return {done: false,
                        value: o[i++]} 
                },
                e: function e (_e) {
                    throw _e 
                },
                f: F} 
        } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") 
    } var normalCompletion = true, 
        didErr = false, 
        err 

    return {s: function s () {
        it = o[Symbol.iterator]() 
    },
    n: function n () {
        var step = it.next() 

        normalCompletion = step.done 

        return step 
    },
    e: function e (_e2) {
        didErr = true; err = _e2 
    },
    f: function f () {
        try {
            if (!normalCompletion && it.return != null) {
                it.return() 
            } 
        } finally {
            if (didErr) {
                throw err 
            } 
        } 
    }} 
}

function _unsupportedIterableToArray (o, minLen) {
    if (!o) {
        return 
    } if (typeof o === "string") {
        return _arrayLikeToArray(o, minLen) 
    } var n = Object.prototype.toString.call(o).slice(8, -1) 

    if (n === "Object" && o.constructor) {
        n = o.constructor.name 
    } if (n === "Map" || n === "Set") {
        return Array.from(o) 
    } if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) {
        return _arrayLikeToArray(o, minLen) 
    } 
}

function _arrayLikeToArray (arr, len) {
    if (len == null || len > arr.length) {
        len = arr.length 
    } for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i] 
    } 

    return arr2 
}

function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function") 
    } 
}

function _inherits (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function") 
    } subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass,
        writable: true,
        configurable: true}}); if (superClass) {
        _setPrototypeOf(subClass, superClass) 
    } 
}

function _setPrototypeOf (o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) {
        o.__proto__ = p 

        return o 
    } 

    return _setPrototypeOf(o, p) 
}

function _createSuper (Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct() 

    return function _createSuperInternal () {
        var Super = _getPrototypeOf(Derived), 
            result 

        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor 

            result = Reflect.construct(Super, arguments, NewTarget) 
        } else {
            result = Super.apply(this, arguments) 
        } 

        return _possibleConstructorReturn(this, result) 
    } 
}

function _possibleConstructorReturn (self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call 
    } 

    return _assertThisInitialized(self) 
}

function _assertThisInitialized (self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called") 
    } 

    return self 
}

function _isNativeReflectConstruct () {
    if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false 
    } if (Reflect.construct.sham) {
        return false 
    } if (typeof Proxy === "function") {
        return true 
    } try {
        Date.prototype.toString.call(Reflect.construct(Date, [], () => {})) 

        return true 
    } catch (e) {
        return false 
    } 
}

function _getPrototypeOf (o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) {
        return o.__proto__ || Object.getPrototypeOf(o) 
    } 

    return _getPrototypeOf(o) 
}

function _typeof (obj) {
    "@babel/helpers - typeof"

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof (obj) {
            return typeof obj 
        } 
    } else {
        _typeof = function _typeof (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj 
        } 
    } 

    return _typeof(obj) 
}

var DatePlus = (function (modules) {
    var installedModules = {}

    function __webpack_require__ (moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        }

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        module.l = true
        
        return module.exports
    }

    __webpack_require__.m = modules
    __webpack_require__.c = installedModules

    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            })
        }
    }

    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            })
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
    }

    __webpack_require__.t = function (value, mode) {
        if (mode & 1) {
            value = __webpack_require__(value) 
        }
        if (mode & 8) {
            return value 
        }
        if (mode & 4 && _typeof(value) === "object" && value && value.__esModule) {
            return value 
        }
        var ns = Object.create(null)

        __webpack_require__.r(ns)

        Object.defineProperty(ns, "default", {
            enumerable: true,
            value
        })
        if (mode & 2 && typeof value !== "string") {
            for (var key in value) {
                __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key))
            } 
        }
        
        return ns
    }

    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault () {
            return module.default
        } : function getModuleExports () {
            return module
        }

        __webpack_require__.d(getter, "a", getter)

        return getter
    }

    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }

    __webpack_require__.p = ""
    
    return __webpack_require__(__webpack_require__.s = 0)
}([
    function (module, exports, __webpack_require__) {
        

        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            }
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        var alias_1 = __importDefault(__webpack_require__(1)),

            /**
             * Dateplus class and namespace
             * @classdesc A class and namespace program to assist with date manipulation
             * @class
             * @namespace
             */
            DatePlus = (function (_alias_1$default) {
                _inherits(DatePlus, _alias_1$default)

                var _super = _createSuper(DatePlus)

                function DatePlus () {
                    var _this

                    _classCallCheck(this, DatePlus)

                    _this = _super.apply(this, arguments)

                    /**
                     * Add's 0s to the instantiated (e.g 2020/4/3 => 2020/04/03)
                     * @public
                     * @instance
                     * @param {string} seperator - char the date is seperatred by
                     * @returns {string} - date with zeros
                     */
                    _this.addZeros = function () {
                        var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/"

        
                        return DatePlus.addZeros(_this.formatDate(), seperator)
                    }

                    /**
                     * Format instantiated into a string in the form YYYY{seperator}MM{seperator}DD
                     * @public
                     * @instance
                     * @param {string} seperator - char to seperate date with
                     * @returns {string} formatted date
                     */
                    _this.formatDate = function () {
                        var seperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/"

        
                        return DatePlus.formatDate(_assertThisInitialized(_this), seperator)
                    }

                    /**
                     * Gets instantiated day of week in word form (e.g 0 => "Sunday")
                     * @public
                     * @instance
                     * @returns {string} stringed day of week
                     */
                    _this.getWordDay = function () {
                        return DatePlus._daysReference[_this.getDay()]
                    }

                    /**
                     * Gets instantiated month in word form (e.g 0 => "January")
                     * @public
                     * @instance
                     * @returns {string} stringed worded month
                     */
                    _this.getWordMonth = function () {
                        return DatePlus._monthsReference[_this.getMonth()]
                    }

                    return _this
                }

                return DatePlus
            }(alias_1.default))

        exports.default = DatePlus

        /**
         * Reference to days of the week, zero indexed
         * @private
         * @static
         * @type {Object.<number, string>}
         */
        DatePlus._daysReference = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }

        /**
         * Reference to months of a year, zero indexed
         * @private
         * @static
         * @type {Object.<number, string>}
         */
        DatePlus._keysReference = {
            y: "year",
            m: "month",
            d: "day"
        }

        /**
         * Reference to months of a year, zero indexed
         * @private
         * @static
         * @type {Object.<number, string>}
         */
        DatePlus._monthsReference = {
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
            11: "December"
        }

        /**
         * Add's 0s to date (e.g 2020/4/3 => 2020/04/03)
         * @public
         * @static
         * @param {string} date - string date to format
         * @param {string} seperator - char the date is seperatred by
         * @returns {string} - date with zeros
         */
        DatePlus.addZeros = function (date) {
            var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/",
                newDate = ""

            for (var index = 0; index < 2; index++) {
                if (date.split(seperator)[index].length < 2) {
                    newDate += "0".concat(date.split(seperator)[index]).concat(seperator)
                } else {
                    newDate += "".concat(date.split(seperator)[index]).concat(seperator)
                }
            }

            if (date.split(seperator)[2].length < 2) {
                newDate += "0".concat(date.split(seperator)[2])
            } else {
                newDate += date.split(seperator)[2]
            }

            return newDate
        }

        /**
         * Format date into a string in the form YYYY{seperator}MM{seperator}DD
         * @public
         * @static
         * @param {Date | DatePlus} date - date object to format
         * @param {string} seperator - string to seperate date values with
         * @returns {string} formatted date
         */
        DatePlus.formatDate = function (date) {
            var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/",
                month = date.getMonth().toString(),
                day = date.getDate().toString(),
                year = date.getFullYear().toString()

    
            return [year, month, day].join(seperator)
        }

        /**
         * Gets date values and outputs an object
         * @public
         * @static
         * @param {string} date - date to extract values from, months zero indexed
         * @param {DateFormat}format - format of string date
         * @param {string} seperator - Seperator the date works with; leave auto for auto detection, limited to 1 char
         * @returns {Object<string, number>} object with all values
         */
        DatePlus.getDateValues = function (date) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "y:m:d",
                seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "auto",
                _seperator = "/"

            if (seperator === "auto") {
                var _iterator = _createForOfIteratorHelper(date),
                    _step

                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var letter = _step.value

                        if (isNaN(Number(letter))) {
                            _seperator = letter
                            break
                        }
                    }
                } catch (err) {
                    _iterator.e(err)
                } finally {
                    _iterator.f()
                }
            } else {
                _seperator = seperator
            }

            var dateData = date.split(_seperator),
                dateFormat = format.split(":"),
                output = {}

            for (var index = 0; index < 3; index++) {
                var key = DatePlus._keysReference[dateFormat[index]]

                output[key] = Number(dateData[index])
            }

            return output
        }

        /**
         * Converts numerical day of week into word form (e.g 0 => "Sunday")
         * @public
         * @static
         * @param {number} numerical - numerical day of week, 0 indexed (0-6)
         * @returns {string} stringed day of week
         */
        DatePlus.getWordDay = function (numerical) {
            return DatePlus._daysReference[numerical]
        }

        /**
         * Converts numerical month into word form (e.g 0 => "January")
         * @public
         * @static
         * @param {number} numerical - numerical day of week, 0 indexed (0-11)
         * @returns {string} stringed worded month
         */
        DatePlus.getWordMonth = function (numerical) {
            return DatePlus._monthsReference[numerical]
        }
    }, function (module, exports, __webpack_require__) {
        

        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            }
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        /**
         * DatePlus
         * A simple program to assist with date manipulation
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
<<<<<<< HEAD
         * @version 2.0.3
=======
         * @version 2.0.2
>>>>>>> 42c62df47374612a30dbae6351bbb965563095db
         * @exports Alias
         * @file defines alias static methods from conversion.ts with longer names
         */
        var elapse_1 = __importDefault(__webpack_require__(2)),

            Alias = (function (_elapse_1$default) {
                _inherits(Alias, _elapse_1$default)

                var _super2 = _createSuper(Alias)

                function Alias () {
                    _classCallCheck(this, Alias)

                    return _super2.apply(this, arguments)
                }

                return Alias
            }(elapse_1.default))

        exports.default = Alias

        /**
         * Converts milliseconds to seconds with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with seconds and milliseconds
         */
        Alias.msToSeconds = Alias.msToSecs

        /**
         * Converts milliseconds to minutes with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
         */
        Alias.msToMinutes = Alias.msToMins

        /**
         * Converts milliseconds to hours with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
         */
        Alias.msToHours = Alias.msToHrs

        /**
         * Converts seconds to milliseconds
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {number} converted milliseconds
         */
        Alias.secondsToMs = Alias.secsToMs

        /**
         * Converts seconds to minutes with remainders
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {Object.<string, number>} converted minutes
         */
        Alias.secondsToMinutes = Alias.secsToMins

        /**
         * Converts seconds to hours with remainders
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {Object.<string, number>} converted hours
         */
        Alias.secondsToHours = Alias.secsToHrs

        /**
         * Converts seconds to days with remainders
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {Object.<string, number>} converted days
         */
        Alias.secondsToDays = Alias.secsToDays

        /**
         * Converts hours to milliseconds
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {number} converted milliseconds
         */
        Alias.minutesToMs = Alias.minsToMs

        /**
         * Converts hours to seconds
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {number} converted seconds
         */
        Alias.minutesToSeconds = Alias.minsToSecs

        /**
         * Converts minutes to hours with remainders
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {Object.<string, number>} converted hours
         */
        Alias.minutesToHours = Alias.minsToHrs

        /**
         * Converts minutes to days with remainders
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {Object.<string, number>} converted days
         */
        Alias.minutesToDays = Alias.minsToDays

        /**
         * Converts hours to milliseconds
         * @public
         * @static
         * @param {number} hours - hours to convert
         * @returns {number} converted milliseconds
         */
        Alias.hoursToMs = Alias.hrsToMs

        /**
         * Converts hours to seconds
         * @public
         * @static
         * @param {number} hours - hours to convert
         * @returns {number} converted seconds
         */
        Alias.hoursToSeconds = Alias.hrsToSecs

        /**
         * Converts hours to minutes
         * @public
         * @static
         * @param {number} hours - hours to convert
         * @returns {number} converted minutes
         */
        Alias.hoursToMinutes = Alias.hrsToMins

        /**
         * Converts hours to days with remainders
         * @public
         * @static
         * @param {number} hrs - hours to convert
         * @returns {Object.<string, number>} converted days
         */
        Alias.hoursToDays = Alias.hrsToDays

        /**
         * Converts days to seconds
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted seconds
         */
        Alias.daysToSeconds = Alias.daysToSecs

        /**
         * Converts days to minutes
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted minutes
         */
        Alias.daysToMinutes = Alias.daysToMins

        /**
         * Converts days to hours
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted hours
         */
        Alias.daysToHours = Alias.daysToHrs
    }, function (module, exports, __webpack_require__) {
        

        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            }
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        /**
         * DatePlus
         * A simple program to assist with date manipulation
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
<<<<<<< HEAD
         * @version 2.0.3
=======
         * @version 2.0.2
>>>>>>> 42c62df47374612a30dbae6351bbb965563095db
         * @exports Elapse
         * @file defines Elapse class for elapsed
         */
        var conversions_1 = __importDefault(__webpack_require__(3)),

            hrsPerDay = 24,
            minsPerHr = 60,
            secsPerMin = 60,
            msPerSec = 1000,

            /**
             * Elapse class and namespace
             * @classdesc A class and namespace program to find elapsed times
             * @class
             * @namespace
             */
            Elapse = (function (_conversions_1$defaul) {
                _inherits(Elapse, _conversions_1$defaul)

                var _super3 = _createSuper(Elapse)

                function Elapse () {
                    var _this2

                    _classCallCheck(this, Elapse)

                    _this2 = _super3.apply(this, arguments)

                    /**
                     * Calculates number of elapsed days between instantiated date and dae
                     * @public
                     * @instance
                     * @param {Date | DatePlus} date - ending date object to calculate
                     * @returns {number} - number of elapsed days
                     */
                    _this2.getElapsedDays = function (date) {
                        return Math.round((_this2.getTime() - date.getTime()) / Elapse._oneDay) * -1
                    }

                    return _this2
                }

                return Elapse
            }(conversions_1.default))

        exports.default = Elapse

        /**
         * Gets milliseconds per day
         * @private
         * @static
         * @type {number}
         */
        Elapse._oneDay = hrsPerDay * minsPerHr * secsPerMin * msPerSec

        /**
         * Calculates number of elapsed days between date1 and date2
         * @public
         * @static
         * @param {Date | DatePlus} date1 - starting date object to calculate
         * @param {Date | DatePlus} date2 - ending date object to calculate
         * @returns {number} - number of elapsed days
         */
        Elapse.getElapsedDays = function (date1, date2) {
            return Math.round((date1.getTime() - date2.getTime()) / Elapse._oneDay) * -1
        }
    }, function (module, exports, __webpack_require__) {
        

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        var hrsPerDay = 24,
            minsPerHr = 60,
            secsPerMin = 60,
            msPerSec = 1000,

            /**
             * Convert namespace
             * @classdesc A namespace program to convert units
             * @namespace
             */
            Convert = (function (_Date) {
                _inherits(Convert, _Date)

                var _super4 = _createSuper(Convert)

                function Convert () {
                    _classCallCheck(this, Convert)

                    return _super4.apply(this, arguments)
                }

                return Convert
            }(_wrapNativeSuper(Date)))

        exports.default = Convert

        /**
         * Converts milliseconds to seconds with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with seconds and milliseconds
         */
        Convert.msToSecs = function (ms) {
            return {
                ms: ms % msPerSec,
                seconds: (ms - ms % msPerSec) / msPerSec
            }
        }

        /**
         * Converts milliseconds to minutes with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with minutes, seconds, and milliseconds
         */
        Convert.msToMins = function (ms) {
            var milliseconds = ms % msPerSec % msPerSec,
                seconds = (ms - ms % msPerSec) / msPerSec % secsPerMin,
                minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin)

    
            return {
                ms: milliseconds,
                seconds,
                minutes
            }
        }

        /**
         * Converts milliseconds to hours with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with hours, minutes, seconds, and milliseconds
         */
        Convert.msToHrs = function (ms) {
            var milliseconds = ms % msPerSec % msPerSec,
                seconds = (ms - ms % msPerSec) / msPerSec % secsPerMin,
                minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin) % minsPerHr,
                hours = (ms - minutes * msPerSec * secsPerMin - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin * minsPerHr)

    
            return {
                ms: milliseconds,
                seconds,
                minutes,
                hours
            }
        }

        /**
         * Converts milliseconds to days with remainders
         * @public
         * @static
         * @param {number} ms - milliseconds to convert
         * @returns {Object.<string, number>} object with days, hours, minutes, seconds, and milliseconds
         */
        Convert.msToDays = function (ms) {
            var milliseconds = ms % msPerSec % msPerSec,
                seconds = (ms - ms % msPerSec) / msPerSec % secsPerMin,
                minutes = (ms - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin) % minsPerHr,
                hours = (ms - minutes * msPerSec * secsPerMin - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin * minsPerHr) % hrsPerDay,
                days = (ms - hours * msPerSec * secsPerMin * minsPerHr - minutes * msPerSec * secsPerMin - seconds * msPerSec - milliseconds) / (msPerSec * secsPerMin * minsPerHr * hrsPerDay)

    
            return {
                ms: milliseconds,
                seconds,
                minutes,
                hours,
                days
            }
        }

        /**
         * Converts seconds to milliseconds
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {number} converted milliseconds
         */
        Convert.secsToMs = function (secs) {
            return secs * msPerSec
        }

        /**
         * Converts seconds to minutes with remainders
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {Object.<string, number>} converted minutes
         */
        Convert.secsToMins = function (secs) {
            return Convert.msToMins(Convert.secsToMs(secs))
        }

        /**
         * Converts seconds to hours with remainders
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {Object.<string, number>} converted hours
         */
        Convert.secsToHrs = function (secs) {
            return Convert.msToHrs(Convert.secsToMs(secs))
        }

        /**
         * Converts seconds to days with remainders
         * @public
         * @static
         * @param {number} secs - seconds to convert
         * @returns {Object.<string, number>} converted days
         */
        Convert.secsToDays = function (secs) {
            return Convert.msToDays(Convert.secsToMs(secs))
        }

        /**
         * Converts hours to milliseconds
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {number} converted milliseconds
         */
        Convert.minsToMs = function (mins) {
            return mins * secsPerMin * msPerSec
        }

        /**
         * Converts hours to seconds
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {number} converted seconds
         */
        Convert.minsToSecs = function (mins) {
            return mins * secsPerMin
        }

        /**
         * Converts minutes to hours with remainders
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {Object.<string, number>} converted hours
         */
        Convert.minsToHrs = function (mins) {
            return Convert.msToHrs(Convert.minsToMs(mins))
        }

        /**
         * Converts minutes to days with remainders
         * @public
         * @static
         * @param {number} mins - minutes to convert
         * @returns {Object.<string, number>} converted days
         */
        Convert.minsToDays = function (mins) {
            return Convert.msToDays(Convert.minsToMs(mins))
        }

        /**
         * Converts hours to milliseconds
         * @public
         * @static
         * @param {number} hours - hours to convert
         * @returns {number} converted milliseconds
         */
        Convert.hrsToMs = function (hours) {
            return hours * minsPerHr * secsPerMin * msPerSec
        }

        /**
         * Converts hours to seconds
         * @public
         * @static
         * @param {number} hours - hours to convert
         * @returns {number} converted seconds
         */
        Convert.hrsToSecs = function (hours) {
            return hours * minsPerHr * secsPerMin
        }

        /**
         * Converts hours to minutes
         * @public
         * @static
         * @param {number} hours - hours to convert
         * @returns {number} converted minutes
         */
        Convert.hrsToMins = function (hours) {
            return hours * minsPerHr
        }

        /**
         * Converts hours to days with remainders
         * @public
         * @static
         * @param {number} hrs - hours to convert
         * @returns {Object.<string, number>} converted days
         */
        Convert.hrsToDays = function (hrs) {
            return Convert.msToDays(Convert.hrsToMs(hrs))
        }

        /**
         * Converts days to milliseconds
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted milliseconds
         */
        Convert.daysToMs = function (days) {
            return days * hrsPerDay * minsPerHr * secsPerMin * msPerSec
        }

        /**
         * Converts days to seconds
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted seconds
         */
        Convert.daysToSecs = function (days) {
            return days * hrsPerDay * minsPerHr * secsPerMin
        }

        /**
         * Converts days to minutes
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted minutes
         */
        Convert.daysToMins = function (days) {
            return days * hrsPerDay * minsPerHr
        }

        /**
         * Converts days to hours
         * @public
         * @static
         * @param {number} days - days to convert
         * @returns {number} converted hours
         */
        Convert.daysToHrs = function (days) {
            return days * hrsPerDay
        }
    }
]))

// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb252ZXJzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBQSxnQkFBQSxHQUFBLEVBQUE7Ozs7QUFLQSxhQUFBLGdCQTBQQyxDQUFBLFFBQUEsQ0ExUEQsQ0EwUEMsT0ExUEQ7QUFFSTs7Ozs7OztBQVVlLElBQUEsT0FBSyxDQUFHLFFBQUgsQ0FBTCxDQUFhLElBQWIsQ0FBc0IsTUFBRyxDQUFBLE9BQXpCLEVBQWlDLE1BQWpDLEVBQWlDLE1BQUEsQ0FBQSxPQUFqQyxFQUFpQyxtQkFBakM7Ozs7O0FBa0JYLEVBQUEsbUJBQU8sQ0FBQSxDQUFQLEdBQU8sT0FBUDtBQUdJLEVBQUEsbUJBQU8sQ0FBQSxDQUFQLEdBQU8sZ0JBQVA7O0FBSVIsRUFBQSxtQkFBQSxDQUFBLENBQUEsR0FBQSxVQUFBLE9BQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxFQUFBOzs7Ozs7O0dBQUE7O0FBT2MsRUFBQSxtQkFBOEMsQ0FBQSxDQUE5QyxHQUE4QyxVQUFBLE9BQUEsRUFBQTtBQUNsRCxRQUFBLE9BQUEsTUFBQSxLQUFvQixXQUFwQixJQUErQixNQUNqQyxDQUFBLFdBREUsRUFDWTtBQU1WLE1BQUEsTUFBVSxDQUFBLGNBQVYsQ0FBcUIsT0FBckIsRUFBK0IsTUFBQSxDQUFBLFdBQS9CLEVBQStCO0FBQUEsUUFBQSxLQUFBLEVBQUE7QUFBQSxPQUEvQjtBQUNBOztBQUNBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FDUyxPQURULEVBQ1ksWUFEWixFQUN5QjtBQUFTLE1BQUEsS0FBQyxFQUFBO0FBQVYsS0FEekI7QUFHRCxHQWJHOztBQXFCZCxFQUFBLG1CQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQTs7Ozs7Ozs7QUFNRyxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsRUFBQSxFQUFBLFNBQUEsRUFBQTtBQUFBLE1BQUEsVUFBQSxFQUFBLElBQUE7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
