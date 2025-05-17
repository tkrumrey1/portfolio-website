// popup dropdown menus on hover
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

// inject header and footer on page load
document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error("Failed to load header:", error));

  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Failed to load footer:", error));
});

// lightboxes
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

// Clicks on photos
document.querySelectorAll('.lightbox-photo').forEach(img => {
  img.addEventListener('click', () => {
    content.innerHTML = `<img src="${img.src}" />`;
    lightbox.style.display = 'flex';
  });
});

// Clicks on videos
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

// Lightbox close button
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});
});

// Automatically fill all videos with their thumbnails
document.querySelectorAll('.video-thumb').forEach(div => {
  if (div.hasAttribute('data-static-thumb')) return; // Skip custom thumbnails

  const videoId = div.dataset.videoId;
  div.style.backgroundImage = `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`;
});

// Contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-container form");
  const messageContainer = document.createElement("div");
  messageContainer.style.marginTop = "20px";
  messageContainer.style.fontFamily = "'Tomorrow', sans-serif";
  form.appendChild(messageContainer);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          messageContainer.textContent = "Message sent!";
          messageContainer.style.color = "#0f0";
          form.reset(); // Clear form fields
        } else {
          return response.json().then(data => {
            throw new Error(data.error || "Something went wrong.");
          });
        }
      })
      .catch(error => {
        messageContainer.textContent = "Failed to send message.";
        messageContainer.style.color = "#f00";
        console.error(error);
      });
  });
});
