import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  NavbarMenu,
  MainContent,
  Banner
} from './components'

function App() {
  return (
    <div className="main-page container-fluid">
      <Banner></Banner>
      <NavbarMenu></NavbarMenu>
      <MainContent></MainContent>
    </div>
  );
}

export default App;