import AbstractView from "./AbstractView.js";

//Exportamos la clase"Sobre mí".
export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Sobre mí");
    }

    //Función para mostrar el código HTML de la vista "Sobre mí".
    //Esta función es asincrona para poder hacer otros procesos mientras se carga el HTML.
    async getHtml(){
        return `
            <div class="content-sm">
                <div>
                    <img src="./static/img/hexagon.png" class="vector-bottom">
                    <img src="./static/img/hexagon.png" class="vector-top">
                </div>
                <div class="information-sm">
                    <h2>José Santillano</h2><br>
                    <p>
                        Desarrollador web junior en ReactJS, NodeJS y SASS, Laravel, en constante estudio y crecimiento integral en el
                        ámbito laboral. Dispuesto a trabajar en ambientes grupales y contribuir con mis habilidades informáticas.
                    </p>
                </div>
                <div class="avatar-sm">
                    <img src="./static/img/avatar-jose-santillano.jpg">
                </div>
            </div>
        `;
    }
}