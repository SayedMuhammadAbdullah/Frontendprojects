let shareBtn=document.getElementById('share-btn');
console.log(shareBtn)
let shareBox=document.getElementById('share-box');
console.log(shareBox)
shareBtn.addEventListener("click", function() {
    // Change the background color of the element
    shareBox.style.display = "flex";
  });
  document.addEventListener("click", function(event) {
    // Check if the click target is inside the share box or the share button
    let isInside = shareBox.contains(event.target) || shareBtn.contains(event.target);
    // If not, hide the share box
    if (!isInside) {
      shareBox.style.display = "none";
    }
  });