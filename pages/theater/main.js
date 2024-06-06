const renderTheaterList = (id) => {
    const list = document.getElementById(id);
    
    for(let i = 0; i < 10; i++) {
        const e = document.createElement('div');
        e.classList.add("col", "col-lg-3","col-md-4", "col-sm-6", "col-12","theater","d-flex","flex-column","gap-2","align-items-start");
    
        e.innerHTML = 
        `
        <img src="https://www.bhdstar.vn/wp-content/uploads/2023/12/GARDEN-243x330-1.jpg" alt="">
        <h5>BHD Star Le Van Viet</h5>
        <img src="../../icons/like.svg" height="16" width="16" alt="">
        <button class="btn btn-primary" style="width: 100%;">THÔNG TIN CHI TIẾT</button>
        <button class="btn btn-outline-primary" style="width: 100%;"><img src="../../icons/share.svg" height="20" width="20" alt=""> CHIA SẺ</button>
        `

        list.appendChild(e);
    }
}



const render = () => {
    renderTheaterList("list-theater");
}

render();