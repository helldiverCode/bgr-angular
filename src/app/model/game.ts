export interface Game {
  id?: string;               // Unique identifier
  name?: string;             // Game title
  description?: string;      // Brief game description
  category?: string;         // Board game category (e.g., strategy, party, card)
  minPlayers?: number;       // Minimum players required
  maxPlayers?: number;       // Maximum players allowed
  playTime?: number;         // Estimated playtime in minutes
  ageRecommendation?: number; // Recommended minimum age
  rentalPrice?: number;      // Price per rental (e.g., per hour/day)
  available?: boolean;       // Availability status (true = available, false = rented out)
  imageUrl?: string;         // URL to game cover image
  barcode?: string;
  quantity?: number;
  inStock?: number;
}
