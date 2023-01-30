import { AiFillStar } from "react-icons/ai";

function Star({ filled, onClick }) {
  return(
    <AiFillStar
      color={ filled ? "#ff859b" : "lightgray" }
      onClick={onClick}
    />
  )
}

export default Star;