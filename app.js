// Galeria 1
const thumbnails1 = document.querySelectorAll("#thumbnail-container-1 .thumbnail");
const mainImage1 = document.querySelector("#main-image-1");

for (let i = 0; i < thumbnails1.length; i++) {
  thumbnails1[i].addEventListener("click", function () {
    mainImage1.src = this.src;
  });
}

// Galeria 2
const thumbnails2 = document.querySelectorAll("#thumbnail-container-2 .thumbnail");
const mainImage2 = document.querySelector("#main-image-2");

for (let i = 0; i < thumbnails2.length; i++) {
  thumbnails2[i].addEventListener("click", function () {
    mainImage2.src = this.src;
  });
}


// Pobierz referencje do elementów HTML
const ramButtons = document.querySelectorAll('.conf-info-ram-button');
const windowsButtons = document.querySelectorAll('.conf-info-windows-button');
const securityButtons = document.querySelectorAll('.conf-info-insurance-button');
const confPrice = document.getElementById('conf-price');
const ramPriceDelete = document.querySelector('.ram-price-delete');
const ramPriceAdd = document.querySelector('.ram-price-add');
const windowsPriceAdd = document.querySelector('.windows-price-add');
const windowsPriceDelete = document.querySelector('.windows-price-delate');
const securityPriceAdd = document.querySelector('.insurance-price-add');
const securityPriceDelete = document.querySelector('.insurance-price-delete');

// Domyślna cena i stan RAM, Windows oraz ochrony
let currentPrice = 5299;
let currentRam = '32GB';
let currentWin = 'Microsoft Windows 11 Home';
let currentSecurity = 'Brak dodatkowej ochrony';

// Zmienna do śledzenia ostatnio wybranego przycisku
let lastClickedRamButton = null;
let lastClickedWinButton = null;
let lastClickedSecurityButton = null;

// Ukryj początkowo elementy z ceną RAM, Windows oraz ochrony
ramPriceDelete.style.display = 'inline';
ramPriceAdd.style.display = 'none';
windowsPriceDelete.style.display = 'inline';
windowsPriceAdd.style.display = 'none';
securityPriceDelete.style.display = 'inline';
securityPriceAdd.style.display = 'none';

// Pętla do inicjalizacji stanu przycisków RAM
ramButtons.forEach((button) => {
    if (button.getAttribute('data-ram') === currentRam) {
        button.classList.add('selected');
    }
});

// Pętla do inicjalizacji stanu przycisków Windows
windowsButtons.forEach((button) => {
    if (button.getAttribute('data-win') === currentWin) {
        button.classList.add('selected');
    }
});

// Pętla do inicjalizacji stanu przycisków ochrony
securityButtons.forEach((button) => {
    if (button.getAttribute('data-sec') === currentSecurity) {
        button.classList.add('selected');
    }
});

// Uaktualnij cenę wyświetlaną na stronie
function updatePrice() {
    confPrice.textContent = currentPrice.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });
}

// Dodaj obsługę zdarzenia kliknięcia na przyciskach RAM
ramButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button !== lastClickedRamButton) {
            const ramType = button.getAttribute('data-ram');
            if (ramType !== currentRam) {
                currentRam = ramType;

                if (ramType === '16GB') {
                    ramPriceDelete.style.display = 'none';
                    ramPriceAdd.style.display = 'inline';
                    currentPrice = 4899;
                } else if (ramType === '32GB') {
                    ramPriceAdd.style.display = 'none';
                    ramPriceDelete.style.display = 'inline';
                    currentPrice = 5299;
                }

                if (lastClickedRamButton) {
                    lastClickedRamButton.classList.remove('selected');
                }
                button.classList.add('selected');
                lastClickedRamButton = button;

                updatePrice();
            }
        }
    });
});

// Dodaj obsługę zdarzenia kliknięcia na przyciskach Windows
windowsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button !== lastClickedWinButton) {
            const winType = button.getAttribute('data-win');
            if (winType !== currentWin) {
                currentWin = winType;

                if (winType === 'Microsoft Windows 11 Home') {
                    windowsPriceDelete.style.display = 'none';
                    windowsPriceAdd.style.display = 'inline';
                    currentPrice += 500;
                } else if (winType === 'Brak systemu') {
                    windowsPriceAdd.style.display = 'none';
                    windowsPriceDelete.style.display = 'inline';
                    currentPrice -= 500;
                }

                if (lastClickedWinButton) {
                    lastClickedWinButton.classList.remove('selected');
                }
                button.classList.add('selected');
                lastClickedWinButton = button;

                updatePrice();
            }
        }
    });
});

// Dodaj obsługę zdarzenia kliknięcia na przyciskach ochrony
securityButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button !== lastClickedSecurityButton) {
            const secType = button.getAttribute('data-sec');
            if (secType !== currentSecurity) {
                currentSecurity = secType;

                if (secType === 'Wybierz eXtra ochronę') {
                    securityPriceDelete.style.display = 'inline';
                    securityPriceAdd.style.display = 'none';
                    currentPrice += 530;
                } else if (secType === 'Brak dodatkowej ochrony') {
                    securityPriceAdd.style.display = 'inline';
                    securityPriceDelete.style.display = 'none';
                    currentPrice -= 530;
                }

                if (lastClickedSecurityButton) {
                    lastClickedSecurityButton.classList.remove('selected');
                }
                button.classList.add('selected');
                lastClickedSecurityButton = button;

                updatePrice();
            }
        }
    });
});

// Inicjalizacja wyświetlanej ceny
updatePrice();


const hamburgerIcon = document.querySelector('.hamburger-icon');
const navLinks = document.querySelector('.nav-links');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
});


