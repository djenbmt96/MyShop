import Global from '../components/Global';
const initData = () => (
    fetch(Global.DOMAIN + 'home/index')
    .then(response => response.json())
)
export default initData;