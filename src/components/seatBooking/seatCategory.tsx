import React from "react";
import SeatRow from "./seatRoe";
import { SeatStatus } from "./seat";

interface SeatCategoryProps {
  categoryName: string;
  rows: { rowLabel: string; seats: { number: number; status: SeatStatus }[] }[];
  onSeatSelect: (seatNumber: number, row: string) => void;
}

const SeatCategory: React.FC<SeatCategoryProps> = ({
  categoryName,
  rows,
  onSeatSelect,
}) => {
  return (
    <div className="seat-category" style={{ marginBottom: "30px" }}>
      <h3 style={{ marginBottom: "10px" }}>{categoryName}</h3>
      {rows.map((row) => (
        <SeatRow
          key={row.rowLabel}
          rowLabel={row.rowLabel}
          seats={row.seats}
          onSeatSelect={onSeatSelect}
        />
      ))}
    </div>
  );
};

export default SeatCategory;
