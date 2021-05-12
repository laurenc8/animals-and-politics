import { Route, Switch, Redirect } from 'react-router-dom';
import PageHome from './pages/PageHome';
import PagePoster from './pages/PagePoster';
import PageTiktoks from './pages/PageTiktoks';
import PageVideo from './pages/PageVideo';
import NavBar from './components/NavBar';
import './App.css';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/poster" component={PagePoster} />
        <Route exact path="/tiktoks" component={PageTiktoks} />
        <Route exact path="/video" component={PageVideo} />
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
