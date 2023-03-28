import fs from "fs";

const addBlog = (req, res) => {
  const data = req.body;

  //   console.log(req.body.title.replace(/ /g, "-"));

  fs.writeFile(
    `blogData/${req.body.title.replace(/ /g, "-")}.json`,
    JSON.stringify(data),
    (err) => {
      if (err) console.log(err);
      else {
        // console.log("File written successfully\n");
        // console.log("The written has the following contents:");
        console.log(
          fs.readFileSync(
            `blogData/${req.body.title.replace(/ /g, "-")}.json`,
            "utf8"
          )
        );
      }
    }
  );

  res.status(200).json({ data: data });
};

const getBlogs = async (req, res) => {
  let myfile;
  let blogs = [];
  let data = await fs.promises.readdir("blogData");

  for (let index = 0; index < data.length; index++) {
    myfile = await fs.promises.readFile(`blogData/${data[index]}`, "utf-8");

    blogs.push(JSON.parse(myfile));
  }

  // console.log(blogs);
  res.status(200).json({ blogs });
};

export default function handler(req, res) {
  if (req.method === "POST") {
    return addBlog(req, res);
  } else if (req.method === "GET") {
    return getBlogs(req, res);
  }
  //   res.status(200).json({ message: "Hello From blog API", blog: req.body });
}
