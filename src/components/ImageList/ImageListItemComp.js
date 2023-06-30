import { ImageListItem, ImageList, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import ImageViewModal from "../ImageViewComponent/ImageViewModal";

const ImageListItemComp = ({ itemData }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const sxScreen = useMediaQuery("(max-width:480px)");
  const mdScreen = useMediaQuery("(max-width:720px)");
  const lgScreen = useMediaQuery("(max-width:1080px)");
  const exLgScreen = useMediaQuery("(max-width:1280px)");
  const xxLgScreen = useMediaQuery("(max-width:1400px)");

  let cols;
  if (sxScreen) {
    cols = 1;
  } else if (mdScreen) {
    cols = 2;
  } else if (lgScreen) {
    cols = 3;
  } else if (exLgScreen) {
    cols = 3;
  } else if (xxLgScreen) {
    cols = 4;
  } else {
    cols = 5;
  }

  return (
    <Fragment>
      <ImageList variant="quilted" cols={cols}>
        {itemData.map((item, key) => (
          <ImageListItem key={key}>
            <img
              style={{
                width: 300,
                height: 300,
                margin: "20px",
                cursor: "pointer",
              }}
              src={`/memes/${item} `}
              alt={"Memes"}
              loading="lazy"
              onClick={() => handleImageClick(`/memes/${item} `)}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {showModal && (
        <ImageViewModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
    </Fragment>
  );
};

export default ImageListItemComp;
