const newYears = '1 Jan 2024';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearsDate-currentDate) * 1000;
    const days = Math.floor(seconds / 3600 / 24);
    console.log(newYearsDate - currentDate)
}


countdown();

setInterval(countdown, 1000);