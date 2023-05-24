import Store from './Store.js';

export default class UI {
  constructor() {
    this.store = new Store();
    this.leaderboardContainer = document.getElementById('leaderboard-container');
  }

  displayLeaderboard() {
    this.data = this.store.getData();
    this.data.then((result) => {
      this.leaderboardContainer.innerHTML = '';
      result.forEach((item, index) => {
        this.leaderboardContainer.innerHTML += `<li id="score-${index}" class="leaderboard-rows d-flex">
        <p>${item.user}</p>
        <P>:</P>
        <p>${item.score}</p>
        </li>`;
      });
    });
  }
}