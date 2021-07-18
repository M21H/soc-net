import usersReducer, { actions, InitialState } from "../redux/users_reducer"

let state: InitialState

beforeEach(() => state = {
  users: [
    { id: 0, name: 'Name0', followed: false, photos: { large: null, small: null }, status: 'status0' },
    { id: 1, name: 'Name1', followed: false, photos: { large: null, small: null }, status: 'status1' },
    { id: 2, name: 'Name2', followed: true, photos: { large: null, small: null }, status: 'status2' },
    { id: 3, name: 'Name3', followed: true, photos: { large: null, small: null }, status: 'status3' },
  ],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  toggleFollowingInProgress: [], // array of users id
  filter: {
    term: '',
    friend: null as null | boolean,
  },
})

it('follow success', () => {
  const newState = usersReducer(state, actions.toggleFollowSuccess(1))
  expect(newState.users[1].followed).toBeTruthy()

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[2].followed).toBeTruthy()

})

it('unfollow success', () => {
  const newState = usersReducer(state, actions.toggleFollowSuccess(2))
  expect(newState.users[2].followed).toBeFalsy()

  expect(newState.users[1].followed).toBeFalsy()
  expect(newState.users[3].followed).toBeTruthy()
})