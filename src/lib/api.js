import axios from "axios";

// axios 기본 설정
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 (토큰 추가 등)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 (에러 처리 등)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// 사용자 관련 API
export const userAPI = {
  // 사용자 목록 조회
  getUsers: () => api.get("/users"),

  // 특정 사용자 조회
  getUser: (id) => api.get(`/users/${id}`),

  // 사용자 생성
  createUser: (userData) => api.post("/users", userData),

  // 사용자 수정
  updateUser: (id, userData) => api.put(`/users/${id}`, userData),

  // 사용자 삭제
  deleteUser: (id) => api.delete(`/users/${id}`),
};

// 게시물 관련 API
export const postAPI = {
  // 게시물 목록 조회
  getPosts: () => api.get("/posts"),

  // 특정 게시물 조회
  getPost: (id) => api.get(`/posts/${id}`),

  // 게시물 생성
  createPost: (postData) => api.post("/posts", postData),

  // 게시물 수정
  updatePost: (id, postData) => api.put(`/posts/${id}`, postData),

  // 게시물 삭제
  deletePost: (id) => api.delete(`/posts/${id}`),
};

// 댓글 관련 API
export const commentAPI = {
  // 댓글 목록 조회
  getComments: (postId) => api.get(`/posts/${postId}/comments`),

  // 댓글 생성
  createComment: (commentData) => api.post("/comments", commentData),
};

export default api;
