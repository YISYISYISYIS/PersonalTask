const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg2NGM3MGRmYjEzMzExZjcwMmI0N2M5ODFmMjVmNyIsInN1YiI6IjY2MjliNDYwMTYyYmMzMDA5ZGM3YjVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ9B8eFTMtn7HeHDWq-DoFKDC1OZBSCr6wB8Cy9Y8AM'
  }
};
let url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
fetch(url, options)
  .then(response => response.json())
  .then(response =>{
    let movieResult = response["results"];
      movieResult.forEach(element => {
        let movieTitle = element["original_title"];
        let moviePlot = element["overview"];
        let movieRating = element["vote_average"];
        let movieImage ="https://image.tmdb.org/t/p/w500" + element["poster_path"];

        let tempCard = `<div class="col">
        <div class="card h-100">
          <img src="${movieImage}">
          <div class="card-body">
            <h5 class="card-title">${movieTitle}</h5>
            <p class="card-text">${moviePlot}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">${movieRating}</small>
          </div>
        </div>
      </div>`;
        $("#cards").append(tempCard);

        // console.log(`이미지 : ${movieImage}, 제목 : ${movieTitle}, 줄거리 : ${moviePlot}, 평점:${movieRating}`);
      });
  })
  // .then(response => console.log(response))
  // .then(response => console.log(response["results"][0]["original_title"]))
  .catch(err => console.error(err));
  // fetch




