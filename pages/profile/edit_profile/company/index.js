import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../../styles/EditProfileCompany.module.css";
import gStyle from "../../../../styles/General.module.css";
import SpaceEmpty from "../../../../components/SpaceEmpty";
import upImg from '../../../../styles/UploadImg.module.css'

export default function Index() {
  return (
    <>
      <Head>
        <title>Edit profile Company - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets-img/only logo.png" />
      </Head>
      <SpaceEmpty />
      <div className={`position-relative ${styles["kontent-wrapper"]}`}>
        <div className={`${styles["bg-purple"]}`}></div>
        <div className={`position-absolute ${styles["card-aside-left"]} d-flex `}>
          <div className="info-wrapper w-100 d-flex flex-column justify-content-center align-items-center">
            <div className={`${styles['img-wraper']}  w-100 d-flex justify-content-center align-items-center`}>
              <Image src="/assets-img/Louis Tomlinson.png" alt="tuslimson" width={250} height={250} className="pt-5 pb-2" ></Image>
            </div>
            <form className="img-edit w-100">
              <div className={`${styles['bg-white']}`}>
                <div className="mb-5 sect-form-wrapper d-flex gap-2 justify-content-center align-items-center w-100">
                  <div className="edit-icon ">
                    <input
                      type="file"
                      id="photo-worker"
                      style={{ display: "none" }}
                    />
                    <i className="bi bi-pencil-fill text-muted"></i>
                  </div>
                  <div>
                    <label
                      htmlFor="photo-worker"
                      className={`${gStyle["open_sans_lt"]}`}
                    >
                      Edit
                    </label>
                  </div>
                </div>
                <div className="ms-3 name-company mb-2 mt-2">
                  <p className={` ${gStyle['open_sans_sb']} h4`}> PT Martabak Jaya Abadi </p>
                </div>
                <div className="ms-3 job-company">
                  <p className={` ${gStyle['open_sans_sb']} text-muted`}> Financial </p>
                </div>
                <div className="ms-3 location-company d-flex gap-2">
                  <div className="icon-map">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="detail-location">
                    <p>Purwokerto, Jawa Tengah</p>
                  </div>
                </div>
                <div className={`${styles['spaceEmpty']}`}></div>
              </div>
              <div className="button-save w-100 d-flex justify-content-center align-items-center mb-2">
                <button type="submit" className={`btn ${styles['btn-purple']}`}>Simpan</button>
              </div>
              <div className="button-cancel w-100 d-flex justify-content-center align-items-center">
                <Link href="/profile/company_detail" className="w-100">
                  <button type="submit" className={`btn ${styles['btn-white']}`}>Batal</button>
                </Link>

              </div>
            </form>
          </div>
        </div>
        <div className={`position-absolute ${styles["card-aside-right"]} d-flex flex-column`}>
          <div className={`company-data-wrapper ${styles['bg-white-pd']}  w-100 d-flex flex-column mb-3`}>
            <div className="ms-3 mt-4 title">
              <p className={`${gStyle['open_sans_sb']} h4`}>Data Perusahaan</p>
            </div>
            <div className={`mt-2 ${styles['line-black']}`}></div>
            <div className="form-pd-wrapper">
              <form className={`mx-3 mt-3`}>
                <div className="mb-3">
                  <label htmlFor="company_name" className={`form-label ${gStyle['open_sans_lt']}`}>Nama perusahaan</label>
                  <input type="text" className="form-control" id="company_name" aria-describedby="emailHelp" placeholder="Masukkan nama perusahaan" />

                </div>
                <div className="mb-3">
                  <label htmlFor="business_sector" className={`form-label ${gStyle['open_sans_lt']}`}>Bidang</label>
                  <input type="text" className="form-control" id="business_sector" placeholder="Masukkan bidang perusahaan ex : Financial" />
                </div>
                <div className="mb-3">
                  <label htmlFor="work_place" className={`form-label ${gStyle['open_sans_lt']}`}>Kota</label>
                  <input type="text" className="form-control" id="work_place" placeholder="Masukkan domisli" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className={`form-label ${gStyle['open_sans_lt']}`}>Deskripsi singkat</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Tuliskan deskripsi singkat"></textarea>
                </div>
                <button type="submit" className={`btn ${styles['btn-yellow']} ${gStyle['open_sans_sb']} mb-3`}>Simpan</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

Index.layout = "L2";
