//! Aufgabe 2
// const statusCode: number = [200, 201, 400, 401, , 403, 404, 405, 500, 502, 503];

// statusCode.forEach((statusCode: number) => {
//   fetch(`https://httpstat.us/${statusCode}`)
//     .then((response: Response) => {
//       if (response.ok) {
//         const message = document.createElement("p") as HTMLParagraphElement;
//         message.textContent = `Status is ${response.status.toString()} and it means ${
//           response.statusText
//         }`;
//         document.body.appendChild(message);
//       } else {
//         const message = document.createElement("p") as HTMLParagraphElement;
//         message.textContent = `Status is ${response.status.toString()} and it means ${
//           response.statusText
//         }`;
//         document.body.appendChild(message);
//       }
//     })
//     .catch((error: Error) => {
//       console.error(error);
//     });
// });

const body = document.querySelector("body") as HTMLBodyElement;

interface ICountry {
  name: ICountryName;
  flag: string;
  region: string;
  population: number;
}

interface ICountryName {
  common: string;
  official: string;
}

const url = "https://restcountries.com/v3.1/all";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const countryInfo = data as ICountry[];
    console.log(countryInfo);
    body.innerHTML = countryFunc(countryInfo);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function countryFunc(contries: ICountry[]): string {
  // const resultAsString = contries.map((country: ICountry) => {
  //   return `
  //     <div style="border: 1px solid black; margin:10px; padding:10px;">
  //       <h1>${country.name.common}</h1>
  //       <h2>${country.flag}</h2>
  //       <p>Region: ${country.region}</p>
  //       <p>Population: ${country.population}</p>
  //     </div>
  //     `;
  // });
  // console.log(resultAsString);
  // return resultAsString.join("");

  // for dongusunun icinde result arrayini doldurulur. bir bir resultin indexinde bir string olucak, bu string hedef html stringi olacak.
  const resultAsString = [];

  console.log("haci");
  // Todo: implaement with for loop
  for (let i = 0; i < contries.length; i++) {
    resultAsString.push(`
        <div style="border: 1px solid black; margin:10px; padding:10px;">
          <h1>${contries[i].name.common}</h1>
           <h2>${contries[i].flag}</h2>
          <p>Region: ${contries[i].region}</p>
          <p>Population: ${contries[i].population}</p>
         </div>
         `);
  }
  const stringhtml = resultAsString.join("");

  return stringhtml;
}
