import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryTitle = styled(Link)`
	text-align: center;
	font-size: 28px;
	cursor: pointer;

	.h2{
		margin-bottom: 50px;
		padding: 10px;
	}

	&:active {
		color: grey;
	}
`;

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
`;