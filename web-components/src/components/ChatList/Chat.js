const template = document.createElement('template');
template.innerHTML = `
    <style>       
    .chat-class{
            text-align: center;
             background: white;
             padding: 20px;
             margin: unset;
             color: black;
             border: 0.1rem solid;
             border-color: darkorange;
            
    }
    </style>
    <div class = "chat-class"> 
        <div class = "chat-name"></div>          
    </div>
`;

export default class Chat extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$chat = this.shadowRoot.querySelector('.chat-class');
    this.$chat.addEventListener('click', this.showChat.bind(this));
    this.$chatName = this.shadowRoot.querySelector('.chat-name');
    this.chatId = '';
  }

  showChat(event) {
    event.preventDefault();
    const node = document.getElementById('chat-list');
    const parent = node.parentNode;
    if (parent) {
      node.parentNode.removeChild(node);
    }
    const chatForm = document.createElement('message-form');
    chatForm.$chatId = this.chatId;
    chatForm.reloadMessList();
    parent.appendChild(chatForm);
  }
}
customElements.define('my-chat', Chat);
