import { ImageListItem, ImageList } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const ImageListItemComp = ({itemData}) => {

    return (
        <ImageList 
          // sx={{ width: 500, height: 450 }}
          
          variant="quilted"
          cols={5}
          
          // rowHeight={121}
        >
          {itemData.map((item, key) => (
            <ImageListItem key={key} >
              <img
              style = {{width:300,
              height:300,margin : "20px"}}

                src={`/memes/${item} `}
                alt={"Memes"}
                // loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      
  )
}

export default ImageListItemComp