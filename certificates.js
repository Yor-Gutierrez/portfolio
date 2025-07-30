
  function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
  });