// script.js
let calculationDone = false; // ตรวจสอบว่าคำนวณแล้วหรือยัง
// ฟังก์ชันสำหรับคำนวณบวกและลบ
function calculate() {
    // ดึงค่าจาก input
    const num1 = parseFloat(document.getElementById('numInput1').value);
    const num2 = parseFloat(document.getElementById('numInput2').value);
    const resultElement = document.getElementById('result');
    const errorMessage = document.getElementById('errorMessage_cal1');
    // ตรวจสอบว่าค่าที่กรอกเป็นตัวเลขหรือไม่
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "ผลลัพธ์: ";
        errorMessage.textContent = "กรุณากรอกตัวเลขให้ครบ";
        errorMessage.style.display = 'block';
        calculationDone = false;
        return;
    }
    // คำนวณผลบวกและลบ
    const sum = num1 + num2;
    const difference = num1 - num2;

    // แสดงผลลัพธ์
    resultElement.textContent = `ผลบวก: ${sum}, ผลลบ: ${difference}`;
    errorMessage.style.display = 'none';
    calculationDone = true; // ตั้งสถานะเป็นคำนวณสำเร็จ
    //document.getElementById('result').innerText = `ผลลัพธ์: ${resultText}`;

    console.log(resultText); // แสดงผลในคอนโซล
}

// เมื่อคลิกปุ่ม "คำนวณ"
document.getElementById("calculateBtn").addEventListener("click", calculate);


// script.js

// ฟังก์ชันสำหรับซ่อนหรือแสดง input
function toggleInput(inputId) {
    // ซ่อน input ทั้งหมดก่อน
    document.getElementById('input1').style.display = 'none';
    document.getElementById('input2').style.display = 'none';

    // แสดง input ที่เกี่ยวข้องกับตัวเลือกที่เลือก
    document.getElementById(inputId).style.display = 'block';

    // ล้างข้อความแจ้งเตือนเมื่อมีการเลือกตัวเลือก
    document.getElementById('errorMessage').style.display = 'none';
    calculationDone = false; // รีเซ็ตสถานะการคำนวณเมื่อเปลี่ยนตัวเลือก
}

// ฟังก์ชันสำหรับเปลี่ยนหน้า
function goToNextPage() {
    const selectedOption = document.querySelector('input[name="choice"]:checked');
    const extra1 = document.getElementById('extra1').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const num1 = document.getElementById('numInput1').value.trim();
    const num2 = document.getElementById('numInput2').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    if (!selectedOption) {
        errorMessage.textContent = "กรุณาเลือกตัวเลือก";
        errorMessage.style.display = 'block';
        return;
    }
    if (selectedOption.value === 'option1' && !extra1) {
        errorMessage.textContent = "กรุณากรอกข้อมูลสำหรับตัวเลือก 1";
        errorMessage.style.display = 'block';
        return;
    }
    if (selectedOption.value === 'option2') {
        if (!gender) {
            errorMessage.textContent = "กรุณาเลือกเพศ";
            errorMessage.style.display = 'block';
            return;
        }
        if (!num1 || !num2) {
            errorMessage.textContent = "กรุณากรอกตัวเลขให้ครบถ้วน";
            errorMessage.style.display = 'block';
            return;
        }
        if (!calculationDone) {
            errorMessage.textContent = "กรุณากดปุ่ม 'คำนวณ' ก่อน";
            errorMessage.style.display = 'block';
            return;
        }
    }
    // หากข้อมูลครบถ้วน
    errorMessage.style.display = 'none';
    window.location.href = 'nextpage.html';
}

// ตั้งค่าเริ่มต้น: ซ่อน input1 และ input2
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('input1').style.display = 'none';
    document.getElementById('input2').style.display = 'none';
});

