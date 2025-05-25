interface SearchFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

export default function SearchFilterSection({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories
}: SearchFilterProps) {
  return (
    <section className="py-12" id="courses">
      <div className="page !min-h-fit space-y-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-primary md:w-96"
          />
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap
                  ${selectedCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background-tertiary text-foreground-muted hover:bg-background-secondary'
                  } transition-colors duration-200`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
