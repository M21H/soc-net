import { followAPI } from "../APIServices"
import { ResponseType, ResultCodeEnum } from "../APIServices/api"
import { actions, follow, unfollow } from "../redux/users_reducer"
jest.mock('../api')
const followAPIMock = followAPI as jest.Mocked<typeof followAPI>

const result: ResponseType = {
  data: {},
  messages: [],
  resultCode: ResultCodeEnum.Success
}

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  followAPIMock.follow.mockClear()
  followAPIMock.unfollow.mockClear()
})


followAPIMock.follow.mockReturnValue(Promise.resolve(result))
followAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

it.skip('success follow thunk ', async () => {
  const thunk = follow(1)

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setToggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setToggleFollowingInProgress(false, 1))
})

it.skip('success unfollow thunk ', async () => {
  const thunk = unfollow(1)

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setToggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.toggleFollowSuccess(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setToggleFollowingInProgress(false, 1))
})