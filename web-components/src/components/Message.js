const template = document.createElement('template');
// language=HTML
template.innerHTML = `
  
    <style>
        
        .messStructure {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            border: 2px solid #000;
            padding: 10px;
        }
        
        
    </style>
    <div class = "messStructure">
        <div class = "mess" ></div>
        <div class = "date"></div>
        <div class = "userId"></div>
    </div>
`

class Message extends HTMLElement{

  constructor(mess,date ,id,chatId){
    super()
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.userId = id;
    this.date = date;
    this.mess = mess;
    this.chatId = chatId;
    this.$input = this._shadowRoot.querySelector('form-input');

  }


}

customElements.define('message', Message);
