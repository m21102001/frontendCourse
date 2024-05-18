import { MdOutlineArrowBack } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const DetailsYellowCard = () => {
  const item = useLocation()?.state?.item
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>تفاصيل صاحب الكارت الاصفر  </h2>
        </div>
        <Link to={'/dash/elfath/yellow-card'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">اسم صاحب الكارت الاصفر </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الكارت</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.accNum}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف المربوط بالكارت </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.number}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الرصيد المتاح ف الكارت</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.balance}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الليمت الشهري</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.limitMonth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailsYellowCard