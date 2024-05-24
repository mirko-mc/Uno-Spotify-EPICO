function searchArtist(name) {
  return new Promise((resolve, reject) => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + name)
      .then((response) => response.json())
      .then((data) => {
        //   console.log("************* 1 ** DATA\n", data["data"]);
        const artist = data["data"];
        //   console.log("************* 2 ** ARTIST\n", artist);
        artist.forEach((item) => {
          // console.log("************* 3 ** ar item\n", item);
          resolve(artist);
        });
      });
  }).catch((error) => {
    console.error("Error fetching data:", error);
  });
}
// searchArtist("eminem");
function search(name) {
const eminem = document.getElementById("eminem");
eminem.classList = "flex";
const eminemSection = document.getElementById("eminemSection");

searchArtist(name).then(function (artist) {
  artist.forEach((item) => {
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card col-3");
    const img = document.createElement("img");
    img.setAttribute("src", item.album.cover, "class", "card-img-top");
    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");
    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.appendChild(document.createTextNode(item.album.title));
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list-group list-group-flush");
    const li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.appendChild(document.createTextNode(`Artista : ${item.artist.name}`));
    li.style.color="black";
    ul.append(li);
    li.setAttribute("class", "list-group-item");
    li.appendChild(document.createTextNode(`Duration : ${item.duration}m`));
    li.style.color="black";
    ul.append(li);
    const a = document.createElement("a");
    a.setAttribute("class", "btn btn-secondary");
    a.appendChild(document.createTextNode("Crea lista"));
    divCard.appendChild(img);
    eminemSection.appendChild(divCard);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(ul);
    divCardBody.appendChild(a);
    divCard.appendChild(divCardBody);
  });
//   console.log(artist);
});
}