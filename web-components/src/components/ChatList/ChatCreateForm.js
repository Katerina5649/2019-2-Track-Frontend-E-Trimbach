import createId from '../Helpers/ChatListHelper';


const template = document.createElement('template');
template.innerHTML = `
<style>

*{
    font-family: Areal;
}

.b-popup{
        width:100%;
        height: 5000px;
        background-color: rgba(0,0,0,0.5);
        overflow:hidden;
        position:fixed;
        top:0px;
}
.b-popup .b-popup-content{
        margin:40px auto 0px auto;
        width:50%;
        height: 150px;
        button : 10%;
        padding:10px;
        background-color: #c5c5c5;
        border-radius:5px;
        box-shadow: 0px 0px 10px #000;
}

.close{
        font-size: 6vh;
        color: #aaaaaa;
        float: right;
        font-weight: bold;
}

.name{
        text-align: center;
        background: #0074D9;
        padding: 20px;
        margin: unset;
        color: #bbbbbb;
}

form-input{
            
        display: flex;
        width: 100%;           
        min-height: 50px;
        position: relative;
    
}
.space{
min-height: 10px;

}

</style>

<div class="b-popup" >
    <div class="b-popup-content">
        <div class = name>Введите название чата
        <span class="close">×</span>
        </div>
        <div class = 'space'>  </div>
        <form-input></form-input>
    </div>    
</div>


`;

export default class ChatCreateForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$close = this._shadowRoot.querySelector('.close');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$popup = this._shadowRoot.querySelector('.b-popup');
    this.$mySelfForm = null;
    this.$chatList = null;
    this.$close.addEventListener('click', this.close.bind(this));
    this.$popup.addEventListener('submit', this.onSubmit.bind(this));
    this.$popup.addEventListener('keypress', this._onKeyPress.bind(this));
  }

  close(event) {
    event.preventDefault();
    const node = this.$mySelfForm;
    const parent = node.parentNode;
    if (parent) {
      node.parentNode.removeChild(node);
    }
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$popup.dispatchEvent(new Event('submit'));
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const chatName = this.$input.value;
    const node = this.$mySelfForm;
    const parent = node.parentNode;
    if (parent) {
      node.parentNode.removeChild(node);
    }
    this.$chatList.addNewChatToChatList(chatName, createId(1, 1000));
  }
}
customElements.define('chat-create-form', ChatCreateForm);
