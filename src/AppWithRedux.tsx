import React, {useState} from 'react';
import './App.css';
import {typeMainDate, UserData} from "./lessen_01/MainPageUsers/UserData";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./lessen_01/Store/store";
import {blockedUserAC, removeUserAC, unBlockUserAC} from "./lessen_01/Store/ReducerForUser";
import {setGenderFilter} from "./lessen_01/Store/ReducerFiltredUsers";
import {setAgeFilter} from "./lessen_01/Store/ReducerFilterAge";



export type typeForGender = 'All' | 'male' | 'female';
export type typeOfAge = 'All' | 'Yong' | 'Old';

function AppWithRedux() {
    const users = useSelector<AppRootStateType, Array<typeMainDate>>(state => state.user)
    const filter = useSelector<AppRootStateType, typeForGender>((state) => state.filterSex.gender);
    const filterAge = useSelector<AppRootStateType, typeOfAge>((state) => state.filterAge.age);

    const dispatch = useDispatch();


    const deleteUsers = (id_user: string) => {
        dispatch(removeUserAC(id_user))
    };

// blockUsers
    const blockUsers = (id_user: string,isBlocked: boolean ) => {
        dispatch(blockedUserAC(id_user, isBlocked))
    }
// unblockUsers
    const unlockUser = (id_user: string, isBlocked: boolean) => {
        dispatch(unBlockUserAC(id_user, isBlocked))
    }


    const setFilterGender = (gender: typeForGender) => {
        dispatch(setGenderFilter(gender));
    };

    // let filteredUsers = users.filter((user) => {
    //     if (filter === "All") {
    //         return true;
    //     } else {
    //         return user.gender === filter;
    //     }
    // });

    const setFilterAge = (age: typeOfAge) => {
        dispatch(setAgeFilter(age));
    };
    const filterUsers = (users: Array<typeMainDate>, gender: typeForGender, age: typeOfAge) => {
        return users.filter((user) => {
            const genderFilter = gender === "All" || user.gender === gender;
            const ageFilter =
                age === "All" ||
                (age === "Yong" && user.age <= 27) ||
                (age === "Old" && user.age > 27);
            return genderFilter && ageFilter;
        });
    };
    const filteredUsers = filterUsers(users, filter, filterAge);
    // const filterAgeUsers = (users: Array<typeMainDate> , age: typeOfAge)  => {
    //     if (age === 'All') {
    //         return users;
    //     } else if (age === 'Yong') {
    //         return users.filter((element) => element.age <= 27);
    //     } else if (age === 'Old') {
    //         return users.filter((element) => element.age > 27);
    //     } else {
    //         return users;
    //     }
    // };
    //


    return (

        <div className="App">
            <UserData
                nameTable={'The data about Users'}
                dataUsers={filteredUsers}
                deleteUser={deleteUsers}
                filterUsersGender={setFilterGender}
                filterUsersAge={setFilterAge}
                nameFiltersGender={"Filter Gender"}
                nameFilterAge={"Filter Age"}
                blockedUser={blockUsers}
                unblockUser={unlockUser}
            />
        </div>
    );
}

export default AppWithRedux;
