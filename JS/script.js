//*1. Visualizzare i prodotti contenuti nel nostro array
//(Creare un arry con i prodotti)
//*2. Al click di un prodotto, visualizzare sotto la lista prodotti i dettagli del prodotto e i prodotti correlati
//*3. nella zona dettagli prodotto, creare due bottoni, uno aggiunge il prodotto al carrello, uno alla wishlist
//*4. nell' header dello shop mostrare numero prodotti nel carrello e numero prodotti in wishlist
//*.5 al click del bottone “acquista” compare un messaggio di ringraziamento e il carrello si svuota

//*1.
const products = [
    {
        id: 1,
        title: 'Mac Mini',
        subtitle: 'Nuovi muscoli. Nuovi traguardi.',
        url: './IMG/mac_mini.jpg',
        price: 1999.99,
        category: 'laptop',
        description: 'Il nostro computer desktop più versatile si lancia in una nuova dimensione. Mac mini ora ha il rivoluzionario chip Apple M1, CPU fino a 3 volte più rapida, grafica fino a 6 volte più scattante e il Neural Engine più evoluto, che assicura performance fino a 15 volte migliori per il machine learning. Preparati a lavorare, giocare e creare con una velocità e una potenza che prima d’ora non avresti mai immaginato.',
        io: ['ethernet, wifi, thunderbolt, USB-A, Jack cuffie', 'HDMI 2.0']
    },
    {
        id: 2,
        title: 'MacBook Air',
        subtitle: 'C’è una nuova potenza nell’Air.',
        url: './IMG/macbook_air.jpg',
        price: 1299.00,
        category: 'laptop',
        description: 'Ti presentiamo il nuovo MacBook Air: il nostro portatile più sottile e leggero, completamente trasformato dal chip Apple M1. CPU fino a 3,5 volte più veloce. GPU fino a 5 volte più scattante. Il Neural Engine più evoluto di sempre, che assicura performance di machine learning fino a 9 volte migliori. Un’autonomia che su un MacBook Air non si era mai vista. E una tecnologia silenziosa, perché senza ventola. Ha una potenza senza precedenti, ed è pronto a seguirti ovunque.',
        io: ['wifi, thunderbolt, USB-A, Jack cuffie', 'SSD', 'retina']
    },
    {
        id: 3,
        title: 'MacBook Pro',
        subtitle: 'Potenza allo stato Pro.',
        url: './IMG/macbook_pro.jpg',
        price: 1699.99,
        category: 'portable',
        description: 'Il MacBook Pro più potente di sempre è qui. Ha i velocissimi chip M1 Pro o M1 Max, i primi progettati da Apple per il mondo professionale, ed è capace di performance rivoluzionarie con un’incredibile durata della batteria. E poi ci sono un display Liquid Retina XDR spettacolare, il sistema audio e la videocamera migliori mai visti su un Mac, e tutte le porte che ti servono. MacBook Pro è un portatile di una nuova specie. Ed è un mostro di potenza.',
        io: ['ethernet, wifi, thunderbolt, USB-C, SSD']
    },
    {   
        id: 22,
        title: 'iMac 24"',
        subtitle: 'Eccolo: di’ ciao al nuovo iMac.',
        url: './IMG/imac.png',
        price: 1499.00,
        category: 'all-in-one',
        description: 'Ispirato al meglio di Apple, rivoluzionato dal chip M1. Si fa notare ovunque e si adatta perfettamente al tuo mondo.',
        io: ['wifi, thunderbolt, USB-C, HDMI 2.0, SSD']
    },
    {   
        id: 245,
        title: 'Mac Pro',
        subtitle: 'Il potere di cambiare tutto.',
        url: './IMG/mac_pro.jpg',
        price: 3699.99,
        category: 'desktop',
        description: 'Nasce un Mac estremo, da ogni punto di vista. Con prestazioni, espansione e opzioni di configurazione al top, è il sistema dedicato agli utenti professionali che vogliono superare i limiti del possibile.',
        io: ['ethernet, wifi, thunderbolt, USB-A, Jack cuffie', 'HDMI 2.0']
    },
    {   
        id: 250,
        title: 'iPhone 13 Pro',
        subtitle: 'Super. Ultra. Pro.',
        url: './IMG/iphone.jpg',
        price: 1199.00,
        category: 'smartphone',
        description: 'Un nuovo, sorprendente salto di qualità per le fotocamere. Un display così reattivo che anche i gesti di sempre ti stupiranno. Il chip per smartphone più veloce al mondo. Robustezza eccezionale. E autonomia senza precedenti.',
        io: ['wifi, USB-C, waterproof']
    },
    {
        id: 313,
        title: 'iPad',
        subtitle: 'Tuttofare. Tuttofacile',
        url: './IMG/ipad.png',
        price: 1999.99,
        category: 'tablet',
        description: 'Potente. Semplice da usare. Versatile. E progettato per fare tutto quello che ti piace. Con il nuovo iPad lavori, giochi, crei, impari e rimani sempre in contatto con chi vuoi. Ed è incredibile anche nel prezzo.',
        io: ['ethernet, wifi, USB-C, Jack cuffie', 'waterproof']
    },
    {
        id:457,
        title: 'iPhone 12',
        subtitle: 'Veloce che è una meraviglia.',
        url: './IMG/iphone12.jpg',
        price: 1999.99,
        category: 'smartphone',
        description: 'Un chip superpotente. La velocità del 5G. Un sistema evoluto a doppia fotocamera. La resistenza del Ceramic Shield, più robusto di qualsiasi vetro per smartphone. E uno sfolgorante display OLED. iPhone 12 ha proprio tutto. Anche due formati perfetti.',
        io: ['wifi, USB-C, Jack cuffie', 'waterproof']
    },
]

//Ref
const shopContainer = document.querySelector('.shop-container');
const descriptionProduct = document.querySelector('.description-products');
const wishCounter = document.getElementById('wish-caunter');
const cartCounter = document.getElementById('cart-caunter');
const buyBtn = document.getElementById('btn-buy');

let clickCounterWish = 0;
let clickCounterCart = 0;

products.forEach( (product, i) => {
    const productCard = document.createElement('div');
    productCard.classList.add('shop-card');
    shopContainer.append(productCard);

    productCard.innerHTML += `
    <div class="shop-card card-${i}">
        <div class="card-image">
        <img
            src="${product.url}"
            alt="${product.title}"
        />
        </div>
        <div class="card-text">
            <h3>${product.title}</h3>
            <p>${product.category}</p>
        </div>
    </div>`;

    //* 2.
    productCard.addEventListener( 'click', () =>{

        descriptionProduct.innerHTML = `
            <h3 class="product-title">${product.title}</h3>
            <span class="product-category">${product.category}</span>
            <p class="product-description">${product.description}</p>
            <span class="product-price">${product.price}</span>`;

            const whishListBtn = document.createElement('button');
            whishListBtn.classList.add('whish-list');
            whishListBtn.append('Cuore');
            descriptionProduct.append(whishListBtn);
        
            const cartBtn = document.createElement('button');
            cartBtn.classList.add('add-chart');
            cartBtn.append('Aggiungi al carrello');
            descriptionProduct.append(cartBtn);
            //* 3.
            whishListBtn.addEventListener('click', () => {
                clickCounterWish++;
                wishCounter.innerHTML = clickCounterWish;
            });
        
            cartBtn.addEventListener('click', () => {
                clickCounterCart++;
                cartCounter.innerHTML = clickCounterCart;
            });
    });


});

buyBtn.addEventListener('click', () => {
    if (clickCounterCart != 0) {
        alert('Grazie per aver acquistato nel nostro sito.');
        cartCounter.innerHTML = '0';
    } else {
        alert('Aggiungi articoli al carrello prima di pigiare acquista.')
    }
});


