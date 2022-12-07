import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar2";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SpaceEmpty from "../../components/SpaceEmpty";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import gStyle from "../../styles/General.module.css";
import styles from "../../styles/Landing.module.css";

export default function Index() {
  const [token, setToken] = useState("");
  const [dataLogin, setDataLogin] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setDataLogin(data);
    setToken(localStorage.getItem("token"));
  }, []);

  // console.log(token);
  return (
    <>
      <Head>
        <title>Landing - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets-img/only logo.png" />
      </Head>
      {token ? <Navbar2 /> : <Navbar />}
      <SpaceEmpty />
      <div className="w-100">
        <div className="container w-100 mb-5">
          <div className="row">
            <div
              className={`col-6 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
            >
              <div className="d-flex flex-column">
                <div className="title mb-2">
                  <p className={`display-4 ${gStyle["open_sans_sb"]}`}>
                    Talenta terbaik negeri untuk perubahan revolusi 4.0
                  </p>
                </div>
                <div className="spaceEmpty mb-3"></div>
                <div className="desc mb-5">
                  <p className={` h4 ${gStyle["open_sans_lt"]}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. ini
                    euismod ipsum et dui rhoncus auctor.
                  </p>
                </div>
                <div className="spaceEmpty mb-5"></div>
                {dataLogin.level_user == 2 ? (
                  <>
                    <div className="Link">
                      <Link href="/home">
                        <button
                          type="button"
                          className={`btn ${styles["btn-purple"]} ${gStyle["open_sans_sb"]}`}
                        >
                          Mulai Dari Sekarang
                        </button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div
              className={`col-6 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
            >
              <div className="d-flex flex-column">
                <div className="position-relative">
                  <div className={` ${styles["banner1st"]}`}>
                    <Image
                      src="/assets-img/banner1st.png"
                      width={450}
                      height={450}
                      alt="banner"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-100 mb-5">
          <div className="row">
            <div
              className={`col-6 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
            >
              <div className="d-flex flex-column">
                <div className="position-relative">
                  <div className={` ${styles["banner1st"]}`}>
                    <Image
                      src="/assets-img/banner2st.png"
                      width={450}
                      height={450}
                      layout="fill"
                      alt="banner"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-6 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
            >
              <div className="title">
                <p className={`${gStyle["open_sans_sb"]} display-4`}>
                  Kenapa harus mencari tallent di peworld
                </p>
              </div>
              <div className="d-flex gap-3 mb-3">
                <div className="tick">
                  <Image
                    src="/assets-img/tick ungu.png"
                    alt="purple tick"
                    width={25}
                    height={25}
                  ></Image>
                </div>
                <div className="desc">
                  <p className={`h4 ${gStyle["open_sans_lt"]}`}>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-3">
                <div className="tick">
                  <Image
                    src="/assets-img/tick ungu.png"
                    alt="purple tick"
                    width={25}
                    height={25}
                  ></Image>
                </div>
                <div className="desc">
                  <p className={`h4 ${gStyle["open_sans_lt"]}`}>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-3">
                <div className="tick">
                  <Image
                    src="/assets-img/tick ungu.png"
                    alt="purple tick"
                    width={25}
                    height={25}
                  ></Image>
                </div>
                <div className="desc">
                  <p className={`h4 ${gStyle["open_sans_lt"]}`}>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-3">
                <div className="tick">
                  <Image
                    src="/assets-img/tick ungu.png"
                    alt="purple tick"
                    width={25}
                    height={25}
                  ></Image>
                </div>
                <div className="desc">
                  <p className={`h4 ${gStyle["open_sans_lt"]}`}>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-3">
                <div className="tick">
                  <Image
                    src="/assets-img/tick ungu.png"
                    alt="purple tick"
                    width={25}
                    height={25}
                  ></Image>
                </div>
                <div className="desc">
                  <p className={`h4 ${gStyle["open_sans_lt"]}`}>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-100 mb-5">
          <div className="row">
            <div
              className={`col-6 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
            >
              <div className="title mb-5">
                <p className={`display-6 ${gStyle["open_sans_sb"]}`}>
                  Skill Tallent
                </p>
              </div>
              <div className="desc mb-5">
                <p className={`h4 ${gStyle["open_sans_lt"]}`}>
                  Lorem ipsul dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor
                </p>
              </div>
              <div className={`skill d-flex row`}>
                <div
                  className={`col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
                >
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>Java</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>Kotlin</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>PHP</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>JavaScript</p>
                    </div>
                  </div>
                </div>
                <div
                  className={`col-6 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 `}
                >
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>Golang</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>C++</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>Ruby</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="yellow-tick">
                      <Image
                        src="/assets-img/tick kuning.png"
                        width={25}
                        height={25}
                        alt="yellow-tick"
                      ></Image>
                    </div>
                    <div className="desc">
                      <p className={`${gStyle["open_sans_sb"]}`}>
                        10+ Bahasa lainnya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`col-6 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6`}
            >
              <div className="d-flex flex-column">
                <div className="position-relative">
                  <div className={` ${styles["banner1st"]}`}>
                    <Image
                      src="/assets-img/banner3st.png"
                      width={450}
                      height={450}
                      layout="fill"
                      alt="banner"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["opinion-sect"]} w-100`}>
          <div className="container">
            <div className="row">
              <div className="mb-5"></div>
              <div className="mb-5"></div>
              <div className="col-12 d-flex justify-content-center align-items-center">
                <div className="title ">
                  <p className={`display-6 ${gStyle["open_sans_sb"]}`}>
                    Their opinion about peworld
                  </p>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center gap-3">
                <div
                  className={`col-3 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3  ${styles["card-wrapper"]} d-flex flex-column`}
                >
                  <div
                    className={`${styles["card-image"]} d-flex justify-content-center align-items-center `}
                  >
                    <Image
                      src="/assets-img/harry Styles.png"
                      width={125}
                      height={125}
                      className={`${styles["image-content"]}`}
                      alt="harry begaye"
                    ></Image>
                  </div>
                  <div className="person-name d-flex justify-content-center  align-items-center ">
                    <p className={`${gStyle["open_sans_sb"]} h4`}>
                      Harry Styles
                    </p>
                  </div>
                  <div className="person-job d-flex justify-content-center align-items-center ">
                    <p className={`text-muted ${gStyle["open_sans_lt"]}`}>
                      Web Developer
                    </p>
                  </div>
                  <div
                    className={`${styles["person-desc"]} d-flex justify-content-center`}
                  >
                    <p className={`${gStyle["open_sans_lt"]} text-center`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>
                </div>
                <div
                  className={`col-3 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3  ${styles["card-wrapper"]} d-flex flex-column`}
                >
                  <div
                    className={`${styles["card-image"]} d-flex justify-content-center align-items-center `}
                  >
                    <Image
                      src="/assets-img/Niall horan.png"
                      width={125}
                      height={125}
                      className={`${styles["image-content"]}`}
                      alt="harry begaye"
                    ></Image>
                  </div>
                  <div className="person-name d-flex justify-content-center  align-items-center ">
                    <p className={`${gStyle["open_sans_sb"]} h4`}>
                      Niall Horan
                    </p>
                  </div>
                  <div className="person-job d-flex justify-content-center align-items-center ">
                    <p className={`text-muted ${gStyle["open_sans_lt"]}`}>
                      Web Developer
                    </p>
                  </div>
                  <div
                    className={`${styles["person-desc"]} d-flex justify-content-center`}
                  >
                    <p className={`${gStyle["open_sans_lt"]} text-center`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In euismod ipsum et dui rhoncus auctor.
                    </p>
                  </div>
                </div>
                <div
                  className={`col-3 ${styles["col-xs-12"]} col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3  ${styles["card-wrapper"]} d-flex flex-column`}
                >
                  <div
                    className={`${styles["card-image"]} d-flex justify-content-center align-items-center `}
                  >
                    <Image
                      src="/assets-img/Louis Tomlinson.png"
                      width={125}
                      height={125}
                      className={`${styles["image-content"]}`}
                      alt="harry begaye"
                    ></Image>
                  </div>
                  <div className="person-name d-flex justify-content-center  align-items-center ">
                    <p className={`${gStyle["open_sans_sb"]} h4`}>
                      Louis Tomlinson
                    </p>
                  </div>
                  <div className="person-job d-flex justify-content-center align-items-center ">
                    <p className={`text-muted ${gStyle["open_sans_lt"]}`}>
                      Web Developer
                    </p>
                  </div>
                  <div
                    className={`${styles["person-desc"]} d-flex justify-content-center`}
                  >
                    <p className={`${gStyle["open_sans_lt"]} text-center`}>
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// if (token) {
//   index.layout = 'L2';
// } else {
//   index.layout = 'L1';
// }
