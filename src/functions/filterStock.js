function filterStock(data) {
  // pisahkan yang stoknya habis, dahulukan yang tersedia
  // setelah selesai dipisah, digambungkan lagi.
  let ready = [];
  let sold = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].stocks > 0) {
      ready.push(data[i]);
    } else {
      sold.push(data[i]);
    }
  }
  return ready.concat(sold);
}

export default filterStock;