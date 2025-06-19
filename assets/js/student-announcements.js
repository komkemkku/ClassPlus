const mockAnnouncements = [
  { title: "สอบกลางภาค", content: "เตรียมตัวสอบกลางภาค 15 ก.ค. 2567" },
  { title: "แจ้งเปลี่ยนห้อง", content: "ฟิสิกส์วันศุกร์เรียนที่ Lab 3" },
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("announceList");
  list.innerHTML = mockAnnouncements
    .map(
      (a) =>
        `<div class="mb-4 pb-3 border-bottom">
      <div class="fw-bold text-gradient mb-1"><i class="fa-solid fa-star-of-life me-1"></i>${a.title}</div>
      <div class="text-muted">${a.content}</div>
    </div>`
    )
    .join("");
});
