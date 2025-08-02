// "YYYYMMDD" 형태의 문자열을 "YYYY년 MM월 DD일" 문자열로 변환
export function formatStringToDate(dateString) {
  if (!dateString || dateString.length !== 8) return "";

  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const day = dateString.slice(6, 8);

  return `${year}년 ${month}월 ${day}일`;
}

// 사용 예시:
// const dateObj = formatStringToDate("20250801");
// console.log(dateObj); // Thu Aug 01 2025 ...

// Date 객체를 "YYYYMMDD" 문자열로 변환
export function formatDateToString(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const dateString = `${year}${month}${day}`;
  return dateString;
}

// 사용 예시:
// const dateStr = formatDateToString(new Date());
// console.log(dateStr); // 20250801

// 숫자에 천 단위 콤마(,) 추가
export function numberWithCommas(number) {
  let buildNumber = typeof number === "string" ? number.replaceAll(",", "") : String(number);

  return buildNumber.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// 사용 예시:
// const formatted = numberWithCommas(1234567);      // "1,234,567"
// const formattedStr = numberWithCommas("1234567"); // "1,234,567"
