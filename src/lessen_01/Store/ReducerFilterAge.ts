// ageFilterReducer.ts

import {typeOfAge} from "../../AppWithRedux";

export interface AgeFilterState {
    age: typeOfAge;
}

const initialAgeFilterState: AgeFilterState = {
    age: 'All',
};

export const ageFilterReducer = (
    state = initialAgeFilterState,
    action: AgeFilterActionTypes
): AgeFilterState => {
    switch (action.type) {
        case 'SET_AGE_FILTER':
            return {
                ...state,
                age: action.payload,
            };
        default:
            return state;
    }
};

type AgeFilterActionTypes = SetAgeFilterAction;

interface SetAgeFilterAction {
    type: 'SET_AGE_FILTER';
    payload: typeOfAge;
}

export const setAgeFilter = (age: typeOfAge): SetAgeFilterAction => ({
    type: 'SET_AGE_FILTER',
    payload: age,
});