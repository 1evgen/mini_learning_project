import React from "react";
import s from './UserData.module.css'

type typeMainDate = {
    id: number,
    name: string,
    lastName: string,
    age: number
    gender: string
}

type UserDataType = {
    dataUsers: typeMainDate[]
    nameTable: string
    deleteUser: (id_num: number)=> void
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
                    <th>ID users</th>
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
                            <td>{element.id} </td>
                            <td>{element.name}</td>
                            <td>{element.lastName}</td>
                            <td>{element.age}</td>
                            <td>{element.gender}</td>
                            <td><button>check is block users</button></td>
                            <td><button className={s.block}>block users</button></td>
                            <td><button className={s.unblock}>unblock users</button></td>
                            <td><button className={s.delete} onClick={()=> props.deleteUser(element.id) }>DELETE</button></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
                <div className={s.filters}>
                <div className={s.gender}>
                  <span><button>All</button></span>
                    <span><button>Man</button></span>
                    <span><button>Woman</button></span>
                </div>
                <div className={s.age}>
                    <span><button>Yong</button></span>
                    <span><button>Old</button></span>
                </div>
                </div>
        </div>

        </div>
    )
}