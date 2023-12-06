/*import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Material Tailwind
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign in</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div>
    </div>
  );
}
*/

import React from 'react';
import Hero from './Hero';
import ComplexNavbar from './Header';
import Image from 'next/image';
import Flag from '../public/images/flag.jpg'


const data = [
  {
    category: "Happening This Week",
    listings: [
      {
        title: "Gorilla Trekking in Volcanoes National Park",
        description: "Embark on an unforgettable adventure through the lush rainforests of Volcanoes National Park and encounter the majestic mountain gorillas in their natural habitat.",
        imageUrl: "/image1.jpg",
      },
      {
        title: "Kigali's Vibrant Bar Scene",
        description: "Immerse yourself in Kigali's electrifying nightlife, exploring trendy bars, live music venues, and rooftop lounges that offer stunning city views.",
        imageUrl: "/image2.jpg",
      },
      {
        title: "Culinary Delights Await",
        description: "Savor the flavors of Rwanda's culinary scene, from traditional Rwandan cuisine to international fine dining experiences.",
        imageUrl: "/image3.jpg",
      },
      {
        title: "Experience Rwanda's Artistic Expressions",
        description: "Explore Rwanda's vibrant arts scene, visiting galleries, attending cultural performances, and discovering local artisans' creations.",
        imageUrl: "/image4.jpg",
      },
    ],
  },
  {
    category: "Nightlife",
    listings: [
      {
        title: "Discover Kigali's Vibrant Bar Scene",
        description: "Immerse yourself in Kigali's electrifying nightlife, exploring trendy bars, live music venues, and rooftop lounges that offer stunning city views.",
        imageUrl: "/image2.jpg",
      },
      {
        title: "Live Music Experiences",
        description: "Catch a live performance at one of Kigali's many music venues, showcasing local and international artists.",
        imageUrl: "/image5.jpg",
      },
      {
        title: "Rooftop Bars with City Views",
        description: "Unwind with a drink and enjoy panoramic city views from one of Kigali's rooftop bars.",
        imageUrl: "/image6.jpg",
      },
    ],
  },
];

const ListingBlock = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Categorized Listings</h2>

      {data.map((category) => {
        return (
          <div key={category.category}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>

            <div className="grid grid-cols-4 gap-4">
              {category.listings.slice(0, 4).map((listing) => (
                <div key={listing.title} className="rounded-lg shadow-md">
                  <img src={listing.imageUrl} alt={listing.title} className="w-full h-48 object-cover rounded-top" />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{listing.title}</h4>
                    <p className="text-gray-600 mb-4">{listing.description}</p>
                    <a href="#" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">View More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};



const HomePage = () => {
  return (
    <div>
      <div className="w-full">
        <ComplexNavbar />
      </div>
      <Hero />
      <div className="container px-4 py-6 mx-auto gap-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 mr-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Outside in Rwanda - Your adventure awaits!</h2>

              <p className="text-gray-600 mb-4">
                We're on a mission to showcase and promote Rwanda's rich art, culture, and design heritage, while also providing tourists with a seamless booking experience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">For tourists:</h3>

              <p className="text-gray-600 mb-4">
                Discover the land of a thousand hills like never before with Outside In Rwanda. We offer a variety of unique art, culture, and design experiences. Book your next adventure today and create memories that will last a lifetime.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">For listing hosts:</h3>

              <p className="text-gray-600 mb-4">
                Get more visibility for your experiences and seamless bookings with a variety of payment options. We're here to help you share Rwanda's beauty with the world. List your experience today!
              </p>

              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">List an Experience</button>
            </div>
            <div className="flex-shrink-0">
              <Image src={Flag} alt="Image" className="w-80 h-[500px] object-cover rounded" />
            </div>
            
          </div>
          
        </div>
        
      </div>
      {/* Content Block End */}

      <ListingBlock />

    
    </div>
  );
  }
  export default HomePage;