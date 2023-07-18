const generatebtn = document.querySelector(".meme-generator .generate-btn")
const memeimage = document.querySelector(".meme-generator img")
const memetitle = document.querySelector(".meme-generator .meme-title")
const memeauthor = document.querySelector(".meme-generator .meme-author")

const updateDetails = (url,title,author) => {
    memeimage.setAttribute("src",url );
    memetitle.innerHTML = title;
    memeauthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=> response.json())
    .then(data => {
            updateDetails(data.url, data.title, data.author)
        });
}

generatebtn.addEventListener("click", generateMeme);

generateMeme();