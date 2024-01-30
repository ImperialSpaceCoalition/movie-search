function updateDOM(movieData) {
  var displayPortElement = document.getElementById('display-port');

  // Clear existing content
  displayPortElement.innerHTML = '';

  // Create elements to display movie information
  var titleElement = document.createElement('h2');
  titleElement.textContent = `${movieData.Title} (${movieData.Year})`;

  // Create image element for the movie cover
  var coverElement = document.createElement('img');
  coverElement.src = movieData.Poster;
  coverElement.alt = `${movieData.Title} Cover`;

  var genreElement = document.createElement('p');
  genreElement.innerHTML = `<strong>Genre:</strong> ${movieData.Genre}`;

  var directorElement = document.createElement('p');
  directorElement.innerHTML = `<strong>Director:</strong> ${movieData.Director}`;

  var actorsElement = document.createElement('p');
    actorsElement.innerHTML = `<strong>Actors:</strong> ${movieData.Actors}`;

  var plotElement = document.createElement('p');
  plotElement.innerHTML = `<strong>Plot:</strong> ${movieData.Plot}`;

  var ratingElement = document.createElement('p');
  ratingElement.innerHTML = `<strong>IMDb Rating:</strong> ${movieData.imdbRating}`;

  // Append elements to the display port
  displayPortElement.appendChild(titleElement);
  displayPortElement.appendChild(coverElement); // Add the movie cover
  displayPortElement.appendChild(genreElement);
  displayPortElement.appendChild(directorElement);
  displayPortElement.appendChild(actorsElement);
  displayPortElement.appendChild(plotElement);
  displayPortElement.appendChild(ratingElement);
}
  // light and dark mode
  document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...
  
    // Add event listener for the mode toggle button
    var toggleModeButton = document.getElementById('toggle-mode-btn');
    toggleModeButton.addEventListener('click', toggleMode);
  
    // Function to toggle between light and dark modes
    function toggleMode() {
      var body = document.body;
      body.classList.toggle('dark-mode');
    }
  
  });
  



  // create and append more elements as needed


function fetchMovieData() {
  var apiKey = '462bfaf2';
  var movieTitle = document.getElementById('movieTitle').value;

  // Make a request to OMDB API
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`)
      .then(response => response.json())
      .then(data => {
          if (data.Response === 'True') {
              updateDOM(data);
          } else {
              console.log('Movie not found!');
          }
      })
      .catch(error => console.error('Error fetching movie data:', error));
}


  
  


//This is the ajax method of the above
// function fetchMovieData() {
//     var apiKey = 'YOUR_OMDB_API_KEY'; // Replace with your actual API key from OMDB
//     var movieTitle = document.getElementById('movieTitle').value;
  
//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();
  
//     // Set up the request
//     xhr.open('GET', `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`, true);
  
//     // Define the callback function to handle the response
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const data = JSON.parse(xhr.responseText);
//           if (data.Response === 'True') {
//             displayMovieInfo(data);
//           } else {
//             console.log('Movie not found!');
//           }
//         } else {
//           console.error('Error fetching movie data. Status:', xhr.status);
//         }
//       }
//     };
  
//     // Send the request
//     xhr.send();
//   }
  
  
//   function displayMovieInfo(movieData) {
//     console.log('Movie Information:');
//     console.log('Title:', movieData.Title);
//     console.log('Year:', movieData.Year);
//     console.log('Genre:', movieData.Genre);
//     console.log('Director:', movieData.Director);
//     console.log('Plot:', movieData.Plot);
//     console.log('IMDb Rating:', movieData.imdbRating);
//     // You can log more details as needed
  