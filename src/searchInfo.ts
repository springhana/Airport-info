const date = new Date();

function day() {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year + month + day}`;
}

// function time() {
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const nowTime = hours + minutes;
//   const base_date = [];
//   if (parseInt(nowTime) < 600) {
//     base_date.push("0600");
//     base_date.push("1700");
//   }
//   return base_date;
// }

const nowDay = day();

const info = {
  base_time: ["0600", "1700"],
  base_date: [parseInt(nowDay) - 1, parseInt(nowDay)],
  airPortCd: {
    인천국제공항: "RKSI",
    김포국제공항: "RKSS",
    제주국제공항: "RKPC",
    // 광주공항: "RKJJ",
    // 대구국제공항: "RKTN",
    // 청주국제공항: "RKTU",
    무안국제공항: "RKJB",
    양양국제공항: "RKNY",
    // 김해국제공항: "RKPK",
    울산국제공항: "RKPU",
  },
};
export default info;
