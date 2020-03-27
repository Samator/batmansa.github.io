$(document).ready(function () {
    let tabsItem = $('.tabs_item'); //переменная для класса
    console.log(tabsItem); //вывод переменной в консоль
    tabsItem.on('click', function (event){
        event.preventDefault(); //не перебрасывает на главную
        let activeContent = $(this).attr('href'); // переменная с атрибутом
        $('.visible').toggleClass('visible') // убераем класс visible
        $(activeContent).toggleClass('visible'); //добавляем класс visible
        $('.tabs_item_active').toggleClass('tabs_item_active');
        $(this).toggleClass('tabs_item_active');
    });
});