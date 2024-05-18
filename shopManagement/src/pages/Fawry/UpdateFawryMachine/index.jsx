import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


const UpdateFawryMachine = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(item?.name)
  const [home, setHome] = useState(item?.home)
  const [cardAndAir, setCardAndAir] = useState(item?.cardAndAir)
  const [cashIn, setCashIn] = useState(item?.cashIn)
  const [cashOut, setCashOut] = useState(item?.cashOut);
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>تعديل بيانات الماكينة</h2>
        </div>
        <form
          // onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input1"
              className="form-label"
            >اسم الماكينة</label>
            <input
              name="input1"
              type="text"
              className="form-control fs-4"
              id="input1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='ادخل اسم الماكينة *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            > الرئيسي</label>
            <input
              name="input2"
              type="number"
              className="form-control fs-4"
              id="input2"
              required
              value={home}
              onChange={(e) => setHome(e.target.value)}
              placeholder='القيمة الموجودة فى الحساب الرئيسي *'
            />
          </div>
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input3"
              className="form-label"
            > كارت و هوا</label>
            <input
              name="input3"
              type="number"
              className="form-control fs-4"
              id="input3"
              required
              value={cardAndAir}
              onChange={(e) => setCardAndAir(e.target.value)}
              placeholder='القيمة الموجودة فى كارت و هوا *'
            />
          </div>
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input4"
              className="form-label"
            > كاش ان</label>
            <input
              name="input4"
              type="number"
              className="form-control fs-4"
              id="input4"
              required
              value={cashIn}
              onChange={(e) => setCashIn(e.target.value)}
              placeholder='القيمة الموجودة فى الكاش ان *'
            />
          </div>
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input5"
              className="form-label"
            > كاش اوت ومشتريات</label>
            <input
              name="input5"
              type="number"
              className="form-control fs-4"
              id="input5"
              required
              value={cashOut}
              onChange={(e) => setCashOut(e.target.value)}
              placeholder='القيمة الموجودة فى الكاش اوت ومشتريات *'
            />
          </div>


          {!loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              تعديل بيانات الماكينة  
            </button>
          )}
          {loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/elfath/fawry-machine`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateFawryMachine