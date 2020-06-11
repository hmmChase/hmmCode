// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

//   Task :
// Given a year, return the century it is in.

//   Input, Output Examples::
//   centuryFromYear(1705)  returns(18)
// centuryFromYear(1900)  returns(19)
// centuryFromYear(1601)  returns(17)
// centuryFromYear(2000)  returns(20)
// Hope you enjoy it..Awaiting for Best Practice Codes

// Enjoy Learning!!!

function century(year) {
  const newYear = year.toString().length;
  let stYear;

  if (newYear >= 3) {
    stYear = year.toString().substring(0, newYear - 2);

    if (year % 100 !== 0) {
      return parseInt(stYear) + 1;
    } else {
      return parseInt(stYear);
    }
  } else if (newYear < 3) {
    return 1;
  }
}

century(2000);

// Test.assertEquals(century(1705), 18, 'Testing for year 1705');
// Test.assertEquals(century(1900), 19, 'Testing for year 1900');
// Test.assertEquals(century(1601), 17, 'Testing for year 1601');
// Test.assertEquals(century(2000), 20, 'Testing for year 2000');
// Test.assertEquals(century(89), 1, 'Testing for year 89');

// top
// const century = year => Math.ceil(year / 100);
