var arrs = [
    {
        id: "G160898",
        name: "HAGF",
        price: 6500000,
        image: "image/G1.jpg",
        detail: "<div class='detail'>GIÀY CAO GÓT MÀU ÁNH KIM</div>",
    },
    {
        id: "G160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/G2.jpg",
        detail: "<div class='detail'>GIÀY SA TANH CÓ GÓT CAO KHÁC MÀU</div>",
    },
    {
        id: "G160896",
        name: "KIARS",
        price: 1200000,
        image: "image/G3.jpg",
        detail: "<div class='detail'>BỐT CỔ NGẮN CAO GÓT XẾP LI</div>",
    },
	{
        id: "G160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/G4.jpg",
        detail: "<div class='detail'>BỐT CỔ NGẮN CAO GÓT XẾP LI</div>",
    },
	{
        id: "G160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/G5.jpg",
        detail: "<div class='detail'>BỐT CAO GÓT HỌA TIẾT XẾP NẾP</div>",
    },
	{
        id: "G160893",
        name: "SUXI",
        price: 1780000,
        image: "image/G6.jpg",
        detail: "<div class='detail'>BỐT TRANG TRÍ KHÓA CÀI</div>",
    },
	{
        id: "G160892",
        name: "KATEF",
        price: 2220000,
        image: "image/G7.jpg",
        detail: "<div class='detail'>GIÀY THỂ THAO VẢI ĐÍNH ĐÁ</div>",
    },
	{
        id: "G160891",
        name: "SUT",
        price: 3760000,
        image: "image/G8.jpg",
        detail: "<div class='detail'>BỐT CAO GÓT DA BÓNG MÀU ĐEN</div>",
    },
	{
        id: "G160890",
        name: "COCA",
        price: 4990000,
        image: "image/G9.jpg",
        detail: "<div class='detail'>GIÀY THỂ THAO NHIỀU MÀU ĐẾ BÁNH MÌ</div>",
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
