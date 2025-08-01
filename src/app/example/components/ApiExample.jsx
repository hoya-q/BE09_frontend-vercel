"use client";

import { userAPI, postAPI } from "@/lib/api";
import { useState } from "react";

export default function ApiExample() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // API 데이터 로드
  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      // 사용자 목록 조회
      const usersResponse = await userAPI.getUsers();
      setUsers(usersResponse.data.slice(0, 3)); // 처음 3명만

      // 게시물 목록 조회
      const postsResponse = await postAPI.getPosts();
      setPosts(postsResponse.data.slice(0, 3)); // 처음 3개만
    } catch (err) {
      setError("데이터를 불러오는데 실패했습니다.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 새 사용자 생성 함수
  const handleCreateUser = async () => {
    const newUser = {
      name: "새 사용자",
      email: "newuser@example.com",
      phone: "010-1234-5678",
    };

    try {
      const response = await userAPI.createUser(newUser);
      setUsers([...users, response.data]);
    } catch (err) {
      setError("사용자 생성에 실패했습니다.");
    }
  };

  // 새 게시물 생성 함수
  const handleCreatePost = async () => {
    const newPost = {
      title: "새 게시물",
      body: "새 게시물 내용입니다.",
      userId: 1,
    };

    try {
      const response = await postAPI.createPost(newPost);
      setPosts([...posts, response.data]);
    } catch (err) {
      setError("게시물 생성에 실패했습니다.");
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>🌐 API 예제</h2>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={loadData}
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "로딩 중..." : "데이터 불러오기"}
        </button>

        <button
          onClick={handleCreateUser}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          새 사용자 생성
        </button>

        <button
          onClick={handleCreatePost}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffc107",
            color: "black",
            border: "none",
            borderRadius: "4px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        >
          새 게시물 생성
        </button>
      </div>

      {error && <div style={{ color: "red", marginBottom: "20px" }}>❌ {error}</div>}

      {/* 사용자 목록 */}
      <div style={{ marginBottom: "30px" }}>
        <h3>👥 사용자 목록</h3>
        {users.length > 0 ? (
          <div style={{ display: "grid", gap: "10px" }}>
            {users.map((user) => (
              <div
                key={user.id}
                style={{
                  padding: "15px",
                  border: "1px solid #eee",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>{user.name}</strong> ({user.email})
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>사용자 데이터가 없습니다. "데이터 불러오기" 버튼을 클릭하세요.</p>
        )}
      </div>

      {/* 게시물 목록 */}
      <div>
        <h3>📄 게시물 목록</h3>
        {posts.length > 0 ? (
          <div style={{ display: "grid", gap: "10px" }}>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  padding: "15px",
                  border: "1px solid #eee",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ flex: 1 }}>
                  <strong>{post.title}</strong>
                  <p style={{ margin: "5px 0 0 0", fontSize: "14px", color: "#666" }}>
                    {post.body.substring(0, 50)}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>게시물 데이터가 없습니다. "데이터 불러오기" 버튼을 클릭하세요.</p>
        )}
      </div>

      {/* API 사용법 설명 */}
      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "4px" }}>
        <h3>📚 API 사용법:</h3>
        <div style={{ marginBottom: "15px" }}>
          <h4>1. API 함수 import:</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`import { userAPI, postAPI } from "@/lib/api";`}
          </pre>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h4>2. 데이터 조회:</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`const response = await userAPI.getUsers();
const users = response.data;`}
          </pre>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h4>3. 데이터 생성:</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`const newUser = { name: "홍길동", email: "hong@example.com" };
const response = await userAPI.createUser(newUser);`}
          </pre>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h4>4. 에러 처리:</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`try {
  const response = await userAPI.getUsers();
  // 성공 처리
} catch (error) {
  // 에러 처리
  console.error("API Error:", error);
}`}
          </pre>
        </div>

        <p>
          <strong>📁 API 파일 위치:</strong> <code>src/lib/api.js</code>
        </p>
      </div>
    </div>
  );
}
