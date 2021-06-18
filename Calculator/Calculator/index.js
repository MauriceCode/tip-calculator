function calcTip() {

  
  
let totalBill = document.getElementById("amount").value;
let tipPercentage = document.getElementById("services").value;
let persons = document.getElementById("persons").value;
 console.log(tipPercentage)
// Checking input for a value
  if (totalBill == 1.00 || totalBill == "") {
    alert('Please enter a value more than $1.00')
  }

if (persons == "Number of guest" || persons == 0) {
  alert('Please enter number of guest!')
}

let minimum = totalBill * 0.10;
console.log(minimum.toFixed(2))
// Calculate tip
let total = Number(totalBill * tipPercentage) / persons;
total = Math.round(total * 100) / 100;

// var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");

document.getElementById("results").innerHTML = `$${total.toFixed(2)} per person!`; // to add two decimal places to the results 
console.log(results)
// document.getElementById("results").document.style.display = 'block';
}


function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "myFile.txt");
  xhttp.send();
}
/* <script>
var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
</script> */