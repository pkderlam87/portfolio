const searchForm = document.querySelector("#searchForm");
const noResults = document.querySelector(".searchbar__results");
searchForm.addEventListener("submit", searchResult);

export function searchResult(event) {
    event.preventDefault();
    let searchString = document.querySelector('input[type="search"]').value;
    let str = searchString.trim().toLowerCase();
    let strFound;
    if (window.find) {
        strFound = self.find(str);
        if (!strFound) {
            strFound = self.find(str, 0, 1);
            if (!strFound) { alert("Text " + str + " not found!") }
            while (self.find(str, 0, 1)) continue;
        }
    }

}