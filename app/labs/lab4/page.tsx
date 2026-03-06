"use client";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import UrlEncoding from "./url-encoding/query-parameters";
import ReduxExamples from "./redux/page";
import store from "./store";
import { Provider } from "react-redux";
import TodoList from "./redux/todos/TodoList";
import Link from "next/link";

export default function Lab4() {
  function sayHello() {
    alert("Hello!");
  }
  return (
    <Provider store={store}>
      <div id="wd-lab1">
        <h2>Lab 4</h2>
        <h3>Changing States</h3>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <UrlEncoding/>
        <ReduxExamples/> 
        <TodoList/>
        <Link href="./lab4/redux/react-context">React Context Examples</Link>
<hr/></div></Provider>);}