const date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, "0");
let day = String(date.getDate()).padStart(2, "0");

function today() {
  return `${year + month + day}`;
}
function lastDay() {
  if (day === "01") {
    day = "31";
    month = (parseInt(month) - 1).toString().padStart(2, "0");
  }

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

const info: {
  base_time: string[];
  base_date: string[];
  airPortCd: { [key: string]: string };
} = {
  base_time: ["0600", "1700"],
  base_date: [`${parseInt(today())}`, `${parseInt(lastDay())}`],
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
