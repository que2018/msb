
export function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function ucString(str) {
  return str.toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ")
}

export function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear()

  today = yyyy + '-' + mm + '-' + dd

  return today
}
