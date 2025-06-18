document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');
    const nav = document.querySelector('nav');

    if (hamburger && navMenu && nav) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            nav.classList.toggle('menu-open');
            hamburger.textContent = hamburger.textContent.trim() === '☰' ? '✕' : '☰';
            // Ensure main-nav is visible when active
            if (navMenu.classList.contains('active')) {
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = '';
            }
        });
    } else {
        console.error('Required elements not found in the DOM.');
    }

  // Simple Product Card Search
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const productCards = document.querySelectorAll(".product-card");

  searchButton.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const content = card.textContent.toLowerCase();
      card.style.display = content.includes(query) ? "block" : "none";
    });

    searchInput.focus(); // UX: refocus on search
  });
});
