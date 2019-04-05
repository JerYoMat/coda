
export const getCompanies = () => {
  return fetch('/companies').then(res => res.json());
};




export const createCompany = (name, ticker, exchange) => {
  
  return postData('/companies', {
    companyname: name,
    primarysymbol: ticker,
    primaryexchange: exchange
  });
};

function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json());
}