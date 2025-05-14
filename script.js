let currentPage = 1;
const totalPages = 5;

function nextPage() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    if (currentPage <= totalPages) {
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
}
