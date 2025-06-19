const mockClasses = [
  {
    subject: "คณิตศาสตร์ ม.5",
    group: "5/2",
    studentCount: 32,
    time: "จันทร์ 08:30-10:00",
    room: "401",
  },
  {
    subject: "ฟิสิกส์ ม.5",
    group: "5/3",
    studentCount: 30,
    time: "จันทร์ 10:15-11:45",
    room: "Lab 2",
  },
  {
    subject: "ห้องเรียนที่ปรึกษา",
    group: "5/2",
    studentCount: 32,
    time: "ศุกร์ 14:30-15:00",
    room: "401",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const classList = document.getElementById("classList");
  classList.innerHTML = mockClasses
    .map(
      (cls) =>
        `<div class="col-md-4">
      <div class="card soft-card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="text-gradient fw-bold mb-2"><i class="fa-solid fa-book-open-reader me-1"></i>${cls.subject}</h5>
          <div class="mb-2"><i class="fa-solid fa-users-line me-1"></i>กลุ่ม: <span class="fw-semibold">${cls.group}</span></div>
          <div class="mb-1 text-muted small"><i class="fa-solid fa-users me-1"></i>นักเรียน ${cls.studentCount} คน</div>
          <div class="mb-1 text-muted small"><i class="fa-solid fa-clock me-1"></i>${cls.time}</div>
          <div class="mb-1 text-muted small"><i class="fa-solid fa-location-dot me-1"></i>ห้อง: ${cls.room}</div>
          <a href="/teacher-class-detail.html" class="btn btn-gradient btn-sm mt-2 w-100"><i class="fa-solid fa-arrow-right me-1"></i>ดูรายละเอียด</a>
        </div>
      </div>
    </div>`
    )
    .join("");
});
