import { collection, getDocs, orderBy, query } from "firebase/firestore";

import { db } from "../../../../firebase/clientApp";

// export default function async(req, res) {
//   const { method } = req;

//   let posts = {};

//   const postCollectionRef = query(
//     collection(db, "posts"),
//     orderBy("created", "desc")
//   );

//   if (method === "GET") {
//     const data = await getDocs(postCollectionRef);

//     data.docs.map((doc) => {
//       posts = { ...doc.data(), id: doc.id };
//     });

//     res.status(200).json({ posts });
//   }
// };
