import {v1} from "uuid";
import {typeMainDate} from "../MainPageUsers/UserData";
import {
    blockedUserAC,
    removeUserAC, unBlockUserAC,
    userReducer
} from "../Store/ReducerForUser";

let dateUser: Array<typeMainDate>
    beforeEach(()=> {
            dateUser = [
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
            isBlock: true,
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
})

test('test remove user', ()=> {
    let userID = dateUser[0].id
    let result = userReducer(dateUser, removeUserAC(userID))

    expect(result[0].name).toBe('Olga')
    expect(result.length).toBe(10)

})

// test('test filter users of gender ', ()=> {
//     let result = userReducer(dateUser, filterUserGenderAC('male'))
//
//     expect(result.length).toBe(6)
//     expect(result[0].name).toBe('Evgenii')
//     expect(result[result.length-1].gender).toBe('male')
//     expect(result[1].gender).not.toBe('female')
//
// })
//
// test('test filter user of age less 27', ()=> {
//     let result = userReducer(dateUser, filterUserAgeLess27AC(27))
//     let filtredUser = dateUser.filter((el)=> el.age <= 27)
//     let maxAgeUser = dateUser.find((el)=> Math.max(el.age))
//
//     expect(result.length).toEqual(filtredUser.length)
//     expect(result.every((el) => el.age <= 27)).toBe(true);
//     expect(maxAgeUser?.age).toBe(27)
// })
//
//
// test('test filter user of age more 27', ()=> {
//     let result =  userReducer(dateUser, filterUserAgeMore27AC(27))
//     let filteredUser = dateUser.filter((el)=> el.age > 27)
//     let nameUserOld = result.find((el)=> Math.max(el.age))
//
//      expect(filteredUser.length).toBe(4)
//      expect(result.every((el)=> el.age > 27)).toBe(true)
//      expect(nameUserOld?.lastName).toBe('Gordon')
//  })

test('test block status users', ()=> {
    let userID = dateUser[1].id
    let result = userReducer(dateUser, blockedUserAC(userID, true))

    expect(result[1].name).toBe('Olga')
    expect(dateUser[1].isBlock).toBe(false)
    expect(result[1].isBlock).toBe(true)
})

test('test unblock user', ()=> {
    let userID = dateUser[9].id
    let result =  userReducer(dateUser, unBlockUserAC(userID, false))

    expect(result[9].name).toBe('Egor')
    expect(dateUser[9].isBlock).toBe(true)
    expect(result[9].isBlock).toBe(false)
})