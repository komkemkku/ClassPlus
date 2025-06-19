// Mock data
const teacherName = "ครูสมปอง";
const statSubjects = 3;
const statStudents = 92;
const statAttendance = "25/30 คน";

const mockTodayTeach = [
  { subject: "คณิตศาสตร์ ม.5", time: "08:30-10:00", room: "401", group: "5/2" },
  { subject: "ฟิสิกส์ ม.5", time: "10:15-11:45", room: "Lab 2", group: "5/3" },
];

const mockAnnouncements = [
  {
    title: "ประชุมครูประจำเดือน",
    content: "ประชุมวันศุกร์ที่ 21 มิ.ย. เวลา 15:00 ที่ห้องประชุมใหญ่",
  },
  {
    title: "ระบบเช็คชื่ออัปเดต",
    content: "สามารถดูประวัติการขาดเรียนของนักเรียนแต่ละคนในหน้าเช็คชื่อ",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("teacherName").textContent = teacherName;
  document.getElementById("statSubjects").textContent = statSubjects + " วิชา";
  document.getElementById("statStudents").textContent = statStudents + " คน";
  document.getElementById("statAttendance").textContent = statAttendance;

  // วิชาที่สอนวันนี้
  const teachList = document.getElementById("todayTeach");
  if (mockTodayTeach.length) {
    teachList.innerHTML = mockTodayTeach
      .map(
        (item) =>
          `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <i class="fa-solid fa-book-open-reader me-2 text-gradient"></i>
          <span class="fw-semibold">${item.subject}</span>
          <span class="badge bg-primary ms-2">${item.group}</span>
        </span>
        <span class="small text-muted ms-2">
          ${item.time} | ${item.room}
        </span>
      </li>`
      )
      .join("");
  } else {
    teachList.innerHTML =
      '<li class="list-group-item text-muted">ไม่มีคาบสอนวันนี้</li>';
  }

  // ประกาศ
  const announceEl = document.getElementById("teacherAnnouncements");
  if (mockAnnouncements.length) {
    announceEl.innerHTML = mockAnnouncements
      .map(
        (item) =>
          `<div class="mb-3">
        <div class="fw-bold text-gradient mb-1">
          <i class="fa-solid fa-star-of-life me-1"></i>${item.title}
        </div>
        <div class="text-muted small">${item.content}</div>
      </div>`
      )
      .join("");
  } else {
    announceEl.innerHTML = '<div class="text-muted">- ไม่มีประกาศ -</div>';
  }
});
