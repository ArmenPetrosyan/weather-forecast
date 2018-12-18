import React, {Component, Fragment} from 'react';
import Header from './templates/Header';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Header>New header</Header>  
                <main>
                    <ul>
                        <li>Asaldkaldkla</li>
                        <li>dsdasdsad</li>
                        <li>fasfsafasfasfas</li>
                        <li>wretwetw</li>
                        <li>reee</li>
                    </ul>
                </main>
                <footer>
                    <span>&copy; Hello app</span>
                </footer>
            </div>    
        )
    }
}

export default App;