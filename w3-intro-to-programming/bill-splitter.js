const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// cli bill splitter (everyone pays the same amount with this bad boy so make sure you rack up)

// questions with proper input validation and error handling
function askTotalPayers(callback) {
  rl.question(
    "Enter how many people are splitting the bill (1-15): ",
    (answer) => {
      const numPayers = Number(answer);

      if (!Number.isInteger(numPayers) || numPayers < 1 || numPayers > 15) {
        console.error("Please enter a whole number between 1 and 15");
        askTotalPayers(callback);
        return;
      }

      callback(numPayers);
    },
  );
}

function askBillTotal(callback) {
  rl.question("Enter the bill total (for example: 543.18): ", (answer) => {
    const billFormat = /^\d+(\.\d+)?$/;

    if (!billFormat.test(answer)) {
      console.error(
        "Please enter the bill using only digits and a fullstop for decimals, for example: 543.18",
      );
      askBillTotal(callback);
      return;
    }

    const bill = parseFloat(answer);

    if (bill < 1) {
      console.error("Please enter a bill total of at least 1");
      askBillTotal(callback);
      return;
    }

    callback(bill);
  });
}

function askTipPercentage(callback) {
  rl.question(
    "Enter the percentage you would like to tip (10-500): ",
    (answer) => {
      const tip = Number(answer);

      if (!Number.isInteger(tip) || tip < 10 || tip > 500) {
        console.error("Please enter a whole number between 10 and 500");
        askTipPercentage(callback);
        return;
      }

      callback(tip);
    },
  );
}

// actual app loop
askTotalPayers((numPayers) => {
  const totalPayers = numPayers;

  askBillTotal((bill) => {
    const billTotal = bill;

    askTipPercentage((tip) => {
      const tipPercentage = tip;

      const totalAfterTip = calcTotalAfterTip(billTotal, tipPercentage);
      const individualTotal = calcIndividualTotal(totalAfterTip, totalPayers);
      console.info(`Each person has to pay: ${individualTotal}`);

      rl.close();
    });
  });
});

// logic
function calcTotalAfterTip(billTotal, tipPercentage) {
  const tipAmount = billTotal * (tipPercentage / 100);
  const totalAfterTip = billTotal + tipAmount;
  return totalAfterTip;
}

function calcIndividualTotal(totalAfterTip, totalPayers) {
  const individualTotal = Math.ceil(totalAfterTip / totalPayers); // rather pay a bit more than underpay
  return individualTotal;
}
