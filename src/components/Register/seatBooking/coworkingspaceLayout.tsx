// import React, { useState } from "react";
// import SeatCategory from "./seatCategory";
// import { SeatStatus } from "./seat";

// interface SeatData {
//   categoryName: string;
//   rows: { rowLabel: string; seats: { number: number; status: SeatStatus }[] }[];
// }

// const CoworkingSpaceLayout: React.FC = () => {
//   const [seatsData, setSeatsData] = useState<SeatData[]>([
//     {
//       categoryName: "VIP",
//       rows: [
//         {
//           rowLabel: "A",
//           seats: [
//             { number: 1, status: "available" },
//             { number: 2, status: "sold" },
//             { number: 3, status: "available" },
//           ],
//         },
//         {
//           rowLabel: "B",
//           seats: [
//             { number: 1, status: "available" },
//             { number: 2, status: "selected" },
//           ],
//         },
//       ],
//     },
//     {
//       categoryName: "Premium",
//       rows: [
//         {
//           rowLabel: "C",
//           seats: [
//             { number: 1, status: "sold" },
//             { number: 2, status: "available" },
//           ],
//         },
//         {
//           rowLabel: "D",
//           seats: [
//             { number: 1, status: "available" },
//             { number: 2, status: "available" },
//           ],
//         },
//       ],
//     },
//   ]);

//   const handleSeatSelect = (seatNumber: number, row: string) => {
//     setSeatsData((prev) =>
//       prev.map((category) => ({
//         ...category,
//         rows: category.rows.map((r) =>
//           r.rowLabel === row
//             ? {
//                 ...r,
//                 seats: r.seats.map((seat) =>
//                   seat.number === seatNumber && seat.status === "available"
//                     ? { ...seat, status: "selected" }
//                     : seat
//                 ),
//               }
//             : r
//         ),
//       }))
//     );
//   };

//   return (
//     <div className="coworking-layout" style={{ padding: "20px" }}>
//       {seatsData.map((category) => (
//         <SeatCategory
//           key={category.categoryName}
//           categoryName={category.categoryName}
//           rows={category.rows}
//           onSeatSelect={handleSeatSelect}
//         />
//       ))}
//     </div>
//   );
// };

// export default CoworkingSpaceLayout;

import Navbar from "../../Navbar/navbar";
import Footer from "../../Footer/footer";

const CoworkingSpaceLayout: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col bg-gray-100">
        <Navbar />
        <div className="layout-container">
          <div className="box">
            {" "}
            {/* this is grid box */}
            <div>
              {" "}
              {/* this is flex box */}
              <div>
                <span>Hot Desk</span>
              </div>
              <div className="box-child">
                <div className="seat">1</div>
                <div className="seat">2</div>
                <div className="seat">3</div>
                <div className="seat">4</div>
              </div>
            </div>
            <div>
              {" "}
              {/* this is flex box */}
              <div>
                <span>Dedicated Desk</span>
              </div>
              <div className="box-child">
                <div className="seat">1</div>
                <div className="seat">2</div>
                <div className="seat">3</div>
                <div className="seat">4</div>
              </div>
            </div>
            <div>
              {" "}
              {/* this is flex box */}
              <div>
                <span>cabin Space</span>
              </div>
              <div className="box-child">
                <div className="seat">1</div>
                <div className="seat">2</div>
                <div className="seat">3</div>
                <div className="seat">4</div>
              </div>
            </div>
            <div>
              {" "}
              {/* this is flex box */}
              <div>
                <span>Meeting room</span>
              </div>
              <div className="box-child">
                <div className="seat">1</div>
                <div className="seat">2</div>
                <div className="seat">3</div>
                <div className="seat">4</div>
              </div>
            </div>
            <div>
              {" "}
              {/* this is flex box */}
              <div>
                <span>conference room</span>
              </div>
              <div className="box-child">
                <div className="seat">1</div>
                <div className="seat">2</div>
                <div className="seat">3</div>
                <div className="seat">4</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CoworkingSpaceLayout;

// <div className="box-child">2</div>
// <div className="box-child">3</div>
// <div className="box-child">4</div>
// <div className="box-child">5</div>
// <div className="box-child">6</div>
