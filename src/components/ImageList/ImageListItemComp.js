import { ImageListItem, ImageList } from '@mui/material';
import Image from 'next/image';
import React from 'react'

// function srcset(image, size, rows = 1, cols = 1) {
//     return {
//       src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//       srcSet: `${image}?w=${size * cols}&h=${
//         size * rows
//       }&fit=crop&auto=format&dpr=2 2x`,
//     };
//   }

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
              <Image
              width={300}
              height={300}
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