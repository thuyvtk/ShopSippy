var arrs = [
    {
        id: "FO160898",
        name: "HDAUD",
        price: 4500000,
        image: "image/shoes1.jpg",
        detail: "<div class='detail'>VARSITY MOTORCYCLE JACKET</div>",
    },
    {
        id: "FO160897",
        name: "HDUIE",
        price: 8500000,
        image: "image/shoes2.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160896",
        name: "FJIOWE",
        price: 1700000,
        image: "image/shoes3.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160895",
        name: "AOJAD",
        price: 9500000,
        image: "image/shoes4.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160894",
        name: "FNUAFN",
        price: 8500000,
        image: "image/shoes5.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160893",
        name: "UAIF",
        price: 1500000,
        image: "image/shoes6.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160892",
        name: "AOWFJEW",
        price: 4500000,
        image: "image/shoes7.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160891",
        name: "JAFA",
        price: 8600000,
        image: "image/shoes8.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "FO160889",
        name: "CHIRA",
        price: 4500000,
        image: "image/shoes9.jpg",
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
