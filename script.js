const openNav = () => {
    const nav = document.querySelector('.dropdown-menu')
    if(nav.style.display === 'flex'){
        nav.style.display = 'none'
    }else{
        nav.style.display = 'flex'
    }
    
}