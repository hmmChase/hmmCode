// 1.
document.getElementById('one').innerHTML;

// 2.
document.getElementById('two').innerHTML = 'some different text';

// 3.
document.getElementById('buttonThree').onclick = function() {
  alert('hi');
};

// 4.
document.getElementById('buttonFour').onclick = function() {
  document.getElementById('divFour').innerHTML = 'some different text';
};

// 5.
document.getElementById('buttonFive').onclick = function() {
  document.getElementById('divFive').innerHTML =
    document.getElementById('divFive').innerHTML + ' cool';
};

// 6.
document.getElementById('buttonSix').onclick = function() {
  document.getElementById('divSix').innerHTML =
    '<ul><li>cat</li><li>dog</li></ul>';
};

// 7.
document.getElementById('divSeven').onclick = function() {
  document.getElementById('divSeven').style.background = 'blue';
};

// 8.
document.getElementById('divEight').onclick = function() {
  document.getElementById('divEight').style.display = 'none';
};

// 9.
var varNine = 'divNine';
document.getElementById('divNine').onclick = function() {
  document.getElementById(varNine).style.display = 'none';
};

// 10.
var varTen = document.getElementById('inputTen').value;

document.getElementById('buttonTen').onclick = function() {
  varTen = document.getElementById('inputTen').value;
  document.getElementById('divTen').innerHTML = varTen;
};

// 11.
var arrayEleven = [];
arrayEleven[0] = 'pizza';
arrayEleven[1] = 'tacos';
document.getElementById('buttonEleven').onclick = function() {
  document.getElementById('divEleven').innerHTML = arrayEleven[0];
};

// 12.
var arrayTwelve = [];
arrayTwelve[0] = 'pizza';
arrayTwelve[1] = 'tacos';
console.log(arrayTwelve);

// 13.
var arrayThirteen = ['pizza', 'tacos'];
console.log(arrayThirteen);

// 14.
var arrayFourteen = ['pizza', 'tacos'];
arrayFourteen.push('hamburgers');
console.log(arrayFourteen);

// 15.
var arrayFifteen = ['pizza', 'tacos'];
arrayFifteen.push('hamburgers');
arrayFifteen.splice(1, 1);
console.log(arrayFifteen);

// 16.
var arraySixteen = ['pizza', 'tacos'];
arraySixteen.push('hamburgers');
arraySixteen.splice(1, 2);
console.log(arraySixteen);

// 17.
var arraySeventeen = ['pizza', 'tacos'];
arraySeventeen.push('hamburgers');
arraySeventeen.splice(1, 0, 'hotdogs');
console.log(arraySeventeen);

// 18.
var arrayEighteen = ['pizza', 'tacos'];
arrayEighteen.push('hamburgers');
arrayEighteen.splice(1, 0, 'hotdogs');
console.log(arrayEighteen.length);

// 19.
document.getElementById('buttonNineteen').onclick = function() {
  if (document.getElementById('inputNineteen').value == 'hello') {
    alert('it matches');
  } else {
    alert("doesn't match");
  }
};

// 20.
var varTwenty = Math.random();
document.getElementById('buttonTwenty').onclick = function() {
  alert(varTwenty);
};

// 21.
var varTwentyOne = Math.floor(Math.random() * 100);
document.getElementById('buttonTwentyOne').onclick = function() {
  alert(varTwentyOne);
};

// 22.
var varTwentyTwo = Math.floor(Math.random() * 4);
document.getElementById('buttonTwentyTwo').onclick = function() {
  if (varTwentyTwo == document.getElementById('inputTwentyTwo').value) {
    alert('correct');
  } else {
    alert('try again');
  }
};

// 23.
document.getElementById('buttonTwentyThree').onclick = function() {
  for (var iTwentyThree = 1; iTwentyThree < 5; iTwentyThree++) {
    alert(iTwentyThree);
  }
};

// 24.
var arrayTwentyFour = ['pizza', 'tacos', 'hamburgers'];
document.getElementById('pTwentyFour').innerHTML = arrayTwentyFour;

// 25.
var stringTwentyFive = '';
var arrayTwentyFive = ['pizza', 'tacos', 'hamburgers'];
for (var iTwentyFive = 1; iTwentyFive < arrayTwentyFive.length; iTwentyFive++) {
  stringTwentyFive = stringTwentyFive + arrayTwentyFive[iTwentyFive] + ' ';
}
document.getElementById('pTwentyFive').innerHTML = stringTwentyFive;

// 26.
var stringTwentySix = '';
var arrayTwentySix = ['pizza', 'tacos', 'hamburgers'];
var iTwentySix = 0;
while (iTwentySix < arrayTwentySix.length) {
  stringTwentySix = stringTwentySix + arrayTwentySix[iTwentySix] + ' ';
  iTwentySix++;
}
document.getElementById('pTwentySix').innerHTML = stringTwentySix;

// 27.
document.getElementById('buttonTwentySeven').onclick = function() {
  var varTwentySeven = '';
  var answerTwentySeven = false;
  var guessTwentySeven = 1;
  while (answerTwentySeven === false) {
    varTwentySeven = Math.random();
    varTwentySeven = 6 * varTwentySeven;
    varTwentySeven = Math.floor(varTwentySeven);
    if (document.getElementById('inputTwentySeven').value == varTwentySeven) {
      answerTwentySeven = true;
    } else {
      guessTwentySeven++;
    }
  }
  document.getElementById('pTwentySeven').innerHTML =
    'Got it. It was a ' +
    varTwentySeven +
    '. It took me ' +
    guessTwentySeven +
    ' guesses.';
};

// 28.
function functionTwentyEight(a, b) {
  return a + b;
}
document.getElementById('pTwentyEight').innerHTML = functionTwentyEight(1, 2);

// 29.
if (8 % 4 === 0) {
  document.getElementById('pTwentyNine').innerHTML = 'The first number is even';
} else {
  document.getElementById('pTwentyNine').innerHTML = 'The first number is odd';
}

// 30.
document.getElementById('pThirty').innerHTML = 'Hamburgers'.substring(3, 10);

// 31.
var varOrangeCost = function funOrangeCost(price) {
  var quantity = 5;
  return quantity * price;
};
document.getElementById('pThirtyOne').innerHTML = varOrangeCost(3);

// 32.
var varTimesTwo = function(number) {
  return number * 2;
};
var varNewNumber = varTimesTwo(5);
document.getElementById('pThirtyTwo').innerHTML = varNewNumber;

// 33.
var perimeterBox = function(length, width) {
  return length + length + width + width;
};
document.getElementById('pThirtyThree').innerHTML = perimeterBox(4, 6);

// 34.

// 35.

// 36.

// 37.

// 38.

// 39.

// 40.

// JQuery

// 1.
$('#bjOne').on('click', function() {
  alert('hi');
});

// 2.
$('#bjTwo').on('click', function() {
  $('#djTwo').html('some different text');
});

// 3.

// 4.

// 5.

// 6.

// 7.

// 8.

// 9.

// 10.

// 32.
$(function() {
  $.getJSON('data.json', function(data) {
    document.getElementById('pjThirtyTwo').innerHTML = data.objectJSON[0].test;
  }).fail(function(err) {
    console.log(err.responseText);
    document.getElementById('pjThirtyTwo').innerHTML = err.responseText;
  });
});

// 33.
$.ajax({
  type: 'GET',
  url: 'data.json',
  success: function(data) {
    document.getElementById('pjThirtyThree').innerHTML =
      data.objectJSON[0].test;
  },
  error: function(request, status, error) {
    document.getElementById('pjThirtyThree').innerHTML =
      request.statusText + ', ' + error;
  }
});
