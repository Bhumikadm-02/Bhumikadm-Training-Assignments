const donateButton = document.querySelector(".button");

  donateButton.addEventListener("click", () => {
    const donationAmount = prompt("Enter donation amount:");

    // Handle the donation amount here (e.g. send it to a server, update the UI, etc.)
    console.log("Donation amount:", donationAmount);
  });

