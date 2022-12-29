//checks if the os is in light or dark mode and set the page to match
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// test cases below:
// Array of test cases
const testCases = [
  {
    level: "Level 1",
    name: "Test Case 1",
    question:
      "Write a function called `add` that takes two numbers as arguments and returns their sum.",
    code: "console.log(add(1, 2))",
    expectedOutput: "3",
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
    code: "console.log(add(5, 10))",
    expectedOutput: "15",
  },
  {
    level: "Level 3",
    name: "Test Case 1",
    question:
      "Write a function called `multiply` that takes two numbers as arguments and returns their sum.",
    code: "console.log(add(100, 200))",
    expectedOutput: "300",
  },
  // Add more test cases here
  {
    level: "Level 4",
    name: "Test Case 1",
    question:
      "Write a function called `divide` that takes two numbers as arguments and returns their sum.",
    code: "console.log(add(1000, 2000))",
    expectedOutput: "3000",
  },
];

//loop through testCases and append level to levelSelect menu, ignore duplicate entries
let levelSelectMenu = document.getElementById("levelSelectMenu");
let testCaseSelect = document.getElementById("testCaseSelect");
let runTestsButton = document.getElementById("runTests");
let resetButton = document.getElementById("resetTests");

let consoleOutput = document.getElementById("consoleOutput");
let codeOutput = document.getElementById("codeOutput");
let resultsOutput = document.getElementById("resultsOutput");

let levelArray = [];
let testCaseArray = [];

for (let i = 0; i < testCases.length; i++) {
  if (!levelArray.includes(testCases[i].level)) {
    levelArray.push(testCases[i].level);

    levelSelectMenu.innerHTML += `<option value="${testCases[i].level}">${testCases[i].level}</option>`;
  }
}

//convert the above to onclick event
resetButton.addEventListener("click", function () {
  //clear consoleOutput
  while (consoleOutput.firstChild) {
    consoleOutput.removeChild(consoleOutput.firstChild);
  }

  //clear codeOutput
  while (codeOutput.firstChild) {
    codeOutput.removeChild(codeOutput.firstChild);
  }

  //removes all elements from resultsOutput
  while (resultsOutput.firstChild) {
    resultsOutput.removeChild(resultsOutput.firstChild);
  }
});

function levelSelection() {
  //clear testCaseArray before pushing new test cases
  testCaseArray = [];
  console.log("levelSelection function running");
  let level = document.getElementById("levelSelectMenu").value;

  console.log("level:", level);
  if (level === "Level 1") {
    document.getElementById("question").innerHTML = `
    <h3>Question: ${testCases[0].question}</h3>
    <h3>${testCases[0].name}</h3>
    `;

    //if level 1 is selected, push all test cases with level 1 to testCaseArray
    for (let i = 0; i < testCases.length; i++) {
      if (testCases[i].level === "Level 1") {
        testCaseArray.push(testCases[i]);
      }
    }
    console.log("Level 1 testCaseArray:", testCaseArray);

    displayExpectedOutput(testCaseArray);
  } else if (level === "Level 2") {
    document.getElementById("question").innerHTML = `
    <h3>Question: ${testCases[1].question}</h3>
    <h3>${testCases[1].name}</h3>
    `;

    //if level 2 is selected, push all test cases with level 2 to testCaseArray
    for (let i = 0; i < testCases.length; i++) {
      if (testCases[i].level === "Level 2") {
        testCaseArray.push(testCases[i]);
      }
    }
    console.log("Level 2 testCaseArray:", testCaseArray);

    displayExpectedOutput(testCaseArray);
  } else if (level === "Level 3") {
    document.getElementById("question").innerHTML = `
    <h3>Question: ${testCases[2].question}</h3>
    <h3>${testCases[2].name}</h3>
    `;

    //if level 3 is selected, push all test cases with level 3 to testCaseArray
    for (let i = 0; i < testCases.length; i++) {
      if (testCases[i].level === "Level 3") {
        testCaseArray.push(testCases[i]);
      }
    }
    console.log("Level 3 testCaseArray:", testCaseArray);

    displayExpectedOutput(testCaseArray);
  } else if (level === "Level 4") {
    document.getElementById("question").innerHTML = `
    <h3>Question: ${testCases[3].question}</h3>
    <h3>${testCases[3].name}</h3>
    `;

    //if level 4 is selected, push all test cases with level 4 to testCaseArray
    for (let i = 0; i < testCases.length; i++) {
      if (testCases[i].level === "Level 4") {
        testCaseArray.push(testCases[i]);
      }
    }
    console.log("Level 4 testCaseArray:", testCaseArray);

    displayExpectedOutput(testCaseArray);
  }

  console.log("levelSelection function complete", levelArray);
}

//async await levelSelection function
async function levelSelectionAsync() {}

// Display expected outputs based on test case selection
function displayExpectedOutput(levelData) {
  console.log("displayExpectedOutput function running", levelData);

  //append testCaseSelect menu with test cases for selected level
  //if level 1 is selected

  //remove all options from testCaseSelect menu before appending
  testCaseSelect.innerHTML = "";
  let testCaseData = [];
  for (let i = 0; i < levelData.length; i++) {
    console.log(i, levelData[i].name);
    if (levelData[0].level === "Level 1") {
      testCaseSelect.innerHTML += `<option value="Level1${levelData[i].name}">${levelData[i].name}</option>`;
      testCaseData.push(levelData[i]);
    } else if (levelData[0].level === "Level 2") {
      // clear   testCaseSelect menu before appending

      testCaseSelect.innerHTML += `<option value="Level2${levelData[i].name}">${levelData[i].name}</option>`;
    } else if (levelData[0].level === "Level 3") {
      // clear   testCaseSelect menu before appending

      testCaseSelect.innerHTML += `<option value="Level3${levelData[i].name}">${levelData[i].name}</option>`;
    } else if (levelData[0].level === "Level 4") {
      // clear   testCaseSelect menu before appending

      testCaseSelect.innerHTML += `<option value="Level4${levelData[i].name}">${levelData[i].name}</option>`;
    }
  }
  //onclick runTests button
  runTestsButton.onclick = function () {
    return runTests(testCaseData);
  };
}

function runTests(testCaseData) {
  console.log("runTests function running", testCaseData);

  // Get the user's code from the textarea
  const userCode = codeOutput.value;
  //Check if the user has not entered code
  if (userCode === "") {
    alert("Please enter code");
    return;
  }

  // Clear the results and console divs

  //   document.getElementById("console").innerHTML = "";
  consoleOutput.innerHTML = "";
  resultsOutput.innerHTML = "";
  // Loop through the test cases
  for (let testCase of testCaseData) {
    console.log("TestCases:", testCase);

    // Capture the output of the test case code
    let output;
    let message = "";
    consoleOutput.innerHTML += `<p>${message}</p>`;
    output = message;

    console.log("userCODE TEST:", userCode + "\n" + testCase.code);
    eval(userCode + "\n" + testCase.code);
    console.log("output:", output);
    // Compare the actual output with the expected output
    if (output === testCase.expectedOutput) {
      resultsOutput.innerHTML += `
            <p class="success">${testCase.name} passed!</p><br>
            Console Log Output: ${output}
            `;

      // output the console log
    } else {
      resultsOutput.innerHTML += `
                <p class="failure">${testCase.name} failed!</p><br>
                Console Log Output: ${output}
                `;
    }
  }
}
