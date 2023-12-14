import React from 'react';
import Link from 'next/link';
import ListingCard from './ListingCard';

const CategoryCard = ({ category }) => {
  const { name, listings } = category;

  // Display only the first 4 listings for each category
  const firstFourListings = listings.slice(0, 4);

  if (firstFourListings.length === 0) {
    // If the category has no listings, don't render anything
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {firstFourListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      <Link href={`/categories/${name.toLowerCase()}`}>
        View All {name} Listings
      </Link>
    </div>
  );
};

export default CategoryCard;
