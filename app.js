const ourSales = document.querySelector(".salespdts");

const sales = [
	{
		id: 1,
		pdtName: "Vegetables",
		image: "./imgs/carrot-removebg-preview.png",
		price: 20,
	},
	{
		id: 2,
		pdtName: "Chicken",
		image: "./imgs/carrot-removebg-preview.png",
		price: 30,
	},
	{
		id: 3,
		pdtName: "Milk",
		image: "./imgs/carrot-removebg-preview.png",
		price: 25,
	},
	{
		id: 4,
		pdtName: "Snacks",
		image: "./imgs/carrot-removebg-preview.png",
		price: 15,
	},
	{
		id: 5,
		pdtName: "Snacks",
		image: "./imgs/carrot-removebg-preview.png",
		price: 15,
	},
	{
		id: 6,
		pdtName: "Snacks",
		image: "./imgs/carrot-removebg-preview.png",
		price: 15,
	},
	{
		id: 7,
		pdtName: "Snacks",
		image: "./imgs/carrot-removebg-preview.png",
		price: 15,
	},
	{
		id: 8,
		pdtName: "Snacks",
		image: "./imgs/carrot-removebg-preview.png",
		price: 15,
	},
];

sales.forEach((item) => {
	const product = document.createElement("div");
	product.classList.add("prodct");
	product.innerHTML = `
        
			<div class="pdt">
					<img src="${item.image}" width="30"
						height="30" alt="" />
					<h3>${item.pdtName}<span>(Local Shop)</span></h3>
					<p>500gm</p>
					<h1>${item.price}.<sup>29$</sup></h1>
					<button class="add-to-cart">+</button>
			</div>
    `;
	ourSales.appendChild(product);
	console.log(ourSales);
});
