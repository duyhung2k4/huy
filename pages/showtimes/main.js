const renderTheaterList = (id) => {
    const list = document.getElementById(id);

    for (let i = 0; i < 10; i++) {
        const e = document.createElement('div');
        e.classList.add("showtime", "d-flex", "flex-column", "align-items-start");

        e.innerHTML =
            `
        <div class=" d-flex flex-row justify-content-center gap-2 align-items-center">
        <img src="https://www.bhdstar.vn/wp-content/uploads/2023/08/logo.png" height="24" width="24" alt="">
        <span>BHD Star The Garden</span>
    </div>
    <p class="mt-2">Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
    <div class="row" style="width: 100%;">
        <div class="time col-3">
            <div class="time-value" data-bs-toggle="modal" data-bs-target="#exampleModal">
                14:25-12/5
            </div>
            <div class="gap-2 mt-1 d-flex flex-row justify-content-center align-items-center">
                <span class="badge bg-secondary">PHỤ ĐỀ</span>
                <span class="badge bg-secondary bg-success">2D</span>
            </div>
        </div>
        <div class="time col-3">
            <div class="time-value" data-bs-toggle="modal" data-bs-target="#exampleModal">
                16:25-12/5
            </div>
            <div class="gap-2 mt-1 d-flex flex-row justify-content-center align-items-center">
                <span class="badge bg-secondary">PHỤ ĐỀ</span>
                <span class="badge bg-secondary bg-success">2D</span>
            </div>
        </div>
        <div class="time col-3">
            <div class="time-value" data-bs-toggle="modal" data-bs-target="#exampleModal">
                18:25-12/5
            </div>
            <div class="gap-2 mt-1 d-flex flex-row justify-content-center align-items-center">
                <span class="badge bg-secondary">PHỤ ĐỀ</span>
                <span class="badge bg-secondary bg-success">2D</span>
            </div>
        </div>
        <div class="time col-3">
            <div class="time-value" data-bs-toggle="modal" data-bs-target="#exampleModal">
                20:25-12/5
            </div>
            <div class="gap-2 mt-1 d-flex flex-row justify-content-center align-items-center">
                <span class="badge bg-secondary">PHỤ ĐỀ</span>
                <span class="badge bg-secondary bg-success">2D</span>
            </div>
        </div>
        
    </div>
        `

        list.appendChild(e);
    }
}



const render = () => {
    renderTheaterList("list-show-time");
}

render();