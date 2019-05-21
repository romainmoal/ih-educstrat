// // lorsque l'on clique sur l'un des résultats de la recherche, il se met dans l'input
// var searchResult = document.getElementsByClassName("list-group-item")

// searchResult.onclick = function(){
//   var search_job = document.getElementById("searchJob");
//   searchResult = search_job.innerHTML;
// };

// lorsque l'on clique sur l'un des résultats de la recherche, il se met dans l'input
inputComplete = function(){
  let searchResult = document.getElementById(profile.schools[0].schoolName)
  //console.log(searchResult.innerHTML)
  let search_school = document.getElementById("searchSchool");
  searchResult.onclick = function(){
    searchResult = search_school.innerHTML;
    console.log(searchResult)
  };
}


// autocomplétion recherche par school

document.addEventListener(
  "DOMContentLoaded",
  () => {
    var liste_html = document.getElementById("listeSchool");
    var search_school = document.getElementById("searchSchool");
    var liste_schools;

    search_school.addEventListener("keyup", searchHandler);

    function searchHandler() {
      let searchValue = document.getElementById("searchSchool").value;

      axios
        .post("/main", { search: searchValue })
        .then(response => {
          liste_html.innerHTML = "";
          liste_schools = response.data.liste;
          let schoolArray = []
          for (let profile of response.data.liste) {
            if (profile.schools[0].schoolName !== undefined && searchValue != ""){
              let newLineSearch = `
              <li class="list-group-item list-group-item-action" id="${profile.schools[0].schoolName}"
              ng-repeat="item in list track by $index">${profile.schools[0].schoolName}</li>`
              if (!liste_html.innerHTML.includes(newLineSearch)){
                schoolArray.push(newLineSearch)
                liste_html.innerHTML += newLineSearch;
              }
            }
          }
        });
    }

    searchHandler();
    inputComplete();
  },
  false
);

// stringSimilarity
// var stringSimilarity = require('string-similarity');

// function isSimilar(newLine ,arr){
//   for (i=0, i<arr.length, i++){
//     if (stringSimilarity.compareTwoStrings(newLine, arr[i])>0.7){
//       break
//     } else {}
// }