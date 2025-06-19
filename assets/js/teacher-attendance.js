// Mock ข้อมูลเริ่มต้น
let mockStudents = [
  {
    no: 1,
    name: "สมชาย ใจดี",
    status: "present",
    note: { absent: "", leave: "", late: "" },
  },
  {
    no: 2,
    name: "สมหญิง ว่องไว",
    status: "late",
    note: { absent: "", leave: "", late: "ตื่นสาย" },
  },
  {
    no: 3,
    name: "วีระ เก่งกล้า",
    status: "absent",
    note: { absent: "ไม่สบาย", leave: "", late: "" },
  },
  {
    no: 4,
    name: "สายใจ สุขสันต์",
    status: "present",
    note: { absent: "", leave: "", late: "" },
  },
  {
    no: 5,
    name: "วิทยา พิชิตชัย",
    status: "leave",
    note: { absent: "", leave: "ไปธุระราชการ", late: "" },
  },
];

// ชื่อสถานะ ภาษาไทย
const statusTH = { present: "มา", late: "สาย", absent: "ขาด", leave: "ลา" };

// แสดงตารางเช็คชื่อ
function renderAttendanceTable() {
  const tbody = document.querySelector("#attendanceTable tbody");
  tbody.innerHTML = mockStudents
    .map((stu, idx) => {
      // note input สำหรับแต่ละสถานะ
      let noteInput = "";
      if (stu.status === "absent") {
        noteInput = `<input type="text" class="form-control form-control-sm" placeholder="กรอกเหตุผลการขาด" value="${
          stu.note.absent || ""
        }" data-index="${idx}" data-note="absent">`;
      } else if (stu.status === "late") {
        noteInput = `<input type="text" class="form-control form-control-sm" placeholder="กรอกเหตุผลการมาสาย" value="${
          stu.note.late || ""
        }" data-index="${idx}" data-note="late">`;
      } else if (stu.status === "leave") {
        noteInput = `<input type="text" class="form-control form-control-sm" placeholder="กรอกเหตุผลการลา" value="${
          stu.note.leave || ""
        }" data-index="${idx}" data-note="leave">`;
      } else {
        noteInput = `<span class="text-muted small">-</span>`;
      }

      return `
      <tr>
        <td>${stu.name}</td>
        <td>${stu.no}</td>
        <td>
          ${Object.keys(statusTH)
            .map(
              (st) =>
                `<button type="button" class="attendance-btn mx-1 ${
                  stu.status === st ? "border border-2 border-dark" : ""
                }" 
              data-index="${idx}" data-status="${st}">
              ${statusTH[st]}
            </button>`
            )
            .join("")}
        </td>
        <td>${noteInput}</td>
      </tr>
    `;
    })
    .join("");

  // Event เปลี่ยนสถานะ
  document.querySelectorAll(".attendance-btn").forEach((btn) => {
    btn.onclick = function () {
      const idx = this.dataset.index;
      const status = this.dataset.status;
      mockStudents[idx].status = status;
      renderAttendanceTable();
    };
  });

  // Event เปลี่ยนหมายเหตุ
  document.querySelectorAll("input[data-note]").forEach((input) => {
    input.oninput = function () {
      const idx = this.dataset.index;
      const noteType = this.dataset.note;
      mockStudents[idx].note[noteType] = this.value;
    };
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAttendanceTable();
  document.getElementById("saveAttendance").onclick = function () {
    // สามารถส่ง mockStudents ไปยัง API ได้เลย
    document.getElementById(
      "saveStatus"
    ).innerHTML = `<div class="alert alert-success text-center shadow-sm mb-0 mt-2">บันทึกการเช็คชื่อเรียบร้อย!</div>`;
    setTimeout(
      () => (document.getElementById("saveStatus").innerHTML = ""),
      1800
    );
  };
});
