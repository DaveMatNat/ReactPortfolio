export function timeElasped(currentDate) {
    const now = new Date(currentDate)
    const start = new Date('2005-12-02T00:00:00')

    const years = now.getFullYear() - start.getFullYear() - 1;
    const months = now.getMonth() - start.getMonth();
    const days = now.getDate() - start.getDate();
    const hours = now.getHours() - start.getHours();
    const minutes = now.getMinutes() - start.getMinutes();
    const seconds = now.getSeconds() - start.getSeconds();

    // Adjust for negative values
    let adjustedMonths = months;
    let adjustedDays = days;
    let adjustedHours = hours;
    let adjustedMinutes = minutes;
    let adjustedSeconds = seconds;

    if (seconds < 0) {
        adjustedSeconds += 60;
        adjustedMinutes--;
    }
    if (minutes < 0) {
        adjustedMinutes += 60;
        adjustedHours--;
    }
    if (hours < 0) {
        adjustedHours += 24;
        adjustedDays--;
    }
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        adjustedDays += lastMonth.getDate();
        adjustedMonths--;
    }
    if (months < 0) {
        adjustedMonths += 12;
    }

    return `${years} years ${adjustedMonths} months ${adjustedDays} days ${adjustedHours} hrs ${adjustedMinutes} mins ${adjustedSeconds} seconds`;
}