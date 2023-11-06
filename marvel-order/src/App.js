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
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7989358_p_v8_ah.jpg"
  },
  {
    title: "Captain America: The First Avenger",
    img: "https://resizing.flixster.com/Jq0TOSAEXL0emaUV_g7fHXmIrIY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2Q1NDI3NTg2LWQwN2EtNGVhNS1iMTIzLTY4ZWQyZmVmNDZmYi53ZWJw"
  },
  {
    title: "The Avengers",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8815512_p_v8_ax.jpg"
  },
  {
    title: "Iron Man 3",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259486_p_v8_af.jpg"
  },
  {
    title: "Thor: The Dark World",
    img: "https://resizing.flixster.com/mtioJmO5nud4niY5UhAGb7Yducg=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ViNTUzNmEwLTUzNzAtNDBiZS04Mjg3LWZjMmU0NDBiOTk2Zi53ZWJw"
  },
  {
    title: "Captain America: The Winter Soldier",
    img: "https://resizing.flixster.com/0CcKqiPAlAjfgjKkaVOitCwlYmQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4NjQ3NDY3LTNhM2QtNDI2Yi1iM2NjLWJiM2Y4MDQ1NjE0NS5qcGc="
  },
  {
    title: "Guardians of the Galaxy",
    img: "https://resizing.flixster.com/SneFHH-BDOhBkh7h1A-aNwcrxLM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U3YTY2YTQzLTU5NDgtNDNiMC04ZTI1LTFiZDYyMTMxMjc5MC5qcGc="
  },
  {
    title: "Avengers: Age of Ultron",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10745606_p_v13_bh.jpg"
  },
  {
    title: "Ant-Man",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10951814_p_v8_al.jpg"
  },
  {
    title: "Captain America: Civil War",
    img: "https://resizing.flixster.com/1nBX_V-Cyl3s_VE5LBBZR0sXvvo=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2M3NGMwNGE0LTE2MWMtNDIzYS1hMTQyLWY0ZWM0MGU4ZGIxNC53ZWJw"
  },
  {
    title: "Doctor Strange",
    img: "https://resizing.flixster.com/vK77TbbXQYgkJ2HpvPp1p_W0tj4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2FkNDZiMzU2LTFmYTQtNDgwMS1iOWM5LTgxNTg2NDMxNjBmNi53ZWJw"
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    img: "https://resizing.flixster.com/SY3NRybei-FtvHL-p2LrtZb0elY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzI0ZDRiZmQ0LTI0ZjUtNDg5MC05NDUxLTdhMzdhMmU3NTMzOC53ZWJw"
  },
  {
    title: "Spider-Man: Homecoming",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/161696/161696_ab.jpg"
  },
  {
    title: "Thor: Ragnarok",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12402331_p_v8_ax.jpg"
  },
  {
    title: "Black Panther",
    img: "https://resizing.flixster.com/KBlur3LaA-y1U1yt6_Y2uO25ozA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzMxOGI1YzBhLWMyMjEtNGUxMS1iM2Q0LWQ4OGMyYzQyZjQyYS53ZWJw"
  },
  {
    title: "Avengers: Infinity War",
    img: "https://resizing.flixster.com/CXOXbOpLNL1NNkXTQu-4Rgvcszs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM0NGRkMDM2LWVjNDQtNGZlMC04NGM3LWZkMzQ2Njg1OTUyNi53ZWJw"
  },
  {
    title: "Ant-Man and The Wasp",
    img: "https://resizing.flixster.com/OQT-Iar3VPUPi_xSo6EWdx_RS38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzQyNTBjMzY2LWJiMTItNDc3YS04ZDFiLWFiYTcxNzM4NThlZC53ZWJw"
  },
  {
    title: "Captain Marvel",
    img: "https://resizing.flixster.com/IATaLQOAfVzJ-wfnzriXuACjmgU=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU5ZjVjZTkzLTkwYjEtNDI5My04ZTY0LWMwNGMzM2M0MmYwOS53ZWJw"
  },
  {
    title: "Avengers: Endgame",
    img: "https://resizing.flixster.com/fC7nU6iTRQk02tS0SDS1ylx-G34=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2QxZjE5ZDgzLTRiY2MtNDFkYS04NWQ4LTRkYzc1ZTAwNWE2NC53ZWJw"
  },
  {
    title: "Spider-Man: Far From Home",
    img: "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/b6/20a4adfe4a3c71ac0d9f735ac6492a8e_original.jpg"
  },
  {
    title: "WandaVision (Series)",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19091632_b_v10_aa.jpg"
  },
  {
    title: "Falcon and the Winter Soldier (Series)",
    img: "https://resizing.flixster.com/dt434nQxzw0ulYweDZlc-KDiD8o=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjg0MDQ2Mi53ZWJw"
  },
  {
    title: "Loki season 1 (Series)",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19575003_b_v13_aa.jpg"
  },
  {
    title: "Black Widow",
    img: "https://resizing.flixster.com/UqanC4hHIFolYIKoZ020-YmubCQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRkMWJjZjI2LWE0MDktNDczZC05ZmNiLTIzMTQ0NTE5MGJiMC5qcGc="
  },
  {
    title: " What If...? (Series)",
    img: "https://resizing.flixster.com/HJIDhOhxvZOjYZgNTO1Qot5ZGU8=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjk3MTk4MS53ZWJw"
  },
  {
    title: "Shang-Chi and the Legend of the Ten Rings",
    img: "https://resizing.flixster.com/bZGWzjLoyj0GXIQj8vs-8y0xMIA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY0NWJhN2RhLTg1Y2YtNDBmYS04YjQ0LWI5MWY4NmIwOGRjMy5qcGc="
  },
  {
    title: "Eternals",
    img: "https://images.moviesanywhere.com/acdd3c73c67d756fb920845ad7c88c8f/eb62e721-3ce3-4ec0-b44c-1bd8bc073d87.jpg"
  },
  {
    title: "Hawkeye (series)",
    img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20434103_i_v8_ac.jpg"
  },
  {
    title: "Spider-Man: No Way Home",
    img: "https://resizing.flixster.com/8PNiwC2bpe9OecfYZSOVkvYC5vk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2U5NGM0Y2Q1LTAyYTItNGFjNC1hNWZhLWMzYjJjOTdjMTFhOS5qcGc="
  },
  {
    title: "Moon Knight (series)",
    img: "https://resizing.flixster.com/U9zMDn8do9wR3Nw_EcdgLjKkTFU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vZjEyMjkwODQtNmJhNi00MjM0LThiOWQtMDIyZThjNWZiM2Y4LmpwZw=="
  },
  {
    title: "Doctor Strange in the Multiverse of Madness",
    img: "https://images.moviesanywhere.com/f9294f39c310425bc52732ae490549b4/9812ca94-e25f-46ee-9874-090857eb0ab7.jpg"
  },
  {
    title: "Ms. Marvel (series)",
    img: "https://m.media-amazon.com/images/M/MV5BZmQ3OTZkNDUtNTU0Mi00ZjE4LTgyNTUtY2E4NWRmNDUxMzkyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
  },
  {
    title: "Thor: Love and Thunder",
    img: "https://cdn11.bigcommerce.com/s-twbzkv97cv/images/stencil/1280x1280/products/6965/10289/thorloveorthunder__33197.1663267844.jpg?"
  },
  {
    title: "I Am Groot (series)",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_iamgroot_takesabath_v2_636_d83c5199.jpeg"
  },
  {
    title: "She-Hulk (series)",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_she-hulkattorneyatlaw_ticketnumbe_c2428ec2.jpeg"
  },
  {
    title: " Werewolf By Night",
    img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/2915/1612915-v-8c7b41fa0341"
  },
  {
    title: "Black Panther: Wakanda Forever",
    img: "https://lumiere-a.akamaihd.net/v1/images/pp_disney_blackpanther_wakandaforever_1289_d3419b8f.jpeg"
  },
  {
    title: "Guardians of the Galaxy - Holiday Special",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_guardians_ofthegalaxyholidayspeci_94a7be73.jpeg"
  },
  {
    title: "Ant-Man and the Wasp: Quantumania",
    img: "https://lumiere-a.akamaihd.net/v1/images/pp_disneymovies_antmanquantumania_1721_94516e7a.jpeg"
  },
  {
    title: "Guardians of the Galaxy 3",
    img: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    title: "Secret Invasion (series)",
    img: "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2023/06/14102549/SI_Payoff_Digital_KA_v7_Sm.jpg"
  },
  {
    title: "Loki season 2 (series)",
    img: "https://resizing.flixster.com/o1o8vBlAWaGVUudnCaTcwrrSwIQ=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZTdhMTEzOTUtMTc1Yi00NzljLTk0YTgtNWFiYzJhMmQwMzE4LmpwZw=="
  },
  {
    title: "The Marvels",
    img: "https://resizing.flixster.com/M017ThZ8ZrlD1lEJL56EOAXkW2w=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2E2NTI2Y2ZlLTZlNGItNDIxMi1hZTI4LTgyOTIwOTNlMDU1OS5qcGc="
  }
]