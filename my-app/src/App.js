import { Route, Switch, Redirect } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PagePoster from './pages/PagePoster';
import PageTiktoks from './pages/PageTiktoks';
import './App.css';

function App() {
  return (
    <div className='App' style={{paddingTop: '65px'}}>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/poster" component={PagePoster} />
        <Route exact path="/tiktoks" component={PageTiktoks} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
