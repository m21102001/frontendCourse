
import { useState } from "react"
import { Link } from "react-router-dom"

const Debt = () => {
  const [loading, setLoading] = useState(false)
  const cashVoda = [
    {
      _id: 1,
      name: " محمد احمد ",
      value: '100000',
      notes: 'له كاش ب 2500 رقم تليفونه 01011497266',
    },
    {
      _id: 2,
      name: "احمد الخولى  ",
      value: '100000',
      notes: 'له 5000 فودافون كاش وشيل العموله منهم ',
    },
    {
      _id: 3,
      name: "احمد العربي  ",
      value: '100000',
      notes: 'بدون ملاحظات',
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
          <h2 className='fs-1 fw-bold text-dark'>مديونية على مكتب الفتح</h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/elfath/debt-owed-by-us/add-new-debt-owed-by-us">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
          </Link>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">اسم الداين</th>
              <th scope="col">القيمة</th>
              <th scope="col">ملاحظات</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && cashVoda?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.value} جنية</td>
                <td>{item?.notes}</td>
                <td>
                  <Link
                    to={`/dash/elfath/debt-owed-by-us/update-debt-owed-by-us/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
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

export default Debt