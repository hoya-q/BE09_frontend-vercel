"use client";

import { formatDateToString, formatStringToDate, numberWithCommas } from "@/utils/format";
import { useState, useEffect } from "react";

export default function UtilsExample() {
  const [dateString, setDateString] = useState("20250801");
  const [convertedDate, setConvertedDate] = useState("");
  const [currentDateStr, setCurrentDateStr] = useState("");
  const [rawNumber, setRawNumber] = useState("1234567");
  const [formattedNumber, setFormattedNumber] = useState("");

  // 공통 함수 예제
  useEffect(() => {
    // 문자열 → Date → 화면 출력용 문자열로 변환
    const dateObj = formatStringToDate(dateString);
    setConvertedDate(dateObj.toDateString());

    // 현재 날짜 → 문자열
    const nowStr = formatDateToString(new Date());
    setCurrentDateStr(nowStr);

    // 숫자 문자열 → 콤마 포맷팅
    setFormattedNumber(numberWithCommas(rawNumber));
  }, [dateString, rawNumber]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>📝 공통 함수 예제</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>✅ formatStringToDate</h3>
        <p>
          입력된 문자열: <strong>{dateString}</strong>
        </p>
        <p>
          변환된 Date 객체: <strong>{convertedDate}</strong>
        </p>
        <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
          <h4>사용법:</h4>
          <pre style={{ fontSize: "12px", margin: "0" }}>
            {`import { formatStringToDate } from "@/utils/format";

const dateString = "20250801";
const dateObj = formatStringToDate(dateString);
console.log(dateObj); // Date 객체`}
          </pre>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>✅ formatDateToString</h3>
        <p>
          현재 날짜를 문자열로 변환: <strong>{currentDateStr}</strong>
        </p>
        <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
          <h4>사용법:</h4>
          <pre style={{ fontSize: "12px", margin: "0" }}>
            {`import { formatDateToString } from "@/utils/format";

const now = new Date();
const dateStr = formatDateToString(now);
console.log(dateStr); // "20250801"`}
          </pre>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>✅ numberWithCommas</h3>
        <p>
          원본 숫자: <strong>{rawNumber}</strong>
        </p>
        <p>
          콤마 추가된 숫자: <strong>{formattedNumber}</strong>
        </p>
        <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
          <h4>사용법:</h4>
          <pre style={{ fontSize: "12px", margin: "0" }}>
            {`import { numberWithCommas } from "@/utils/format";

const number = 1234567;
const formatted = numberWithCommas(number);
console.log(formatted); // "1,234,567"`}
          </pre>
        </div>
      </div>

      <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#e3f2fd", borderRadius: "4px" }}>
        <h3>📚 공통 함수 파일 위치:</h3>
        <p>
          <code>src/utils/format.js</code>
        </p>
        <p>이 파일에서 모든 공통 함수들을 관리하고 있습니다.</p>
      </div>
    </div>
  );
}
