import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let MoneySaver = (props) => {
  const { palkkaPaiva, handleSubmit, pristine, reset, submitting } = props;
  const paivapalkanjakaja = 21.5;
  const sivulukukerroin = 1.35;
  return (
    <form onSubmit={handleSubmit}>
    <div class="moneysaver-holder">
    <div class="section-holder">
        <label class="info-label">Työntekijän palkka</label>
        <div>
          <Field name="tyontekijapalkka" component="input" type="text" placeholder="€€€"/>
        </div>
      </div>
      <div class="section-holder">
        <label class="info-label">Esimiehen palkka</label>
        <div>
          <Field name="esimiehenpalkka" component="input" type="text" placeholder="€€€"/>
        </div>
      </div>
      <div class="section-holder">
        <label class="info-label">Johtotason palkka</label>
        <div>
          <Field name="johtotasonpalkka" component="input" type="text" placeholder="€€€"/>
        </div>
      </div>
      <div class="section-holder">
        <label class="info-label">Sivukulukerroin</label>
        <div>
        {sivulukukerroin}
        </div>
      </div>
      <div class="section-holder">
        <label class="info-label">Päiväpalkan jakaja</label>
        <div>
         {paivapalkanjakaja}
        </div>
      </div>

      <div>
      {palkkaPaiva}
      </div>
   

      <div>
        <button type="submit" disabled={pristine || submitting}>Luo PDF</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
      </div>
    </form>
  )
}


MoneySaver = reduxForm({
  form: 'selectingFormValues', // a unique identifier for this form
})(MoneySaver);

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues'); // <-- same as form name
MoneySaver = connect(state => {
  // can select values individually
  const johtop = selector(state, 'johtotasonpalkka');
  const esimiesp = selector(state, 'esimiehenpalkka');
  const tyontekija = selector(state, 'tyontekijapalkka');
  const paivapalkanjakaja = 21.5;
  const sivulukukerroin = 1.35;
  const palkkaPaiva = (johtop+esimiesp+tyontekija)*paivapalkanjakaja;


  return {
    palkkaPaiva,
  };
})(MoneySaver);

export default MoneySaver;