$(document).ready(function () {

    $('.movie-carousel').slick(

        {
            slidesToShow: 6,
            dots: false,
            arrows: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1720,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1460,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    );

    if(location.search.includes('addtofav')){

        setTimeout(function () {
            var blId = $('header.movie-poster-block .movie-block__info-icon_wishlist-pass');

            if(blId.length){

                if($('.header .authorised-user').length){
                    blId.trigger('click');
                }else{
                    var id = blId.data('filmid'),
                        addToFav = getCookie('addToFav');
                    var addToFavArr = [];

                    if(addToFav){
                        addToFavArr = JSON.parse(addToFav);
                    }

                    if(!addToFavArr.includes(id)){
                        addToFavArr.push(id);
                        setCookie('addToFav', JSON.stringify(addToFavArr), {'max-age': 3600*24*30, domain: 'planetakino.ua'});
                    }

                }
            }
        }, 500);

    }

    if($('#ytubeIframe').length){
        var ytubeIframe = $('#ytubeIframe');
        ytubeIframe.after($(ytubeIframe.text()));
    }

});
