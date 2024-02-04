"use client";
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useRef } from "react";
import { FaSteam, FaXbox, FaWindows, FaUnity, FaTwitch, FaTwitter, FaTelegram, FaSpotify } from "react-icons/fa";

export default function Home() {

  const [iconlist, seticonlist] = useState([
    { id: "0", status: "", name: "Steam", img: FaSteam },
    { id: "0", status: "", name: "Steam", img: FaSteam },
    { id: "1", status: "", name: "Xbox", img: FaXbox },
    { id: "1", status: "", name: "Xbox", img: FaXbox },
    { id: "2", status: "", name: "Windows", img: FaWindows },
    { id: "2", status: "", name: "Windows", img: FaWindows },
    { id: "3", status: "", name: "Unity", img: FaUnity },
    { id: "3", status: "", name: "Unity", img: FaUnity },
    { id: "4", status: "", name: "Twitch", img: FaTwitch },
    { id: "4", status: "", name: "Twitch", img: FaTwitch },
    { id: "5", status: "", name: "Twitter", img: FaTwitter },
    { id: "5", status: "", name: "Twitter", img: FaTwitter },
    { id: "6", status: "", name: "Telegram", img: FaTelegram },
    { id: "6", status: "", name: "Telegram", img: FaTelegram },
    { id: "7", status: "", name: "Spotify", img: FaSpotify },
    { id: "7", status: "", name: "Spotify", img: FaSpotify },
  ].sort(() => Math.random() - .5));

  const [previousCard, setpreviousCard] = useState(-1);
  const previousIndex = useRef(-1);

  const matchCheck = (currentCard) => {
    if (iconlist[currentCard.id] == iconlist[previousCard].id) {
      iconlist[previousCard].status = "match"
      iconlist[currentCard].status = "match"
      setpreviousCard(-1)
    } else {
      iconlist[currentCard].status = "active"
      seticonlist([...iconlist])
      setTimeout(() => {
        setpreviousCard(-1)
        iconlist[currentCard].status = "unmatch"
        iconlist[previousCard].status = "unmatch"
        seticonlist([...iconlist])
      }, 600);
    }
  }

  const handleClick = (index) => {
    console.log(111);
    if (index != previousIndex) {
      if (iconlist[index].status == "match") {
        alet("card match!")
      } else {
        if (previousCard == -1) {
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
              <h5>Match: {(iconlist.status).langh}</h5>
            </div>
            <div className="col">
              <h5>Truns:</h5>
            </div>
          </div>
          {iconlist?.map((item, index) => (
            <div className="col-3 text-center py-2" onClick={() => handleClick(index)} key={index} index={index}>
              <div className="card justify-content-center flex-column flex-fill" style={{ height: "5rem", maxWidth: "5rem" }}>
                <span className={`card-img ${iconlist.status} text-center py-2`}>
                  <item.img size="40" id={item.id} name={item.name} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
