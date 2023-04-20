const showLyric = document.querySelector(".show_lyric");
const h4 = document.querySelector(".artista");

async function Search(event) {
  event.preventDefault();

  const artista = event.target.artista.value;
  const musica = event.target.musica.value;

  const response = await fetch(
    `https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}`
  ).then((res) => res.json());

  if (response.type === "notfound") {
    return (showLyric.innerText = "musica não encontrada");
  }
  console.log(response);
  h4.innerText = `${response.art.name}`;
  showLyric.innerText = `${response.mus[0].text}`;
}
