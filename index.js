var recipes = {
  
}

function updateObjectWithKeyAndValue(object,key,value){
  Object.assign({}, object[key] = value)
  return object
  
}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, object[key] = value)
  return newObj
}