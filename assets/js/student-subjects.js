const mockSubjects = [
  { name: "คณิตศาสตร์", teacher: "อ. สมหญิง", room: "401" },
  { name: "ภาษาอังกฤษ", teacher: "Mr. John", room: "402" },
  { name: "ฟิสิกส์", teacher: "ดร. กิตติ", room: "Lab 2" },
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("subjectList");
  list.innerHTML = mockSubjects
    .map(
      (s) =>
        `<div class="col-md-4">
      <div class="card soft-card shadow-sm h-100">
        <div class="card-body">
          <h5 class="fw-bold text-gradient mb-2"><i class="fa-solid fa-book-open-reader me-1"></i>${s.name}</h5>
          <div class="mb-1"><i class="fa-solid fa-user-tie me-1"></i>ครูผู้สอน: <span class="fw-semibold">${s.teacher}</span></div>
          <div class="small text-muted"><i class="fa-solid fa-location-dot me-1"></i>ห้อง: ${s.room}</div>
        </div>
      </div>
    </div>`
    )
    .join("");
});
