import React, { useRef, useState } from "react";

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
  const card__qtyRef = useRef();
  const card__numRef = useRef();
  const card__weightRef = useRef();

const clickHandle = () => {
  if(count < totalCount) {clickHandler ? plusCount() : minusCount()
  }else{disable()}
}

const mouseHandle = () => {
  if(count < totalCount) {cardRef.current.onmouseleave = function () {
    mouseLeave();
  };
  cardRef.current.onmouseenter = function () {
    mouseEnter();
  }} else {
    cardRef.current.onmouseleave = function () {
      disable();
    };
    cardRef.current.onmouseenter = function () {
      disable();
    }
    };
}

  const onClickHandler = () => {
    clickHandle()
    mouseHandle()
  };

  function mouseLeave() {
    toggleClickHandler();
    mouseLeaveOn()
  }
  function mouseEnter() {
    clickHandler ? mouseEnterOn() : mouseEnterOnTo()
  }

  function mouseLeaveOn() {
    cardRef.current.setAttribute('class', 'card card_pink')
    disapproveRef.current.style.display = "none"
    card__topRef.current.style.display = "block"
    card__weightRef.current.style.backgroundColor = "#e62e7a"
  }
  function mouseEnterOn() {
    cardRef.current.setAttribute('class', 'card card_blue')
    disapproveRef.current.style.display = "block"
    card__topRef.current.style.display = "none"
    card__weightRef.current.style.backgroundColor = "#2ea8e6"
  }
  function mouseEnterOnTo() {
    cardRef.current.setAttribute('class', 'card card_blue')
    disapproveRef.current.style.display = "none"
    card__topRef.current.style.display = "block"
    card__weightRef.current.style.backgroundColor = "#2ea8e6"
  }
  function disable() {
    cardRef.current.setAttribute('class', 'card card_gray')
    disapproveRef.current.style.display = "none"
    card__topRef.current.style.display = "block"
    card__topRef.current.style.color = "rgba(179, 179, 179, 0.502)"
    card__qtyRef.current.style.color = "rgba(179, 179, 179, 0.502)"
    card__numRef.current.style.color = "rgba(179, 179, 179, 0.502)"
    card__weightRef.current.style.backgroundColor = "rgba(179, 179, 179, 0.502)"
  }

  return (
    <div>
      <div
        ref={cardRef}
        className="card card_blue"
        onClick={onClickHandler}
      >
        <div className="card__text">
          <div ref={card__topRef} className="card__top">Сказочное заморское явство</div>
          <div ref={disapproveRef} className="disapprove">Котэ не одобряет?</div>
          <div className="card__name">Нямушка</div>
          <div className="card__type">{type}</div>
          <div ref={card__qtyRef} className="card__qty">
            <b>{qty}</b> порций
          </div>
          <div ref={card__numRef} className="card__num">
            <b>{number}</b> {mouse} в подарок
            <div>{end}</div>
          </div>
        </div>
        <div ref={card__weightRef}
          className="card__weight"
        >
          <div className="weight-num">{weight}</div>
          <div className="weight-kg">кг</div>
        </div>
      </div>
      {count > 0 && count < totalCount ? (
        <div className="desc">{desc}</div>
      ) : count === 0 ? (
        <div className="buy">
          Чего сидишь? Порадуй котэ, <span onClick={plusCount}>купи.</span>
        </div>
      ) : (
        <div className="nonavailable">{nonavailable}</div>
      )}
      <div className="count">{count}</div>
    </div>
  );
}

export default FoodBlock;
