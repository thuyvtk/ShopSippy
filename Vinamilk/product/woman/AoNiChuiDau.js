var arrs = [
    {
        id: "N160898",
        name: "HAGF",
        price: 6500000,
        image: "image/N1.jpg",
        detail: "<div class='detail'>ÁO NỈ IN CHỮ VÀ ĐÍNH KIM SA</div>",
    },
    {
        id: "N160897",
        name: "KIAMSDS",
        price: 8500000,
        image: "image/N2.jpg",
        detail: "<div class='detail'>ÁO CHUI ĐẦU CÓ MŨ OVERSIZE</div>",
    },
    {
        id: "N160896",
        name: "KIARS",
        price: 1200000,
        image: "image/N3.jpg",
        detail: "<div class='detail'>ÁO NỈ IN CHỮ VÀ ĐÍNH KIM SA</div>",
    },
	{
        id: "N160895",
        name: "KITKAT",
        price: 1290000,
        image: "image/N4.jpg",
        detail: "<div class='detail'>ÁO NỈ CHUI ĐẦU DÁNG DÀI</div>",
    },
	{
        id: "N160894",
        name: "SUXSINH",
        price: 1300000,
        image: "image/N5.jpg",
        detail: "<div class='detail'>ÁO CHUI ĐẦU CÓ MŨ OVERSIZE</div>",
    },
	{
        id: "N160893",
        name: "SUXI",
        price: 1780000,
        image: "image/N6.jpg",
        detail: "<div class='detail'>ÁO NỈ HỌA TIẾT CON KHỦNG LONG</div>",
    },
	{
        id: "N160892",
        name: "KATEF",
        price: 2220000,
        image: "image/N7.jpg",
        detail: "<div class='detail'>ÁO NỈ OVERSIZE ĐÁP CHỮ</div>",
    },
	{
        id: "N160891",
        name: "SUT",
        price: 3760000,
        image: "image/N8.jpg",
        detail: "<div class='detail'>ÁO NỈ NHUNG THÊU HỌA TIẾT HOA</div>",
    },
	{
        id: "N160890",
        name: "COCA",
        price: 4990000,
        image: "image/N9.jpg",
        detail: "<div class='detail'>ÁO NỈ CÓ TÚI LÔNG</div>",
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
