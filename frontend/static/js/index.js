//Importamos las vistas.
import About from "./views/About.js";
import Abilities from "./views/Abilities.js";
import Projects from "./views/Projects.js";
import Contact from "./views/Contact.js";

//Usamos la "history api" para controlar la navegación.
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}


//Definimos nuestro router en modo asincrono, para facilitar las peticiones.
const router = async () => {
    //Definimos las rutas principales.
    const routes = [
        { path: "/", view: About },
        { path: "/habilidades", view: Abilities },
        { path: "/proyectos", view: Projects },
        { path: "/contacto", view: Contact}
    ];

    // Testeo de cada ruta para un emparejamiento potencial.

    const potentialMatches = routes.map(route => {
        //Retornamos si el match es verdadero o falso junto con su path.
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    //Obtenemos el emparejamiento potencial y lo guardamos en la variable match.
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //En caso de se introduzca una ruta no deseada, se le mandará a la ruta principal "/"
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    //Creamos una instancia de la vista según la ruta.
    const view = new match.route.view();

    //Obtenemos el div#app e insertamos el código HTML (uso de await por que es asincrono)
    document.querySelector("#app").innerHTML = await view.getHtml();
};

//Cuando se carge algo al DOM ejecutamos router() para testear las paths.
document.addEventListener("DOMContentLoaded", () => {
    
    //Si ocurre un evento click en un <a> con una propiedad llamada data-link entonces se
    //detiene la recarga y se redirecciona a la vista.
    document.body.addEventListener("click", e => {
        if (e.target.hasAttribute("data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

