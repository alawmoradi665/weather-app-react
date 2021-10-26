import Page from './components/Page';
import Header from './components/Header';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Page} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}



export default App;
