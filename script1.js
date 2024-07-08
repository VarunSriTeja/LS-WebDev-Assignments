document.addEventListener('DOMContentLoaded', () => {
    const pieceElements = document.querySelectorAll('.piece2');
    const pieceImage = document.getElementById('piece-image2');
    
  
    pieceElements.forEach(piece => {
      piece.addEventListener('click', () => {
        const imageSrc = piece.getAttribute('data-image');
        pieceImage.src = imageSrc;
      });
    });
  });
  