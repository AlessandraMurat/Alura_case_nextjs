"use client";

import React, { ReactNode, ElementType } from "react";

interface TitleProps {
  children: ReactNode;
  as?: ElementType;
}

const Title: React.FC<TitleProps> = ({ children, as: Tag = "h1" }) => {
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            font-size: 32px;
            color: red;
          }
        `}
      </style>
    </>
  );
};

export default Title;
