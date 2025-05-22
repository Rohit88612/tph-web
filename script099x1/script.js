// Function to copy either FiveM or Minecraft IP
function copyIP(serverType) {
  let serverIP = "";
  
  // Set the corresponding server IP based on the type
  if (serverType === "fivem") {
    serverIP = "coming soon buddy have some patience"; // Change this to your FiveM IP
  } else if (serverType === "minecraft") {
    serverIP = "bhaichara.tphub.in:25535"; // Change this to your Minecraft IP
  }

  // Copy to clipboard and alert the user
  navigator.clipboard.writeText(serverIP).then(() => {
    alert(`${serverType.charAt(0).toUpperCase() + serverType.slice(1)} IP copied to clipboard!`);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

// Function to toggle the visibility of the pre-written text in dropdown inside the card
function toggleDropdownText() {
  const text = document.getElementById("dropdown-text");
  if (text) {
    text.style.display = text.style.display === "none" ? "block" : "none";
  }
}
