const intersectionObserver = new IntersectionObserver((nodes) => {
    nodes.forEach((node) => {
        if(node.isIntersecting){
            node.target.classList.remove('fade-out-animation')
            node.target.classList.add('fade-in-animation')
        }else{
            node.target.classList.remove('fade-in-animation')
            node.target.classList.add('fade-out-animation')
        }
    })
})

const hiddenElements = document.querySelectorAll('.fade-out-animation')
hiddenElements.forEach((element) => intersectionObserver.observe(element))


const showAnimationIntersectionObserver = new IntersectionObserver((nodes) => {
    nodes.forEach((node) => {
        if(node.isIntersecting){
            node.target.classList.remove('disappear-animation')
            node.target.classList.add('appear-animation')
        }else{
            node.target.classList.remove('appear-animation')
            node.target.classList.add('disappear-animation')
        }
    })
})

const hiddenElementsShow = document.querySelectorAll('.disappear-animation')
hiddenElementsShow.forEach((element) => showAnimationIntersectionObserver.observe(element))


