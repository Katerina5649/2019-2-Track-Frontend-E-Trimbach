const template = document.createElement('template');
template.innerHTML = `
    <style>
        div{
            text-align: right;
         }
        .mess_class{
            display: flex;
            color: white;
            word-break: break-word;
            white-space: pre-wrap;
            background: darkorange;
            border: 0.5rem solid;
            border-radius: 20px;
            border-color: darkorange;
            width: fit-content;
            max-width: 600px;
            margin-left: 20px;
            min-width : 100px;
            min-height: 30px;        
        }
        
        .date{
        font-size : smaller;
        
        }
        
        .space{
        min-height: 5px;
        }
        
        .my-message{
            flex: auto;
        }

        :host {
            display: inline-block;
           
        }
    </style>
    <div class = "mess_class">
        <div class = "my-message"></div>         
        <div class = "space"></div>   
    </div>
    <div class = "date"></div> 
    <div class = "space"></div>
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
