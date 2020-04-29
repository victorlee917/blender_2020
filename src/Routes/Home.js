import React, { useState } from "react";
import ReactPageScroller from "react-page-scroller";
import GNB from "Components/GNB";
import Main from "Components/Main";
import Project from "Components/Project";
import Member from "Components/Member";
import Contact from "Components/Contact";

const usePage = (initialValue) => {
  const [number, setNumber] = useState(initialValue);
  const changePage = (value) => {
    document.getElementById(`radio${value}`).checked = true;
    setNumber(value);
  };
  return { number, changePage };
};

const Home = () => {
  const { number, changePage } = usePage(null);
  return (
    <>
      <GNB func={changePage} current={number}></GNB>
      <ReactPageScroller
        pageOnChange={(c) => changePage(c)}
        animationTimer={500}
        customPageNumber={number}
      >
        <Main></Main>
        <Project></Project>
        <Member></Member>
        <Contact></Contact>
      </ReactPageScroller>
    </>
  );
};

export default Home;
