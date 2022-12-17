// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
import {AppV2} from './componentsV2/AppV2'
import { AppV3 } from './componentsV3/AppV3';
import { Appv4 } from './componentV4/Appv4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <AppV2 /> */}
    {/* <AppV3/> */}
    <Appv4/>
    
  </>
);


// ReactDOM.render()

// const reactDom = {
//   render: function(){
//   }
// }

// const react = {
//   createRoot: function(){
//   }
// }

const returnSum = () =>{
  return 10
}