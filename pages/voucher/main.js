const renderSaleList = (id) => {
    const list = document.getElementById(id);
    
    for(let i = 0; i < 10; i++) {
        const filmContainer = document.createElement('div');
        filmContainer.classList.add('swiper-slide');
    
        filmContainer.innerHTML = 
        `
        <a href="#">
            <img class="ratio ratio-16x9" src="https://www.bhdstar.vn/wp-content/uploads/2023/08/Rectangle-18.png" alt="">
            <p class="mt-3 sale-title text-start">Giá vé từ 55k - Dành cho Fan cứng U22</p>
            <p class="mt-1 text-start">Thời gian khuyến mãi: 26/8/2023 - 26/9/2023</p>
        </a>
        `

        list.appendChild(filmContainer);
    }
}

const render = () => {
    renderSaleList("list-sale-1");
    renderSaleList("list-sale-2");
}

render();