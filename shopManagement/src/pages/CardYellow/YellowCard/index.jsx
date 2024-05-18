import { useState } from "react"
import { Link } from "react-router-dom"

const YellowCard = () => {
  const [loading, setLoading] = useState(false)
  const cashVoda = [
    {
      _id: 1,
      name: "مكتب رقم 1",
      number: '01011497266',
      accNum: '4954 2665 1487 3456',
      balance: '30000',
      limitMonth: '100000'
    },
    {
      _id: 2,
      name: "مكتب رقم 2",
      number: '01015787266',
      accNum: '4954 2665 1487 3456',
      balance: '2000',
      limitMonth: '100000'
    },
    {
      _id: 3,
      name: "مكتب رقم 3",
      number: '01034597266',
      accNum: '4954 2665 1487 3456',
      balance: '34000',
      limitMonth: '100000'
    },
  ];

  return (
    <div className="dashboard d-flex flex-row">
      {
        // user.role != 'manager' &&
        <div className="loading"></div>
      }

      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'> الكارت الاصفر (Yellow Card)</h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/elfath/yellow-card/add-yellow-card">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة كارت جديد</button>
          </Link>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">اسم صاحب الحساب البنكى</th>
              <th scope="col">رقم الحساب البنكى</th>
              <th scope="col">رقم الهاتف</th>
              <th scope="col">المجموع الكلى</th>
              <th scope="col">الحد الشهري (200,000)</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && cashVoda?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.accNum}</td>
                <td>{item?.number}</td>
                <td>{item?.balance} جنية </td>
                <td>{item?.limitMonth} جنية</td>
                <td>
                  <Link
                    to={`/dash/elfath/yellow-card/update-yellow-card/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <Link
                    to={`/dash/elfath/yellow-card/details-yellow-card/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                  </Link>
                  <button
                    // onClick={() => handelDelete(item._id)}
                    className="btn btn-outline-danger mx-2 px-4"
                  >حذف</button>

                </td>
              </tr>
            ))}

          </tbody>
        </table>
        {/* {user.role != 'manager' ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        } */}
      </div>
    </div>
  )
}

export default YellowCard