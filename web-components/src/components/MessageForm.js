import Message from './Message'

const template = document.createElement('template');
template.innerHTML = `
    <style>
              
        div {
            
            width: 100%;
            justify-content: flex-end;                         
            background: bisque;
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
    <div id="mess-list-root"></div>
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
      this.$messListRoot = this._shadowRoot.querySelector("#mess-list-root");
      console.log(this.$messListRoot);
      this.messList = [];
      this.messList = MessageForm.getElementFromLocalStorage("MESS_LIST_KEY");
      if (this.messList == null){
        this.messList = []
      }else {
        const root = this.$messListRoot;
        this.messList.forEach(function (map) {
          let message = new Message();
          message.createMess("Kate", "chat_1", map.get("message"), "12.09.2019", root)
        })
      }
      //Прокручиваю сообщения вниз
      this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
      //Добавление listener
      this.$form.addEventListener('submit', this._onSubmit.bind(this));
      this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

    }

    _onSubmit (event) {
        event.preventDefault();
      if (this.$input.value !== "") {
        let message = new Message();
        message.createMess("Kate", "chat_1", this.$input.value, MessageForm.getDate(), this.$messListRoot);
        this.messList.push(new Map([["senderId","Kate"], ["message", this.$input.value]]));
        MessageForm.addElemToLocalStorage("MESS_LIST_KEY",this.messList)
      }
        this.$input.clearInput();
        this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight)

    }


    static addElemToLocalStorage (key , val){
      let messList = [];
      val.forEach(function (map) {
        messList.push(JSON.stringify(Array.from(map.entries())))});
      console.log(JSON.stringify(messList));
      localStorage.setItem(key, JSON.stringify(messList))

    }

    static getElementFromLocalStorage(key){
      const local = localStorage.getItem(key);
      if (local == null){
        return []
      }
      let list = JSON.parse(local);
      let result = [];
      list.forEach(function(map){
        result.push(new Map(JSON.parse(map)))
      });
      return result
    }

    static getDate(){
      let date = new Date().toString();
      date = date.split(' ');
      date = date[2] + '-' + date[1] + ' ' + date[4];

      return date
    }

    _onKeyPress (event) {
        if (event.keyCode === 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
