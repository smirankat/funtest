import React, { useRef, useState } from "react";
import classnames from "classnames";

function FoodBlock({
  type,
  qty,
  number,
  mouse,
  weight,
  end,
  desc,
  nonavailable,
  totalCount,
}) {
  const [count, setCount] = useState(0);
  const [clickHandler, setClickHandler] = useState(true);

  const toggleClickHandler = () => {
    setClickHandler(!clickHandler);
  };

  const plusCount = () => {
    if (count < totalCount) {
      setCount((prevcount) => prevcount + 1);
    }
  };
  const minusCount = () => {
    if (count > 0) {
      setCount((prevcount) => prevcount - 1);
    }
  };

  const cardRef = useRef();
  const disapproveRef = useRef();
  const card__topRef = useRef();

  const onClickHandlerBuy = () => {
    plusCount()
  }

  const onClickHandler = () => {
    clickHandler ? plusCount() : minusCount();
    cardRef.current.onmouseleave = function () {
      mouseLeave();
    };
    cardRef.current.onmouseenter = function () {
      mouseEnter();
    };
  };

  function mouseLeave() {
    toggleClickHandler();
    card__topRef.current.style.display = "block"
    disapproveRef.current.style.display = "none";
  }
  function mouseEnter() {
    if(clickHandler) {
      disapproveRef.current.style.display = "block"
      card__topRef.current.style.display = "none"
    } else {
      disapproveRef.current.style.display = "none"
      card__topRef.current.style.display = "block"
  }}

  return (
    <div>
      <div
        ref={cardRef}
        className={classnames("card", {
          card_blue: count === 0,
          card_pink: count > 0 && count < totalCount,
          card_gray: count === totalCount,
        })}
        onClick={onClickHandler}
      >
        <div className="card__text">
          <div ref={card__topRef} className="card__top">Сказочное заморское явство</div>
          <div ref={disapproveRef} className="disapprove">Котэ не одобряет?</div>
          <div className="card__name">Нямушка</div>
          <div className="card__type">{type}</div>
          <div className="card__qty">
            <b>{qty}</b> порций
          </div>
          <div className="card__num">
            <b>{number}</b> {mouse} в подарок
            <div>{end}</div>
          </div>
        </div>
        <div
          className={classnames("card__weight", {
            card__weight_blue: count === 0,
            card__weight_pink: count > 0 && count < totalCount,
            card__weight_gray: count === totalCount,
          })}
        >
          <div className="weight-num">{weight}</div>
          <div className="weight-kg">кг</div>
        </div>
      </div>
      {count > 0 && count < totalCount ? (
        <div className="desc">{desc}</div>
      ) : count === 0 ? (
        <div className="buy">
          Чего сидишь? Порадуй котэ, <span onClick={onClickHandlerBuy}>купи.</span>
        </div>
      ) : (
        <div className="nonavailable">{nonavailable}</div>
      )}
      <div className="count">{count}</div>
    </div>
  );
}

export default FoodBlock;
