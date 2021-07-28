console.log("Your javascript has been linked");
// 7f028a0e7c7249f2b0610c27cf525e36
let apiKey = "7767ebe1cbe56d25ff9cfb6b202dda76";

let newsAccord = document.getElementById("newsAccord");

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://gnews.io/api/v4/search?q=example&token=${apiKey}&lang=en`,
  true
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
