function displayans() {
  var val = document.getElementById("number");

  if(document.getElementById("celsius").checked == true) 
  {   
    let f = ((parseFloat(
            val.value)) * 9 / 5 + 32).toFixed(2);
    let k = ((parseFloat(
            val.value)) + 273.15).toFixed(2);
    document.getElementById("ans1").innerHTML = val.value + " °C";
    document.getElementById("ans2").innerHTML = f + " °F";
    document.getElementById("ans3").innerHTML = k + " °K";
  }

  else if(document.getElementById("fahrenheit").checked == true) 
  {   
    let c = (((parseFloat(
            val.value) - 32) * 5) / 9).toFixed(2);
  let k = ((parseFloat(
      val.value) - 32) * 5 / 9 + 273.15).toFixed(2);
  document.getElementById("ans1").innerHTML = c + " °C";
  document.getElementById("ans2").innerHTML = val.value + " °F";
  document.getElementById("ans3").innerHTML = k + " °K"; 
  }
  
  else {
    let f = ((parseFloat(
      val.value) - 273.15) * 9 / 5 + 32).toFixed(2);
    let c = (((parseFloat(
      val.value) ))-273.15).toFixed(2);
    document.getElementById("ans1").innerHTML = c + " °C";
    document.getElementById("ans2").innerHTML = f + " °F";
    document.getElementById("ans3").innerHTML = val.value + " °K";
  }
}

function clearans(){
  document.getElementById("ans1").innerHTML = "";
  document.getElementById("ans2").innerHTML = "";
  document.getElementById("ans3").innerHTML = "";
  document.getElementById("number").value = "";
}