let mockAnn = [
  { title: "ประชุมครู", content: "วันศุกร์นี้ 15.00 น. ห้องประชุมใหญ่" },
  { title: "แจ้งกำหนดการสอบ", content: "สอบกลางภาค 5 ก.ค. 2567 ทุกวิชา" },
];

function renderAnn() {
  const list = document.getElementById("announceList");
  if (!mockAnn.length) {
    list.innerHTML = `<div class="text-muted text-center py-4">ยังไม่มีประกาศ</div>`;
    return;
  }
  list.innerHTML = mockAnn
    .map(
      (a) =>
        `<div class="mb-4 pb-3 border-bottom">
      <div class="fw-bold text-gradient mb-1"><i class="fa-solid fa-star-of-life me-1"></i>${a.title}</div>
      <div class="text-muted">${a.content}</div>
    </div>`
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", () => {
  renderAnn();
  document.getElementById("addAnnBtn").onclick = function () {
    new bootstrap.Modal(document.getElementById("announceModal")).show();
  };
  document.getElementById("announceForm").onsubmit = function (e) {
    e.preventDefault();
    mockAnn.unshift({
      title: document.getElementById("annTitle").value,
      content: document.getElementById("annContent").value,
    });
    bootstrap.Modal.getInstance(
      document.getElementById("announceModal")
    ).hide();
    renderAnn();
    e.target.reset();
  };
});
