
window.onload = function() {
    /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

        })
    */

    fetch('/res/json/myjson.json')
        .then((response) => response.json())
        .then(json => {
            //console.log(json);

            for (let i = 0; i < json.length; i++) {
                console.log("post index: " + json[i].index);
                /* 
                TREE TEMPLATE: each post has this layout
                    section 
                        div0 << class: mini_container OR container post
                            div1 << class: container_img
                                img << profile_img
                            h5, << date
                            br1, 
                            div2 << class: center_img
                                img << center_img
                            p1, << center_img_caption
                            p2, << message
                            br2, 
                            div3 << class: container_img_like_btn
                                img << like_button
                */
                // create elements, imgs
                let section = document.createElement("section");
                let div0 = document.createElement("div");

                let div1 = document.createElement("div");
                let container_img = new Image(50, 50);
                
                let date = document.createElement("h5");
                let br1 = document.createElement("br");
                
                let div2 = document.createElement("div");
                let center_img = new Image();
                
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let br2 = document.createElement("br");
                
                let div3 = document.createElement("div");
                let img_button = new Image(30, 30);
                
                // image paths
                container_img.src = json[i].profile_img;
                center_img.src = json[i].center_img;
                img_button.src = json[i].like_button;

                // assign styles
                if (json[i].center_img.length == 0) { //check if there is a center image
                    div0.className = 'mini_container'; // assign different class if there is/isnt
                } else {
                    div0.className = 'container post';
                }
                div1.className = 'container_img';
                div2.className = 'center_img';
                div3.className = 'container_img_like_btn';
                
                // assign content from json
                date.innerText = json[i].date;
                //div1.innerText = json[i].center_img_caption;
                p1.innerText = json[i].center_img_caption;
                p2.innerText = json[i].message
                
                // append elements to section according to the TREE TEMPLATE
                div0.appendChild(div1);
                div1.appendChild(container_img);
                div0.appendChild(date);
                div0.appendChild(br1);
                div0.appendChild(div2);
                div2.appendChild(center_img);
                div0.appendChild(p1);
                div0.appendChild(p2);
                div0.appendChild(br2);
                div0.appendChild(div3);
                div3.appendChild(img_button);
                section.appendChild(div0);

                // append generated tree to column middle
                column_middle.appendChild(section);
            }

        })
        /*
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
        */
        .finally(() => {
            let footer = document.createElement("footer");
            //date = new Date().toLocaleString()
            //footer.innerText = date;
            document.body.appendChild(footer);
            })

}


let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
    }
