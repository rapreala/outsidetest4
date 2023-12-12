
import React from 'react';
import Hero from './Hero';
import ComplexNavbar from './Header';
import Image from 'next/image';
import Flag from '../public/images/flag.jpg';
// import ListingCard from './listings/[id]';
import ListingCard from './ListingCard';
import prisma from '../lib/prisma';


// import CategoryListings from './CategoryListings';

// const listing = {
//   id: "123",
//   name: "Cozy Beachfront Cabin",
//   images: ["https://res.cloudinary.com/dxb8sk5iu/image/upload/v1702287458/EXPERIENCES/Culture%20and%20Heritage/IMG_856FA872438A-1_vmnh9a.jpg"],
//   shortCaption: "Relax and unwind with ocean views",
//   startDate: "2023-12-25",
//   host: {
//     username: "John Doe",
//   },
// };
export const getStaticProps = async () => {
  try {
    // Replace with your actual availability criteria
    const listings = await prisma.listing.findMany({
      include: {
        // images: true,
        // name: true,
        // shortCaption: true,
        // startDate: true,
        host: {
          select: { username: true },
        },
      },
    });

    return {
      props: { listings },
      revalidate: 10, // Adjust revalidation time as needed
    };
  } catch (error) {
    console.error('Error fetching listings:', error); // Consider proper error handling
    return { props: {listings: [],},} 
  };
};


const HomePage = (props) => {
  return (
    <div>
      <div>
        <ComplexNavbar/>
      </div>
      <Hero />
      <div className="container px-4 py-6 mx-auto gap-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 mr-32">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Outside in Rwanda - Your adventure awaits!</h2>

              <p className="text-gray-600 mb-4">
                We&apos;re on a mission to showcase and promote Rwanda&apos;s rich art, culture, and design heritage, while also providing tourists with a seamless booking experience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">For tourists:</h3>

              <p className="text-gray-600 mb-4">
                Discover the land of a thousand hills like never before with Outside In Rwanda. We offer a variety of unique art, culture, and design experiences. Book your next adventure today and create memories that will last a lifetime.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">For listing hosts:</h3>

              <p className="text-gray-600 mb-4">
                Get more visibility for your experiences and seamless bookings with a variety of payment options. We&apos;re here to help you share Rwanda&apos;s beauty with the world. List your experience today!
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
      
      {/* <ListingCard listing={listings} /> */}

      {props.listings.map((listing) => (
            <div key={listing.id}>
              <ListingCard listing={listing} />
            </div>
          ))}

      {/* <ListingBlock /> */}
      

    
    </div>
  );
}
export default HomePage;