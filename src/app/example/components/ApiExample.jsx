"use client";

import api from "@/lib/api";

export default function ApiExample() {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>🌐 API 사용법 가이드</h2>

      {/* API 설정 정보 */}
      <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#e8f5e8", borderRadius: "4px" }}>
        <h3>⚙️ API 설정 정보</h3>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          <li>
            <strong>Base URL:</strong> {process.env.NEXT_PUBLIC_API_URL || "http://localhost:5501"}
          </li>
          <li>
            <strong>Timeout:</strong> 10초
          </li>
          <li>
            <strong>Content-Type:</strong> application/json
          </li>
          <li>
            <strong>인증:</strong> Bearer 토큰 자동 추가 (localStorage의 "token" 키 사용)
          </li>
        </ul>
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
          <strong>📁 API 파일:</strong> <code>src/lib/api.js</code> - 이 파일에서 baseURL, headers, 인터셉터 등을 수정할
          수 있습니다.
        </p>
      </div>

      {/* API 사용법 설명 */}
      <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "4px" }}>
        <h3>📚 API 사용법</h3>

        <div style={{ marginBottom: "25px" }}>
          <h4>1️⃣ 공통 API 인스턴스 import</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`import api from "@/lib/api";`}
          </pre>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>2️⃣ 담당 영역에 맞는 API 호출</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`// 사용자 관련 API 호출 (사용자 담당자)
const getUsers = () => api.get("/users");
const getUser = (id) => api.get(\`/users/\${id}\`);
const createUser = (userData) => api.post("/users", userData);
const updateUser = (id, userData) => api.put(\`/users/\${id}\`, userData);
const deleteUser = (id) => api.delete(\`/users/\${id}\`);

// 상품 관련 API 호출 (상품 담당자)
const getProducts = () => api.get("/products");
const getProduct = (id) => api.get(\`/products/\${id}\`);
const createProduct = (productData) => api.post("/products", productData);
const updateProduct = (id, productData) => api.put(\`/products/\${id}\`, productData);
const deleteProduct = (id) => api.delete(\`/products/\${id}\`);

// 리뷰 관련 API 호출 (리뷰 담당자)
const getReviews = () => api.get("/reviews");
const getReview = (id) => api.get(\`/reviews/\${id}\`);
const createReview = (reviewData) => api.post("/reviews", reviewData);
const updateReview = (id, reviewData) => api.put(\`/reviews/\${id}\`, reviewData);
const deleteReview = (id) => api.delete(\`/reviews/\${id}\`);`}
          </pre>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>3️⃣ 컴포넌트에서 API 사용</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`// 컴포넌트 파일에서
import api from "@/lib/api";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 데이터 조회
  const loadUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("사용자 목록 조회 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  // 데이터 생성
  const handleCreateUser = async (userData) => {
    try {
      const response = await api.post("/users", userData);
      console.log("사용자 생성 성공:", response.data);
    } catch (error) {
      console.error("사용자 생성 실패:", error);
    }
  };

  // 데이터 수정
  const handleUpdateUser = async (id, userData) => {
    try {
      const response = await api.put(\`/users/\${id}\`, userData);
      console.log("사용자 수정 성공:", response.data);
    } catch (error) {
      console.error("사용자 수정 실패:", error);
    }
  };

  // 데이터 삭제
  const handleDeleteUser = async (id) => {
    try {
      await api.delete(\`/users/\${id}\`);
      console.log("사용자 삭제 성공");
    } catch (error) {
      console.error("사용자 삭제 실패:", error);
    }
  };

  return (
    <div>
      {/* 컴포넌트 내용 */}
    </div>
  );
}`}
          </pre>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>4️⃣ 에러 처리</h4>
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
  const response = await api.get("/users");
  // 성공 처리
  console.log(response.data);
} catch (error) {
  // 에러 처리
  console.error("API Error:", error);
  
  if (error.response) {
    // 서버 응답이 있는 경우
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
  } else if (error.request) {
    // 요청은 보냈지만 응답이 없는 경우
    console.error("서버에 연결할 수 없습니다.");
  } else {
    // 요청 설정에 문제가 있는 경우
    console.error("요청 설정 오류:", error.message);
  }
}`}
          </pre>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4>5️⃣ 고급 사용법</h4>
          <pre
            style={{
              fontSize: "12px",
              margin: "5px 0",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
            }}
          >
            {`// 쿼리 파라미터 사용
const response = await api.get("/users", { 
  params: { page: 1, limit: 10, search: "홍길동" } 
});

// 커스텀 헤더 추가
const response = await api.post("/upload", formData, {
  headers: { "Content-Type": "multipart/form-data" }
});

// 타임아웃 설정
const response = await api.get("/users", { 
  timeout: 5000 
});

// 응답 데이터 구조
const response = await api.get("/users");
console.log(response.data);     // 실제 데이터
console.log(response.status);   // HTTP 상태 코드
console.log(response.headers);  // 응답 헤더`}
          </pre>
        </div>
      </div>

      {/* 팀원별 가이드 */}
      <div
        style={{
          marginBottom: "30px",
          padding: "15px",
          backgroundColor: "#fff3cd",
          borderRadius: "4px",
          border: "1px solid #ffeaa7",
        }}
      >
        <h3>👥 팀원별 작업 가이드</h3>

        <div style={{ marginBottom: "15px" }}>
          <h4>📋 각자 담당 영역</h4>
          <ul style={{ margin: "0", paddingLeft: "20px" }}>
            <li>
              <strong>사용자 담당:</strong> <code>src/app/user/</code> - <code>api.get("/users")</code> 등 사용
            </li>
            <li>
              <strong>상품 담당:</strong> <code>src/app/product/</code> - <code>api.get("/products")</code> 등 사용
            </li>
            <li>
              <strong>리뷰 담당:</strong> <code>src/app/review/</code> - <code>api.get("/reviews")</code> 등 사용
            </li>
            <li>
              <strong>게시물 담당:</strong> <code>src/app/post/</code> - <code>api.get("/posts")</code> 등 사용
            </li>
            <li>
              <strong>채팅 담당:</strong> <code>src/app/chat/</code> - <code>api.get("/chats")</code> 등 사용
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h4>🔧 작업 순서</h4>
          <ol style={{ margin: "0", paddingLeft: "20px" }}>
            <li>
              담당 페이지에서 <code>import api from "@/lib/api";</code> 추가
            </li>
            <li>
              담당 영역에 맞는 엔드포인트로 API 호출 (예: <code>api.get("/users")</code>)
            </li>
            <li>컴포넌트에서 API 호출하여 데이터 처리</li>
            <li>에러 처리 추가</li>
          </ol>
        </div>
      </div>

      {/* 주의사항 */}
      <div style={{ padding: "15px", backgroundColor: "#f8d7da", borderRadius: "4px", border: "1px solid #f5c6cb" }}>
        <h3>⚠️ 주의사항</h3>
        <ul style={{ margin: "0", paddingLeft: "20px" }}>
          <li>
            모든 API 요청에는 <strong>try-catch</strong>로 에러 처리를 해주세요
          </li>
          <li>
            baseURL, headers 등 공통 설정은 <code>src/lib/api.js</code>에서만 수정하세요
          </li>
          <li>토큰이 필요한 API는 자동으로 Authorization 헤더가 추가됩니다</li>
          <li>
            각자 담당 영역의 엔드포인트만 사용하세요 (예: 사용자 담당자는 <code>/users</code> 관련만)
          </li>
          <li>공통 API 인스턴스를 사용하므로 모든 팀원이 동일한 설정을 공유합니다</li>
        </ul>
      </div>
    </div>
  );
}
