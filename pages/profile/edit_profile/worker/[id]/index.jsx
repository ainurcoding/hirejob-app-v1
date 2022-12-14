import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../../../styles/EditProfileWorker.module.css";
import gStyle from "../../../../../styles/General.module.css";
import SpaceEmpty from "../../../../../components/SpaceEmpty";
import upImg from "../../../../../styles/UploadImg.module.css";
import { useRouter } from "next/router";
import axios from "axios";

Index.layout = "L2";
export default function Index() {
  const [isLoading, setLoading] = useState(false);
  const hiddenFileInput = useRef(null);
  const [avatar, setAvatar] = useState("");
  const [dataUser, setDataUser] = useState([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.APP_BACKEND_URL}/v1/user/recruiter/show_by_id/${id}`)
      .then((res) => {
        // console.log(res.data.data)

        setDataUser(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  // console.log(dataUser);

  //   ava handle
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const changeHandle = (e) => {
    const fileUploaded = e.target.files[0];
    document.getElementById("photoBtn").innerHTML = fileUploaded.name;
    setAvatar(fileUploaded);
  };

  const avatarUpdate = (e) => {
    const fileUploaded = e.target.files[0];
    document.getElementById("formFIle").innerHTML = fileUploaded.name;
    setAvatar(fileUploaded);
  };

  const avaHandle = (e) => {
    console.log(avatar);
    e.preventDefault();
    let formData = new FormData(e.target);
    formData.append("avatar", avatar);
    postHandle(Object.fromEntries(formData));
  };

  const postHandle = (form) => {
    console.log(avatar);
    console.log(typeof id);
    axios
      .put(
        `${process.env.APP_BACKEND_URL}/v1/user/update_ava_cloudinary/${id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("Avatar has been updated");
        setAvatar("");
        router.push(`/profile/person_detail/${id}`);
      })
      .catch((err) => {
        console.log(avatar);
        console.log(err);
        alert("failed to update avatar");
      });
  };

  // use state form personal data
  const [formPD, setFormPD] = useState({
    full_name: "",
    job_spec: "",
    job_type: "",
    ig_account: "",
    git_account: "",
    gitlab_account: "",
    domisli: "",
    work_place: "",
    personal_desc: "",
  });

  const handleChangePD = (e) => {
    setFormPD({
      ...formPD,
      [e.target.name]: e.target.value,
    });
  };

  const formPDHandle = (e) => {
    e.preventDefault();
    console.log(formPD);
    const body = {
      full_name: formPD.full_name,
      job_spec: formPD.job_spec,
      job_type: formPD.job_type,
      ig_account: formPD.ig_account,
      git_account: formPD.git_account,
      gitlab_account: formPD.gitlab_account,
      domisli: formPD.domisli,
      work_place: formPD.work_place,
      personal_desc: formPD.personal_desc,
    };
    console.log(body);
    axios
      .put(
        `${process.env.APP_BACKEND_URL}/v1/user/update_worker_data/${id}`,
        body
      )
      .then((res) => {
        console.log(res.data);
        console.log(res.data.status);
        if (res.data.status == "success") {
          alert("data update personal data success");
          return window.location.reload();
          // router.push(`/profile/person_detail/${id}`);
        } else {
          alert("data update personal data failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // end of use state form personal datadata

  // state skill form data
  const [formSkill, setFormSkill] = useState({
    name_skill: "",
  });

  const handleChangeSkill = (e) => {
    setFormSkill({
      ...formSkill,
      [e.target.name]: e.target.value,
    });
  };

  const formSkillHandle = (e) => {
    e.preventDefault();
    console.log(formSkill);
    const body = {
      name_skill: formSkill.name_skill,
    };
    console.log(body);
    axios
      .post(`${process.env.APP_BACKEND_URL}/v1/skill/insert_skill/${id}`, body)
      .then((res) => {
        console.log(res)
        // console.log(res.data);
        console.log(res.data.status);
        if(res.data.status == 'success') {
          alert("add data skill success");
          router.push(`/profile/person_detail/${id}`);
        } else {
          alert("add data skill failed");
        }
        
        
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // end of state skill data

  // state work exp data
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  const [dateNow, setDateNow] = useState(today);
  // console.log(dateNow)

  const [formWorkExp, setFormWorkExp] = useState({
    position: "",
    company_name: "",
    month_year1: "",
    month_year2: "",
    description: "",
  });

  const handleChangeWorkExp = (e) => {
    setFormWorkExp({
      ...formWorkExp,
      [e.target.name]: e.target.value,
    });
  };

  const formWorkExpHandle = (e) => {
    e.preventDefault();
    console.log(formWorkExp);
    const body = {
      position: formWorkExp.position,
      company_name: formWorkExp.company_name,
      month_year: `${formWorkExp.month_year1} s/d ${formWorkExp.month_year2}`,
      description: formWorkExp.description,
    };
    console.log(body);
    axios
      .post(
        `${process.env.APP_BACKEND_URL}/v1/workexp/insert_workexp/${id}`,
        body
      )
      .then((res) => {
        console.log(res.data);
        if(res.data.status == 'success') {
          alert('success insert data work experience');
          router.push(`/profile/person_detail/${id}`);
        } else {
          alert('failed insert data work experience');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // end of state work exp data

  // initiation for portofolio form
  const [portof_img, setPortofImg] = useState();
  const [formPortof, setFormPortof] = useState({
    app_name: "",
    link_repo: "",
    portofolio_type: "",
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
    if (!portof_img) {
      alert("mohon tambahkan file gambar");
    } else {
      const body = {
        app_name: formPortof.app_name,
        link_repo: formPortof.link_repo,
        portofolio_type: formPortof.portofolio_type,
        portof_img: portof_img,
      };

      // return console.log(body);

      axios
        .post(
          `${process.env.APP_BACKEND_URL}/v1/portofolio/insert_portofolio/${id}`,
          body, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if(res.data.status == 'success') {
            alert('success insert portofolio');
            router.push(`/profile/person_detail/${id}`);
          } else {
            alert('failed insert portofolio');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  if (portof_img) {
    var src = URL.createObjectURL(portof_img);
    var preview = document.getElementById("file-ip-1-preview");
    preview.src = src;
    preview.style.display = "block";
  }
  // end of initiation for portofolio form

  if (!dataUser) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Edit profile worker - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets-img/only logo.png" />
      </Head>
      <>
        <div className={`position-relative ${styles["kontent-wrapper"]}`}>
          <div className={`${styles["bg-purple"]}`}></div>
          {dataUser.map((item, index) => (
            <div key={index}>
              <div
                className={`position-absolute ${styles["card-aside-left"]} d-flex `}
              >
                <div className="info-wrapper w-100 d-flex flex-column justify-content-center align-items-center">
                  <div
                    className={`${styles["img-wraper"]} pt-5 pb-2  w-100 d-flex justify-content-center align-items-center`}
                  >
                    <Image
                      src={
                        item.ava_url
                          ? item.ava_url
                          : "/assets-img/ava-default.jpg"
                      }
                      width={125}
                      height={125}
                      alt="avatar-recruiter"
                      style={{
                        borderRadius: "50%",
                        paddingTop: "5px",
                        paddingBottom: "2px",
                      }}
                    ></Image>
                  </div>
                  <form className="img-edit w-100" onSubmit={avaHandle}>
                    <div className={`${styles["bg-white"]}`}>
                      <div className="mb-5 sect-form-wrapper d-flex gap-2 justify-content-center align-items-center w-100">
                        <div className="edit-icon ">
                          <input
                            type="file"
                            id="formFIle"
                            name="avatar"
                            ref={hiddenFileInput}
                            onChange={avatarUpdate}
                          />
                        </div>
                      </div>
                      <div className="ms-3 name-person mb-2 mt-2">
                        <p className={` ${gStyle["open_sans_sb"]} h4`}>
                          {" "}
                          {item.full_name}{" "}
                        </p>
                      </div>
                      <div className="ms-3 job-desc">
                        <p className={` ${gStyle["open_sans_sb"]} text-muted`}>
                          {" "}
                          {item.job_spec ? (
                            item.job_spec
                          ) : (
                            <>No data job spec</>
                          )}{" "}
                        </p>
                      </div>
                      <div className="ms-3 location-person d-flex">
                        <div className="icon-map">
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <div className="detail-location">
                          <p>
                            {item.domisli ? item.domisli : <>No data domisli</>}
                          </p>
                        </div>
                      </div>
                      <div className="ms-3 job-prefer">
                        <p>
                          {item.job_type ? (
                            item.job_type
                          ) : (
                            <>No data job type</>
                          )}
                        </p>
                      </div>
                      <div className={`${styles["spaceEmpty"]}`}></div>
                    </div>
                    <div className="button-save w-100 d-flex justify-content-center align-items-center mb-2">
                      <button
                        type="submit"
                        className={`btn ${styles["btn-purple"]}`}
                      >
                        Simpan
                      </button>
                    </div>
                    <div className="button-cancel w-100 d-flex justify-content-center align-items-center">
                      <Link href="/profile/person_detail" className="w-100">
                        <button
                          type="submit"
                          className={`btn ${styles["btn-white"]}`}
                        >
                          Batal
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className={`position-absolute ${styles["card-aside-right"]} d-flex flex-column`}
              >
                <div
                  className={`personal-data-wrapper ${styles["bg-white-pd"]}  w-100 d-flex flex-column mb-3`}
                >
                  <div className="ms-3 mt-4 title">
                    <p className={`${gStyle["open_sans_sb"]} h4`}>Data diri</p>
                  </div>
                  <div className={`mt-2 ${styles["line-black"]}`}></div>
                  <div className="form-pd-wrapper">
                    <form
                      className={`mx-3 mt-3`}
                      onSubmit={(e) => formPDHandle(e)}
                    >
                      <div className="mb-3">
                        <label
                          htmlFor="full_name"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="full_name"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan nama lengkap"
                          name="full_name"
                          required
                          defaultValue={item.full_name}
                          onChange={handleChangePD}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="job_spec"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Job Spec
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="job_spec"
                          placeholder="Masukkan job Spec, ex: Frontend Developer"
                          name="job_spec"
                          required
                          defaultValue={item.job_spec}
                          onChange={handleChangePD}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="job_type"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Job Type
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="job_type"
                          placeholder="Masukkan job type, ex: Freelance, Part Time, Full Time"
                          name="job_type"
                          required
                          defaultValue={item.job_type}
                          onChange={handleChangePD}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="ig_account"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Instagram Account
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="ig_account"
                          placeholder="Masukkan instagram akunmu.."
                          name="ig_account"
                          required
                          defaultValue={item.ig_account}
                          onChange={handleChangePD}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="git_account"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Github Account
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="git_account"
                          placeholder="Masukkan github akunmu.."
                          name="git_account"
                          required
                          defaultValue={item.git_account}
                          onChange={handleChangePD}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="gitlab_account"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Gitlab Account
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="gitlab_account"
                          placeholder="Masukkan gitlab akunmu.."
                          name="gitlab_account"
                          required
                          defaultValue={item.gitlab_account}
                          onChange={handleChangePD}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="domisli"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Domisli
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="domisli"
                          placeholder="Masukkan domisli"
                          name="domisli"
                          required
                          defaultValue={item.domisli}
                          onChange={handleChangePD}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="work_place"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Tempat kerja
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="work_place"
                          placeholder="Masukkan tempat kerja"
                          name="work_place"
                          required
                          defaultValue={item.work_place}
                          onChange={handleChangePD}
                        />
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className={`form-label ${gStyle["open_sans_lt"]}`}
                        >
                          Deskripsi singkat
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="Tuliskan deskripsi singkat"
                          name="personal_desc"
                          defaultValue={item.personal_desc}
                          onChange={handleChangePD}
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className={`btn ${styles["btn-yellow"]} ${gStyle["open_sans_sb"]} mb-3`}
                      >
                        Simpan
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className={`skill-wrapper w-100 ${styles["bg-white-pd"]} d-flex flex-column mb-3`}
                >
                  <div className="ms-3 mt-4 title">
                    <p className={`${gStyle["open_sans_sb"]} h4`}>Skill</p>
                  </div>
                  <div className={`mt-2 mb-3 ${styles["line-black"]}`}></div>
                  <form
                    className="mx-3 mt-2  d-flex gap-3 w-100"
                    onSubmit={(e) => formSkillHandle(e)}
                  >
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        id="skill"
                        placeholder="ex : Java"
                        name="name_skill"
                        defaultValue={item.name_skill}
                        onChange={handleChangeSkill}
                      />
                    </div>
                    <div className="col-2">
                      <button
                        type="submit"
                        className={`btn ${styles["btn-yellow"]} ${gStyle["open_sans_sb"]} mb-3`}
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className={`work-exp-wrapper w-100 ${styles["bg-white-pd"]} d-flex flex-column mb-3`}
                >
                  <div className="ms-3 mt-4 ">
                    <p className={`${gStyle["open_sans_sb"]} h4`}>
                      Pengalaman kerja
                    </p>
                  </div>
                  <div className={`mt-2 mb-3 ${styles["line-black"]}`}></div>
                  <div className="form-work-exp-wrapper">
                    <form
                      className="mx-3 work-exp-form"
                      onSubmit={(e) => formWorkExpHandle(e)}
                    >
                      <div className="mb-3">
                        <label
                          htmlFor="position"
                          className={`form-label ${gStyle["open_sans_sb"]}`}
                        >
                          Posisi
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="position"
                          placeholder="ex : web developer"
                          name="position"
                          onChange={handleChangeWorkExp}
                        />
                      </div>
                      <div className="mb-3 row">
                        <div className="col-4">
                          <label
                            htmlFor="company_name"
                            className={`form-label ${gStyle["open_sans_sb"]}`}
                          >
                            Nama Perusahaan
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="company_name"
                            placeholder="ex : PT Mencari Cinta Sejati"
                            name="company_name"
                            onChange={handleChangeWorkExp}
                          />
                        </div>
                        <div className="col-8 row ">
                          <label
                            htmlFor="month_year1"
                            className={`form-label ${gStyle["open_sans_sb"]} col-12`}
                          >
                            Bulan/tahun
                          </label>
                          <div className={`col-5`}>
                            <input
                              type="date"
                              className="form-control"
                              id="month_year1"
                              // placeholder="ex : Januari 2018"
                              max={dateNow}
                              name="month_year1"
                              onChange={handleChangeWorkExp}
                            />
                          </div>
                          <div className="col-2">
                            <label
                              htmlFor="month_year2"
                              className={`${gStyle["open_sans_sb"]}`}
                            >
                              sampai
                            </label>
                          </div>
                          <div className={`col-5`}>
                            <input
                              type="date"
                              className="form-control"
                              id="month_year2"
                              // placeholder="ex : Januari 2018"
                              max={dateNow}
                              name="month_year2"
                              onChange={handleChangeWorkExp}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="desc mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className={`form-label ${gStyle["open_sans_sb"]}`}
                        >
                          Deskripsi singkat
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="Deskripsikan pekerjaan anda"
                          name="description"
                          onChange={handleChangeWorkExp}
                        ></textarea>
                      </div>
                      <div
                        className={`mt-2 mb-3 ${styles["line-black"]}`}
                      ></div>
                      <button
                        type="submit"
                        className={`btn ${styles["btn-white-border-yellow"]} ${gStyle["open_sans_sb"]} mb-3`}
                      >
                        Tambah pengalaman kerja
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className={`portofolio-wrapper w-100 ${styles["bg-white-pd"]} d-flex flex-column mb-3`}
                >
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
                          onChange={handleChangePortof}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor=""
                          className={`form-label ${styles["open_sans_sb"]}`}
                        >
                          Type portofolio
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
                            src="preview after selected foto"
                            height={50}
                            width={150}
                            style={{ height: "50px", width: "150px" }}
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
                            <Image
                              src="/assets-img/vector edit profile.png"
                              alt="tuslimson"
                              height={50}
                              width={100}
                            ></Image>
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
                        <div className="additional-desc w-100 d-flex justify-content-center align-items-center gap-2">
                          <div className="img-1">
                            <Image src="/assets-img/rules-upload.png" alt="tuslimson" height={50}
                              width={100}></Image>
                          </div>
                          <div className="img-2">
                            <Image src="/assets-img/rules-upload2.png" alt="tuslimson" height={50}
                              width={100}></Image>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`mt-3 mb-3 ${styles["line-black"]}`}
                      ></div>
                      <button
                        type="submit"
                        className={`btn ${styles["btn-white-border-yellow"]} ${gStyle["open_sans_sb"]} mb-3`}
                      >
                        Tambah portofolio
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
}
