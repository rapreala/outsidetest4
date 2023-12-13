// import React from 'react';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     CardFooter,
//     Typography,
//     Button,
//     IconButton,
//   } from "@material-tailwind/react";
  
//   /// Define ListingProps type for data consistency
// const ListingProps = {
//   id: String,
//   name: String,
//   images: Array, // Array of image URLs (string)
//   shortCaption: String,
//   startDate: String, // Assuming string representation of date
//   host: {
//     username: String,
//   }, // Optionally include only username if not needed
// };

// // Define BookingCard function with preferred syntax
// const ListingCard = ({ listing }) => {
//   const { id, name, images, shortCaption, startDate, host } = listing;

//   return (
//     <Card className="w-full max-w-[26rem] shadow-lg">
//       <CardHeader floated={false} color="blue-gray">
//         <img src={images[0]} alt="Listing Image" />
//         <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
//         <IconButton size="sm" color="red" variant="text" className="!absolute top-4 right-4 rounded-full">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
//             <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//           </svg>
//         </IconButton>
//       </CardHeader>
//       <CardBody>
//         <div className="mb-3 flex items-center justify-between">
//           <Typography variant="h5" color="blue-gray" className="font-medium">
//             {name}
//           </Typography>
//           <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
//             Hosted by: {host.username}
//           </Typography>
//         </div>
//         <Typography color="gray">
//           Start Date: {startDate}
//         </Typography>
//         <Typography color="gray">{shortCaption}</Typography>
//       </CardBody>
//       <CardFooter className="pt-3">
//         <Button size="lg" fullWidth={true}>Book</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// // Export the BookingCard function
// export default ListingCard;

// components/ListingCard.js
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

// Define ListingCard function with preferred syntax
const ListingCard = ({ listing }) => {
  const { id, name, images, shortCaption, startDate, host } = listing;

  return (
    <Card className="w-full max-w-[26rem] shadow-lg mb-8">
      <CardHeader floated={false} color="blue-gray">
        <img src={images[0]} alt="Listing Image" className="w-full h-48 object-cover rounded-t" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton size="sm" color="red" variant="text" className="!absolute top-4 right-4 rounded-full">
          {/* Your close button icon */}
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {name}
          </Typography>
          <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
            Hosted by: {host.username}
          </Typography>
        </div>
        <Typography color="gray">
          Start Date: {startDate}
        </Typography>
        <Typography color="gray">{shortCaption}</Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Book
        </Button>
      </CardFooter>
    </Card>
  );
};

// Export the ListingCard component
export default ListingCard;
