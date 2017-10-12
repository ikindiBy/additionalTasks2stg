
/* task#1*/

	function Node(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	function BinarySearchTree () {
		this.root = null;
	}

	BinarySearchTree.prototype.add = function(data) {
		let node = new Node(data);
		if(!this.root) {
			this.root = node;
		} else {
			let  current = this.root;
			while (current) {
				if(current.data > node.data) {
					if(!current.left){
						current.left = node;
						break;
					} else {
						current = current.left;
					}
				} else if (current.data < node.data) {
					if(!current.right){
						current.right = node;
						break;
					} else {
						current = current.right;
					} 
				} else {
					break;
				}
			}
		}
	};

	BinarySearchTree.prototype.compareWith = function(bst) {
		let currentA = this.root;
		let currentB = bst.root;
		return comparatorNodes(currentA,currentB);
	};

	let comparatorNodes = function(nodeA, nodeB) {
		if(nodeA && nodeB) {
			if (!(nodeA.data===nodeB.data)) { 
				return false;
			}
			comparatorNodes(nodeA.left, nodeB.left);
			comparatorNodes(nodeA.right, nodeB.right);
		} else if ((nodeA && !nodeB) || (!nodeA && nodeB)) {
			return false;	
		}
		return true;
	};

/* task#2*/

	let searchOne =	function(ar) {
	    let obj ={};
		ar.forEach(a => { 
			obj[a] = (obj[a]) ? obj[a] + 1 : 1 
		});
		for(let key in obj) {
			if (obj[key]<2) return key;
			}
	};


/* task#3*/

	let repeatStrings = function(ar) {
		let obj ={};
		let repeatStr;
		ar.forEach(a => { 
			if (obj[a]) {
				repeatStr = a;
				} else {
					obj[a] = 1; 
				}
			});
		return repeatStr ? repeatStr : null;
	}