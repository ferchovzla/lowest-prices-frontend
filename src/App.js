import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import flag from './images/col-flag.png';
import food from './images/food.png';
import medicine from './images/medicine.png';
import medicalservice from './images/medical-service.png';
import './App.css';

import Lottie from 'react-lottie'
import animationData from './animations/17895-wear-mask.json'


class App extends Component {

 
render() {

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  return (
    <div className="App1">
      <header className="App-header">
      <title>Contigencia | COVID-19 | Tocancipá, Cundinamarca</title>

     <div>
      <img src={food} width="75px" height="75px"/> &nbsp; 
      <img src={medicine} width="75px" height="75px"/>  &nbsp; 
      <img src={medicalservice} width="75px" height="75px"/> 
     </div>

        <Lottie options={defaultOptions}
              height={200}
              width={200}
        />

        <p className="p-spaced">
           Bienvenidos al Sistema de Productos, Servicios e Información</p>
           <p className="p-spaced">en la contingencia <b>COVID-19</b> </p>

         <img src={flag} width="75px" height="50px"/> 
         
         <footer><b>Tocancipá</b> 2020</footer> 
        
           
      </header>
    </div>
  );
}
}


export default App;

