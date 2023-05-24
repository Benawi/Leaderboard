import Store from './Store.js';

export default class UserInterface {
  constructor() {
    this.store = new Store();
    this.leaderboardContainer = document.getElementById('leaderboard-container');
  }


}