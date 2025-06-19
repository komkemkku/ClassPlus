document
  .getElementById("registerStudentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Mock: ดึงข้อมูลทั้งหมดมาดู
    const form = e.target;
    const data = {
      firstname: form.firstname.value.trim(),
      lastname: form.lastname.value.trim(),
      studentId: form.studentId.value.trim(),
      year: form.year.value,
      roomNo: form.roomNo.value,
      department: form.department.value.trim(),
      gender: form.gender.value,
      birthdate: form.birthdate.value,
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      username: form.username.value.trim(),
      password: form.password.value.trim(),
    };

    if (data.password.length < 6) {
      showAlert("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร", "danger");
      return;
    }

    showAlert("ลงทะเบียนสำเร็จ! (Demo)", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });

// ฟังก์ชันแสดง alert
function showAlert(msg, type = "info") {
  document.querySelectorAll(".alert").forEach((el) => el.remove());
  let alertBox = document.createElement("div");
  alertBox.className = `alert alert-${type} mt-3 mb-0 text-center shadow-sm`;
  alertBox.textContent = msg;

  const form = document.getElementById("registerStudentForm");
  form.parentNode.insertBefore(alertBox, form.nextSibling);

  setTimeout(() => {
    if (alertBox.parentNode) alertBox.parentNode.removeChild(alertBox);
  }, 1800);
}
