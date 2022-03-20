const url = 'https://hexschool.github.io/js-filter-data/data.json'
let data
const table = document.querySelector('.table-content')
let showData = []
let category = ''
const filter = document.querySelector('.filter')

this.axios.get(url)
  .then(function (res) {
    data = res.data.filter(a => a.作物名稱)
    renderData(data)
  })

filter.addEventListener('click', filterCategory)

function renderData (data) {
  let str = ''
  data.forEach(b => {
    const content = `
      <tr>
        <td>${b.作物名稱}</td>
        <td>${b.市場名稱}</td>
        <td>${b.上價}</td>
        <td>${b.中價}</td>
        <td>${b.下價}</td>
        <td>${b.平均價}</td>
        <td>${b.交易量}</td>
      </tr>
    `
    str += content
  })
  table.innerHTML = str
}

function filterCategory (e) {
  if (e.target.nodeName === 'BUTTON') {
    category = e.target.dataset.category
    showData = data.filter((i) => {
      return i.種類代碼 === category
    })
    renderData(showData)
  }
}
