// 비대면 진료 신청 눌렀을 시 alert 확인 후, 비대면 진료 신청 페이지로 이동
document.addEventListener("DOMContentLoaded", function() {
    const goWriteButton = document.querySelector(".hospital-goWrite a");

    if (goWriteButton) {
        goWriteButton.addEventListener("click", function(event) {
            event.preventDefault();

            const userConfirmed = confirm("비대면 진료를 신청하시겠습니까?");

            if (userConfirmed) {
                window.location.href = "./../../html/clinicMember/chatList.html";
            }
        });
    }
});