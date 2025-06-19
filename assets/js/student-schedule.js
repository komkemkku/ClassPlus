const mockSchedule = [
  {
    day: "จันทร์",
    time: "08:30-10:00",
    subject: "คณิตศาสตร์",
    room: "401",
    teacher: "อ. สมหญิง",
  },
  {
    day: "อังคาร",
    time: "10:15-11:45",
    subject: "ภาษาอังกฤษ",
    room: "402",
    teacher: "Mr. John",
  },
  {
    day: "พุธ",
    time: "13:00-14:30",
    subject: "ฟิสิกส์",
    room: "Lab 2",
    teacher: "ดร. กิตติ",
  },
  {
    day: "พฤหัสบดี",
    time: "08:30-10:00",
    subject: "วิทยาศาสตร์",
    room: "403",
    teacher: "อ. สมปอง",
  },
  {
    day: "ศุกร์",
    time: "10:15-11:45",
    subject: "ประวัติศาสตร์",
    room: "404",
    teacher: "อ. สุรีย์",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("scheduleTable");
  tbody.innerHTML = mockSchedule
    .map(
      (item) =>
        `<tr>
      <td>${item.day}</td>
      <td>${item.time}</td>
      <td>${item.subject}</td>
      <td>${item.room}</td>
      <td>${item.teacher}</td>
    </tr>`
    )
    .join("");
});
