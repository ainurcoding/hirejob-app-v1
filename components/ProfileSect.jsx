import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Portofolio.module.css";
import Image from "next/image";
// axios
import axios from "axios";

const Portofolio = (user_id) => {
  const [dataPortof, setDataPortof] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(dataLocal)
  const [idLocal, setIdLocal] = useState();
  // console.log(idLocal);
  useEffect(() => {
    setIsLoading(true);
    const dataLocal = JSON.parse(localStorage.getItem("data"));
    // console.log(dataLocal)
    setIdLocal(dataLocal.user_id);
    axios
      .get(
        `${process.env.APP_BACKEND_URL}/v1/portofolio/show_by_user_id/${user_id.user_id}`
      )
      .then((res) => {
        // console.log('data portof', res.data.status)
        if (res.data.status == "success") {
          setDataPortof(res.data.data);
        } else {
          console.log("data not found / error");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    setIsLoading(false);
    // console.log(dataPortof);
  }, [user_id]);

  const onDelete = (portof_id) => {
    axios
      .delete(
        `${process.env.APP_BACKEND_URL}/v1/portofolio/delete_portofolio/${portof_id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "success") {
          alert(`success delete portofolio  with id: ${portof_id}`);
          return window.location.reload();
        }
      });
  };
  if(!dataPortof) {
    return (<>No data portofolio</>)
  }
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div className="portofolio-kontent row gap-2">
          {dataPortof.map((item, index) => (
            <div key={index} className="card-wrapper col-3 d-flex flex-column">
              <div className={`${styles["img-wrapper"]}`}>
                <Image
                  src={item.portof_img_url}
                  height={150}
                  width={150}
                  layout="fill"
                  alt="foto of portofolio"
                  priority
                ></Image>
              </div>
              <div className="desc d-flex justify-content-center">
                <p className={`${styles["open_sans_sb"]}`}>{item.app_name}</p>
              </div>
              {idLocal == user_id.user_id ? (
                <>
                  <div className="button-wrapper d-flex justify-content-center gap-2">
                    <Link
                      href={`/worker/detail_portofolio/${item.portofolio_id}`}
                      className="btn for-detail"
                    >
                      <i
                        className="bi bi-arrow-up-right-square-fill"
                        style={{ color: "#5d50a1" }}
                      ></i>
                    </Link>
                    <Link
                      href={`/worker/edit_portofolio/${item.portofolio_id}`}
                      className="btn for-update"
                    >
                      <i
                        className="bi bi-pencil-square"
                        style={{ color: "#ffc247" }}
                      ></i>
                    </Link>
                    <button
                      className="btn for-delete"
                      onClick={() => {
                        const confirmBox = window.confirm(
                          "are u sure to delete this data ?"
                        );

                        if (confirmBox === true) {
                          onDelete(item.portofolio_id);
                        }
                      }}
                    >
                      <i
                        className="bi bi-trash-fill"
                        style={{ color: "#fc0f03" }}
                      ></i>
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const WorkExp = (user_id) => {
  const [dataWorkExp, setDataWorkExp] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idLocal, setIdLocal] = useState();
  useEffect(() => {
    setIsLoading(true);
    const dataLocal = JSON.parse(localStorage.getItem("data"));
    // console.log(dataLocal)
    setIdLocal(dataLocal.user_id);
    axios
      .get(
        `${process.env.APP_BACKEND_URL}/v1/workexp/show_by_user_id/${user_id.user_id}`
      )
      .then((res) => {
        console.log(res.data.data);
        setDataWorkExp(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user_id]);

  const onDelete = (workexp_id) => {
    axios
      .delete(
        `${process.env.APP_BACKEND_URL}/v1/workexp/delete_workexp/${workexp_id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status == "success") {
          alert(`success delete workexp  with id: ${workexp_id}`);
          return window.location.reload();
        }
      });
  };

  if (!dataWorkExp) {
    return <div>No Data Work Experience</div>;
  }
  return (
    <>
      {dataWorkExp.map((item, index) => (
        <div key={index} className="WorkExp-kontent row gap-2">
          <div className="ms-3 col-2 wrapper-img">
            <Image
              src="/assets-img/work-exp-icon.png"
              width={125}
              height={125}
              alt="tokopedia logo"
              className={`${styles["img-we-size"]}`}
            ></Image>
          </div>
          <div className="col-7 wrapper-img ">
            <div className="title-job">
              <p className={`${styles["open_sans_sb"]} h5`}>{item.position}</p>
            </div>
            <div className="company-job">
              <p className={`${styles["open_sans_lt"]} h6`}>
                {item.company_name}
              </p>
            </div>
            <div className="work-duration">
              <p className={`${styles["open_sans_lt"]} text-muted h6`}>
                {item.month_year}
              </p>
            </div>
            <div className="work-desc">
              <p className={`${styles["open_sans_lt"]} h6`}>
                {" "}
                {item.description}{" "}
              </p>
            </div>
          </div>
          {idLocal == user_id.user_id ? (
            <>
              <div className="col-2 wrapper-button">
                <button
                  className="btn"
                  style={{ background: "#fc0f03", color: "white" }}
                  onClick={() => {
                    const confirmBox = window.confirm(
                      "are u sure to delete this data ?"
                    );

                    if (confirmBox === true) {
                      onDelete(item.work_exp_id);
                    }
                  }}
                >
                  delete
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </>
  );
};

export { Portofolio, WorkExp };
