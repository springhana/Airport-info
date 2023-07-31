import { fetchAirPort } from "./API/Airport";
import { useEffect, useState, useRef } from "react";
import AirportItem from "./components/AirportItem";
import { useLocation } from "react-router-dom";
import info from "./searchInfo";
import { airportType } from "./types";
function Home() {
  const [airport, setAirport] = useState<airportType>();
  console.log(airport);
  const [loading, setLoading] = useState(false);
  const div: any = useRef();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const time: string =
    searchParams.get("time") === null
      ? "0600"
      : (searchParams.get("time")?.trim() as string);
  const date: string =
    searchParams.get("date") === null
      ? (info.base_date[1] as string)
      : (searchParams.get("date")?.trim() as string);
  const CD: string =
    searchParams.get("CD") === null
      ? "RKSI"
      : (searchParams.get("CD")?.trim() as string);
  const [baseTime, setBaseTIme] = useState<string>(time);
  const [baseDate, setBaseDate] = useState<string>(date);
  const [airPortCd, setAirPortCd] = useState<string>(CD);

  useEffect(() => {
    if (time !== null && date !== null && CD !== null) {
      setBaseTIme(time);
      setBaseDate(date);
      setAirPortCd(CD);
    }

    const fetchData = async (
      baseTime: string,
      baseDate: string,
      airPortCd: string
    ) => {
      const data = await fetchAirPort(baseTime, baseDate, airPortCd);
      setAirport(data);
      setLoading(true);
    };

    fetchData(baseTime, baseDate, airPortCd);

    if (airport) {
      div.current.style.display = "none";
      setTimeout(() => {
        div.current.style.display = "block";
      }, 2000);
    }
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
