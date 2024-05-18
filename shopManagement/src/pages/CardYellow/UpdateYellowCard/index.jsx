import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


const UpdateYellowCard = () => {
  const navigate = useNavigate();
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(item.name)
  const [number, setNumber] = useState(item.number)
  const [limit, setLimit] = useState(item?.limitMonth)
  const [accNum, setAccNum] = useState(item?.accNum)
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>تعديل فى بيانات الكارت الاصفر</h2>
        </div>
        <form
          // onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input1"
              className="form-label"
            >تعديل اسم صاحب الكارت  </label>
            <input
              name="input1"
              type="text"
              className="form-control"
              id="input1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='عدل اسم صاحب الكارت *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
              >تعديل رقم الكارت</label>
            <input
              name="input2"
              type="text"
              className="form-control"
              id="input2"
              required
              value={accNum}
              onChange={(e) => setAccNum(e.target.value)}
              placeholder='تعديل رقم الكارت*'
            />
          </div>
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            >تعديل رقم الهاتف المربوط بالكارت</label>
            <input
              name="input2"
              type="text"
              className="form-control"
              id="input2"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='تعديل رقم الهاتف المربوط بالكارت *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            > تعديل ليميت شهري </label>
            <input
              name="input2"
              type="number"
              className="form-control"
              id="input2"
              required
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder='اكتب الليميت الشهري للكارت الاصفر *'
            />
          </div>

          {!loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
            تعديل بيانات
            </button>
          )}
          {loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/elfath/yellow-card`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateYellowCard