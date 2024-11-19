const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close)
    {
        close.addEventListener('click',()=>{
            nav.classList.remove('active');
        })
    }

    new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween:30,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          dynamicBullets:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0:{
                slidesPerView : 1
            },
            768:{
                slidesPerView : 2
            },
            1024:{
                slidesPerView : 3
            },
        }
      });
    