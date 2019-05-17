const BASE_URL = 'https://mestreconstrutor.blog.br/api/wp-json/wp/v2'
//local
// const BASE_URL = 'http://maloo.tempsite.ws/mestreconstrutor/api/wp-json/wp/v2'

export const get = (type, slug) => fetch(`${BASE_URL}/${type}?slug=${slug}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then(res => res.json())
  

export const getProjetos = () => fetch(`${BASE_URL}/projetos?per_page=8`, {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())


export const postRD = (body) =>  fetch('https://www.rdstation.com.br/api/1.3/conversions', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(body)
        })
        .then(res => res.json())