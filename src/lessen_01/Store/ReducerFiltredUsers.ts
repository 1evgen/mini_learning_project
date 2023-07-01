import {typeForGender} from "../../AppWithRedux";


export interface FilterState {
    gender: typeForGender;
}

const initialState: FilterState = {
    gender: 'All',
};

type FilterActionTypes = SetGenderFilterAction;

interface SetGenderFilterAction {
    type: 'SET_GENDER_FILTER';
    payload: typeForGender;
}

export const setGenderFilter = (gender: typeForGender): SetGenderFilterAction => ({
    type: 'SET_GENDER_FILTER',
    payload: gender,
});



export const filterReducer = (state = initialState, action: FilterActionTypes): FilterState => {
    switch (action.type) {
        case 'SET_GENDER_FILTER':
            return {
                ...state,
                gender: action.payload,
            };

        default:
            return state;
    }
};

