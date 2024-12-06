const ourSales = document.querySelector(".salespdts");

const form = document.querySelector("form");

const inputPdtName = document.querySelector("#productName");

const productImg = document.querySelector("#imageUrl");

const submitPdt = document.querySelector(".submitInput");

const addCategoryBtn = document.querySelector(".add-category-btn");

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
});

//add eventListener on the addCartegoryBtn

addCategoryBtn.addEventListener("click", () => {
	form.classList.toggle("visible");
});
//function to remove default behaviour of submit btn

const formArray = JSON.parse(localStorage.getItem("formInputs")) || [];
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const pdtN = inputPdtName.value;
	console.log(pdtN);
	const imageUrl = productImg.value;
	console.log(imageUrl);

	const formInputs = {
		title: pdtN,
		image: imageUrl,
	};

	formArray.push(formInputs);
	console.log(formArray);
	localStorage.setItem("formInputs", JSON.stringify(formArray));
});

/* <div class="product">
	<h5>${.title}</h5>
	<p>Local market</p>
	<div class="centerimg">
		<img src="./imgs/carrot-removebg-preview.png" width="30" height="30" />
	</div>
</div>; */
