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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit odio facilis adipisci voluptatum, sequihic aliquam a, atque magnam mollitia ipsam! Quod, nulla nam. Illum, eveniet.</p>
                </header>
                <div class="projects-p">
                    <div class="card-p">
                        <div class="card-header-p">

                        </div>
                        <div class="card-body-p">
                            <h3>Title test</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed facer.</p>
                            <a href="https://www.google.com">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">

                        </div>
                        <div class="card-body-p">
                            <h3>Title test</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed facer.</p>
                            <a href="https://www.google.com">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">

                        </div>
                        <div class="card-body-p">
                            <h3>Title test</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed facer.</p>
                            <a href="https://www.google.com">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">

                        </div>
                        <div class="card-body-p">
                            <h3>Title test</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed facer.</p>
                            <a href="https://www.google.com">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">

                        </div>
                        <div class="card-body-p">
                            <h3>Title test</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed facer.</p>
                            <a href="https://www.google.com">Demo</a>
                        </div>
                    </div>
                    <div class="card-p">
                        <div class="card-header-p">

                        </div>
                        <div class="card-body-p">
                            <h3>Title test</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sed facer.</p>
                            <a href="https://www.google.com">Demo</a>
                        </div>
                    </div>
            </div>
        `;
    }
}