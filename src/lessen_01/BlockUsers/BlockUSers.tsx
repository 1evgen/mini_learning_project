import s from "../MainPageUsers/UserData.module.css";
import React from "react";
import {typeMainDate} from "../MainPageUsers/UserData";

 export type BlockUsersType = {
    blockedUser:(id_userBlock: string) => void
    unblockUser:(id_user: string) => void
    deleteUser: (id_num: string)=> void
    element: typeMainDate
}

export const BlockUsers = (props:BlockUsersType) => {

    const checkedBlockUser = (checkBlock: boolean) => {
        (checkBlock) ? alert('The user is blocked'):alert('The user is not blocked')
    }
    const checkedBlockUsersHandler = ()=> {checkedBlockUser(props.element.isBlock)}
    const blockUsersHandler = () => {props.blockedUser(props.element.id)}
    const unblockUsersHandler = () => {props.unblockUser(props.element.id)}
    const deleteUsersHandler =() => {props.deleteUser(props.element.id)}

    return (
        <>
            <td><button onClick={checkedBlockUsersHandler}> check is block users</button></td>
            <td><button className={s.block} onClick={blockUsersHandler}> block users</button></td>
            <td><button className={s.unblock} onClick={unblockUsersHandler}> unblock users</button></td>
            <td><button className={s.delete} onClick={deleteUsersHandler}> DELETE</button></td>
        </>
    )
}