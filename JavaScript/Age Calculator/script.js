// Zugriff auf Luxon über die globale Variable "luxon"
const DateTime = luxon.DateTime;

const input = document.getElementById("picker");

const picker = datepicker(input);

var Data;

function calculating(event) {
  event.preventDefault();
  const data = document.querySelector("#picker").value;
  const result = document.getElementById("result");
  let luxonDatum = DateTime.fromFormat(data, "EEE LLL dd yyyy");

  const heute=DateTime.now();
  let years = heute.year-luxonDatum.year;
  let months = heute.month-luxonDatum.month;
  if (heute.day < luxonDatum.day) {
    months -= 1;
  }

  if(months<0){
    years-= 1;
    months+=12;
  }

  
  
  result.innerHTML = `You are ${years} years and ${months} months old`;
}
