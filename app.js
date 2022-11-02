const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const expMonth = document.getElementById("exp-month");
const expYear = document.getElementById("exp-year");
const cvc = document.getElementById("cvc");

const imgNumber = document.querySelector(".img_number");
const imgName = document.querySelector(".img_name");
const imgMonth = document.querySelector(".month");
const imgYear = document.querySelector(".year");
const imgCVC = document.querySelector(".img_cvc");

cardNumber.addEventListener("input", function () {
  let spaceChar = cardNumber.value.match(/.{1,4}/g);
  imgNumber.textContent = spaceChar.join(" ");
});

cardName.addEventListener("input", function () {
  imgName.textContent = cardName.value;
});

expMonth.addEventListener("input", function () {
  imgMonth.textContent = expMonth.value;
});

expYear.addEventListener("input", function () {
  imgYear.textContent = expYear.value;
});

cvc.addEventListener("input", function () {
  imgCVC.textContent = cvc.value;
});

// thank you show on btn click

const btnConfirm = document.querySelector(".btn_confirm");
const thankYou = document.querySelector(".thankyou");
const cardForm = document.querySelector(".card_form");

// error texts
const errorName = document.querySelector(".error_name");
const lettersOnly = document.querySelector(".error_nameonly");
const errorNumber = document.querySelector(".error_number");
const onlyNumber = document.querySelector(".number_only");
const mmOnlyNumber = document.querySelector(".mm_number_only");
const yyOnlyNumber = document.querySelector(".yy_number_only");
const expMM = document.querySelector(".error_mm");
const expYY = document.querySelector(".error_yy");
const expCVC = document.querySelector(".error_cvc");
const cvcOnlyNumber = document.querySelector(".cvc_number_only");

const digits16 = document.querySelector(".required-num");
const digits3 = document.querySelector(".required-cvc");
const digitsmm = document.querySelector(".required-mm");
const digitsyy = document.querySelector(".required-yy");

btnConfirm.addEventListener("click", function () {
  // empty input errors
  let format = /^[0-9\s]*$/;

  let letterFormat = /[a-zA-Z]+/g;

  // continue btn works only if these condition are met

  //empty name
  if (cardName.value === "") {
    errorName.classList.remove("hide");
    lettersOnly.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (!cardName.value.match(letterFormat)) {
    errorName.classList.add("hide");
    lettersOnly.classList.remove("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else {
    lettersOnly.classList.add("hide");
    errorName.classList.add("hide");
    thankYou.style.display = "block";
    cardForm.style.display = "none";
  }

  // empty card Number && number only

  if (cardNumber.value.length >= 16) {
    if (!cardNumber.value.match(format)) {
      onlyNumber.classList.remove("hide");
      errorNumber.classList.add("hide");
      thankYou.style.display = "none";
      cardForm.style.display = "block";
      digits16.classList.add("hide");
    } else {
      digits16.classList.add("hide");
      onlyNumber.classList.add("hide");
      errorNumber.classList.add("hide");
    }
  } else if (cardNumber.value === "") {
    errorNumber.classList.remove("hide");
    onlyNumber.classList.add("hide");
    digits16.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (!cardNumber.value.match(format)) {
    onlyNumber.classList.remove("hide");
    errorNumber.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
    digits16.classList.add("hide");
  } else if (cardNumber.value.length < 16) {
    digits16.classList.remove("hide");
    onlyNumber.classList.add("hide");
    errorNumber.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  }

  //empty cvc && exp mm/yy

  //exp mm

  if (expMonth.value.length >= 2) {
    if (!expMonth.value.match(format)) {
      digitsmm.classList.add("hide");
      expMM.classList.add("hide");
      mmOnlyNumber.classList.remove("hide");
      thankYou.style.display = "none";
      cardForm.style.display = "block";
    } else {
      digitsmm.classList.add("hide");
      mmOnlyNumber.classList.add("hide");
      expMM.classList.add("hide");
    }
  } else if (expMonth.value === "") {
    digitsmm.classList.add("hide");
    expMM.classList.remove("hide");
    mmOnlyNumber.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (!expMonth.value.match(format)) {
    digitsmm.classList.add("hide");
    expMM.classList.add("hide");
    mmOnlyNumber.classList.remove("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (expMonth.value.length < 2) {
    digitsmm.classList.remove("hide");
    mmOnlyNumber.classList.add("hide");
    expMM.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  }

  // exp yy
  if (expYear.value.length >= 2) {
    if (!expYear.value.match(format)) {
      digitsyy.classList.add("hide");
      expYY.classList.add("hide");
      yyOnlyNumber.classList.remove("hide");
      thankYou.style.display = "none";
      cardForm.style.display = "block";
    } else {
      digitsyy.classList.add("hide");
      yyOnlyNumber.classList.add("hide");
      expYY.classList.add("hide");
    }
  } else if (expYear.value === "") {
    digitsyy.classList.add("hide");
    expYY.classList.remove("hide");
    yyOnlyNumber.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (!expYear.value.match(format)) {
    digitsyy.classList.add("hide");
    expYY.classList.add("hide");
    yyOnlyNumber.classList.remove("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (expYear.value.length < 2) {
    digitsyy.classList.remove("hide");
    yyOnlyNumber.classList.add("hide");
    expYY.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  }

  // cvc  errors
  if (cvc.value.length >= 3) {
    if (!cvc.value.match(format)) {
      digits3.classList.add("hide");
      cvcOnlyNumber.classList.remove("hide");
      expCVC.classList.add("hide");
      thankYou.style.display = "none";
      cardForm.style.display = "block";
    } else {
      digits3.classList.add("hide");
      cvcOnlyNumber.classList.add("hide");
      expCVC.classList.add("hide");
    }
  } else if (cvc.value === "") {
    digits3.classList.add("hide");
    expCVC.classList.remove("hide");
    cvcOnlyNumber.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (!cvc.value.match(format)) {
    digits3.classList.add("hide");
    cvcOnlyNumber.classList.remove("hide");
    expCVC.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  } else if (cvc.value.length < 3) {
    digits3.classList.remove("hide");
    cvcOnlyNumber.classList.add("hide");
    expCVC.classList.add("hide");
    thankYou.style.display = "none";
    cardForm.style.display = "block";
  }

  if (
    !cardName.value === "" &&
    cardNumber.value.length >= 16 &&
    expMonth.value.length >= 2 &&
    expYear.value.length >= 2 &&
    cvc.value.length >= 3
  ) {
    thankYou.style.display = "block";
    cardForm.style.display = "none";
  }
});

const btnContinue = document.querySelector(".btn_continue");

btnContinue.addEventListener("click", function () {
  thankYou.style.display = "none";
  cardForm.style.display = "block";
});
