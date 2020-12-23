var app =  new Vue({
  // elでhtmlに記載しているid要素の指定
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    //ボタンが押された際の処理
    addItem: function(event){
      //newItemが空の場合処理が終了される。
      if (this.newItem == '')return;
      var todo = {
        item: this.newItem,
        //タスクが完了しているかどうか
        isDone: false
      };
      //配列に追加
      this.todos.push(todo);
      // タスク入力後にインプットフォームを空にする。
      this.newItem = '';
    },
    deleteItem: function(index){
      alert(index);
      // spliceメソッド・・配列から要素を削除,
      // 第一引数が削除を始める配列のindex,第二匹数は削除する長さ.
      this.todos.splice(index, 1)
    }
  }
})