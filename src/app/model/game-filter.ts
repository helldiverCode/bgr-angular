export interface GameFilter {
  searchTerm?: string;      // Search by game name or description (optional)
  category?: string;        // Filter by category (e.g., strategy, party, card)
  minPlayers?: number;      // Minimum number of players
  maxPlayers?: number;      // Maximum number of players
  maxPlayTime?: number;     // Maximum playtime in minutes
  ageRecommendation?: number; // Minimum age requirement
  minRating?: number;       // Minimum average rating (1-5)
  availableOnly?: boolean;  // Show only available games
  page?: number;
  pageSize?: number;
};

export const DEFAULT_FILTER: GameFilter = { page: 0, pageSize: 10 };
