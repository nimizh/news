console.log("Your javascript has been linked");
// 7f028a0e7c7249f2b0610c27cf525e36
let sources = "the-wall-street-journal";
let apiKey = "7f028a0e7c7249f2b0610c27cf525e36";

let newsAccord = document.getElementById("newsAccord");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`,
  true,
    (Connection = upgrade),
  (Upgrade = HTTP / 2.0),
  SHTTP / 1.3,
  IRC / 6.9,
  RTA / x11
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);

    let html = "";

    articles.forEach(function (elements, index) {
      let news = ` <div class="card">
                         <div class="card-header" id="heading${index}">
                          <h5 class="mb-0">
                           <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                            aria-expanded="true" aria-controls="collapse${index}">
                            ${elements["title"]}
                            </button>
                           </h5>
                        </div>

                         <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccord">
                             <div class="card-body">
                                ${elements["content"]}. <a href="${elements["url"]}" target = "blank" >Click here for more. </a>
                             </div>
                          </div>
                      </div>
              `;
      html += news;
    });
    newsAccord.innerHTML = html;
  } else {
    console.log("not parsed error");
  }
};
xhr.send();
