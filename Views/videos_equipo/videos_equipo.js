document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener los parámetros de la URL
  const params = new URLSearchParams(window.location.search);
  const videoSrc = params.get("video");
  const videoTitle = params.get("title");

  const videoElement = document.getElementById("mainVideoPlayer");
  const titleElement = document.getElementById("videoPageTitle");
  const videoBox = document.getElementById("videoBox");

  // 2. Cargar el video y título si existen
  if (videoTitle && titleElement) {
    titleElement.textContent = `videos - ${videoTitle}`;
    document.title = `Wiki Frontera Beisbolera - ${videoTitle}`;
  }

  if (videoSrc && videoElement) {
    videoElement.src = decodeURIComponent(videoSrc);
    videoElement.load();
    videoElement.play().catch(err => {
      console.warn("Autoplay bloqueado por el navegador hasta interacción del usuario:", err);
    });
  }

  const filterButtons = document.querySelectorAll(".btn-filter");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      videoBox.classList.remove("filter-pixelado", "filter-desenfoque", "filter-termica", "filter-grises");

      const filter = btn.getAttribute("data-filter");
      if (filter === "pixelado") {
        videoBox.classList.add("filter-pixelado");
      } else if (filter === "desenfoque") {
        videoBox.classList.add("filter-desenfoque");
      } else if (filter === "termica") {
        videoBox.classList.add("filter-termica");
      }
    });
  });
});