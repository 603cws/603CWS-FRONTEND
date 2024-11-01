import React, { useState } from "react";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  detailedDescription: string;
}

const eventsData = [
  {
    title: "Kasa Kai Open Mic Sessions",
    date: "Ongoing",
    time: "7:00 PM - 10:00 PM",
    location: "603 The Coworking Space",
    description: "A lively open mic session for registered participants showcasing talents like music, poetry, and comedy.",
    imageUrl: "https://res.cloudinary.com/dhz6meh4y/image/upload/q_10/v1566471317/613A3152.jpg",
    detailedDescription:
      "Kasa Kai collaborates with 603 The Coworking Space to deliver enjoyable nights filled with creativity and community. Each session is unique and fosters a supportive atmosphere for seasoned performers and newcomers alike. This event provides a great opportunity to network with like-minded individuals.",
  },
  {
    title: "Design Wings UI/UX Workshop",
    date: "May 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Matulya Centre, Lower Parel",
    description: "Hands-on UI/UX workshop conducted by Design Wings, fostering creativity and practical learning.",
    imageUrl: "https://static.wixstatic.com/media/05396d_9fecb868b95245b8814151eb839c0bd0~mv2.jpg/v1/fill/w_875,h_505,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/zac-wolff-7uSKXpksCKg-unsplash.jpg",
    detailedDescription:
      "Design Wings, a renowned UI/UX design school, hosted a workshop at 603, providing participants with hands-on experience and insights from industry experts. The workshop emphasized practical design education and enhanced the skills of attendees.",
  },
  {
    title: "Red Bull Energy Drink Collaboration",
    date: "Ongoing",
    time: "Throughout the day",
    location: "603 The Coworking Space",
    description: "Red Bull energizes 603 employees by providing free energy drinks, creating a lively atmosphere.",
    imageUrl: "https://etimg.etb2bimg.com/photo/101100323.cms",
    detailedDescription:
      "Red Bull regularly visits 603 The Coworking Space, providing energy drinks that boost productivity and spirits. This collaboration fosters a dynamic and energetic environment, enhancing performance and community engagement.",
  },
  {
    title: "ICICI Prudential Mutual Fund Workshop",
    date: "August 2024",
    time: "11:00 AM - 1:00 PM",
    location: "Lower Parel Center",
    description: "ICICI Prudential educates coworkers about the benefits of mutual fund investments.",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2024/4/411397427/TO/VL/MI/61083566/icici-prudential-mutual-fund.png",
    detailedDescription:
      "ICICI Prudential's representatives conducted an interactive session at 603, educating coworkers on mutual funds. The session enhanced financial literacy, empowering attendees with the knowledge needed to make informed investment decisions.",
  },
  {
    title: "HSBC Credit Card Awareness Session",
    date: "September 2024",
    time: "3:00 PM - 5:00 PM",
    location: "Lower Parel Centre",
    description: "HSBC Credit Cards offers insights into the benefits and perks of their credit card options.",
    imageUrl: "https://www.hsbc.co.in/content/dam/hsbc/en/images/16-9/13903-live-plus-card-01-signature-red-1-generic-2000x1125.jpg",
    detailedDescription:
      "HSBC Credit Cards visited 603 to provide coworkers with information on the rewards, cashback offers, and privileges of their credit cards. This session was designed to enhance financial literacy and promote smart financial management.",
  },
  {
    title: "Financial Investment Workshop with Kartik Parekh",
    date: "July 2024",
    time: "9:00 AM - 12:00 PM",
    location: "603 The Coworking Space",
    description: "Kartik Parekh offers personalized financial advice to coworkers during an investment workshop.",
    imageUrl: "https://scontent.fdel28-1.fna.fbcdn.net/v/t39.30808-6/241373392_107866471637903_3192617419931596522_n.png?stp=dst-png_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=SKgF6ZQTbbMQ7kNvgECR-Ou&_nc_zt=23&_nc_ht=scontent.fdel28-1.fna&_nc_gid=Aw6tDY6mjz8EgYiADcwT-Ht&oh=00_AYA9Tj6a6BGGaMfM4NxZfWUrpKLWxvYXFSOeNV5KB_fD5A&oe=67285DE1",
    detailedDescription:
      "Renowned investment advisor Kartik Parekh conducted a comprehensive financial investment workshop, providing tailored advice to employees based on their unique financial situations. His insights helped attendees enhance their understanding of financial planning and strategies.",
  },
  {
    title: "Ground Zero's Plant Desk Initiative",
    date: "August 2024",
    time: "All day",
    location: "603 The Coworking Space",
    description: "Employees nominate coworkers to receive a plant for their desk, fostering sustainability and community.",
    imageUrl: "https://i.guim.co.uk/img/media/3d87cc0c8c2d713ddc1ab73d8221bacc296ac921/0_166_4500_2700/master/4500.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=e8418a2e4adcc87f9d7d2d0f62d13163",
    detailedDescription:
      "Ground Zero organized a thoughtful event where employees anonymously nominated coworkers to receive a plant for their desk. This initiative promoted a sense of appreciation and contributed to a greener, more pleasant workspace at 603.",
  },
  {
    title: "Mumbai Mum Tribe Entrepreneurial Panel",
    date: "June 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Amore Centre, Khar, Mumbai",
    description: "A panel session featuring prominent female entrepreneurs, fostering networking and collaboration.",
    imageUrl: "https://scontent.fdel28-1.fna.fbcdn.net/v/t39.30808-6/332940767_1856574414713647_1191539903949162969_n.png?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=2285d6&_nc_ohc=eJgiwNkQw-MQ7kNvgEwNxQU&_nc_ht=scontent.fdel28-1.fna&oh=00_AYD3VUN_lhy5eV8eWUrpBs0QXLy_nEqUzwhtxC9xhjaewA&oe=66FCD32E",
    detailedDescription:
      "Mumbai Mum Tribe hosted a panel session at 603, where prominent female entrepreneurs shared their experiences and strategies for business growth. The event emphasized collaboration and mutual empowerment within the entrepreneurial ecosystem.",
  },
  {
    title: "Artwala House Linocut Printing Workshop",
    date: "April 2024",
    time: "10:00 AM - 1:00 PM",
    location: "603 The Coworking Space",
    description: "Hands-on linocut printing workshop led by Artwala House, fostering creativity in a collaborative environment.",
    imageUrl: "https://vagabondexperiences.com/wp-content/uploads/2024/03/IMG_1027-820x520.jpg",
    detailedDescription:
      "Artwala House hosted a linocut printing workshop at 603, where participants learned intricate techniques for creating linocut prints. The event encouraged artistic expression and fostered a creative, collaborative environment.",
  },
  {
    title: "Gunj Pop-Up Event",
    date: "March 2024",
    time: "11:00 AM - 6:00 PM",
    location: "Matulya Centre, Lower Parel",
    description: "A lively marketplace event featuring small businesses showcasing their brands.",
    imageUrl: "https://gunjevent.in/wp-content/uploads/2024/03/12-scaled.jpg",
    detailedDescription:
      "Gunj Pop-Up organized a vibrant marketplace at 603, bringing together small businesses and creating valuable exposure for their brands. Attendees enjoyed engaging with vendors and exploring a diverse range of offerings.",
  },
  {
    title: "The Health Factory's Shark Tank Campaign",
    date: "April 2024",
    time: "All day",
    location: "All 603 Locations",
    description: "The Health Factory promotes nutritional awareness by offering free samplings of their products.",
    imageUrl: "https://www.thehealthfactory.in/cdn/shop/articles/Kunal-_-Janhvi-Youtube.jpg?v=1708414412",
    detailedDescription:
      "The Health Factory, a bread manufacturer featured on Shark Tank, launched a campaign at all 603 locations, offering free samples of their products and educating attendees on the health benefits of high-quality ingredients.",
  },
  {
    title: "HappyHikkups Pottery and Clay Workshop",
    date: "May 2024",
    time: "2:00 PM - 5:00 PM",
    location: "603 The Coworking Space",
    description: "An immersive pottery and clay workshop fostering creativity and community engagement.",
    imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/et00387646-qvnvvkqlne-landscape.jpg",
    detailedDescription:
      "HappyHikkups organized a hands-on pottery and clay workshop at 603, providing participants with the opportunity to explore various pottery techniques. The event fostered creativity and engagement within the community.",
  },
  {
    title: "Mending Mind's Mental Health Awareness Session",
    date: "July 2024",
    time: "3:00 PM - 4:30 PM",
    location: "603 The Coworking Space",
    description: "An informative session on managing daily mental stress, promoting well-being and resilience.",
    imageUrl: "https://scontent.fdel28-1.fna.fbcdn.net/v/t39.30808-6/359366880_659247789557682_8084992839664851166_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7nI98QFXPGQQ7kNvgEUukwP&_nc_ht=scontent.fdel28-1.fna&_nc_gid=ABE0Ub1YiFdxjZtvuniqnOS&oh=00_AYCGo8kYtIODjxWArKx0JiUxHK1WYHAVCqy_1xhKlPeOWw&oe=66FCAD38",
    detailedDescription:
      "Mending Mind conducted a mental health awareness session at 603, focusing on strategies for managing daily mental stress. The event promoted mental wellness and resilience, contributing to a healthier work environment.",
  },
];


function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const openFormModal = () => setIsFormOpen(true);
  const closeFormModal = () => setIsFormOpen(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    closeFormModal();
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Navbar */}
      <div style={{ zIndex: 20, position: "relative" }}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="pt-16">
        <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 text-center text-white">
          <h1 className="text-5xl font-bold">Upcoming Events</h1>
          <p className="text-xl mt-4">
            Join us for engaging and exciting events tailored for coworking professionals.
          </p>
        </section>
        <section className="bg-gray-100 py-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">Host Your Event!</h2>
          <p className="text-xl text-gray-600 mt-4">Interested in conducting your event? Submit your details here.</p>
          <button className="mt-6 py-3 px-8 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600" onClick={openFormModal}>
            Conduct an Event
          </button>
        </section>

        {/* Events Section */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-2xl rounded-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                  <div className="flex items-center mt-4 text-yellow-500">
                    <FaCalendarAlt />
                    <span className="ml-2 text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center mt-2 text-yellow-500">
                    <FaClock />
                    <span className="ml-2 text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center mt-2 text-yellow-500">
                    <FaMapMarkerAlt />
                    <span className="ml-2 text-gray-600">{event.location}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{event.description}</p>

                  {/* Button placed at the bottom */}
                  <div className="mt-auto py-5">
                    <button
                      className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                      onClick={() => openModal(event)}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </section>


        {/* Modal */}
        {isModalOpen && selectedEvent && (
          <Dialog
            open={isModalOpen}
            onClose={closeModal}
            className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div className="bg-white rounded-lg max-w-lg mx-auto p-6">
              <h3 className="text-3xl font-bold text-gray-800">
                {selectedEvent.title}
              </h3>
              <img
                src={selectedEvent.imageUrl}
                alt={selectedEvent.title}
                className="w-full h-48 object-cover my-4"
              />
              <div className="flex items-center mt-2 text-yellow-500">
                <FaCalendarAlt />
                <span className="ml-2 text-gray-600">{selectedEvent.date}</span>
              </div>
              <div className="flex items-center mt-2 text-yellow-500">
                <FaClock />
                <span className="ml-2 text-gray-600">{selectedEvent.time}</span>
              </div>
              <div className="flex items-center mt-2 text-yellow-500">
                <FaMapMarkerAlt />
                <span className="ml-2 text-gray-600">{selectedEvent.location}</span>
              </div>
              <p className="mt-4 text-gray-600">{selectedEvent.detailedDescription}</p>
              <div className="mt-6 text-right">
                <button
                  className="py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog>
        )}


      </div>

      {isFormOpen && (
        <Dialog open={isFormOpen} onClose={closeFormModal} className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50 max-h-screen">
          <div className="bg-white rounded-lg mx-auto p-8 w-1/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Conduct an Event</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Event Title</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Date</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Time</label>
                <input type="time" className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Location</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-500" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-yellow-500" rows={3} required />
              </div>
              <div className="text-right">
                <button type="submit" className="py-2 px-6 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                  Submit
                </button>
                <button type="button" className="ml-4 py-2 px-6 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition" onClick={closeFormModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </Dialog>
      )}


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Events;
