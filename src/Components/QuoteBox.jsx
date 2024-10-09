import { FaQuoteLeft } from "react-icons/fa6";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datafetch, STATUS } from "../Store/QuoteDataSlice";

function QuoteBox() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(datafetch());
  }, [dispatch]);
  let { Mystate, status } = useSelector((state) => state.quote);

  let handleClick = () => {
    dispatch(datafetch());
  };
  if (status == STATUS.PENDING) {
    return (
      <div className="scaling-squares-spinner">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    );
  } else if (status == STATUS.IDLE) {
    return (
      <>
        {Mystate !== ""
          ? Mystate.map((val, ind) => (
              <div key={ind} id="quote-box" className="container ">
                <div id="text" className="text-start">
                  <FaQuoteLeft id="quoteicon" />
                  {val.quote}
                </div>

                <div id="author" className="container text-end">
                  ~ {val.author}
                </div>
                <div className="container text-end">
                  <button id="new-button" onClick={() => handleClick()}>
                    New quote
                  </button>
                </div>
                <div id="tweet" className="container text-center">
                  <a
                    id="tweet-quote"
                    href={`twitter.com/intent/tweet?text=${encodeURIComponent(
                      val.quote
                    )}&hashtags=RandomQuote`}
                    target="_top"
                  >
                    Tweet quote
                  </a>
                </div>
              </div>
            ))
          : ""}
      </>
    );
  } else {
    return <h1>Something went wrong!</h1>;
  }
}
export default QuoteBox;
