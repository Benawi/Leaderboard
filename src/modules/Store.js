export default class Store {
    constructor() {
      this.data = [];
      this.scoresUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/266Uox8RtUVX6YlFdld7/scores/';
    }
  
    addNewItem(user, score) {
      this.obj = {
        user,
        score,
      };
  
     
  }