// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)
// function clock() {
//     let TimeString = new Date().toTimeString();
//     let index = TimeString.indexOf(' ');
//     let time = TimeString.substring(0,index);
//     console.log(time);
// }

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function clock() {
    let Time = new Date().toLocaleTimeString().toUpperCase();
    let str = "0";
    if (Time.indexOf(':') === 1) {
        let finalTime = str.concat(Time);
        console.log(finalTime);
    }
    else {
    console.log(Time);
    }
}

setInterval(clock,1000)