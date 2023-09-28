import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-Key": "5cebd641-898b-4e00-9878-7be19f5d7db2",
  },
});

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  setFollow(id: number) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
  setUnfollow(id: number) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post(`/auth/login`, { email, password, rememberMe, captcha }).then((data) => {
      return data.data;
    });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const profileAPI = {
  setPhoto(file: File) {
    let formData = new FormData();
    formData.append("image", file);
    return instance.put(`/profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  getProfile(userId: number) {
    return instance.get(`profile/` + +userId);
  },
  getProfileStatus(userId: number) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status });
  },
};

// export const followAPI = {
//     setFollow(id: number) {
//         return instance.post(`follow/${id}`)
//             .then(response => response.data)
//     },
//     setUnfollow(id: number) {
//         return instance.delete(`follow/${id}`)
//             .then(response => response.data)
//     }
// }
