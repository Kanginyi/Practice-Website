const h2 = document.createElement("h2");
h2.textContent = "Make sure to watch the video before you go";
document.querySelector("body").appendChild(h2);

console.log("WHAT AM I SUPPOSED TO ADD HERE WITH JAVASCRIPT");

const never = document.getElementById("never");
never.addEventListener("click", () => {
    alert("Never!");
});

const always = document.getElementById("always");
always.addEventListener("click", () => {
    alert("Always!");
});