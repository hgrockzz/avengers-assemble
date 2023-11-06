import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">

      <header>
        <h1 className="heading">HOW TO WATCH MARVEL 
            <br/>MOVIES / SERIES</h1>
        <h3 className="sub-heading"> &lt; release order &gt;</h3>
      </header>

      {/* <section>
        {
          // fetch('marvelOrder.json')
          // .then(response => response.json())
          // .then(data => console.log(data))
          // .then(function (response) {
          //   return response.json();
          // })
          // .then(function (data){
          //   for(var i=0; i<data.length; i++){
          //     <Cards img={data[i].img} title={data[i].title}/>;
          //   }
          // })
        }
      </section> */}
      <section>
        {
          movList.map((x) => {
            return <Cards img={x.img} title={x.title}/>;
          })
        }
      </section>

    </div>
  );
}

export default App;


const movList = [
  {
    title: 'Iron Man',
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p170620_p_v8_az.jpg'
  },
  {
    title: 'The Incredible Hulk',
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176337_p_v8_am.jpg'
  },
  {
    title: 'Iron Man 2',
    img: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3546118_p_v8_af.jpg'
  },
  {
    title: "Thor",
    img: "https://resizing.flixster.com/D8aVHEQBDDWqROFps5o36CmCjHo=/180x270/v1.bTsxMTE3MjM1NjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Captain America: The First Avenger",
    img: "https://resizing.flixster.com/ndQr31J6bTCS_8Q_Sj_Tl44ERqI=/180x240/v1.bTsxMTI5MjI4NjtqOzE4NzA2OzEyMDA7MjAzODszMDAw"
  },
  {
    title: "The Avengers",
    img: "https://resizing.flixster.com/z_MqXIP2Y4KH9HkbiSrLBBs8dQA=/180x270/v1.bTsxMTE3NzA5NjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Iron Man 3",
    img: "https://resizing.flixster.com/AZw47nQMGk5dC6xDqdaYveW5EOE=/180x267/v1.bTsxMTE3NzQyNztqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Thor: The Dark World",
    img: "https://resizing.flixster.com/qdZLnAE3lCZY7Lu-YpkMwIJihBo=/180x267/v1.bTsxMTE3NzEwMztqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Captain America: The Winter Soldier",
    img: "https://resizing.flixster.com/NAb5H2AgVEGJU5LXQV0OwEaAwUw=/180x267/v1.bTsxMTE3NzA2NjtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Guardians of the Galaxy",
    img: "https://resizing.flixster.com/qo7oZlU7wYU27Mk3fuCVhsAUNdE=/180x270/v1.bTsxMTE3MzIwOTtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Avengers: Age of Ultron",
    img: "https://resizing.flixster.com/jE--28M6_UBav2jzndRmKHF-BiI=/180x267/v1.bTsxMTE3NzA1ODtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Ant-Man",
    img: "https://resizing.flixster.com/cz8E4SfiaSVoX5XE3eEdAOQ8YgI=/180x270/v1.bTsxMTE3NzIzNjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Captain America: Civil War",
    img: "https://resizing.flixster.com/FRFtx3OT26ssJ28d8D1IaH1XSDs=/180x267/v1.bTsxMTE3Njk1ODtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Doctor Strange",
    img: "https://resizing.flixster.com/nFnMkKGW0Gazm8xIyxF3OnLs33k=/180x267/v1.bTsxMTE3NjQ2ODtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    img: "https://resizing.flixster.com/NqT3m09IEaDwUG5pBpBmFn1BZFY=/180x270/v1.bTsxMTE3OTU0NztqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Spider-Man: Homecoming",
    img: "https://resizing.flixster.com/vk8a7jz5mW0vq7umv_L01u8_Pt4=/180x270/v1.bTsxMTE3NjQwNjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Thor: Ragnarok",
    img: "https://resizing.flixster.com/dKUyAmwZry0tklPSZ8B-jzvd4T8=/180x267/v1.bTsxMTE3NzE2MTtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Black Panther",
    img: "https://resizing.flixster.com/vk8a7jz5mW0vq7umv_L01u8_Pt4=/180x270/v1.bTsxMTE3NjQwNjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Avengers: Infinity War",
    img: "https://resizing.flixster.com/zjde0w9c_6Vn2_lAo3tX7hxGXmc=/180x267/v1.bTsxMTE3NzEyODtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Ant-Man and The Wasp",
    img: "https://resizing.flixster.com/5DxDlXoszLHeCXv7XYHN7mYzPfs=/180x270/v1.bTsxMTE3ODM3NjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "Captain Marvel",
    img: "https://resizing.flixster.com/91A7mVYhoEjyRabJjwjrPzn4hTc=/180x267/v1.bTsxMTE3NzEzMTtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Avengers: Endgame",
    img: "https://resizing.flixster.com/8y0DGpCDaUZj-JlSz85MaOgOD-M=/180x267/v1.bTsxMTE3NzA4MTtqOzE4NzA1OzEyMDA7MTUxNjoxNDUyNg"
  },
  {
    title: "Spider-Man: Far From Home",
    img: "https://resizing.flixster.com/Kb2m6QyC_qMlj8bb1FJJbz-J6n0=/180x270/v1.bTsxMTE3ODA1NTtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: "WandaVision (Series)",
    img: "https://resizing.flixster.com/jzDS0upit69-e7d5zam0W1iRbQ4=/180x270/v1.bTsxMzI0ODcxNjtqOzE4NzA1OzEyMDA7MjAyNTszMDAw"
  },
  {
    title: '',
    img: ''
  },
  {
    title: '',
    img: ''
  },
]