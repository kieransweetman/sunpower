//Ajout d'un bouton pour chaque frame de la homepage pour permettre de naviguer jusqu'à la prochaine, sauf pour la dernière (pas de prochaine) le bouton remontera à la première et les chevrons seront dans le bon sens.
// Permet d'ajouter autant de frame que désiré sans se soucier de dupliquer le code du bouton à chaque fois

export default function scrollDown() {
  const location = window.location.pathname;

  if (location.includes('/index.html') || location === '/' || location.includes('/pages/activities.html')) {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, i) => {
      section.insertAdjacentHTML(
        'beforeend',
        `
				<div class="container-fluid d-flex justify-content-center align-items-center d-block d-lg-none">
					<div
						class="border rounded-circle d-flex justify-content-center align-items-center bg-brand-secondary text-brand-primary fw-bold scrollButton"
					>
						<div
							role="button"
							onclick="document.querySelector('#frame${
                i < sections.length - 1 ? `${i + 2}` : '1'
              }').scrollIntoView({behavior:'smooth'})"
							class="text-center"
						>
							<i class="fs-1 bi bi-chevron-double-${i < sections.length - 1 ? 'down' : 'up'}"></i>
						</div>
					</div>
				</div>`
      );
    });
  }
}

export { scrollDown };
