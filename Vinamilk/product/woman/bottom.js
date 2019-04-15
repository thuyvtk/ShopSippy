var arrs = [
    {
        id: "BO14514",
        name: "TROUSERS RED",
        price: 1200000,
        image: "image/jogger1.jpg",
        detail: "<div class='detail'>VARSITY MOTORCYCLE JACKET</div>",
    },
    {
        id: "BO16186",
        name: "CHIM CHIM",
        price: 1520000,
        image: "image/jogger2.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO25652",
        name: "HELLO",
        price: 1930000,
        image: "image/jogger3.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO18756",
        name: "VIPPEO",
        price: 1420000,
        image: "image/jogger4.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO16059",
        name: "CANNER",
        price: 1630000,
        image: "image/jogger5.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO16048",
        name: "TRIGGRR",
        price: 1500000,
        image: "image/jogger6.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO16092",
        name: "JIGGER",
        price: 1050000,
        image: "image/jogger7.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO160891",
        name: "DANCER",
        price: 2100000,
        image: "image/jogger8.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO16059",
        name: "BANNER",
        price: 5100000,
        image: "image/jogger9.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "BO160888",
        name: "WINRAR",
        price: 2500000,
        image: "image/jogger10.jpg",
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
