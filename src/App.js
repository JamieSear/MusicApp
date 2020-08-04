import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import './App.css'

class App extends Component {
    state = {
        favArtists: 'Our favourite artists: ',
        likeCount: 0,
        artists: [
            {
                id: 0,
                name:'A$AP Rocky',
                album: 'At.Long.Last.A$AP',
                img: 'https://media.pitchfork.com/photos/5929aea713d197565213a144/1:1/w_600/ce403a0f.jpg',
                intro: 'Rakim Athelaston Nakache Mayers, known professionally as ASAP Rocky, is an American rapper, singer, songwriter, record producer, model, actor, and music video director. He is a member of the hip hop collective A$AP Mob, from which he adopted his moniker.'
            },
            {
                id: 1,
                name: 'Kanye West',
                album: 'The Life of Pablo',
                img: 'https://media.pitchfork.com/photos/5929b3995e6ef9596932249e/1:1/w_320/1192269b.jpg" alt="The Life of Pablo album cover',
                intro: 'The Life of Pablo is the seventh studio album by American rapper and producer Kanye West. It was released on February 14, 2016, through GOOD Music and distributed by Def Jam Recordings. Recording sessions took place from 2013 to 2016, in Italy, Mexico, Canada, and the United States.'
            },
            {   
                id: 2,
                name: 'Kendrick Lamar',
                album: 'DAMN',
                img: 'https://media.pitchfork.com/photos/5929b3995e6ef9596932249e/1:1/w_320/1192269b.jpg',
                intro: 'Damn is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, through Top Dawg Entertainment, distributed by Aftermath Entertainment and Interscope Records.'
            }
        ]
    }

    increaseLikesCount = () => this.setState(prevState => ({ likeCount: prevState.likeCount++}));

    render() {
        return (
            <main>
              <div>
                <h1>{favArtists}</h1>
              </div>
                <div className="card">
                    <img src={artists[0].img} alt={artists[0].name} />
                    <div className="container">
                        <h4>{artists[0].name}</h4>
                      <p>{artists[0].intro}</p>
                      <button onClick ></button>
                    </div>
                </div>

              <div className="card">
                  <img src={artists[1].img} alt={artists[1].name} />
                  <div className="container">
                    <h4><b>{artists[1].name}</b></h4>
                    <p>{artists[1].intro}</p>
                  </div>
              </div>

              <div className="card">
                  <img src={artists[2].img} alt={artists[2].name} />
                  <div className="container">
                    <h4><b>{artists[2].name}</b></h4>
                    <p>{artists[2].intro}</p>
                  </div>
              </div>
            </main>
        )
    }
  }
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
)