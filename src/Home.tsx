import { fetchAirPort } from "./API/Airport";
import { useEffect, useState, useRef } from "react";
import AirportItem from "./components/AirportItem";
import { useLocation } from "react-router-dom";
import info from "./searchInfo";
function Home() {
  const [airport, setAirport] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const div: any = useRef();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const time =
    searchParams.get("time") === null
      ? "0600"
      : searchParams.get("time")?.trim();
  const date =
    searchParams.get("date") === null
      ? info.base_date[0]
      : searchParams.get("date")?.trim();
  const CD =
    searchParams.get("CD") === null ? "RKSI" : searchParams.get("CD")?.trim();
  const [baseTime, setBaseTIme] = useState<any>(time);
  const [baseDate, setBaseDate] = useState<any>(date);
  const [airPortCd, setAirPortCd] = useState<any>(CD);

  useEffect(() => {
    if (time !== null && date !== null && CD !== null) {
      setBaseTIme(time);
      setBaseDate(date);
      setAirPortCd(CD);
    }

    const fetchData = async (baseTime: any, baseDate: any, airPortCd: any) => {
      const data = await fetchAirPort(baseTime, baseDate, airPortCd);
      setAirport(data);
      setLoading(true);
    };

    fetchData(baseTime, baseDate, airPortCd);

    div.current.style.display = "none";
    setTimeout(() => {
      div.current.style.display = "block";
    }, 2000);
  }, [baseTime, baseDate, airPortCd]);

  return (
    <div>
      <div className="airport_container" ref={div}>
        {loading ? <AirportItem airport={airport} /> : <div>Loading...</div>}
      </div>
    </div>
  );
}
export default Home;
