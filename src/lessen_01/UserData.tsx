import React from "react";
import s from './UserData.module.css'
import {typeForGender, typeOfAge} from "../App";

export type typeMainDate = {
    id: string,
    number_User: number,
    name: string,
    lastName: string,
    age: number,
    gender: string,
    isBlock:boolean,
}

type UserDataType = {
    dataUsers: typeMainDate[]
    nameTable: string
    deleteUser: (id_num: string)=> void
    filterUsersGender: (gender:typeForGender) => void
    filterUsersAge:(age:typeOfAge) => void
    blockedUser:(id_userBlock: string) => void
    unblockUser:(id_user: string) => void
}

export const UserData: React.FC<UserDataType> = (props) => {
     const handlerFunctionFilter = (gender: typeForGender) => {
         props.filterUsersGender(gender)
     }
     const handlerFilterAge = (age: typeOfAge) => {
         props.filterUsersAge(age);
    }

    const checkedBlockUser = (checkBlock: boolean) => {
        if(checkBlock){
            return  alert('The user is blocked');
        } else {
            return  alert('The user is not blocked');
        }
    }

    return (
        <div className={s.content}>
            <div className={s.wrapper}>
            <div>
                <h2>{props.nameTable}</h2>
            </div>

            <table className={s.table}>
                <thead className={s.thead}>
                <tr >
                    <th>Numbers users</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Checked block users</th>
                    <th>block</th>
                    <th>unblock</th>
                    <th>DELETE USERS</th>
                </tr>
                </thead>
                <tbody className={s.tbody}>
                {props.dataUsers.map((element) => {
                    return (
                        <tr  key={element.id}>
                            <td>{element.number_User} </td>
                            <td>{element.name}</td>
                            <td>{element.lastName}</td>
                            <td>{element.age}</td>
                            <td>{element.gender}</td>
                            <td><button onClick={()=> checkedBlockUser(element.isBlock)} >check is block users</button></td>
                            <td><button className={s.block} onClick={()=> props.blockedUser(element.id)} >block users</button></td>
                            <td><button className={s.unblock} onClick={()=> props.unblockUser(element.id)}>unblock users</button></td>
                            <td><button className={s.delete} onClick={()=> props.deleteUser(element.id) }>DELETE</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
                <div className={s.filters}>
                <div className={s.gender}>
                  <span className={s.buttonOne}><button onClick={()=> handlerFunctionFilter("All")}>All</button></span>
                    <span className={s.buttonTwo}><button onClick={()=> handlerFunctionFilter("male")} >Man</button></span>
                    <span className={s.buttonThree}><button onClick={()=> handlerFunctionFilter("female")} >Woman</button></span>
                </div>
                    <div className={s.age}>
                        <span className={s.buttonAll}><button onClick={()=> handlerFilterAge("All")}>All</button></span>
                         <span className={s.buttonTwo}><button onClick={()=> handlerFilterAge("Yong")}>Age less 27</button></span>
                        <span className={s.buttonThree} ><button onClick={()=> handlerFilterAge("Old")}>Age more 27</button></span>
                    </div>
                </div>
        </div>
        </div>
    )
}