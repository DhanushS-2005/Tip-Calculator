function tip() {
    // get the input
    let totalAmount = document.getElementById("totalAmount").value;
    let tipAmount = document.getElementById('tipAmount').value;
    let shares = document.getElementById("shares").value;
    // main logic
    let total = Number(totalAmount) + Number(tipAmount);
    let result = total / Number(shares);
    // result
    let res = document.getElementById("result");
    res.textContent = `₹ ${result}`;
}