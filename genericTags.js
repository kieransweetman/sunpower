document.body.insertAdjacentHTML(
	'afterbegin',
	`<header class="bg-brand-secondary">
			<!-- Navbar -->
			<div class="container">
				<nav class="navbar">
					<a class="navbar-brand" href="index.html">
						<img src="../media/logo_mobile.png" width="50" alt="Logo" />
					</a>

					<i class="bi bi-list text-brand-primary fs-0" id="burgerMenuIcon"></i>
				</nav>
			</header>
		</div>
		<!-- Burger menu (hidden at start) -->
		<div id="burgerExpanded" class="d-none">
			<ul class="container list-unstyled text-center text-shadow d-flex flex-column justify-content-evenly">
				<li class="fs-4">
					<a href="../pages/product.html#products" class="text-uppercase text-brand-primary">Ombrières solaires</a>
				</li>
				<li><hr class="text-brand-ternary border-5 opacity-75" /></li>
				<li class="fs-4">
					<a href="../pages/product.html" class="text-uppercase text-brand-primary">Produits</a>
				</li>
				<li class="fs-4">
					<a href="" class="text-uppercase text-brand-primary">Carte interactive</a>
				</li>
				<li class="fs-4">
					<a href="../pages/activities.html" class="text-uppercase text-brand-primary">Activités</a>
				</li>

				<li><hr class="text-brand-ternary border-5 opacity-75" /></li>
				<li class="fs-4">
					<a href="../pages/contact.html" class="text-uppercase text-brand-primary">Nous contacter</a>
				</li>
				<li class="fs-4">
					<a href="../pages/propos.html" class="text-uppercase text-brand-primary">À propos</a>
				</li>
			</ul>
		</div>
		<!-- End burger menu -->`
);

document.body.insertAdjacentHTML(
	'beforeend',
	`		<footer class="container-fluid p-3">
			<div id="logo__footer" class="row col-10 rounded mx-auto mt-5">
				<img class="row mx-auto d-block" src="../media/logo.png" alt="Sunpower logo" />
			</div>
			<div id="site_map__footer" class="row p-1 mt-5">
				<ul class="col list-unstyled">
					<li class="mb-3 "><a href="../pages/product.html" class="text-brand-primary text-shadow">Ombrières solaires</a></li>
					<li class="mb-3 "><a href="../pages/map.html" class="text-brand-primary text-shadow">Carte interactive</a></li>
					<li class="mb-3 "><a href="../pages/product.html#products" class="text-brand-primary text-shadow">Produits</a></li>
					<li class="mb-3 "><a href="../pages/activities.html" class="text-brand-primary text-shadow">Activités</a></li>
				</ul>
				<ul class="col list-unstyled">
					<li class="mb-3 "><a href="../pages/propos.html" class="text-brand-primary text-shadow ">À propos</a></li>
					<li class="mb-3 "><a href="../pages/legalmentions.html" class="text-brand-primary text-shadow ">Mentions légales</a></li>
					<li class="mb-3 "><a href="../pages/cgv.html" class="text-brand-primary text-shadow ">CGV</a></li>
					<li class="mb-3 "><a href="../pages/sitemap.html" class="text-brand-primary text-shadow ">Plan du Site</a></li>
				</ul>
			</div>
			<div class="container-fluid text-center">
				<a href="contact.html" class="text-brand-primary fs-4 fw-bold">Nous contacter</a>
			</div>
			<hr />
			<div id="social__footer" class="container-fluid d-flex justify-content-center" style="height: 5em">
				<i class="bi bi-facebook col-3 fs-1 text-center blue"></i
				><i class="bi bi-linkedin col-3 fs-1 text-center blue"></i
				><i class="bi bi-twitter col-3 fs-1 text-center blue"></i>
			</div>

			<div id="copyright" class="container text-center">
				<p><span>&copy;</span> 2022 Sunpower - Produits & Activités autour des énergies renouvelables</p>
			</div>
		</footer>`
);

const burgerMenuIcon = document.getElementById('burgerMenuIcon');

burgerMenuIcon.addEventListener('click', (event) => {
	const burgerExpanded = document.getElementById('burgerExpanded');
	const mainContent = document.querySelector('main');
	burgerExpanded.classList.toggle('d-none');
	mainContent.classList.toggle('d-none');
});
