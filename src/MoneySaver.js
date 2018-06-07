import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let MoneySaver = (props) => {
  const { costSkholePay, costSkholeBoss, costSkholeWorkers, firmpaymultiplier, kilometrikorvaus, skholelicens, daypay, costother, costFood, costHotel, costCar, costTeacher, salaryTemp, allppl, salaryAll, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div class="moneysaver-holder">
        <div class="section-holder">
          <label class="info-label">Työntekijän palkka</label>
          <div>
            <Field name="workerpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Esimiehen palkka</label>
          <div>
            <Field name="managerpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Johtotason palkka</label>
          <div>
            <Field name="bosspay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Sivukulukerroin</label>
          <div>
            {firmpaymultiplier}
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Päiväpalkan jakaja</label>
          <div>
            {daypay}
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutettavien työntekijöiden lkm</label>
          <div>
            <Field name="countworker" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutettavien esimiesten lkm</label>
          <div>
            <Field name="countmanager" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutettavien johtotasonhenkilöiden lkm </label>
          <div>
            <Field name="countboss" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutuspäivien lukumäärä</label>
          <div>
            <Field name="daycount" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Työntekijät</label>
          <div>
            <Field name="tempworker" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Esimiehet</label>
          <div>
            <Field name="tempmanager" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Johto</label>
          <div>
            <Field name="tempboss" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Sijaispäivien määrä</label>
          <div>
            <Field name="tempdaycount" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Kouluttajan palkkio</label>
          <div>
            <Field name="teacherpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Kilometrimäärä koulutuspaikkaan</label>
          <div>
            <Field name="countkm" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kilometrikorvaus määrä</label>
          <div>
            <div>
              {kilometrikorvaus}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kuinka monelle henkilölle maksetaan</label>
          <div>
            <Field name="countkmrefund" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Huoneen hinta</label>
          <div>
            <Field name="roomcost" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kuinka monta huonetta</label>
          <div>

            <Field name="roomcount" component="input" type="text" placeholder="lkm" />

          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Yöpymis vuorokaudet</label>
          <div>
            <Field name="countroomdays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>


        <div class="section-holder">
          <label class="info-label">Kokoustarjottavat, hinta/hlö</label>
          <div>
            <Field name="foodcost" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kuinka monelle henkilölle maksetaan</label>
          <div>

            <Field name="foodcount" component="input" type="text" placeholder="lkm" />

          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Vuorokausimäärä</label>
          <div>
            <Field name="countfooddays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Muut mahdolliset kustannukset</label>
          <div>
            <Field name="costother" component="input" type="text" placeholder="€€€" />
          </div>
        </div>



        <div class="section-holder">
          <label class="info-label">Henkilöstömäärä yhteensä</label>
          <div>
            <div>
              {allppl}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Lisenssin hinta</label>
          <div>
            <div>
              {skholelicens}€
          </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Hallinnon viemä työaika-arvio päivissä</label>
          <div>
            <Field name="countbossskholedays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>


        <div class="section-holder">
          <label class="info-label">Palkat</label>
          <div>
            <div>
              {salaryAll}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Sijaitset</label>
          <div>
            <div>
              {salaryTemp}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kouluttajan palkkio</label>
          <div>
            <div>
              {costTeacher}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kilometsikorvaukset</label>
          <div>
            <div>
              {costCar}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Yöpymiskustannukset</label>
          <div>
            <div>
              {costHotel}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kokoustarjoilut</label>
          <div>
            <div>
              {costFood}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Muut mahdolliset kulut yh</label>
          <div>
            <div>
              {costother}
            </div>
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Lisenssi hinta vuodeksi, rajaton käyttö</label>
          <div>
            <div>
              {costSkholePay}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Arvioitu palkkakustannus hallinnoinnista</label>
          <div>
            <div>
              {costSkholeBoss}
            </div>
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Palkat (vaikka opiskelu tehdään työaikana)</label>
          <div>
            <div>
              {costSkholeWorkers}
            </div>
          </div>
        </div>



        <div>
          <button type="submit" disabled={pristine || submitting}>Luo PDF</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Tyhjennä</button>
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
  const daypay = 21.5;
  const firmpaymultiplier = 1.35;
  const kilometrikorvaus = 0.42;
  const skholelicens = 150;
  var bosspay = parseInt(selector(state, 'bosspay'), 10);
  var managerpay = parseInt(selector(state, 'managerpay'), 10);
  var workerpay = parseInt(selector(state, 'workerpay'), 10);
  var countworker = parseInt(selector(state, 'countworker'), 10);
  var countmanager = parseInt(selector(state, 'countmanager'), 10);
  var countboss = parseInt(selector(state, 'countboss'), 10);
  var daycount = parseInt(selector(state, 'daycount'), 10);
  const salaryAll = Math.round(((bosspay * countboss) + (managerpay * countmanager) + (workerpay * countworker)) * firmpaymultiplier / daypay * daycount);
  const allppl = countworker + countboss + countmanager;
  const costother = parseInt(selector(state, 'costother'), 10);
  var tempworker = parseInt(selector(state, 'tempworker'), 10);
  var tempmanager = parseInt(selector(state, 'tempmanager'), 10);
  var tempboss = parseInt(selector(state, 'tempboss'), 10);
  var tempdaycount = parseInt(selector(state, 'tempdaycount'), 10);

  const salaryTemp = Math.round(((bosspay * tempboss) + (managerpay * tempmanager) + (workerpay * tempworker)) * firmpaymultiplier / daypay * tempdaycount);
  const costTeacher = parseInt(selector(state, 'teacherpay'), 10);

  var countkm = parseInt(selector(state, 'countkm'), 10);
  var countkmrefund = parseInt(selector(state, 'countkmrefund'), 10);

  const costCar = countkm * countkmrefund * kilometrikorvaus;

  var roomcost = parseInt(selector(state, 'roomcost'), 10);
  var roomcount = parseInt(selector(state, 'roomcount'), 10);
  var countroomdays = parseInt(selector(state, 'countroomdays'), 10);

  const costHotel = roomcost * roomcount * countroomdays;

  var foodcost = parseInt(selector(state, 'foodcost'), 10);
  var foodcount = parseInt(selector(state, 'foodcount'), 10);
  var countfooddays = parseInt(selector(state, 'countfooddays'), 10);

  var countbossskholedays = parseInt(selector(state, 'countbossskholedays'), 10);
  

  const costFood = foodcost * foodcount * countfooddays;

  const costSkholePay = skholelicens*allppl;
  const costSkholeBoss = bosspay*firmpaymultiplier*countbossskholedays/daypay
  const costSkholeWorkers = salaryAll;


  return {
    costSkholePay, costSkholeBoss, costSkholeWorkers, kilometrikorvaus, salaryAll, allppl, costother, costFood, costHotel, costCar, costTeacher, salaryTemp, daypay, skholelicens, firmpaymultiplier
  };
})(MoneySaver);

export default MoneySaver;