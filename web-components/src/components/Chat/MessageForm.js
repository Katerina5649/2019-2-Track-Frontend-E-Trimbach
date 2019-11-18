// eslint-disable-next-line no-unused-vars
import Message from './Message';

const template = document.createElement('template');
template.innerHTML = `
    <style>         
          form{
           position: fixed;
           top: 0;
           left: 0;
           width: 100%;
           height: 100%;
          }

        
        .flex-cont {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            height: 100%;
        }
        
        #mess-list-root{
         align-items: flex-end;
         overflow-y: scroll;
         bottom: 0;
         text-align: right;
         margin-top: 5px;
         margin-bottom: 10px; 
         min-height: 670px;  
         height: 70%;         
         display: flex;
         flex-direction: column;
         overflow-y: auto;
         flex: 1;  
               
        }
       
        form-input {
            display: flex;
            width: 100%;
            align-self: flex-end;
            min-height: 50px;
            position: relative;
           
         }
        
        input[type=submit] {
            visibility: collapse;
        }
        
        .chat_name{
        text-align: center;
        background: #0074D9;
        padding: 20px;
        margin: unset;
        color: #bbbbbb;
       
        }
        
    </style>
    
    <form>
        <div class = "flex-cont">
        <div class = "head">
            <h1 class="chat_name">Chat Screen</h1>
        </div>    
            <div id="mess-list-root"></div>
            <form-input name="message-text" placeholder="Введите  сообщение"></form-input>
        </div>
    </form>
   
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$messListRoot = this._shadowRoot.querySelector('#mess-list-root');
    this.$chatId = null;
    this.reloadMessList();
    // Добавление listener
    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value !== '') {
      const message = document.createElement('chat-message');
      message.$message.innerText = this.$input.value;
      const date = MessageForm.getDate();
      message.$date.innerText = date;
      this.$messListRoot.append(message);
      const map = new Map();
      map.set('date', date);
      map.set('message', this.$input.value);
      this.messList.push(map);
      MessageForm.addElemToLocalStorage(`MESS_LIST_KEY_${this.$chatId}`, this.messList);
    }
    this.$input.clearInput();
    this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
  }

  // для map
  static addElemToLocalStorage(key, val) {
    const messList = [];
    val.forEach((map) => {
      messList.push(JSON.stringify(Array.from(map.entries())));
    });
    localStorage.setItem(key, JSON.stringify(messList));
  }

  static getElementFromLocalStorage(key) {
    const local = localStorage.getItem(key);
    if (local == null) {
      return [];
    }
    const list = JSON.parse(local);
    const result = [];
    list.forEach((map) => {
      result.push(new Map(JSON.parse(map)));
    });
    return result;
  }

  static getDate() {
    let date = new Date().toString();
    date = date.split(' ');
    date = `${date[2]}-${date[1]} ${date[4]}`;

    return date;
  }

  reloadMessList() {
    this.messList = MessageForm.getElementFromLocalStorage(`MESS_LIST_KEY_${this.$chatId}`);
    if (this.messList == null) {
      this.messList = [];
    } else {
      this.messList.forEach((map) => {
        const message = document.createElement('chat-message');
        message.$message.innerText = map.get('message');
        message.$date.innerText = map.get('date');
        this.$messListRoot.append(message);
        // message.createMess('Kate', 'chat_1', map.get('message'), '12.09.2019', root);
      });
    }
    // Прокручиваю сообщения вниз
    this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
