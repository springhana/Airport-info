import info from "./searchInfo";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
function Check() {
  const about: any = useRef();
  const [time, setTime] = useState("0600");
  const [date, setDate] = useState(info.base_date[1]);
  const [CD, setCD] = useState("RKSI");
  const [CDcode, setCDcode] = useState("인천국제공항");

  const About = () => {
    let visibility = about.current.style.visibility;
    if (visibility === "visible") {
      about.current.style.visibility = "hidden";
    } else {
      about.current.style.visibility = "visible";
    }
  };

  return (
    <div className="info_container">
      <div className="homeGo">
        <Link to="/" className="Link">
          Home
        </Link>
      </div>

      <div className="check_time">
        <p>시간:</p>
        {info.base_time.map((basetime, index: number) => (
          <div
            key={index}
            onClick={(e: any) => {
              setTime(e.target.textContent);
            }}
          >
            {basetime}시
          </div>
        ))}
        <div className="time_about" onClick={About}>
          ?
        </div>
      </div>

      <div className="explanation" ref={about}>
        <div className="closs" onClick={About}>
          X
        </div>
        <span>
          오늘 날짜로 검색하실 경우 17시가 넘었을 경우에만 17시를 선택해주세요
        </span>
      </div>

      <div className="check_date">
        <p>날짜:</p>
        {info.base_date.map((basedate, index: number) => (
          <div
            key={index}
            onClick={(e: any) => {
              setDate(e.target.textContent);
            }}
          >
            {basedate}
          </div>
        ))}
      </div>

      <div className="airPortCd">
        <p>공항:</p>
        <div className="airPortCd_inner">
          {Object.entries(info.airPortCd).map(([airportName, airportCode]) => (
            <li
              key={airportCode}
              onClick={(e: any) => {
                setCD(airportCode);
                setCDcode(e.target.textContent);
              }}
            >
              {airportName}
            </li>
          ))}
        </div>
      </div>

      <div className="search">
        <div className="search_btn">
          <Link
            to={`/?time=${encodeURIComponent(time)}
                  &date=${encodeURIComponent(date)}
                  &CD=${encodeURIComponent(CD)}`}
            className="Link"
          >
            검색
          </Link>
        </div>
        <div className="search_info">
          ( {time ? time : "시간"} {date ? "," : null} {date ? date : "날짜"}
          {CDcode ? "," : null} {CDcode ? CDcode : "공항"} )
        </div>
      </div>
    </div>
  );
}

export default Check;
