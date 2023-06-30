import fs from 'fs'

const getBlogs = async (req, res) => {
    let myfile;
    let blogs = [];
    let data = await fs.promises.readdir("public/memes");

    // console.log("Data",data)
    
    const pageSize =  20;
    const currentPage = req.query.page || 1;

    const totalPages = data.length / 20;
  
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedFileNames = data.slice(startIndex, endIndex);
  
    res.status(200).json({ fileNames: slicedFileNames });
  
    // res.status(200).json({ data });
  };
  
  export default function handler(req, res) {
   if (req.method === "GET") {
      return getBlogs(req, res);
    }
    //   res.status(200).json({ message: "Hello From blog API", blog: req.body });
  }