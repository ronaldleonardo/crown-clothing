import { createContext, useState, useEffect } from 'react';

import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils'

// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(()=>{
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	// //Uploading the SHOP_DATA.js to firestore db 
	// useEffect(()=>{
	// 	addCollectionAndDocuments('categories', SHOP_DATA)
	// }, []);

	const value = {categoriesMap}
	return(
		<CategoriesContext.Provider value={value}> { children } </CategoriesContext.Provider>
	);
};