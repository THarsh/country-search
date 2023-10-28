function SearchResultList({ name, src }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 bg-slate-50 mt-5">
      <div className="flex items-center p-4 border-2 border-gray-300 rounded-md">
        <img src={src} alt={name} className="w-16 h-10 mr-4 rounded" />
        <p className="text-lg font-semibold">{name}</p>
      </div>
    </div>
  );
}

export default SearchResultList;
