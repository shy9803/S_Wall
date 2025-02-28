window.addEventListener('resize', function() {
  let w = this.innerWidth; //현재 브라우저창의 너비값을 변수에 담아
  // console.log(w); //출력해본다.

  // 만약에 768보다 아래이면 모바일 내비게이션 서브 클릭시 나오게
  if(w < 768) {
    const gnb = document.querySelectorAll('.gnb > ul > li > a');

    // 각 서브메뉴 클릭시
    gnb.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();

        const subm = item.nextElementSibling;

        if(subm && subm.classList.contains('sub')) {
          subm.classList.toggle('active');

          const icon = item.querySelector('.fa-angle-down');
          if(icon) {
            icon.classList.toggle('rotate');
          }
        }
      });
    });
  }
  // 그렇지 않다면 서브 클릭이 안 되게
});

