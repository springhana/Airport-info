import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "../Home";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Check from "../Check";

function NavBar() {
  const img: any = useRef();
  const passImg: any = useRef();
  const location = useLocation();
  const currentUrl = location.pathname;
  useEffect(() => {
    let tl = gsap.timeline(); //순서대로 gsap 사용하기
    tl.from(img.current, {
      x: -1000, //y -150인 곳에서부터 시작
      duration: 1,
    });
    tl.to(img.current, {
      x: 0,
      duration: 1,
      ease: "bounce.out",
    });
    tl.to(img.current, {
      scale: 1, //다시 scale이 1로 줄어듦(원래 크기로)
      autoAlpha: 0,
    });

    if (currentUrl === "/check") {
      passImg.current.style.display = "none";
    } else {
      passImg.current.style.display = "block";
    }
  }, [currentUrl]);
  return (
    <div className="navBar">
      <div className="item-img" ref={passImg}>
        <Link to="/check">
          <img src="img/travel-pass.png" alt="pass" />
        </Link>
      </div>
      <img
        src="img/airport.png"
        alt="airport"
        ref={img}
        className="airport_img"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Check />} />
      </Routes>
    </div>
  );
}
export default NavBar;
