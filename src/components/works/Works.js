import React from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import "./override.css";
import Work1Img from "../../images/work1.jpg";
import Work2Img from "../../images/work2.jpg";
import Work3Img from "../../images/work3.jpg";
import Work4Img from "../../images/work4.jpg";
import Work5Img from "../../images/work5.jpg";
import Work6Img from "../../images/work6.jpg";
import Work8Img from "../../images/work8.jpg";
import Work9Img from "../../images/work9.jpg";
import Work10Img from "../../images/work10.jpg";
import Work11Img from "../../images/work11.jpg";

const Works = () => {
    var data = [
        {
            url: Work1Img,
            thumbUrl: Work1Img,
        },
        {
            url: Work5Img,
            thumbUrl: Work5Img,
        },
        {
            url: Work4Img,
            thumbUrl: Work4Img,
        },
        {
            url: Work11Img,
            thumbUrl: Work11Img,
        },
        {
            url: Work3Img,
            thumbUrl: Work3Img,
        },
        {
            url: Work2Img,
            thumbUrl: Work2Img,
        },
        {
            url: Work10Img,
            thumbUrl: Work10Img,
        },
        {
            url: Work9Img,
            thumbUrl: Work9Img,
        },

        {
            url: Work8Img,
            thumbUrl: Work8Img,
        },
        {
            url: Work6Img,
            thumbUrl: Work6Img,
        },
    ];
    return (
        <div>
            <DztImageGalleryComponent images={data} />
        </div>
    );
};

export default Works;
