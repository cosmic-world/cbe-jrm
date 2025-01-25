import { TextField, Autocomplete } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

function App() {
  const destinationList = [
    'AASTRA_FUELS_284353',
    'ABIGA_PETRO_FILLS_200377',
    'ADHITHI_AGENCIES_335577',
    'AmaravathiCoo_148069',
    'ANGU_AGENCIES_187811',
    'ANNUR_LORRY_OWNERS_ASSOCIATION_187784',
    'ARADHANA_FUEL_SERVICE_311302',
    'ARASUR_FUEL_POINT_306150',
    'ARAVALLI_FUELS_226881',
    'ASWIN_FUELS_216251',
    'AVT_AUTO_FEEDS_332802',
    'AYYAPPAN_&_VENKATESHWARA_AGENCIES_134011',
    'A_P_R_PETROLEUM_179337',
    'A_R_AGENCIES_201518',
    'BAGYALAKSHMI_ENTERPRISES_134044',
    'BALA_SEKHARAN_AGENCIES_305666',
    'BALU_MANIYAKAR_FUELS_202821',
    'BISMEE_AGENCIES_172255',
    'Bombay_Burmah_148111',
    'CHENNIMALAIAPPAN_&_CO_293450',
    'Coastal_Energe_276891',
    'COCO_KANGEYAMPALAYAM_SHANTHI_SOCIAL_329184',
    'COGNIZANT_TECHNO.SOLN.PVT LT_232666',
    'COIMBATORE_BP_CONSUMER_PUMP_ZC8020',
    'COIMBATORE_DISCONCOOPWS_STORE_312977',
    'COMMISSIONER_148291',
    'Cordite_Factor_148225',
    'DEEPIGA_AGENCIES_246590',
    'ELVEE_AUTO_ENTERPRISES_148302',
    'FATHIMA_SERVICE_CENTRE_187790',
    'FREEDOM_FILLING_STATION_318472',
    'Gandhi_Agency_373633',
    'GIRI_TRADING_CO_134015',
    'GOUNDER_AND_CO_267041',
    'GOVT. AUTO WORKSHOP_148066',
    'HARI_JANANI_CO_187810',
    'JANATHA_AGENCIES_134057',
    'JEBA_PRIYA_AGENCY_284719',
    'JMSK_AGENCY_194854',
    'J_A_MOTOR_SPORT_299092',
    'Kandhavel_Agency_370774',
    'KARUNYA_WELFARE_SOCIETY_225382',
    'KAVAIA_KALIAMMAN_AGENCY_270116',
    'KKM_FUELS_261754',
    'KOPPANNA_PERUMAL_FUELS_332817',
    'KRISHNA_AUTO_SERVICE_134032',
    'KUMARAN_FUELS_337886',
    'K_P_M_PETROLEUM_224821',
    'LAKSHMI_FUELS_194092',
    'LUCKY_STAR_134022',
    'Maaruthi_Agency_182202',
    'MAHALUXMI_&_CO_135327',
    'MK_FUELS_327742',
    'MURUGAN_AUTO_SERVICE_134048',
    'NKA_WAHAB_&_CO_134041',
    'PANDALUR_PETROLEUM_PRODUCTS_134038',
    'PARANIHA_TRADERS_269210',
    'PSS_RAJAN_&_CO_134014',
    'PUSHPARATHINAM_AGENCIES_307080',
    'P_R_Readymix_Ind_306062',
    'P_S_AGENCIES_206745',
    'QUALITY_PETROLEUM_PRODUCTS_180156',
    'RAMASWAMY_&_CO_153213',
    'RKS_APPU_AGENCIES_310042',
    'Rohini_Fuels_268243',
    'RPS_FUELS_305830',
    'RVS_SOCIAL_SERVICE_135328',
    'RV_AGENCIES_134018',
    'SAIRAM_AUTOS_339031',
    'SAKTHIVEL_FUEL_STATION_340769',
    'SAKTHI_AGENCY_KSK_316210',
    'SAKTHI_FUEL_AGENCIES_134072',
    'SAMYUKTA_CORPORATION_148299',
    'Samy_Fuel_Station_373643',
    'SANJAY_SURYA_AGENCIES_230098',
    'SARVESVAR_OIL_COMPANY_203043',
    'SENDHOOR_PETROLEUM_AGENCY_305274',
    'SHAKTI_AUTO_SERVICE_187793',
    'SHANTHI_SOCIAL_SERVICE_182764',
    'SHREE_ARUNACH_335569',
    'SHREE_KALIAMMAN_AGENCIES_333835',
    'SHREE_LAKSHMI_AGENCIES_134061',
    'SHRI_JAANAKI_PETRO_FUEL_261528',
    'SHRI_PERIYANAYAKI_FUEL_178269',
    'SIVAM_FUELS_305774',
    'SIVA_AGENCIES_207960',
    'SM_PETROLEUM_181509',
    'SREE_AMMANN_AGENCY_247656',
    'SREE_KALAIVANI_AGENCIES_234824',
    'SREE_KALIAMMAN_TRADERS_134021',
    'SREE_KOTTAI_MURUGAN_AGENCIES_239255',
    'SREE_NARASIMH_148125',
    'SREE_RATHNAM_OIL_COMPANY_134070',
    'SREE_SHIVASAKTHI_FUELS_134051',
    'SRIKALAIVANI_AGENCY_342010',
    'SRISRI_S_AGENCY_200443',
    'SRI_BAGAVATHI_AGENCES_179372',
    'SRI_CHOLEESWARA_AGENCY_211066',
    'Sri_Damodaram_S_272077',
    'SRI_DEVAKI_AGENCIES_191325',
    'SRI_KUMARAN_AGENCIES_259595',
    'SRI_K_V_K_ENTERPRISES_184171',
    'SRI_MADURAKALIYAMMAN_AGENCIES_271571',
    'SRI_MARUTHAKALIYAMMAN_AGENCIES_261826',
    'SRI_MEESAIKARAR_AGENCIES_270020',
    'SRI_MURUGAN_AGENCIES_175134',
    'SRI_RAM_AGENCIES_134033',
    'SRI_RANGANATHAR_FUELS_177959',
    'SRI_SAI_S_AUTO_FUEL_268004',
    'Sri_Vetrie_Agency_234830',
    'SR_FUEL_254192',
    'SSM_AGENCY_223474',
    'SS_AGENCIES_165616',
    'SULUR_LORRY_URIMAIYALARGAL1_199353',
    'SULUR_LORRY_URIMAIYALARGAL2_211785',
    'SURESH_AGENCIES_196949',
    'SURYA_AGENCIES_230086',
    'SWARNAM_AGENCIES_218042',
    'S_M_OIL_COMPANY_134065',
    'S_SENNIAPPA_GOUNDER_134036',
    'Tata_Coffee_Ltd_364966',
    'TCI_INDIA_LTD_134068',
    'THANGAM_SERVICESTATION_134054',
    'THE_SULUR_APCMSLTDNOK1947_332004',
    'THIRUMALAI_AGENCIES_337785',
    'THIRU_MURUGAN_TRADERS_185923',
    'THRUSH_AGENCIES_247574',
    'TIDEL_PARK_COI_240645',
    'TSR_AGENCIES_332005',
    'UMAMAHESWARI_AGENCIES_173254',
    'UPR_OIL_TRADING_COMPANY_236352',
    'VERA_KUMAARASWAMY_AUTO_FUEL_171148',
    'VIJAY_FILLING_STATION_134088',
    'VINAYAGAA_AGENCIES_177334',
    'VISHAGAN_FUELS_PARK_330432',
  ];
  const [selectedDest, setSelectedDest] = useState(null);
  return (
    <div className="App d-flex flex-column vh-100 vw-100">
      <div className="IOCLImage" aria-current="page" />
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
      <Autocomplete
        disablePortal
        options={destinationList}
        sx={{ width: '50vw', mb: 2 }}
        name="jrm"
        onChange={(e, newValue) => setSelectedDest(newValue)}
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              style: {
                fontFamily: 'cambria',
                fontSize: '1.5vw',
                width: '50vw',
                backgroundColor: 'white',
              },
            }}
            label={selectedDest === null ? 'Select Destination' : ''}
          />
        )}
      />
      {selectedDest ? (
        <iframe
          src={`/asset/JRM_HTML_FILE/${selectedDest}.html`} // The URL to display inside the iframe
          width="98%"
          height="78%"
          title="CBE-JRM" // Title for accessibility
          style={{ border: '1px solid gray', borderRadius: '8px' }}
        />
      ) : (
        <div
          style={{
            width: '98%',
            height: '78%',
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
