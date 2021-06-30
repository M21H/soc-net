import { instance, ResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./api"

type MeResponseDataType = {
  id: number
  email: string
  login: string
}

type LoginResponseDataType = {
  userId: number
}

const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
    return instance.post<ResponseType<LoginResponseDataType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(`auth/login`, { email, password, rememberMe, captcha })
      .then(res => res.data)
  },
  logout() {
    return instance.delete<ResponseType>(`auth/login`).then(({ data }) => data)
  },
}

export default authAPI