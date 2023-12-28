data = [{
    'img1' : 'Asset/flop with watermelon.jpg',
    'img2' : 'Asset/pringles floppa.jpg', 
    'title' : 'Web E-Commerce', 
    'subtitle' : 'Zenit',
    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos, consequuntur accusantium nihil, nulla, quibusdam voluptas aliquam accusamus dolorem est voluptate deserunt. Repellat tempore, fugit eum fuga et quae laudantium!'
}, {
    'img1' : 'Asset/flop with watermelon.jpg',
    'img2' : 'Asset/pringles floppa.jpg', 
    'title' : 'Web E-Commerce', 
    'subtitle' : 'Zenit',
    'desc' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quos, consequuntur accusantium nihil, nulla, quibusdam voluptas aliquam accusamus dolorem est voluptate deserunt. Repellat tempore, fugit eum fuga et quae laudantium!'
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img1+`" alt="">
        <img src="${element.img2} " alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <h2>${element.desc}</h2>
        <button class="read-more">Read More</button>
    </div>
</div>`

});