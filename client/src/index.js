import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import AuthProvider from './providers/AuthProvider';
import { initMiddleware } from 'devise-axios';
import GameProvider from './providers/GameProvider';
import ReviewProvider from './providers/ReviewProvider';
import QueryProvider from './components/shared/QueryProvider'
initMiddleware();
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryProvider>
      <GameProvider>
       <ReviewProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReviewProvider>
      </GameProvider>
      </QueryProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();