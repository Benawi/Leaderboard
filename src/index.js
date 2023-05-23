import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const data = [
  {
    name: 'Habtamu',
    score: 100,
  },
  {
    name: 'Alemayeh',
    score: 200,
  },
  {
    name: 'Bena',
    score: 50,
  },
  {
    name: 'Habtamu Alemayehu',
    score: 50,
  },
  {
    name: 'Microverse',
    score: 5010,
  },
  {
    name: 'Alexander',
    score: 50,
  },
];

const displayItems = () => {
  const container = document.querySelector('#leaderboard-container');
  data.forEach((item, index) => {
    container.innerHTML += `<li id="score-${index}" class="leaderboard-rows d-flex">
    <p>${item.name}</p>
    <p>:</p>
    <p>${item.score}</p>
    </li>`;
  });
};

displayItems();