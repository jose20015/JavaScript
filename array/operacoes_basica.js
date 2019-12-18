//create an Array

		
		let fruits = ['Apple', 'Banana']
		
		console.log(fruits)
		console.log('Tamanho da lista: '+fruits.length)

		//Access (index into) an Array item
		console.log('Acessar um index')
		let first = fruits[0]
		let last = fruits[fruits.length -1]
		console.log(last)


		//Loop over an Array
		console.log('forEach')
		fruits.forEach(function(item, index, array) {
  			console.log(item, index);
		})

		//Add to the end of an Array
		console.log('Adicionar no final da lista')
		fruits.push('Orange') //adicionar no final
		console.log(fruits)
		console.log('Adicionar no inicio da lista')
		fruits.unshift('Abacate') 
		console.log(fruits)

		//Remove from the end of an Array
		console.log('Remover no final da lista')
		fruits.pop()
		console.log(fruits)
		//Remove from the front of an Array
		console.log('Remover no inicio final')
		fruits.shift()
		console.log(fruits)

		//Find the index of an item in the Array
		console.log('Quantidade de frases iguias Banana')
		let pos = fruits.indexOf('Banana')
		console.log(pos)

		//Remove an item by index position
		console.log('Remor um item informado Banana')
		fruits.splice(pos, 1)
		console.log(fruits)

		//Remove items from an index position
		let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
		console.log(vegetables)
		let m = 1, n = 2
		console.log('Remover varios items, item 1 e 2 da lista')
		vegetables.splice(m, n)
		console.log(vegetables)