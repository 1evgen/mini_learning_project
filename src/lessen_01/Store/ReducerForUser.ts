import {typeMainDate} from "../MainPageUsers/UserData";
import {v1} from "uuid";
import {typeForGender} from "../../AppWithRedux";

export type removeActionType = {
    type: 'REMOVE-USER'
    userID: string
}

export type filterUserGenderType = {
    type: "FILTER-USER-GENDER";
    gender: typeForGender;
};

export type filterUserAgeLessType = {
    type: 'FILTER-USER-AGE-LESS-27'
    age: number
}

export type filterUserAgeMore27Type = {
    type: 'FILTER-USER-AGE-MORE-27'
    age: number
}

export type blockedUserType = {
    type: 'BLOCK-USER'
    userID: string
    isBlock: boolean
}

export type unBlockUserType = {
    type: 'UNBLOCK-USER'
    userID: string
    isBlock: boolean
}



type ActionType = removeActionType | filterUserGenderType |
    filterUserAgeLessType | filterUserAgeMore27Type | blockedUserType | unBlockUserType


 const dateUser: Array<typeMainDate> = [
    {
        id: v1(),
        number_User: 1,
        name: 'Evgenii',
        lastName: 'Goncharov',
        age: 27,
        gender: "male",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 2,
        name: 'Olga',
        lastName: 'Norman',
        age: 18,
        gender: "female",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 3,
        name: 'Andrey',
        lastName: 'Ivanov',
        age: 22,
        gender: "male",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 4,
        name: 'Kseniya',
        lastName: 'Proskudina',
        age: 18,
        gender: "female",
        isBlock: false,

    },
    {
        id: v1(),
        number_User: 5,
        name: 'Ilia',
        lastName: 'Gordon',
        age: 55,
        gender: "male",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 6,
        name: 'Kristina',
        lastName: 'Golikova',
        age: 58,
        gender: "female",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 7,
        name: 'Galina',
        lastName: 'Korovkina',
        age: 32,
        gender: "female",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 8,
        name: 'Tania',
        lastName: 'Artemova',
        age: 19,
        gender: "female",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 9,
        name: 'Li',
        lastName: 'Su',
        age: 15,
        gender: "male",
        isBlock: false,
    },
    {
        id: v1(),
        number_User: 10,
        name: 'Egor',
        lastName: 'Farmanin',
        age: 29,
        gender: "male",
        isBlock: true,
    },
    {
        id: v1(),
        number_User: 11,
        name: 'Igor',
        lastName: 'Aristotel',
        age: 19,
        gender: "male",
        isBlock: false,
    },
]
let initialState = dateUser;


export const userReducer = (state = initialState,action: ActionType):Array<typeMainDate> => {
    switch (action.type){
         case 'REMOVE-USER':
                return state.filter((el)=> el.id !== action.userID)
         case "BLOCK-USER" :
                return state.map((el)=> el.id === action.userID? {...el, isBlock: action.isBlock }: el)
        case 'UNBLOCK-USER':
                return state.map((el)=> el.id === action.userID ? {...el, isBlock: action.isBlock}: el)

        default: return  state


    }
}

export const removeUserAC = (userID: string): removeActionType => {
    return {type:'REMOVE-USER', userID}
}

// export const filterUserGenderAC = (gender:typeForGender): filterUserGenderType => {
//     return {type: "FILTER-USER-GENDER", gender}
// }
//
// export const filterUserAgeLess27AC = (age: number): filterUserAgeLessType => {
//     return {type: "FILTER-USER-AGE-LESS-27", age}
// }
//
// export const filterUserAgeMore27AC = (age: number): filterUserAgeMore27Type => {
//     return {type: "FILTER-USER-AGE-MORE-27", age}
// }

export const blockedUserAC = (userID: string, isBlock: boolean): blockedUserType => {
    return {type: "BLOCK-USER", userID, isBlock}
}

export const unBlockUserAC = (userID: string, isBlock: boolean): unBlockUserType => {
    return {type: "UNBLOCK-USER", userID, isBlock}
}

