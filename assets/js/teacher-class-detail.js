// ข้อมูล mock - วิชาเดียว (เลือกเปลี่ยนได้)
const classDetail = {
  subject: "คณิตศาสตร์ ม.5",
  group: "5/2",
  studentCount: 6,
  time: "จันทร์ 08:30-10:00",
  room: "401",
  students: [
    { no: 1, name: "สมชาย ใจดี", status: "present", note: "" },
    { no: 2, name: "สมหญิง ว่องไว", status: "late", note: "ตื่นสาย" },
    { no: 3, name: "วีระ เก่งกล้า", status: "absent", note: "" },
    { no: 4, name: "สายใจ สุขสันต์", status: "present", note: "" },
    { no: 5, name: "วิทยา พิชิตชัย", status: "leave", note: "ลาป่วย" },
    { no: 6, name: "รุ่งนภา รุ่งเรือง", status: "present", note: "" },
  ],
};
const statusTH = {
  present: "มา",
  absent: "ขาด",
  late: "สาย",
  leave: "ลา",
};
const statusClass = {
  present: "student-status-present",
  absent: "student-status-absent",
  late: "student-status-late",
  leave: "student-status-leave",
};
// mock ประวัติแต่ละคน
const studentHistories = {
  1: [
    { date: "2025-06-13", status: "present", note: "" },
    { date: "2025-06-14", status: "late", note: "ตื่นสาย" },
    { date: "2025-06-16", status: "present", note: "" },
  ],
  2: [
    { date: "2025-06-13", status: "absent", note: "" },
    { date: "2025-06-14", status: "present", note: "" },
    { date: "2025-06-15", status: "late", note: "ติดธุระ" },
  ],
  3: [{ date: "2025-06-13", status: "present", note: "" }],
  4: [
    { date: "2025-06-12", status: "present", note: "" },
    { date: "2025-06-13", status: "present", note: "" },
  ],
  5: [{ date: "2025-06-13", status: "leave", note: "ลาป่วย" }],
  6: [
    { date: "2025-06-10", status: "present", note: "" },
    { date: "2025-06-11", status: "present", note: "" },
  ],
};

// date formatter
function formatDateTH(iso) {
  const months = [
    "",
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
  const [y, m, d] = iso.split("-");
  return `${parseInt(d)} ${months[parseInt(m)]} ${y}`;
}

// Render ตารางหลัก + ปุ่ม modal
function renderClassDetail(filter = "") {
  document.getElementById("subjectTitle").textContent = classDetail.subject;
  document.getElementById("groupTitle").textContent =
    "กลุ่ม: " + classDetail.group;
  document.getElementById(
    "timeTitle"
  ).innerHTML = `<i class="fa-solid fa-clock me-1"></i>${classDetail.time}`;
  document.getElementById(
    "roomTitle"
  ).innerHTML = `<i class="fa-solid fa-location-dot me-1"></i>${classDetail.room}`;
  document.getElementById("studentCount").textContent =
    classDetail.students.length;

  let stat = { present: 0, absent: 0, late: 0, leave: 0 };
  classDetail.students.forEach((s) => stat[s.status]++);
  document.getElementById("stat-present").textContent = stat.present;
  document.getElementById("stat-late").textContent = stat.late;
  document.getElementById("stat-absent").textContent = stat.absent;
  document.getElementById("stat-leave").textContent = stat.leave;

  let showStudents = classDetail.students;
  if (filter) {
    showStudents = showStudents.filter((s) => s.name.includes(filter));
  }
  const list = document.getElementById("studentList");
  if (!showStudents.length) {
    list.innerHTML = "";
    document.getElementById("noStudent").style.display = "";
  } else {
    document.getElementById("noStudent").style.display = "none";
    list.innerHTML = showStudents
      .map(
        (stu) =>
          `<tr>
        <td>${stu.no}</td>
        <td>${stu.name}</td>
        <td class="${statusClass[stu.status]}">${statusTH[stu.status]}</td>
        <td>${stu.note || "-"}</td>
        <td>
          <button class="btn btn-view-history btn-sm" type="button" data-no="${
            stu.no
          }">
            <i class="fa-solid fa-clock-rotate-left"></i> ดูประวัติ
          </button>
        </td>
      </tr>`
      )
      .join("");
    addHistoryBtnEvent(); // สำคัญ!
  }
}

// ฟังก์ชันแสดง Modal
function showStudentHistoryModal(stuNo) {
  // หา object นักเรียน
  const student = classDetail.students.find((s) => s.no == stuNo);
  const history = studentHistories[stuNo] || [];
  document.getElementById("modalStudentName").textContent = student
    ? student.name
    : "-";
  document.getElementById(
    "modalStudentInfo"
  ).textContent = `เลขที่ ${stuNo} | กลุ่ม ${classDetail.group} | วิชา ${classDetail.subject}`;
  const modalBody = document.getElementById("modalHistoryBody");
  if (!history.length) {
    modalBody.innerHTML = "";
    document.getElementById("modalNoHistory").style.display = "";
  } else {
    document.getElementById("modalNoHistory").style.display = "none";
    modalBody.innerHTML = history
      .map(
        (h) =>
          `<tr>
        <td>${formatDateTH(h.date)}</td>
        <td class="${statusClass[h.status]}">${statusTH[h.status]}</td>
        <td>${h.note || "-"}</td>
      </tr>`
      )
      .join("");
  }
  const modal = new bootstrap.Modal(
    document.getElementById("studentHistoryModal")
  );
  modal.show();
}

// เพิ่ม event ให้กับปุ่ม "ดูประวัติ" หลัง render ทุกครั้ง
function addHistoryBtnEvent() {
  document.querySelectorAll(".btn-view-history[data-no]").forEach((btn) => {
    btn.onclick = function () {
      showStudentHistoryModal(this.getAttribute("data-no"));
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderClassDetail();
  document.getElementById("searchStudent").oninput = function () {
    renderClassDetail(this.value.trim());
  };
});
