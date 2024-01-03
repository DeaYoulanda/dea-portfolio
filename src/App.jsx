import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function App() {
    return (
        <div className="bg-primary">
            <Navbar />
            <div>
                <main className="bg-secondary bg-bg-pattern font-montserrat">
                    <div className="max-w-screen-xl h-screen mx-auto" id="home">
                        <div className="flex items-center h-screen justify-between">
                            <div className="w-1/2 flex-row text-font-primary">
                                <h1 className="text-2xl font-extrabold">
                                    Hi, I'm{" "}
                                    <span className="text-primary">
                                        Dea Youlanda👋
                                    </span>
                                </h1>
                                <p className="italic">
                                    "Accounting isn't just my interest. it's a
                                    calling to understand the stories hidden
                                    behind every number and transaction."
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <button className="outline outline-2 h-8 px-4 rounded-md outline-primary">
                                        Contact me
                                    </button>
                                    <button className="bg-primary outline outline-2 h-8 px-4 rounded-md outline-primary text-font-secondary">
                                        Download CV
                                    </button>
                                </div>
                            </div>
                            <img
                                src="/hero-photo.png"
                                alt="Dea Youlanda"
                                className="w-[450px]"
                            />
                        </div>
                    </div>
                    <div
                        className="max-w-screen-xl h-screen mx-auto flex items-center justify-center"
                        id="about"
                    >
                        <div className="flex flex-col items-center justify-center text-font-primary">
                            <h1 className="text-2xl font-black pt-8">
                                About 🤩
                            </h1>
                            <p className="pt-6 text-center">
                                Saya merupakan mahasiswa jurusan Akuntansi dari
                                Universitas Jember. Saya merupakan individu yang
                                teliti, pekerja keras, dan optimis yang mampu
                                menyesuaikan diri dengan lingkungan yang
                                dinamis. Memiliki keahlian dalam mengelola acara
                                dan komunikasi yang baik dengan orang lain,
                                mampu bekerja dalam tim dan kolaborasi dengan
                                berbagai tim dari latar belakang yang berbeda.
                            </p>
                            <p className="pt-7 italic text-center">
                                "As a storyteller behind the numbers, I find
                                beauty in every transaction. Deciphering
                                financial codes is an art that brings numbers to
                                life, unveiling unique tales behind each
                                figure."
                            </p>
                            <p className="font-semibold pb-6">Dea Youlanda.</p>
                        </div>
                    </div>
                    <div
                        className="max-w-screen-2xl h-screen mx-auto"
                        id="experience"
                    >
                        <div className="justify-center items-center">
                            <h1 className="text-center text-2xl font-bold text-font-primary pt-8">
                                Experience 😎
                            </h1>
                            <div className="flex flex-col text-font-primary pt-6">
                                <div className="flex justify-around w-full">
                                    <div className="max-w-[300px] text-left flex flex-col gap-4">
                                        <h2 className="font-bold">
                                            Education Level
                                        </h2>
                                        <div>
                                            <p className="font-bold">
                                                SMK Negeri 1 Kraksaan
                                            </p>
                                            <p>Kraksaan - Indonesia</p>
                                            <p>Akuntansi</p>
                                            <p>Jul 2019 - Jun 2022</p>
                                        </div>
                                        <div>
                                            <p className="font-bold">
                                                Universitas Jember
                                            </p>
                                            <p>Jember - Indonesia</p>
                                            <p>
                                                Diploma in Akuntansi, 3.90/4.00
                                            </p>
                                            <p>
                                                Aug 2022 - Aug 2025 (Expected)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="max-w-[300px] flex flex-col gap-4 text-center">
                                        <h2 className="font-bold">
                                            Organisational
                                        </h2>
                                        <div className="text-center">
                                            <p className="font-bold">
                                                Dewan Kerja Cabang Probolinggo
                                            </p>
                                            <p>Probolinggo - Indonesia</p>
                                            <p>Kajian Kepramukaan</p>
                                            <p>Sep 2021 - Present</p>
                                        </div>
                                    </div>
                                    <div className="max-w-[300px] flex flex-col gap-4 text-right">
                                        <h2 className="font-bold">
                                            Work Experience
                                        </h2>
                                        <div className="text-right">
                                            <p className="font-bold">
                                                Yumas Nida Corporation
                                            </p>
                                            <p>Kebon Sirih - Jakarta Pusat</p>
                                            <p>Sales Center</p>
                                            <p>Jul 2023 - Present</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold">
                                                Batik Ronggo Mukti
                                            </p>
                                            <p>Kraksaan - Probolinggo</p>
                                            <p>
                                                Produksi dan Laporan Keuangan
                                                Sederhana
                                            </p>
                                            <p>Jan 2021 - Apr 2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="max-w-screen-xl h-screen mx-auto"
                        id="achievement"
                    >
                        <div className="flex items-center h-screen justify-between">
                            <img
                                src="/achievement.png"
                                alt="Dea Youlanda"
                                className="w-[450px]"
                            />
                            <div className="w-1/2 flex-row text-font-primary">
                                <h1 className="text-2xl font-extrabold text-wrap">
                                    Skills and Achievements 🤩
                                </h1>
                                <p className="font-semibold pt-4">
                                    Achievement
                                </p>
                                <div>
                                    <div className="flex-row flex">
                                        <img
                                            src="/green-checklist.png"
                                            alt=""
                                            className="w-6"
                                        />
                                        <p className="px-2">
                                            TOP 30 dalam lomba LKS Wilker JATIM
                                            Tahun 2022.
                                        </p>
                                    </div>
                                    <div className="flex-row flex">
                                        <img
                                            src="/green-checklist.png"
                                            alt=""
                                            className="w-6"
                                        />
                                        <p className="px-2">
                                            Juara 3 Lomba Akuntansi Tingkat
                                            Nasional Tahun 2021.
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold pt-4">Skills</p>
                                <div>
                                    <div className="flex-row flex">
                                        <img
                                            src="/red-checklist.svg"
                                            alt=""
                                            className="w-6"
                                        />
                                        <p className="px-2">
                                            Manajemen waktu, public speaking,
                                            bekerjasama dalam tim.
                                        </p>
                                    </div>
                                    <div className="flex-row flex">
                                        <img
                                            src="/red-checklist.svg"
                                            alt=""
                                            className="w-6"
                                        />
                                        <p className="px-2">
                                            Sertifikasi Uji Kompetensi ABSS
                                            2023, Microsoft Office.
                                        </p>
                                    </div>
                                </div>
                                <p className="font-semibold pt-4">
                                    Webinars Attended
                                </p>
                                <div>
                                    <div className="flex-row flex">
                                        <img
                                            src="/red-checklist.svg"
                                            alt=""
                                            className="w-6"
                                        />
                                        <p className="px-2">
                                            Innovation and Technology for
                                            Reformation in Public Sector Finance
                                            Tahun 2023.
                                        </p>
                                    </div>
                                    <div className="flex-row flex">
                                        <img
                                            src="/red-checklist.svg"
                                            alt=""
                                            className="w-6"
                                        />
                                        <p className="px-2">
                                            Peningkatan Mutu Pembelajaran
                                            Program Studi D3 Akuntansi Melalui
                                            Agro-Digipreneurship Camp Tahun
                                            2023.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
