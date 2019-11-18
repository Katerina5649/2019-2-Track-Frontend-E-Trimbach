import './Chat';
import './ChatCreateForm';

const template = document.createElement('template');
template.innerHTML = `
<style>
          form{
            overflow-y: scroll;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .chat-root{
            flex-direction: column;
          }
          h1{
            text-align: center;
            background: #0074D9;
            padding: 20px;
            margin: unset;
            color: #bbbbbb;
          }
          button{
            position: absolute;
            right: 3vh;
            bottom: 3vh;
            border-radius: 50%;
            width: 8vh;
            height: 8vh;
            background-color: #0084ff;
            transition: all 0.3s;
          }
</style>
<form>
    <h1>Chat List</h1>
    <div class = "chat-root" id = 'chat-root'></div>
    <button></button>
</form>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$chatListRoot = this._shadowRoot.querySelector('.chat-root');
    this.$chatList = ChatList.getElementFromLocalStorage('CHAT_LIST_KEY');
    this.button = this._shadowRoot.querySelector('button');
    this.button.addEventListener('click', this._onSubmit.bind(this));
    if (this.$chatList == null) this.$chatList = [];
    else {
      this.$chatList.forEach((map) => {
        const elem = document.createElement('my-chat');
        elem.$chatName.innerText = map.get('chatName');
        elem.chatId = map.get('chatId');
        this.$chatListRoot.appendChild(elem);
      });
    }
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

  _onSubmit(event) {
    event.preventDefault();
    const chatCreateForm = document.createElement('chat-create-form');
    chatCreateForm.$mySelfForm = chatCreateForm;
    chatCreateForm.$chatList = this;
    this.$form.appendChild(chatCreateForm);
  }

  addNewChatToChatList(chatName, chatId) {
    const map = new Map();
    map.set('chatName', chatName);
    map.set('chatId', chatId);
    this.$chatList.push(map);
    ChatList.addElemToLocalStorage('CHAT_LIST_KEY', this.$chatList);
    const elem = document.createElement('my-chat');
    elem.$chatName.innerText = chatName;
    elem.chatId = chatId;
    this.$chatListRoot.appendChild(elem);
  }
}
customElements.define('chat-list', ChatList);
