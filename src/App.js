import { TextField, Autocomplete } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

function App() {
  const destinationList = [
    'aastra_fuels_284353',
    'abiga_petro_fills_200377',
    'adhithi_agencies_335577',
    'amaravathicoo_148069',
    'angu_agencies_187811',
    'annur_lorry_owners_association_187784',
    'aradhana_fuel_service_311302',
    'arasur_fuel_point_306150',
    'aravalli_fuels_226881',
    'aswin_fuels_216251',
    'avt_auto_feeds_332802',
    'ayyappan_&_venkateshwara_agencies_134011',
    'a_p_r_petroleum_179337',
    'a_r_agencies_201518',
    'bagyalakshmi_enterprises_134044',
    'bala_sekharan_agencies_305666',
    'balu_maniyakar_fuels_202821',
    'bismee_agencies_172255',
    'bombay_burmah_148111',
    'chennimalaiappan_&_co_293450',
    'coastal_energe_276891',
    'coco_kangeyampalayam_shanthi_social_329184',
    'cognizant_techno.soln.pvt lt_232666',
    'coimbatore_bp_consumer_pump_zc8020',
    'coimbatore_disconcoopws_store_312977',
    'commissioner_148291',
    'cordite_factor_148225',
    'deepiga_agencies_246590',
    'elvee_auto_enterprises_148302',
    'fathima_service_centre_187790',
    'freedom_filling_station_318472',
    'gandhi_agency_373633',
    'giri_trading_co_134015',
    'gounder_and_co_267041',
    'govt. auto workshop_148066',
    'hari_janani_co_187810',
    'janatha_agencies_134057',
    'jeba_priya_agency_284719',
    'jmsk_agency_194854',
    'j_a_motor_sport_299092',
    'kandhavel_agency_370774',
    'karunya_welfare_society_225382',
    'kavaia_kaliamman_agency_270116',
    'kkm_fuels_261754',
    'koppanna_perumal_fuels_332817',
    'krishna_auto_service_134032',
    'kumaran_fuels_337886',
    'k_p_m_petroleum_224821',
    'lakshmi_fuels_194092',
    'lucky_star_134022',
    'maaruthi_agency_182202',
    'mahaluxmi_&_co_135327',
    'mk_fuels_327742',
    'murugan_auto_service_134048',
    'nka_wahab_&_co_134041',
    'pandalur_petroleum_products_134038',
    'paraniha_traders_269210',
    'pss_rajan_&_co_134014',
    'pushparathinam_agencies_307080',
    'p_r_readymix_ind_306062',
    'p_s_agencies_206745',
    'quality_petroleum_products_180156',
    'ramaswamy_&_co_153213',
    'rks_appu_agencies_310042',
    'rohini_fuels_268243',
    'rps_fuels_305830',
    'rvs_social_service_135328',
    'rv_agencies_134018',
    'sairam_autos_339031',
    'sakthivel_fuel_station_340769',
    'sakthi_agency_ksk_316210',
    'sakthi_fuel_agencies_134072',
    'samyukta_corporation_148299',
    'samy_fuel_station_373643',
    'sanjay_surya_agencies_230098',
    'sarvesvar_oil_company_203043',
    'sendhoor_petroleum_agency_305274',
    'shakti_auto_service_187793',
    'shanthi_social_service_182764',
    'shree_arunach_335569',
    'shree_kaliamman_agencies_333835',
    'shree_lakshmi_agencies_134061',
    'shri_jaanaki_petro_fuel_261528',
    'shri_periyanayaki_fuel_178269',
    'sivam_fuels_305774',
    'siva_agencies_207960',
    'sm_petroleum_181509',
    'sree_ammann_agency_247656',
    'sree_kalaivani_agencies_234824',
    'sree_kaliamman_traders_134021',
    'sree_kottai_murugan_agencies_239255',
    'sree_narasimh_148125',
    'sree_rathnam_oil_company_134070',
    'sree_shivasakthi_fuels_134051',
    'srikalaivani_agency_342010',
    'srisri_s_agency_200443',
    'sri_bagavathi_agences_179372',
    'sri_choleeswara_agency_211066',
    'sri_damodaram_s_272077',
    'sri_devaki_agencies_191325',
    'sri_kumaran_agencies_259595',
    'sri_k_v_k_enterprises_184171',
    'sri_madurakaliyamman_agencies_271571',
    'sri_maruthakaliyamman_agencies_261826',
    'sri_meesaikarar_agencies_270020',
    'sri_murugan_agencies_175134',
    'sri_ram_agencies_134033',
    'sri_ranganathar_fuels_177959',
    'sri_sai_s_auto_fuel_268004',
    'sri_vetrie_agency_234830',
    'sr_fuel_254192',
    'ssm_agency_223474',
    'ss_agencies_165616',
    'sulur_lorry_urimaiyalargal1_199353',
    'sulur_lorry_urimaiyalargal2_211785',
    'suresh_agencies_196949',
    'surya_agencies_230086',
    'swarnam_agencies_218042',
    's_m_oil_company_134065',
    's_senniappa_gounder_134036',
    'tata_coffee_ltd_364966',
    'tci_india_ltd_134068',
    'thangam_servicestation_134054',
    'the_sulur_apcmsltdnok1947_332004',
    'thirumalai_agencies_337785',
    'thiru_murugan_traders_185923',
    'thrush_agencies_247574',
    'tidel_park_coi_240645',
    'tsr_agencies_332005',
    'umamaheswari_agencies_173254',
    'upr_oil_trading_company_236352',
    'vera_kumaaraswamy_auto_fuel_171148',
    'vijay_filling_station_134088',
    'vinayagaa_agencies_177334',
    'vishagan_fuels_park_330432',
  ];
  const [selectedDest, setSelectedDest] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <div className="App d-flex flex-column vh-100 vw-100">
      <div className="IOCLImage" aria-current="page" />
      <div className="title-bar">
        <div className={`title`}>
          <Typewriter
            options={{
              strings: 'IOCL - COIMBATORE TERMINAL',
              pauseFor: 5000,
              autoStart: true,
              loop: false,
              cursor: '',
            }}
          />
        </div>
        <label className={`title-small`}>Customer Route Map</label>
        <Autocomplete
          disablePortal
          options={destinationList.map((item) => item.toUpperCase())}
          sx={{
            width: isSmallScreen ? '90vw' : '50vw',
            marginBottom: '10px',
            '& + .MuiAutocomplete-popper .MuiAutocomplete-option': {
              fontSize: isSmallScreen ? '4vw' : '1vw',
            },
          }}
          name="jrm"
          onChange={(e, newValue) => setSelectedDest(newValue)}
          size="small"
          renderInput={(params) => (
            <TextField
              {...params}
              label={selectedDest === null ? 'Select Destination...' : ''}
              sx={{
                '& .MuiOutlinedInput-root': {
                  fontSize: isSmallScreen ? '4vw' : '1vw',
                  color: 'black',
                  fontFamily: 'calibri',
                  backgroundColor: 'white',
                },
                '& .MuiInputLabel-root': {
                  fontSize: isSmallScreen ? '4vw' : '1vw',
                  color: 'black',
                  fontFamily: 'calibri',
                  backgroundColor: 'white',
                },
              }}
            />
          )}
        />
      </div>
      {selectedDest ? (
        <iframe
          src={`${
            process.env.PUBLIC_URL
          }/asset/JRM_HTML_FILE/${selectedDest.toLowerCase()}.html`}
          width="98%"
          title="CBE-JRM" // Title for accessibility
          className="iframe-style"
          style={{
            border: '1px solid gray',
            borderRadius: '8px',
          }}
        />
      ) : (
        <div
          className="iframe-style"
          style={{
            width: '98%',
            border: '1px solid gray',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: 'gray',
            backgroundColor: '#EFEFEF',
          }}
        >
          No Destination Selected
        </div>
      )}
    </div>
  );
}

export default App;
