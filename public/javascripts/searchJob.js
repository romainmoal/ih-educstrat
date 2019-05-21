// autocomplétion recherche par job

document.addEventListener(
  "DOMContentLoaded",
  () => {
    var listeJob_html = document.getElementById("listeJob");
    var search_job = document.getElementById("searchJob");
    var liste_job;

    search_job.addEventListener("keyup", searchHandler);

    function searchHandler() {
      let searchJobValue = document.getElementById("searchJob").value;

      axios
        .post("/main", { search: searchJobValue })
        .then(response => {
          listeJob_html.innerHTML = "";
          liste_job = response.data.liste;
          for (let profile of response.data.liste) {
            if (profile.jobs[0].jobTitle !== undefined && searchJobValue != ""){
              let newLineSearch = `<li class="list-group-item list-group-item-action" ng-repeat="item in list track by $index">${profile.jobs[0].jobTitle}</li>`
              // let newLineSearch = `<option value="${profile.jobs[0].jobTitle}">${profile.jobs[0].jobTitle}</option>`            
              if (!listeJob_html.innerHTML.includes(newLineSearch)){
                listeJob_html.innerHTML += newLineSearch;
              }
            }
          }
        });
    }

    searchHandler();
  },
  false
);

// lorsque l'on clique sur l'un des résultats de la recherche, il se met dans l'input
var searchResult = document.getElementsByClassName("list-group-item")

searchResult.onclick = function(){
  var search_job = document.getElementById("searchJob");
  searchResult = search_job.innerHTML;
};

// $( ".list-group-item" ).click(function() {
//   alert( "Handler for .click() called." );
// });