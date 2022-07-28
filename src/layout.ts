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
            모든 정보가 올바르게 입력되었음에도 인증번호 요청이 되지않는 경우 가입하신 통신사에 문의해주세요.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default layout;
