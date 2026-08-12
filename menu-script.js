//sidebar toggle
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

document.querySelector("#sidebarToggle")?.addEventListener("click", () => {

    if (window.innerWidth <= 1024) {

        sidebar.classList.toggle("active");
        sidebarOverlay.classList.toggle("active");

    } else {

        sidebar.classList.toggle("close");

    }

});

document.querySelector("#bottomMenu")?.addEventListener("click", (e) => {

    e.preventDefault();

    sidebar.classList.toggle("active");
    sidebarOverlay.classList.toggle("active");

});

sidebarOverlay?.addEventListener("click", () => {

    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");

});


document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".promo-track"),
          cards = [...document.querySelectorAll(".promo-item")],
          dotsBox = document.querySelector(".promo-dots");

    let current = 0;

    function buildSlider() {

    const pageSize =
        window.innerWidth <= 768 ? 1 :
        window.innerWidth <= 1024 ? 3 : 4;
        const totalPages = Math.ceil(cards.length / pageSize);

        track.innerHTML = "";
        dotsBox.innerHTML = "";

        for (let i = 0; i < totalPages; i++) {

            const page = document.createElement("div");
            page.className = "promo-page";

            cards
                .slice(i * pageSize, (i + 1) * pageSize)
                .forEach(card => page.appendChild(card));

            track.appendChild(page);

            dotsBox.innerHTML += `<span ${i === current ? 'class="active"' : ''}></span>`;
        }

        const dots = dotsBox.querySelectorAll("span");

        function update() {

            track.style.transform = `translateX(-${current * 100}%)`;

            dots.forEach((dot, i) =>
                dot.classList.toggle("active", i === current)
            );

        }

        dots.forEach((dot, i) =>
            dot.onclick = () => {

                current = i;
                update();

            }
        );

        update();
    }

    buildSlider();

    window.addEventListener("resize", buildSlider);

    setInterval(() => {

        const totalPages = track.children.length;

        current = (current + 1) % totalPages;

        track.style.transform = `translateX(-${current * 100}%)`;

        dotsBox.querySelectorAll("span").forEach((dot, i) =>
            dot.classList.toggle("active", i === current)
        );

    }, 5000);

});

document.querySelectorAll(".provider-section").forEach(section => {

    const track = section.querySelector(".provider-track");

    section.querySelector(".provider-next").onclick = () => {
        track.scrollBy({
            left: 600,
            behavior: "smooth"
        });
    };

    section.querySelector(".provider-prev").onclick = () => {
        track.scrollBy({
            left: -600,
            behavior: "smooth"
        });
    };

});

document.querySelectorAll(".game-section").forEach(section => {

    const track = section.querySelector(".game-track");

    section.querySelector(".game-next").onclick = () => {

        track.scrollBy({

            left:600,

            behavior:"smooth"

        });

    };

    section.querySelector(".game-prev").onclick = () => {

        track.scrollBy({

            left:-600,

            behavior:"smooth"

        });

    };

});


/*==================================================
    PROVIDER FILTER
==================================================*/

document.querySelectorAll(".game-section").forEach(section => {

    const providerButtons = section.querySelectorAll(".provider-item");
    const gameCards = section.querySelectorAll(".game-card");

    if (!providerButtons.length || !gameCards.length) return;

    providerButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Active Button
            providerButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const provider = button.dataset.provider;

            gameCards.forEach(card => {

                if (provider === "all" || card.dataset.provider === provider) {

                    card.classList.remove("hide");

                } else {

                    card.classList.add("hide");

                }

            });

        });

    });

});

// PROFILE AKAUN SIDERIGHT

const profile = document.querySelector(".profile");
const drawer = document.querySelector(".account-drawer");
const accountOverlay = document.querySelector(".account-overlay");
const close = document.querySelector(".drawer-close");

profile.onclick = () => {
    drawer.classList.add("active");
    accountOverlay.classList.add("active");
    document.body.classList.add("drawer-open");
};

close.onclick = accountOverlay.onclick = () => {
    drawer.classList.remove("active");
    accountOverlay.classList.remove("active");
    document.body.classList.remove("drawer-open");
};



// Language Dropdown
const btn = document.querySelector(".language-btn");
const menu = document.querySelector(".language-menu");

btn.onclick = () => menu.classList.toggle("active");

document.querySelectorAll(".language-item").forEach(item => {

    item.onclick = () => {

        btn.querySelector("span").textContent = item.dataset.lang;
        btn.querySelector("img").src = item.dataset.flag;

        menu.classList.remove("active");

    };

});

//search placeholer
// Search placeholder
const headerSearch = document.querySelector(".header-search");
const mobileSearch = document.querySelector("#mobile-search-placeholder");
const categoryWrapper = document.querySelector(".category-wrapper");

function moveSearch() {

    if (window.innerWidth <= 1024) {

        // Mobile → letak bawah banner
        mobileSearch.appendChild(headerSearch);

    } else {

        // Desktop → letak dalam category wrapper
        categoryWrapper.appendChild(headerSearch);

    }

}

moveSearch();
window.addEventListener("resize", moveSearch);



/*==================================================
    MOBILE PROVIDER FILTER
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.querySelector(".mobile-provider-btn"),
          sheet = document.querySelector(".mobile-provider-sheet"),
          overlay = document.querySelector(".provider-overlay");

    if (!btn || !sheet || !overlay) return;

    const toggle = (show) => {
        sheet.classList.toggle("show", show);
        overlay.classList.toggle("show", show);
        btn.classList.toggle("active", show);
        document.body.classList.toggle("provider-open", show);
    };

    btn.onclick = () => toggle(true);
    overlay.onclick = () => toggle(false);

    document.querySelectorAll(".mobile-provider-item").forEach(item => {
        item.onclick = () => {
            document.querySelector(".mobile-provider-item.active")?.classList.remove("active");
            item.classList.add("active");

            document.querySelector(`.provider-item[data-provider="${item.dataset.provider}"]`)?.click();

            toggle(false);
        };
    });

});
