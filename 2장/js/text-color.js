// heading 변수를 선언하고 h1 태그를 저장한 꼴이 되었다.
var heading = document.querySelector('#heading');
// h1 태그를 클릭하면 글자 색을 skyblue로 설정하는 함수
heading.onclick = function() {
    heading.style.color = "skyblue";
}