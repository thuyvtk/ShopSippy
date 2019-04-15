var arrs = [
    {
        id: "A160898",
        name: "HAGF",
        price: 6500000,
        image: "image/ALQ1.jpg",
        detail: "<div class='detail'>ÁO LIỀN QUẦN DÁNG NGẮN PHỐI VẢI VOAN HẠT NỔI</div>",
    },
    {
        id: "A160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/ALQ2.jpg",
        detail: "<div class='detail'>BỘ LIỀN KIỂU ÁO KHOÁC BLAZER KẺ CA RÔ</div>",
    },
    {
        id: "A160896",
        name: "KIARS",
        price: 1200000,
        image: "image/ALQ3.jpg",
        detail: "<div class='detail'>ÁO LIỀN QUẦN KẺ SỌC NHỎ</div>",
    },
	{
        id: "A160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/ALQ4.jpg",
        detail: "<div class='detail'>ĐẦM LIỀN QUẦN HỌA TIẾT HOA</div>",
    },
	{
        id: "A160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/ALQ5.jpg",
        detail: "<div class='detail'>ÁO LIỀN QUẦN XẾP LI PHỐI REN</div>",
    },
	{
        id: "A160893",
        name: "SUXI",
        price: 1780000,
        image: "image/ALQ6.jpg",
        detail: "<div class='detail'>ÁO LIỀN QUẦN VẢI CREPE KÈM THẮT LƯNG</div>",
    },
	{
        id: "A160892",
        name: "KATEF",
        price: 2220000,
        image: "image/ALQ7.jpg",
        detail: "<div class='detail'>ÁO HAI DÂY LIỀN QUẦN DỆT KIM THUỘC BỘ SƯU TẬP IDENTITY</div>",
    },
	{
        id: "A160891",
        name: "SUT",
        price: 3760000,
        image: "image/ALQ8.jpg",
        detail: "<div class='detail'>ÁO LIỀN QUẦN VẠT CHÉO PHỐI REN</div>",
    },
	{
        id: "A160890",
        name: "COCA",
        price: 4990000,
        image: "image/ALQ9.jpg",
        detail: "<div class='detail'>ÁO LIỀN QUẦN NGẮN TAY BÈO</div>",
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
