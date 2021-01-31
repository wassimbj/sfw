let lang = 'en';
if(typeof window !== 'undefined'){
  if(window.localStorage.getItem('lang')){
    lang = window.localStorage.getItem('lang');
  }
}

export default lang;
