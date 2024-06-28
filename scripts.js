function showModal1(){
    let modal = $('#modal1');
    let span = $('.close')
    let btn = $('.bttn')

   btn.click(function(){
     modal.show()
   })

    span.click(function closeModal(){
        modal.hide()
    })
}

function showModal2(){
    let modal = $('#modal2');
    let span = $('.close')
    let btn = $('.bttn')

   btn.click(function(){
     modal.show()
   })

    span.click(function closeModal(){
        modal.hide()
    })
}

function showModal3(){
    let modal = $('#modal3');
    let span = $('.close')
    let btn = $('.bttn')

   btn.click(function(){
     modal.show()
   })

    span.click(function closeModal(){
        modal.hide()
    })
}

function readMore(){
    const dots = document.getElementById('dots');
    const moreInfo = document.getElementById('more');
    const moreBtn = document.getElementById('readMoreBtn');

    if(dots.style.display === 'none'){
        dots.style.display = 'inline'
        moreBtn.innerHTML = 'Read more'
        moreInfo.style.display = 'none'
    }else{
        dots.style.display = 'none';
        moreBtn.innerHTML = 'Read less';
        moreInfo.style.display = 'inline';
    }


}
AOS.init();