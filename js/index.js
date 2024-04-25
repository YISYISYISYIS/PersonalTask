const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTg2NGM3MGRmYjEzMzExZjcwMmI0N2M5ODFmMjVmNyIsInN1YiI6IjY2MjliNDYwMTYyYmMzMDA5ZGM3YjVlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GJ9B8eFTMtn7HeHDWq-DoFKDC1OZBSCr6wB8Cy9Y8AM'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response =>{
    let movieResult = response["results"];
      movieResult.forEach(element => {
        let movieTitle = element["original_title"];
        let moviePlot = element["overview"];
        let movieRating = element["vote_average"];
        let movieImage ="https://image.tmdb.org/t/p/w500" + element["poster_path"];

        let tempCard = 
        `<div class="col">
          <div class="card h-100">
            <img class="movieImg" src="${movieImage}">
            <div class="card-body">
              <h5 class="card-title">제목 : ${movieTitle}</h5>
              <p class="card-text">줄거리 : <br>${moviePlot}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">평점 : ${movieRating}점</small>
            </div>
          </div>
        </div>`;
        // $("#cards").append(tempCard);
        document.getElementById("cards").insertAdjacentHTML("beforeend",tempCard)
        //insertAdjacentHTML메서드는 지정된 위치에 HTML문자열을 추가
        //첫번째 파라미터가 삽입위치, 두번째 파라미터는 삽입할 HTML문자열
        // beforebegin : 대상 요소의 바로 앞에 HTML 삽입.
        // afterbegin: 대상 요소의 내용물 시작 부분에 HTML 삽입.
        // beforeend: 대상 요소의 내용물 끝 부분에 HTML을 삽입.
        // afterend: 대상 요소의 바로 뒤에 HTML을 삽입.

        // afterbegin는 새로운 내용이 기존의 내용의 맨앞에 추가되기때문에 
        //가장 최근에 추가된내용이 제일 위로 올라감. 
        //반대로 beforeend는 새로운 내용이 기존내용의 맨뒤에 추가되기 때문에
        //추가한 순서대로 나열됨. 즉 내가 원하는 방식은 위에서부터 아래로 정렬이라서 beforeend씀
       
        // console.log(`이미지 : ${movieImage}, 제목 : ${movieTitle}, 줄거리 : ${moviePlot}, 평점:${movieRating}`);
      });
  })
  // .then(response => console.log(response))
  // .then(response => console.log(response["results"][0]["original_title"]))
  .catch(err => console.error(err));
  // fetch




