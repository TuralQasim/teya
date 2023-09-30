import arrow from "../icons/arrow_black.svg";

function BookBtn() {
  return (
    <button className="book_btn">
      забронировать <img  src={arrow} alt="" />
    </button>
  );
}

export default BookBtn;
