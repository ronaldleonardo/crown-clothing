import { Fragment, useContext} from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';


import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

  return(
    <Fragment>
    	<NavigationContainer>

				<LogoContainer to ='/'>
						<CrownLogo className = 'logo' />
				</LogoContainer>
					


				<NavLinks>
					{ currentUser && <NavLink as='span'>{`Hi! ${currentUser.email}`}</NavLink>}

					<NavLink to ='/shop'>
						SHOP
					</NavLink>

					{ currentUser ? (
						<NavLink as='span' onClick={signOutUser}>SIGN OUT </NavLink>
						) : (
							<NavLink to ='/auth'>SIGN IN</NavLink>
						)
					}

					<CartIcon/>
	    	</NavLinks>
				{ isCartOpen &&	 <CartDropdown />} 
						{/*if this total thing is true (isCartOpen is true and CartIcon (all component == true by default) i will return the last thing you gave me (CartDropdown))*/}	  
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );

};

export default Navigation;