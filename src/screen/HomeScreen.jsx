import React from "react";
import Row from "../Components/Row";
import requests from "../request";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";

const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
        isNetflix
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLarge
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLarge
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLarge
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLarge
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLarge
      />
    </div>
  );
};

export default HomeScreen;
