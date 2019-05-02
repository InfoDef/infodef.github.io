var slides = $('.slide'),    //массив слайдов
slidesCount = slides.length; //количество слайдов
i = 0;  //текущий слайд
    
//начальный порядок слайдов
slides.each(function(z){
    $(this).css('z-index', -z); //первый слайд - индекс 0, второй -1 и т.д.
})
    
//интервал смены слайдов
setInterval(initSlider, 1000);
    
function initSlider (){
        
    if(i == slidesCount) i = 0;
        
    //выбрать текущий и удалить его через 300мс
    slides.eq(i).fadeOut(300, function(){
        
        //после чего сменить все индексы
        slides.each(function(j){
            $(this).css('z-index', ((slidesCount - j)+i) % slidesCount);
        });
        //и увеличить счетчик
        i++;
        //и показать текущий элемент
        $(this).show();
        
    })
}  
