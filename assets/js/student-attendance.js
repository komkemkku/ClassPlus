const mockAttendance = [
  { date: "2025-06-20", time: "08:10", status: "เข้าเรียน", note: "" },
  { date: "2025-06-19", time: "08:29", status: "มาสาย", note: "ติดฝน" },
  { date: "2025-06-18", time: "-", status: "ขาด", note: "ไม่ได้แจ้ง" },
  { date: "2025-06-17", time: "08:00", status: "เข้าเรียน", note: "" },
  { date: "2025-06-16", time: "-", status: "ลา", note: "ป่วย" },
];

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("attendanceTable");
  tbody.innerHTML = mockAttendance
    .map((item) => {
      let badgeClass = "bg-success";
      if (item.status === "ขาด") badgeClass = "bg-danger";
      else if (item.status === "ลา") badgeClass = "bg-primary";
      else if (item.status === "มาสาย") badgeClass = "bg-warning text-dark";
      else badgeClass = "bg-success";
      return `
      <tr>
        <td>${formatDateTH(item.date)}</td>
        <td>${
          item.time === "-" ? "<span class='text-muted'>-</span>" : item.time
        }</td>
        <td><span class="badge ${badgeClass}">${item.status}</span></td>
        <td>${item.note || "-"}</td>
      </tr>
    `;
    })
    .join("");
});

// ฟังก์ชันแปลงวันที่
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
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear() + 543 - 0}`;
}
