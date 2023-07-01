import React from "react";
import {typeMainDate} from "../MainPageUsers/UserData";

type userInformationType = {
    element: typeMainDate
}

export const UserInformation = (props: userInformationType) => {
    return (
        <>
            <td>{props.element.number_User} </td>
            <td>{props.element.name}</td>
            <td>{props.element.lastName}</td>
            <td>{props.element.age}</td>
            <td>{props.element.gender}</td>
        </>
    )
}
