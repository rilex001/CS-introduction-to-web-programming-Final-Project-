const title = document.querySelector('.change');


const titleColor = () => {
    let d = new Date()
    let h = d.getHours();
    console.log(h)
    h > 12 ? title.setAttribute('style', 'color: grey;') : title.setAttribute('style', 'color: black;')
}



titleColor();