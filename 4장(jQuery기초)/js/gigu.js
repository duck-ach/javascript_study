$(document).ready(function(){
    // 지구 이미지 웹요소(노드) 찾아서 저장
    var $gigu = $('#gigu');
    // 버튼에 이벤트 등록
    $('#btn_start').click(function(){
        $gigu.animate({
            left : '470px'
        }, 5000); // n000 초동안 움직여달라
    });
});
