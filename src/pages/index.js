import { useState } from "react";
import axios from "axios";
import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import BracketsIcon from "../components/icons/Brackets";
import { usePhish, useDispatchPhish } from "../context";

const Index = () => {
  const state = usePhish();

  return (
    <div className="home">
      <p className="caption">
        Don't know any Phish songs? Try "Free" - it's a great starter song!
      </p>
      <SearchInput />
      <SearchResults />
      <a
        className="footer-link"
        href="https://github.com/zachweinberg/phish-player.git"
        target="_blank"
      >
        <span>View code</span>
        <BracketsIcon width="17px" height="17px" fill="#ccc" />
      </a>
    </div>
  );
};

export default Index;
