

const template = document.createElement('template');
// language=HTML
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }
        
        .result {
            color: red;
        }
        
        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <ol id="oll">
        <li>0</li>
        <li>1</li>
        <li>2</li>
    </ol>
    <script>
        var olNode = document.getElementById("oll")
        olNode.append('append')
        olNode.before("before")
        olNode.after("after")
        
        console.log(olNode)
        
        olNode.appendChild("aaa")
        document.body.appendChild(olNode)
        document.body.append(olNode)
    </script>

    <form>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>

   
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();



        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

    }

    _onSubmit (event) {
        event.preventDefault();
        this.$message.innerText = this.$input.value;
        this.$input.clearInput()

    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }


}

customElements.define('message-form', MessageForm);
