const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var date = new Date();
var day = weekday[date.getDay()];
var current_date = date.getDate() + "-" + (date.getMonth()+1)+"-" + date.getFullYear()+", " + day ;
document.getElementById("currentDay").innerHTML = current_date;


var newinput = document.getElementById("new-input")
newinput.addEventListener("keypress", function(event)
{
    if(event.key == "Enter"){
        var div = document.getElementById('section')
        var p = document.createElement("p");
        p.innerHTML = newinput.value;
        div.append(p)
        newinput.value = "";
    }
});


