// Ajout d'un bouton pour chaque frame de la homepage pour permettre de naviguer jusqu'à la prochaine, sauf pour la dernière (pas de prochaine) le bouton remontera à la première.
// Permet d'ajouter autant de frame que désiré sans se soucier de dupliquer le code du bouton à chaque fois

export default function scrollDown() {
  let location = window.location.pathname;
  if (location === 'index.html') {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, i) => {
      section.insertAdjacentHTML(
        'beforeend',
        `
				<div class="container-fluid d-flex justify-content-center align-items-center">
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
