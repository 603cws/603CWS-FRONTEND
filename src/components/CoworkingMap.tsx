import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const coworkingLocations = [
  {
    id: 1,
    name: "Lower Parel - Matulya Centre",
    lat: 18.99883,
    lng: 72.827628,
    image: "/officeimg/Matulya/Matulya.jpg",
    url: "https://www.google.com/maps/place/Matulya+Centre/@18.99883,72.827628,16z/data=!4m6!3m5!1s0x3be7ce8d495475cf:0x60b2ec04a00313c8!8m2!3d18.9988295!4d72.8276284!16s%2Fg%2F11c67svd_0?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    name: "Lower Parel - Sun Mill Compound",
    lat: 18.994785,
    lng: 72.827001,
    image: "/officeimg/SunMill/Sunmill.jpeg",
    url: "https://www.google.com/maps/place/Sun+Mill+Compound/@18.994785,72.827001,14z/data=!4m6!3m5!1s0x3be7cf4397856501:0x482f3f34e960ca79!8m2!3d18.9947849!4d72.827001!16s%2Fg%2F11h8j1nlk2?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    name: "Lower Parel - Kamala Mills",
    lat: 19.002959,
    lng: 72.82799,
    image: "/officeimg/Kamala/kamala.jpg",
    url: "https://www.google.com/maps/place/Kamala+Mills+Compound/@19.002959,72.82799,10z/data=!4m6!3m5!1s0x3be7ceed2879bcd3:0x519449d10ba027f0!8m2!3d19.002959!4d72.8279899!16s%2Fg%2F11cn5qqrcm?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 4,
    name: "Dadar - Sunshine Tower",
    lat: 19.011181,
    lng: 72.837578,
    image: "/officeimg/Sunshine/sunshine.JPG",
    url: "https://www.google.com/maps/place/Sunshine+Tower/@19.011181,72.837578,16z/data=!4m6!3m5!1s0x3be7cee8325aee35:0xb0d98d4080e115a!8m2!3d19.0111806!4d72.8375785!16s%2Fg%2F11clg91zp2?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 5,
    name: "Khar - Amore Centre",
    lat: 19.069895,
    lng: 72.838618,
    image: "/officeimg/Amore/Amore.JPG",
    url: "https://www.google.com/maps/place/Amore+(Khar+West)/@19.069895,72.838618,16z/data=!4m6!3m5!1s0x3be7c90fe1f8f311:0x82834a11fb2f0757!8m2!3d19.0698951!4d72.8386177!16s%2Fg%2F11cs9ybblt?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 6,
    name: "Bandra - Makhija Arcade",
    lat: 19.065411,
    lng: 72.834966,
    image: "/officeimg/Makhija/Makhija.JPG",
    url: "https://www.google.com/maps/place/Makhija+Arcade/@19.065411,72.834966,16z/data=!4m6!3m5!1s0x3be7c911698fff91:0x1f2d87a146cbbbc2!8m2!3d19.0654111!4d72.8349656!16s%2Fg%2F11c37ptfd8?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 7,
    name: "Andheri - Pentagon Classic",
    lat: 19.110338,
    lng: 72.854557,
    image: "/officeimg/Pentagon/pentagon.JPG",
    url: "https://www.google.com/maps/place/Classic+Pentagon/@19.110338,72.854557,17z/data=!4m6!3m5!1s0x3be7c83489ddac01:0xa443ab275b61ce12!8m2!3d19.1103383!4d72.854557!16s%2Fg%2F11bwgcgl2r?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 8,
    name: "Fort - Lawyers Chamber",
    lat: 18.932812,
    lng: 72.835735,
    image: "/officeimg/Fort/Fort1.jpeg",
    url: "https://www.google.com/maps/place/Kaiser-E-Hind+Pvt.+Ltd./@18.932812,72.835735,16z/data=!4m6!3m5!1s0x3be7d1db3d654c9b:0xde8247f7a6a611c7!8m2!3d18.9328116!4d72.8357346!16s%2Fg%2F11qjznmv4y?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 9,
    name: "Trade Link, Kamala Mills",
    lat: 19.002597,
    lng: 72.827453,
    image: "/officeimg/Tradelink/1.jpg",
    url: "https://www.google.com/maps/place/Tradelink/@19.002597,72.827453,16z/data=!4m6!3m5!1s0x3be7ce932f47756f:0xc480633b0cecc064!8m2!3d19.0025966!4d72.8274529!16s%2Fg%2F11fy17ssw2?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 10,
    name: "Marathon Futurex",
    lat: 18.99493,
    lng: 72.830656,
    image: "/officeimg/MarathonFuturex/marathon1.jpeg",
    url: "https://www.google.com/maps/place/Marathon+Futurex/@18.99493,72.830656,1647m/data=!3m1!1e3!4m6!3m5!1s0x3be7cef3836311c1:0x8cfa9225e0aa9bca!8m2!3d18.99493!4d72.8306556!16s%2Fm%2F0dsbbwr?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 11,
    name: "Navratna Corporate Park, Ahmedabad",
    lat: 23.0287853,
    lng: 72.4890308,
    image: "/officeimg/Ahmedabad/ahmedabad.jpg",
    url: "https://www.google.com/maps/place/NAVRATNA+CORPORATE+PARK/@23.0287853,72.4890308,801m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e9b5684c326e5:0xe113d1820ff24ab4!8m2!3d23.0287853!4d72.4916057!16s%2Fg%2F11f5pskkgk?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoASAFQAw%3D%3D",
  },
];

const CoworkingMap = () => {
  return (
    <div className="h-[500px] w-full z-10">
      <MapContainer
        center={[19.046, 72.8999]}
        zoom={11}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; 603 TheCoWorking Space"
        />

        {coworkingLocations.map((location) => {
          return (
            <Marker key={location.id} position={[location.lat, location.lng]}>
              <Popup>
                <div className="w-48 space-y-2">
                  {/* Clickable */}
                  <a
                    href={location.url.replace("/embed", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:underline block"
                  >
                    {/* Image */}
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-24 object-cover rounded"
                    />
                    {location.name}
                  </a>

                  <p className="text-xs text-gray-500">Open in Google Maps</p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default CoworkingMap;
