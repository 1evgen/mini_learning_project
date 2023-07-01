import {combineReducers, legacy_createStore} from "redux";
import {userReducer} from "./ReducerForUser";
import {filterReducer} from "./ReducerFiltredUsers";
import {ageFilterReducer} from "./ReducerFilterAge";


export const rootReducer = combineReducers({
    user: userReducer,
    filterSex: filterReducer,
    filterAge: ageFilterReducer
})

export  const store = legacy_createStore(rootReducer)


export  type AppRootStateType = ReturnType<typeof  rootReducer>
