// ===========================
// GOLD CORNER
// ===========================

const phone = "201150084666";

function buyNow(product){

const message =
`Hello, I would like to order: ${product}`;

window.open(

`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,

"_blank"

);

}


// ===========================
// CARD ANIMATION
// ===========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

})

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(60px)";

card.style.transition=".7s";

observer.observe(card);

});


// ===========================
// IMAGE ZOOM
// ===========================

document.querySelectorAll(".card img").forEach(img=>{

img.onclick=()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.cursor="pointer";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";
image.style.boxShadow="0 0 35px gold";

overlay.appendChild(image);

overlay.onclick=()=>{

overlay.remove();

}

document.body.appendChild(overlay);

}

});