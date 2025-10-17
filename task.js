function changeBorders() {
  const images = document.querySelectorAll('.myImage');
  const borderStyles = ['solid', 'dotted', 'dashed', 'double'];

  images.forEach((img, index) => {
    img.style.border = `4px ${borderStyles[index]} #0077cc`;
  });
}

// Event listener for button
document.getElementById('changeBorderBtn').addEventListener('click', changeBorders);
