//부모 버튼 클래스//
class originButton {
    constructor(firstname, secondname, final) {
        this.firstname = Number(document.getElementById(firstname).value);
        this.secondname = Number(document.getElementById(secondname).value);
        this.final = document.getElementById(final);
    }
    test() {
        if (!isNaN(this.firstname) && !isNaN(this.secondname)) {
            return this.final.value = this.firstname * this.secondname;
        } else {
            return this.final.value = '';
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
/* 쉬운방법
function magictxt () {
    var writeP = document.getElementById('writeP').value;
    var txtwrite = document.getElementById('txtwrite');
    txtwrite.innerHTML = writeP;
}
*/
// 클래스 사용
class magic {
    constructor(first, second) {
        this.first = document.getElementById('writeP').value;
        this.second = document.getElementById('txtwrite');
    }
}

function magictxt () {
    var magicbox = new magic('writeP','txtwrite');    
    magicbox.second.innerHTML = magicbox.first;
}