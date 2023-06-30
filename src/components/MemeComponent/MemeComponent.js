
import React, { useEffect, useState } from 'react'
import LoadMoreButton from '@/components/Button/LoadMoreButton';
import ImageList from '@/components/ImageList/ImageListItemComp';
import Image from 'next/image';

const MemeComponent = () => {
    const [fileNames, setFileNames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)


    const loadMoreFileNames = async () => {

        setLoading(true)
        setError(null)
    
   
     fetch(`/api/memes?page=${page}`).
     then(res => 
        res.json()
      ).then(res => {
        setFileNames([...fileNames, ...res.fileNames]);
        setPage(prevPage => prevPage + 1)
      }).catch((error) => {
        setError(error)
      }).finally(() => {
        setLoading(false)
      });
  
      
    };

    useEffect(() => {
        loadMoreFileNames();
    },[])

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
          return;
        }
        loadMoreFileNames();
      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [loading]);
      
  return (
    <div style={{ width :"100%"}}>
           <ImageList itemData={fileNames} />
      {/* Render a "Load More" button */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px" }}>

      {loading && <div>Loading </div>}
      {error && <p>Error: {error}</p>}
      </div>
    
  
    
   </div>
  )
}

export default MemeComponent