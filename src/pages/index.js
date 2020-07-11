import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";
import BracketsIcon from "../components/icons/Brackets";
import { usePhish, useDispatchPhish } from "../context";

const Index = () => {
  return (
    <div className="home">
      <p className="caption">
        Phish is a band that formed in the late 80's that is known for their
        enormous catalog of songs and live shows that make use of extended
        improvisation. Most shows have been recorded over the past 30 years and
        can be heard here!
      </p>
      <p className="caption">Don't know any Phish songs? Try "Free"</p>
      <SearchInput />
      <SearchResults />
      <a
        className="footer-link"
        href="https://github.com/zachweinberg/phish-player"
        target="_blank"
      >
        <span>View code</span>
        <BracketsIcon width="17px" height="17px" fill="#ccc" />
      </a>
    </div>
  );
};

export default Index;
