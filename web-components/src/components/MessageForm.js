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
            max-height: 100%;
        }
        
        #mess-list-root{
         overflow-y: scroll;
         bottom: 0;
         text-align: right;
         border-collapse: separate;
         margin-bottom: 10px;   
         
         
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
         }
        
        input[type=submit] {
            visibility: collapse;
        }
        
    </style>
    
    <form>
        <div class = "flex-cont">
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
    this.messList = [];
    this.messList = MessageForm.getElementFromLocalStorage('MESS_LIST_KEY');
    if (this.messList == null) {
      this.messList = [];
    } else {
      const root = this.$messListRoot;
      this.messList.forEach((map) => {
        const message = new Message();
        message.createMess('Kate', 'chat_1', map.get('message'), '12.09.2019', root);
      });
    }
    // Прокручиваю сообщения вниз
    this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
    // Добавление listener
    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value !== '') {
      const message = new Message();
      message.createMess('Kate', 'chat_1', this.$input.value, MessageForm.getDate(), this.$messListRoot);
      this.messList.push(new Map([['sender_Id', 'Kate'], ['message', this.$input.value]]));
      MessageForm.addElemToLocalStorage('MESS_LIST_KEY', this.messList);
    }
    this.$input.clearInput();
    this.$messListRoot.scrollTo(0, this.$messListRoot.scrollHeight);
  }


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

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }
}

customElements.define('message-form', MessageForm);
