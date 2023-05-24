import Store from './Store.js';
import UserInterface from './UI.js';

export default class AddScore {
  constructor() {
    this.store = new Store();
    this.addButton = document.getElementById('add-score');
    this.UI = new UserInterface();
    this.score = document.getElementById('input-score');
  }

  
}