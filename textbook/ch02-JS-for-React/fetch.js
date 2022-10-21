fetch("https://randomuser.me/api/?nat=us&results=1") // GET 요청 보냄
  .then((res) => res.json()) // 요청 성공하면 JSON 파일을 JS 객체로 변환
  .then((json) => json.results) // 객체에서 results 프로퍼티만 꺼냄
  .then(console.log) // resolve 시 콘솔에 출력
  .catch(console.error); // reject 시 콘솔에 에러 출력
