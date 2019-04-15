var arrs = [
    {
        id: "C160898",
        name: "HAGF",
        price: 6500000,
        image: "image/C1.jpg",
        detail: "<div class='detail'>ÁO KHOÁC BLAZER KẺ CA RÔ CỔ VẠT CHÉO</div>",
    },
    {
        id: "C160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/C2.jpg",
        detail: "<div class='detail'>ÁO KHOÁC BLAZER DÁNG NAM</div>",
    },
    {
        id: "C160896",
        name: "KIARS",
        price: 1200000,
        image: "image/C3.jpg",
        detail: "<div class='detail'>ÁO KHOÁC TUXEDO</div>",
    },
	{
        id: "C160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/C4.jpg",
        detail: "<div class='detail'>ÁO KHOÁC KẺ CA RÔ VẠT ĐẮP CHÉO</div>",
    },
	{
        id: "C160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/C5.jpg",
        detail: "<div class='detail'>ÁO KHOÁC BLAZER KẺ CA RÔ VẠT CHÉO</div>",
    },
	{
        id: "C160893",
        name: "SUXI",
        price: 1780000,
        image: "image/C6.jpg",
        detail: "<div class='detail'>QUẦN JEANS ỐNG BÓ GẤU LỆCH</div>",
    },
	{
        id: "C160892",
        name: "KATEF",
        price: 2220000,
        image: "image/C7.jpg",
        detail: "<div class='detail'>QUẦN CARROT FIT KẺ CA RÔ</div>",
    },
	{
        id: "C160891",
        name: "SUT",
        price: 3760000,
        image: "image/C8.jpg",
        detail: "<div class='detail'>QUẦN HỌA TIẾT HOA</div>",
    },
	{
        id: "C160890",
        name: "COCA",
        price: 4990000,
        image: "image/C9.jpg",
        detail: "<div class='detail'>ÁO KHOÁC DÁNG DÀI VẢI DỆT HỌA TIẾT KẺ CA RÔ</div>",
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
