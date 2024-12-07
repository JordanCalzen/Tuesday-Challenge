const ourSales = document.querySelector(".salespdts");

const form = document.querySelector("form");

const inputPdtName = document.querySelector("#productName");

const productImg = document.querySelector("#imageUrl");

const submitPdt = document.querySelector(".submitInput");

const addCategoryBtn = document.querySelector(".add-category-btn");

const categories = document.querySelector(".categories");

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

const pdtN = inputPdtName.value;

const imageUrl = productImg.value;

const formInputs = {
	title: pdtN,
	image: imageUrl,
};

let formArray = JSON.parse(localStorage.getItem("formInputs")) || [];
renderUi();

submitPdt.addEventListener("click", (e) => {
	e.preventDefault();

	// Capture user inputs
	const pdtN = inputPdtName.value.trim();
	const imageUrl = productImg.value.trim();

	if (!pdtN || !imageUrl) {
		alert("Please fill in all fields.");
		return;
	}

	// Create a new product object
	const formInputs = {
		title: pdtN,
		image: imageUrl,
	};

	// Add the new product to the array
	formArray.push(formInputs);

	// Save the updated array to localStorage
	localStorage.setItem("formInputs", JSON.stringify(formArray));

	// Render the updated UI
	renderUi();

	// Clear inputs and hide the form
	inputPdtName.value = "";
	productImg.value = "";
	form.classList.remove("visible");
});

function renderUi() {
	// Clear existing UI to prevent duplicates
	categories.innerHTML = "";

	// Loop through formArray and render each product
	formArray.forEach((item) => {
		const received = document.createElement("div");
		received.classList.add("recv");
		received.innerHTML = `
		  <div class="product">
			<img src="${item.image}" alt="${item.title}" />
			<h5>${item.title}</h5>
			<p>Local market</p>
		  </div>
	  `;
		categories.appendChild(received);
	});
}

// Initial render when the page loads
window.addEventListener("DOMContentLoaded", () => {
	formArray = JSON.parse(localStorage.getItem("formInputs")) || [];
	renderUi();
});
