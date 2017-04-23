var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Video Game',
		description: 'Awesome Game',
		price: 10
	}),
	new Product({
		imagePath: 'http://g.vatgia.vn/gallery_img/19/sxn1411823954.jpg',
		title: 'Vay dep',
		description: 'Vay phu nu',
		price: 20
	}),
	new Product({
		imagePath: 'http://muaban.com.vn/user_images/2015/0611/348664/1.jpg',
		title: 'Gai dep',
		description: 'Gai xinh',
		price: 40
	}),
	new Product({
		imagePath: 'http://media.phunutoday.vn/files/upload_images/2015/12/09/vay-dep-don-noel-4-phunutoday_vn.jpg',
		title: 'Vay xinh',
		description: 'vay cuc xinh',
		price: 15
	}),
	new Product({
		imagePath: 'http://thegioisao.net/Uploads/thoi-trang/phong-cach-sao/3-Tu-Anh-5480-1401686878-2148-1405754725.jpg',
		title: 'Hot girl',
		description: 'hoa hau',
		price: 50
	})
];
var done = 0;
for (var i = 0;i<products.length;i++){
	products[i].save(function(err,result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}
// ko biết sai ở đâu mà ko chạy dc nên tạo = tay 5 data
// muốn chạy file này phải mở cmd ở thư mục seed