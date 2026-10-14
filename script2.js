// ၁။ စာလုံးနဲ့ အဓိပ္ပာယ် စာရင်းကို Array ထဲမှာ သိမ်းခြင်း
let vocabList = [
  { word: "Make a Mistake", meaning: "လက်ခံအသိအမှတ်ပြုသည်" },
  { word: "Make a decision", meaning: "ထောက်ခံအားပေးသည်" },
  { word: "Make a Money", meaning: "ပူးတွဲတည်ထောင်သည်" }
];

// ၂။ TableElement ကို ယူခြင်း
let myTable = document.querySelector("table");
myTable.style.color = "red";
myTable.style.fontSize = "16px";

// ၃။ Table Header သတ်မှတ်ခြင်း
let tableHTML = `
  <tr>
    <th>Word</th>
    <th>Meaning</th>
  </tr>
`;

// ၄။ Array ထဲက စာလုံးတွေကို Loop ပတ်ပြီး Table တန်းလေးတွေ အလိုအလျောက် ဘာသာပြန်ထည့်ပေးခြင်း
vocabList.forEach(item => {
  tableHTML += `
    <tr>
      <td>${item.word}</td>
      <td>${item.meaning}</td>
    </tr>
  `;
});

// ၅။ ရလာတဲ့ HTML ကို Table ထဲ ထည့်လိုက်ခြင်း
myTable.innerHTML = tableHTML;
