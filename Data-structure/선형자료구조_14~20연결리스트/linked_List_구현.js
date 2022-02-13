// Node() data 와 pointer 를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList() Head 와 length 를 가지고 있는 객체
function LinkedList() {
  this.head = null;
  this.length = 0;
}

// size()
LinkedList.prototype.size = function () {
  return this.length;
};

//ㅑ
