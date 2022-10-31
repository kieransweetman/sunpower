export default function formObserver() {
  const first_form = document.querySelector('#first_form');
  const second_form = document.querySelector('#second_form');
  const third_form = document.querySelector('#third_form');
  const ent_form = document.querySelector('#ent_form');
  const contact_form = document.querySelector('#contact_form');
  const resume_form = document.querySelector('#ent_resume');
  const contact_div = document.querySelector('#contact_div');
  const first_form_btn = document.querySelector('#first_form_btn');
  const second_form_btn = document.querySelector('#second_form_btn');
  const third_form_btn = document.querySelector('#third_form_btn');
  const first_step = document.querySelector('#first_step');
  const second_step = document.querySelector('#second_step');
  const third_step = document.querySelector('#third_step');
  const steps = document.querySelector('#steps');
  const inputs = document.querySelectorAll('input');
  const desc = document.querySelector('#ent_form_desc');

  const first_form_attr = first_form.getAttribute('class');
  const second_form_attr = second_form.getAttribute('class');
  const third_form_attr = third_form.getAttribute('class');
  const resume_form_attr = resume_form.getAttribute('class');
  const first_form_btn_attr = first_form_btn.getAttribute('class');
  const second_form_btn_attr = second_form_btn.getAttribute('class');
  const third_form_btn_attr = third_form_btn.getAttribute('class');
  const first_step_attr = first_step.getAttribute('class');
  const second_step_attr = second_step.getAttribute('class');
  const third_step_attr = third_step.getAttribute('class');

  second_form.setAttribute('class', 'hide');
  second_form_btn.setAttribute('class', 'hide');
  second_step.setAttribute('class', 'hide');
  third_form.setAttribute('class', 'hide');
  third_form_btn.setAttribute('class', 'hide');
  third_step.setAttribute('class', 'hide');
  resume_form.setAttribute('class', 'hide');

  function first_next() {
    first_form.setAttribute('class', 'hide');
    first_form_btn.setAttribute('class', 'hide');
    first_step.setAttribute('class', 'hide');
    second_form.setAttribute('class', second_form_attr);
    second_form_btn.setAttribute('class', second_form_btn_attr);
    second_step.setAttribute('class', second_step_attr);
  }
  function second_back() {
    second_form.setAttribute('class', 'hide');
    second_form_btn.setAttribute('class', 'hide');
    second_step.setAttribute('class', 'hide');
    first_form.setAttribute('class', first_form_attr);
    first_form_btn.setAttribute('class', first_form_btn_attr);
    first_step.setAttribute('class', first_step_attr);
  }
  function second_next() {
    second_form.setAttribute('class', 'hide');
    second_form_btn.setAttribute('class', 'hide');
    second_step.setAttribute('class', 'hide');
    third_form.setAttribute('class', third_form_attr);
    third_form_btn.setAttribute('class', third_form_btn_attr);
    third_step.setAttribute('class', third_step_attr);
  }
  function third_back() {
    third_form.setAttribute('class', 'hide');
    third_form_btn.setAttribute('class', 'hide');
    third_step.setAttribute('class', 'hide');
    second_form.setAttribute('class', second_form_attr);
    second_form_btn.setAttribute('class', second_form_btn_attr);
    second_step.setAttribute('class', second_step_attr);
  }

  const voidCheck = () => {
    let check = 0;
    inputs.forEach((input) => {
      if (input.value === '' || desc.value === '') {
        check += 1;
      }
    });
    if (check !== 0) {
      alert("Merci de remplir l'entièreté du formulaire!");
    } else {
      resume();
    }
  };

  const resume = () => {
    let inputs_value = [];
    const resume = document.querySelector('#ent_resume');
    const labels = document.querySelectorAll('label');

    inputs.forEach((input) => {
      if (input.getAttribute('type') === 'text' && input.value !== '') {
        labels.forEach((label) => {
          if (label.htmlFor === input.id) {
            inputs_value.push({ title: label.textContent, value: input.value });
          }
        });
      }
      if (input.getAttribute('type') === 'file' && input.value !== '') {
        labels.forEach((label) => {
          const filename = input.value.split(/([\\/])/g).pop();
          if (label.htmlFor === input.id) {
            inputs_value.push({ title: label.textContent, value: filename });
          }
        });
      }
    });
    labels.forEach((label) => {
      if (label.htmlFor === desc.id) {
        inputs_value.push({ title: label.textContent, value: desc.value });
      }
    });

    ent_form.setAttribute('class', 'hide');
    contact_form.setAttribute('class', 'hide');
    contact_div.setAttribute('class', 'hide');
    third_form.setAttribute('class', 'hide');
    third_form_btn.setAttribute('class', 'hide');
    third_step.setAttribute('class', 'hide');
    steps.setAttribute('class', 'hide');
    resume_form.setAttribute('class', resume_form_attr);

    for (let i = 0; i < inputs_value.length; i++) {
      const title = document.createElement('h3');
      const value = document.createElement('p');
      const div = document.createElement('div');
      const resume = document.querySelector('#ent_resume');

      title.textContent = `${inputs_value[i].title.toUpperCase()}:`;
      value.textContent = inputs_value[i].value;
      title.setAttribute('class', 'mx-2 float-start text-brand-primary');
      value.setAttribute('class', 'mx-2 fs-7');
      div.appendChild(title);
      div.appendChild(value);
      div.setAttribute('class', 'mb-2 w-100 align-items-center');
      resume.appendChild(div);
    }
  };

  first_form_btn.addEventListener('click', () => {
    first_next();
  });
  second_form_btn.addEventListener('click', (e) => {
    if (e.target.getAttribute('alt') === 'back') {
      second_back();
    } else {
      second_next();
    }
  });
  third_form_btn.addEventListener('click', (e) => {
    if (e.target.getAttribute('alt') === 'back') {
      third_back();
    } else {
      voidCheck();
    }
  });
}

export { formObserver };
