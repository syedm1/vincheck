/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import siteContent from "../components/siteContent";

import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faQuestionCircle,
} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(faCheckSquare, faCoffee, faQuestionCircle);

export default function Index() {
  console.log(siteContent);
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                {siteContent[0].heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {siteContent[0].paragraphs[0]}
              </p>
              <div
                className="mt-12"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                }}
              >
                <input
                  placeholder="ENTER 17 DIGITS VIN"
                  type="search"
                  style={{
                    minHeight: "65px",
                    minWidth: "340px",
                    marginBottom: "2vh",
                  }}
                />
                <a
                  href={siteContent[0].button.link}
                  className="github-star ml-1 text-white font-bold px-6 py-4  outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  style={{
                    width: "350px",
                  }}
                >
                  {siteContent[0].button.label}
                </a>
              </div>
              <div
                style={{
                  paddingTop: "20px",
                }}
              >
                <br />
              </div>
              <div>
                <a
                  href={siteContent[0].a[0].link}
                  style={{ textDecoration: "underline" }}
                >
                  {siteContent[0].a[0].label}{" "}
                  <FontAwesomeIcon icon="question-circle" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src="/img/car_people_trust.png"
          alt="..."
        />
      </section>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#eee",
          height: "30vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ height: "20vh" }}>
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-xl"
              style={{
                maxHeight: "19vh",
              }}
              src="/img/car_report_2.png"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p>
              We generate greate reports, dont take our word for it, take a look
              at our sample report.
            </p>
            <div>
              <button
                className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                style={{ marginLeft: "5vw", maxHeight: "2rem" }}
                href={siteContent[0].a[1].link}
              >
                <span style={{ paddingTop: "20px" }}>
                  {" "}
                  {siteContent[0].a[1].label}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section
        className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100"
        style={{ marginTop: "20rem" }}
      >
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    {siteContent[1].heading}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    {siteContent[1].paragraphs[0]}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {siteContent[2].heading}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {siteContent[2].paragraphs[0]}
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {siteContent[2].paragraphs[1]}
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                {siteContent[2].paragraphs[2]}
              </p>
              <a
                href={siteContent[2].a[0].link}
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                {siteContent[2].a[0].link}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  {siteContent[3].heading}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  {siteContent[3].paragraphs[0]}
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">{siteContent[4].heading}</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              {siteContent[4].paragraphs[0]}
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              {siteContent[4].paragraphs[1]}
            </p>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              {siteContent[4].paragraphs[2]}
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                {siteContent[5].heading}
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                {siteContent[5].paragraphs[0]}
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href={siteContent[5].a[0].link}
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  {siteContent[5].a[0].label}
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
