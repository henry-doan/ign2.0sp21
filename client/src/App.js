import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Games from './components/games/Games';
import GameShow from './components/games/GameShow';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/auth/Profile';
import About from './components/shared/About'
import GameForm from './components/games/GameForm'
import ReviewShow from './components/reviews/ReviewShow'
import Reviews from './components/reviews/Review'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/games' component={Games} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/games' component={Games}/>
          <Route exact path='/reviews' component={Reviews}/>
          <Route exact path='/games/:id' component={GameShow}/>
          <Route exact path='/reviews/:id' component={ReviewShow}/>
          <Route exact path='/gameform' component={GameForm}/>
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)
export default App;