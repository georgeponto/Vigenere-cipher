const chars = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," "
];

function encryptMessage() {
    const key = document.getElementById("key").value.toUpperCase();
    const message = document.getElementById("message").value.toUpperCase();

    let x = 0;
    let shift = [];
    let coded = [];

    for (let i of key) {
        shift.push(chars.indexOf(i));
    }

    for (let i of message) {
        let pos = chars.indexOf(i) + shift[x];

        if (pos >= 27) {
            pos = pos - 27;
        }

        coded.push(chars[pos]);

        x++;

        if (x === shift.length) {
            x = 0;
        }
    }

    const result = coded.join("");
    document.getElementById("output").textContent = result;
}

function decryptMessage() {
    const key = document.getElementById("key").value.toUpperCase();
    const message = document.getElementById("message").value.toUpperCase();

    let x = 0;
    let shift = [];
    let solved = [];

    for (let i of key) {
        shift.push(chars.indexOf(i));
    }

    for (let i of message) {
        let pos = chars.indexOf(i) - shift[x];

        if (pos < 0) {
            pos = pos + 27;
        }

        solved.push(chars[pos]);

        x++;

        if (x === shift.length) {
            x = 0;
        }
    }

    const result = solved.join("");
    document.getElementById("output").textContent = result;
}

function copyOutput() {
    const output = document.getElementById("output").textContent;

    navigator.clipboard.writeText(output);

    alert("Copied to clipboard!");
}

function resetFields() {
    document.getElementById("key").value = "";
    document.getElementById("message").value = "";
    document.getElementById("output").textContent = "";
}
