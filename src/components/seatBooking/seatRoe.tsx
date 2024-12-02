import React from "react";
import Seat, { SeatStatus } from "./seat";

interface SeatRowProps {
  rowLabel: string;
  seats: { number: number; status: SeatStatus }[];
  onSeatSelect: (seatNumber: number, row: string) => void;
}

const SeatRow: React.FC<SeatRowProps> = ({ rowLabel, seats, onSeatSelect }) => {
  return (
    <div
      className="seat-row"
      style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
    >
      <span style={{ marginRight: "10px", fontWeight: "bold" }}>
        {rowLabel}
      </span>
      {seats.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          status={seat.status}
          onSelect={() => onSeatSelect(seat.number, rowLabel)}
        />
      ))}
    </div>
  );
};

export default SeatRow;
