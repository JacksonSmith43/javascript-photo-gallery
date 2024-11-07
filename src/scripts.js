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
      console.log("currentImageIndex: ", currentImageIndex);
    });
  });


  closeBtn.onclick = function () {
    modal.classList.add("hidden");
  }

  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex].src;
    console.log("currentImageIndex: ", currentImageIndex);
    console.log("modalImage.src : ", modalImage.src );

  })

  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex].src;
    console.log("currentImageIndex: ", currentImageIndex);

    if (currentImageIndex === 0) {
      currentImageIndex = images.length;
    }
  });

  // TODO: (Issue #3) Add an event listener for the closeBtn to close the modal

  // TODO: (Issue #3) Add an event listener to close the modal when clicking the modal background

  // TODO: (Issue #4) Create a function to update the state of the navigation buttons based on currentImageIndex
});
