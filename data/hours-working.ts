const now = new Date();
const monthsSincebeginning = (now.getFullYear() - 2015) * 12;
const monthsSinceThisYear = now.getMonth() + 1;
const totalMonths = monthsSincebeginning + monthsSinceThisYear;

const workingRatio = 1 / 2;
const hoursOfWorkInAMonth = 150;
const hoursWorking = totalMonths * hoursOfWorkInAMonth * workingRatio;

export default hoursWorking;
