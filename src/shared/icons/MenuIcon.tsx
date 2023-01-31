import * as React from "react";
import {ISvgIcon} from "../../types/ISvgIcon";

export function MenuIcon({width, height}: ISvgIcon) {
  return (
    <svg width={width} height={height} viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
      <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
      <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
    </svg>
  );
}
