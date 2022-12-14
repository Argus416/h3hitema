export const getPreviousDay = (date = new Date()) => {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
};

export const getNextDay = (date = new Date()) => {
    const forward = new Date(date.getTime());
    forward.setDate(date.getDate() + 1);

    return forward;
};

export const getDaysInMonth = (month, year) => {
    const allDays = new Array(31)
        .fill(null)
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1)
        .map((day) => day.getDate());

    return allDays;
};

const isMonday = (date = new Date()) => {
    if (typeof date === "object") {
        date = new Date(date.day);
    }
    if (date.getUTCDay() === 0) return true;
    return false;
};

export const getDaysInMonthUTC = (month, year) => {
    let allDays = new Array(31)
        .fill(null)
        .map((v, i) => new Date(year, month - 1, i + 1))
        .filter((v) => v.getMonth() === month - 1)
        .map((day) => {
            return {
                isInCurrentMonth: true,
                day,
            };
        });

    const daysToAdd = [];

    // generateDatesToMonday();
    while (isMonday(daysToAdd.at(-1)) !== true) {
        let day = new Date();
        if (daysToAdd.length) {
            day = getPreviousDay(new Date(daysToAdd.at(-1).day));
        } else {
            day = getPreviousDay(new Date(allDays[0]).day);
        }
        const obj = {
            isInCurrentMonth: false,
            day,
        };

        daysToAdd.push(obj);
    }

    allDays = [...daysToAdd.reverse(), ...allDays];

    // Complete calendar, display 6 WEEKS
    while (allDays.length !== 6 * 7) {
        let day = new Date();
        day = getNextDay(new Date(allDays.at(-1).day));
        const obj = {
            isInCurrentMonth: false,
            day,
        };
        allDays.push(obj);
    }


    return allDays;
};

export const getLastWeek = (tableOfUTCDays) => {
    const week = [];
    for (let i = tableOfUTCDays.length - 1; i > tableOfUTCDays.length - 8; i--) {
        week.push(tableOfUTCDays[i]);
    }

    return week;
};



export const readableDate = (date) => {
	date = new Date(date);
	const day = parseInt(date.getDate()) < 10 ? `0${date.getDate()}` : date.getDate();
	return (
		<>
			{date.getFullYear()}/{date.getMonth() + 1}/{day}
		</>
	);
};