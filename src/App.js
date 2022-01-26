import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />

      <AppBody>
        <Sidebar></Sidebar>
      </AppBody>
    </div>
  );
}
const AppBody = styled.div``;

export default App;
