import React, { useEffect, useState } from "react";
import fetchData from "../fetchBlog";
import "../styles/Blog.scss";

const Blog = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  return (
    <div className="Blog">
      <h1>المدونة</h1>
      <div className="cards">
        {data.map(
          (item) =>
            item.Status === "Done" && (
              <div className="card" key={item.id}>
                {item.Image && item.Image.length > 0 && (
                  <img
                    src={item.Image[0].url}
                    alt={item.Title}
                    className="blog-image"
                  />
                )}
                <h2>{item.Title}</h2>
                <p className="date">{item.Date}</p>
                <p className="blog-body">{item.Body}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Blog;
