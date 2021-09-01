"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function performancecheck(functionToValidate) {
    var theArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        theArgs[_i - 1] = arguments[_i];
    }
    var timeBeforeExecution = moment_1.default(new Date());
    functionToValidate.apply(void 0, theArgs);
    var timeAfterExecution = moment_1.default(new Date());
    var timeDiff = timeAfterExecution.diff(timeBeforeExecution);
    return timeDiff;
}
module.exports = { performancecheck: performancecheck };
