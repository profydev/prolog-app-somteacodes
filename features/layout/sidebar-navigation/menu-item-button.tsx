import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
  iconShouldRotate?: boolean;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
  iconShouldRotate,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`${styles.icon} ${
            isCollapsed && iconShouldRotate && styles.rotateRight
          }`}
          src={iconSrc}
          alt={`${text} icon`}
        />{" "}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
