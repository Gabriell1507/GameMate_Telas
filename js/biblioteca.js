const btnExpandir = document.querySelector('.btn-expandir');const menuLateral = document.querySelector('.menu-lateral');const menu = document.querySelector('.menu');btnExpandir.addEventListener('click', () => {menuLateral.classList.toggle('active');menu.classList.toggle('active');});
document.addEventListener('click', (event) => {const isClickInside = menuLateral.contains(event.target) || btnExpandir.contains(event.target);
if (!isClickInside) {menuLateral.classList.remove('active');menu.classList.remove('active');}});

function handleKeyPress(event) {
    if (event.key === "Enter") {
      var searchTerm = document.getElementById("searchInput").value;
      if (searchTerm.trim() !== "") {
        var newUrl = "telaBusca.html?termo=" + encodeURIComponent(searchTerm);
        window.location.href = newUrl;
      }
    }
  }
  