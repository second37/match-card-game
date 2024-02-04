"use client";
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import Card from "./card";
import { useState, useRef } from "react";
import { FaSteam, FaXbox, FaWindows, FaUnity, FaTwitch, FaTwitter, FaTelegram, FaSpotify } from "react-icons/fa";

export default function Home() {

  const [iconlist, seticonlist] = useState([
    { id: "0", status: "", src: "/image/facebook.png", name: "img00", img: FaSteam },
    { id: "0", status: "", src: "/image/facebook.png", name: "img00", img: FaSteam },
    { id: "1", status: "", src: "/image/instagram.png", name: "img01", img: FaXbox },
    { id: "1", status: "", src: "/image/instagram.png", name: "img01", img: FaXbox },
    { id: "2", status: "", src: "/image/linkedin.png", name: "img02", img: FaWindows },
    { id: "2", status: "", src: "/image/linkedin.png", name: "img02", img: FaWindows },
    { id: "3", status: "", src: "/image/telegram.png", name: "img03", img: FaUnity },
    { id: "3", status: "", src: "/image/telegram.png", name: "img03", img: FaUnity },
    { id: "4", status: "", src: "/image/tiktok.png", name: "img04", img: FaTwitch },
    { id: "4", status: "", src: "/image/tiktok.png", name: "img04", img: FaTwitch },
    { id: "5", status: "", src: "/image/twitter.png", name: "img05", img: FaTwitter },
    { id: "5", status: "", src: "/image/twitter.png", name: "img05", img: FaTwitter },
    { id: "6", status: "", src: "/image/whatsapp.png", name: "img06", img: FaTelegram },
    { id: "6", status: "", src: "/image/whatsapp.png", name: "img06", img: FaTelegram },
    { id: "7", status: "", src: "/image/youtube.png", name: "img07", img: FaSpotify },
    { id: "7", status: "", src: "/image/youtube.png", name: "img07", img: FaSpotify },
  ].sort(() => Math.random() - .5));

  const [previousCard, setpreviousCard] = useState(-1);
  const previousIndex = useRef(-1);
  const [matchList, setmatchList] = useState(0);
  const [unmatchList, setunmatchList] = useState(0);

  // const cardClassName = iconlist.status ? 'active' : ''


  const matchCheck = (currentCard) => {
    if (iconlist[currentCard.id] === iconlist[previousCard].id) {
      iconlist[previousCard].status = "active matched"
      iconlist[currentCard].status = "active matched"
      setpreviousCard(-1)
      setmatchList(matchList+1)
    } else {
      iconlist[currentCard].status = "active"
      seticonlist([...iconlist])
      setTimeout(() => {
        setpreviousCard(-1)
        iconlist[currentCard].status = "unmatch"
        iconlist[previousCard].status = "unmatch"
        seticonlist([...iconlist])
      }, 1000);
      setunmatchList(unmatchList+1)
    }
  }

  const handleClick = (index) => {
    if (index !== previousIndex.current) {
      if (iconlist[index].status === "active matched") {
        alet("card match!")
      } else {
        if (previousCard === -1) {
          previousIndex.current = index
          iconlist[index].status = "active"
          seticonlist([...iconlist])
          setpreviousCard(index)
        } else {
          matchCheck(index)
          previousIndex.current = -1
        }
      }
    } else {
      alert("card curently select!")
    }
  }

  return (
    <main className="container-fluid d-flex justify-content-center flex-column flex-fill bg-secondary vh-100">
      <div className="container d-flex justify-content-center">
        <div className="row" style={{ maxWidth: "25rem" }}>
          <div className="row text-center">
            <div className="col">
              <h5>Match: {matchList}</h5>
            </div>
            <div className="col">
              <h5>Truns: {unmatchList}</h5>
            </div>
          </div>
          {iconlist?.map((item, index) => {
            return (
              <div className="col-3 text-center py-2">
                <div className="card justify-content-center flex-column flex-fill" style={{ height: "5rem", maxWidth: "5rem" }}>
                  <span className={`card-img ${item.status} text-center py-2`} >
                    {/* <img src={item.src} id={item.id} alt={item.name} style={{ height: "3rem", maxWidth: "3rem" }}/> */}
                    {/* <item.img size="40" id={item.id} name={item.name} /> */}
                    <Card key={index} card={item} index={index} handleClick={handleClick} />
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  );
}
