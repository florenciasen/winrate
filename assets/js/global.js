function checkLS() {
    if (localStorage.getItem('cookies') === null) {
        localStorage.setItem('cookies', 0);
    }
}

function res() {
    // let sum = parseInt(localStorage.getItem('cookies'))

    // if (sum == 0) {
    //     window.open('https://www.effectivecpmgate.com/swqh6tcn3k?key=163b8eee7c2fbbbdae754cb90a81d9f7', '_blank');
    // } else {
    validation();
    // }
    // localStorage.setItem('cookies', 1);

}

function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const flashpay = `<a href="https://flashpay.com/" target="_blank">Flash Pay</a>`;
    const flashpayIG = `<a href="https://www.instagram.com/flashpay.id/" target="_blank">flashpay.id</a>`;
    const flashpayaWA = `<a href="https://api.whatsapp.com/send?phone=628141423978" target="_blank">628141423978</a>`;

    let arrayEl = [
        `<p class="animation mb-0 text-truncate">Follow ig takapedia untuk ingfo flashsale</p>`,
        `<p class="animation mb-0 text-truncate">IG: ${flashpayIG} / WA: ${flashpayWA}</p>`,
        `<p class="animation mb-0 text-truncate">Gas langsung joki di ${flashpay} banh 😅☝️</p>`,
    ];
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayEl.length) {
            array = 0;
        }
    }, 5000);
}

window.dataLayer = window.dataLayer || [];

function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-206846692-3');