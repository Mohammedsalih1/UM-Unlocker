// sticky header
const header = document.querySelector("[data-main-header]");
const scrollWatcher = document.createElement("div");
header.before(scrollWatcher);

const observer = new IntersectionObserver(entries => {
    header.classList.toggle("sticking", !entries[0].isIntersecting);
});
observer.observe(scrollWatcher);

// toggle mobile menu
document.querySelector(".toggle-menu").addEventListener("click", () => {
    document.querySelector(".mobile-menu").style.top = "0%";
});


function AddProductsToPage() {
    const ProductContainer = document.querySelector("[data-product-container]");
    return (ProductContainer.innerHTML = ProductsInformations.map((Product) => {
        return `
            <div class="product">
                <div class="product-thumb">
                    <img  src=${Product.ImgSrc} alt="">
                </div>
                <div class="product-content">
                    <span class="item-meta">${Product.Meta}</span>
                    <p class="item-title">${Product.Title}</p>
                    <span class="price">${Product.Price} $</span>
                    <button class="button">Select an option</button>
                </div>
            </div>`;
        }).join(""));
}
// AddProductsToPage();

function RenderDetailsSction() {
    let DetailesSection = document.querySelector(".product_details");
    let SelectBtn = document.querySelector(".button");
    SelectBtn.addEventListener("click", () => {
        console.log("clicked");
    });
};


function AddReviewsToPage() {
    const ReviewsContainer = document.querySelector("[data-reviews-container]");
    
    return (ReviewsContainer.innerHTML = Reviews.map((review) => {
        return `
            <div class="review">
                <div class="thumb"><img width="80" src=${review.ImgSrc} alt=""></div>
                <div class="review-info">
                    <p class="title">${review.title}</p>
                    <p class="name">${review.userName}</p>
                </div>
            </div>
        `
    }).join(""));
}
AddReviewsToPage();

// renger the detailes section
