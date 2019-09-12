  var friends = ['John', 'Jack', 'Joey', 'Jimmy', 'Jason'];
  var locations = ['Springs', 'Brakpan', 'Benoni', 'Boksburg', 'Bedfordview', 'Sandton', 'Johannesburg', 'Midrand', 'Randburg','Pretoria'];
  var weapons = ['gum', 'barbie-doll', 'nailclippers', 'random stick', 'sunglasses', 'toilet paper', 'wood chipper', 'desktop', 'old nokia phone', 'car', 'fishing rod', 'shoe', 'cotton wool', 'earbuds', 'treadmill','wrench', 'plastic bag', 'wedding band', 'drill', 'water gun'];

  for (var i = 1; i <= 100; i++) {
      if(i === 100){
          var h3text =  document.createTextNode('Accusation ' + [i]);
      } else {
          h3text = document.createTextNode('Accusation ' + [i] + ' ');
      }
    var h3 = document.createElement('h3');
    h3.appendChild(h3text);
    document.body.appendChild(h3);
    h3.addEventListener('click', alertIt(i,friends, locations, weapons));
  }

  
function alertIt(i, friends, locations, weapons) {
    return function(){
        alert(`Accusation ${i}: I accuse ${friends[i%5]}, with the ${weapons[i%10]} in the ${locations[i%5]}!!`)
    }
}