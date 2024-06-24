import axios from "axios";

// govornici na naslovnici
export async function getSaysSpeakers() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/naslovnica-podrzimo-odrzivo"
    );
      
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

// govornici na naslovnici
export async function getNews() {
  try {
    const response = await axios.get(
      "https://hgk.hr/getSectionPosts/podrzimo-odrzivo"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}
 
//Single novosti

export async function getSingleNews(slug) {
  try {
    const response = await axios.get(
      `https://hgk.hr/getSinglePost/${slug}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Institucionalni partneri

export async function getInstPartners() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-institucionalni"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Platinasti partneri

export async function getPlatinumPartners() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-platinasti"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

// Zlatni partneri
export async function getGoldPartners() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-zlatni"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Srebrni partneri

export async function getSilverPartners() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-srebrni"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Broncani partneri

export async function getBronzedPartners() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-broncani"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}

//Broncani partneri

export async function getFriendPartners() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/sponzori-footer-prijatelji"
    );

    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}


// Program


export async function getPrograms() {
  try {
    const response = await axios.get(
      "https://hgk.hr/api/get-cms-page/podrzimo-odrzivo/program"
    );
     
    return response.data;
  } catch (error) {
    throw new Error(`Greška prilikom dohvaćanja podataka: ${error.message}`);
  }
}