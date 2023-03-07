import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    setFollow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    setUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`profile/` + +id)
    }
}

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

