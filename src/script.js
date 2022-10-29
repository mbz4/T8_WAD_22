
window.onload = function() {
    /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

        })
    */

    fetch('../../../res/json/myjson.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            for (let i = 0; i < json.length; i++) {
                let div = document.createElement("div");
            // Task 2 - adding a ‘post’ class to the div, the styling is already defined in the css file
                div.className = 'post';
                let postTitle = document.createElement("h3");
                postTitle.innerText = json[i].title;
                div.appendChild(postTitle);
                let postBody2 = document.createElement("p");
            // or can be done as a TextNode instead of .innerText, as follows:
            // let postBody2 = document.createTextNode(jsData[i].body);
            // div.appendChild(postBody2);
                postBody2.innerText = json[i].body;
                div.appendChild(postBody2);
                document.body.appendChild(div);
            }

        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })

        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
            })
}
