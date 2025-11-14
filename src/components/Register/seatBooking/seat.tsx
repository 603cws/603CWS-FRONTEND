import React from "react";

export type SeatStatus = "available" | "selected" | "sold";

interface SeatProps {
  number: number;
  status: SeatStatus;
  onSelect: (seatNumber: number) => void;
}

const Seat: React.FC<SeatProps> = ({ number, status, onSelect }) => {
  const handleClick = () => {
    if (status === "available") onSelect(number);
  };

  return (
    <div
      className={`seat ${status}`}
      onClick={handleClick}
      style={{
        border: "1px solid green",
        padding: "8px",
        margin: "5px",
        cursor: status === "available" ? "pointer" : "not-allowed",
        backgroundColor: status === "selected" ? "green" : "white",
        opacity: status === "sold" ? 0.5 : 1,
      }}
    >
      {number}
    </div>
  );
};

export default Seat;
