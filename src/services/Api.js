import axios from "axios";
import i18n from './i18n';

function getLanguageSuffix() {
  return i18n.language === 'en' ? '-en' : '';
}

// govornici na naslovnici
export async function getHomeSpeakers() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/naslovnica-podrzimo-odrzivo${suffix}`
    );
     
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}


// govornici page
export async function getSaysSpeakers() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/govornici${suffix}`
    );
     
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

// novosti
export async function getNews() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/getSectionPosts/podrzimo-odrzivo${suffix}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}
 
//Single novosti

export async function getSingleNews(slug) {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/getSinglePost/${slug}${suffix}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Institucionalni partneri

export async function getInstPartners() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-institucionalni${suffix}`
    );
      
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Platinasti partneri

export async function getPlatinumPartners() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-platinasti${suffix}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

// Zlatni partneri
export async function getGoldPartners() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-zlatni${suffix}`
    );
    
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Srebrni partneri

export async function getSilverPartners() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-srebrni${suffix}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Broncani partneri

export async function getBronzedPartners() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-broncani${suffix}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Friend partneri

export async function getFriendPartners() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-prijatelji${suffix}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}


// Program


export async function getPrograms() {
  const suffix = getLanguageSuffix();
  try {
    const response = await axios.get(
      `https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/program${suffix}`
    );
    
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Newsletter 



export async function sentNewsletter(email) {
  const API_URL =
    "https://email.hgk.hr/x/plugin/?pName=subscribe&MIDRID=S7Y1BAAA38&pLang=hr&Z=2065102450";

  const data = {
    DMDtask: "subscribe",
    subscribe_source: "web_prijava",
    email: email,
  };

  try {
    const response = await axios.post(API_URL, data);

    return response;
  } catch (error) {
    throw new Error(`Greška pri prijavi na newsletter: ${error.message}`);
  }
}
