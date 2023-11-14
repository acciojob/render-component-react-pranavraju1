import React, { Component, useState } from "react";
import "../styles/App.css";
import Tabs from "./Tabs";

const tabs = [
  {
    title: 'Tab1',
    content: 'This is the content for Tab 1.'
  },
  {
    title: 'Tab2',
    content: 'This is the content for Tab 2.'
  },
  {
    title: 'Tab3',
    content: 'This is the content for Tab 3.'
  }
]

const App = () => {
  return (
    <div id="main">
      <Tabs tabProp={tabs}/>
    </div>
  );
};

export default App;
