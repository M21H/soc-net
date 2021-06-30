import { instance } from "./api";

type getCaptchaResponseType = {
  url: string
}

const securityAPI = {
  getCaptchaUrl() {
    return instance.get<getCaptchaResponseType>('/security/get-captcha-url').then(({ data }) => data)
  },
}

export default securityAPI