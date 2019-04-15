var arrs = [
    {
        id: "OU160898",
        name: "ÁO KHOÁC DA",
        price: 2299000,
        image: "image/AKN1.jpg",
        detail: "<div class='detail'>ÁO KHOÁC NGOÀI DA LỘN LÓT LÔNG BÊN TRONG</div>",
    },
    {
        id: "OU160897",
        name: "LÔNG VŨ",
        price: 1990000,
        image: "image/AKN2.jpg",
        detail: "<div class='detail'>ÁO KHOÁC TUA RUA LẤP LÁNH</div>",
    },
    {
        id: "OU160896",
        name: "ÁO KHOÁC NHUNG",
        price: 6400000,
        image: "image/AKN3.jpg",
        detail: "<div class='detail'>ÁO KHOÁC NHUNG CHẦN BÔNG</div>",
    },
    {
        id: "OU160895",
        name: "BINAT",
        price: 1300000,
        image: "image/AKN4.jpg",
        detail: "<div class='detail'>ÁO KHOÁC KIỂU ĐÁP VẢI</div>",
    },
    {
        id: "OU160894",
        name: "DANTAT",
        price: 1400000,
        image: "image/AKN5.jpg",
        detail: "<div class='detail'>ÁO KHOÁC LÔNG LỬNG</div>",
    },
    {
        id: "OU160893",
        name: "JILAX",
        price: 1700000,
        image: "image/AKN6.jpg",
        detail: "<div class='detail'>ÁO KHOÁC ĐÍNH ĐÁ TRANG SỨC</div>",
    },
    {
        id: "OU160892",
        name: "HORAS",
        price: 6500000,
        image: "image/AKN7.jpg",
        detail: "<div class='detail'>ÁO KHOÁC DÁNG SUÔNG</div>",
    },
    {
        id: "OU160891",
        name: "CHIMCHAT",
        price: 8700000,
        image: "image/AKN8.jpg",
        detail: "<div class='detail'>ÁO KHOÁC GIẢ DA NHÚN BÈO</div>",
    },
    {
        id: "OU160889",
        name: "DIRAS",
        price: 1200000,
        image: "image/AKN9.jpg",
        detail: "<div class='detail'>ÁO LÔNG CỪU</div>",
    },
    {
        id: "OU160888",
        name: "KANZAS",
        price: 75000000,
        image: "image/AKN10.jpg",
        detail: "<div class='detail'>ÁO KHOÁC PHỐI LÔNG THÚ GIẢ</div>",
    },
    {
        id: "OU160887",
        name: "HINAX",
        price: 3200000,
        image: "image/AKN11.jpg",
        detail: "<div class='detail'>ÁO KHOÁC LÔNG NHIỀU MÀU</div>",
    },
    {
        id: "OU160886",
        name: "HURAT",
        price: 5200000,
        image: "image/AKN12.jpg",
        detail: "<div class='detail'>ÁO KHOÁC VẢI DỆT CHỈ KIM TUYẾN</div>",
    },
    {
        id: "OU160885",
        name: "MENMAX",
        price: 3200000,
        image: "image/AKN13.jpg",
        detail: "<div class='detail'>ÁO KHOÁC NHUNG CHẦN BÔNG</div>",
    },
    {
        id: "OU160884",
        name: "HINDYR",
        price: 7200000,
        image: "image/AKN14.jpg",
        detail: "<div class='detail'>ÁO KHOÁC DÁNG BOMBER VẢI RỦ.</div>",
    },
    {
        id: "OU160883",
        name: "JLAXS",
        price: 3200000,
        image: "image/AKN15.jpg",
        detail: "<div class='detail'>ÁO KHOÁC GIẢ DA LỘN HỌA TIẾT HOA</div>",
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
