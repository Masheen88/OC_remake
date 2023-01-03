//checks if the os is in light or dark mode and set the page to match
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// lab class app begins here

//NOTE: test cases for lab
const testCases = [
  {
    level: "Level 1",
    name: "Test Case 1",
    question:
      "Write a function called `add` that takes two numbers as arguments and returns their sum.",
    code: "console.log(add(1, 2))",
    expectedOutput: 3,
  },
  {
    level: "Level 1",
    name: "Test Case 2",
    question:
      "Write a function called `add2` that takes two numbers as arguments and returns their sum.",
    code: "console.log(add(5, 10))",
    expectedOutput: "15",
  },
  {
    level: "Level 2",
    name: "Test Case 1",
    question:
      "Write a function called `subtract` that takes two numbers as arguments and returns their sum.",
    code: "console.log(subtract(5, 10))",
    expectedOutput: "15",
  },
  {
    level: "Level 3",
    name: "Test Case 1",
    question:
      "Write a function called `multiply` that takes two numbers as arguments and returns their sum.",
    code: "console.log(multiply(100, 200))",
    expectedOutput: "300",
  },
  // Add more test cases here
  {
    level: "Level 4",
    name: "Test Case 1",
    question:
      "Write a function called `divide` that takes two numbers as arguments and returns their sum.",
    code: "console.log(divide(1000, 2000))",
    expectedOutput: "3000",
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
let code = document.getElementById("codeInput");
let consoleOutput = document.getElementById("consoleOutput"); //Console Log:
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
        testCaseSelect.add(option);
      }
    }
  });
}
createMenu();

function checkCode() {
  // Gets the selected test case
  let selectedTestCase = testCaseSelect.value;

  // NOTE: Selected test case object from the testCases array
  let selectedTest = testCases[selectedTestCase];

  // Get the expected output of the selected test case
  let expectedOutput = selectedTest.expectedOutput;

  // Get the code provided by the user
  let codeOutput = code.value;

  // Evaluate the code
  let actualOutput = eval(codeOutput);

  // Check if the function provided by the user returns the expected output
  if (actualOutput === expectedOutput) {
    // Update the resultsOutput element with the expected output and the actual output
    resultsOutput.innerHTML = `<p>Expected Output: ${expectedOutput}</p><p>Actual Output: ${actualOutput}</p>`;
  } else {
    // Update the resultsOutput element with the expected output and the actual output
    resultsOutput.innerHTML = `<p>Expected Output: ${expectedOutput}</p><p>Actual Output: ${actualOutput}</p>`;
  }
}

// Add an event listener to the runTests button to run the checkCode function when the button is clicked
runTestsButton.addEventListener("click", checkCode);
