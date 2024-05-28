// document.addEventListener("DOMContentLoaded", function () {
//   const imgElement = document.getElementById("clickable-image");
//   const coordinatesDiv = document.getElementById("coordinates");

//   imgElement.addEventListener("click", function (event) {
//     const x = event.clientX;
//     const y = event.clientY;
//     coordinatesDiv.textContent = `Clicked at (${x}, ${y})`;
//     console.log(x, y);
//   });
// });
document.addEventListener("DOMContentLoaded", function () {
  const imgElement = document.getElementById("clickable-image");
  const coordinatesDiv = document.getElementById("coordinates");

  imgElement.addEventListener("click", function (event) {
    // Calculate the click position relative to the image
    const rect = imgElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Display an alert box with the new coordinates
    alert(`Clicked at (${x}, ${y})`);

    // Optionally, update the text content with the new coordinates
    coordinatesDiv.textContent = `Clicked at (${x}, ${y})`;
  });
});
