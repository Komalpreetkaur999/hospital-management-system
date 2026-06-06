function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === "admin" && p === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").innerText = "Invalid login";
    }
}

let patients = [];
let queue = [];

function addPatient() {
    let n = document.getElementById("name").value;
    patients.push(n);
    document.getElementById("plist").innerHTML += "<li>" + n + "</li>";
}

function addQueue() {
    let q = document.getElementById("qname").value;
    queue.push(q);
    displayQueue();
}

function nextQueue() {
    queue.shift();
    displayQueue();
}

function displayQueue() {
    let list = document.getElementById("qlist");
    if (!list) return;
    list.innerHTML = "";
    queue.forEach(q => {
        list.innerHTML += "<li>" + q + "</li>";
    });
}

function bill() {
    let f = Number(document.getElementById("fee").value);
    let m = Number(document.getElementById("med").value);

    document.getElementById("total").innerText =
        "Total Bill: ₹" + (f + m);
}
