const API_KEY = "665effacf12e495ebe84fcba3434de4a";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("india"));
function reload(){
    window.location.reload();
}
async function fetchNews(query) {
    const res = await fetch(`${url}${query}&sortBy=publishedAt&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById("card_container");
    const newsCardTemplate = document.getElementById("template_news_card");
    cardContainer.innerHTML = "";
    articles.forEach(article => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news_img");
    const newsTitle = cardClone.querySelector("#news_title");
    const newsSource = cardClone.querySelector("#news_source");
    const newsDesc = cardClone.querySelector("#news_desc");

    newsImg.src = article.urlToImage || "https://via.placeholder.com/400x200";
    newsTitle.innerHTML = article.title || "No Title Available";
    newsDesc.innerHTML = article.description || "No Description Available";
    const date = article.publishedAt
        ? new Date(article.publishedAt).toLocaleString("en-us", {
            timeZone: "Asia/Jakarta"
        })
        : "Unknown Date";
    newsSource.innerHTML = `${article.source?.name || "Unknown Source"} : ${date}`;
    cardClone.firstElementChild.addEventListener("click",()=> {
      window.open(article.url,"blank");
    });
}
let curSelectedNav = null;
function navclick(id){
    fetchNews(id);
    const navItem=document.getElementById(id);
    curSelectedNav?.classList.remove("active");
    curSelectedNav=navItem;
    curSelectedNav.classList.add("active");
}
const searchButton=document.getElementById("search_button");
const searchText=document.getElementById("news_input");
searchButton.addEventListener("click",()=> {
  const query=searchText.value;
  if(!query) return;
  fetchNews(query);
  curSelectedNav?.classList.remove("active");
  curSelectedNav=null;
});