export const getDaysInMonth = (month, year) =>
    new Array(31)
    .fill("")
    .map((v, i) => new Date(year, month - 1, i + 1))
    .filter((v) => v.getMonth() === month - 1)
    .map((day) => day.getDate());

export const getDaysInMonthUTC = (month, year) =>
    new Array(31)
    .fill("")
    .map((v, i) => new Date(year, month - 1, i + 1))
    .filter((v) => v.getMonth() === month - 1);