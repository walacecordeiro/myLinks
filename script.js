function toggleMode(){
    const html = document.documentElement
    const img = document.querySelector('#profile img')

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // }

    // Simplification of the code commented above
    html.classList.toggle('light')

    //Replace profile picture
    if(html.classList.contains('light')){
        //If in 'light mode', add an attribute with a value
        img.setAttribute('style', "transform: scaleX(-1);")

        //OBS: it is possible to change only attribute value if attribute already exists
    } else{
        //If you are without 'light mode', keep everything normal
        img.setAttribute('style', "transform: scaleX(1);")
    }
}