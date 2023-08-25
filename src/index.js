import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import NetflixIndexComponent from './components/NetflixIndexComponent';
import  NetflixRegisterComponent  from './components/NetflixRegisterComponent';
import reportWebVitals from './reportWebVitals';
import TwoWayBinding from './components/TwoWayBinding';
import ShoppingComponent from './components/ShoppingComponent';
import TwoWayClassDemo from './components/TwoWayClassDemo';
import ShoppingClass from './components/ShoppingClass';
import FormComponent from './components/FormComponent'
import FormikDemo from './components/FormikDemo';
import FormikValidation from './components/FormikValidation';
import YupValidationComponent from './components/YupValidationComponent';
import ReactHookDemo from './components/ReactHookDemo';
import { CookiesProvider } from 'react-cookie';
import UseCookiesLogin from './components/UseCookiesLogin';
import ContextDemo from './components/ContextDemo';
import UseReducer from './components/UseReducer';
import CustomHookDemo from './components/CustomHookDemo';
import JQueryAjaxDemo from './components/JQueryAjaxDemo';
import AxiosDemo from './components/AxiosDemo';
import ShoppingIndex from './shopping/ShoppingIndex';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
   <ShoppingIndex></ShoppingIndex>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
