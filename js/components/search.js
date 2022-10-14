const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", searchResult);

export function searchResult(event) {
    event.preventDefault();
    let searchString = document.querySelector('input[type="search"]').value;
    let str = searchString.trim().toLowerCase();
    let strFound;
    if (window.find) {
        strFound = self.find(str);
        if (navigator.appName == "Opera") {
            alert("Opera browsers not supported, sorry...")
            return;
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1);
            if (!strFound) { alert("Text " + str + " not found!") }
            while (self.find(str, 0, 1)) continue;
        }
    }

}