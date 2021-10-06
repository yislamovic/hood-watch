import React from "react";
import ButtonGroup from "../component/ButtonGroup";
import Image from "../assets/vote.jpeg"
import "../styles/ButtonGroup.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import LikedBy from "./LikedBy";





function LikedByContainer() {
 
  return (
    <>
     <div className="liked-by">
        <LikedBy />
      </div>
  </>
  );
}
export default LikedByContainer;