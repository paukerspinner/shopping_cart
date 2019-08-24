const initialState = [
	{
		id: 1,
		name: 'Iphone 6 Plus',
		price: 550,
		rating: 5,
		picture: 'https://d11fuji4mn7bm2.cloudfront.net/media/cache/data/Apple/iPhone-6s-plus/iPhone-6s-plus-rose-gold-800x800.png',
		description: 'Sản xuất ở Việt Nam'
	},
	{
		id: 2,
		name: 'Asus Zenfone 4',
		price: 250,
		rating: 3,
		picture: 'https://quke.ru/UserFiles/Image/img51428_40369.jpg',
		description: 'Sản xuất ở Việt Nam'
	},
	{
		id: 3,
		name: 'Samsung Galaxy S7',
		price: 700,
		rating: 4,
		picture: 'https://www.kickmobiles.com/images/thumbs/0006074_samsung-galaxy-s7-edge-sm-g935f-32gb-gold-platinum_610.jpeg',
		description: 'Sản xuất ở Việt Nam'
	},
	{
		id: 4,
		name: 'Oppo F11',
		price: 500,
		rating: 2,
		picture: 'http://directd.com.my/images/thumbs/0027308_oppo-f11-4gb-ram-128gb-rom-original-set-ready-stock-freebies_600.jpeg',
		description: 'Sản xuất ở Việt Nam'
	}
]

const productReducer = (state = initialState, action) => {
	return state;
}

export default productReducer;