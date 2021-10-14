const take__send__form = function (form__title, status__title, name, email, text, error, form__total) {

  const form = document.querySelector(form__title),
      status = document.querySelector(status__title),
      nameForm = document.querySelector(name),
      emailForm = document.querySelector(email),
      textMessage = document.querySelector(text),
      errorForm = document.querySelector(error),
      modal = document.querySelector(form__total);

  let total

  const message = {
    loading: 'Loading...',
    success: 'Your message successfully sent',
    failure: 'Error! Reload the page'
  }

  emailForm.addEventListener('input', ()  => {
    checkEmail()
  })

  const postData = async (url, data) => {
    status.classList.add('show__status');
    status.textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
    }

  form.addEventListener('submit', (e) => {
      if(total && nameForm.value != '' && textMessage.value != '') {
       e.preventDefault();
       sendFormSuccess()
      } else {
        e.preventDefault();
        sendFormFail()
      }

    })

    function checkEmail() {
      if(emailForm.validity.valid) {
        errorForm.innerHTML = '';
        errorForm.className = 'error';
        total = true;
        return total;
      } else {
        errorForm.innerHTML = 'Please enter correct email';
        total = false
        return total;
      }
    }

    function sendFormSuccess() {
      const formData = new FormData(form);
      postData('sender/sender.php', formData)
        .then(res => {
          status.textContent = message.success;
        })
        .catch((e) => {
          status.textContent = message.failure;
        })
        .finally(() => {
          form.reset();
          setTimeout(() => {
            status.textContent = '';
            status.classList.remove('show__status');
          }, 400);
          try {
            if(form.classList == 'footer__formTotal') {
              setTimeout(() => {
                modal.classList.remove('show');
                document.body.classList.remove('overbody');
              }, 600);
            }
          }
          catch {
          }
        })
    }

    function sendFormFail() {
      status.classList.add('show__status');
      status.textContent = "Not all fields are filled";
      setTimeout(() => {
          status.classList.remove('show__status');
          status.textContent = '';
       }, 500)
    }
  }
export default take__send__form;
