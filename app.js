const regBtn = document.querySelector('.reg');
const dialog = document.querySelector('dialog');
regBtn.onclick = () => dialog.showModal();
const regcancelBtn = dialog.querySelector('.regcancel');
regcancelBtn.onclick = () => dialog.close();
