//checks if the os is in light or dark mode and set the page to match
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// App begins here.

//NOTE: test cases for lab
const testCases = [
  {
    level: "Week 2",
    name: "Test 1",
    question:
      "Write a function called `add` that takes two numbers as arguments and returns their sum.",
    code: "add(1, 2)",
    codeValue: `
    //You can include comments // and console logs in your code!
    //Write your function below this line.
    
    `,
    expectedOutput: 3,
  },
  {
    level: "Week 2",
    name: "Test 2",
    question:
      "Write a function called `subtract` that takes two numbers a, b as arguments and subtracts b from a.",
    code: "add(5, 10)",
    expectedOutput: 15,
  },
  {
    level: "Week 3",
    name: "Test 1",
    question:
      "Our ferris wheel broke down! Fix the for loop so that it returns the correct value to let the passengers off the ride.",
    code: "ferrisWheel(10, 5)",
    codeValue: `
    //You can include comments // and console logs in your code!
    \n//Write your function below this line.
    
function ferrisWheel(totalSeats, passengers) {
console.log("totalSeats:", totalSeats, "passengers:", passengers)

    //seats lefts
    let seatsLeft = totalSeats - passengers;

    for (let i = 0; i < passengers; i++) {
      console.log("passenger", i, "seats left:", seatsLeft);
      seatsLeft--;

      if (seatsLeft < 0) {
        console.log("Not enough seats!");
        //return seatsLeft;
      } else if (seatsLeft === 0) {
        console.log("All seats are full!");
        return  seatsLeft;
      } else {
        console.log("There are " + seatsLeft + " seats left.");
        return  seatsLeft;
      }
    
  }
    `,
    expectedOutput: 0,
  },
  {
    level: "Week 4",
    name: "Test 1",
    question:
      "Write a function called `multiply` that takes two numbers as arguments and returns their sum.",
    code: "multiply(100, 200)",
    expectedOutput: 20000,
  },
  // Add more test cases here
  {
    level: "Week 5",
    name: "Test 1",
    question:
      "Write a function called `hungry` that takes an argument and returns true if the number is greater than 10.",
    code: "hungry(5)",
    expectedOutput: false,
  },
  {
    level: "Week 6",
    name: "Test 1",
    question:
      "Write a function called `hungry` that takes an argument and returns true if the number is greater than 10.",
    code: "hungry(11)",
    expectedOutput: true,
  },
];

//NOTE: defines the variables for the html elements

//Selection Menus
let levelSelectMenu = document.getElementById("levelSelectMenu");
let testCaseSelect = document.getElementById("testCaseSelect");

//Buttons
let runTestsButton = document.getElementById("runTests");
let resetButton = document.getElementById("resetTests");

//Outputs
let questionOutput = document.getElementById("question");
let expectedQuestionOutput = document.getElementById("expectedOutput");
let code = document.getElementById("codeInput");

let resultsOutput = document.getElementById("resultsOutput"); // Results:

//creates the level selection menu
let levelArray = []; //Holds data for selections 1-4
let testCaseArray = []; //Holds data for test cases in each level

function createMenu() {
  //NOTE: creates the level selection menu
  for (let i = 0; i < testCases.length; i++) {
    //NOTE: creates the level selection menu
    if (!levelArray.includes(testCases[i].level)) {
      levelArray.push(testCases[i].level);
      let option = document.createElement("option");
      option.text = testCases[i].level;
      option.value = testCases[i].level;
      levelSelectMenu.add(option);
    }
  }

  //Depending on the selected level, the test case selection menu will be populated with the test cases for that level
  levelSelectMenu.addEventListener("change", function () {
    //Clears the test case selection menu
    testCaseSelect.innerHTML = "";

    //Populates the test case selection menu with the test cases for the selected level
    for (let i = 0; i < testCases.length; i++) {
      if (testCases[i].level === levelSelectMenu.value) {
        let option = document.createElement("option");
        option.text = testCases[i].name;
        option.value = i;
        // console.log("option:", option);
        testCaseSelect.add(option);
        // console.log("in for loop testCaseSelect:", testCaseSelect);
      }
    }
  });
}
createMenu();

//on level select change, update the question and code
levelSelectMenu.addEventListener("change", function () {
  questionOutput.innerHTML = "";
  //Gets the selected test case
  let selectedTestCase = testCaseSelect.value;
  // console.log("selectedTestCase", selectedTestCase);
  let selectedTest = testCases[selectedTestCase];
  // console.log("selectedTest", selectedTest);

  questionOutput.innerHTML = selectedTest.question;
  //on change of the selected test case, update the question and code
  testCaseSelect.addEventListener("change", function () {
    //Gets the selected test case
    questionOutput.innerHTML = "";
    let selectedTestCase = testCaseSelect.value;
    // console.log("selectedTestCase", selectedTestCase);
    let selectedTest = testCases[selectedTestCase];
    // console.log("onChange selectedTest", selectedTest);

    questionOutput.innerHTML = selectedTest.question;
  });

  //Updates the questionOutput element with the question from the selected test case

  //Updates the code element with the code from the selected test case
  code.value = selectedTest.codeValue;

  //Updates the expected output element with the expected output from the selected test case
  expectedQuestionOutput.innerHTML = `Expected Answer: ${selectedTest.expectedOutput}`;
});

//Checks the code provided by the user against the test case code
function checkCode() {
  // Gets the selected test case
  let selectedTestCase = testCaseSelect.value;
  let selectedTest = testCases[selectedTestCase];

  // Get the expected output of the selected test case
  let expectedOutput = selectedTest.expectedOutput;

  // Code provided by the user
  let codeOutput = code.value;

  // Code provided by the test case
  let testCode = selectedTest.code;

  let userFunctions = {};

  // Get the function name from the test case code
  let functionName = testCode.match(/\w+(?=\()/)[0];

  // Get the function arguments from the test case code
  let functionArgs = testCode.match(/\(([^)]+)\)/)[1].split(",");

  try {
    eval(`userFunctions.${functionName} = ${codeOutput}`);

    // Convert the argument values from string to number
    functionArgs = functionArgs.map((arg) => parseInt(arg));

    // Call the function with the arguments
    let actual = userFunctions[functionName](...functionArgs);
    // console.log("actual", actual);

    // Check if the function provided by the user returns the expected output
    if (expectedOutput === actual) {
      // Update the resultsOutput element with the expected output
      resultsOutput.innerHTML = `<div>True:</div><p>Expected Output: ${expectedOutput}</p><p>Actual Output: ${actual}</p>`;
    } else {
      // Update the resultsOutput element with the expected output and the actual output
      resultsOutput.innerHTML = `<div>False:</div><p>Expected Output: ${expectedOutput}</p><p>Actual Output: ${actual}</p>`;
    }
  } catch (error) {
    // Update the resultsOutput element with the expected output and the actual output
    resultsOutput.innerHTML = `<div>False:</div><p>Expected Output: ${expectedOutput}</p><p>Actual Output: ${error}</p>`;
  }
}

runTestsButton.addEventListener("click", checkCode);
