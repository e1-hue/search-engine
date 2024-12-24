const searchResults = {
    music: [
      { name: "YouTube", url: "https://www.youtube.com" },
      { name: "SoundCloud", url: "https://www.soundcloud.com" },
      { name: "Spotify", url: "https://www.spotify.com" }
    ],
    makeup: [
      { name: "Sephora", url: "https://www.sephora.com" },
      { name: "Rare Beauty", url: "https://www.rarebeauty.com" }
    ]
  };
  
  function performSearch() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Clear previous results
  
    if (searchResults[query]) {
      searchResults[query].forEach(item => {
        const link = document.createElement("div");
        link.textContent = item.name;
        link.classList.add("result-item");
        link.onclick = () => {
          window.open(item.url, "_blank"); // Open in a new tab
        };
        resultsDiv.appendChild(link);
      });
    } else if (query.length > 0) {
      const notFound = document.createElement("p");
      notFound.textContent = "No results found.";
      notFound.style.color = "red";
      resultsDiv.appendChild(notFound);
    }
  }
  
  function fetchResults() {
    // Optionally handle a button-click-triggered search
    performSearch();
  }
  