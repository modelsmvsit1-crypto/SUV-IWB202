// للتحقق من صحة نموذج إضافة التطبيق
function validateForm() {
  const name = document.getElementById("appName").value.trim();
  const company = document.getElementById("companyName").value.trim();
  const website = document.getElementById("website").value.trim();
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(name)) {alert("اسم التطبيق يجب أن يكون أحرف إنجليزية فقط بدون فراغات."); return false;}
  if (!nameRegex.test(company)) {alert("اسم الشركة يجب أن يكون أحرف إنجليزية فقط بدون فراغات."); return false;}
  if (!website.startsWith("http")) {alert("الرجاء إدخال موقع إلكتروني صحيح يبدأ بـ http أو https."); return false;}
  alert("تم إضافة التطبيق بنجاح!");
  window.location.href = "apps.html";
  return false;
}