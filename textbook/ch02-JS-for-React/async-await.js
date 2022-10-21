const getFakeUser = async () => {
  try {
    let res = await fetch("https://randomuser.me/api/?nat=us&results=1");
    let { results } = await res.json(); // await 없으면 results 할당 안된 상태로 아래 코드가 실행되어 undefined 출력
    console.log(results);
  } catch (err) {
    console.error(err);
  }
};

getFakeUser();
