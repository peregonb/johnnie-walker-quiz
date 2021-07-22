import './scss/App.scss';
import {Route, Switch} from 'react-router-dom';
import {AgeScreen} from "./screens/AgeScreen";
import {StartScreen} from "./screens/StartScreen";
import {QuizScreen} from "./screens/QuizScreen";
import {FormScreen} from "./screens/FormScreen";

function App() {
    return (
        <div className="jwQuiz">
            <Switch>
                <Route path={'/'} exact render={() => <AgeScreen/>}/>
                <Route path={'/start'} render={() => <StartScreen/>}/>
                <Route path={'/quiz'} render={() => <QuizScreen/>}/>
                <Route path={'/form'} render={router => <FormScreen router={router}/>}/>
            </Switch>
        </div>
    );
}

export default App;
