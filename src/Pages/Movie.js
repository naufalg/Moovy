import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getDetailActions } from "../redux/action/getDetailMovie.action";

// antd
import { Image, Skeleton } from "antd";
import { Layout, Menu, Breadcrumb, Divider } from "antd";
const { Header, Content, Footer } = Layout;

export default function Movie(props) {
  let params = useParams();
  console.log("params", params);
  let movieId = params.id;
  // console.log("movieId", movieId);
  //   const [random, setRandom] = useState();
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getDetailActions(movieId));
  }, [dispatch]);

  const detailMovieData = useSelector(
    (state) => state.getDetailMovieReducer.data
  );
  const companyData = detailMovieData.production_companies;
  console.log("detailMovieData", detailMovieData);
  //   detailMovieData !== undefined
  //     ? console.log("detailMovieData", detailMovieData)
  //     : "sabar bossss";
  const posterUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Content style={{ padding: "0 50px" }}>
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Link to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Link>
        <Breadcrumb.Item>Now Playing</Breadcrumb.Item>
        <Breadcrumb.Item>{detailMovieData.title}</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-content">
        {detailMovieData !== undefined ? (
          <div>
            <h1>{detailMovieData.title}</h1>
            <Image
              //   width={}
              src={`${posterUrl}${detailMovieData.backdrop_path}`}
              // placeholder={
              //   <Image
              //     src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              //     width={200}
              //   />
              // }
            />
            <Divider />

            <h3>Rating: {detailMovieData.vote_average}/10</h3>
            <h3>Release date: {detailMovieData.release_date}</h3>
            {/* <h3>
              Company:{" "}
              {companyData.map(
                (item, index) => item.name
              )}
            </h3> */}
            <h4>{detailMovieData.overview}</h4>
          </div>
        ) : (
          <div>
            <Skeleton.Image />
            <Skeleton active />
          </div>
        )}
      </div>
    </Content>
  );
}
