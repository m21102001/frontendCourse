import { MdOutlineArrowBack } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const DetailsNewFawryMachine = () => {
  const item = useLocation()?.state?.item
  return (
    <div className="dashboard d-flex flex-row">
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>تفاصيل حسابات الماكينة</h2>
        </div>
        <Link to={'/dash/elfath/fawry-machine'} className='mb-3 d-flex flex-row-reverse'>
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
                        <p className="mb-0">اسم الماكينة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">مجموع حسابات الماكينة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.price}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الرئيسي </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.home}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">كارت و هوا</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.cardAndAir}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">كاش ان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.cashIn}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">كاش اوت ومشتريات </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{item?.cashOut}</p>
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

export default DetailsNewFawryMachine