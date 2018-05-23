import Global from '../components/Global';

export default  getList=(id) => (
    fetch(Global.DOMAIN + 'product/getProductbytype/' + id + '?page=0')
        .then(response => response.json())
)