function upDate(source, altText) {
    console.log("Mouse over event triggered");
    console.log("Preview image details - Source:", source, "Alt:", altText);
  
    // Update the text inside the image-text element
    document.getElementById('image-text').textContent = altText;
  
    // Change the background image of the image container
    document.getElementById('image').style.backgroundImage = `url('${source}')`;
  }
  
  function undo() {
    console.log("Mouse out event triggered");
  
    // Reset the background image to empty and text to original
    document.getElementById('image').style.backgroundImage = "none";
    document.getElementById('image-text').textContent = "Hover over an image below to display here.";
  }
  