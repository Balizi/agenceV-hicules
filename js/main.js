const header=document.querySelector('header');
function changeBg()
{
    if(document.documentElement.scrollTop>=40)
    {
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}
window.addEventListener('scroll',changeBg);