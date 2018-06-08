import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let MoneySaver = (props) => {
  const { costSkholePay, costSkholeBoss, costSkholeWorkers, firmpaymultiplier, kilometrikorvaus, skholelicens, daypay, costother, costFood, costHotel, costCar, costTeacher, salaryTemp, allppl, salaryAll, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div class="moneysaver-holder">
      <div class="section-breaker">1. Palkkataso, perustiedot</div>
        <div class="section-holder">
          <label class="info-label">Työntekijän palkka</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="workerpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Esimiehen palkka</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="managerpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Johtotason palkka</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="bosspay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Sivukulukerroin</label>
          <div class="data-holder">
            {firmpaymultiplier}
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Päiväpalkan jakaja</label>
          <div class="data-holder">
            {daypay}
          </div>
        </div>
        <div class="section-breaker">2. Perinteisen koulutuksen kustannusarvio</div>
        <div class="section-holder">
          <label class="info-label">Koulutettavien työntekijöiden lkm</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countworker" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutettavien esimiesten lkm</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countmanager" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutettavien johtotasonhenkilöiden lkm </label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countboss" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Koulutuspäivien lukumäärä</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="daycount" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-breaker">3. Sijaitset (tarvittava määrä koulutuksen ajaksi)</div>
        <div class="section-holder">
          <label class="info-label">Työntekijät</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="tempworker" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Esimiehet</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="tempmanager" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Johto</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="tempboss" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Sijaispäivien määrä</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="tempdaycount" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-breaker">4. Fasiliteetit</div>
        <div class="section-holder">
          <label class="info-label">Kouluttajan palkkio</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="teacherpay" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-breaker">Kilometrikorvaus</div>
        <div class="section-holder">
          <label class="info-label">Kilometrimäärä koulutuspaikkaan</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countkm" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kilometrikorvaus määrä</label>
          <div class="data-holder">
              {kilometrikorvaus}
          </div>
        </div>
        <div class="section-breaker">Yöpymiskustannukset</div>
        <div class="section-holder">
          <label class="info-label">Kuinka monelle henkilölle maksetaan</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countkmrefund" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-holder">
          <label class="info-label">Huoneen hinta</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="roomcost" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kuinka monta huonetta</label>
          <div class="data-holder">

            <Field class="data-input-holder" name="roomcount" component="input" type="text" placeholder="lkm" />

          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Yöpymis vuorokaudet</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countroomdays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-breaker">Kokoustarjoilu</div>

        <div class="section-holder">
          <label class="info-label">Kokoustarjottavat, hinta/hlö</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="foodcost" component="input" type="text" placeholder="€€€" />
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kuinka monelle henkilölle maksetaan</label>
          <div class="data-holder">

            <Field class="data-input-holder" name="foodcount" component="input" type="text" placeholder="lkm" />

          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Vuorokausimäärä</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countfooddays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>
        <div class="section-breaker">Muut mahdolliset kulut, esim tilavuokra</div>
        <div class="section-holder">
          <label class="info-label">Muut mahdolliset kustannukset</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="costother" component="input" type="text" placeholder="€€€" />
          </div>
        </div>


        <div class="section-breaker">5. Skholen malli kustannusarvio</div>
        <div class="section-holder">
          <label class="info-label">Henkilöstömäärä yhteensä</label>
          <div class="data-holder">

              {allppl}

          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Lisenssin hinta</label>
          <div class="data-holder">
       
              {skholelicens}€
        
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Hallinnon viemä työaika-arvio päivissä</label>
          <div class="data-holder">
            <Field class="data-input-holder" name="countbossskholedays" component="input" type="text" placeholder="lkm" />
          </div>
        </div>

        <div class="section-breaker">6. Kustannusvertailu</div>
        <div class="section-holder">
          <label class="info-label">Palkat</label>
          <div class="data-holder">
      
              {salaryAll}
          
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Sijaitset</label>
          <div class="data-holder">

              {salaryTemp}
      
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Kouluttajan palkkio</label>
          <div class="data-holder">
       
              {costTeacher}
            </div>
  
        </div>
        <div class="section-holder">
          <label class="info-label">Kilometsikorvaukset</label>
          <div class="data-holder">
   
              {costCar}
            </div>
    
        </div>
        <div class="section-holder">
          <label class="info-label">Yöpymiskustannukset</label>
          <div class="data-holder">

              {costHotel}
            </div>
       
        </div>
        <div class="section-holder">
          <label class="info-label">Kokoustarjoilut</label>
          <div class="data-holder">
     
              {costFood}
     
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Muut mahdolliset kulut yh</label>
          <div class="data-holder">
         
              {costother}
         
          </div>
        </div>
        <div class="section-breaker">Skholen malli</div>
        <div class="section-holder">
          <label class="info-label">Lisenssi hinta vuodeksi, rajaton käyttö</label>
          <div class="data-holder">
     
              {costSkholePay}
         
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Arvioitu palkkakustannus hallinnoinnista</label>
          <div class="data-holder">
       
              {costSkholeBoss}
           
          </div>
        </div>
        <div class="section-holder">
          <label class="info-label">Palkat (vaikka opiskelu tehdään työaikana)</label>
          <div class="data-holder">
   
              {costSkholeWorkers}
      
          </div>
        </div>



        <div class="button-holders">
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