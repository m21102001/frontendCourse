import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


const UpdateOurDebt = () => {
  const navigate = useNavigate();
  const item =useLocation()?.state?.item
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(item?.name)
  const [value, setValue] = useState(item?.value)
  const [note, setNote] = useState(item?.notes)
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>تعديل بيانات  المديون </h2>
        </div>
        <form
          // onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input1"
              className="form-label"
            >تعديل اسم المديون</label>
            <input
              name="input1"
              type="text"
              className="form-control"
              id="input1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='تعديل اسم المديون *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            >قيمة الدين</label>
            <input
              name="input2"
              type="number"
              className="form-control"
              id="input2"
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder=' تعديل قيمة الدين*'
            />
          </div>
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            >تعديل الملاحظات</label>
            <textarea
              name="input2"
              type="text"
              className="form-control"
              id="input2"
              required
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder='تعديل الملاحظة*'
            />
          </div>
          {!loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              تعديل
            </button>
          )}
          {loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/elfath/our-debt`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateOurDebt