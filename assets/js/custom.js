function toggleBtn1(num) {

    const btn1 = document.getElementById('explain_btn_before' + num);
    const explainBox = document.getElementById('explain_box' + num);
    const btn2 = document.getElementById('explain_btn_after' + num);

    explainBox.style.display = 'block';
    btn1.style.display = 'none'
    btn2.style.display = 'block'


}

function toggleBtn2(num) {
    const btn1 = document.getElementById('explain_btn_before' + num);
    const btn2 = document.getElementById('explain_btn_after' + num);
    const explainBox = document.getElementById('explain_box' + num);


    explainBox.style.display = 'none';
    btn2.style.display = 'none';
    btn1.style.display = 'block';
}