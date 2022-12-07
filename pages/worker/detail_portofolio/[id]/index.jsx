import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

Index.layout = "L2";
export default function Index() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [dataPortof, setDataPortof] = useState([]);

  useEffect(() => {
    // console.log(id)
    setLoading(true);
    axios
      .get(
        `${process.env.APP_BACKEND_URL}/v1/portofolio/detail/show_by_id/${id}`
      )
      .then((res) => {
        console.log(res.data);

        if (res.data.status == "success") {
          setDataPortof(res.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(id);
  }, [id]);
  return (
    <>
      {loading ? (
        <div className="vw-100 vh-100 d-flex justify-content-cente align-items-center">
          Loading...
        </div>
      ) : (
        <div className="vw-100 vh-80 mb-5">
          <div className="wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="title mt-3 mb-3">
              <p className="h1">{dataPortof.app_name}</p>
            </div>
            <div className="wrapper-main-content w-100 row">
              <div className="col-3 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 d-flex justify-content-center ">
                <div className="img-wrapper">
                  <Image
                    src={dataPortof.portof_img_url}
                    height={300}
                    width={300}
                    alt="dummy-img"
                  ></Image>
                </div>
              </div>
              <div className="col-9 col-xs-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9">
                <div className="wrapper m-5">
                  <div className="app_name">
                    <p>
                      <span className="fw-bold">Application Name</span>{" "}
                      {dataPortof.app_name}
                    </p>
                  </div>
                  <div className="Link Repo">
                    <p>
                      <span className="fw-bold">Link Repository</span>{" "}
                      {dataPortof.link_repo}
                    </p>
                  </div>
                  <div className="portofolio-type">
                    <p>
                      <span className="fw-bold">Portofolio Type</span>{" "}
                      {dataPortof.portofolio_type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
