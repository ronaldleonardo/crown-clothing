import { CartItemContainer, CartItemImage, ItemDetails, Name } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return(
		<CartItemContainer>
			<CartItemImage src={imageUrl} alt={`${name}`}/>
			<ItemDetails>
				<Name>{name}</Name>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;