const {User} = require('../models')
const bcrypt = require('bcrypt')

const userData = [
    {
        user_id:1,
        first_name: 'erick',
        last_name: 'avalos',
        experience: 'none',
        username: 'erick',
        email: 'ava@test.com',
        //test123
        password: '$2b$10$zG5vXWkbVG7sk1CNFFaY9e0yTiUAIR.KJonPysmAtm2FO/H.dS0ny',
    },
    {
        user_id:2,
        first_name: 'Mandy',
        last_name: 'Evil',
        experience: '2 years',
        username: 'EvilMandy667',
        email: 'EvilMandy@test.com',
        password: 'mandyisevil@2',
    },
    {
        user_id:3,
        first_name: 'Neal',
        last_name: 'Befourth',
        experience: '3 years',
        username: 'TheKing',
        email: 'IamTheKing@test.com',
        password: 'hailtheking@3',
    },
    {
        user_id:4,
        first_name: 'Jason',
        last_name: 'Todd',
        experience: '5 years',
        username: 'TheRealRobin',
        email: 'ILoveMyDaddyBats@test.com',
        password: 'IamRobin@4',
    },
    {
        user_id:5,
        first_name: 'Tom',
        last_name: 'Orrow',
        experience: '9 years',
        username: 'Today',
        email: 'Yesterday@test.com',
        password: 'timeline@5',
    },
    {
        user_id:6,
        first_name: 'Becca',
        last_name: 'Queen',
        experience: '10 years',
        username: 'QueenB',
        email: 'QueenBee1@test.com',
        password: 'Beccais1',
    },
    {
        user_id:7,
        first_name: 'Peter',
        last_name: 'Parker',
        experience: '12 years',
        username: 'Chefspidy',
        email: 'NotSoSpiderMan@test.com',
        password: 'MJay@1',
    },
    {
        user_id:8,
        first_name: 'Zac',
        last_name: 'Bac',
        experience: '14 years',
        username: 'ZacBacMacTacPac',
        email: 'MyNameIsZac@test.com',
        password: 'ZacTheName@1',
    },
    {
        user_id:9,
        first_name: 'Mario',
        last_name: 'Lopez',
        experience: '15 years',
        username: 'A.C.slater',
        email: 'SavedByTheBell@test.com',
        password: 'IloveKelly',
    },  
    {
        user_id:10,
        first_name: 'Tony',
        last_name: 'bologna',
        experience: '16 years',
        username: 'SandWichKing',
        email: 'Forgetaboutit@test.com',
        password: 'WhoGetsTurkey@7',
    },
    {
        user_id:11,
        first_name: 'Red',
        last_name: 'X',
        experience: 'X years',
        username: 'AmIRobin?',
        email: 'SoMuchCoolerThanRobin@test.com',
        password: 'XXXXXXXXX',
    },
    {
        user_id:12,
        first_name: 'Tom',
        last_name: 'Jerry',
        experience: '20 years',
        username: 'Tom&JerryFan',
        email: 'SpikeTheDog@test.com',
        password: 'MouseCatDog@7',
    },
    {
        user_id:13,
        first_name: 'Monday',
        last_name: 'Addams',
        experience: '20 years',
        username: 'TheAddamNoOneLikes',
        email: 'StillPartOfTheFam@test.com',
        password: 'Imatter2',
    },
    
]


const seedsUser = () => User.bulkCreate(userData)

module.exports = seedsUser