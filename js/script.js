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