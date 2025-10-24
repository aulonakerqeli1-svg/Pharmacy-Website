
var prices = {
    "paracetamol": 5,
    "ibuprofen": 6,
    "amoxicillin": 8,
    "aspirina": 4,
    "krem": 10,
    "tensiometer": 50,
    "vitamina_c": 7,
    "diazepan": 12,
    "neuroton": 15
};

function calculateTotal() {
    var medication = document.getElementById("medication").value;
    var quantity = parseInt(document.getElementById("quantity").value);
    var totalAmount = 0;

    if (medication !== "select" && quantity > 0) {
        var pricePerUnit = prices[medication] || 0;
        totalAmount = pricePerUnit * quantity;
        document.getElementById("total_amount").innerText = "Shuma totale: $" + totalAmount;
    } else {
        alert("Ju lutem zgjidhni një barnë dhe shkruani sasinë.");
    }
}

function sendmail() {
    alert("Formulari është dërguar me sukses. Faleminderit për pagesën tuaj.");
}
