import './App.css';
import Cards from './components/Cards';

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
    title: '',
    img: ''
  },
  {
    title: '',
    img: ''
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
