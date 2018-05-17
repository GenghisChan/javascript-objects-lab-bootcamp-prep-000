var recipes = {
  
}

function updateObjectWithKeyAndValue(object,key,value){
  Object.assign({}, object[key] = value)
  return object
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  delete object.key
  return object
}