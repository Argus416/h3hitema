export const getDaysInMonth = (month, year) =>
    new Array(31)
    .fill(null)
    .map((v, i) => new Date(year, month - 1, i + 1))
    .filter((v) => v.getMonth() === month - 1)
    .map((day) => day.getDate());

export const getDaysInMonthUTC = (month, year) =>
    new Array(31)
    .fill(null)
    .map((v, i) => new Date(year, month - 1, i + 1))
    .filter((v) => v.getMonth() === month - 1)
    .map((v) => v + " ");

export const getLastWeek = (tableOfUTCDays) => {
    const week = [];
    for (let i = tableOfUTCDays.length - 1; i > tableOfUTCDays.length - 8; i--) {
        week.push(tableOfUTCDays[i]);
    }

    return week;
};

export const rangeDate = (datesInUTC) => {
    const allDaysGrouped = {};
    datesInUTC.forEach((day) => {
        if (allDaysGrouped[day.split(" ")[0]]) {
            allDaysGrouped[day.split(" ")[0]] = [...allDaysGrouped[day.split(" ")[0]], day.split(" ")[2]];
        } else {
            allDaysGrouped[day.split(" ")[0]] = [day.split(" ")[2]];
        }
    });

    const allDaysGroupedOrder = [];
    allDaysGroupedOrder[2] = allDaysGrouped["Mon"];
    allDaysGroupedOrder[3] = allDaysGrouped["Tue"];
    allDaysGroupedOrder[4] = allDaysGrouped["Wed"];
    allDaysGroupedOrder[5] = allDaysGrouped["Thu"];
    allDaysGroupedOrder[6] = allDaysGrouped["Fri"];
    allDaysGroupedOrder[1] = allDaysGrouped["Sun"];
    allDaysGroupedOrder[0] = allDaysGrouped["Sat"];
    return allDaysGroupedOrder;
};