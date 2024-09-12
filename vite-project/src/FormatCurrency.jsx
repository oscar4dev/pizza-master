
function FormatCurrency(value) {
   return new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD'
   }).format(value)
}

export default FormatCurrency