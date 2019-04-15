var arrs = [
    {
        id: "DE160898",
        name: "CHARE",
        price: 1700000,
        image: "image/VD1.jpg",
        detail: "<div class='detail'>ĐẦM DÁNG ỐNG KẺ CA RÔ</div>",
    },
    {
        id: "DE160897",
        name: "JOMA",
        price: 2100000,
        image: "image/VD2.jpg",
        detail: "<div class='detail'>ĐẦM MIDI CO GIÃN</div>",
    },
    {
        id: "DE160896",
        name: "DATA",
        price: 1500000,
        image: "image/VD3.jpg",
        detail: "<div class='detail'>ĐẦM LẤP LÁNH PHỐI MÀU TƯƠNG PHẢN</div>",
    },
    {
        id: "DE160895",
        name: "CIMGA",
        price: 1400000,
        image: "image/VD4.jpg",
        detail: "<div class='detail'>ÁO LEN OVERSIZE CÓ MŨ</div>",
    },
    {
        id: "DE160894",
        name: "XARAXS",
        price: 2100000,
        image: "image/VD5.jpg",
        detail: "<div class='detail'>VÁY TUA RUA</div>",
    },
    {
        id: "DE160893",
        name: "IMAFA",
        price: 4300000,
        image: "image/VD6.jpg",
        detail: "<div class='detail'>VÁY ĐẦM HỌA TIẾT TRÁNG CAO SU</div>",
    },
    {
        id: "DE160892",
        name: "OMIASF",
        price: 9700000,
        image: "image/VD7.jpg",
        detail: "<div class='detail'>ĐẦM REN</div>",
    },
    {
        id: "DE160891",
        name: "ADGOA",
        price: 2500000,
        image: "image/VD8.jpg",
        detail: "<div class='detail'>ĐẦM DÀI LẤP LÁNH</div>",
    },
    {
        id: "DE160889",
        name: "JFIAOS",
        price: 3600000,
        image: "image/VD9.jpg",
        detail: "<div class='detail'>ĐẦM OVERSIZE IN HỌA TIẾT</div>",
    },
    {
        id: "DE160888",
        name: "JAFJAG",
        price: 8400000,
        image: "image/VD10.jpg",
        detail: "<div class='detail'>VÁY HỌA TIẾT HOA</div>",
    },
    {
        id: "DE160887",
        name: "AJIGJWO",
        price: 6300000,
        image: "image/VD11.jpg",
        detail: "<div class='detail'>VÁY NGẮN BÈO NHÚN</div>",
    },
    {
        id: "DE160886",
        name: "FAIWEOFJ",
        price: 8400000,
        image: "image/VD12.jpg",
        detail: "<div class='detail'>VÁY BÚT CHÌ XẾP NẾP</div>",
    },
    {
        id: "DE160885",
        name: "AJEFIJ",
        price: 3200000,
        image: "image/VD13.jpg",
        detail: "<div class='detail'>VÁY ĐẦM GIẢ DA LỘN</div>",
    },
    {
        id: "DE160884",
        name: "OAJF",
        price: 8500000,
        image: "image/VD14.jpg",
        detail: "<div class='detail'>VÁY ĐẦM ĐÍNH KIM SA</div>",
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
