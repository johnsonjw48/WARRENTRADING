const liveURL = '/themes/consult-react/app';
const imagePath= process.env.NODE_ENV === 'development' ? '/images/' : liveURL+'/images/';
export {
  imagePath,
  liveURL
}