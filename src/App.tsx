import React, {useState} from 'react';
import './App.css';
import {typeMainDate, UserData} from "./lessen_01/MainPageUsers/UserData";
import {v1} from "uuid";


const dateUser = [
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
        isBlock: false,
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

export type typeForGender = 'All' | 'male' | 'female';
export type typeOfAge = 'All' | 'Yong' | 'Old';

function App() {
    const [dateAboutUsers, setDeletedUsersCount] = useState<typeMainDate[]>(dateUser);
    const deleteUsers = (id_num: string) => {
        setDeletedUsersCount(dateAboutUsers.filter((el) => el.id !== id_num));
    };


// blockUsers
    const blockUsers = (id_userBlock: string,) => {
        let newDataStatusUsers = dateAboutUsers.map((el) =>
            (el.id === id_userBlock) ? {...el, isBlock: true} : el);
        setDeletedUsersCount(newDataStatusUsers)
    }
// unblockUsers
    const unlockUser = (id_user: string) => {
        let newDateStatusUsersUn = dateAboutUsers.map((el) =>
            (el.id === id_user) ? {...el, isBlock: false} : el);
        setDeletedUsersCount(newDateStatusUsersUn)
    }


    // filter gender
    const [filterGender, setFilterGender] = useState<typeForGender>('All');
    const filteredUsersGender = (users: typeMainDate[], gender: typeForGender) => {
        return gender === "All" ? users : users.filter((el) => el.gender === gender)
    }
    const newDataUsers = filteredUsersGender(dateAboutUsers, filterGender);

    // filter age
    let [filterAge, setFilterAge] = useState<typeOfAge>('All');
    const filterAgeUsers = (users: typeMainDate[], age: typeOfAge) => {
        if (age === 'All') {
            return users;
        } else if (age === 'Yong') {
            return users.filter((element) => element.age <= 27);
        } else if (age === 'Old') {
            return users.filter((element) => element.age > 27);
        } else {
            return users;
        }
    };
    let newDataAboutUsers = filterAgeUsers(newDataUsers, filterAge);

    return (
        <div className="App">
            <UserData
                nameTable={'The data about Users'}
                dataUsers={newDataAboutUsers}
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

export default App;
