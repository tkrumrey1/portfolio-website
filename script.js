document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
      const menu = dropdown.querySelector('.dropdown-content');
      menu.style.display = 'flex';
    });
    dropdown.addEventListener('mouseout', () => {
      const menu = dropdown.querySelector('.dropdown-content');
      menu.style.display = 'none';
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error("Failed to load header:", error));

  // Load footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Failed to load footer:", error));
});

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <div id="lightbox-content"></div>
    <div id="lightbox-close">&times;</div>
  `;
  document.body.appendChild(lightbox);

  const content = document.getElementById('lightbox-content');
  const closeBtn = document.getElementById('lightbox-close');

  // Handle photo clicks
  document.querySelectorAll('.lightbox-photo').forEach(img => {
    img.addEventListener('click', () => {
      content.innerHTML = `<img src="${img.src}" />`;
      lightbox.style.display = 'flex';
    });
  });

  // Handle video thumbnail clicks
  document.querySelectorAll('.video-thumb').forEach(div => {
    div.addEventListener('click', () => {
      const videoId = div.getAttribute('data-video-id');
      content.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>`;
      lightbox.style.display = 'flex';
    });
  });

  // Close logic
  function closeLightbox() {
    lightbox.style.display = 'none';
    content.innerHTML = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});

//automatically fill all videos with their thumbnails
document.querySelectorAll('.video-thumb').forEach(div => {
  const videoId = div.dataset.videoId;
  div.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`;
});
