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
        if(checkBlock){
            return  alert('The user is blocked');
        } else {
            return  alert('The user is not blocked');
        }
    }
    return (
        <>
            <td><button onClick={()=> checkedBlockUser(props.element.isBlock)}> check is block users</button></td>
            <td><button className={s.block} onClick={()=> props.blockedUser(props.element.id)}> block users</button></td>
            <td><button className={s.unblock} onClick={()=> props.unblockUser(props.element.id)}> unblock users</button></td>
            <td><button className={s.delete} onClick={()=> props.deleteUser(props.element.id) }> DELETE</button></td>
        </>
    )
}