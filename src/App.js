import React from 'react';
import home from './home/home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={home} />
        </div>
      </Router>
    )
  }
}


// const App = () => (
//   <div>This is App</div>
// );



export default App;