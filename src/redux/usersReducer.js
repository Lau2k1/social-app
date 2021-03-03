const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const  SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://sun9-1.userapi.com/impg/k5aua-t_ASpiBHD_ibkXwwEIklgK0uApZyx8Vg/XehCMw1wTbE.jpg?size=981x1080&quality=96&sign=6a40dbc25a85a424219277bd75198206&type=album',
            followed: false, fullName: 'Daniil', status: 'I work today', location: {country: 'Belarus', city: 'Gomel'}},
        {id: 2, photoUrl: 'https://sun9-60.userapi.com/impf/c858220/v858220467/19bbe5/I7emm-MDJxE.jpg?size=1440x2160&quality=96&sign=0eb626bf3243119bdbf415fb031d1e38&type=album',
            followed: false, fullName: 'Bogdan', status: 'I stay at home', location: {country: 'Belarus', city: 'Minsk'}},
        {id: 3, photoUrl: 'https://sun9-54.userapi.com/impg/LtlhsLb3bq6ol1ta9PY8kIXxAEtyA1EaQXDzrQ/ZO5LtUyGcdQ.jpg?size=451x604&quality=96&sign=c57406e57917ce120b9d9ebefceba7e3&type=album',
            followed: true, fullName: 'Vlad', status: 'Why want walk to mee?', location: {country: 'Belarus', city: 'Mozyr'}},
        {id: 4, photoUrl: 'https://sun9-6.userapi.com/impf/c855132/v855132255/b99d7/uGd5xcVJgNQ.jpg?size=1000x745&quality=96&sign=fb3363490a8deaf7fed385a1c16482be&type=album',
            followed: false, fullName: 'Alex', status: 'I learning golang', location: {country: 'Belarus', city: 'Gomel'}},
    ],
    newPostText: ''
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export  const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;