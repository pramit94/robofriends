import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';  
import 'tachyons';


ReactDOM.render(
  <React.StrictMode>
    {/* But writting these many cards like this is not the right way. So we created Cardlist     component. We removed import Card from './Card';
      <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
      </div> 
    */}
    {/* Now we create our parent component called App and we render App. We deleted CardList as we will render App now. And App component will return the CardList. 
      <CardList robots = { robots }/>
    */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
