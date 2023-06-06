import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
    <header>
        <img class="logo" src="images/cropped-kuehlmann_logo-removebg-preview.png"
            alt=" logo von der Firma" />
		${getMenu()}
	</header>
</header>
<main>
	${getCurrentPage()}
</main>
`;