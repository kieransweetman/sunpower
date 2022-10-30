export default function menu() {
  let location = window.location.pathname;
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
	<header class="d-none d-lg-block">
			<nav class="navbar navbar-expand-lg px-5">
				<div class="container-fluid">
					<a class="navbar-brand" href="${location === '/index.html' ? './' : '../'}index.html">
						<img src="${location === '/index.html' ? './' : '../'}/media/logo.png" width="70" alt="Logo" />
					</a>
					<ul class="navbar-nav container-fluid d-flex justify-content-evenly">
						<li class="nav-item">
							<a href="../pages/product.html#products" class="nav-link text-uppercase text-brand-primary"
								>Ombrières solaires</a
							>
						</li>
						<li><a href="../pages/product.html" class="nav-link text-uppercase text-brand-primary">Produits</a></li>
						<li>
							<a href="../pages/map.html" class="nav-link text-uppercase text-brand-primary">Carte interactive</a>
						</li>
						<li>
							<a href="../pages/activities.html" class="nav-link text-uppercase text-brand-primary">Activités</a>
						</li>
						<li><a href="../pages/propos.html" class="nav-link text-uppercase text-brand-primary">À propos</a></li>
						<li>
							<a href="../pages/contact.html" class="nav-link text-uppercase text-brand-primary">Nous contacter</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>

		
	<header class="bg-brand-secondary d-lg-none">
			<!-- Navbar -->
			<div class="container">
				<nav class="navbar">
					<a class="navbar-brand" href="../index.html">
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
					<a href="../pages/map.html" class="text-uppercase text-brand-primary">Carte interactive</a>
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
    `
		<footer class="container-fluid p-3">
			<div class="d-lg-flex">
				<div id="logo__footer" class="row col-10 col-md-6 col-lg-3 mx-auto mx-lg-0 mt-5">
					<img class="mx-auto d-block img-fluid" src="${
            location === '/index.html' ? './' : '../'
          }media/logo.png" alt="Sunpower logo" />
				</div>
				<div id="site_map__footer" class="row p-1 mt-5 d-lg-flex justify-content-lg-around col-lg-6">
					<ul class="col list-unstyled text-md-center">
						<li class="mb-3">
							<a href="../pages/product.html" class="text-brand-primary text-shadow">Ombrières solaires</a>
						</li>
						<li class="mb-3">
							<a href="../pages/map.html" class="text-brand-primary text-shadow">Carte interactive</a>
						</li>
						<li class="mb-3">
							<a href="../pages/product.html#products" class="text-brand-primary text-shadow">Produits</a>
						</li>
						<li class="mb-3">
							<a href="../pages/activities.html" class="text-brand-primary text-shadow">Activités</a>
						</li>
					</ul>
					<ul class="col list-unstyled text-md-center">
						<li class="mb-3"><a href="../pages/propos.html" class="text-brand-primary text-shadow">À propos</a></li>
						<li class="mb-3">
							<a href="../pages/legalmentions.html" class="text-brand-primary text-shadow">Mentions légales</a>
						</li>
						<li class="mb-3"><a href="../pages/cgv.html" class="text-brand-primary text-shadow">CGV</a></li>
						<li class="mb-3">
							<a href="../pages/sitemap.html" class="text-brand-primary text-shadow">Plan du Site</a>
						</li>
					</ul>
				</div>

				<div class="container-fluid text-center col-lg-3 my-lg-auto">
					<a href="contact.html" class="text-brand-primary fs-4 fw-bold">Nous contacter</a>
				</div>
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
}

export { menu };
