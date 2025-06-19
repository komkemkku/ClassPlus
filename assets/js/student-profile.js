// Profile data (mock, ใช้ดึงจาก API ได้)
let profileData = {
  pfName: "สมชาย",
  pfSurname: "ใจดี",
  pfStudentId: "ST2024001",
  pfEmail: "somchai@email.com",
  pfYear: "5",
  pfPhone: "0812345678",
  pfUsername: "student001",
};

function renderProfileView() {
  // แสดงข้อมูล
  for (const key in profileData) {
    const el = document.getElementById(key);
    if (el) el.textContent = profileData[key];
  }

  // ปุ่มแก้ไข
  document.querySelector(".edit-btn").style.display = "inline-flex";
  const editForm = document.getElementById("editForm");
  if (editForm) editForm.remove();
}

function renderProfileEdit() {
  // ซ่อนปุ่มแก้ไข
  document.querySelector(".edit-btn").style.display = "none";

  // ฟอร์มแก้ไข
  const col = document.querySelector(".col-md-9");
  const form = document.createElement("form");
  form.id = "editForm";
  form.innerHTML = `
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label mb-0">ชื่อ</label>
        <input type="text" class="form-control" id="editName" value="${profileData.pfName}">
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">นามสกุล</label>
        <input type="text" class="form-control" id="editSurname" value="${profileData.pfSurname}">
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">รหัสประจำตัว</label>
        <input type="text" class="form-control" id="editStudentId" value="${profileData.pfStudentId}" disabled>
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">อีเมล</label>
        <input type="email" class="form-control" id="editEmail" value="${profileData.pfEmail}">
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">ชั้นปี</label>
        <input type="text" class="form-control" id="editYear" value="${profileData.pfYear}">
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">เบอร์โทรศัพท์</label>
        <input type="text" class="form-control" id="editPhone" value="${profileData.pfPhone}">
      </div>
      <div class="col-md-12">
        <label class="form-label mb-0">Username</label>
        <input type="text" class="form-control" id="editUsername" value="${profileData.pfUsername}" disabled>
      </div>
    </div>
    <div class="mt-4 d-flex gap-2">
      <button type="submit" class="edit-btn"><i class="fa-solid fa-floppy-disk"></i> บันทึก</button>
      <button type="button" class="btn btn-outline-secondary" id="cancelEdit"><i class="fa-solid fa-xmark"></i> ยกเลิก</button>
    </div>
  `;
  col.appendChild(form);

  // กด "ยกเลิก"
  document.getElementById("cancelEdit").onclick = function () {
    renderProfileView();
  };

  // กด "บันทึก"
  form.onsubmit = function (e) {
    e.preventDefault();
    // เก็บค่าที่แก้ไข (validate เพิ่มได้)
    profileData.pfName = document.getElementById("editName").value.trim();
    profileData.pfSurname = document.getElementById("editSurname").value.trim();
    profileData.pfEmail = document.getElementById("editEmail").value.trim();
    profileData.pfYear = document.getElementById("editYear").value.trim();
    profileData.pfPhone = document.getElementById("editPhone").value.trim();
    // (studentId, username ไม่ให้แก้)

    renderProfileView();

    // แจ้งเตือน (ถ้าอยากให้ขึ้น toast/alert)
    showProfileAlert("บันทึกข้อมูลเรียบร้อย!", "success");
  };
}

function showProfileAlert(msg, type = "success") {
  let alertBox = document.createElement("div");
  alertBox.className = `alert alert-${type} mt-3 mb-0 text-center shadow-sm`;
  alertBox.textContent = msg;
  const cardBody = document.querySelector(".card-body");
  cardBody.appendChild(alertBox);
  setTimeout(() => {
    if (alertBox.parentNode) alertBox.parentNode.removeChild(alertBox);
  }, 1600);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProfileView();

  // ปุ่มแก้ไข
  document.querySelector(".edit-btn").onclick = function (e) {
    e.preventDefault();
    renderProfileEdit();
  };
});
