import React from 'react';
import logo from './logo.svg';
import './App.css';
import {UserData} from "./lessen_01/UserData";


const dateUser = [
    {
        id: 1,
        name: 'Evgenii',
        lastName: 'Goncharov',
        age: 27,
        gender: "male"
    } ,
    {
        id: 2,
        name: 'Olga',
        lastName: 'Norman',
        age: 18,
        gender: "female"
    } ,
    {
        id: 3,
        name: 'Andrey',
        lastName: 'Ivanov',
        age: 22,
        gender: "male"
    } ,
    {
        id: 4,
        name: 'Kseniya',
        lastName: 'Proskudina',
        age: 18,
        gender: "female"

    } ,
    {
        id: 5,
        name: 'Ilia',
        lastName: 'Gordon',
        age: 55,
        gender: "male"
    } ,
    {
        id: 6,
        name: 'Kristina',
        lastName: 'Golikova',
        age: 58,
        gender: "female"
    } ,
    {
        id: 7,
        name: 'Galina',
        lastName: 'Korovkina',
        age: 32,
        gender: "female"
    } ,
    {
        id: 8,
        name: 'Tania',
        lastName: 'Artemova',
        age: 19,
        gender: "female"
    } ,
    {
        id: 9,
        name: 'Li',
        lastName: 'su',
        age: 15,
        gender: "male"
    } ,

]



function App() {
  return (
    <div className="App">
      <UserData nameTable={"The date about Users"}  dataUsers={dateUser}/>
    </div>
  );
}

export default App;
