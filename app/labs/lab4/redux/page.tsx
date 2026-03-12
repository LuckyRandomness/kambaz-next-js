"use client";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./hello";
import AddRedux from "./AddRedux";
import { Provider } from "react-redux";
import store from "../store";

export default function ReduxExamples() {
 return (
  <Provider store={store}>
   <div>
     <h2>Redux Examples</h2>
     <HelloRedux />
     <CounterRedux />
     <AddRedux />
   </div>
   </Provider>
 );
}