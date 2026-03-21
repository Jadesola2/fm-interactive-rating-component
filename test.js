let rate = document.querySelectorAll("button"); // get all buttons
let selectednumber = null;
let submit = document.getElementById("submit");

// Loop through all the rating buttons
rate.forEach(b => {
  b.addEventListener("click", function () {
    // remove "active" class from all buttons first
    rate.forEach(btn => btn.classList.remove("active"));
    
    // add "active" class to the clicked button
    b.classList.add("active");
    
    // store the selected number
    selectednumber = b.innerText;
  });
});

// Submit button click 
submit.addEventListener("click", function () {
  if (selectednumber) {
    // hide first screen
    document.getElementById("homepage").classList.add("hidden");
    // show thank you screen
    document.getElementById("thankyou").classList.remove("hidden");
    // update the thank-you message
    document.getElementById("display").innerText =
      `You selected ${selectednumber} out of 5.`;
  } else {
    alert("⚠️ Please select a rating first!");
  }
});
