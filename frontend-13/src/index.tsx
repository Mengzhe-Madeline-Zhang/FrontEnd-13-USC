import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, ReactReduxContext, connect } from 'react-redux';
import configureStore from './store/store';
import store from './Redux/store';
import { compose } from 'redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store1 = configureStore();
const store2 = store;

// export interface store2Type{
//   products: [];
//   cart: []; 
//   showCart: boolean; 
// }

// const store1Context =React.createContext<{} as ReactReduxContextValue<any, { type: string; payload: any; }>>({});
// const store1Context =React.createContext<any | null>(store1);
// const store2Context =React.createContext<any | null>(store2);
// const store2Context =React.createContext( {} as ReactReduxContextValue<any, AnyAction>);


root.render(
  // <React.StrictMode>
  <Provider store={store2} >
 {/* <Provider store={store2} context={store2Context}> */}
{/* </Provider><Provider store={store2}>  */}
  {/* <Provider store={store2} context={store2Context}>  */}

      <App />
      {/* </Provider> */}
    </Provider>
  // {/* </React.StrictMode> */}
);
// compose()
// connect( store2.getState, null, null, { context: store2Context })(App)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
