const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
            
           
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
    </style>
    <div class = "mess_class">
        <div class = "my-message"></div>
        <div class = "date"></div>
        
    </div>
`;

export default class Message extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$message = this.shadowRoot.querySelector('.my-message');
    this.$date = this.shadowRoot.querySelector('.date');
    this.$messClass = this.shadowRoot.querySelector('.mess_class');
    this.chatId = '';
    this.senderId = '';
  }

  createMess(senderId, chatId, mess, date, root) {
    this.chatId = chatId;
    this.senderId = senderId;
    this.$message.innerText = mess;
    this.$date.innerText = date;
    root.appendChild(this.$messClass);
  }
}
customElements.define('chat-message', Message);
