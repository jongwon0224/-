//클래스 생성 후 역할에 맡게 부여//
//부모 버튼 클래스//
class originButton {
    constructor(first, second, third) {
        this.first = Number(document.getElementById(first).value);
        this.second = Number(document.getElementById(second).value);
        this.third = document.getElementById(third);
    }
    test() {
        if (!isNaN(this.first) && !isNaN(this.second)) {
            return this.third.value = this.first * this.second;
        } else {
            return this.third.value = '';
        }
    }
}

//수동버튼
function handleClick() {
    var manual = new originButton('btn1', 'btn2', 'result-btn');
    manual.test();
}

//자동버튼
function autoClick() {
    var automatic = new originButton('auto_btn1','auto_btn2','auto_result');
    automatic.test();
}


// txtbox에 입력시 자동으로 p태그에 값 전달!
//쉬운방법 => 인자, 매개변수 전달
function magictxt(first,second) {
    this.first = document.getElementById(first).value;
    this.second = document.getElementById(second);
    this.second.innerHTML = this.first;
}

// 클래스 사용
/*
class autotyping {
    constructor(first, second) {
        this.first = document.getElementById(first).value;
        this.second = document.getElementById(second);
    }
    result() {
        this.second.innerHTML = this.first;
    }
}

function magictxt () {
    var type1 = new autotyping('writeP','txtwrite');    
    type1.result();
}
*/

// 클래스 상속 사용
/*
class autotyping {
    constructor(first,second) {
        this.first = document.getElementById(first).value;
        this.second = document.getElementById(second);
    }
}

class autotyping2 extends autotyping{
    result() {
        this.second.innerHTML = this.first;
    }
}

function magictxt() {
    var type1 = new autotyping2('writeP','txtwrite');
    type1.result();
}
*/