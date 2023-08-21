document.addEventListener("DOMContentLoaded", function () {
    let hr = document.querySelector('#hrs');
    let mn = document.querySelector('#min');
    let sc = document.querySelector('#sec');

    setInterval(()=>{
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;
    
        hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;

        //Digital Clock 
        
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        let am = h >=12 ? 'PM' : 'AM';

        //Conversion of @4hrs to 1@ hrs Clock

        if(h > 12){
            h = h -12;
        }

        //Adding zero before single digit number
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;
    })


});