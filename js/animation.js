var ascens = document.getElementById('ascensor');
ascens.addEventListener('click', function(){
    window.scroll({
        top: 830,
        behavior: 'smooth'
    })
})
$(function(){
    $('[data-toggle="popover"]').popover()
});