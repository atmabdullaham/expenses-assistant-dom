function inputValueHunter(id) {
 return parseFloat(document.getElementById(id).value)
}
// function for set innerText
function innerText(id, innerText) {
 document.getElementById(id).innerText = innerText;
}


// function for add class
function addClass(id, className) {
 document.getElementById(id).classList.add(className)
}

// function for remove class
function removeClass(id, className) {
 document.getElementById(id).classList.remove(className);
}

let count = 0;

document.getElementById("calculate").addEventListener("click", function (event) {
 count++;
 const income = inputValueHunter("income")
 const software = inputValueHunter("software")
 const courses = inputValueHunter("courses")
 const internet = inputValueHunter("internet")
 removeClass("results", "hidden")
 const totalExpenses = software + courses + internet;
 innerText("total-expenses", totalExpenses)
 const balance = income - totalExpenses;
 innerText("balance", balance)

 const historyItem = document.createElement("div");
 historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500"

 historyItem.innerHTML = `
  <h4> Serial ${count}</h4>
  </br>
  <p class="text-xs text-gray-700"> ${new Date().toLocaleDateString()} </p>
  <p class="text-md text-gray-700"> Income ${income.toFixed(2)} </p>
  <p class="text-xs text-gray-700"> Expenses ${totalExpenses.toFixed(2)} </p>
  <p class="text-xs text-gray-700"> Balance ${balance.toFixed(2)} </p>
  
 `
 const historyContainer = document.getElementById("history-list");
 historyContainer.insertBefore(historyItem, historyContainer.firstChild)
 removeClass("history-section", "hidden")

})

document.getElementById("calculate-savings").addEventListener("click", function () {
 const income = inputValueHunter("income")
 const software = inputValueHunter("software")
 const courses = inputValueHunter("courses")
 const internet = inputValueHunter("internet")
 const savings = inputValueHunter("savings")
 removeClass("results", "hidden")
 const totalExpenses = software + courses + internet;
 const balance = income - totalExpenses;
 const percentage = savings / 100;
 const savingAmount = balance * percentage
 innerText("savings-amount", savingAmount)
 const remainingBalance = balance - savingAmount;
 innerText("remaining-balance", remainingBalance)
})


// History button functionality
document.getElementById("history-tab").addEventListener("click", function () {
 addClass("history-tab", "text-white")
 addClass("history-tab", "bg-gradient-to-r")
 addClass("history-tab", "from-blue-500")
 addClass("history-tab", "to-purple-600")
 addClass("assistant-tab", "text-gray-600")
 addClass("expense-form", "hidden")


 removeClass("history-tab", "text-gray-600")
 removeClass("assistant-tab", "bg-gradient-to-r")
 removeClass("assistant-tab", "from-blue-500")
 removeClass("assistant-tab", "to-purple-600")
 removeClass("assistant-tab", "text-white")
 removeClass("results", "hidden")
 removeClass("history-section", "hidden")
})

// Assistant button functionality
document.getElementById("assistant-tab").addEventListener("click", function () {
 addClass("assistant-tab", "bg-gradient-to-r")
 addClass("assistant-tab", "from-blue-500")
 addClass("assistant-tab", "to-purple-600")
 addClass("assistant-tab", "text-white")
 addClass("history-tab", "text-gray-600")
 addClass("results", "hidden")


 removeClass("assistant-tab", "text-gray-600")
 removeClass("history-tab", "text-white")
 removeClass("history-tab", "bg-gradient-to-r")
 removeClass("history-tab", "from-blue-500")
 removeClass("history-tab", "to-purple-600")
 removeClass("history-tab", "text-gray-600")
 removeClass("expense-form", "hidden")

})
