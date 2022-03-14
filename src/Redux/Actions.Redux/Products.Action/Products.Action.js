
import { FETCHING_PRODUCTS, FETCHING_SPESEFIC_PRODOCT, FETCHING_CATEGORIES,FETCHING_PRODUCTS_LENGTH, FETCHING_SUBCATEGORIES } from '../../Type.actions';
import { Products } from '../../../Api/Products.api';
import { Product } from '../../../Api/Product.api';
import { category } from '../../../Api/Category.api';
import { subCategory } from '../../../Api/subCategory.api';
export const fetchProductsRequest = (BASE_URL,pageInfo) => {
    return async (dispatch, getState) => {
        let products = [...getState().products.products];
        const responses = await Products.Get(BASE_URL,pageInfo).then(res => {
            return res
        }
        )
        products = responses;
       await dispatch({ type: FETCHING_PRODUCTS, payload: products });
        // products= Get(BASE_URL);
    };
}
export const fetchProductsLengthRequest = (BASE_URL,pageInfo) => {
    return async (dispatch, getState) => {
        let products = getState().products.length;
        const responses = await Products.getLength(BASE_URL,pageInfo).then(res => {
            return res;
        }
        )
        products = responses;
       await dispatch({ type: FETCHING_PRODUCTS_LENGTH, payload: products });
        // products= Get(BASE_URL);
    };
}
export const fetchProductRequest = (ID) => {
    return async (dispatch, getState) => {
        let product = {...getState().product};
        const response = await Product.Get(ID).then(res => {
            return res
        }
        )
        product = response;
        dispatch({ type: FETCHING_SPESEFIC_PRODOCT, payload: product });
        // products= Get(BASE_URL);
    };
}
export const fetchCategoryRequest = (BASE_URL) => {
    return async (dispatch, getState) => {
        let Category = getState().products.category;
        const response = await category.get(BASE_URL).then(res => {
            return res
        }
        )
        Category = response;
        dispatch({ type: FETCHING_CATEGORIES, payload: Category });
        // products= Get(BASE_URL);
    };
}
export const fetchsubCategoryRequest = (BASE_URL) => {
    return async (dispatch, getState) => {
        let SubCategory = getState().products.subCategory;
        const response = await subCategory.get(BASE_URL).then(res => {
            return res
        }
        )
        SubCategory = response;
        dispatch({ type: FETCHING_SUBCATEGORIES, payload: SubCategory });
        // products= Get(BASE_URL);
    };
}
// export const SetPerson = (evt) => {
//     return async (dispatch) => {
//         const person = evt;
//         await dispatch({ type: "SET_PERSON", payload: person })
//     }
// }
