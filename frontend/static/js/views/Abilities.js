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
                    <p>Una representación breve de las habilidades que manejo. Sin embargo, he manejado distintos lenguajes como C++, C#, Python, SQL Server, entre otros.</p>
                </header>
                <div class="abilities-h">
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/html.png" alt="HTML">
                        </div>
                        <div class="card-body-h">
                            <h3>HTML</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/css.png" alt="CSS">
                        </div>
                        <div class="card-body-h">
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/javascript.png" alt="JavaScript">
                        </div>
                        <div class="card-body-h">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/nodejs.png" alt="NodeJS">
                        </div>
                        <div class="card-body-h">
                            <h3>NodeJs</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/mongodb.png" alt="MongoDB">
                        </div>
                        <div class="card-body-h">
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/laravel.png" alt="Laravel">
                        </div>
                        <div class="card-body-h">
                            <h3>Laravel</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/php.png" alt="PHP">
                        </div>
                        <div class="card-body-h">
                            <h3>PHP</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/mysql.png" alt="MySQL">
                        </div>
                        <div class="card-body-h">
                            <h3>MySQL</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/sass.png" alt="SASS">
                        </div>
                        <div class="card-body-h">
                            <h3>SASS</h3>
                        </div>
                    </div>
                    <div class="card-h">
                        <div class="card-header-h">
                            <img src="./static/img/tailwind.png" alt="Tailwind">
                        </div>
                        <div class="card-body-h">
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}