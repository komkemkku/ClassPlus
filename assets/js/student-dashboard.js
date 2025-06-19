// Mock data (ใช้ API จริงในอนาคตได้เลย)
const mockStudentName = "สมชาย ใจดี";

const mockTodaySchedule = [
  { subject: "คณิตศาสตร์", time: "08:30 - 10:00", room: "401" },
  { subject: "ภาษาอังกฤษ", time: "10:15 - 11:45", room: "402" },
  { subject: "ฟิสิกส์", time: "13:00 - 14:30", room: "Lab 2" },
];

const mockAnnouncements = [
  {
    title: "แจ้งเตือนการสอบกลางภาค",
    content: "นักเรียนทุกคนเตรียมตัวสอบกลางภาคในวันที่ 15 ก.ค. 2567",
  },
  {
    title: "เปลี่ยนห้องเรียนวิชาฟิสิกส์",
    content: "วันศุกร์นี้ ห้องเรียนฟิสิกส์ย้ายไปที่ Lab 3 ชั่วคราว",
  },
];

const mockAttendanceSummary = {
  absent: 2,
  late: 1,
  leave: 3,
};

const mockCheckinTimes = [
  { date: "2025-06-20", time: "08:10", status: "เข้าเรียน" },
  { date: "2025-06-19", time: "08:29", status: "มาสาย" },
  { date: "2025-06-18", time: "-", status: "ขาด" },
  { date: "2025-06-17", time: "08:00", status: "เข้าเรียน" },
  { date: "2025-06-16", time: "-", status: "ลา" },
  { date: "2025-06-15", time: "08:05", status: "เข้าเรียน" },
  { date: "2025-06-14", time: "08:25", status: "เข้าเรียน" },
];

document.addEventListener("DOMContentLoaded", () => {
  // ชื่อ
  document.getElementById("studentName").textContent = mockStudentName;

  // ตารางเรียนวันนี้
  const scheduleEl = document.getElementById("todaySchedule");
  if (mockTodaySchedule.length) {
    scheduleEl.innerHTML = mockTodaySchedule
      .map(
        (item) =>
          `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>
          <i class="fa-solid fa-book-open-reader me-2 text-gradient"></i>
          <span class="fw-semibold">${item.subject}</span>
        </span>
        <span class="small text-muted ms-2">${item.time} | ${item.room}</span>
      </li>`
      )
      .join("");
  } else {
    scheduleEl.innerHTML =
      '<li class="list-group-item text-muted">ไม่มีตารางเรียนวันนี้</li>';
  }

  // ประกาศล่าสุด
  const announceEl = document.getElementById("latestAnnouncements");
  if (mockAnnouncements.length) {
    announceEl.innerHTML = mockAnnouncements
      .map(
        (item) =>
          `<div class="mb-3">
        <div class="fw-bold text-gradient mb-1"><i class="fa-solid fa-star-of-life me-1"></i>${item.title}</div>
        <div class="text-muted small">${item.content}</div>
      </div>`
      )
      .join("");
  } else {
    announceEl.innerHTML =
      '<div class="text-muted">- ไม่มีประกาศล่าสุด -</div>';
  }

  // Attendance Summary (ขาด-ลา-มาสาย)
  document.getElementById("statAbsent").textContent =
    mockAttendanceSummary.absent;
  document.getElementById("statLate").textContent = mockAttendanceSummary.late;
  document.getElementById("statLeave").textContent =
    mockAttendanceSummary.leave;

  // Check-in Times Table
  const checkinTbody = document.querySelector("#checkinTable tbody");
  if (mockCheckinTimes.length) {
    checkinTbody.innerHTML = mockCheckinTimes
      .map((item) => {
        let badgeClass = "bg-success";
        let status = item.status;
        if (status === "ขาด") badgeClass = "bg-danger";
        else if (status === "ลา") badgeClass = "bg-primary";
        else if (status === "มาสาย") badgeClass = "bg-warning text-dark";
        else if (status === "เข้าเรียน") badgeClass = "bg-success";
        else badgeClass = "bg-secondary";
        return `
        <tr>
          <td>${formatDateTH(item.date)}</td>
          <td>${
            item.time === "-" ? "<span class='text-muted'>-</span>" : item.time
          }</td>
          <td><span class="badge ${badgeClass}">${status}</span></td>
        </tr>
      `;
      })
      .join("");
  } else {
    checkinTbody.innerHTML = `<tr><td colspan="3" class="text-muted text-center">ไม่มีข้อมูลเช็คชื่อ</td></tr>`;
  }
});

// ฟังก์ชันแปลงวันที่ YYYY-MM-DD -> 20 มิ.ย. 2025
function formatDateTH(dateStr) {
  const months = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const d = new Date(dateStr);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543 - 0}`; // พ.ศ.
}
