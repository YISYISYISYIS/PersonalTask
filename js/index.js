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
    let allMovietitle = [];

      movieResult.forEach(element => {
        let movieTitle = element["original_title"];
        let moviePlot = element["overview"];
        let movieRating = element["vote_average"];
        let movieImage ="https://image.tmdb.org/t/p/w500" + element["poster_path"];
        let movieId = element["id"];  
        allMovietitle += movieTitle + "/";

        let tempCard = 
        `<div class="col">
          <div class="card h-100">
            <img class="movieImg ${movieId}" src="${movieImage}">
            <div class="card-body">
              <h5 class="card-title">제목 : ${movieTitle}</h5>
              <p class="card-text">줄거리 : <br>${moviePlot}</p>
            </div>
            <div class="card-footer">
              <small class="text-body-secondary">평점 : ${movieRating}점</small>
            </div>
          </div>
        </div>`;
        document.getElementById("cards").insertAdjacentHTML("beforeend",tempCard);
      });
      // //forEach 카드동적분배

    allMovietitle = allMovietitle.split("/").slice(0,-1);
    //allMovietitle을 문자열 =>배열. 문자열끝부분 뒷 구분자 삭제.
  
      
      
    let cardClick = document.querySelector("#cards");
        
      function idOutput(event){
        if(event.target.classList.contains("movieImg")){
          let tempName = event.target.className.split(" ");
          alert(`영화 ID : ${tempName[1]}`)
        }
      }
      
      cardClick.addEventListener("click", idOutput);
      
      // //카드창 클릭 부분  



    // let cardClick = document.querySelectorAll(".movieImg");
        
    //   function idOutput(){
    //     let tempName = this.className.split(" ");
    //     let tempNum = tempName[1]; 
    //     alert(`영화 ID : ${tempNum}`)
    //   }
    //   //this는 클릭 이벤트가 발생한 요소를 가리킴. 각각의 movieImg.
      
    //   cardClick.forEach(item => {
    //     item.addEventListener("click", idOutput);
    //   });
    //   // //카드창 클릭 부분




    let searchClick = document.querySelector(".searchBox_inner .btn");  

      let btnClick = function(){
        let tempValue = document.getElementById("floatingInput").value.toLowerCase();
        //여기서 .value는 html의 인풋필드에서 입력한 값을 가져오는 속성.
        let tempTitle = allMovietitle.filter((item)=>{
          return item.toLowerCase().includes(tempValue);
        });  
        
        let compareCard = document.querySelectorAll(".card-title");
        let cardIndex = document.querySelectorAll(".col");

        compareCard.forEach((item,i)=>{
          
          let titleCompare = tempTitle.filter((item1)=>{
            return item.innerText.includes(item1);
          })
          
          if(titleCompare.length === 0){
            cardIndex[i].style.display = "none";
          }else{
            cardIndex[i].style.display = "block";
          }
        });
      };
      searchClick.addEventListener("click",btnClick);
      // //검색버튼 클릭 부분
  })
  .catch(err => console.error(err));
  // //fetch




