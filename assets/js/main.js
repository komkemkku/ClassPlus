document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      showAlert("กรุณากรอกข้อมูลให้ครบถ้วน", "danger");
      return;
    }

    // MOCK: ตรวจสอบ role
    // สมมติ username นักเรียน ขึ้นต้นด้วย "student" หรือ "std"
    // สมมติ username ครู ขึ้นต้นด้วย "teacher" หรือ "tch"
    // รหัสผ่าน mock ว่า 123456
    let role = null;
    if (
      (/^student/i.test(username) || /^std/i.test(username)) &&
      password === "123456"
    ) {
      role = "student";
    } else if (
      (/^teacher/i.test(username) || /^tch/i.test(username)) &&
      password === "123456"
    ) {
      role = "teacher";
    }

    if (role === "student") {
      showAlert("เข้าสู่ระบบในฐานะนักเรียน!", "success");
      setTimeout(() => {
        window.location.href = "student-dashboard.html";
      }, 1000);
    } else if (role === "teacher") {
      showAlert("เข้าสู่ระบบในฐานะครู/อาจารย์!", "success");
      setTimeout(() => {
        window.location.href = "teacher-dashboard.html";
      }, 1000);
    } else {
      showAlert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", "danger");
    }
  });

// ฟังก์ชันแสดง alert
function showAlert(msg, type = "info") {
  document.querySelectorAll(".alert").forEach((el) => el.remove());
  let alertBox = document.createElement("div");
  alertBox.className = `alert alert-${type} mt-3 mb-0 text-center shadow-sm`;
  alertBox.textContent = msg;

  const form = document.getElementById("loginForm");
  form.parentNode.insertBefore(alertBox, form.nextSibling);

  setTimeout(() => {
    if (alertBox.parentNode) alertBox.parentNode.removeChild(alertBox);
  }, 1800);
}
