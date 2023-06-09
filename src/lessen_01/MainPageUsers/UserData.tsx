import React, {useState} from "react";
import s from './UserData.module.css'
import {typeForGender, typeOfAge} from "../../App";
import {FilterUser} from "../FilterGender/FilterUser";
import {BlockUsers} from "../BlockUsers/BlockUsers";
import {UserInformation} from "../UserInformation/UserInformation";


export type typeMainDate = {
    id: string,
    number_User: number,
    name: string,
    lastName: string,
    age: number,
    gender: string,
    isBlock:boolean,
}

export type UserDataType = {
    dataUsers: typeMainDate[]
    nameTable: string
    deleteUser: (id_user: string)=> void
    blockedUser:(id_user: string,isBlocked: boolean) => void
    unblockUser:(id_user: string, isBlocked: boolean) => void
    filterUsersGender: (gender: typeForGender)=> void
    filterUsersAge: (age: typeOfAge) => void
    nameFiltersGender: string
    nameFilterAge: string
}

export const UserData: React.FC<UserDataType> = (props) => {


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
                { props.dataUsers.map((element) => {
                    return (
                        <tr  key={element.id}>
                            <UserInformation element={element} />
                            <BlockUsers element={element}
                                        blockedUser={props.blockedUser}
                                        unblockUser={props.unblockUser}
                                        deleteUser={props.deleteUser}

                            />
                        </tr>
                    )
                })}
                </tbody>
            </table>
                <FilterUser filterUsersGender={props.filterUsersGender}
                            filterUsersAge={props.filterUsersAge}
                            nameFiltersGender={props.nameFiltersGender}
                            nameFilterAge={props.nameFilterAge}
                />
            </div>
        </div>

    )
}





