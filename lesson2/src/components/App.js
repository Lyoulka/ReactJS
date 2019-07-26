import React, { Component } from "react";
import '../styles/App.css';
import FIO from './FIO';
const author = new FIO();
class App extends Component {
    heandleClick(){
        const date = new Date();
        alert(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear());
    }
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <p>Имя разработчика: {author.getAuthor()}</p>
                <button onClick={this.heandleClick}>Узнать дату</button>
            </div>
        );
    }
}

export default App;