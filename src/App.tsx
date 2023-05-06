import React, {useState} from 'react';
import './App.css';
import {typeMainDate, UserData} from "./lessen_01/UserData";


const dateUser = [
    {
        id: 1,
        name: 'Evgenii',
        lastName: 'Goncharov',
        age: 27,
        gender: "male"
    },
    {
        id: 2,
        name: 'Olga',
        lastName: 'Norman',
        age: 18,
        gender: "female"
    },
    {
        id: 3,
        name: 'Andrey',
        lastName: 'Ivanov',
        age: 22,
        gender: "male"
    },
    {
        id: 4,
        name: 'Kseniya',
        lastName: 'Proskudina',
        age: 18,
        gender: "female"

    },
    {
        id: 5,
        name: 'Ilia',
        lastName: 'Gordon',
        age: 55,
        gender: "male"
    },
    {
        id: 6,
        name: 'Kristina',
        lastName: 'Golikova',
        age: 58,
        gender: "female"
    },
    {
        id: 7,
        name: 'Galina',
        lastName: 'Korovkina',
        age: 32,
        gender: "female"
    },
    {
        id: 8,
        name: 'Tania',
        lastName: 'Artemova',
        age: 19,
        gender: "female"
    },
    {
        id: 9,
        name: 'Li',
        lastName: 'su',
        age: 15,
        gender: "male"
    },
    {
        id: 10,
        name: 'Egor',
        lastName: 'Farmanin',
        age: 29,
        gender: "male"
    },
    {
        id: 11,
        name: 'Igor',
        lastName: 'Aristotel',
        age: 19,
        gender: "male"
    },
]


export type typeForGender = 'All' | 'male' | 'female';
export type typeOfAge = "All" | "Yong" | "Old"

function App() {
    // delete
    const [freshUsersCount, setDeletedUsersCount] = useState(dateUser);
    const deleteUsers = (id_num: number) => {
        let usersWasDelete = freshUsersCount.filter((el) => el.id !== id_num);
        setDeletedUsersCount(usersWasDelete);
    };

    // filter gender
    const [filterGender, setFilterGender] = useState<typeForGender>('All');
    const filteredUsersGender = (freshUsersCount: typeMainDate[], gender: typeForGender) => {
        if (gender === 'All') {
            return freshUsersCount;
        } else {
            return freshUsersCount.filter((el) => el.gender === gender);
        }
    };
    const newDataUsers = filteredUsersGender(freshUsersCount, filterGender);

// filter age
    let [filterAge, setFilterAge] = useState<typeOfAge>("All"); // creat useState
    const filterAgeUsers = (newDataUsers: typeMainDate[], age: typeOfAge) => {   // create function instruction
        if (age === "All") {                                                     // what will be filters
            return newDataUsers;
        } else if (age === "Yong") {
            return newDataUsers.filter((element) => element.age <= 27);
        } else if (age === "Old") {
            return newDataUsers.filter((element) => element.age > 27);
        } else {
            return newDataUsers;
        }
    }
    let NewDataAboutUsers = filterAgeUsers(newDataUsers, filterAge);    // create new value and
                                                                        // pass our new filter' array
    return (
        <div className="App">
            <UserData
                nameTable={'The data about Users'}
                dataUsers={NewDataAboutUsers}
                deleteUser={deleteUsers}
                filterUsersGender={setFilterGender}
                filterUsersAge={setFilterAge}             // push function UseState
            />
        </div>
    );
}

export default App;
