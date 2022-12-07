import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../../styles/EditProfileWorker.module.css";
import gStyle from "../../../../styles/General.module.css";
import SpaceEmpty from "../../../../components/SpaceEmpty";
import upImg from '../../../../styles/UploadImg.module.css'

export default function Index() {
  return (
    <>
      <Head>
        <title>Edit profile worker - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <SpaceEmpty />
      <div className={`position-relative ${styles["kontent-wrapper"]}`}>
        <div className={`${styles["bg-purple"]}`}></div>
        <div className={`position-absolute ${styles["card-aside-left"]} d-flex `}>
          <div className="info-wrapper w-100 d-flex flex-column justify-content-center align-items-center">
            <div className={`${styles['img-wraper']}  w-100 d-flex justify-content-center align-items-center`}>
              <Image src="/assets-img/Louis Tomlinson.png" width={300} height={300} alt="" className="pt-5 pb-2" ></Image>
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
                      htmlhtmlhtmlFor="photo-worker"
                      className={`${gStyle["open_sans_lt"]}`}
                    >
                      Edit
                    </label>
                  </div>
                </div>
                <div className="ms-3 name-person mb-2 mt-2">
                  <p className={` ${gStyle['open_sans_sb']} h4`}> Louis Tomlinson </p>
                </div>
                <div className="ms-3 job-person">
                  <p className={` ${gStyle['open_sans_sb']} text-muted`}> Web Developer </p>
                </div>
                <div className="ms-3 location-person d-flex">
                  <div className="icon-map">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="detail-location">
                    <p>Purwokerto, Jawa Tengah</p>
                  </div>
                </div>
                <div className="ms-3 job-prefer">
                  <p>Freelancer</p>
                </div>
                <div className={`${styles['spaceEmpty']}`}></div>
              </div>
              <div className="button-save w-100 d-flex justify-content-center align-items-center mb-2">
                <button type="submit" className={`btn ${styles['btn-purple']}`}>Simpan</button>
              </div>
              <div className="button-cancel w-100 d-flex justify-content-center align-items-center">
                <Link href="/profile/person_detail" className="w-100">
                  <button type="submit" className={`btn ${styles['btn-white']}`}>Batal</button>
                </Link>

              </div>
            </form>
          </div>
        </div>
        <div className={`position-absolute ${styles["card-aside-right"]} d-flex flex-column`}>
          <div className={`personal-data-wrapper ${styles['bg-white-pd']}  w-100 d-flex flex-column mb-3`}>
            <div className="ms-3 mt-4 title">
              <p className={`${gStyle['open_sans_sb']} h4`}>Data diri</p>
            </div>
            <div className={`mt-2 ${styles['line-black']}`}></div>
            <div className="form-pd-wrapper">
              <form className={`mx-3 mt-3`}>
                <div className="mb-3">
                  <label htmlhtmlFor="full_name" className={`form-label ${gStyle['open_sans_lt']}`}>Nama Lengkap</label>
                  <input type="text" className="form-control" id="full_name" aria-describedby="emailHelp" placeholder="Masukkan nama lengkap" />

                </div>
                <div className="mb-3">
                  <label htmlhtmlFor="job_desk" className={`form-label ${gStyle['open_sans_lt']}`}>Job desk</label>
                  <input type="text" className="form-control" id="job_desk" placeholder="Masukkan job desk" />
                </div>
                <div className="mb-3">
                  <label htmlhtmlFor="domisli" className={`form-label ${gStyle['open_sans_lt']}`}>Domisli</label>
                  <input type="text" className="form-control" id="domisli" placeholder="Masukkan domisli" />
                </div>
                <div className="mb-3">
                  <label htmlhtmlFor="work_place" className={`form-label ${gStyle['open_sans_lt']}`}>Tempat kerja</label>
                  <input type="text" className="form-control" id="work_place" placeholder="Masukkan tempat kerja" />
                </div>


                <div className="mb-3">
                  <label htmlhtmlFor="exampleFormControlTextarea1" className={`form-label ${gStyle['open_sans_lt']}`}>Deskripsi singkat</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Tuliskan deskripsi singkat"></textarea>
                </div>
                <button type="submit" className={`btn ${styles['btn-yellow']} ${gStyle['open_sans_sb']} mb-3`}>Simpan</button>
              </form>
            </div>
          </div>
          <div className={`skill-wrapper w-100 ${styles['bg-white-pd']} d-flex flex-column mb-3`}>
            <div className="ms-3 mt-4 title">
              <p className={`${gStyle['open_sans_sb']} h4`}>Skill</p>
            </div>
            <div className={`mt-2 mb-3 ${styles['line-black']}`}></div>
            <form className="mx-3 mt-2  d-flex gap-3 w-100">
              <div className="col-9">
                <input type="text" className="form-control" id="skill" placeholder="ex : Java" />
              </div>
              <div className="col-2">
                <button type="submit" className={`btn ${styles['btn-yellow']} ${gStyle['open_sans_sb']} mb-3`}>Simpan</button>
              </div>
            </form>
          </div>
          <div className={`work-exp-wrapper w-100 ${styles['bg-white-pd']} d-flex flex-column mb-3`}>
            <div className="ms-3 mt-4 ">
              <p className={`${gStyle['open_sans_sb']} h4`}>Pengalaman kerja</p>
            </div>
            <div className={`mt-2 mb-3 ${styles['line-black']}`}></div>
            <div className="form-work-exp-wrapper">
              <form className="mx-3">
                <div className="mb-3">
                  <label htmlFor="position" className={`form-label ${gStyle['open_sans_sb']}`}>Posisi</label>
                  <input type="email" className="form-control" id="position" placeholder="ex : web developer" />
                </div>
                <div className="mb-3 row">
                  <div className="col-6">
                    <label htmlFor="position" className={`form-label ${gStyle['open_sans_sb']}`}>Nama Perusahaan</label>
                    <input type="email" className="form-control" id="position" placeholder="ex : PT Mencari Cinta Sejati" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="position" className={`form-label ${gStyle['open_sans_sb']}`}>Bulan/tahun</label>
                    <input type="email" className="form-control" id="position" placeholder="ex : Januari 2018" />
                  </div>
                </div>
                <div className="desc mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className={`form-label ${gStyle['open_sans_sb']}`}>Deskripsi singkat</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Deskripsikan pekerjaan anda"></textarea>
                </div>
                <div className={`mt-2 mb-3 ${styles['line-black']}`}></div>
                <button type="submit" className={`btn ${styles['btn-white-border-yellow']} ${gStyle['open_sans_sb']} mb-3`}>Tambah pengalaman kerja</button>
              </form>
            </div>
          </div>
          <div className={`portofolio-wrapper w-100 ${styles['bg-white-pd']} d-flex flex-column mb-3`}>
            <div className="title ms-3 mt-4">
              <p className={`h4 ${gStyle['open_sans_sb']}`}>Portofolio</p>
            </div>
            <div className={`mt-2 mb-3 ${styles['line-black']}`}></div>
            <div className="mx-3 mb-3 form-portofolio-wrapper">
              <form>
                <div className="mb-3">
                  <label htmlFor="name_application" className={`form-label ${styles['open_sans_sb']}`} >Nama aplikasi</label>
                  <input type="email" className="form-control" id="name_application" placeholder="Masukkan nama aplikasi" />
                </div>
                <div className="mb-3">
                  <label htmlFor="link_repository" className={`form-label ${styles['open_sans_sb']}`} >Link repository</label>
                  <input type="email" className="form-control" id="link_repository" placeholder="Masukkan link repository" />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className={`form-label ${styles['open_sans_sb']}`} >Type portofolio</label>
                </div>
                <div className="mx-3 mb-3 type-portofolio-wrapper row">
                  <div className="col-auto form-check">
                    <input className="form-check-input" type="radio" name="mobile_app" id="mobile_app" />
                    <label className="form-check-label" htmlFor="mobile_app">
                      Aplikasi mobile
                    </label>
                  </div>
                  <div className="col-auto form-check">
                    <input className="form-check-input" type="radio" name="web_app" id="web_app" />
                    <label className="form-check-label" htmlFor="web_app">
                      Aplikasi web
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="" className={`form-label ${styles['open_sans_sb']}`} >Upload gambar</label>
                </div>
                <div className={`${styles['file-upload-wrapper']} d-flex flex-column justify-content-center align-items-center gap-2`}>
                  <div className="input-wrapper">
                    <input type="file" id="input-img-portofolio" className="file-upload d-none"
                      data-height="500" />
                    <label htmlFor="input-img-portofolio" className={`form-label ${styles['img-cursor']} ${styles['open_sans_sb']}`}>
                      <Image src="/assets-img/vector edit profile.png" width={50} height={50} alt="tuslimson"></Image>
                    </label>
                  </div>
                  <div className="desc  w-100 d-flex flex-column justify-content-center align-items-center">
                    <p className={`${styles['open_sans_lt']} h5`}>Drag & Drop untuk upload Gambar Aplikasi anda</p>
                    <p className={`${styles['open_sans_lt']} h6`}>Atau cari untuk mengupload file dari direktorimu</p>
                  </div>
                  <div className="additional-desc w-100 d-flex justify-content-center align-items-center gap-2">
                    <div className="img-1">
                      <Image src="/assets-img/rules-upload.png" width={100} height={50} alt="tuslimson"></Image>
                    </div>
                    <div className="img-2">
                      <Image src="/assets-img/rules-upload2.png" width={100} height={50} alt="tuslimson" ></Image>
                    </div>
                  </div>

                </div>
                <div className={`mt-3 mb-3 ${styles['line-black']}`}></div>
                <button type="submit" className={`btn ${styles['btn-white-border-yellow']} ${gStyle['open_sans_sb']} mb-3`}>Tambah portofolio</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

Index.layout = "L2";
