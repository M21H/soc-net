import { bindActionCreators } from "redux"
import { useAppDispatch } from "../redux/store"

const actions = {

}

export const useAppActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(actions, dispatch)
}