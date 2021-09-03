const moment = require("moment");

export const performancecheck = (functionToValidate: any, ...theArgs: any) =>{
    const timeBeforeExecution = moment(new Date());
    functionToValidate(...theArgs);
    const timeAfterExecution = moment(new Date());
    const timeDiff = timeAfterExecution.diff(timeBeforeExecution);
    return timeDiff;
}
