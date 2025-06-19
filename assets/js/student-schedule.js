// Mock data
const mockSchedule = [
  {
    day: "จันทร์",
    time: "08:30-10:00",
    subject: "คณิตศาสตร์",
    room: "401",
    teacher: "อ. สมหญิง",
    icon: "fa-square-root-variable",
  },
  {
    day: "จันทร์",
    time: "10:15-11:45",
    subject: "ภาษาอังกฤษ",
    room: "402",
    teacher: "Mr. John",
    icon: "fa-language",
  },
  {
    day: "อังคาร",
    time: "13:00-14:30",
    subject: "ฟิสิกส์",
    room: "Lab 2",
    teacher: "ดร. กิตติ",
    icon: "fa-atom",
  },
  {
    day: "พุธ",
    time: "08:30-10:00",
    subject: "วิทยาศาสตร์",
    room: "403",
    teacher: "อ. สมปอง",
    icon: "fa-flask",
  },
  {
    day: "พฤหัสบดี",
    time: "10:15-11:45",
    subject: "ประวัติศาสตร์",
    room: "404",
    teacher: "อ. สุรีย์",
    icon: "fa-landmark",
  },
  {
    day: "ศุกร์",
    time: "08:30-10:00",
    subject: "ศิลปะ",
    room: "405",
    teacher: "อ. ปรีชา",
    icon: "fa-palette",
  },
];

const days = ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์"];

function getTodayTH() {
  const jsDay = new Date().getDay();
  // JS: 0=อาทิตย์ ... 6=เสาร์ | ตารางเรียน: 1=จันทร์ ... 5=ศุกร์
  return days[jsDay - 1] || "จันทร์";
}

function renderDayFilter(selected) {
  const dayFilter = document.getElementById("dayFilter");
  dayFilter.innerHTML = days
    .map(
      (day) =>
        `<button type="button" class="${
          selected === day ? "active" : ""
        }" data-day="${day}">${day}</button>`
    )
    .join("");
  // Event
  dayFilter.querySelectorAll("button").forEach((btn) => {
    btn.onclick = () => renderTable(btn.dataset.day);
  });
}

function renderTable(selectedDay) {
  renderDayFilter(selectedDay);
  const tbody = document.getElementById("scheduleTable");
  const noSchedule = document.getElementById("noSchedule");
  let data = mockSchedule;
  if (selectedDay) {
    data = mockSchedule.filter((item) => item.day === selectedDay);
  }
  if (!data.length) {
    tbody.innerHTML = "";
    noSchedule.style.display = "";
    return;
  } else {
    noSchedule.style.display = "none";
  }
  // highlight คาบวันนี้ (ถ้าตรงวัน)
  const today = getTodayTH();
  tbody.innerHTML = data
    .map(
      (item) =>
        `<tr class="${item.day === today ? "current" : ""}">
        <td><span class="fw-bold">${item.day}</span></td>
        <td>${item.time}</td>
        <td>
          <span class="subject-badge">
            <i class="fa-solid ${item.icon || "fa-book"}"></i> ${item.subject}
          </span>
        </td>
        <td>${item.room}</td>
        <td>
          <span class="teacher">
            <i class="fa-solid fa-chalkboard-user"></i> ${item.teacher}
          </span>
        </td>
      </tr>`
    )
    .join("");
}

// โหลดหน้าครั้งแรก
document.addEventListener("DOMContentLoaded", () => {
  renderTable(getTodayTH());
});
