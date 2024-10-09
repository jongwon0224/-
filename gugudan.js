//for문을 사용해서 구구단...근데 인자를 html에서 직접받을수있나?? 찾아보자
//ex) 숫자 몇을 몇단까지 하고 싶으신가요 ? 과 같은 사이트


// 1. + 연산자 사용시 자동 숫자변화 ==>     var btn1 = +document.getElementById('btn1').value;
// 2. Number()함수 사용 ==> 전체문자열이 숫자로 변환가능할때만 적용됨 ===>     var btn1 = Number(document.getElementById('btn1').value);
//3. 유효성 검사 => typeof, isNaN(isNotaNumber)가 있음 isNaN(데이터)  ===> if(!isNaN(btn1) && !isNaN(btn2))
//4. !는 부정을 의미 => !isNaN == number

/* 수동계산  ==> Number함수 사용 */

class button {
    constructor(firstname, secondname, final) {
        this.firstname = Number(document.getElementById(firstname).value);
        this.secondname = Number(document.getElementById(secondname).value);
        this.final = Number(document.getElementById(final).value);
    }
    test() {
        if (!isNaN(this.firstname) && !isNaN(this.secondname)) {
            return this.final = this.firstname * this.secondname;
        } else {
            return this.final = '';
        }
    }
}

function click() {
    var manual = new button('btn1', 'btn2', 'result-btn');
    manual.test();
}

/*
function startbtn() {
    var btn1 = Number(document.getElementById('btn1').value);
    var btn2 = Number(document.getElementById('btn2').value);
    if (!isNaN(btn1) && !isNaN(btn2)) {
        var result = btn1 * btn2;
        document.getElementById('result-btn').value = result;
    } else {
        document.getElementById('result-btn').value = '';
    }
}

/* 자동계산  ==> +기호 사용 */
function gugu() {
    var box1 = +document.getElementById('box1').value;
    var box2 = +document.getElementById('box2').value;
    if (!isNaN(box1) && !isNaN(box2)) {
        var result = box1 * box2;
        document.getElementById('boxresult').value = result;
    } else {
        document.getElementById('boxresult').value = '';
    }
}

//txt1박스 입력값을 p태그에 옮기기
function autotyping() {
    var clone = document.getElementById('txt1').value;
    document.getElementById('val1').innerHTML = clone;
}

/* parseFloat란 함수 공부 필요
<script>
function startbtn() {
    var btn1 = parseFloat(document.getElementById('btn1').value);
    var btn2 = parseFloat(document.getElementById('btn2').value);

    // 입력값이 숫자인지 확인
    if (!isNaN(btn1) && !isNaN(btn2)) {
        var result = btn1 * btn2;
        document.getElementById('result-btn').value = result;
    } else {
        document.getElementById('result-btn').value = '유효하지 않은 입력';
    }
}
</script>
*/

