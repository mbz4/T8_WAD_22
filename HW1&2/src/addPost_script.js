window.onload = function() {
    
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

    let a_logout = document.createElement("a");
    a_logout.href = "login.html";
    a_logout.innerText="logout";


    div0.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(h3_1);
    div1.appendChild(div3);
    div3.appendChild(h3_2);
    div1.appendChild(div4);
    div4.appendChild(h3_3);
    h3_3.appendChild(a_logout);

    menu.appendChild(div0);
}

function toggleMenu(){
    document.getElementById("subMenu").classList.toggle("open-menu");
}

