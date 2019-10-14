

const template = document.createElement('template');
// language=HTML
template.innerHTML = `
    <style>
        ol{
            background: beige;
        }
        
        li {
            /*
            width: 100%;
             display: flex;
            justify-content: flex-end;
            */
            background: bisque;
            list-style-type: none; /* Убираем маркеры списка*/
            border: 6px solid white;
            border: 1px solid grey;
            margin:10px;
            border-radius: 0.9em;
            padding: 5px;
            
           }
    
       
        
        #messList{
            overflow-y: scroll;
            height: 700px;
            bottom: 0;
           
            text-align: right;
            border-collapse: separate;
            margin-bottom: 10px;
            
            
        }
        
        
        form-input {
            height: 6vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        input[type=submit] {
            visibility: collapse;
        }
        
    </style>
    <ol id="messList">
    </ol>
    <form>
        <form-input name="message-text" placeholder="Введите сообщение"></form-input>
    </form>
   
`;

class MessageForm extends HTMLElement {


    constructor () {
      super();
      this._shadowRoot = this.attachShadow({mode: 'open'});
      this._shadowRoot.appendChild(template.content.cloneNode(true));
      this.$form = this._shadowRoot.querySelector('form');
      this.$input = this._shadowRoot.querySelector('form-input');
      //поиск по id
      this.$messList = this._shadowRoot.querySelector("#messList");

      //получаю Лист сообщений с localStorage
      this.messageList = MessageForm.getElementFromLocalStorage("messList");
      if (this.messageList == null)
        this.messageList  = []
      //отображение списка messageList

        for (i = 0; i < this.messageList.length; i++) {
          const message = document.createElement("li")
          message.innerHTML = this.messageList[i]
          message.style.top = "100 px";
          this.$messList.append(message)
        }

      //Прокручиваю сообщения вниз
      this.$messList.scrollTo(0, this.$messList.scrollHeight)


      //Добавление listener
      this.$form.addEventListener('submit', this._onSubmit.bind(this));
      this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

    }

    _onSubmit (event) {
        //todo что это?
        event.preventDefault();

        //добавление сообщения в html
        const message = document.createElement("li")
        const date = String(new Date())
      if (this.$input.value != "") {

        const mess = "<font size = 5>" + this.$input.value + "</font>" + "<br/>" + "<font size = 1>" +
          date + "</font>>"
        message.innerHTML = mess;
        //вставляет вверх списка
        this.$messList.append(message)

        //добавление сообщения в list
        this.messageList.push(mess)
        MessageForm.addElemToLocalStorage("messList", this.messageList)
      }
        this.$input.clearInput()

        this.$messList.scrollTo(0, this.$messList.scrollHeight)

    }


    static addElemToLocalStorage (key , val){
       const jsonObj = JSON.stringify(val)
      localStorage.setItem(key, jsonObj)
    }

    static getElementFromLocalStorage(key){
      console.log(JSON.parse(localStorage.getItem(key)))
      return JSON.parse(localStorage.getItem(key))
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
