import React from 'react';
import { LinkPreview } from '../ui/link-preview';

const CV_URL = `${process.env.PUBLIC_URL}/Felipe_Cremerius_CV.pdf`;

/**
 * The CV download link, previewing the CV's first page on hover.
 * cv-preview.jpg is that page rendered at 2x; regenerate it whenever the PDF changes.
 */
export const CvLink = ({ children }) => (
  <LinkPreview
    url={CV_URL}
    download="Felipe_Cremerius_CV.pdf"
    imageSrc={`${process.env.PUBLIC_URL}/cv-preview.jpg`}
    // Letter-size portrait, so the page isn't cropped the way a 16:10 card would crop it.
    width={170}
    height={220}
    className="syn-link">
    {children}
  </LinkPreview>
);
