
// -------------------------------------------
// TEST RUNNER: DO NOT EDIT
// -------------------------------------------
const appDiv = document.getElementById("test");
const resDiv = document.getElementById("result");

function pass(message) {
  return `<p style="color: green">PASS: ${message}</p>`;
}
function fail(message) {
  return `<p style="color: red">FAIL: ${message}</p>`;
}
function Test(message, testFunction) {
  //console.log("test", testFunction());
  const result = testFunction();
  const li = document.createElement("li");
  li.innerHTML = message + result;
  document.getElementById("list").appendChild(li);
  //console.log("message", message);
}
