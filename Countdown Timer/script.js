const endDate = " 14 Feb. 2024 01:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")


// const clock

function clock() {
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000;

    if(diff < 0) return;
   
     //convert into days
    inputs[0].value = Math.floor(diff /3600 /24);
     //convert into hourse
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //mintes
    inputs[2].value =Math.floor(diff / 60) % 60;
    //second
    inputs[3].value =Math.floor(diff) % 60;


    


}


// initial call

clock()


// 1 day=24h
// 1 hr=60M
// 60m=3600sec

setInterval(
    () => {
        clock()
    },
    1000
)
