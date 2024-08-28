const modal = document.querySelector('#modalBackground');
const modalBox = document.querySelector('#modal');
const modalOk = document.querySelector('#modalOk');
const modalNo = document.querySelector('#modalNo');
const exitClinic = document.querySelector('#memberList-exitClinic');
const startClinic = document.querySelector('#startClinic-startBtn');


function showModal(){
  modal.style.display = "flex";
}

startClinic.addEventListener("click",showModal);
exitClinic.addEventListener("click",showModal);

modalNo.addEventListener("click", () => {
  modal.style.display = "none";
})

