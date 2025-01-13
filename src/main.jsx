import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';//Styles for the gif app

//import HelloWorldApp from './HelloWorldApp';
//import {FirstApp} from './FirstApp';
//import {CounterApp} from './CounterApp';
import {GifApp} from './GifApp';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GifApp/>
  </React.StrictMode>
);
