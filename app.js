const overAll = ['shoes', 'bags','jewelry', 'tomatoe', 'egg', 'phone', 'mouse', 'monitor', 'laptop', 'keyboard', 'phone', 'cheese', 'beef', 'chicken'];
document.getElementById('overallArray').innerHTML = 'overall cart: <br> ' + overAll

// join
const newJoin = overAll.join(', ')
document.getElementById('join').innerHTML = 'join array: <br> ' + newJoin

// pop
const pop = overAll.pop()
document.getElementById('pop').innerHTML = 'pop array: <br>' + pop

// reverse
const reverse = overAll.reverse()
document.getElementById('reverse').innerHTML = 'reverse array: <br>' + reverse

// concat
const cat = overAll.concat(pop)
document.getElementById('concat').innerHTML = 'concat array: <br>' + cat

// sort
const sort = overAll.sort()
document.getElementById('sort').innerHTML = 'sort array: <br>' + sort

// push
const push = overAll.push('thank you')
document.getElementById('push').innerHTML = 'push array: <br> ' + push

// shift
const shift = overAll.shift()
document.getElementById('shift').innerHTML = 'shift array: <br> ' + shift

// length
const length = overAll.length
document.getElementById('length').innerHTML = 'length array: <br>' + length

// slice
const slice = overAll.slice(1,12)
document.getElementById('slice').innerHTML = 'slice arary : <br>' + slice

// splice
const splice = overAll.splice(4,7, 'drinks', 'chops')
document.getElementById('splice').innerHTML = 'splice array: <br>' + splice