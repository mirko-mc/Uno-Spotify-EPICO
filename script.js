const fillSection = [
  {
    artist: "eminem",
    id: "eminem",
    section: "eminemSection",
  },
  {
    artist: "metallica",
    id: "metallica",
    section: "metallicaSection",
  },
  {
    artist: "queen",
    id: "queen",
    section: "queenSection",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  fillSection.forEach((itemDb) => {
    const idArtist = document.getElementById(itemDb.artist);
    idArtist.classList = "flex";
    const a = document.createElement("a");
    a.setAttribute("class", "btn btn-secondary mt-2");
    a.setAttribute("id", `${itemDb.artist}TrackList`);
    a.setAttribute("onclick", `trackList(${itemDb.artist})`);
    a.setAttribute("data-toggle", "modal");
    a.setAttribute("data-target", "#titleModal");
    a.appendChild(document.createTextNode("Crea lista canzoni"));
    idArtist.append(a);
    const artistSection = document.getElementById(itemDb.section);
    searchArtist(itemDb.artist).then(function (artist) {
      artist.forEach((itemArtist) => {
        createCards(
          artistSection,
          itemArtist.album.cover,
          itemArtist.album.title,
          itemArtist.artist.name,
          itemArtist.duration
        );
      });
    });
  });
});
async function searchArtist(name) {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + name
    );
    const data = await response.json();
    const artist = data["data"];
    return artist;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

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
  h5.style.color = "black";
  h5.appendChild(document.createTextNode(albumTitle));
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list-group list-group-flush");
  const liArtist = document.createElement("li");
  liArtist.setAttribute("class", "list-group-item p-0 m-0");
  liArtist.style.color = "black";
  liArtist.appendChild(document.createTextNode(`Artista : ${artistName}`));
  ul.append(liArtist);
  const liDuration = document.createElement("li");
  liDuration.setAttribute("class", "list-group-item p-0");
  liDuration.appendChild(
    document.createTextNode(`Duration : ${albumDuration}m`)
  );
  liDuration.style.color = "black";
  ul.append(liDuration);
  divCard.appendChild(img);
  section.appendChild(divCard);
  divCardBody.appendChild(h5);
  divCardBody.appendChild(ul);
  divCard.appendChild(divCardBody);
}
function search(name) {
  const found = document.getElementById("found");
  found.classList = "flex";
  const searchSection = document.getElementById("searchSection");

  fillSection.forEach((itemDb) => {
    const id = document.querySelector("#" + itemDb.id);
    console.log(id);
    id.classList.toggle("d-none");
  });
  searchArtist(name).then(function (artist) {
    artist.forEach((item) => {
      createCards(
        searchSection,
        item.album.cover,
        item.album.title,
        item.artist.name,
        item.duration
      );
    });
  });
}
function trackList(artistName) {
  const modalBody = document.querySelector(".modal-body");
  const mbul = document.querySelector(".modal-body ul");
  if (mbul !== undefined && mbul !== null) {
    mbul.remove();
  }
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list-group list-group-flush");
  searchArtist(artistName.id).then(function (artist) {
    artist.forEach((item) => {
      const li = document.createElement("li");
      li.setAttribute("class", "list-group-item p-0 m-0");
      li.style.color = "black";
      li.appendChild(document.createTextNode(`${item.title}`));
      ul.append(li);
    });
  });
  modalBody.appendChild(ul);
}
