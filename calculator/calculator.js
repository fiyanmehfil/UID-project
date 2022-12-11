function computeConsumption(){
  var distance = document.getElementById('distance').value;
  var fuel = document.getElementById('fuel').value;
  var costper = document.getElementById('costper').value;
  var consumed =  (fuel / (distance/100)).toFixed(2);
  var costper100 = (consumed * costper).toFixed(2);
  var mileage = (distance / fuel);
  document.getElementById('consumption').innerHTML = "Consumption = "+consumed+" Litres/100km ( Rs " + costper100 + " / 100km )<br><br> Mileage = "+mileage+" Km/Litres <br><br>Total Fuel cost = Rs " + (fuel*costper).toFixed(2);
}