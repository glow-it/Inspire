  // Change Followers Number to Abbrivation Number
  export function abbreviateNumber(number) {
   // Convert the number to a string
  const numberString = number.toString();

  // Split the number into whole number and decimal parts
  const parts = numberString.split(".");

  // Get the whole number part
  const wholeNumber = parts[0];

  // If the whole number is more than 9 digits, add a "B" abbreviation
  if (wholeNumber.length > 9) {
    let number =  `${parseInt(wholeNumber, 10) / 1000000000}`;
    return `${number.slice(0, -(number.indexOf(".")) + 6)}B`
  }

  // If the whole number is more than 6 digits, add an "M" abbreviation
  if (wholeNumber.length > 6) {
    let number =  `${parseInt(wholeNumber,10) / 1000000}`;
    return `${number.slice(0, -(number.indexOf(".")) + 6)}M`
  }

  // If the whole number is more than 3 digits, add a "K" abbreviation
  if (wholeNumber.length > 3) {
    let number =  `${parseInt(wholeNumber, 10) / 1000}`;
    return `${number.slice(0, -(number.indexOf(".")) + 6)}K`
  }

  // Otherwise, return the whole number
  return wholeNumber;
  }
  