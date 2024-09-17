import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Proyectos");
    }
    async getHtml() {
        return `
            <div class="content-p">
                <div>
                    <img src="./static/img/hexagon.png" class="vector-bottom">
                    <img src="./static/img/hexagon.png" class="vector-top">
                </div>
                <header>
                    <h2>Proyectos</h2>
                    <p>Este es un pequeño repositorio para mostrar brevemente los proyectos personales y profesionales que he realizado.</p>
                </header>
                <div class="projects-p">
                    <div class="card-p">
                        <div class="card-header-p">
                            <img src="./static/img/karelogic.png" class="img-adjust" />
                        </div>
                        <div class="card-body-p">
                            <h3>Karelogic</h3>
                            <p>Proyecto realizado con HTML, CSS y JS. (Tailwind y SASS)</p>
                            <a href="https://karelogic-test.netlify.app/" target="_blank">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">
                            <img src="./static/img/hyperprogramming.png" class="img-adjust" />
                        </div>
                        <div class="card-body-p">
                            <h3>Hyper Programming</h3>
                            <p>Proyecto realizado con HTML, CSS y JS. (Tailwind y SASS)</p>
                            <a href="https://hyperprogramming.netlify.app/" target="_blank">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">
                            <img src="./static/img/gympredators.png" class="img-adjust" />
                        </div>
                        <div class="card-body-p">
                            <h3>Gym Mixto Predators</h3>
                            <p>Proyecto realizado con HTML, CSS y JS. (Tailwind y SASS)</p>
                            <a href="https://gymmixtopredators.netlify.app/" target="_blank">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">
                            <img src="./static/img/login-registro-karelogic.png" class="img-adjust" />
                        </div>
                        <div class="card-body-p">
                            <h3>Login & Registro de Karelogic</h3>
                            <p>Proyecto realizado con HTML, CSS y JS, Laravel y MySQL. (Tailwind y SASS). Nota: Es solo la representación visual.</p>
                            <a href="https://login-register-karelogic-demo.netlify.app/src/login.html" target="_blank">Demo</a>
                        </div>
                    </div>
            </div>
        `;
    }
}