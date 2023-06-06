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

<footer>
	<div class="impressum">
	<h1 class="h1-foot"> Impressum</h1>
	<p> Veratwortlich für den Inhalt:
	Lutz Kühlmann
	Dipl. Ingenieur Architektur.<br/>
	Händelstraße,19<br/>
	76185, Karlsruhe<br/></p>
</div>
<div class="foot">
	<a href="E-mail:info@kuehlmann-projektleitung.de">info@kuehlmann-projektleitung.de </a>
	<a href="https://kuehlmann-projektleitung.de/">www.kuehlmann-projektleitung.de </a>

	<p>Authorin:Dci Studentin</p> 
</div>
</footer>
`;