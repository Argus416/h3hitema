export const getPreviousDay = (date = new Date()) => {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
};

export const getDaysInMonth = (month, year) => {
    const allDays = new Array(31)
        .fill(null)
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1)
        .map((day) => day.getDate());

    return allDays;
};

export const getDaysInMonthUTC = (month, year) => {
    const allDays = new Array(31)
        .fill(null)
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1);

    const daysToAdd = [];

    const generateDatesToMonday = () => {
        while (isMonday(daysToAdd.at(-1)) !== true) {
            let day = new Date();
            if (daysToAdd.length) {
                day = getPreviousDay(new Date(daysToAdd.at(-1)));
            } else {
                day = getPreviousDay(new Date(allDays[0]));
            }
            daysToAdd.push(day);
        }
    };

    const isMonday = (date = new Date()) => {
        if (date.getUTCDay() === 0) return true;
        return false;
    };

    generateDatesToMonday();

    return [...daysToAdd.reverse(), ...allDays];
};

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