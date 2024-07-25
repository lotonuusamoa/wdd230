//banner
//const today = new Date()
//console.log(today.getDay())
//if (today.getDay() > 4) {
  //document.querySelector('#banner').className = "hide"
//}

const today = new Date();
const dayOfWeek = today.getDay();

// Check if the current day is Friday (5), Saturday (6), or Sunday (0)
if (dayOfWeek >= 5 || dayOfWeek === 0) {
  document.querySelector('#banner').className = "hide";
}