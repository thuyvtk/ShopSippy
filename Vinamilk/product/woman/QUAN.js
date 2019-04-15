var arrs = [
    {
        id: "Q160898",
        name: "HAGF",
        price: 6500000,
        image: "image/Q1.jpg",
        detail: "<div class='detail'>JEANS HIGH WAIST HELEN</div>",
    },
    {
        id: "Q160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/Q2.jpg",
        detail: "<div class='detail'>QUẦN JEANS DẬP KIM LOẠI Ở CẠP</div>",
    },
    {
        id: "Q160896",
        name: "KIARS",
        price: 1200000,
        image: "image/Q3.jpg",
        detail: "<div class='detail'>JEANS THE HIGH WAIST BLACK VELVET</div>",
    },
	{
        id: "Q160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/Q4.jpg",
        detail: "<div class='detail'>QUẦN JEANS DẬP KHUYÊN TRÒN ĐÍNH NGỌC TRAI</div>",
    },
	{
        id: "Q160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/Q5.jpg",
        detail: "<div class='detail'>QUẦN BÒ SỌC DỌC 2 BÊN</div>",
    },
	{
        id: "Q160893",
        name: "SUXI",
        price: 1780000,
        image: "image/Q6.jpg",
        detail: "<div class='detail'>QUẦN JEANS ỐNG BÓ GẤU LỆCH</div>",
    },
	{
        id: "Q160892",
        name: "KATEF",
        price: 2220000,
        image: "image/Q7.jpg",
        detail: "<div class='detail'>QUẦN JEANS ỐNG BÓ NHÚN BÈO</div>",
    },
	{
        id: "Q160891",
        name: "SUT",
        price: 3760000,
        image: "image/Q8.jpg",
        detail: "<div class='detail'>JEANS HIGH WAIST TRUE BLUE</div>",
    },
	{
        id: "Q160890",
        name: "COCA",
        price: 4990000,
        image: "image/Q9.jpg",
        detail: "<div class='detail'>QUẦN JEANS THÊU HOA CÙNG MÀU</div>",
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
