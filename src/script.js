
window.onload = function() {
    //fetch('/res/json/myjson.json')
    fetch('http://myjson.dit.upm.es/api/bins/4p0i') //https://myjson.dit.upm.es/4p0i hosted here
        .then((response) => response.json())
        .then(json => {
            //console.log(json);

            for (let i = 0; i < json.length; i++) {
                //console.log("post index: " + json[i].index); // post display troubleshoot aid
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

        .finally(() => {
            // generate submenu
            /*
            TREE TEMPLATE:
            div0 << class: sub-menu-wrap, id: subMenu
                div1 << class: sub-menu
                    div2 << class: user-info
                        h3 << "John Doe"
                    div3 << class: user-info
                        h3 << "john.doe@ut.ee"
                    div4 << class: user-info
                        h3 << "logout"
            */

            let div0 = document.createElement("div");
            div0.className = 'sub-menu-wrap';
            div0.id = "subMenu";

            let div1 = document.createElement("div");
            div1.className = 'sub-menu';

            let div2 = document.createElement("div");
            div2.className = 'user-info';
            let h3_1 = document.createElement("h3");
            h3_1.innerText = "John Doe";
            
            let div3 = document.createElement("div");
            div3.className = 'user-info';
            let h3_2 = document.createElement("h3");
            h3_2.innerText = "john.doe@ut.ee";
            
            let div4 = document.createElement("div");
            div4.className = 'user-info';
            let h3_3 = document.createElement("h3");
            //h3_3.innerText = "logout";
            //h3_3.id = "logout";
            let a_logout = document.createElement("a");
            a_logout.href = "login.html";
            a_logout.innerText="logout";
            //h3_3.href = "login.html";
            //h3_3.setAttribute("href", "login.html");

            div0.appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(h3_1);
            div1.appendChild(div3);
            div3.appendChild(h3_2);
            div1.appendChild(div4);
            div4.appendChild(h3_3);
            h3_3.appendChild(a_logout);

            menu.appendChild(div0);
            
            //logout_link = document.getElementById("logout");
            //logout_link.setAttribute("href", "login.html");
            // append footer at end of body
            let footer = document.createElement("footer");
            document.body.appendChild(footer);
            })

}

function toggleMenu(){
    document.getElementById("subMenu").classList.toggle("open-menu");
    //logout_link = document.getElementById("logout");
    //document.getElementById("logout").setAttribute("href", "login.html");
}
