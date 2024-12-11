import amore from "/officeimg/Amore/Amore.JPG";
import makhija from "/officeimg/Makhija/Makhija.JPG";
import ahmedabad from "/officeimg/Ahmedabad/ahmedabad.jpg";
import matulya from "/officeimg/Matulya/Matulya.jpg";
import sunshine from "/officeimg/Sunshine/sunshine.JPG";
import Sunmill from "/officeimg/SunMill/Sunmill.jpeg";
import { gallery5 } from "../utils/Landing/Landing";

type Location = {
  name: string;
  address: string;
  imgSrc: string;
  link: string;
  about: string;
  meetingroom: number;
  conferenceroom: number;
  daypass: number;
  membership?: object;
  enablebooking: boolean;
  conferencerooms: string[];
  meetingrooms: string[];
  daypasses: string[];
};

export const locations: { city: string; locations: Location[] }[] = [
  {
    city: "Mumbai",
    locations: [
      // {
      //   name: "Pinnacle Corporate Park, BKC",
      //   address:
      //     "Bandra Kurla Complex, Kolivery Village, Mmrda Area, Bkc Cst Link Road, Bandra Kurla Complex- Bandra East, Mumbai - 400051",
      //   imgSrc: gallery5, // Replace with actual image link
      //   link: "/locations/Pinnacle-Corporate-Park",
      //   about: "BKC offers a wide range of facilities to cater to the needs of its residents, employees, and visitors. The complex boasts of modern office spaces, commercial buildings, hotels, restaurants, and shopping centers. The presence of multinational corporations, financial institutions, and government offices in BKC has further enhanced its reputation as a prime business destination. Additionally, BKC is known for its green spaces and well-maintained infrastructure. Moreover, BKC is home to a mix of luxury hotels, upscale restaurants, and retail outlets, offering a perfect blend of work and leisure options.",
      //   meetingroom: 899,
      //   conferenceroom: 1499,
      //   daypass: 999,
      //   membership: {},
      //   enablebooking: false,
      //   conferencerooms: ["Pinnacle Conference Room"],
      //   meetingrooms: ["Pinnacle Meeting Room"],
      //   daypasses : ["Pinnacle Day Pass"]
      // },
      {
        name: "Khar - Amore Centre",
        address:
          "Amore Centre, 5th Floor, Hasnabad Ln, Khar, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052",
        imgSrc: amore, // Replace with actual image link
        link: "/locations/Amore-Centre",
        about:
          "603 The coworking space based in Khar west which is famous for being an entertainment and prime hub. Khar is one neighborhood that seamlessly brings together this city’s hustle bustle and entertainment aspects together. Our centre is situated on the main-road which helps the commuter to travel easily by rail and bus. Khar and Bandra stations are at 5-7 minutes commute.",
        meetingroom: 699,
        conferenceroom: 1199,
        daypass: 899,
        membership: {
          daypass: {
            tendays: 7799,
            fifteendays: 10899,
            twentydays: 12799,
          },
          conferenceroom: {
            tenhours: 10499,
            twentyhours: 19199,
            thirtyhours: 24599,
          },
          meetingroom: {
            tenhours: 5799,
            twentyhours: 9399,
            thirtyhours: 11999,
          },
        },
        enablebooking: true,
        conferencerooms: ["Amore Conference Room"],
        meetingrooms: ["Amore Meeting Room"],
        daypasses: ["Amore Day Pass"],
      },
      {
        name: "Bandra - Makhija Arcade",
        address:
          "Makhija Arcade, 6th Floor, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052",
        imgSrc: makhija, // Replace with actual image link
        link: "/locations/Makhija-Archade",
        about:
          "603 The coworking space based in Bandra west which is famous for being an entertainment and prime hub. Bandra is one neighbourhood that seamlessly brings together this city’s hustle bustle and entertainment aspects together. Our centre is situated on the main-road which helps the commuter to travel easily by rail and bus. Khar and Bandra stations are at 5-7 minutes commute.",
        meetingroom: 699,
        conferenceroom: 1199,
        daypass: 899,
        membership: {
          daypass: {
            tendays: 7799,
            fifteendays: 10899,
            twentydays: 12799,
          },
          conferenceroom: {
            tenhours: 10499,
            twentyhours: 19199,
            thirtyhours: 24599,
          },
          meetingroom: {
            tenhours: 5799,
            twentyhours: 9399,
            thirtyhours: 11999,
          },
        },
        enablebooking: true,
        conferencerooms: ["Bandra Conference Room"],
        meetingrooms: ["Bandra Meeting Room"],
        daypasses: ["Bandra Day Pass"],
      },
      {
        name: "Dadar - Sunshine Tower",
        address:
          "Sunshine Tower, 26th Floor, Plot No, 616, Tulsi Pipe Rd, Dadar West, Parel, Mumbai, Maharashtra 400013",
        imgSrc: sunshine, // Replace with actual image link
        link: "/locations/Sunshine-Tower",
        about:
          "Sunshine Tower is based in Dadar which is famous for being an entertainment and commercial hub. Situated on the 29th Floor overlooking the most beautiful Mumbai Skyline. Dadar is one neighbourhood that seamlessly brings together this city’s commercial and entertainment aspects together.",
        meetingroom: 699,
        conferenceroom: 1199,
        daypass: 899,
        membership: {
          daypass: {
            tendays: 7799,
            fifteendays: 10899,
            twentydays: 12799,
          },
          conferenceroom: {
            tenhours: 10499,
            twentyhours: 19199,
            thirtyhours: 24599,
          },
          meetingroom: {
            tenhours: 5799,
            twentyhours: 9399,
            thirtyhours: 11999,
          },
        },
        enablebooking: true,
        conferencerooms: ["Sunshine Conference Room"],
        meetingrooms: ["Sunshine Meeting Room"],
        daypasses: ["Sunshine Day Pass"],
      },
      {
        name: "Lower Parel - Matulya Centre",
        address:
          "Matulya Centre, 2nd Floor, Lower Parel, Mumbai, Maharashtra 400013",
        imgSrc: matulya, // Replace with actual image link
        link: "/locations/Matulya-Centre",
        about:
          "Matulya Centre is based in Lower Parel, famous for being an entertainment and commercial hub. Lower Parel seamlessly brings together this city’s commercial and entertainment aspects. Our centre is situated on the main road, making it easy to travel by rail and bus. Lower Parel and Currey Road station is just a 5-minute walk away.",
        meetingroom: 599,
        conferenceroom: 1099,
        daypass: 799,
        membership: {
          daypass: {
            tendays: 6799,
            fifteendays: 8849,
            twentydays: 10199,
          },
          conferenceroom: {
            tenhours: 10499,
            twentyhours: 19199,
            thirtyhours: 24599,
          },
          meetingroom: {
            tenhours: 5799,
            twentyhours: 9399,
            thirtyhours: 11999,
          },
        },
        enablebooking: true,
        conferencerooms: ["Matulya Conference Room"],
        meetingrooms: ["Matulya Meeting Room"],
        daypasses: ["Matulya Day Pass"],
      },
      {
        name: "Lower Parel - Kamala Mills",
        address:
          "Kamala Mills, 4th Floor, Lower Parel, Mumbai, Maharashtra 400013",
        imgSrc: "/officeimg/Kamala/kamala7.jpg", // Replace with actual image link
        link: "/locations/Kamala-Mills",
        about:
          "Our new location at Kamala Mills Compound is based in Lower Parel which is famous for being an entertainment and commercial hub. Lower Parel is one neighbourhood that seamlessly brings together this city’s commercial and entertainment aspects together. Our centre is situated in Kamala Mills Compound one of the most Prime Commercial location in Lower Parel with easy connectivity to rail and bus. Lower Parel and Currey Road station is at 10 minutes walking distance.",
        meetingroom: 799,
        conferenceroom: 1499,
        daypass: 899,
        membership: {
          daypass: {
            tendays: 7799,
            fifteendays: 10899,
            twentydays: 12799,
          },
          conferenceroom: {
            tenhours: 10499,
            twentyhours: 19199,
            thirtyhours: 24599,
          },
          meetingroom: {
            tenhours: 5799,
            twentyhours: 9399,
            thirtyhours: 11999,
          },
        },
        enablebooking: true,
        conferencerooms: ["Kamala Mills Conference Room"],
        meetingrooms: [
          "Kamala Mills Meeting Room 1",
          "Kamala Mills Meeting Room 2",
        ],
        daypasses: ["Kamala Mills Day Pass"],
      },
      {
        name: "Lower Parel - Sun Mill Compound",
        address:
          "Sun Mill Compound, Unit 15, Cama Industrial Estate, Mumbai 400013",
        imgSrc: Sunmill, // Replace with actual image link
        link: "/locations/Sun-Mill-Compound",
        about:
          "Sun Mill Compound is based in Lower Parel which is famous for being an entertainment and commercial hub. Lower Parel is one neighbourhood that seamlessly brings together this city’s commercial and entertainment aspects together. Our centre is situated on the main-road which helps the commuter to travel easily by rail and bus. Lower Parel and Currey Road station is at 5 minutes walking distance. If you are sociable, you can find several restaurants, food joints and gaming zone in the proximity. Palladium mall is at 5 minutes distance which has a multiplex, 5-star restaurants, four levels of exclusive shopping area.",
        meetingroom: 499,
        conferenceroom: 999,
        daypass: 599,
        membership: {
          daypass: {
            tendays: 4899,
            fifteendays: 5799,
            twentydays: 6299,
          },
          conferenceroom: {
            tenhours: 7799,
            twentyhours: 13799,
            thirtyhours: 17399,
          },
          meetingroom: {
            tenhours: 3799,
            twentyhours: 6399,
            thirtyhours: 8849,
          },
        },
        enablebooking: true,
        conferencerooms: ["Sunmill Conference Room"],
        meetingrooms: ["Sunmill Meeting Room"],
        daypasses: ["Sunmill Day Pass"],
      },
      {
        name: "Pentagon Classic",
        address:
          "11, Western Express Hwy, Parshiwada, Chakala, Andheri East, Mumbai, Maharashtra 400053",
        imgSrc: "/officeimg/Pentagon/pentagon.JPG", // Replace with actual image link
        link: "/locations/Pentagon-Classic",
        about:
          "Located in the heart of Navi Mumbai, our Technocity center offers a modern, dynamic workspace designed for businesses of all sizes. Strategically positioned near major corporate hubs and with excellent connectivity to highways, this space is perfect for professionals seeking convenience and productivity.",
        meetingroom: 399,
        conferenceroom: 699,
        daypass: 599,
        membership: {},
        enablebooking: false,
        conferencerooms: ["Pentagon Conference Room"],
        meetingrooms: ["Pentagon Meeting Room"],
        daypasses: ["Pentagon Day Pass"],
      },
    ],
  },
  {
    city: "Navi Mumbai",
    locations: [
      {
        name: "Millennium Business Park",
        address:
          "Millennium Business Park, Sector 2, Kopar Khairane, Navi Mumbai, Maharashtra 400701",
        imgSrc: "/officeimg/Rupa/Rupa4.jpg", // Replace with actual image link
        link: "/locations/Millenium-Business-Park",
        about:
          "Discover the epitome of flexibility with our coworking office spaces in Ghansoli. Our brand-new facility is designed to revolutionize your work experience, providing state-of-the-art coworking office spaces in Ghansoli that seamlessly blend innovation, collaboration, and comfort. Our ergonomic furniture, high-speed internet, and cutting-edge technology ensure that your workday is seamless and efficient. At 603, we understand the evolving needs of professionals and businesses, and our Ghansoli location is tailored to meet those demands.",
        conferenceroom: 799,
        daypass: 499,
        meetingroom: 399,
        membership: {
          daypass: {
            tendays: 3849,
            fifteendays: 4949,
            twentydays: 5749,
          },
          conferenceroom: {
            tenhours: 6749,
            twentyhours: 12575,
            thirtyhours: 18299,
          },
          meetingroom: {
            tenhours: 2749,
            twentyhours: 6799,
            thirtyhours: 9599,
          },
        },
        enablebooking: true,
        conferencerooms: ["Millennium Conference Room"],
        meetingrooms: ["Millennium Meeting Room"],
        daypasses: ["Millennium Day Pass"],
      },
      {
        name: "Technocity",
        address: "Technocity, 5th Floor, Navi Mumbai, Maharashtra 400701",
        imgSrc: "/officeimg/Technocity/Techno2.JPG", // Replace with actual image link
        link: "/locations/Technocity",
        about:
          "Come experience the perfect balance of work and community at 603 The Coworking Space, Technocity, Navi Mumbai.",
        conferenceroom: 799,
        daypass: 499,
        meetingroom: 399,
        membership: {
          daypass: {
            tendays: 3849,
            fifteendays: 4949,
            twentydays: 5749,
          },
          conferenceroom: {
            tenhours: 6749,
            twentyhours: 12575,
            thirtyhours: 18299,
          },
          meetingroom: {
            tenhours: 2749,
            twentyhours: 6799,
            thirtyhours: 9599,
          },
        },
        enablebooking: true,
        conferencerooms: ["Technocity Conference Room"],
        meetingrooms: ["Technocity Meeting Room"],
        daypasses: ["Technocity Day Pass"],
      },
    ],
  },
  {
    city: "Ahmedabad",
    locations: [
      {
        name: "Navratna Corporate Park, Ahmedabad",
        address:
          "B306/ 307/ 308 - Navratna Corporate Park, Ashok Vatika, Ambli Bopal Road, Ahmedabad, Gujarat 380058",
        imgSrc: ahmedabad, // Replace with actual image link
        link: "/locations/Navratna-Corporate-Park",
        about:
          "603 The Coworking Space is excited to announce the opening of our newest office space in the vibrant city of Ahmedabad, strategically located at Navratna Corporate Park. This state-of-the-art facility offers a dynamic and innovative environment designed to foster productivity and collaboration. Our Ahmedabad office space is equipped with modern amenities and cutting-edge technology, ensuring a seamless working experience for all our members. Navratna Corporate Park is one of Ahmedabad's most prestigious business hubs Situated in the heart of the city, the office space is easily accessible from major residential and commercial areas.",
        conferenceroom: 799,
        daypass: 599,
        meetingroom: 399,
        membership: {
          daypass: {
            tendays: 4649,
            fifteendays: 5749,
            twentydays: 6675,
          },
          conferenceroom: {
            tenhours: 6749,
            twentyhours: 12575,
            thirtyhours: 18299,
          },
          meetingroom: {
            tenhours: 2749,
            twentyhours: 6799,
            thirtyhours: 9599,
          },
        },
        enablebooking: true,
        conferencerooms: ["Navratna Conference Room"],
        meetingrooms: ["Navratna Meeting Room"],
        daypasses: ["Navratna Day Pass"],
      },
    ],
  },
];
