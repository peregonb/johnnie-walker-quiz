import './scss/App.scss';
import {Route} from 'react-router-dom';
import {AgeScreen} from "./screens/AgeScreen";
import {StartScreen} from "./screens/StartScreen";
import {QuizScreen} from "./screens/QuizScreen";
import {FormScreen} from "./screens/FormScreen";

function App() {
    return (
        <div className="jwQuiz">
            <Route path={process.env.PUBLIC_URL + '/'} exact render={() => <AgeScreen/>}/>
            <Route path={process.env.PUBLIC_URL + '/start'} render={() => <StartScreen/>}/>
            <Route path={process.env.PUBLIC_URL + '/quiz'} render={() => <QuizScreen/>}/>
            <Route path={process.env.PUBLIC_URL + '/form'} render={() => <FormScreen/>}/>
        </div>
    );
}

export default App;
