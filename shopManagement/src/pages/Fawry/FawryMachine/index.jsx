import { useState } from "react"
import { Link } from "react-router-dom"

const FawryMachine = () => {
  const [loading, setLoading] = useState(false)
  const fawryMachine = [
    {
      _id: 1,
      name: "VIP",
      price: 108725,
      home: 22,
      cardAndAir: 34,
      cashIn: 15,
      cashOut: 112458
    },
    { _id: 2, name: "العربي", price: 174584, home: 22, cardAndAir: 34, cashIn: 15, cashOut: 112458 },
    { _id: 3, name: "الفتح", price: 174784, home: 22, cardAndAir: 34, cashIn: 15, cashOut: 112458 },
    { _id: 4, name: "ايمان واكد", price: 115584, home: 22, cardAndAir: 34, cashIn: 15, cashOut: 112458 },
    { _id: 5, name: " امان", price: 174574, home: 22, cardAndAir: 34, cashIn: 15, cashOut: 112458 },
    { _id: 6, name: " كاش مصر", price: 176384, home: 22, cardAndAir: 34, cashIn: 15, cashOut: 112458 },
  ];

  return (
    <div className="dashboard d-flex flex-row">
      {
        // user.role != 'manager' &&
        <div className="loading"></div>
      }

      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'> ماكينات فوري </h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/elfath/fawry-machine/add-fawry-machine">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
          </Link>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">اسم الماكينة</th>
              <th scope="col">كاش اوت</th>
              <th scope="col">المجموع الكلى</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && fawryMachine?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.cashOut} جنية مصري </td>
                <td>{item?.price} جنية مصري </td>
                <td>
                  <Link
                    to={`/dash/elfath/fawry-machine/update-fawry-machine/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <Link
                    to={`/dash/elfath/fawry-machine/details-fawry-machine/${item._id}`}
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

export default FawryMachine