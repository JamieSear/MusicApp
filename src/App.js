import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound404 from './components/NotFound404';
import { ArtistsContainer } from './containers';

import ReactDOM from 'react-dom'
import './App.css'


class App extends Component {

    increaseLikesCount = () => this.setState(prevState => ({ likeCount: prevState.likeCount++}));

    render() {
        return (
          <div className="App">

            <main>
              <section id="feature">
            {/* <BrowserRouter> */}
            <Switch>
              {/* Inline rendering */}
              <Route exact path="/" component={ArtistsContainer} />

              {/* This way for component lifecycle */}
              <Route path="/spotify" component={ArtistsContainer} />

              {/* This way for history.goBack */}
              <Route component={NotFound404} />
            </Switch> 
            {/* </BrowserRouter> */}
           </section> 

            </main>
          </div>
        )
    }
  }
  

  export default App;