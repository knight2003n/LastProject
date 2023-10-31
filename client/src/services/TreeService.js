import Api from '@/services/Api';

export default {
  index() {
    return Api().get('tree'); 
  },
  show(treeId) {
    return Api().get('tree/' + treeId); 
  },
  post(tree) {
    return Api().post('tree', tree); 
  },
  put(tree) {
    return Api().put('tree/' + tree.id, tree); 
  },
  delete(tree) {
    return Api().delete('tree/' + tree.id); 
  },
};
