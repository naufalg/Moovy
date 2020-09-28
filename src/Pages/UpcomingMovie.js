import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getUpcomingActions } from "../redux/action/getUpcomingMovie.action";

// antd

import { Card, Skeleton, Layout, Menu, Breadcrumb } from "antd";
import { Row, Col, Divider } from "antd";

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

export default function UpcomingMovie() {
  const dispatch = useDispatch();
  // useEffect
  useEffect(() => {
    dispatch(getUpcomingActions());
  }, [dispatch]);
  // data
  const dataMovie = useSelector(
    (state) => state.getUpcomingMovieReducer.data.results
  );
  console.log("dataMovie", dataMovie);

  const history = useHistory();
  console.log("history", history);

  //   image url
  const posterUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <Content style={{ padding: "0 50px" }}>
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Upcoming Movie</Breadcrumb.Item>
      </Breadcrumb> */}

      <div className="site-layout-content">
        <h2>Upcoming Movie</h2>
        <Row gutter={[24, 24]}>
          {dataMovie !== undefined ? (
            dataMovie.map((item, index) => (
              <Col className="gutter-row" xs={24} md={6} key={index}>
                <Card
                  hoverable
                  // style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src={`${posterUrl}${item.poster_path}`}
                    />
                  }
                  onClick={() => {
                    history.push(`movie/${item.id}`);
                  }}
                >
                  <Meta
                    title={item.title}
                    description={"Rating: " + item.vote_average}
                  />
                  <Meta description={"Release Date: " + item.release_date} />
                </Card>
              </Col>
            ))
          ) : (
            <Skeleton active />
          )}
        </Row>
      </div>
    </Content>
  );
}
