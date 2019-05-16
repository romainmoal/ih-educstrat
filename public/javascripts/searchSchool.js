// partie à voir

document.addEventListener(
  "DOMContentLoaded",
  () => {
    var liste_html = document.getElementById("listeSchool");
    var search = document.getElementById("searchSchool");
    var liste_schools;

    search.addEventListener("keyup", searchHandler);

    function searchHandler() {
      let searchValue = document.getElementById("searchSchool").value;

      axios
        .post("/main", { search: searchValue })
        .then(response => {
          liste_html.innerHTML = "";
          liste_schools = response.data.liste;
          for (let school of response.data.liste) {
            liste_html.innerHTML += `<li>
              <h4>${school.schoolName}</h4></li>`;
          }
        });
    }

    searchHandler();
  },
  false
);