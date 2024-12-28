document.getElementById("calculate").addEventListener("click", function (event) {
 const income = parseFloat(document.getElementById("income").value)
 const software = parseFloat(document.getElementById("software").value)
 const courses = parseFloat(document.getElementById("courses").value)
 const internet = parseFloat(document.getElementById("internet").value)
 document.getElementById("results").classList.remove("hidden");
 const totalExpenses = software + courses + internet;
 document.getElementById("total-expenses").innerText = totalExpenses;
 const balance = income - totalExpenses;
 document.getElementById("balance").innerText = balance;


})

document.getElementById("calculate-savings").addEventListener("click", function () {
 const income = parseFloat(document.getElementById("income").value)
 const software = parseFloat(document.getElementById("software").value)
 const courses = parseFloat(document.getElementById("courses").value)
 const internet = parseFloat(document.getElementById("internet").value)
 const savings = parseFloat(document.getElementById("savings").value)
 document.getElementById("results").classList.remove("hidden");
 const totalExpenses = software + courses + internet;
 const balance = income - totalExpenses;
 const percentage = savings / 100;
 const savingAmount = balance * percentage
 document.getElementById("savings-amount").innerText = savingAmount;
 const remainingBalance = balance - savingAmount;
 document.getElementById("remaining-balance").innerText = remainingBalance;
})
// function for add class
function addClass(id, className) {
 document.getElementById(id).classList.add(className)
}

// function for remove class
function removeClass(id, className) {
 document.getElementById(id).classList.remove(className);
}


document.getElementById("history-tab").addEventListener("click", function () {
 addClass("history-tab", "text-white")
 addClass("history-tab", "bg-gradient-to-r")
 addClass("history-tab", "from-blue-500")
 addClass("history-tab", "to-purple-600")

 removeClass("history-tab", "text-gray-600")
})