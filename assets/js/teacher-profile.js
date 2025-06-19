let teacherProfile = {
  name: "สมปอง",
  surname: "ตั้งใจสอน",
  position: "ครูประจำวิชา",
  email: "sompong@email.com",
  phone: "0899999999",
  username: "teacher001",
};

function renderProfileView() {
  const section = document.getElementById("profileSection");
  section.innerHTML = `
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label mb-0">ชื่อ</label>
        <div class="fw-bold">${teacherProfile.name}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">นามสกุล</label>
        <div class="fw-bold">${teacherProfile.surname}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">ตำแหน่ง</label>
        <div class="fw-bold">${teacherProfile.position}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">อีเมล</label>
        <div class="fw-bold">${teacherProfile.email}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">เบอร์โทรศัพท์</label>
        <div class="fw-bold">${teacherProfile.phone}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label mb-0">Username</label>
        <div class="fw-bold">${teacherProfile.username}</div>
      </div>
    </div>
    <div class="mt-4">
      <a href="#" class="edit-btn" id="editProfileBtn">
        <i class="fa-solid fa-pen-to-square"></i> แก้ไขข้อมูล
      </a>
    </div>
    <div id="alertBox" class="mt-3"></div>
  `;
  document.getElementById("editProfileBtn").onclick = function (e) {
    e.preventDefault();
    renderProfileEdit();
  };
}

function renderProfileEdit() {
  const section = document.getElementById("profileSection");
  section.innerHTML = `
    <form id="editForm">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label mb-0">ชื่อ</label>
          <input type="text" class="form-control" id="name" value="${teacherProfile.name}" required>
        </div>
        <div class="col-md-6">
          <label class="form-label mb-0">นามสกุล</label>
          <input type="text" class="form-control" id="surname" value="${teacherProfile.surname}" required>
        </div>
        <div class="col-md-6">
          <label class="form-label mb-0">ตำแหน่ง</label>
          <input type="text" class="form-control" id="position" value="${teacherProfile.position}" required>
        </div>
        <div class="col-md-6">
          <label class="form-label mb-0">อีเมล</label>
          <input type="email" class="form-control" id="email" value="${teacherProfile.email}" required>
        </div>
        <div class="col-md-6">
          <label class="form-label mb-0">เบอร์โทรศัพท์</label>
          <input type="text" class="form-control" id="phone" value="${teacherProfile.phone}" required>
        </div>
        <div class="col-md-6">
          <label class="form-label mb-0">Username</label>
          <input type="text" class="form-control" id="username" value="${teacherProfile.username}" disabled>
        </div>
      </div>
      <div class="mt-4 d-flex gap-2">
        <button type="submit" class="edit-btn"><i class="fa-solid fa-floppy-disk"></i> บันทึก</button>
        <button type="button" class="btn btn-outline-secondary" id="cancelEdit"><i class="fa-solid fa-xmark"></i> ยกเลิก</button>
      </div>
      <div id="alertBox" class="mt-3"></div>
    </form>
  `;
  document.getElementById("cancelEdit").onclick = function () {
    renderProfileView();
  };
  document.getElementById("editForm").onsubmit = function (e) {
    e.preventDefault();
    // Update data
    teacherProfile.name = document.getElementById("name").value.trim();
    teacherProfile.surname = document.getElementById("surname").value.trim();
    teacherProfile.position = document.getElementById("position").value.trim();
    teacherProfile.email = document.getElementById("email").value.trim();
    teacherProfile.phone = document.getElementById("phone").value.trim();
    // username ไม่ให้แก้
    showProfileAlert("บันทึกข้อมูลเรียบร้อย!", "success");
    setTimeout(renderProfileView, 1200);
  };
}

function showProfileAlert(msg, type = "success") {
  let alertBox = document.getElementById("alertBox");
  alertBox.innerHTML = `<div class="alert alert-${type} text-center shadow-sm mb-0">${msg}</div>`;
}

document.addEventListener("DOMContentLoaded", renderProfileView);
