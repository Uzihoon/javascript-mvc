import { Template } from './types';

const template: Template = {
  input({ id, title, inputType }, _) {
    return `
    <div class="identity-group">
      <h3 class="identity-title">
        <label for=${id}>${title}</label>
      </h3>
      <input class="identity-input" placeholder=${title} type=${inputType || 'string'} id=${id} />
      <span class="icon-arrow"></span>
    </div>
    `;
  },
  select({ id, title }, carrier) {
    return `
    <div class="identity-group">
      <h3 class="identity-title">
        <label class="title">${title}</label>
      </h3>
      <select class="identity-select" id=${id} required>
        <option selected disabled value="" >${title}</option>
        ${carrier.reduce((defore, option) => defore + `<option value=${option.id}>${option.name}</option>`, '')}
      </select>
      <span class="icon-arrow"></span>
    </div>
    `;
  },
};

export default template;
