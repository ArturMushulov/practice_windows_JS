import calcScroll from "./scroll";

const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img'),
          scroll = calcScroll();

    imgPopup.classList.add('popup');
    imgPopup.appendChild(bigImg);
    workSection.appendChild(imgPopup);

    imgPopup.style.alignItems = 'center';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.display = 'none';

    bigImg.style.maxHeight = '80%';
    bigImg.style.maxWidth = '80%';

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            imgPopup.classList.add('faded');
            
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }

        if (target && target.matches('div.popup > img')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;