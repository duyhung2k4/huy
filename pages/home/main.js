const renderFilmList = (id) => {
    const list = document.getElementById(id);
    
    for(let i = 0; i < 10; i++) {
        const filmContainer = document.createElement('div');
        filmContainer.classList.add('swiper-slide');
    
        filmContainer.innerHTML = 
        `
        <a href="/pages/showtimes/index.html" class="film">
            <img src="https://www.bhdstar.vn/wp-content/uploads/2024/06/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png" alt="">
            <div class="d-flex flex-row gap-1 mt-2">
                <span class="badge bg-danger">T18</span>
                <span class="badge bg-secondary">PHỤ ĐỀ</span>
                <span class="badge bg-success">2D</span>
            </div>
            <p class="mt-3">DOOR: DUNG MO CUA</p>
            <p class="mt-1">Thể loại phim: Thriller</p>
            <button class="btn btn-pick mt-3">
                <img src="https://www.bhdstar.vn/wp-content/themes/loodo-starter/inc/imgs/ticketIcon.png" height="20" width="20" alt="">
                Mua vé ngay
            </button>
        </a>
        `

        list.appendChild(filmContainer);
    }
}

const renderSaleList = (id) => {
    const list = document.getElementById(id);
    
    for(let i = 0; i < 10; i++) {
        const filmContainer = document.createElement('div');
        filmContainer.classList.add('swiper-slide');
    
        filmContainer.innerHTML = 
        `
        <a>
            <img class="ratio ratio-16x9" src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-18.png" alt="">
            <p class="mt-3 sale-title text-start">Giá vé từ 55k - Dành cho Fan cứng U22</p>
            <p class="mt-1 text-start">Thời gian khuyến mãi: 26/8/2023 - 26/9/2023</p>
        </a>
        `

        list.appendChild(filmContainer);
    }
}


const render = () => {
    renderFilmList("list-film-1");
    renderFilmList("list-film-2");
    renderFilmList("list-film-3");
    renderSaleList("list-sale-1");
    renderSaleList("list-sale-2");
}

render();