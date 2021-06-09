function titleize(names, callback) { // names = array of names 
  new_arr = names.map(name => { return callback(name)});
  console.log(new_arr);
  new_arr.forEach(el => {console.log(el)});
}

function printCallback(name){
  name = `Mx. ${name} Jingleheimer Schmidt`;
  return name;
}

titleize(["Mary", "Brian", "Leo"], printCallback)

