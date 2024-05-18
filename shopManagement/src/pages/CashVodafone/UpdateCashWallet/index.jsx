import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


const UpdateCashWallet = () => {
  const navigate = useNavigate();
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(item.name)
  const [number, setNumber] = useState(item.number)
  const [limit, setLimit] = useState(item?.limitMonth)
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await axios
        .put(
          `http://localhost:3000/wallet/${item?.id}`,
          {
            name: name,
            number: number,
            limitMonth: limit,
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          setLoading(false)
          console.log('created success', response.data);
          alert('تم التعديل بنجاح')
          navigate('/dash/elfath/cash-wallet')
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('response', err);
    }
  }




  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>تعديل فى بيانات محفظة فودافون كاش</h2>
        </div>
        <form
          onSubmit={handelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input1"
              className="form-label"
            >تعديل اسم المحفظة</label>
            <input
              name="input1"
              type="text"
              className="form-control"
              id="input1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='عدل اسم المحفظة *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            > تعديل رقم الهاتف</label>
            <input
              name="input2"
              type="text"
              className="form-control"
              id="input2"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder='تعديل رقم الهاتف *'
            />
          </div>

          <div className="col-12 text-end fw-bold fs-5 mb-4">
            <label
              htmlFor="input2"
              className="form-label"
            > اضافة ليميت شهري </label>
            <input
              name="input2"
              type="number"
              className="form-control"
              id="input2"
              required
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
              placeholder='اكتب الليميت الشهري للمحفظة *'
            />
          </div>

          {!loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة رقم جديد
            </button>
          )}
          {loading && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/elfath/cash-wallet`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateCashWallet