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
</style>
<form>
    <h1>Chat List</h1>
    <div class = "messListRoot"></div>
</form>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$messListRoot = this._shadowRoot.querySelector('.messListRoot');
    this.messList = ['aaa', 'bbb', 'ccc'];
    this.messList.forEach((map) => {
      const message = document.createElement('chat-message');
      message.innerHTML = map;
      this.$messListRoot.append(message);
      // message.createMess('Kate', 'chat_1', map.get('message'), '12.09.2019', root);
    });
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
}
customElements.define('chat-list', ChatList);
