(function() {

    const zoom = function(event) {
        event.stopPropagation();
        event.preventDefault();

        if (!this.href) return;

        let divZoomImage = document.querySelector('#' + this.dataset.zoomImage);
        
        if (!divZoomImage) {
            divZoomImage = document.createElement('div');
            divZoomImage.classList.add('zoomImage');
            divZoomImage.id = this.dataset.zoomImage;
            divZoomImage.style = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 60px #333;
                background-color: #fff;
                z-index: 999;
                padding: 20px;
                border-radius: 20px;
            `;
        }

        divZoomImage.innerHTML = '<img style="max-width: 100%;" src="' + this.href + '" />';

        document.body.appendChild(divZoomImage);
    };

    const init = function() {
        let listA = document.querySelectorAll('a[data-zoom-image]');

        listA.forEach(function(a) {
            a.addEventListener('click', zoom);
        });

        document.addEventListener('click', function(event) {
            event.stopPropagation();

            if (event.target.parentElement.className != 'zoomImage' &&
                event.target.className != 'zoomImage') {
                let divZoomImage = document.querySelector('.zoomImage');
                if (!divZoomImage) return;
                divZoomImage.remove();
            }
        });
    };

    window.addEventListener('load', init);

}());