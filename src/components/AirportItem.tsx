import { airportType, itemType } from "../types";
function AirportItem({ airport }: { airport: airportType | undefined }) {
  return (
    <div className="item">
      {airport
        ? airport.items.item.map((data: itemType, index: number) => (
            <div key={index}>
              <div className="title">
                <p>{data.title}</p>
                <p>{data.expiry_date}</p>
              </div>
              <div className="date">
                <p>
                  <span>측정 시간 : </span>
                  {data.tm}
                </p>
              </div>

              <div className="detail">
                <div>{data.forecast}</div>
                <div>{data.outlook}</div>
              </div>

              <div className="sel_val">
                <span>강수량 : </span>
                <span>{data.sel_val1}</span>
                <span>{data.sel_val2}</span>
                <span>{data.sel_val3}</span>
              </div>

              <div className="summary">
                <p>{data.summary}</p>
              </div>

              <div className="warn">주의 : {data.warn}</div>
            </div>
          ))
        : null}
    </div>
  );
}

export default AirportItem;
