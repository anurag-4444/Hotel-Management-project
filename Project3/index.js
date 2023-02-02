console.log('This is my index js file');

// Initailise the news api parameters
let source = 'bbc-news';
let apiKey = '68bd113426e345c58d7229591653a8ef'

// Grab the news container
let newsAccordion = document.getElementById('newsId');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/everything?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            newsHtml += `<p>
                                <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                ${element["title"]}</a>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="card card-body">
                                ${element["content"]}
                            </div>
                        </div>`
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log('some error occured');
    }
}

xhr.send();

        