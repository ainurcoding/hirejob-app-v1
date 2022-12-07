import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Auth.module.css'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Register choice - HireJob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`row vw-100 vh-100 ${styles['bg-auth']}`}>
        <div className='col-6 d-flex justify-content-center align-items-center'>
          <div className={`w-75 h-75`}>
            <div className={`${styles['banner-auth']}`}>
              <div className='p-5'>
                <Link href='/landing'><Image src="/assets-img/white-logo.png" width={75} height={25} alt="wkwkw"></Image></Link>
              </div>
              <div className='h-75 w-100 d-flex align-items-center'>
                <p className={`p-5 display-5 ${styles['open_sans_sb']}`}>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center align-items-center col-6'>
          <div className='w-75 '>
            <div className='title mb-5'>
              <p className={`h1 ${styles['open_sans_sb']}`}>Halo, Pewpeople</p>
              <p className={`h5 ${styles['open_sans_lt']}`}>Silahkan pilih register sesuai kebutuhan anda</p>
            </div>
            <div className='d-flex flex-column gap-3'>
                <Link href="/registers/register_worker" className={`w-100 text-decoration-none text-white text-center ${styles['btn-yellow']} ${styles['open_sans_sb']}`} > Register untuk pekerja </Link>
                <Link href="/registers/reigster_recruiter" className={`w-100 text-decoration-none text-white text-center ${styles['btn-yellow']} ${styles['open_sans_sb']}`} > Register untuk perekrut </Link>
                <Link href="/" className={`w-100 text-decoration-none text-white text-center ${styles['btn-yellow']} ${styles['open_sans_sb']}`} > Kembali ke halaman login </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
