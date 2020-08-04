import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import HeartButton from './Components/heartButton';
import { Switch, Route, Link } from 'react-router-dom';
import { Router } from "react-router";


class App extends Component {
    state = {
        likeCount: 0,
        artists: [
            {
                id: 0,
                name:'A$AP Rocky',
                album: 'At.Long.Last.A$AP',
                img: 'https://m.media-amazon.com/images/I/61V2QAu-DDL._AA256_.jpg',
                intro: 'Rakim Athelaston Nakache Mayers, known professionally as ASAP Rocky, is an American rapper, singer, songwriter, record producer, model, actor, and music video director. He is a member of the hip hop collective A$AP Mob, from which he adopted his moniker.'
            },
            {
                id: 1,
                name: 'Kanye West',
                album: 'The Life of Pablo',
                img: 'https://m.media-amazon.com/images/I/61T7zWjf4JL._AA256_.jpg',
                intro: 'The Life of Pablo is the seventh studio album by American rapper and producer Kanye West. It was released on February 14, 2016, through GOOD Music and distributed by Def Jam Recordings. Recording sessions took place from 2013 to 2016, in Italy, Mexico, Canada, and the United States.'
            },
            {   
                id: 2,
                name: 'Kendrick Lamar',
                album: 'DAMN',
                img: 'https://i.pinimg.com/originals/06/87/02/068702c3905e79d3c86543537f062903.jpg',
                intro: 'Damn is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, through Top Dawg Entertainment, distributed by Aftermath Entertainment and Interscope Records.'
            }
        ]
    }

    increaseLikesCount = () => this.setState(prevState => ({ likeCount: prevState.likeCount++}));

    render() {
        return (
            <main>
  

              <div>
                <h1>Our favourite artists:</h1>
              </div>
                <div className="card">
                    <img src={this.state.artists[0].img} alt={this.state.artists[0].name} />
                    <div className="container">
                        <h4>{this.state.artists[0].name}</h4>
                      <p>{this.state.artists[0].intro}</p>
                        <button onClick={this.increaseLikesCount}>Likes:{this.state.likeCount}</button>
                        <p> <span><HeartButton/></span> </p>
                    </div>
                </div>

              <div className="card">
                  <img src={this.state.artists[1].img} alt={this.state.artists[1].name} />
                  <div className="container">
                    <h4><b>{this.state.artists[1].name}</b></h4>
                    <p>{this.state.artists[1].intro}</p>
                    <button onClick={this.increaseLikesCount}>Likes:{this.state.likeCount}</button>
                    <p> <span><HeartButton/></span> </p>
                  </div>
              </div>

              <div className="card">
                  <img src={this.state.artists[2].img} alt={this.state.artists[2].name} />
                  <div className="container">
                    <h4><b>{this.state.artists[2].name}</b></h4>
                    <p>{this.state.artists[2].intro}</p>
                    <button onClick={this.increaseLikesCount}>Likes:{this.state.likeCount}</button>
                    <p> <span><HeartButton/></span> </p>
                  </div>
              </div>
            </main>
        )
    }
  }
  

  export default App;
ReactDOM.render(
  <App />,
  document.getElementById('root')
)