function calculate() {
  var domInputs = document.getElementsByTagName("input");
  var costs = [];
  var subCost = 0;

  for (var i = 1; i < domInputs.length-1; i+=2) {
    if (domInputs[i].value != "") {
      subCost += parseInt(domInputs[i].value);
    }
  }

  var totalCost = parseInt(domInputs[domInputs.length-1].value);

  for (var i = 1; i < domInputs.length-1; i+=2) {
    if (domInputs[i].value != "") {
      var percentage = parseInt(domInputs[i].value) / subCost;
      console.log(percentage);
      domInputs[i].value = parseInt(domInputs[i].value) + ((totalCost-subCost) * percentage);
    }
  }
  
}