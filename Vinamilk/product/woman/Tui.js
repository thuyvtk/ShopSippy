var arrs = [
    {
        id: "T160898",
        name: "HAGF",
        price: 6500000,
        image: "image/T1.jpg",
        detail: "<div class='detail'>TÚI VUÔNG XÁCH TAY</div>",
    },
    {
        id: "T160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/T2.jpg",
        detail: "<div class='detail'>TÚI XÁCH MINI DA LỘN DẬP ĐINH TÁN</div>",
    },
    {
        id: "T160896",
        name: "KIARS",
        price: 1200000,
        image: "image/T3.jpg",
        detail: "<div class='detail'>TÚI DÂY RÚT THẮT NÚT</div>",
    },
	{
        id: "T160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/T4.jpg",
        detail: "<div class='detail'>TÚI ĐEO CHÉO ĐÍNH HẠT CƯỜM MÀU ÁNH KIM</div>",
    },
	{
        id: "T160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/T5.jpg",
        detail: "<div class='detail'>TÚI XÁCH CITY BAG CÓ VÒNG KIM LOẠI</div>",
    },
	{
        id: "T160893",
        name: "SUXI",
        price: 1780000,
        image: "image/T6.jpg",
        detail: "<div class='detail'>TÚI ĐEO CHÉO HÌNH LỤC GIÁC</div>",
    },
	{
        id: "T160892",
        name: "KATEF",
        price: 2220000,
        image: "image/T7.jpg",
        detail: "<div class='detail'>TÚI HỘP NẠM KIM TUYẾN LẤP LÁNH</div>",
    },
	{
        id: "T160891",
        name: "SUT",
        price: 3760000,
        image: "image/T8.jpg",
        detail: "<div class='detail'>TÚI HOA DÂY RÚT</div>",
    },
	{
        id: "T160890",
        name: "COCA",
        price: 4990000,
        image: "image/T9.jpg",
        detail: "<div class='detail'>TÚI SHOPPER HAI MẶT</div>",
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
