// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

let contatoElement = document.querySelector("a.menu-lista-contato"),
    downloadElement = document.querySelector("a.menu-lista-download"),
    cardElement = document.querySelectorAll("div.card-montadoras"),
    inputElement = document.querySelectorAll("form.contato input");

//alert(inputElement[0].id);

contatoElement.addEventListener("mousedown", () => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'menu',
                eventAction: 'entre_em_contato',
                eventLabel: 'link_externo'
            }
        )
    }
)

downloadElement.addEventListener("mousedown", () => {
            ga('send', {
                hitType: 'event',
                eventCategory: 'menu',
                eventAction: 'download_pdf',
                eventLabel: 'download_pdf'
            }
        )
    }
)

function getCardName(index) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: `${cardElement[index].dataset["name"]}`
        }
    )
};

function getFieldId(index) {
    if (inputElement[index].value.length > 0) {
        ga('send', {
                hitType: 'event',
                eventCategory: 'contato',
                eventAction: `${inputElement[index].id}`,
                eventLabel: 'preencheu'
            }
        )
    }
};