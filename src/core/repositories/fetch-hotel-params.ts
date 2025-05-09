export type OrderByOption = 'ranking' | 'name' | 'price' | 'createdAt' | 'rating'

export interface FetchHotelParams {
	// Location filters
	city?: string
	state?: string
	country?: string

	// Sorting options
	orderBy?: OrderByOption
	orderDirection?: 'asc' | 'desc'

	// Pagination
	page?: number
	perPage?: number

	// Additional filters
	minRating?: number
	maxPrice?: number
	minPrice?: number
	hasComodity?: string[]
}
