import Store from './Store.js';
import UserInterface from './UI.js';

export default class RefreshScore {
  constructor() {
    this.store = new Store();
    this.UI = new UserInterface();
    this.refreshButton = document.getElementById('refresh-score');
  }

  
}