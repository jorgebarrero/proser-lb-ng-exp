function removeRowDataPacket (myResult) {
  let result = myResult

  if(myResult){
    result = JSON.parse(JSON.stringify(myResult));
  }

  return result
}

module.exports = {
  removeRowDataPacket
}
