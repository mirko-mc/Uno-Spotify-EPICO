function searchArtist(name) {
  return new Promise((resolve, reject) => {
    console.log(name);
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + name)
      .then((response) => response.json())
      .then((data) => {
        //   console.log("************* 1 ** DATA\n", data);
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

function createCards(section, cover, albumTitle, artistName, albumDuration) {
  const divCard = document.createElement("div");
  divCard.setAttribute(
    "class",
    "card m-1 d-flex align-items-center justify-content-around flex-column px-1 py-2"
  );
  const img = document.createElement("img");
  img.setAttribute("src", cover, "class", "card-img-top img-fluid");
  const divCardBody = document.createElement("div");
  divCardBody.setAttribute(
    "class",
    "card-body d-flex align-items-center justify-content-around flex-column p-0"
  );
  const h5 = document.createElement("h5");
  h5.setAttribute("class", "card-title p-0 pt-2 m-0");
  h5.appendChild(document.createTextNode(albumTitle));
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list-group list-group-flush");
  const liArtist = document.createElement("li");
  liArtist.setAttribute("class", "list-group-item p-0 m-0");
  liArtist.appendChild(document.createTextNode(`Artista : ${artistName}`));
  liArtist.style.color = "black";
  ul.append(liArtist);
  const liDuration = document.createElement("li");
  liDuration.setAttribute("class", "list-group-item p-0");
  liDuration.appendChild(document.createTextNode(`Duration : ${albumDuration}m`));
  liDuration.style.color = "black";
  ul.append(liDuration);
  const a = document.createElement("a");
  a.setAttribute("class", "btn btn-secondary mt-2");
  a.appendChild(document.createTextNode("Crea lista"));
  divCard.appendChild(img);
  section.appendChild(divCard);
  divCardBody.appendChild(h5);
  divCardBody.appendChild(ul);
  divCardBody.appendChild(a);
  divCard.appendChild(divCardBody);
}
function search(name) {
  // console.log(name);
  const found = document.getElementById("found");
  found.classList = "flex";
  const searchSection = document.getElementById("searchSection");

  searchArtist(name).then(function (artist) {
    artist.forEach((item) => {
      createCards(
        searchSection,
        item.album.cover,
        item.album.title,
        item.artist.name,
        item.duration
      );
      //   const divCard = document.createElement("div");
      //   divCard.setAttribute("class", "card col-3");
      //   const img = document.createElement("img");
      //   img.setAttribute("src", item.album.cover, "class", "card-img-top img-fluid");
      //   const divCardBody = document.createElement("div");
      //   divCardBody.setAttribute("class", "card-body");
      //   const h5 = document.createElement("h5");
      //   h5.setAttribute("class", "card-title");
      //   h5.appendChild(document.createTextNode(item.album.title));
      //   const ul = document.createElement("ul");
      //   ul.setAttribute("class", "list-group list-group-flush");
      //   const li = document.createElement("li");
      //   li.setAttribute("class", "list-group-item");
      //   li.appendChild(document.createTextNode(`Artista : ${item.artist.name}`));
      //   li.style.color = "black";
      //   ul.append(li);
      //   li.setAttribute("class", "list-group-item");
      //   li.appendChild(document.createTextNode(`Duration : ${item.duration}m`));
      //   li.style.color = "black";
      //   ul.append(li);
      //   const a = document.createElement("a");
      //   a.setAttribute("class", "btn btn-secondary");
      //   a.appendChild(document.createTextNode("Crea lista"));
      //   divCard.appendChild(img);
      //   eminemSection.appendChild(divCard);
      //   divCardBody.appendChild(h5);
      //   divCardBody.appendChild(ul);
      //   divCardBody.appendChild(a);
      //   divCard.appendChild(divCardBody);
    });
    //   console.log(artist);
  });
}
