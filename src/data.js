const _data = [
  { part: 1, name: "concern1", min: "نگرانی" },
  { part: 1, name: "inform", min: "اطلاع رسانی" },
  { part: 1, name: "design faze", min: "فاز طراحی" },
  { part: 1, name: "Raise hand", min: "دست بالا کنید" },
  { part: 1, name: "good enough", min: "به اندازه کافی خوب بودن" },
  { part: 1, name: "what", min: "چرا ها" },
  { part: 1, name: "how", min: "چگونه" },
  { part: 1, name: "well state", min: "حالت خوب" },
  { part: 1, name: "well being", min: "سعادت" },
  { part: 1, name: "well done", min: "خوب انجام شده" },
  { part: 1, name: "improve", min: "بهتر کردن" },
  { part: 1, name: "solution", min: "راه حل" },
  { part: 1, name: "ownership", min: "مالکیت" },
  { part: 1, name: "owner", min: "صاحب" },
  { part: 1, name: "scope", min: "محدوده" },
  { part: 1, name: "judgemental", min: "قضاوتی" },
  { part: 1, name: "(DOD) definition of done", min: "معیار پذیرش تحویل" },
  { part: 1, name: "(DOR) definition of ready", min: "معیار پذیرش شروع" },
  { part: 1, name: "tangeble", min: "محسوس" },
  { part: 1, name: "domain expert", min: "کارشناس دامنه" },
  { part: 1, name: "hint", min: "هشدار" },
  { part: 1, name: "paralel", min: "موازی" },
  { part: 1, name: "pipeline", min: "خط مشی" },
  { part: 1, name: "engagement", min: "تعامل" },
  { part: 1, name: "actual", min: "واقعی, حقیقی" },
  { part: 2, name: "area", min: "منطقه, ناحیه" },
  { part: 2, name: "margin", min: "حاشیه" },
  { part: 2, name: "approval", min: "موافقت رسمی تایید، اجازه" },
  { part: 2, name: "incident", min: "مصیبت ناگهانی-حادثه" },
  { part: 2, name: "introduction", min: "معرفی" },
  { part: 2, name: "Introducing", min: "معرفی" },
  { part: 2, name: "gather", min: "جمع آوری" },
  { part: 2, name: "infrastructure", min: "شالوده زیربنا، زیرساخت" },
  { part: 2, name: "hardware", min: "سخت‌افزار" },
  { part: 2, name: "problem space", min: "فضای مشکل" },
  { part: 2, name: "Adhoc", min: "متخصص، ویژه" },
  { part: 2, name: "helth system", min: "سیستم سلامت" },
  { part: 2, name: "ambeguit", min: "ابهام، نامعلومی" },
  { part: 2, name: "effort", min: "تقلا، تلاش، کوشش، سعی" },
  { part: 2, name: "complex", min: "پیچیده" },
  { part: 2, name: "on going", min: "در دست اقدام" },
  { part: 2, name: "trend", min: "روند جریان" },
  { part: 2, name: "partially done", min: "تا حدی انجام شده" },
  { part: 2, name: "ambiguity", min: "ابهام" },
  { part: 2, name: "align", min: "هماهنگ" },
  { part: 2, name: "improvement", min: "بهبود" },
  { part: 2, name: "technical debt", min: "بدهی فنی" },
  { part: 2, name: "release plan", min: "برنامه ریزی برای منتشر " },
  { part: 2, name: "approve", min: "تایید" },
  { part: 2, name: "root cause", min: "علت اصلی، ریشه" },
  { part: 3, name: "learn", min: "یاد گرفتن" },
  { part: 3, name: "own", min: "شخصی" },
  { part: 3, name: "cause resolution", min: "حل و فصل علت" },
  { part: 3, name: "reward", min: "جایزه دادن" },
  { part: 3, name: "KPI (Key Performance Indicator", min: "سنجیدن عملکرد" },
  {
    part: 3,
    name: "OKR (Objective & Key Results)",
    min: "اهداف و نتایج کلیدی",
  },
  { part: 3, name: "transform", min: "تبدیل کردن" },
  { part: 3, name: "transfer", min: "انتقال دادن" },
  { part: 3, name: "acceptance criteria", min: "ملاک پذیرش" },
  { part: 3, name: "side effects", min: "عوارض جانبی" },
  { part: 3, name: "unexpected", min: "غیر منتظره" },
  { part: 3, name: "Detecting", min: "شناسایی" },
  { part: 3, name: "concurrency", min: "همزمانی" },
  { part: 3, name: "glad", min: "خوشحال" },
  { part: 3, name: "mad", min: "عصبانی" },
  { part: 3, name: "sad", min: "ناراحتی" },
  { part: 3, name: "legacy", min: "میراث - باقی مانده" },
  { part: 3, name: "deprecated", min: "منسوخ شده" },
  { part: 3, name: "unsafe", min: "نا امن" },
  { part: 3, name: "solve", min: "حل کردن" },
  { part: 3, name: "reusable", min: "قابل استفاده مجدد" },
  { part: 3, name: "encapsulation", min: "کپسوله سازی" },
  { part: 3, name: "provide", min: "فراهم کردن" },
  { part: 3, name: "provided", min: "ارائه شده" },
  { part: 3, name: "strong", min: "قوی" },
  { part: 4, name: "declarative", min: "اخباری" },
  { part: 4, name: "keeps", min: "نگه داشتن" },
  { part: 4, name: "sync", min: "همگام سازی" },
  { part: 4, name: "goals", min: "اهداف" },
  { part: 4, name: "complementary", min: "مکمل" },
  { part: 4, name: "to use", min: "استفاده کردن" },
  { part: 4, name: "may", min: "ممکن است" },
  { part: 4, name: "especially", min: "بخصوص" },
  { part: 4, name: "third-party", min: "شخص ثالت" },
  { part: 4, name: "written", min: "قبلا نوشته شده است" },
  { part: 4, name: "imperative", min: "ضروری" },
  { part: 4, name: "expose", min: "در معرض گذاشتن" },
  { part: 4, name: "often", min: "غالبا" },
  { part: 4, name: "For instance", min: "برای مثال" },
  { part: 4, name: "might", min: "ممکن است" },
  { part: 4, name: "will need", min: "نیاز خواهید داشت" },
  { part: 4, name: "interact", min: "تعامل داشتن" },
  { part: 4, name: "directly", min: "به طور مستقیم" },
  { part: 4, name: "behaves", min: "رفتار میکند" },
  { part: 4, name: "wrapper", min: "بسته بندی" },
  { part: 4, name: "Events", min: "رویداد" },
  { part: 4, name: "emitted", min: "منتشر شده" },
  { part: 4, name: "properly", min: "به درستی" },
  { part: 4, name: "propagate", min: "تکثیر شدن" },
  { part: 4, name: "through", min: "از طریق" },
  { part: 5, name: "event handlers", min: "کنترل کننده های رویداد" },
  { part: 5, name: "common confusion", min: "اشتباه عمومی" },
  { part: 5, name: "instead of", min: "بجای" },
  { part: 5, name: "requirement", min: "مورد نیاز" },
  { part: 5, name: "functional requirement", min: "نیازمندی های عملیاتی" },
  { part: 5, name: "non-functional", min: "غیر عملیانی" },
  { part: 5, name: "pair programming", min: "برنامه نویسی دو نفده" },
  { part: 5, name: "Boundaries", min: "مرزها" },
  { part: 5, name: "Uncaught", min: "گرفتار نشدن - کشف نشده" },
  { part: 5, name: "Trace", min: "ردیابی" },
  { part: 5, name: "Stack", min: "پشته" },
  { part: 5, name: "throw", min: "پرتاب کردن" },
  { part: 5, name: "migration", min: "کوچ - محاجرت" },
  { part: 5, name: "scaffolding", min: "داربست" },
  { part: 5, name: "fundamentals", min: "مبانی-اصول" },
  { part: 5, name: "interviews", min: "مصاحبه" },
  { part: 5, name: "prepare", min: "آماده شدن" },
  { part: 5, name: "accessibility", min: "دسترسی" },
  { part: 5, name: "career", min: "حرفه-شغل" },
  { part: 5, name: "conclusion", min: "نتیجه گیری" },
].reverse();

_data.forEach((item, index) => {
  item["id"] = index + 1;
});

export { _data };