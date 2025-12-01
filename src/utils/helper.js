function compareTime(timeString1, timeString2) {
    const datatime1 = new Date(timeString1);
    const datatime2 = new Date(timeString2);
    return datatime1.getTime() > datatime2.getTime();
}
module.exports = {
    compareTime
};  