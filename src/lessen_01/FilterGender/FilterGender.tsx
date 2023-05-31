import React from "react";
import s from './FilterGender.module.css'
import {typeForGender, typeOfAge} from "../../App";

type FilterGenderProps = {
    filterUsersGender: (gender: typeForGender) => void;
    filterUsersAge: (age: typeOfAge) => void;
    nameFiltersGender: string
    nameFilterAge: string
};


export const FilterGender: React.FC<FilterGenderProps> = ({
                                                              filterUsersGender,
                                                              filterUsersAge,
                                                              nameFiltersGender,
                                                              nameFilterAge
                                                          }) => {
    const handlerFunctionFilter = (gender: typeForGender) => {
        filterUsersGender(gender);
    };
    const handlerFilterAge = (age: typeOfAge) => {
        filterUsersAge(age);
    };

    return (
        <div className={s.filters}>

            <div className={s.gender}>
                <div><h5>{nameFiltersGender}</h5></div>
                <span className={s.buttonOne}>
          <button onClick={() => handlerFunctionFilter("All")}>All</button>
        </span>
                <span className={s.buttonTwo}>
          <button onClick={() => handlerFunctionFilter("male")}>Man</button>
        </span>
                <span className={s.buttonThree}>
          <button onClick={() => handlerFunctionFilter("female")}>Woman</button>
        </span>
            </div>
            <div className={s.age}>
                <h5>{nameFilterAge}</h5>
        <span className={s.buttonAll}>
          <button onClick={() => handlerFilterAge("All")}>All</button>
        </span>
                <span className={s.buttonTwo}>
          <button onClick={() => handlerFilterAge("Yong")}>Age less 27</button>
        </span>
                <span className={s.buttonThree}>
          <button onClick={() => handlerFilterAge("Old")}>Age more 27</button>
        </span>
            </div>
        </div>
    );
};

