// Ce script ajoute le header et le footer sur chaque page + leurs comportements.

//assets
import logo from '../media/logo.png';
import logo_mobile from '../media/logo_mobile.png';
import hugo from '../media/photos/hugo.png';
import alex from '../media/photos/alex.png';
import serge from '../media/photos/serge.png';

const location = window.location.pathname;
let rootFolder;

if (location.includes("index.html")){
  rootFolder = location.slice(0,location.lastIndexOf("/"));
} else {
  rootFolder = ".."
}

console.log(rootFolder);

export function menu() {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `
	<header class="d-none d-lg-block">
			<nav class="navbar navbar-expand-lg px-5">
				<div class="container-fluid">
					<a class="navbar-brand" href="${rootFolder}/index.html">
						<img src="${rootFolder}/media/logo.png" width="70" alt="Logo" />
						
					</a>
					<ul id="navLinks" class="navbar-nav container-fluid d-flex justify-content-evenly menu">
						<li >
							<a id="n_ombriere" href="${rootFolder}/pages/product.html#products" class="nav-link text-uppercase text-brand-primary" 
								>Ombrières solaires</a
							>
						</li>
						<li><a id="n_product" href="${rootFolder}/pages/product.html" class="nav-link text-uppercase text-brand-primary">Produits</a></li>
						<li>
							<a id="n_map" href="${rootFolder}/pages/map.html" class="nav-link text-uppercase text-brand-primary">Carte interactive</a>
						</li>
						<li>
							<a id="n_activities" href="${rootFolder}/pages/activities.html" class="nav-link text-uppercase text-brand-primary">Activités</a>
						</li>
						<li><a id="n_propos" href="${rootFolder}/pages/propos.html" class="nav-link text-uppercase text-brand-primary">À propos</a></li>
						<li>
							<a id="n_contact" href="${rootFolder}/pages/contact.html" class="nav-link text-uppercase text-brand-primary">Nous contacter</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>

		
	<header class="bg-brand-secondary d-lg-none">
			<!-- Navbar -->
			<div class="container">
				<nav id="" class="navbar">
					<a class="navbar-brand" href="${rootFolder}/index.html">
						<img src="${logo_mobile}" width="50" alt="Logo" />
					</a>

					<i class="bi bi-list text-brand-primary fs-0" id="burgerMenuIcon"></i>
				</nav>
			</header>
		</div>
		<!-- Burger menu (hidden at start) -->
		<div id="burgerExpanded" class="d-none">
			<ul class="container list-unstyled text-center text-shadow d-flex flex-column justify-content-evenly">
				<li class="fs-4">
					<a href="${rootFolder}/pages/product.html#products" class="text-uppercase text-brand-primary">Ombrières solaires</a>
				</li>
				<li><hr class="text-brand-ternary border-5 opacity-75" /></li>
				<li class="fs-4">
					<a href="${rootFolder}/pages/product.html" class="text-uppercase text-brand-primary">Produits</a>
				</li>
				<li class="fs-4">
					<a href="${rootFolder}/pages/map.html" class="text-uppercase text-brand-primary">Carte interactive</a>
				</li>
				<li class="fs-4">
					<a href="${rootFolder}/pages/activities.html" class="text-uppercase text-brand-primary">Activités</a>
				</li>

				<li><hr class="text-brand-ternary border-5 opacity-75" /></li>
				<li class="fs-4">
					<a href="${rootFolder}/pages/contact.html" class="text-uppercase text-brand-primary">Nous contacter</a>
				</li>
				<li class="fs-4">
					<a href="${rootFolder}/pages/propos.html" class="text-uppercase text-brand-primary">À propos</a>
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
					<a href="${
            location === '/index.html' ? './' : '../'
          }index.html"><img class="mx-auto d-block img-fluid" src="${logo}" alt="Sunpower logo" />
				</div>
				<div id="site_map__footer" class="row p-1 mt-5 d-lg-flex justify-content-lg-around col-lg-6">
					<ul class="col list-unstyled text-md-center">
						<li class="mb-3">
							<a href="${rootFolder}/pages/product.html" class="text-brand-primary text-shadow">Ombrières solaires</a>
						</li>
						<li class="mb-3">
							<a href="${rootFolder}/pages/map.html" class="text-brand-primary text-shadow">Carte interactive</a>
						</li>
						<li class="mb-3">
							<a href="${rootFolder}/pages/product.html#products" class="text-brand-primary text-shadow">Produits</a>
						</li>
						<li class="mb-3">
							<a href="${rootFolder}/pages/activities.html" class="text-brand-primary text-shadow">Activités</a>
						</li>
					</ul>
					<ul class="col list-unstyled text-md-center">
						<li class="mb-3"><a href="${rootFolder}/pages/propos.html" class="text-brand-primary text-shadow">À propos</a></li>
						<li class="mb-3">
							<a href="${rootFolder}/pages/legalmentions.html" class="text-brand-primary text-shadow">Mentions légales</a>
						</li>
						<li class="mb-3"><a href="${rootFolder}/pages/cgv.html" class="text-brand-primary text-shadow">CGV</a></li>
						<li class="mb-3">
							<a href="${rootFolder}/pages/sitemap.html" class="text-brand-primary text-shadow">Plan du Site</a>
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
  //
  const burgerMenuIcon = document.getElementById('burgerMenuIcon');

  burgerMenuIcon.addEventListener('click', (event) => {
    const burgerExpanded = document.getElementById('burgerExpanded');
    const mainContent = document.querySelector('main');
    burgerExpanded.classList.toggle('d-none');
    mainContent.classList.toggle('d-none');
  });

  const navLinks = document.getElementById('navLinks').getElementsByTagName('li');

  for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i].getElementsByTagName('a');
    if (location.includes(link[0].getAttribute('id').slice(2))) {
      link[0].classList.toggle('text-brand-primary');
      link[0].classList.toggle('menuActive');
    }
  }
}

export function checkFounders() {
  if (location.includes('/index.html') || location === '/' || location.includes('/pages/propos.html')) {
    document.querySelector('#serge').src = serge;
    document.querySelector('#hugo').src = hugo;
    document.querySelector('#alex').src = alex;
  }
}

export default { menu, checkFounders };
