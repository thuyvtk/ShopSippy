var arrs = [
    {
        id: "V160898",
        name: "HAGF",
        price: 6500000,
        image: "image/V1.jpg",
        detail: "<div class='detail'>CHÂN VÁY XÒE MAXI</div>",
    },
    {
        id: "V160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/V2.jpg",
        detail: "<div class='detail'>CHÂN VÁY XẾP LI IN HỌA TIẾT CHẤM BI</div>",
    },
    {
        id: "V160896",
        name: "KIARS",
        price: 1200000,
        image: "image/V3.jpg",
        detail: "<div class='detail'>CHÂN VÁY NGẮN DA LỘN ĐẮP CHÉO BUỘC NƠ</div>",
    },
	{
        id: "V160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/V4.jpg",
        detail: "<div class='detail'>CHÂN VÁY CÀI KHUY MÓC</div>",
    },
	{
        id: "V160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/V5.jpg",
        detail: "<div class='detail'>CHÂN VÁY PHỐI VẢI GIẢ DA</div>",
    },
	{
        id: "V160893",
        name: "SUXI",
        price: 1780000,
        image: "image/V6.jpg",
        detail: "<div class='detail'>CHÂN VÁY XẾP LI CÓ ĐƯỜNG KẺ SỌC TRANG TRÍ HAI BÊN</div>",
    },
	{
        id: "V160892",
        name: "KATEF",
        price: 2220000,
        image: "image/V7.jpg",
        detail: "<div class='detail'>CHÂN VÁY VẢI GÂN NỔI</div>",
    },
	{
        id: "V160891",
        name: "SUT",
        price: 3760000,
        image: "image/V8.jpg",
        detail: "<div class='detail'>CHÂN VÁY KẺ CA RÔ PHỐI MÀU</div>",
    },
	{
        id: "V160890",
        name: "COCA",
        price: 4990000,
        image: "image/V9.jpg",
        detail: "<div class='detail'>CHÂN VÁY KIỂU XÀ RÔNG HỌA TIẾT KẺ CA RÔ</div>",
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
