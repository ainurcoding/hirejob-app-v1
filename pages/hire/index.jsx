import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../../styles/Hire.module.css";
import gStyle from "../../styles/General.module.css";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import SpaceEmpty from "../../components/SpaceEmpty";

export default function Index() {
  return (
    <>
      <Head>
        <title>Hire worker - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets-img/only logo.png" />
      </Head>
      <SpaceEmpty />
      <div className={`${styles["content-wrapper"]}`}>
        <div className="row">
          <div className="col-5 bg d-flex justify-content-center">
            <div className="mt-5 aside-left-kontent w-75 d-flex flex-column gap-3">
              <div className="image-wrapper d-flex justify-content-center align-items-center">
                <Image
                  src="/assets-img/banner-auth.jpg"
                  width={200}
                  height={200}
                  alt="ava-worker"
                  style={{ borderRadius: "50%" }}
                ></Image>
              </div>

              <div className="worker-desc">
                <p className={`${gStyle["open_sans_sb"]} h5`}>
                  Louis tomlinson
                </p>
              </div>
              <div className="worker-desc">
                <p className={`${gStyle["open_sans_sb"]} h5`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, animi!
                </p>
              </div>
              <div className="worker-location d-flex gap-2">
                <div className="icon-map">
                  <i className="bi bi-geo-alt text-muted"></i>
                </div>
                <div className="location-desc">
                  <p className={`${gStyle["open_sans_lt"]}  text-muted`}>
                    Puertorico, Jawa Tengah
                  </p>
                </div>
              </div>
              <div className="worker-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                itaque velit a numquam sit labore nihil rerum mollitia error ut!
              </div>
              <div className="skill-worker">
                <div>
                  <p className={`${gStyle["open_sans_sb"]} h5`}> Skill</p>
                </div>
                <div className="skill-wrapper ">
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    python
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    laravel
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    golang
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    javascript
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    php
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    html
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    C++
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    Kotlin
                  </button>
                  <button
                    type="button"
                    className={`btn ${gStyle["open_sans_sb"]} h6 text-white ${styles["btn-yellow-skill"]} m-2`}
                  >
                    Swift
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-7 d-flex">
            <div className="d-flex flex-column w-75 mx-3">
              <div className="title mt-4">
                <p className={`${styles["open_sans_sb"]} h1`}>
                  Hubungi <span>Louis Tomlinson</span>
                </p>
              </div>
              <div className="desc mt-4">
                <p className={`${styles["open_sans_lt"]} h5 text-muted`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, consectetur!
                </p>
              </div>
              <div className="form-wrapper mt-4">
                <form className="d-flex flex-column gap-3">
                  <div className="mb-3">
                    <label htmlFor="purpose" className="form-label">
                      Tujuan tentang pesan ini
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="1">Projek</option>
                      <option value="2">Penwaran Kerja</option>
                      <option value="3">Penwaran Internship</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="full_name" className="form-label">
                      Nama lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="full_name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      No. Handphone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Masukkan No Handphone"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                      Example textarea
                    </label>
                    <textarea
                      className="form-control"
                      id="desc"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className={`btn ${styles['btn-yellow']} w-100`}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Index.layout = "L2";
