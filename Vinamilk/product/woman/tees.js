var arrs = [
    {
        id: "TE160898",
        name: "HDAUSID",
        price: 4300000,
        image: "image/tees1.jpg",
        detail: "<div class='detail'>VARSITY MOTORCYCLE JACKET</div>",
    },
    {
        id: "TE160897",
        name: "HSDAUID",
        price: 3200000,
        image: "image/tees2.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160896",
        name: "HDUAS",
        price: 1400000,
        image: "image/tees3.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160895",
        name: "KANEX",
        price: 6200000,
        image: "image/tees4.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160894",
        name: "BANXAS",
        price: 1300000,
        image: "image/tees5.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160893",
        name: "HINDASX",
        price: 1500000,
        image: "image/tees6.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160892",
        name: "KURAT",
        price: 1600000,
        image: "image/tees7.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160891",
        name: "BNAYSAD",
        price: 1200000,
        image: "image/tees8.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160889",
        name: "TASD",
        price: 1800000,
        image: "image/tees9.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160888",
        name: "HONRAT",
        price: 1600000,
        image: "image/tees10.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160887",
        name: "TOKDS",
        price: 1300000,
        image: "image/tees11.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160886",
        name: "TEUISDA",
        price: 1300000,
        image: "image/tees12.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160885",
        name: "BINDAS",
        price: 1800000,
        image: "image/tees13.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "TE160884",
        name: "ORYE",
        price: 1200000,
        image: "image/tees14.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "DH160883",
        name: "FJIOR",
        price: 1800000,
        image: "image/tees15.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
]; //tao array chua cac object array
function display() {
    for (var i = 0; i < arrs.length; i++) {
        //tao the div va dat ten class
        var div = document.createElement("div");
        div.className = "product";
        //tao the img
        var img = document.createElement("img");
        img.src = arrs[i].image;
        //tao the p (mo to san pham)
        var px = document.createElement("div");
        px.className = "dix"
        px.innerHTML = arrs[i].price + " đ";
        var p = document.createElement("p");
        p.innerHTML = "<div class='showra'>" + "<div class='name'>" + arrs[i].name + "</div>" + "<br>" + arrs[i].detail + "<a class='nutmua' href='#'onclick='add(" + i + ")'><i class='fa fa-shopping-cart' aria-hidden='true' style='font-size:25px'></i></a>" + "</div>";
        //dua vao lam con
        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(px);
        //gan the div vao lam con body
        document.body.appendChild(div);
    }
}
