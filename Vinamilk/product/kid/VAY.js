var arrs = [
    {
        id: "AK160898",
        name: "NAJFK",
        price: 1500000,
        image: "image/AK1.jpg",
        detail: "<div class='detail'>VARSITY MOTORCYCLE JACKET</div>",
    },
    {
        id: "AK160897",
        name: "KIMRAT",
        price: 4600000,
        image: "image/AK2.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160896",
        name: "TANNAT",
        price: 6400000,
        image: "image/AK3.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160895",
        name: "BINAT",
        price: 1300000,
        image: "image/AK4.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160894",
        name: "DANTAT",
        price: 1400000,
        image: "image/AK5.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160893",
        name: "JILAX",
        price: 1700000,
        image: "image/AK6.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160892",
        name: "HORAS",
        price: 6500000,
        image: "image/AK7.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160891",
        name: "CHIMCHAT",
        price: 8700000,
        image: "image/AK8.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160889",
        name: "DIRAS",
        price: 1200000,
        image: "image/AK9.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160888",
        name: "KANZAS",
        price: 75000000,
        image: "image/AK10.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160887",
        name: "HINAX",
        price: 3200000,
        image: "image/AK11.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160886",
        name: "HURAT",
        price: 5200000,
        image: "image/AK12.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160885",
        name: "MENMAX",
        price: 3200000,
        image: "image/KA13.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160884",
        name: "HINDYR",
        price: 7200000,
        image: "image/AK14.jpg",
        detail: "<div class='detail'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>",
    },
    {
        id: "AK160883",
        name: "JLAXS",
        price: 3200000,
        image: "image/AK15.jpg",
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
