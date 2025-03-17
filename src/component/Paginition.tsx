export default function Paginition() {
  const [page, setPage] = useState(1);

  const maxVisible = 1;
  // Fungsi yang mengembalikan array nomor halaman
  const getPaginationRange = () => {
    let startPage, endPage;
    if (totalPage <= maxVisible) {
      startPage = 1;
      endPage = totalPage;
    } else {
      const middle = Math.floor(maxVisible / 2);
      if (page <= middle + 1) {
        startPage = 1;
        endPage = maxVisible;
      } else if (page + middle >= totalPage) {
        startPage = totalPage - maxVisible + 1;
        endPage = totalPage;
      } else {
        startPage = page - middle;
        endPage = page + middle;
      }
    }
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const limit = 4;
  const totalPage = Math.ceil(data.length / limit);

  const start = (page - 1) * limit;
  const end = start + limit;
  return (
    <div>
      {/* Tombol Previous */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="p-2 bg-gray-200 rounded"
      >
        &lt; Prev
      </button>

      {/* Mapping Langsung dari Fungsi */}
      {getPaginationRange().map((page, index) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          disabled={page === index}
          className={`p-2 ${
            page === page ? "bg-gray-200" : "bg-red-500 text-white"
          } rounded`}
        >
          {page}
        </button>
      ))}

      {/* Tombol Next */}
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPage))}
        disabled={page === totalPage}
        className="p-2 bg-gray-200 rounded"
      >
        Next &gt;
      </button>
    </div>
  );
}
