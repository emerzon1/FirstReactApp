import React from "react";
import "./App.css";
import InputArea from "./components/InputArea.js";

function App() {
    return (
        <div className="container">
            <div className="header">
                <h1>To-Do List</h1>
            </div>
            <InputArea />
        </div>
    );
}

export default App;
