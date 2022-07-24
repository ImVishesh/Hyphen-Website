// const visualData = document.querySelector('.section-visual-data');

// visualData.addEventListener('mouseenter', start, false);

// let flag = true;

// function start() {
//   if (flag === true) {
//     const counter = document.querySelectorAll('.counter-count');
//     const speed = 50;

//     counter.forEach((counter) => {
//       const updateCount = () => {
//         const target = Number(counter.getAttribute('data-target'));
//         const count = Number(counter.innerText);
//         const rem = target % speed;
//         const inc = (target - rem) / speed;

//         if (count < target - rem) {
//           counter.innerText = count + inc;
//           setTimeout(updateCount, 1);
//         } else {
//           counter.innerText = count + rem;
//           count.innerText = target;
//         }
//       };

//       updateCount();
//       flag = false;
//     });
//   }
// }

// let flag = true;

// const sc = document.getElementById('counter');

// if (flag === true) {
//   $('.counter-count').counterUp({ delay: 10, time: 1000 });
//   sc.classList.remove('counter-count');
//   flag = false;
// }
