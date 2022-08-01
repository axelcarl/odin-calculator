function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function operate(operator, a, b) {
  let result;
  if (operator === '+')
    result = add(a, b);
  if (operator === '-')
    result = subtract(a, b);
  if (operator === '/')
    result = divide(a, b);
  if (operator === '*')
    result = multiply(a, b);
  return result;
}

let nums1 = 0;
let nums2 = 0;
let operator = '';
let numKeys = Array.from(document.querySelectorAll(".num"));
let operators = Array.from(document.querySelectorAll(".operator"));
let del = document.querySelector('.delete');
let clear = document.querySelector('.clear');
let evaluate = document.querySelector('.evaluate');
let comma = document.querySelector('.decimal');
let decimal = false;

numKeys.forEach(key => key.addEventListener('click', () => {
  if (operator == null || operator == '') {
    nums1 = nums1 * 10;
    nums1 = nums1 + parseInt(key.textContent);
    document.querySelector('.first-number').innerHTML = nums1;
  }
  else if (operator) {
    nums2 = nums2 * 10;
    nums2 = nums2 + parseInt(key.textContent);
    document.querySelector('.first-number').innerHTML = nums2;
  }
}));

operators.forEach(key => key.addEventListener('click', () => {
  if (nums2 == 0) {
    operator = key.textContent;
    document.querySelector(".current-operator").innerHTML = operator;
    document.querySelector('.second-number').innerHTML = document.querySelector('.first-number').innerHTML;
  }
  else {
    nums1 = operate(operator, nums1, nums2)
    nums2 = 0;
    document.querySelector('.first-number').innerHTML = nums1
    document.querySelector('.second-number').innerHTML = nums1
    operator = key.textContent;
    document.querySelector(".current-operator").innerHTML = operator;
  }
}));

del.addEventListener('click', () => {
  if (operator == null || operator == '') {
    nums1 = nums1 - nums1 % 10;
    nums1 = nums1 / 10; 
    document.querySelector('.first-number').innerHTML = nums1;
    if (nums1 == 0) {
      document.querySelector('.first-number').innerHTML = '';
    }
  }
  else if (operator) {
    nums2 = nums2 - nums2 % 10;
    nums2 = nums2 / 10;
    document.querySelector('.first-number').innerHTML = nums2;
    if (nums2 == 0) {
      document.querySelector('.first-number').innerHTML = '';
    }
  }
})

clear.addEventListener('click', () => {
    nums1 = 0;
    nums2 = 0;
    operator = '';
    document.querySelector('.first-number').innerHTML = '';
    document.querySelector('.second-number').innerHTML = '';
    document.querySelector(".current-operator").innerHTML = '';
})

evaluate.addEventListener('click', () => {
    nums1 = operate(operator, nums1, nums2)
    nums2 = 0;
    document.querySelector('.first-number').innerHTML = nums1;
    document.querySelector('.second-number').innerHTML = nums1;
    operator = '';
    document.querySelector(".current-operator").innerHTML = '';
})

comma.addEventListener('click', () => {
  if (operator == null || operator == '') {
    nums1 = parseFloat(nums1);
    document.querySelector('.first-number').innerHTML = nums1;
  }
  else if (operator) {
    nums2 = parseFloat(nums2);
    document.querySelector('.first-number').innerHTML = nums2;
  }
})









