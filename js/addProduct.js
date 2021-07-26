/* ---------- DATABASE ---------- */
const Brawlhalla = {
	id: 1,
	name: "Brawlhalla",
	price: 150,
};

const GrandChase = {
	id: 2,
	name: "Grand Chase",
	price: 200,
};

const GuardianTales = {
	id: 3,
	name: "Guardian Tales",
	price: 100,
};



// Cria um array para armazenamento dos produtos
const items = (() => {
	const fieldValue = localStorage.getItem("cart");
	return fieldValue === null ? [] : JSON.parse(fieldValue);
})();

/* ---------- FUNCIONALIDADES ---------- */

// Armazena Brawlhalla no array
const Brawl = document.getElementById("Braw");
Brawl.addEventListener("click", () => {
	items.push(Brawlhalla);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Brawlhalla adicionado ao carrinho!");
});

// Armazena Grand Chase no array
const GrandC = document.getElementById("Grand-Chase");
GrandC.addEventListener("click", () => {
	items.push(GrandChase);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Grand Chase adicionado ao carrinho!");
});

// Armazena Guardian Tales no array
const GuardianT = document.getElementById("Guardian-Tales");
GuardianT.addEventListener("click", () => {
	items.push(GuardianTales);
	localStorage.setItem("cart", JSON.stringify(items));
	alert("Guardian Tales adicionado ao carrinho!");
});


