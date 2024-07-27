const slider = document.querySelector('.slider');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const indicator = document.querySelector('.controls ul');

    var idx = 0;

    document.querySelectorAll('.controls li').forEach(function(indicator, index){
        indicator.addEventListener('click', function(){
            idx = index;
            document.querySelector('.controls .selected').classList.remove('selected');
            indicator.classList.add('selected');
            slider.style.transform = 'translate(' + (idx)*-25 + '%)';
        });
    });

    right.addEventListener('click', function(){
        if(idx < 3){
            idx++;
        } else idx=3;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.children[idx].classList.add('selected');
        slider.style.transform = 'translate(' + (idx)*-25 + '%)';
    });
    left.addEventListener('click', function(){
        if(idx > 0){
            idx--;
        } else idx=0;
        document.querySelector('.controls .selected').classList.remove('selected');
        indicator.children[idx].classList.add('selected');
        slider.style.transform = 'translate(' + (idx)*-25 + '%)';
    });