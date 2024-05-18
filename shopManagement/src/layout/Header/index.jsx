import { useState } from "react";
import { Link } from "react-router-dom";
import { FcDebt, FcMoneyTransfer } from "react-icons/fc";
import { IoMdCash } from "react-icons/io";
import { FaCcMastercard } from "react-icons/fa";
import { MdAtm } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { PiHandCoinsBold } from "react-icons/pi";
import './header.css'
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div
      className={`sidebar-div ${sidebarOpen ? "sidebar-open" : "sidebar-close"
        }`}
    >
      <div>
        <Link to="/dash/elfath/ ">
          <AiFillHome color=""  /> <p className="fw-bold text-start">الرئيسية</p>
        </Link>
        <Link to="/dash/elfath/fawry-machine">
          <MdAtm color=""  size={30} /> <p className="fw-bold text-start">ماكينة فوري</p>
        </Link>
        <Link to="/dash/elfath/cash-wallet">
          <IoMdCash color=""  /> <p className="fw-bold text-start">محافظ كاش</p>
        </Link>
        <Link to="/dash/elfath/instaPay">
          <FcMoneyTransfer color=""  /> <p className="fw-bold text-start">انيستا باى</p>
        </Link>
        <Link to="/dash/elfath/yellow-card">
          <FaCcMastercard color=""  /> <p className="fw-bold text-start">كروت صفراء</p>
        </Link>
        <Link to="/dash/elfath/our-debt">
          <FcDebt color=""  /> <p className="fw-bold text-start">مديونة لينا </p>
        </Link>
        <Link to="/dash/elfath/debt-owed-by-us">
          <PiHandCoinsBold color=""  /> <p className="fw-bold text-start">مديونية علينا  </p>
        </Link>
      </div>
      <div
        style={{ padding: "8px" }}
        onClick={() => setSidebarOpen((pre) => !pre)}
      >
        <GiHamburgerMenu color=""  />
      </div>
    </div>
  )
}

export default Header
