import React from 'react';
import {AnonIcon, CommentsIcon, HideIcon, MenuIcon, SaveIcon, ShareIcon, WarningIcon} from "../../icons";
import {KarmaUp} from "../../icons/KarmaUp";

export enum EIcon {
  Comments = 'comments',
  Hide = 'hide',
  Menu = 'menu',
  Save = 'save',
  Share = 'share',
  Warning = 'warning',
  Up = 'karmaUp',
  Anon = 'anon'
}

export interface IIconProps {
  name: EIcon;
  width: number;
  height: number;
  className?: string;
}

export function Icon({name, width, height, className}: IIconProps) {
  switch (name) {
    case EIcon.Comments:
      return <CommentsIcon width={width} height={height} />
    case EIcon.Hide:
      return <HideIcon width={width} height={height} />
    case EIcon.Menu:
      return <MenuIcon width={width} height={height} />
    case EIcon.Save:
      return <SaveIcon width={width} height={height} />
    case EIcon.Share:
      return <ShareIcon width={width} height={height} />
    case EIcon.Warning:
      return <WarningIcon width={width} height={height} />
    case EIcon.Up:
      return <KarmaUp width={width} height={height} />
    case EIcon.Anon:
      return <AnonIcon width={width} height={height} />
  }
}
