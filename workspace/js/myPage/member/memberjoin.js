//    1) 입력창 포커스 했을시에 border 3px
//    2) 입력창 블러시 값 없으면 빨간색 3px  값 있으면 원래 기본 값
//    3) 입력창 하단에 값 없을 때 빨간색 글자로 필수 문구
  const focusBtn = document.querySelectorAll(".input-group");

  // 메시지를 배열로 정의
  const messages = [
    "아이디가 필요합니다",
    "비밀번호가 필요합니다",
    "비밀번호확인이 필요합니다",
    "이름이 필요합니다",
    "주소가 필요합니다",
    "생년월일이 필요합니다",
    "전화번호가 필요합니다"
  ];

  focusBtn.forEach((inputGroup, index) => {
    const input = inputGroup.querySelector("input");
    const message = inputGroup.querySelector(".memberjoin-Null"); 

    if (input && message) {

      // 포커스 이벤트 리스너 추가
      input.addEventListener("focus", () => {
        input.style.outline = "none"; 
        input.style.border = "3px solid blue";
        if (message) {
          message.textContent = ""; 
          message.style.color = ""; 
        }
      });

      // 포커스 해제(blur) 이벤트 리스너 추가
      input.addEventListener("blur", () => {
        if (!input.value) {
          input.style.border = "2px solid red"; 
          if (message) {
            const messageText = messages[index];
            message.textContent = messageText; 
            message.style.color = "red"; 
          }
        } 
        else {
          input.style.border = ""; 
          if (message) {
            message.textContent = ""; 
            message.style.color = ""; 
          }
        }
      });
    }
  });

//    4) 비밀번호칸 토글 버튼

//    5) 약관동의 전체 체크 기능

//    6) 가입버튼 눌렀을 때 입력 안된 창 있으면 "입력란 확인" 모달 창 띄우기
//    7) 일반회원 : "~~~님 가입을 축하드립니다" 

const joinBtn = document.querySelector("")

//    8) 아이디 : 5~20자의 영문 소문자, 숫자와 특수기호만 사용 가능합니다

//    9) 비밀번호 : 8 ~16자의 영문 대/소문자,숫자, 특수문자를 사용해 주세요

//    10) 생년월일 : 생년월일은 8자리 숫자로 입력해주세요

