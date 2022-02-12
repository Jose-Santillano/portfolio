import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contacto");
    }
    async getHtml() {
        return `
            <div class="content-c">
                <div>
                    <img src="./static/img/hexagon.png" class="vector-bottom">
                    <img src="./static/img/hexagon.png" class="vector-top">
                </div>
                <header>
                    <h3>Contáctame</h3>
                </header>
                <div class="data-c">
                    <form action="">
                        <label for="name">Nombre completo</label>
                        <input type="text" name="name" id="name" required>
                        <label for="email">Correo electrónico</label>
                        <input type="email" name="email" id="email" required>
                        <label for="message">Mensaje</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        `;
    }
}