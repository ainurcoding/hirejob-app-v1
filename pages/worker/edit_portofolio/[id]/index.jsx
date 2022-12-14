import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
// styles
import styles from "../../../../styles/EditProfileWorker.module.css";
import gStyle from "../../../../styles/General.module.css";
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

  //   form portof initiation
  const [portof_img, setPortofImg] = useState();
  const [formPortof, setFormPortof] = useState({
    app_name: null,
    link_repo: null,
    portofolio_type: null,
  });

  // checked initiation
  let bool = null;

  const toggleCheckedPortofTypeMobile = () => {
    bool = true;
    if (bool === true) {
      setFormPortof({ ...formPortof, portofolio_type: "Mobile App" });
    }
  };

  const toggleCheckedPortofTypeWeb = () => {
    bool = false;
    if (bool === false) {
      setFormPortof({ ...formPortof, portofolio_type: "Website App" });
    }
  };

  const handleChangePortof = (e) => {
    setFormPortof({
      ...formPortof,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitPortof = (e) => {
    e.preventDefault();
    // console.log(dataPortof)
    // console.log(dataPortof.portofolio_id)
    console.log(portof_img)
      const body = {
        app_name: formPortof.app_name,
        link_repo: formPortof.link_repo,
        portofolio_type: formPortof.portofolio_type,
        portof_img: portof_img,
      };

      // return console.log(body);

      axios
        .put(
          `${process.env.APP_BACKEND_URL}/v1/portofolio/update_portofolio/${dataPortof.portofolio_id}`,
          body,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if(res.data.status == 'success'){
            alert('success update data')
            router.push(`/profile/person_detail/${dataPortof.user_id}`)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  };
  if (portof_img) {
    var src = URL.createObjectURL(portof_img);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
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
              <p className="h1">Edit portofolio: {dataPortof.app_name}</p>
            </div>
            <div className="title ms-3 mt-4">
              <p className={`h4 ${gStyle["open_sans_sb"]}`}>Portofolio</p>
            </div>
            <div className={`mt-2 mb-3 ${styles["line-black"]}`}></div>
            <div className="mx-3 mb-3 form-portofolio-wrapper">
              <form onSubmit={(e) => onSubmitPortof(e)}>
                <div className="mb-3">
                  <label
                    htmlFor="name_application"
                    className={`form-label ${styles["open_sans_sb"]}`}
                  >
                    Nama aplikasi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name_application"
                    placeholder="Masukkan nama aplikasi"
                    name="app_name"
                    defaultValue={dataPortof.app_name}
                    onChange={handleChangePortof}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="link_repository"
                    className={`form-label ${styles["open_sans_sb"]}`}
                  >
                    Link repository
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="link_repository"
                    placeholder="Masukkan link repository"
                    name="link_repo"
                    defaultValue={dataPortof.link_repo}
                    onChange={handleChangePortof}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className={`form-label ${styles["open_sans_sb"]}`}
                  >
                    Type portofolio saat ini: <span className="fw-bold">{dataPortof.portofolio_type}</span>
                  </label>
                </div>
                <div className="mx-3 mb-3 type-portofolio-wrapper row">
                  <div className="col-auto form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="portof_type"
                      id="portof_type_mobile"
                      onClick={toggleCheckedPortofTypeMobile}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="portof_type_mobile"
                    >
                      Aplikasi mobile
                    </label>
                  </div>
                  <div className="col-auto form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="portof_type"
                      id="portof_type_website"
                      onClick={toggleCheckedPortofTypeWeb}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="portof_type_website"
                    >
                      Aplikasi web
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor=""
                    className={`form-label ${styles["open_sans_sb"]}`}
                  >
                    Upload gambar
                  </label>
                </div>
                <div
                  className={`${styles["file-upload-wrapper"]} d-flex flex-column justify-content-center align-items-center gap-2`}
                >
                  <div className="review-upload-image mt-3 mb-3">
                    <Image
                      id="file-ip-1-preview"
                      alt="upload-preview"
                      src="preview after select foto"
                      style={{ height: "50px", width: "150px" }}
                      height={30}
                      width={150}
                    ></Image>
                  </div>
                  <div className="input-wrapper">
                    <input
                      type="file"
                      id="input-img-portofolio"
                      className="file-upload d-none"
                      data-height="500"
                      onChange={(e) => {
                        setPortofImg(e.target.files[0]);
                      }}
                    />
                    <label
                      htmlFor="input-img-portofolio"
                      className={`form-label ${styles["img-cursor"]} ${styles["open_sans_sb"]}`}
                    >
                      <Image src="/assets-img/vector edit profile.png" width={100 || 'auto'} height={100 || 'auto'} alt="tuslimson" ></Image>
                    </label>
                  </div>
                  <div className="desc  w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className={`${styles["open_sans_lt"]} h5`}>
                      Drag & Drop untuk upload Gambar Aplikasi anda
                    </p>
                    <p className={`${styles["open_sans_lt"]} h6`}>
                      Atau cari untuk mengupload file dari direktorimu
                    </p>
                  </div>
                </div>
                <div className={`mt-3 mb-3 ${styles["line-black"]}`}></div>
                <button
                  type="submit"
                  className={`btn ${styles["btn-white-border-yellow"]} ${gStyle["open_sans_sb"]} mb-3`}
                >
                  Update portofolio
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
