


function onm1(a, b) {
    let k = document.getElementById(b);
    if (a.value === "") {
        k.textContent = "required";
    } else {
        k.textContent = "";
    }
}

let inp1 = document.getElementById("siteNameInput");
let inp2 = document.getElementById("siteUrlInput");
let butt = document.getElementById("submitBtn");
let form1 = document.getElementById("bookmarkForm");
let ul1 = document.getElementById("bookmarksList")
form1.addEventListener("submit", function(event) {
    event.preventDefault();
});
inp1.addEventListener("change", function() {
    onm1(inp1, "siteNameErrMsg");
});
inp2.addEventListener("change", function() {
    onm1(inp1, "siteUrlErrMsg");
});
butt.addEventListener("click", function() {
    if (inp1.value === "" && inp2.value === "") {
        onm1(inp1, "siteNameErrMsg")
        onm1(inp2, "siteUrlErrMsg")
    } else if (inp1.value === "") {
        onm1(inp1, "siteNameErrMsg");
    } else if (inp2.value === "") {
        onm1(inp2, "siteUrlErrMsg");
    } else {
        let m = document.createElement("li");
        let o = document.createElement("a");
        o.textContent = inp1.value;
        o.href = inp2.value;
        m.appendChild(o);
        ul1.appendChild(m);
    }
});