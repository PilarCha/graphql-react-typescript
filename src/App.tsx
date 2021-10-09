import * as React from 'react';
import LaunchList from './components/LaunchList/Launchlist';
import LaunchProfile from './components/LaunchProfile/LaunchProfile';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <LaunchList/>
      <LaunchProfile/>
    </div>
  )
}

export default App;