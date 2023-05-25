export default class Store {
  constructor() {
    this.data = [];
    this.scoresUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/266Uox8RtUVX6YlFdld7/scores/';
  }

  async addScore(user, score) {
    this.obj = {
      user,
      score,
    };
    const response = await fetch(this.scoresUrl, {
      method: 'POST',
      body: JSON.stringify(this.obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },

    });
    const json = await response.json();
    return json.result;
  }


  async #privateSetData() {
    const response = await fetch(this.scoresUrl);
    const json = await response.json();
    this.data = json.result;
  }

  async getData() {
    this.#privateSetData();
    return this.data;
  }
}