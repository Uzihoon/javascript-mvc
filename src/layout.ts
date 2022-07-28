import { INPUT_FORM_CLASS } from './constant';

const layout = `
<div class="wrapper">
  <header>
    <h3 class="title">Information</h3>
    <p class="description">Please fill all required information.</p>
  </header> 
  <div class="content">
    <div class="identity-container">
      <section class=${INPUT_FORM_CLASS}></section>
      <div class="info-box">
        <div class="question-icon">?</div>
        <div class="info-text">
          <span>
            If you need further information, please feel free to contact us.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default layout;
