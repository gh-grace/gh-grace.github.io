// I acknowledge that this code is not fully original and is referenced from 
// https://medium.com/@victortoschi/how-to-create-a-slot-machine-animation-with-css-and-javascript-9073ab9db9ea 
// and has been adjusted for this assignment.

(function () {
    const items = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const doors = document.querySelectorAll('.door');

    // roll rolls 
    // reset resets
    // sumbit states that the phone number successfully submitted 
    document.querySelector('#roll').addEventListener('click', spin);
    document.querySelector('#reset').addEventListener('click', init);
    document.querySelector('#submit').addEventListener('click', submit);

    // this code is for resetting the phone number  
    function init(firstInit = true, groups = 1, duration = 1) {
        for (const door of doors) {
            if (firstInit) {
                door.dataset.spinned = '0';
            } else if (door.dataset.spinned === '1') {
                return;
        }
  
        const boxes = door.querySelector('.boxes');
        const boxesClone = boxes.cloneNode(false);
        const pool = ['?'];
  
        if (!firstInit) {
            const arr = [];
            for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
                arr.push(...items);
            }
            pool.push(...shuffle(arr));
  
            boxesClone.addEventListener('transitionstart',
            function () {
                door.dataset.spinned = '1';
                this.querySelectorAll('.box').forEach((box) => {box.style.filter = 'blur(1px)'; });
            },
            { once: true }
            );
  
            boxesClone.addEventListener('transitionend',
            function () {
                this.querySelectorAll('.box').forEach((box, index) => {box.style.filter = 'blur(0)';
                if (index > 0) this.removeChild(box);});
            },
            { once: true }
            );
        }
  
        for (let i = pool.length - 1; i >= 0; i--) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = door.clientWidth + 'px';
            box.style.height = door.clientHeight + 'px';
            box.textContent = pool[i];
            boxesClone.appendChild(box);
        }
        
        boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
        boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
        door.replaceChild(boxesClone, boxes);
        }
    }
  
    // this code is for rolling the phone number
    async function spin() {
        init(false, 1, 2);
      
        for (const door of doors) {
            const boxes = door.querySelector('.boxes');
            const duration = parseInt(boxes.style.transitionDuration);
            boxes.style.transform = 'translateY(0)';
        await new Promise((resolve) => setTimeout(resolve, duration * 100));
        }
    }
  
    // this code is for the shuffling of the numbers
    function shuffle([...arr]) {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }

    // this code is for submitting the phone number
    function submit() {
        confirm("You have SUCCESSFULLY submitted your phone number!");
    }

    init();

    // trying to make the buttons move
    // const app = document.querySelector('.app');
    // const roll = document.querySelector('.roll');

    // const appMove = app.getBoundingClientRect(); 
    // const rollMove = roll.getBoundingClientRect();

    //  roll.addEventListener('click', () => {
    //  const i = Math.floor(Math.random() * (appMove.width - rollMove.width)) + 1; 
    //  const j = Math.floor(Math.random() * (appMove.height - rollMove.height)) + 1;

        // roll.style.left = i +'px';
        // roll.style.top = j +'px';
    // });

})();