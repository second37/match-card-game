"use client";
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { FaSteam, FaXbox, FaWindows, FaUnity, FaTwitch, FaTwitter, FaTelegram, FaSpotify } from "react-icons/fa";

export default function Home() {
  const [piclist, setpiclist] = useState([
    { id: "0", name: "Steam", img: FaSteam },
    { id: "0", name: "Steam", img: FaSteam },
    { id: "1", name: "Xbox", img: FaXbox },
    { id: "1", name: "Xbox", img: FaXbox },
    { id: "2", name: "Windows", img: FaWindows },
    { id: "2", name: "Windows", img: FaWindows },
    { id: "3", name: "Unity", img: FaUnity },
    { id: "3", name: "Unity", img: FaUnity },
    { id: "4", name: "Twitch", img: FaTwitch },
    { id: "4", name: "Twitch", img: FaTwitch },
    { id: "5", name: "Twitter", img: FaTwitter },
    { id: "5", name: "Twitter", img: FaTwitter },
    { id: "6", name: "Telegram", img: FaTelegram },
    { id: "6", name: "Telegram", img: FaTelegram },
    { id: "7", name: "Spotify", img: FaSpotify },
    { id: "7", name: "Spotify", img: FaSpotify },
  ]);
  return (
    <main className="container-fluid d-flex justify-content-center flex-column flex-fill bg-secondary vh-100">
      <div className="container">
      <div className="row text-center">
      <div className="col">
      <h4>Match:</h4>
      </div>
      <div className="col">
      <h4>Truns:</h4>
      </div>
      </div>
        <div className="row">
          {piclist?.map((item, index) => (
            <div className="col-3 text-center py-2">
              <div class="card" style={{ width: "10rem", hight: "10rem" }}>
                <div className="text-center py-2">
                  <FaSteam size="50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
