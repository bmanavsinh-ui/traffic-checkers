function checkTraffic() {
  let location = document.querySelector("input").value;
  let output = document.getElementById("output");

  if (location === "") {
    output.innerText = "Please enter location!";
  } else {
    // Fake traffic result (demo)
    let status = ["Low Traffic 🟢", "Moderate Traffic 🟡", "Heavy Traffic 🔴"];
    let random = status[Math.floor(Math.random() * status.length)];

    output.innerText = "Traffic in " + location + ": " + random;
  }
}