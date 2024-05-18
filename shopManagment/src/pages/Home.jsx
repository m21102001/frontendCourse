import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [posts, setPosts] = useState([])
  let [profile, setProfile] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPosts(response.data)
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then(response => {
        setProfile(response.data)
      })
  }, [])

  console.log('posts', posts);
  console.log('profile', profile);
  return (
    <div className="dashboard d-flex flex-row">
      {
        // user.role != 'manager' &&
        <div className="loading"></div>
      }

      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold text-dark'>الصفحه الرئيسية   </h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/dashboard/create-new-item">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
          </Link>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">العنوان</th>
              <th scope="col">المشاهدات</th>
              <th scope="col" colSpan={2}>الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td>{item?.views}</td>
                <td colSpan="2">
                  <Link
                    to={`/dash/dashboard/detalis/${item?.id}`}
                    state={{ item }}
                  >
                    <button className='btn btn-outline-info'>details</button>
                  </Link>
                  <button className='btn btn-outline-primary'>edit</button>
                  <button className='btn btn-outline-danger'>delete</button>

                </td>
                {/* <td>
                  <Link
                    to={`/dash/elfath/debt-owed-by-us/update-debt-owed-by-us/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-outline-danger mx-2 px-4"
                  >حذف</button>

                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default Home