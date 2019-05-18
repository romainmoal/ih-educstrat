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
              // let newLineSearch = `<li><h4>${profile.schools[0].schoolName}</h4></li>`
              let newLineSearch = `<li class="list-group-item" ng-repeat="item in list track by $index">${profile.schools[0].schoolName}</li>`
              if (!liste_html.innerHTML.includes(newLineSearch)){
                schoolArray.push(newLineSearch)
                liste_html.innerHTML += newLineSearch;
              }
            }
          }
        });
    }

    searchHandler();
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