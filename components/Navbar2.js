import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import gStyles from "../styles/General.module.css";
import Router from "next/router";

const Navbar2 = () => {
  const [token, setToken] = useState("");
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setToken(localStorage.getItem("token"));
    setDataUser(data);
  }, []);

  const onLogout = () => {
    localStorage.clear();
    Router.push("/");
  };

  // console.log(dataUser.ava_secure_url);
  return (
    <div
      className={`position-fixed bg-white w-100 ${styles["navbar-height"]} row`}
    >
      <div
        className={`${styles["icon-logo-responsive"]} col-6    d-flex align-items-center`}
      >
        <div className="ms-5 logo">
          <Link href="/landing">
            <Image
              src="/assets-img/purple-logo.png"
              width={150}
              height={40}
              alt="wkwkwk"
            ></Image>
          </Link>
        </div>
      </div>
      <div
        className={`${styles["navigation-responsive"]} col-6  d-flex align-items-center justify-content-end gap-3`}
      >
        <div className={`${styles["navigation-responsive-icon"]} ms-3`}>
          <Link href="/landing">
            <Image
              src="/assets-img/only logo.png"
              width={50}
              height={40}
              alt="wkwkwk"
            ></Image>
          </Link>
        </div>
        <div>
          <button
            className="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className={`bi bi-bell`}></i>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="modal-content d-flex justify-content-center align-items-center h-100">
              <div className="img">
                <Image
                  src="/assets-img/notifikasi kosong.png"
                  width={100}
                  height={100}
                  alt="wkwk"
                ></Image>
              </div>
              <div className="msg">
                <p className={`${gStyles["open_sans_sb"]}`}>
                  Belum ada notifikasi
                </p>
              </div>
            </div>
          </ul>
        </div>
        <div>
          <Link href="/messanger">
            <i className="bi bi-envelope"></i>
          </Link>
        </div>
        <div>
          <button
            className="btn dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src={
                dataUser.ava_url
                  ? dataUser.ava_url
                  : "/assets-img/ava-default.jpg"
              }
              className={`${styles["img-rounded"]}`}
              width={50}
              height={50}
              alt="avatar"
            ></Image>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <div className="modal-content d-flex justify-content-center align-items-center h-100 gap-3">
              <div className="welcome-name mx-3">
                <p>
                  Welcome, <span>{dataUser.full_name}</span>
                </p>
                {/* <p>{dataUser.level_user}</p> */}
              </div>
              <div className="link-1">
                <Link
                  href={
                    dataUser.level_user == "3"
                      ? `/profile/person_detail/${dataUser.user_id}`
                      : dataUser.level_user == "2"
                      ? `/profile/company_detail/${dataUser.user_id}`
                      : ""
                  }
                  className={`${gStyles["open_sans_sb"]} ${styles["text-purple-link"]} text-decoration-none`}
                >
                  Detail Profile
                </Link>
              </div>
              <div className="link-1">
                {/* nnti dibawah ini kasih kondisi */}
                <Link
                  href={
                    dataUser.level_user == "3"
                      ? `/profile/edit_profile/worker/${dataUser.user_id}`
                      : dataUser.level_user == "2"
                      ? `/profile/edit_profile/company/${dataUser.user_id}`
                      : ""
                  }
                  className={`${gStyles["open_sans_sb"]} ${styles["text-purple-link"]} text-decoration-none`}
                >
                  Edit Profile
                </Link>
              </div>
              <div
                style={{ border: "1px solid #5E50A1" }}
                className="w-100"
              ></div>
              <div className="link-1">
                {/* nnti dibawah ini kasih kondisi */}

                <button
                  className={`${gStyles["open_sans_sb"]} ${styles["text-purple-link"]} btn ${styles["btn-white"]}`}
                  onClick={() => onLogout()}
                >
                  Logout
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="emptycol col-1"></div>
    </div>
  );
};

export default Navbar2;
