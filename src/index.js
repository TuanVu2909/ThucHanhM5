import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "./service/list";
import CreateTour from "./service/CreateTour";
import EditTour from "./service/EditTour";
import Info from "./service/Info";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<List/>}></Route>
              <Route path={'/create-tour'} element={<CreateTour/>}></Route>
              <Route path={'/edit-tour/:id'} element={<EditTour/>}></Route>
              <Route path={'/info-tour/:id'} element={<Info/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
