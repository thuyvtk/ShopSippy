var arrs = [
    {
        id: "SH160898",
        name: "HAGF",
        price: 6500000,
        image: "image/APP1.jpg",
        detail: "<div class='detail'>ÁO PHÔNG PHỐI REN</div>",
    },
    {
        id: "SH160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/APP2.jpg",
        detail: "<div class='detail'>ÁO LEN HỌA TIẾT CHẤM BI BẰNG LÔNG</div>",
    },
    {
        id: "SH160896",
        name: "KIARS",
        price: 1200000,
        image: "image/APP3.jpg",
        detail: "<div class='detail'>ÁO TUA RUA</div>",
    },
	{
        id: "SH160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/APP4.jpg",
        detail: "<div class='detail'>ÁO PHÔNG CỔ LÔNG</div>",
    },
	{
        id: "SH160895",
        name: "SUXSINH",
        price: 1300000,
        image: "image/APP5.jpg",
        detail: "<div class='detail'>ÁO LEN MỀM ĐÁP TRANG TRÍ</div>",
    },
	{
        id: "SH160895",
        name: "SUXI",
        price: 1780000,
        image: "image/APP6.jpg",
        detail: "<div class='detail'>ÁO PHÔNG THÊU HỌA TIẾT VÀ ĐÍNH KIM SA</div>",
    },
	{
        id: "SH160895",
        name: "KATEF",
        price: 2220000,
        image: "image/APP7.jpg",
        detail: "<div class='detail'>ÁO PHÔNG THÊU HỌA TIẾT VÀ ĐÍNH KIM SA</div>",
    },
	{
        id: "SH160895",
        name: "SUT",
        price: 3760000,
        image: "image/APP8.jpg",
        detail: "<div class='detail'>ÁO PHÔNG HỌA TIẾT MẶT NẠ LẤP LÁNH</div>",
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
