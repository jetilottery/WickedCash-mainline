define(() => {
  //const prizeData = require('skbJet/componentManchester/standardIW/prizeData');

  return function scenarioTransform(scenarioString) {
    // winning numbers are just a comma seperated list of numbers
    const numbers = scenarioString.split(',');

    return numbers;
  };
});
