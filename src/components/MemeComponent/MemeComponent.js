import React, { useEffect, useState } from "react";

import ImageList from "@/components/ImageList/ImageListItemComp";
import { imgArray } from "@/config/imgArray";

const MemeComponent = () => {
  const [fileNames, setFileNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  var page = 1;

  const paginationFunction = (data) => {
    const pageSize = 20;
    const currentPage = page;

    // const totalPages = data.length / 20;

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedFileNames = data.slice(startIndex, endIndex);

    return slicedFileNames;
  };

  const loadMoreFileNames = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = paginationFunction(imgArray.names);
      console.log(page);

      page = page + 1;
      setFileNames((prev) => [...prev, ...data]);
      // setPage(prevPage => prevPage + 1)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreFileNames();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    loadMoreFileNames();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageList itemData={fileNames} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {loading && <div>Loading </div>}
        {error && <p>Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default MemeComponent;
