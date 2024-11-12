document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.getElementById("closeBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = Array.from(document.querySelectorAll(".image"));

  let currentImageIndex = 0;

  images.forEach((element, index) => {
    element.addEventListener("click", () => {
      currentImageIndex = index;
      modal.classList.remove("hidden");
      modalImage.src = element.src; // The selected image. 
      console.log("currentImageIndex of clicked image: ", currentImageIndex);

      checksCurrentImageIndexState(currentImageIndex, images.length);

    });

  });


  closeBtn.onclick = function () {
    modal.classList.add("hidden");
  }

  window.onclick = function (event) { // When clicking anywhere but the picture, it closes the modal window. 
    if (event.target === modal) {
      modal.classList.add("hidden");
    }

  }

  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex].src;
    console.log("currentImageIndex of nextBtn: ", currentImageIndex);
    console.log("modalImage.src : ", modalImage.src);

    checksCurrentImageIndexState(currentImageIndex, images.length);
  })

  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex].src;
    console.log("currentImageIndex of prevBtn: ", currentImageIndex);

    checksCurrentImageIndexState(currentImageIndex, images.length);
  });

});

function checksCurrentImageIndexState(currentImageIndex, imageLength) {

  if (currentImageIndex >= imageLength - 1) {
    nextBtn.setAttribute('disabled', '');

  } else {
    nextBtn.removeAttribute('disabled', '');
  }

  if (currentImageIndex <= 0) {
    prevBtn.setAttribute('disabled', '');

  } else {
    prevBtn.removeAttribute('disabled', '');
  }

}