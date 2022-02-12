import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Habilidades");
    }
    async getHtml(){
        return `
            <div class="content-h">
                <div>
                    <img src="./static/img/hexagon.png" class="vector-bottom">
                    <img src="./static/img/hexagon.png" class="vector-top">
                </div>
                <header>
                    <h2>Habilidades</h2>
                </header>
                <div class="abilities-h">
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/html.png" alt="HTML">
                        </div>
                        <div class="card-body-h">
                            <h3>HTML</h3>
                            <p>Nivel: 80%</p>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/css.png" alt="CSS">
                        </div>
                        <div class="card-body-h">
                            <h3>CSS</h3>
                            <p>Nivel: 80%</p>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/javascript.png" alt="JavaScript">
                        </div>
                        <div class="card-body-h">
                            <h3>JavaScript</h3>
                            <p>Nivel: 80%</p>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/nodejs.png" alt="NodeJS">
                        </div>
                        <div class="card-body-h">
                            <h3>NodeJs</h3>
                            <p>Nivel: 80%</p>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/mongodb.png" alt="MongoDB">
                        </div>
                        <div class="card-body-h">
                            <h3>MongoDB</h3>
                            <p>Nivel: 80%</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}