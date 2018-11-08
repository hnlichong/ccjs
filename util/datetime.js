function getDatetime(date) {
  date = date || new Date()
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
  return date.toJSON().replace(/[-T:\.Z]/g, '')
}
