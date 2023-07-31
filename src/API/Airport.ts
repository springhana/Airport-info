import axios from "axios";

async function request(url: string) {
  try {
    const response = await axios.get(url);
    console.log(response.data.response.body);
    return response.data.response.body;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchAirPort(
  baseTime: string,
  baseDate: string,
  airPortCd: string
) {
  try {
    // console.log(
    //   `${process.env.REACT_APP_END_POINT}?serviceKey=${process.env.REACT_APP_SERVICE_KEY}&numOfRows=10&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&airPortCd=${airPortCd}`
    // );
    const responseData = await request(
      `${process.env.REACT_APP_END_POINT}?serviceKey=${process.env.REACT_APP_SERVICE_KEY}&numOfRows=10&pageNo=1&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&airPortCd=${airPortCd}`
    );
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
}
