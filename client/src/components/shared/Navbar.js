import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { SecMenu } from './sharedComponets'
const Navbar = ({ location, user, handleLogout, history }) => {
  const rightNavItem = () => {
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/profile'>
            <Menu.Item
              name='profile'
              id='profile'
              active={location.pathname === '/profile'}
            />
          </Link>
          
          <Menu.Item position= 'right'
            name='logout'
            onClick={() => handleLogout(history)}

          />
        </Menu.Menu>
      )
      
    } else {
      return (

        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <SecMenu>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
        <Link to='/games'>
          <Menu.Item
            name='games'
            id='games'
            active={location.pathname === '/games'}
          />
          </Link>
          <Link to='/GameForm'>
          <Menu.Item
            name='Add a New Game'
            id='GameForm'
            active={location.pathname === '/GameForm'}
          />
          </Link>
        <Link to='/about'>
          <Menu.Item
            name='about'
            id='about'
            active={location.pathname === '/about'}
          />
        </Link>
        { rightNavItem() }
      </SecMenu>
    </>
  )
}
const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)
export default withRouter(ConnectedNavbar);